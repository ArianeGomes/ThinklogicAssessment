# Claim Form Automation Test

This project contains automated tests for the Claim Form application using WebdriverIO. The tests are written in JavaScript and use the Mocha framework for structuring the test cases.

## Project Purpose

The purpose of this project is to ensure the functionality of the Claim Form application by automating the submission process and verifying the expected outcomes.

## Setup

1. Download and run Git and Node.js installers
2. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
3. Install the dependencies:
    ```sh
    npm install
    npm init wdio@latest <project-path>
    ```
4. Run the tests:
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


**Failed Case - Missing Purchase**

- **Description**: Tests the submission of the claim form with missing purchase information.

- **Code**:
```sh
await claimForm.submit('Ariane', 'test@thinklogic.com', '', '', 'Ariane Gomes')
const element = await $('.container').getText();
await expect(element).toEqual(expect.stringContaining('Entries in list must be between 1 and 20.'));
```


## Conclusion

This project helps in automating the testing process for the Claim Form application, ensuring that the form submission works as expected under different scenarios. By running these tests, developers can quickly identify and fix issues, leading to a more reliable and robust application.
