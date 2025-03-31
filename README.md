# React + Vite

My project is a simple Fake_App built using **React**, **React Router**, and the **FakeStoreAPI**.I wanted to create a simple but yet fun website that people can view producs, add, edit, and delete them. 

This app does not include a backend, just **FakeStoreAPI** to manage product data. 

---

## Features



1. View a list of all products on the **Products Page**. 
2. View detailed info of the products on the  **Product Details Page**. 
3. Add new products using the **Add Product Page**. 
4. Edit existing products through the **Edit Product Page**. 
5. Delete products from the store using the **Delete Button**  
6. cool and simple Navbar **responsive Navbar**.
7. repsonsive website to all devices 

---

## Technologies Used



- **React**
- **React Bootstrap**
- **Bootstrap** 
---

## Installation

Before running the application, make sure you have **Node.js** and **npm** installed on your machine!!

1. Clone this repository to your local machine:

```
git clone https://github.com/dielac/FakeStore_App
```

2. Navigate into the project directory:

```
cd fakestore-app
```

3. Install the necessary packages:

```
npm install
```

4. Start the development server:

```
npm run dev
```

The terminal will show a http:localhost or something similar then you just click onto that and look at my website !!

---

## Project Structure


- **/src** -contains all the codes
  - **/components** - has alot of the important pages for the website
  - **/assets** - files and pics.
  - **/styles** -styles the app
  - **App.js** - The most important page for the app
  - **index.js** - Renders the app 

---



#### Endpoints Used:

1. Fetch all products: 
   ```
   GET https://fakestoreapi.com/products
   ```
2. Fetch product details:
   ```
   GET https://fakestoreapi.com/products/:id
   ```
3. Add a new product:
   ```
   POST https://fakestoreapi.com/products
   ```
4. Update an existing product:
   ```
   PUT https://fakestoreapi.com/products/:id
   ```
5. Delete a product:
   ```
   DELETE https://fakestoreapi.com/products/:id
   ```

---




## Known Issues and Improvements

1. I had an issue getting the header and footer to go across the screen and not just halfway through but with some styling i ended up fixing it!

## Contribution

If you have any questions you can message me on GitHub or email me at suziecamaj@yahoo.com!!!
---




