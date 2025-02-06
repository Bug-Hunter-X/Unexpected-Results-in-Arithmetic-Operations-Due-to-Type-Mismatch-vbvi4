# Unexpected Results in Arithmetic Operations Due to Type Mismatch

This repository demonstrates a common JavaScript error where a function performs arithmetic operations without properly checking the types of its input parameters.  The `foo` function attempts to add two values, but it doesn't explicitly check if these values are actually numbers. This can lead to unexpected results or runtime errors if non-numeric values are provided.

The `bug.js` file contains the buggy code. The `bugSolution.js` file shows the corrected version, including input validation.

## How to reproduce

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js`.
3. Run the code using a JavaScript interpreter (e.g., Node.js) and observe the results.