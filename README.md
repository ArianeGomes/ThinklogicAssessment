# Claim Form Automation Test

This project contains automated tests for the Claim Form application using WebdriverIO. The tests are written in JavaScript and use the Mocha framework for structuring the test cases.

## Project Purpose

The purpose of this project is to ensure the functionality of the Claim Form application by automating the submission process and verifying the expected outcomes.

## Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Run the tests:
    ```sh
    npx wdio run wdio.conf.js
    ```

## Test Cases

**Successful Submission**

- **Description**: Tests the successful submission of the claim form with all required fields filled.

- **Code**:
```sh
await claimForm.submit('Ariane', 'test@thinklogic.com', '08/09/2024', 'CA', 'Ariane Gomes')
const element = await $('.container').getText();
await expect(element).toEqual(expect.stringContaining('Your claim has been submitted.'));
```


**Failed Case - Missing Info**

- **Description**: Tests the submission of the claim form with missing required information.

- **Code**:
```sh
await claimForm.submit('Ariane', '', '08/09/2024', 'CA', '')
const element = await $('.container').getText();
await expect(element).toEqual(expect.stringContaining('*required'));
```


## Conclusion

This project helps in automating the testing process for the Claim Form application, ensuring that the form submission works as expected under different scenarios. By running these tests, developers can quickly identify and fix issues, leading to a more reliable and robust application.

