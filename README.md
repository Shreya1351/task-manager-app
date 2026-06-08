# Task Manager App ✨

A full-stack task management application with user authentication, built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

Author
Shreya Rana

---

Technologies Used
- React.js:- Frontend UI 
-Node.js:- Backend runtime
-Express.js:- Backend framework
-MongoDB Atlas:- Database 
-JWT:- Authentication 
-Axios:- API calls 
-React Router:- Page navigation

Features

- User Registration & Login
- JWT Authentication
- Create, Read, Update, Delete Tasks
- Mark Tasks as Completed/Pending
- Search Tasks by Title
- Filter Tasks by Status (All/Pending/Completed)
- Responsive Design (Mobile Friendly)
- Modern Girly-Pop UI

Prerequisites

Before you begin, ensure you have the following installed:
-Node.js (v14 or higher) :- https://nodejs.org/ 
-Git (optional) :- https://git-scm.com/ 
-MongoDB Atlas Account (free) :- https://www.mongodb.com/atlas 


Complete Setup Instructions

Step 1: Clone the Repository

```bash
git clone https://github.com/Shreya1351/task-manager-app.git
cd task-manager-app
```
Step 2: Backend
2.1 Navigate to backend folder
```cd backend```
2.2 Install dependencies
```npm install```
2.3 Create Environment Variables File
Create a file named .env in the backend folder with the following content:
```
PORT=5001
MONGODB_URI=your_mongodb_connection_string_here
JWT_SECRET=your_super_secret_key_here
```
2.4 Get MongoDB Connection String
-Log in to MongoDB Atlas
-Click on your cluster → Connect → Connect your application
-Copy the connection string
-Replace your_mongodb_connection_string_here in .env file
-Replace <password> in the connection string with your database user password
2.5 Start Backend Server
```npm run dev```
Step 3: Frontend Setup
3.1 Navigate to frontend folder (new terminal)
```cd frontend```
3.2 Install dependencies
```npm install```
3.3 Start Frontend Application
```npm start```
3.4 Open in Browser
Go to: http://localhost:3000

How to Use the Application

1. Register a New Account
-Click "Register" link
-Enter your Name, Email, and Password
-Click "Register" button

2. Login
-Enter your registered Email and Password
-Click "Login" button

3. Manage Tasks
-Action:	How to do it
-Add Task:	Enter title (optional description) → Click "Add Task"
-Complete Task:	Click "✓ Complete" button
-Edit Task:	Click "Edit" button → Modify → Click "Save"
-Delete Task:	Click "Delete" button → Confirm
-Search Task:	Type in search box
-Filter Tasks:	Select "Pending"/"Completed" from dropdown

4. Logout
Click "Logout" button in the top right corner

## Screenshots

Register Page
<img width="958" height="480" alt="Screenshot4" src="https://github.com/user-attachments/assets/cafc986c-070b-4f3b-a1a7-dd05a9bd78d2" />

Login Page
<img width="958" height="484" alt="Screenshot5" src="https://github.com/user-attachments/assets/0a0330d0-049f-43ac-95ab-d66058cc5f32" />

Dashboard
<img width="950" height="482" alt="Screenshot1" src="https://github.com/user-attachments/assets/f9857a30-39cd-4650-985d-3ec7485de518" />

Search & Filter
<img width="947" height="448" alt="Screenshot2" src="https://github.com/user-attachments/assets/56622a3d-7a6b-4168-8961-de599c03cbaf" />
<img width="955" height="478" alt="Screenshot3" src="https://github.com/user-attachments/assets/0f5bdea1-28b4-412b-9f60-54633a56a656" />




