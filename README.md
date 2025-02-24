
# **E-commerce Site**

A full-stack **E-commerce platform** built using the **MERN stack** (MongoDB, ExpressJS, ReactJS, NodeJS). This project provides a seamless online shopping experience with features like product browsing, cart management, secure payment processing and an admin panel for managing the platform.

---

## **Features**

### **User Features:**
- **User Authentication**: Secure login and registration using JWT.
- **Product Browsing**: View and search for products with filtering and sorting options.
- **Cart Management**: Add, update, and remove items from the shopping cart.
- **Order Management**: Place orders and view order history.
- **Payment Integration**: Secure payment processing using **Stripe API**.

### **Admin Features:**
- **Product Management**: Add, update and delete products.
- **Order Management**: View and update order statuses.
- **User Management**: Manage user accounts and roles.

---

## **Technologies Used**

### **Frontend:**
- **ReactJS**: For building a dynamic and responsive user interface.
- **Redux**: For state management across the application.

### **Backend:**
- **NodeJS**: For building a scalable server-side application.
- **ExpressJS**: For creating RESTful APIs.

### **Database:**
- **MongoDB**: For storing user, product, and order data.

### **Payment Integration:**
- **Stripe API**: For secure and efficient payment processing.

---

## **Installation and Setup**

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/whiteblueskyss/E-commerce-Site
   cd E-commerce-Site
   ```

2. **Install Dependencies**:
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the `backend` directory and add the following:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     STRIPE_SECRET_KEY=your_stripe_secret_key
     ```

4. **Run the Application**:
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd frontend
     npm start
     ```

5. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000`.

---

## **Usage**

1. **User Registration and Login**:
   - Register a new account or log in with existing credentials.

2. **Browse Products**:
   - Search, filter, and sort products to find what you need.

3. **Manage Cart**:
   - Add products to your cart, update quantities, or remove items.

4. **Place Orders**:
   - Proceed to checkout and securely pay using **Stripe**.

5. **Admin Panel**:
   - Manage products, orders, and users through the admin dashboard.

---
