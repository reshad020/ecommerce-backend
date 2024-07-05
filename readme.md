# E-Commerce Backend

This is a simple e-commerce backend application for managing products and orders. It provides basic CRUD operations for products and orders.

## API Endpoints

### Products

- **Create Product**

  ```
  POST /api/products
  ```

  **Request Body:**

  ```json
  {
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
      {
        "type": "Color",
        "value": "Midnight Blue"
      },
      {
        "type": "Storage Capacity",
        "value": "256GB"
      }
    ],
    "inventory": {
      "quantity": 50,
      "inStock": true
    }
  }
  ```

- **Get All Products**

  ```
  GET /api/products
  ```

- **Get Product by ID**

  ```
  GET /api/products/:id
  ```

- **Update Product**

  ```
  PUT /api/products/:id
  ```

  **Request Body:**

  ```json
  {
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
      {
        "type": "Color",
        "value": "Midnight Blue"
      },
      {
        "type": "Storage Capacity",
        "value": "256GB"
      }
    ],
    "inventory": {
      "quantity": 50,
      "inStock": true
    }
  }
  ```

- **Delete Product**

  ```
  DELETE /api/products/:id
  ```

### Orders

- **Create Order**

  ```
  POST /api/orders
  ```

  **Request Body:**

  ```json
  {
    "email": "level2@programming-hero.com",
    "productId": "5fd67e890b60c903cd8544a3",
    "price": 999,
    "quantity": 1
  }
  ```

- **Get All Orders**

  ```
  GET /api/orders
  ```

- **Get Order by ID**

  ```
  GET /api/orders/:id
  ```
