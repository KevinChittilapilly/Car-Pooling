# Car-Pooling

Welcome to the Car-Pooling Website that we designed as part of our project for Virtusa. 

Technology Stack Used: React, Spring, HTML, CSS, Bootstrap, Javascript, MySQL

We have used React as our Frontend and MySQL as the backend and connected both using Spring Framework


# Software Required

1. VSCode

2. MySql Workbench

3. Node


# Key Features of this Website

1. Secured Login/Logout features using <b>Oauth</b>. Sign-in using gmail is also enabled.

2. An easy to use <b>Interactive Chat-Bot</b> to help users.

3. <b>Admin Page</b> for uploading/editing/deleting any driver's entry

4. <b>Driver Login</b> for driver's to quickly check the passengers who are travelling with them.

5. <b>History Page</b> for user's to check their booked rides. They can also see the other users sharing their ride. They can also cancel their boooked rides.

6. A quick <b>Registration Page</b> for users.

7. <b>Stripe module</b> is used for handling payments which verifies card details and processes payments

8. <b>Feedback form</b> for users to rate and give their review on the website

9. <b>Email Confirmation</b> is sent to the user as well as the driver when any ride is booked or cancelled.

10. A <b>Search bar </b> for users to quickly find the ride they are looking for.  
 
# Steps to run the project:

1. Download the project as zip from the git repository.

2. Open the folder "react-frontend" in VsCode.

3. Install the node modules using command npm install
```
npm install
```
4. Install axios libray for dealing with calls to the databases and bootstrap
```
npm install axios
npm i react-bootstrap
```
5. Install react-router-dom and materialize css
```
npm install react-router-dom
npm i materialize-css
```
6. Intall Stripe module and auth
```
npm install stripe
npm i auth
```
7. Now run the project using
```
npm start
```
8. Open the two folders in spring-backend in VSCode

9. Create two empty database in MySQL Workbench and use those links in the application.properties file of spring projects

10. Run both the spring projects using the following command
```
mvn spring-boot:run
```
