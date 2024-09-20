# Recipe Sharing Platform

This project is a Recipe Sharing Platform built using React and Tailwind CSS. The platform allows users to browse, view, and add recipes. Each recipe includes details such as ingredients, cooking instructions, and images. The app features responsive design and form validation to ensure a user-friendly experience across devices.

## Table of Contents
- Features
- Mockups
- Technologies Used
- Installation
- Usage
- Contributing
- License

## Features
- **Home Page**: Displays a grid of recipe cards with a title, image, and short summary.
- **Recipe Detail Page**: Displays full details of a selected recipe, including ingredients and preparation steps.
- **Add Recipe Page**: Users can submit new recipes through a responsive form with validation.
- **Responsive Design**: The layout adjusts to work well on both mobile and desktop devices.
- **Mock Data**: Pre-populated with sample recipes from a static JSON file.

## Mockups

### Home Page
The Home Page displays all the recipes in a grid layout. Users can click on each recipe to view its details.

!Home Page Mockup

### Recipe Detail Page
The Recipe Detail Page shows all the information about a specific recipe, including ingredients and instructions.

!Recipe Detail Page Mockup

### Add Recipe Form
The Add Recipe Form allows users to submit their recipes. The form includes validation for required fields.

!Add Recipe Form Mockup

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation front-end tooling for fast development.
- **Tailwind CSS**: Utility-first CSS framework for designing responsive layouts.
- **React Router**: Declarative routing for React applications.
- **JSON**: Static mock data for testing and prototyping.

## Installation

## Usage
- Home Page
- The home page displays a list of recipes fetched from a static data.json file. Each recipe card includes an image, title, 
 and summary. Clicking on a recipe card redirects to the Recipe Detail Page.

- Recipe Detail Page
  The detail page displays the selected recipe’s full information, including a list of ingredients and instructions.

- Add Recipe
  The “Add Recipe” page provides a form to add a new recipe. Form validation ensures that users provide a title, at least two ingredients, and instructions. After submission, the form data is logged in the console for now (future implementation could include saving the recipe).


## Clone the repository:
``bash
git clone https://github.com/your-username/recipe-sharing-platform.git
cd recipe-sharing-platform

## Install dependencies:
- npm install

Start the development server:
npm run dev

## Project Structure
- The project directory is organized as follows:

src/
│
├── components/
│   ├── HomePage.jsx          # Home Page component
│   ├── RecipeDetail.jsx      # Recipe Detail Page component
│   ├── AddRecipeForm.jsx     # Add Recipe Form component
│
├── data.json                 # Mock recipe data
├── App.js                    # Main App component with routing
├── index.css                 # Tailwind CSS imports
├── main.jsx                  # React app entry point

## Contributing
- Contributions are welcome! Here’s how you can help:

- Fork the repository.
- Create a new branch.
- Make your changes.
- Submit a pull request.
  
## License
- This project is licensed under the MIT License. See the LICENSE file for more information.



