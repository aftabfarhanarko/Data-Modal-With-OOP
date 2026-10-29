const fs = require("fs");
const path = require("path");

const productFilePath = path.join(__dirname, "../data/product.json");

// Helper function to read the latest products list from file
const getProductsFromFile = () => {
  try {
    const data = fs.readFileSync(productFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading product.json:", err);
    return [];
  }
};

const getAllProduct = (req, res) => {
  const product = getProductsFromFile();
  const prices = product.map((item) => item.price);
  const stock = product.map((item) => item.stock);

  res.status(200).json({
    success: true,
    totalProducat: product.length,
    data: product,
    price: prices,
    stock: stock,
  });
};

const singleProducat = (req, res) => {
  const product = getProductsFromFile();
  const id = Number(req.params.id);
  const singelproducat = product.find((i) => i.id === id);

  if (!singelproducat) {
    return res.status(404).json({
      success: false,
      message: `Product with id ${id} not found`,
    });
  }

  res.status(200).json({
    success: true,
    data: singelproducat,
  });
};

const getProductByRating = (req, res) => {
  const product = getProductsFromFile();
  const minRating = Number(req.query.ratings);
  const findProducat = product.filter(
    (item) => item.ratings?.average < minRating,
  );
  console.log("Query Data", findProducat);
  res.status(200).json({
    success: true,
    data: findProducat,
  });
};

const getColorByProducat = (req, res) => {
  const product = getProductsFromFile();
  const mainColor = req.query.color;

  const match = product.filter(
    (item) =>
      item.specifications?.color?.toLowerCase() === mainColor?.toLowerCase(),
  );

  res.status(200).json({
    success: true,
    total: match.length,
    data: match,
  });
};

// Create and save new product to data/product.json
const createProduct = (req, res) => {
  try {
    const {
      name,
      slug,
      description,
      price,
      discountPrice,
      category,
      brand,
      sku,
      stock,
      images,
      specifications,
      ratings,
      isFeatured,
      isActive,
    } = req.body;

    if (!name || price === undefined || price === null || price === "") {
      return res.status(400).json({
        success: false,
        message: "Product name and price are required fields.",
      });
    }

    const products = getProductsFromFile();

    // Auto-calculate next ID
    const maxId = products.reduce(
      (max, item) => Math.max(max, Number(item.id) || 0),
      0,
    );
    const newId = maxId + 1;

    // Generate slug if empty
    const cleanSlug =
      slug && slug.trim()
        ? slug
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")
        : name
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");

    // Process image URLs into array
    let imagesArr = [];
    if (Array.isArray(images)) {
      imagesArr = images.filter(Boolean);
    } else if (typeof images === "string") {
      imagesArr = images
        .split(",")
        .map((url) => url.trim())
        .filter(Boolean);
    }

    const newProduct = {
      id: newId,
      name: name.trim(),
      slug: cleanSlug,
      description: (description || "").trim(),
      price: Number(price) || 0,
      discountPrice:
        discountPrice !== undefined && discountPrice !== ""
          ? Number(discountPrice)
          : 0,
      category: (category || "").trim(),
      brand: (brand || "").trim(),
      sku: (sku || `SKU-${Date.now()}`).trim(),
      stock: Number(stock) || 0,
      images:
        imagesArr.length > 0
          ? imagesArr
          : ["https://example.com/images/default.jpg"],
      specifications: {
        color: specifications?.color || "",
        connectivity: specifications?.connectivity || "",
        batteryLife: specifications?.batteryLife || "",
        warranty: specifications?.warranty || "",
        ...(typeof specifications === "object" ? specifications : {}),
      },
      ratings: {
        average:
          ratings?.average !== undefined ? Number(ratings.average) || 0 : 0,
        count: ratings?.count !== undefined ? Number(ratings.count) || 0 : 0,
      },
      isFeatured: Boolean(isFeatured),
      isActive: isActive !== undefined ? Boolean(isActive) : true,
      createdAt: new Date().toISOString(),
    };

    products.push(newProduct);

    // Save formatted JSON back to file
    fs.writeFileSync(
      productFilePath,
      JSON.stringify(products, null, 2),
      "utf8",
    );

    res.status(201).json({
      success: true,
      message: "Product created and saved to data/product.json successfully!",
      data: newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({
      success: false,
      message: "Server error: Failed to save product to JSON file.",
      error: error.message,
    });
  }
};

module.exports = {
  getAllProduct,
  singleProducat,
  getProductByRating,
  getColorByProducat,
  createProduct,
};
