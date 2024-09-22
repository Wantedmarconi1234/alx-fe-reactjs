# GitHub User Search Application

A React-based application to search for GitHub users using the GitHub API. This app allows users to search for GitHub profiles and retrieve detailed information such as username, avatar, location, and repository count. Advanced search options allow filtering by location and repository count.

## Features

- Search for GitHub users by username.
- Advanced search options (location, repository count).
- Display user information such as avatar, username, location, and repositories.
- Responsive and user-friendly interface.
- Error handling and loading state management.
- Built with React, Axios for API calls, and Tailwind CSS for styling.

## Demo

You can access the live version of the application [here](https://your-app-url.vercel.app).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run the GitHub User Search Application locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/github-user-search.git
   cd github-user-search

## Install dependencies:

- npm install
- Create a .env file in the root of your project:

- REACT_APP_GITHUB_API_KEY=<your-github-api-key>
- Replace <your-github-api-key> with your personal GitHub API key.

## Run the development server:

- Visit the app in your browser at http://localhost:5173.

# Usage
-Enter a GitHub username in the search bar to find user profiles.
- Optionally, use advanced search filters to refine the search based on location and repository count.
- View the results displaying the user's avatar, username, location, and number of repositories.
- Click the user's username to visit their GitHub profile.
  
## Project Structure
csharp
Copy code
.
├── public/               # Public assets
├── src/
│   ├── components/       # React components (Search, UserCard, etc.)
│   ├── services/         # API service (githubService.js)
│   ├── App.jsx           # Main App component
│   └── index.jsx         # React entry point
├── .gitignore            # Git ignore file
├── package.json          # NPM scripts and dependencies
├── README.md             # Project documentation
└── vite.config.js        # Vite configuration

- Environment Variables
- To use the GitHub API, you'll need to provide an API key.

- Create a .env file in the root of your project.
- Add your GitHub API key as follows:
- REACT_APP_GITHUB_API_KEY=your_github_api_key
  
## API Integration
- This app uses the GitHub API to fetch user data. Here’s the API endpoint utilized:

- User Search API: Fetch user data by username or advanced search filters (location and repo count).
  
Endpoints used:
Get basic user info by username:

- https://api.github.com/users/{username}
- Advanced search (location, repos):
-https://api.github.com/search/users?q={query}

## Deployment
- The app is deployed on Vercel. Follow these steps to deploy:

## Contributing
- Contributions are welcome! If you want to improve the project or add new features, feel free to fork the repository and submit a pull request.

## Steps to contribute:
- Fork the repository.
- Create a new branch for your feature or bugfix.
- Commit your changes.
- Push the branch and open a pull request.
  
## License
- This project is licensed under the MIT License. See the LICENSE file for details.

