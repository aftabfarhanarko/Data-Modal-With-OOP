package main

import "fmt"

// 1. Student Struct
type Student struct {
    Name       string
    Age        int
    Department string
    Marks      float64
}

// Constructor pattern
func NewStudent(name string, age int, department string, marks float64) Student {
    return Student{
        Name:       name,
        Age:        age,
        Department: department,
        Marks:      marks,
    }
}

// Student methods
func (s Student) ShowInfo() {
    fmt.Println("\nStudent Information")
    fmt.Println("Name:", s.Name)
    fmt.Println("Age:", s.Age)
    fmt.Println("Department:", s.Department)
    fmt.Println("Marks:", s.Marks)
}

func (s Student) Study() {
    fmt.Println(s.Name, "is studying.")
}

func (s Student) CheckResult() {
    if s.Marks >= 40 {
        fmt.Println(s.Name, "passed.")
    } else {
        fmt.Println(s.Name, "failed.")
    }
}

// 2. Teacher Struct
type Teacher struct {
    Name    string
    Subject string
    Salary  float64
}

func (t Teacher) Teach() {
    fmt.Println(t.Name, "teaches", t.Subject)
}

func (t Teacher) ShowInfo() {
    fmt.Println("\nTeacher Information")
    fmt.Println("Name:", t.Name)
    fmt.Println("Subject:", t.Subject)
    fmt.Println("Salary:", t.Salary)
}

// 3. Employee Struct
type Employee struct {
    Name   string
    ID     int
    Salary float64
}

func (e Employee) Work() {
    fmt.Println(e.Name, "is working.")
}

func (e Employee) ShowInfo() {
    fmt.Println("\nEmployee Information")
    fmt.Println("Name:", e.Name)
    fmt.Println("ID:", e.ID)
    fmt.Println("Salary:", e.Salary)
}

// Pointer receiver modifies the original object
func (e *Employee) IncreaseSalary(amount float64) {
    e.Salary += amount
}

// 4. Product Struct
type Product struct {
    Name     string
    Price    float64
    Quantity int
}

func (p Product) ShowProduct() {
    fmt.Println("\nProduct Information")
    fmt.Println("Name:", p.Name)
    fmt.Println("Price:", p.Price)
    fmt.Println("Quantity:", p.Quantity)
}

func (p Product) CalculateTotal() float64 {
    return p.Price * float64(p.Quantity)
}

// 5. Book Struct
type Book struct {
    Title  string
    Author string
    Pages  int
}

func (b Book) Read() {
    fmt.Println("Reading:", b.Title)
}

func (b Book) ShowInfo() {
    fmt.Println("\nBook Information")
    fmt.Println("Title:", b.Title)
    fmt.Println("Author:", b.Author)
    fmt.Println("Pages:", b.Pages)
}

// 6. Main Function
func main() {

    fmt.Println("===== STUDENT SECTION =====")

    arko := NewStudent(
        "Aftab Farhan ARKO",
        22,
        "Computer Science",
        85.5,
    )

    rahim := NewStudent(
        "Rahim Ahmed",
        21,
        "CSE",
        35,
    )

    arko.ShowInfo()
    arko.Study()
    arko.CheckResult()

    rahim.ShowInfo()
    rahim.CheckResult()

    fmt.Println("\n===== TEACHER SECTION =====")

    teacher1 := Teacher{
        Name:    "Mr. Hasan",
        Subject: "Golang",
        Salary:  45000,
    }

    teacher2 := Teacher{
        Name:    "Ms. Sara",
        Subject: "Database",
        Salary:  50000,
    }

    teacher1.ShowInfo()
    teacher1.Teach()

    teacher2.ShowInfo()
    teacher2.Teach()

    fmt.Println("\n===== EMPLOYEE SECTION =====")

    employee1 := Employee{
        Name:   "Karim",
        ID:     101,
        Salary: 30000,
    }

    employee1.ShowInfo()
    employee1.Work()

    employee1.IncreaseSalary(5000)

    fmt.Println("Updated Salary:", employee1.Salary)

    employee2 := Employee{
        Name:   "Nadia",
        ID:     102,
        Salary: 35000,
    }

    employee2.ShowInfo()
    employee2.Work()

    fmt.Println("\n===== PRODUCT SECTION =====")

    product1 := Product{
        Name:     "Laptop",
        Price:    65000,
        Quantity: 2,
    }

    product1.ShowProduct()

    fmt.Println("Total Price:", product1.CalculateTotal())

    product2 := Product{
        Name:     "Keyboard",
        Price:    1500,
        Quantity: 3,
    }

    product2.ShowProduct()

    fmt.Println("Total Price:", product2.CalculateTotal())

    fmt.Println("\n===== BOOK SECTION =====")

    book1 := Book{
        Title:  "Learn Go",
        Author: "Go Author",
        Pages:  350,
    }

    book1.ShowInfo()
    book1.Read()

    book2 := Book{
        Title:  "Learn Backend",
        Author: "Backend Author",
        Pages:  280,
    }

    book2.ShowInfo()
    book2.Read()

    fmt.Println("\n===== LOOP SECTION =====")

    for i := 1; i <= 5; i++ {
        fmt.Println("Practice number:", i)
    }

    fmt.Println("\n===== SLICE OF OBJECTS =====")

    students := []Student{
        arko,
        rahim,
        NewStudent("Karim", 23, "CSE", 70),
    }

    for _, student := range students {
        student.ShowInfo()
        student.CheckResult()
    }

    fmt.Println("\n===== POINTER SECTION =====")

    employeePointer := &employee1

    fmt.Println("Before update:", employeePointer.Salary)

    employeePointer.IncreaseSalary(2000)

    fmt.Println("After update:", employee1.Salary)

    fmt.Println("\n===== FINAL RESULT =====")
    fmt.Println("All Go examples completed.")
}
