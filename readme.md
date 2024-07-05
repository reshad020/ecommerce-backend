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
    "name": "Product Name",
    "description": "Product Description",
    "price": 100,
    "stock": 10
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
    "name": "Updated Name",
    "description": "Updated Description",
    "price": 150,
    "stock": 5
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
    "productId": "ProductID",
    "quantity": 2,
    "customerName": "Customer Name",
    "address": "Customer Address"
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

- **Update Order**

  ```
  PUT /api/orders/:id
  ```

  **Request Body:**

  ```json
  {
    "quantity": 3,
    "status": "Shipped"
  }
  ```

- **Delete Order**

  ```
  DELETE /api/orders/:id
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
