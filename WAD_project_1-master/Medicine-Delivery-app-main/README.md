# Medicine Delivery App

## Description

The Medicine Delivery app is designed to streamline the process of ordering
medicines online. It consists of two main pages: the Pharmacies page and the
Shopping cart page.

### Pharmacies page

On the Pharmacies page, users can browse through a list of available drug
stores. They have the option to select a specific store and add medicines to
their cart. The data for available medicines is fetched from the database.
Additionally, users can sort medicines by price and alphabet added for easier
navigation.

### Shopping Cart Page

The shopping cart page allows users to review all the medicines they have added
to their cart. They can remove items or change the quantity as needed. Users are
also prompted to provide their email, phone number, and address using input
fields. Once the user clicks the "submit" button, the order is saved in the
database. To enhance user experience, the cart contents are also saved in local
storage, ensuring that users can continue their order even if they navigate away
from the page.

## Installation

To run the Medicine Delivery app locally, follow these steps:

1. Navigate to the project directory:

```bash
cd Medicine-Delivery-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and visit `http://localhost:3000` to view the app.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- React Router: Declarative routing for React applications, enabling navigation
  between different pages.
- Redux Toolkit: A state management library for managing application state.
- Redux Persist: Used for persisting and rehydrating the Redux store, ensuring
  state persistence across sessions.
- Styled Components: A CSS-in-JS library for styling React components with
  scoped styles.
- [MockAPI](https://mockapi.io/): A platform for creating mock APIs, utilized as
  the database for fetching and storing application data.


## Contributor

- [Raj Waingankar](https://github.com/raj562004)
