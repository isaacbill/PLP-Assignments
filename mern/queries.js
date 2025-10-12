// ========================================
// PLP Bookstore - MongoDB Queries
// Author: Isaac Okeyo
// Database: plp_bookstore
// Collection: books
// ========================================


// ==========================
// 📘 BASIC CRUD OPERATIONS
// ==========================

// 1️⃣ Find all books in a specific genre
db.books.find({ genre: "Thriller" })

// 2️⃣ Find books published after a certain year
db.books.find({ published_year: { $gt: 2015 } })

// 3️⃣ Find books by a specific author
db.books.find({ author: "Tara Westover" })

// 4️⃣ Update the price of a specific book
db.books.updateOne(
  { title: "Educated" },
  { $set: { price: 15.99 } }
)

// 5️⃣ Delete a book by its title
db.books.deleteOne({ title: "The Silent Patient" })



// ==========================
// 🚀 ADVANCED QUERIES
// ==========================

// 1️⃣ Find books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// 2️⃣ Use projection to return only title, author, and price
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 })

// 3️⃣ Sort books by price
db.books.find().sort({ price: 1 })   // Ascending
db.books.find().sort({ price: -1 })  // Descending

// 4️⃣ Implement pagination (5 books per page)
db.books.find().skip(0).limit(5)     // Page 1
db.books.find().skip(5).limit(5)     // Page 2



// ==========================
// 🧮 AGGREGATION PIPELINES
// ==========================

// 1️⃣ Calculate the average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
])

// 2️⃣ Find the author with the most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
])

// 3️⃣ Group books by publication decade and count them
db.books.aggregate([
  { $addFields: { decade: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } } },
  { $group: { _id: "$decade", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
])



// ==========================
// ⚙️ INDEXING & PERFORMANCE
// ==========================

// 1️⃣ Create an index on the title field for faster searches
db.books.createIndex({ title: 1 })

// 2️⃣ Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 })

// 3️⃣ Use explain() to show performance improvement
db.books.find({ title: "Educated" }).explain("executionStats")



// ==========================
// 💡 NOTES FOR MONGODB COMPASS USERS
// ==========================
// You can run these commands visually in MongoDB Compass as follows:
// - "Find" queries → in the Filter bar (JSON format)
// - Projection → in the Project tab
// - Sorting → in the Sort tab
// - Pagination → in the Options tab (Limit/Skip)
// - Aggregations → in the Aggregations tab
// - Indexes → in the Indexes tab
// - Update/Delete → by editing or deleting documents directly
