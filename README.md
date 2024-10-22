# Employee-Review-System
Employee review system web application is created to give reviews to the colleagues for their performances . 
There are two dashboard pages and based on the role of the employee those are rendered, `admin` can assign employees 
to participate in review of other employees. `Employees` only submit feedback assigned.
It is built using :

`NodeJs`, `ExpressJs`, `MongoDB`, `EJS` and `JavaScript`.

## Features:
+ Admin view 
  + Add/remove/update/view employees
  + Add/view performance reviews
+ Employee view
   + Submit Reviews and View Reviews
***
### Fork the project:
Clone the forked repository in your local system
# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install following packages:

```
npm install
```
 - To Run project command is :-
 
```
npm start
```
##### The project is running on the port number  provided by you like mine is `8000`.
***
### Structure of project:
```
|index.js
|package.json
|--assets
|        |--css
|        |--images
|        |--js
|--config
|   |--mongoose.js
|   |--middleware.js
|   |--passport-local-startegy.js
|--controllers
|   |--dashboard_controller.js
|   |--reviews_controller.js
|   |--users_controller.js
|--models
|   |--review.js
|   |--user.js
|--routes
|   |--index.js
|   |--reviews.js
|   |--users.js
|--views
|   |--layout
|   |--_header
|   |--admin_dashboard
|   |--employee_dashboard
|   |--addEmployee
|   |--edit_employee
|   |--forgetPassword
|   |--login
|   |--register
```
## Photos from the application:
1. Login/Register page
   ![Screenshot 2024-10-22 165525](https://github.com/user-attachments/assets/89e978f2-00c7-468d-8094-cc947a3bb4a0)

2. Admin dashboard page: where the admin can add employees and assign them to give reviews to others

   ![Screenshot 2024-10-22 165714](https://github.com/user-attachments/assets/31a12ad5-2b8f-4688-92df-93371507575a)

3. Employee dashboard page: where we get assignments to give reviews to our teammates

   ![Screenshot 2024-10-22 170408](https://github.com/user-attachments/assets/b90f95ee-26ff-4e61-93c6-7f782760ba0d)


   



