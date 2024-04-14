# Image Stylization

Based on the [Fast Style Transfer for Arbitrary Styles](https://www.tensorflow.org/hub/tutorials/tf2_arbitrary_image_stylization) TensorFlow tutorial.

## Usage

1. [Install Poetry](https://python-poetry.org/docs/#installing-with-pipx)
1. Install dependencies

   ```bash
   poetry install
   ```

1. Stylize images:

   ```bash
   poetry run image_stylization --style-image-dir ./images/styles --content-image-dir ./images/portraits --output-dir ./images/styled-portraits
   ```

## Formatting

1. Run [Black](https://black.readthedocs.io/en/stable/):

   ```bash
   poetry run black .
   ```

1. Run [isort](https://pycqa.github.io/isort/):

   ```bash
   poetry run isort .
   ```
