# Assignment: Build a Simple Product API Using JSON File Storage

## 🎯 Objective

Build a REST API using Node.js and Express.js that returns product data stored in a JSON file.

## 📋 Requirements

- Create a Node.js and Express.js application.
- Store product data in a JSON file.
- Create two REST API endpoints.
- Test the endpoints using Postman or Thunder Client.
- Upload the project to GitHub.

## 🛠️ Technologies

- Node.js
- Express.js
- JavaScript
- JSON File Storage
- Postman / Thunder Client
- Git & GitHub

## 📁 Project Structure

```text
product-api/
├── data/
│   └── products.json
├── controllers/
│   └── productController.js
├── routes/
│   └── productRoutes.js
├── app.js
├── package.json
└── README.md
```

## 📦 Product Data

Create a `products.json` file inside the `data` folder.

Each product should contain the following properties:

- `id` — Unique product ID
- `name` — Product name
- `description` — Product description
- `price` — Product price
- `category` — Product category
- `brand` — Product brand

Add at least five sample products.

## 🚀 Installation and Setup

### 1. Initialize the project

```bash
npm init -y
```

### 2. Install Express.js

```bash
npm install express
```

### 3. Start the server

```bash
node app.js
```

The server should run at:

`http://localhost:3000`

## 🔗 API Endpoints

### 1. Get All Products

**Method:** `GET`

**Endpoint:** `/api/products`

**URL:** `http://localhost:3000/api/products`

**Expected Response:**

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "name": "Wireless Headphones",
      "description": "High-quality wireless headphones",
      "price": 1999,
      "category": "Electronics",
      "brand": "SoundMax"
    },
    {
      "id": 2,
      "name": "Mechanical Keyboard",
      "description": "RGB mechanical keyboard",
      "price": 3500,
      "category": "Accessories",
      "brand": "KeyPro"
    }
  ]
}
```

### 2. Get a Single Product by ID

**Method:** `GET`

**Endpoint:** `/api/products/:id`

**Example URL:** `http://localhost:3000/api/products/1`

**Expected Response:**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Wireless Headphones",
    "description": "High-quality wireless headphones",
    "price": 1999,
    "category": "Electronics",
    "brand": "SoundMax"
  }
}
```

### Error Response

If the requested product does not exist, return HTTP status `404`.

```json
{
  "success": false,
  "message": "Product not found"
}
```

## 🧪 Testing Checklist

- [ ] Test `GET /api/products`.
- [ ] Test `GET /api/products/1`.
- [ ] Test another existing product ID.
- [ ] Test a non-existing product ID.
- [ ] Verify response data and HTTP status codes.
- [ ] Confirm that product data comes from the JSON file.

## ✅ Expected Outcome

The completed application should provide two working REST API endpoints that read product information from a JSON file and return the appropriate JSON responses.

## 📤 Submission

Submit the GitHub repository URL containing the source code and README file.

## 📝 Notes

- Use JSON file storage instead of a database.
- Keep routes and controllers separate.
- Write clean, readable, and reusable code.
- Handle missing products and file-reading errors appropriately.
- This assignment requires only GET endpoints; POST, PUT, and DELETE are not required.
