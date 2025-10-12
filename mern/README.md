# 📚 PLP Bookstore - MongoDB Project

## 🧾 Description
This project demonstrates fundamental and advanced MongoDB operations using a **MongoDB Atlas cloud cluster** and **MongoDB Compass**.  
It includes:
- Creating a database and collections
- Performing CRUD operations
- Writing advanced queries (projection, sorting, pagination)
- Building aggregation pipelines
- Implementing indexing and analyzing query performance

---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites
- A **MongoDB Atlas account** (Free M0 cluster)
- **MongoDB Compass** installed on your computer  
  👉 [Download Compass](https://www.mongodb.com/products/compass)

---

### 2️⃣ Connect to MongoDB Atlas
1. Go to your Atlas cluster → **Connect** → **Connect with MongoDB Compass**  
2. Copy your connection string (it looks like this):

mongodb+srv://<username>:<password>@cluster0.mongodb.net/plp_bookstore

3. Replace `<username>` and `<password>` with your Atlas database user credentials.
4. Open **MongoDB Compass**, paste the connection string, and click **Connect**.

---

### 3️⃣ Create Database and Collection
Once connected in Compass:
1. Click **Create Database**
2. Database name: `plp_bookstore`
3. Collection name: `books`

---

### 4️⃣ Insert Sample Data
1. Open the **books** collection.
2. Click **Insert Document** → **JSON Mode**
3. Paste the content from `insert_books.js` 
Paste everything inside the [ ... ] part of the script above. 
(which contains 10+ sample book documents)
4. Click **Insert**

---

### 5️⃣ Run Queries
You can test queries in **Compass** under the **Filter** bar or using **Aggregations** and **Indexes** tabs.

Alternatively, you can run them using **Mongo Shell**:
```bash
mongosh "mongodb+srv://<username>:<password>@cluster0.mongodb.net/plp_bookstore"
load("queries.js")


NOTE: The code (queries.js) are meant for **Mongo Shell** if youre running the filter queries in **Compass** the structure should be like this:{ genre: "Thriller" }

