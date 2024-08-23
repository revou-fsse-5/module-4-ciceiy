# Multi-Step Registration Form

## Site

Visit the deployed project at: https://module-4-ciceiy.netlify.app/

## Project Overview

This project uses a dummy API with JSON Server, built with React, styled with Tailwind CSS, and includes form validation with Yup. It also integrates a UI library for enhanced functionality.

### 1. Register

If you don’t have an account, register using the multi-step registration form. If you already have an account, click "Log in" below the form.

### 2. Submit Personal Data

After registration, submit your personal information and you will be redirected to the login page.

### 3. Log In

Enter the username and password you registered with on the login page.

### 4. Access the Category Page

After successful login, you can navigate to the Category page where you can add, edit, or delete categories.

## Steps to Run the Project

### 1. Clone the Repository

- git clone https://module-4-ciceiy.netlify.app/
- cd [repo-folder]

### 2. Install Dependencies

- npm install _or_ yarn install

### 3. Start JSON Server

- npm start _or_ yarn start-server

### 4. Start React Development Server

- npm start _or_ yarn start

### 5. Access Application

- Open browser and visit http://localhost:3000 to access the react application.
- A small trivia, JSON Server and React Server are run in a different server. For JSON, I use 3001, and for React will be automatically start in 3000. It's important to make the JSON run!

## Technologies Used

- React: For building the UI.
- Tailwind CSS: For styling the form.
- Yup: For form validation.
- @mui/material, @mui/joy: Material components.
- @mui/icons-material: Material icons.
- Axios: For making HTTP requests.
- JSON Server: For providing a fake REST API.
- Express: For running a local server (if needed for additional server-side functionality).
