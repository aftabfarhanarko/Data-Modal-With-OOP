const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

const userRouter = require("./router/user");
const productRouter = require("./router/product");

// Enable CORS for frontend/Live Server requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Body parsers
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from both root and 'public' directory
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname));

// API Routes (supporting both /api/producat and /api/products)
app.use("/api/user", userRouter);
app.use("/api/producat", productRouter);
app.use("/api/products", productRouter);

// Shortcut route for the product form page
app.get("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Product Form UI: http://localhost:${PORT}/`);
});

module.exports = app;

