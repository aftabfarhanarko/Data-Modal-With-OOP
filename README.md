<!-- # Data Modeling with OOP & Backend Architecture (C++, Go, JavaScript)

This repository demonstrates **Data Modeling** and **Object-Oriented Programming (OOP)** patterns across multiple programming languages (**C++**, **Go**, and **JavaScript / Node.js & Express**).

---

## 📁 Repository Structure

```text
├── dataModal.cpp               # C++: Basic class & object data modeling
├── Object.cpp                  # C++: Comprehensive OOP models (Student, Teacher, Employee, Product, Book)
├── encapsulation.cpp           # C++: Encapsulation & data hiding (BankAccount)
├── test.cpp                    # C++: Event entity modeling with constructor & display methods
├── go-oop/
│   └── main.go                 # Go: OOP implementation via Structs, Methods & Pointers
├── JS/                         # JavaScript: Full REST API with JSON database & frontend UI
│   ├── app.js                  # Express application & server configuration
│   ├── controllers/
│   │   ├── productController.js# Product CRUD, filtering & JSON file handling
│   │   └── userControllers.js   # User list & single user query handlers
│   ├── router/
│   │   ├── product.js          # Product routes
│   │   └── user.js             # User routes
│   ├── data/
│   │   └── product.json        # Persistent JSON file storage
│   ├── public/
│   │   └── index.html          # Interactive web UI to add and view products
│   └── package.json            # Node.js dependencies & scripts
└── README.md
```

---

## ⚡ 1. C++ (Object-Oriented Programming & Data Modeling)

The C++ files cover core OOP principles, custom data modeling, and memory abstraction:

### Files & Features:
- **`dataModal.cpp`**:
  - Introduces foundational class declaration (`Student`).
  - Demonstrates object instantiation, property assignment (`name`, `age`), and basic console output.

- **`Object.cpp`**:
  - **Multiple Entity Classes**:
    - `Student`: Default constructor, student profile methods (`study()`, `showInfo()`, `checkResult()`).
    - `Teacher`: Faculty modeling with subjects, salary, and `teach()` method.
    - `Employee`: Demonstrates state modification via member functions (`increaseSalary()`).
    - `Product`: E-commerce data modeling with computed methods (`calculateTotal() = price * quantity`).
    - `Book`: Library/reading entity modeling.
  <!-- - **Collections & Loops**: -->
    - Array of objects (`Student students[3]`).
    - Looping through object arrays to execute polymorphic-like member methods.

- **`encapsulation.cpp`**:
  - Demonstrates **Data Hiding & Encapsulation**.
  - `BankAccount` class with `private` member variable (`balance`).
  - Public getter and setter/transaction methods (`deposit`, `withdraw`, `getBalance`) with validation checks to prevent invalid state changes.

- **`test.cpp`**:
  - Parameterized constructor implementation (`Event` entity).
  - Clean formatted display method (`displayInfo()`).

---

## 🐹 2. Go (Structs, Methods & OOP in Golang)

Located in `go-oop/main.go`, this section demonstrates how OOP principles are implemented idiomatic to **Go** (Golang), which uses structs and receiver functions instead of traditional classes.

### Features & Concepts Covered:
- **Struct Modeling**:
  - Re-implements real-world entities: `Student`, `Teacher`, `Employee`, `Product`, and `Book`.
- **Constructor Pattern**:
  - `NewStudent(...)` factory function for initializing struct instances cleanly.
- **Value Receivers vs. Pointer Receivers**:
  - **Value Receiver**: `(s Student) ShowInfo()`, `(p Product) CalculateTotal()` (read-only operations).
  - **Pointer Receiver**: `(e *Employee) IncreaseSalary(amount)` (mutates original struct data in memory).
- **Slices of Structs**:
  - Dynamic slice collection (`students := []Student{...}`).
  - Iteration using `for _, student := range students`.
- **Pointers & Memory Referencing**:
  - Inspecting and updating data via struct pointers (`employeePointer := &employee1`).

---

## 🌐 3. JavaScript / Node.js & Express (REST API & Data Persistence)

Located in the `JS/` directory, this is a complete backend REST API built with Node.js and Express.js, featuring JSON file persistence and an interactive frontend UI.

### Architecture & Capabilities:
- **Modular MVC Architecture**:
  - Route handlers isolated in `router/` (`product.js`, `user.js`).
  - Business logic separated in `controllers/` (`productController.js`, `userControllers.js`).
- **File-Based JSON Database (`data/product.json`)**:
  - Reads and writes data using Node's `fs` module (`readFileSync`, `writeFileSync`).
  - Auto-calculates incremental IDs (`newId = maxId + 1`).
  - Auto-generates URL-friendly slugs from product titles.
- **API Endpoints**:
  - **Products**:
    - `GET /api/products` (and `/api/producat`) — Retrieves all products, price list, and stock counts.
    - `GET /api/products/:id` — Fetches a single product by ID.
    - `GET /api/products/ratings?ratings=X` — Filters products by average customer rating.
    - `GET /api/products/filter?color=X` — Filters products by specification color.
    - `POST /api/products` — Validates payload, parses specs/images, and saves new product directly to `product.json`.
  - **Users**:
    - `GET /api/user` — Retrieves user lists.
    - `GET /api/user/:id` — Retrieves single user profile by ID.
- **Interactive Web UI (`public/index.html`)**:
  - A modern form served at `http://localhost:3000/` or `http://localhost:3000/add-product` to create products with real-time API submission.

---

## 🚀 How to Run

### 1. Run C++ Examples
```bash
# Compile and run any C++ file (e.g., Object.cpp or encapsulation.cpp)
g++ Object.cpp -o Object && ./Object
g++ encapsulation.cpp -o encapsulation && ./encapsulation
```

### 2. Run Go Example
```bash
cd go-oop
go run main.go
```

### 3. Run JavaScript (Express Backend & UI)
```bash
cd JS
npm install
npm run dev   # or: node app.js
```
Open **`http://localhost:3000`** in your browser to view the Product Form UI. -->
