# Redux Feedback Loop
This is a web application designed to collect and manage user feedback. It provides a feedback submission process to submit feedback to a database.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)

## Features
- Endless Feedback Loop : Allows users to continuously provide feedback.
- Input Validation: Ensures that user input is validated before processing.
- Automated Testing: Utilizes the Cypress Suite for automated testing.
    Run this to try it out! -
    ```shell
    npm test
    ```
    
- Admin Page: Provides an interface for administrators to view all feedback.
- Delete Functionality: Enables the deletion of stored feedback.

## Technologies Used
- `HTML, CSS, JavaScript`: Fundamental web development languages.
- `React`: Front-end library for building user interfaces.
- `Redux`: State management library for maintaining semi-permanent state across pages.
- `MUI (Material-UI)`: React component library for implementing Material Design.
- `JSON`: Data format used for storing and transporting data.
- `Axios`: Library for making HTTP requests to the server.
- `Node.js, Express`: Backend technologies for server-side logic.
- `PostgreSQL`: Database management system used for storing feedback.
- `Cypress Suite`: Automated testing suite for testing application functionality.

## Installation
### 1. Make a copy of this repository to your profile.
Click the fork button on the top right of this repository to make a copy to your profile.
### 2. Clone your forked repository.
-   In your Command Line Interface(CLI) type:
    ```shell
    git clone
    ```
    followed by the ssh link that you may find 
    by clicking the green `code` button on your forked 
    GitHub repository. (ensure your SSH key is created before trying this.)
### 3. Change directory into the project.
-   In your CLI type:
    ```shell
    cd redux-feedback-loop
    ```
    and hit enter.
### 4. Install Dependencies
-   Install the required dependencies using:
    ``` shell
    npm install
    ```
### 5. Create your database.

- The name of the database should be `prime-feedback`, and you can set up your table using the provided `database.sql` file.

### 6. Start it up!
- Start up the server with:
    ``` shell
    npm run server
    ```
- Start up the client side using:
    ``` shell
    npm run client
    ```
- Navigate to `http://localhost:5173/` in your preferred web-browser and get going!

## Usage
- Feeling, Understanding, and Support Pages: Users must provide an answer to proceed to the next page.
- Comments Page: Optional page for additional comments.
- Review Feedback: Review feedback before adding it to the database.
- Thank You Page: After submitting feedback, users have the option to provide additional feedback, creating a loop.
- Admin Page:`/admin` allows the "admin" to view all feedback stored in the database and delete if needed.

[Back to Top](#redux-feedback-loop)