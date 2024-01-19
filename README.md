# Homes App

## Overview

The Homes App is a full-stack web application that displays information about realtors and homes. It provides features for sorting, viewing, creating, updating, and deleting homes. The application has been designed to be user-friendly and efficient.

## Technologies Used

The Homes App utilizes the following technologies:

- **Frontend**:

  - React
  - React Router

- **Backend**:
  - Express.js
  - Knex.js (for database queries)
  - PostgreSQL (as the database)
  - CORS (Cross-Origin Resource Sharing)
  - Dotenv (for managing environment variables)

## Features

- **Home Listing**: The homepage displays a list of homes, each showing basic details.

- **Sorting**: Users can sort the list of homes by price or registration date using a dropdown menu.

- **View Home Details**: Clicking on a home redirects the user to a detailed page that displays information about both the realtor and the home.

- **Create Home**: Users can create new home listings by filling out a form.

- **Update Home**: Existing home listings can be updated with new information.

- **Delete Home**: Homes can be deleted, but there's middleware to prevent the deletion of the first 8 homes for added security.

## Local Installation

To run the Homes App locally, follow these steps:

1. **Clone the repository**:

   git clone <repository_url>
   cd homes-app
   Install dependencies for both the frontend and backend:

### Inside the root directory

npm install

### Inside the "client" directory

cd client
npm install

Create a PostgreSQL database and set up the necessary environment variables. Rename them to .env and configure the database connection. Migrate and seed.

### Start the backend server:

npm start run:dev

### Start the React development server for the frontend:

npm start

## Achievements

    Developed a full-stack web application with features for listing, sorting, viewing, creating, updating, and deleting home listings.

    Implemented middleware to prevent the deletion of the first 8 homes for data safety.

    Utilized React for the frontend and Express.js with PostgreSQL for the backend, ensuring a robust and efficient application.

    Enabled a seamless user experience with React Router for navigation.

    Incorporated fetch for making API requests, making the application more responsive.

    Achieved a user-friendly design with smooth navigation and clear information display.
