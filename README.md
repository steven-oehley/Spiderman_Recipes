# Spiderman's Recipes

## About

Spiderman's Recipes is a React-based web application that allows users to explore, search, and create recipes. The project leverages modern web development technologies, including React, Tailwind CSS, and React Router.

## Features

- Recipe Listing: Browse a list of recipes with details like cooking time, ingredients, and methods.
- Search Functionality: Filter recipes based on search queries.
- Create Recipe: Add new recipes with a user-friendly form.
- Theme Toggle: Switch between light and dark themes for better user experience.

## Installation

#### Clone the repository:

```
git clone https://github.com/steven-oehley/Spiderman_Recipes.git
```

#### Navigate to the project directory:

```
cd Spiderman_Recipes
```

#### Install dependencies:

```
npm install
```

#### Running the Project

1. First run json-server

```
json-server --watch ./data/db.json
```

2. Then start the development server, run:

```
npm start
```

React will ask if it can start on another port - select Yes
This will launch the application at http://localhost:3001.

## Project Structure

- src/components: Contains reusable components like Navbar, Search, RecipeList, and RecipeCard.
- src/pages: Contains main pages like HomePage, RecipePage, and CreatePage.
- src/context: Contains the ThemeContext for managing light and dark themes.
- src/hooks: Contains custom hooks like useFetch for fetching data and useTheme for accessing theme context.

## Theme Management

The project uses a ThemeContext to manage light and dark themes. The theme can be toggled using a button in the Navbar.

ThemeContext.js

```
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    if (mode === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

useTheme.js

```
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
```

## Components and Pages

- Navbar.js
  Handles the navigation bar, including the theme toggle button.

- Search.js
  Search input component with conditional styling based on the theme.

- RecipeList.js
  Displays a list of recipe cards.

- RecipeCard.js
  Displays details of a single recipe.

- HomePage.js
  Displays the list of recipes and handles search filtering.

- RecipePage.js
  Displays a single recipe in detail.

- CreatePage.js
  Form for adding a new recipe.
