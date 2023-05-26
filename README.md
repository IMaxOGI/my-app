## Inventory Management App

## Description
This is a web application designed for inventory management. It allows tracking orders and products, as well as their relationships. The application also provides real-time dynamic information about the time and the number of active application sessions. The project is divided into server and client parts, united by Docker.

## Technologies
- JavaScript
- HTML & CSS
- React.js
- Node.js
- Express.js
- Socket.io
- Docker
- Redux

## Installation
To install the project, you will need Docker. Follow these steps:

1. Clone the repository: `git clone <link to your repository>`
2. Go to the project directory: `cd <project name>`
3. Go to the Docker directory: `cd .docker`
4. Build and start the Docker images: `docker-compose up --build`

After running the `docker-compose up --build` command, the application will be available at `localhost:3000`.

## Usage
The project is a web application that can be opened in a browser. After installation, you can access the application by opening a browser and navigating to `http://localhost:3000`. There are two main pages: Orders and Products. Each page displays the corresponding entities with the possibility of viewing details.

## Components
Here are a few of the main components in this application:

- **NavigationMenu Component**: The NavigationMenu component creates the sidebar navigation in the application. This component uses react-router-dom to route between different pages like Orders and Products. The component also shows the active page based on the current location.

- **CustomModal Component**: The CustomModal component creates a modal that pops up when an action requires confirmation from the user. This is currently used when an order is being deleted. The modal displays a confirmation message, and the user has the options to confirm or cancel the action. This component has been designed with reusability in mind, and can be used for other types of confirmation as well.

- **Products Component**: This component is responsible for displaying all the products in your inventory. It uses a filter to allow users to filter products by type (e.g., mouse, monitors, keyboard). The user can delete a product by clicking on the trash icon. The deletion process involves the use of Redux and the deleteProduct function from the products slice.

- **Orders Component**: This component displays all the orders. For each order, it shows related products, the total cost in USD and UAH, and the date of the order. It also provides the ability to toggle details of an order, showing each product included in that order. It uses a Modal to confirm deletion of an order, calling the deleteOrder function from the orders slice upon confirmation.

## Contributions
If you want to contribute to the project, please create a branch and make a Pull Request.

## License
License information will be added.

## Project Structure
- `/client`: This directory contains the client part of the application. Here are all the application components such as NavigationMenu, TopMenu, Orders, and Products.
- `/server`: This directory contains the server part of the application.
- `app.js`: This file is the main file of the client part of the application, where you can see examples of fields and the relationship of Orders to Products.
- `Dockerfile`: These files (one in each of the client and server directories) are used to create Docker images for the client and server parts respectively.
- `docker-compose.yml`: This file is used to define and run multi-container Docker applications.
