# React Shopping Cart App With Redux

## Overview
This project is a React-based shopping cart application designed to provide users with an interactive interface for browsing products, adding items to their cart, adjusting quantities, and managing their shopping experience efficiently.

## Features
- **Product Listing**: Display a comprehensive list of products with detailed information including title, price, description, and images.
- **Add to Cart**: Enable users to add products to their shopping cart with a single click.
- **Quantity Adjustment**: Allow users to adjust the quantity of items in their cart dynamically.
- **Remove from Cart**: Provide functionality to remove items from the shopping cart.
- **Total Price Calculation**: Automatically calculate and display the total price of items in the cart based on quantities and individual prices.
- **Responsive Design**: Ensure seamless user experience across various devices and screen sizes.

## Components
1. **App**: The main component of the application. It wraps the entire application and provides the context for product data using the `DataComponent`.

2. **DataComponent**: This component serves as a provider for product data. It utilizes React context to make the product data available throughout the application. The product data is passed down to child components, such as `CardComp`, to display the products.

3. **CardComp**: This component is responsible for rendering individual product cards. It displays product details such as title, price, description, and allows users to interact with the products by adding, removing, or adjusting quantities in the cart.

4. **NavBar**: This component displays a navigation bar at the top of the application. It shows the total quantity of items in the cart and provides a button to proceed to payment.

5. **Redux**: The application uses Redux for state management. It defines a slice called `BlogSlice` to manage the state of the shopping cart, including actions to add, remove, and adjust quantities of items in the cart.


## Installation
To run this application locally, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm or yarn.
4. Start the development server.
5. Open the application in your preferred web browser.

## Usage
Once the application is running, users can:
- Browse through the list of available products.
- Add desired items to their shopping cart.
- Adjust quantities of items in the cart as needed.
- Remove items from the cart if desired.
- View the total price of items in the cart.

## Technologies Used
- **React**: Frontend library for building user interfaces.
- **Redux**: State management library for managing application state.
- **React-Redux**: Official React bindings for Redux, enabling seamless integration of Redux with React components.
- **React Router**: Routing library for navigating between different views in a React application.
- **Bootstrap**: Frontend framework for building responsive and mobile-first websites.

## Contributing
Contributions to this project are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

