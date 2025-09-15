-- answers.sql
-- SIMPLE E-COMMERCE STORE DATABASE

------------------------------------------------------------
-- CREATE DATABASE
------------------------------------------------------------
CREATE DATABASE IF NOT EXISTS ecommerce_store;
USE ecommerce_store;

------------------------------------------------------------
-- USERS (customers)
------------------------------------------------------------
CREATE TABLE users (
  user_id     INT AUTO_INCREMENT PRIMARY KEY,
  full_name   VARCHAR(100) NOT NULL,
  email       VARCHAR(150) NOT NULL UNIQUE,
  password    VARCHAR(100) NOT NULL
);

------------------------------------------------------------
-- PRODUCTS
------------------------------------------------------------
CREATE TABLE products (
  product_id  INT AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  price       DECIMAL(10,2) NOT NULL,
  stock       INT NOT NULL DEFAULT 0
);

------------------------------------------------------------
-- ORDERS
------------------------------------------------------------
CREATE TABLE orders (
  order_id    INT AUTO_INCREMENT PRIMARY KEY,
  user_id     INT NOT NULL,
  order_date  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status      VARCHAR(50) DEFAULT 'Pending',
  CONSTRAINT fk_orders_user FOREIGN KEY (user_id)
    REFERENCES users(user_id) ON DELETE CASCADE
);

------------------------------------------------------------
-- ORDER ITEMS (one order can have many products)
------------------------------------------------------------
CREATE TABLE order_items (
  order_item_id INT AUTO_INCREMENT PRIMARY KEY,
  order_id      INT NOT NULL,
  product_id    INT NOT NULL,
  quantity      INT NOT NULL,
  unit_price    DECIMAL(10,2) NOT NULL,
  CONSTRAINT fk_items_order FOREIGN KEY (order_id)
    REFERENCES orders(order_id) ON DELETE CASCADE,
  CONSTRAINT fk_items_product FOREIGN KEY (product_id)
    REFERENCES products(product_id) ON DELETE RESTRICT
);

------------------------------------------------------------
-- PAYMENTS (one-to-one with orders)
------------------------------------------------------------
CREATE TABLE payments (
  payment_id   INT AUTO_INCREMENT PRIMARY KEY,
  order_id     INT NOT NULL UNIQUE,
  amount       DECIMAL(10,2) NOT NULL,
  method       VARCHAR(50) NOT NULL,
  paid_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_payments_order FOREIGN KEY (order_id)
    REFERENCES orders(order_id) ON DELETE CASCADE
);
