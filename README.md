# User Registration Application

This is a React-based user registration application that allows users to view a list of registered users, add new users, update existing users, and delete users. The application uses a local JSON file as the data source, with JSON Server providing a mock REST API.

## Features

- **User Listing**: Display a list of registered users with their name, email, and date of birth.
- **User Creation**: Add new users with name, email, and date of birth.
- **User Updating**: Edit the details of existing users.
- **User Deletion**: Remove users from the system.
- **Responsive Design**: The application is designed to work well on various screen sizes.
- **Error Handling**: Display success or error messages for all user-related operations.
- **Loading States**: Show loading indicators while fetching or updating user data.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
```
git clone https://github.com/your-username/user-registration-app.git
```

2. Navigate to the project directory:
```
cd user-registration
```

3. Install the dependencies:
```
npm install
```

4. Start the development server and JSON Server:
```
npm run start
npm run server
```

The application will be available at `http://localhost:3000`, and the JSON Server will be running at `http://localhost:3001/users`.

## Project Structure

- `src/`: Contains the main application code
  - `components/`: Reusable React components
    - `UserList.jsx`: Displays the list of registered users
    - `UserForm.jsx`: Handles user creation and editing
  - `App.jsx`: The main application component
- `db.json`: The local JSON file used as the data source
- `package.json`: Project dependencies and scripts

## Contributing

If you find any issues or have suggestions for improvements, feel free to create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).