# EmployWise User Management

## Project Overview
This is a React-based user management application integrating with the Reqres API. It allows users to log in, view a paginated list of users, edit user details, and delete users.

## Features
- **Authentication:** Login with provided credentials and store the token.
- **User List:** Fetch and display users in a paginated manner.
- **Search Users:** Search users by name.
- **Edit Users:** Modify user details and update them.
- **Delete Users:** Remove users from the list.
- **Logout:** Allows users to log out securely.

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- npm (comes with Node.js) or yarn

### Steps to Run the Project
1. Clone the repository:
   
   git clone https://github.com/your-username/employwise-user-management.git
   
2. Navigate to the project directory:
   
   cd employwise-user-management
   
3. Install dependencies:
   
   npm install
   
4. Start the development server:
   
   npm start
  
5. Open your browser and go to:
   
   http://localhost:3000
   

## Folder Structure

Employwise-user-management/
│── public/
│   ├── index.html
│── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── UsersList.js
│   │   ├── EditUser.js
│   ├── styles/
│   │   ├── styles.css
│   ├── App.js
│   ├── index.js
│── package.json
│── README.md


## API Endpoints Used
- **Login:** `POST /api/login`
- **Get Users:** `GET /api/users?page=1`
- **Edit User:** `PUT /api/users/{id}`
- **Delete User:** `DELETE /api/users/{id}`

## Assumptions & Considerations
- The login credentials are fixed:
  - **Email:** eve.holt@reqres.in
  - **Password:** cityslicka
- Data persistence is handled via local storage for the login token.
- Users can navigate through paginated data using "Previous" and "Next" buttons.
- The application UI is styled with CSS for a clean and responsive look.

## Deployment
This project can be hosted using services like:
- **Netlify**
- **Vercel**
- **GitHub Pages**

Deployment on Vercel

This project is deployed on Vercel. You can access it at:

Live Demo : https://employwise-user-management-one.vercel.app/

Steps to Deploy on Vercel:

Install the Vercel CLI:

npm install -g vercel

Login to Vercel:

vercel login

Deploy the project:

vercel

Follow the on-screen instructions to complete the deployment.
   

## License
This project is open-source and free to use.

## Contact
For issues or contributions, feel free to open a pull request or raise an issue on GitHub.

Depl
