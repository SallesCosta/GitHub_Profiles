# GitHub Profiles Viewer

GitHub Profiles Viewer is a React application designed to explore user repositories on GitHub in a user-friendly manner.

## Features

- Browse user repositories by submitting a username through a form.
- Implement a pagination system that displays 9 repositories per page.
- Display repository details on individual cards, including title, user description, and primary programming language.

## Technologies Used

- React
- TypeScript
- Vite (Build Tool)
- Styled-components
- Chakra UI (Component Library)
- Jest (Testing Framework)
- React-Testing-Library
- Husky (Git Hooks)
- React-Router (Routing)

## Project Architecture

The project architecture is organized into the following folders:

- `src/pages`: Contains the page components.
- `src/ui`: Houses the reusable UI components.
- `src/helpers`: Holds utility/helper functions.
- `src/components`: Contains components used across multiple pages.

## Target Audience

This application is tailored for users who want to conveniently visualize a GitHub user's repository list through an aesthetically pleasing interface.

## Challenges

The development process did not encounter any major challenges.

## State Management

The application utilizes the Context API for state management, reducing unnecessary prop-drilling.

## Responsiveness

The application is responsive with breakpoints set at `1030px` and `1215px`. It follows a "mobile-first" design approach, adapting smoothly for screens smaller than `1030px`.

## Getting Started

To run the project locally, follow these steps:

1. Clone this repository.
2. Navigate to the project folder: `cd GitHub-Profiles`.
3. Install dependencies: `yarn`.
4. Start the development server: `yarn dev`.
5. Access the application at: `http://localhost:3000`.

Feel free to explore and enhance the application as needed. If you encounter any issues or have suggestions, please open an issue or submit a pull request.

Happy coding!

