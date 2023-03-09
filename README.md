### Task Description

MongoDB: To store the student data
Express: To build the server-side application
React: To build the client-side application
Node.js: To run the server-side application
Redux: To manage the state of the application
Mongoose: To model the student data and interact with the MongoDB database
React Router: To handle client-side routing
PDFKit: To generate the PDF file
json2xls: To export the data to an Excel file

1] Admin login via MongoDB dynamic module Use Redux for State management

- Create a login page with email and password fields
- Use Redux to manage the state of the login form and user data
- Create a MongoDB schema for the user data and save it to the database
- Implement authentication using Passport.js and JWT tokens

2] Add, edit and delete student record with Soft delete and Hard delete from the database

- Create a page to display a list of students
- Implement the ability to add, edit, and delete students
- Use Mongoose to model the student data and interact with the MongoDB database
- Implement soft delete by adding a deleted_at field to the student schema
- Implement hard delete by removing the student data from the database

3] Student wise result management

1. Select student name from List (Dynamic)

- Create a page to display a list of students
- Use React Router to handle client
- side routing to the student details page
- Use Mongoose to retrieve the student data from the database and display it on the page

2. Enter Subject wise marks

- Create a form to enter the subject wise marks for the student
- Use Redux to manage the state of the form data
- Implement validation for the form fields
- Use Mongoose to update the student data in the database with the new marks

4] Generate separate result PDF file and open in new tab with fetch result and student details

- Use PDFKit to generate the PDF file with the student details and result data
- Implement a button to download the PDF file or open it in a new tab

5] Excel export with student and result data (plugin)

- Use json2xls to export the student and result data to an Excel file
- Implement a button to download the Excel file

6] Student & result list (JSON API format Output for integration)

- Create an API to retrieve the student and result data in JSON format
- Implement authentication to ensure that only authorized users can access the API
- Use Mongoose to retrieve the student and result data from the database and return it in JSON format
