const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  singleProducat,
  getProductByRating,
  getColorByProducat,
  createProduct,
} = require("../controllers/productController");

router.get("/", getAllProduct);
router.post("/", createProduct);
router.get("/rating", getProductByRating);
router.get("/color", getColorByProducat);
router.get("/:id", singleProducat);

module.exports = router;
