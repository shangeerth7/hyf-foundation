# Recipe Collection App – Component Explanation

## 1. Frontend

The frontend is the part of the application that users see and interact with.

- Users can create new recipes.
- Users can view all recipes and individual recipe details.
- Users can edit existing recipes.
- Users can delete recipes.
- The frontend sends HTTP requests to the backend.
- It displays the information received from the backend.

## 2. Backend

The backend handles requests from the frontend and processes recipe information.

- It receives HTTP requests from the frontend.
- It processes requests to create, read, update, and delete recipes.
- It communicates with the database.
- It saves new recipes.
- It retrieves existing recipes.
- It updates and deletes recipes.
- It sends HTTP responses back to the frontend.

## 3. Database

The database stores recipe information permanently.

- It stores recipe titles.
- It stores ingredients.
- It stores cooking instructions.
- It provides recipe information when requested by the backend.
- It saves new recipes.
- It updates and deletes existing recipes.

## 4. How Frontend and Backend Communicate

The frontend communicates with the backend using HTTP requests and responses.

The frontend sends requests using HTTP methods such as GET, POST, PUT, and DELETE.

The backend processes these requests and sends responses back to the frontend.

## 5. What Happens When a User Adds a New Recipe?

1. The user clicks the "Add Recipe" button.
2. The frontend sends a POST /recipes request with the recipe data.
3. The backend receives and processes the request.
4. The backend saves the recipe in the database.
5. The database confirms that the recipe has been saved.
6. The backend sends a success response to the frontend.
7. The frontend updates the page and displays the new recipe.