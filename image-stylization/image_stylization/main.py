import argparse
import functools
import os

import numpy as np
import tensorflow as tf
import tensorflow_hub as hub


def crop_center(image):
    """Returns a cropped square image."""
    shape = image.shape
    new_shape = min(shape[1], shape[2])
    offset_y = max(shape[1] - shape[2], 0) // 2
    offset_x = max(shape[2] - shape[1], 0) // 2
    image = tf.image.crop_to_bounding_box(
        image, offset_y, offset_x, new_shape, new_shape
    )
    return image


@functools.lru_cache(maxsize=None)
def load_image(image_path, image_size=(256, 256)):
    """Loads and pre-processes images."""
    # Load and convert to float32 numpy array, add batch dimension, and normalize to range [0, 1].
    img = tf.io.decode_image(tf.io.read_file(image_path), channels=3, dtype=tf.float32)[
        tf.newaxis, ...
    ]
    img = crop_center(img)
    img = tf.image.resize(img, image_size, preserve_aspect_ratio=True)
    return img


def parse_content_image_filename(name: str) -> tuple[int, int, str]:
    """
    Parse the specified filename into its year and index.

    Example:
    >>> parse_content_image_filename("2024_01.jpg")
    (2024, 1, "2024_01.jpg")
    """
    if not name.endswith(".jpg"):
        return None

    year, end = name.split("_")
    index = end.split(".")[0]

    return int(year), int(index), name


def main():
    print("TF Version: ", tf.__version__)
    print("TF Hub version: ", hub.__version__)
    print("Eager mode enabled: ", tf.executing_eagerly())
    print("GPU available: ", tf.config.list_physical_devices("GPU"))

    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--style-image-dir",
        type=str,
        help="directory path containing style images",
        required=True,
    )
    parser.add_argument(
        "--content-image-dir",
        type=str,
        help="directory path containing content images",
        required=True,
    )
    parser.add_argument(
        "--output-dir",
        type=str,
        help="output directory path",
        required=True,
    )

    args = parser.parse_args()

    hub_module = hub.load(
        "https://kaggle.com/models/google/arbitrary-image-stylization-v1/frameworks/TensorFlow1/variations/256/versions/1"
    )

    style_image_size = (256, 256)
    content_image_size = (512, 512)

    print(f"Loading style images: {args.style_image_dir}")
    style_images = []

    for file in os.listdir(args.style_image_dir):
        name, extension = file.split(".")

        if not extension == "jpg":
            continue

        style_image_url = "file://" + os.path.abspath(
            os.path.join(args.style_image_dir, file)
        )
        style_image = load_image(style_image_url, style_image_size)
        style_images.append((name, style_image))

    np.random.shuffle(style_images)

    print(f"Stylize content images: {args.content_image_dir}")
    content_image_names = list(
        filter(
            None, map(parse_content_image_filename, os.listdir(args.content_image_dir))
        )
    )
    content_image_names.sort(key=lambda x: (x[0], x[1]))  # sort by year, then index

    for i, (year, index, file) in enumerate(content_image_names):
        content_image_url = "file://" + os.path.abspath(
            os.path.join(args.content_image_dir, file)
        )
        content_image = load_image(content_image_url, content_image_size)

        style_name, style_image = style_images[i % len(style_images)]
        stylized_image = hub_module(
            tf.constant(content_image), tf.constant(style_image)
        )[0]

        os.makedirs(args.output_dir, exist_ok=True)
        output_image_file = os.path.join(
            args.output_dir, f"{year}_{index:02d}_{style_name}.jpg"
        )
        print(f"Saving stylized image: {output_image_file}")
        tf.keras.preprocessing.image.save_img(output_image_file, stylized_image[0])
