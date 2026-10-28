
#include <iostream>
#include <string>
using namespace std;

// 1. Student Class
class Student {
public:
    string name;
    int age;
    string department;
    float marks;

    Student() {
        name = "Unknown";
        age = 0;
        department = "CSE";
        marks = 0;
    }

    void study() {
        cout << name << " is studying." << endl;
    }

    void showInfo() {
        cout << "\nStudent Information" << endl;
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Department: " << department << endl;
        cout << "Marks: " << marks << endl;
    }

    void checkResult() {
        if (marks >= 40) {
            cout << name << " passed." << endl;
        } else {
            cout << name << " failed." << endl;
        }
    }
};

// 2. Teacher Class
class Teacher {
public:
    string name;
    string subject;
    float salary;

    void teach() {
        cout << name << " teaches " << subject << endl;
    }

    void showInfo() {
        cout << "\nTeacher Information" << endl;
        cout << "Name: " << name << endl;
        cout << "Subject: " << subject << endl;
        cout << "Salary: " << salary << endl;
    }
};

// 3. Employee Class
class Employee {
public:
    string name;
    int id;
    float salary;

    void work() {
        cout << name << " is working." << endl;
    }

    void showInfo() {
        cout << "\nEmployee Information" << endl;
        cout << "Name: " << name << endl;
        cout << "ID: " << id << endl;
        cout << "Salary: " << salary << endl;
    }

    void increaseSalary(float amount) {
        salary += amount;
        cout << "Updated salary: " << salary << endl;
    }
};

// 4. Product Class
class Product {
public:
    string name;
    float price;
    int quantity;

    void showProduct() {
        cout << "\nProduct Information" << endl;
        cout << "Name: " << name << endl;
        cout << "Price: " << price << endl;
        cout << "Quantity: " << quantity << endl;
    }

    float calculateTotal() {
        return price * quantity;
    }
};

// 5. Book Class
class Book {
public:
    string title;
    string author;
    int pages;

    void read() {
        cout << "Reading: " << title << endl;
    }

    void showInfo() {
        cout << "\nBook Information" << endl;
        cout << "Title: " << title << endl;
        cout << "Author: " << author << endl;
        cout << "Pages: " << pages << endl;
    }
};

// 6. Main Function
int main() {

    cout << "===== STUDENT SECTION =====" << endl;

    Student arko;
    arko.name = "Aftab Farhan ARKO";
    arko.age = 22;
    arko.department = "Computer Science";
    arko.marks = 85.5;

    arko.showInfo();
    arko.study();
    arko.checkResult();

    Student rahim;
    rahim.name = "Rahim Ahmed";
    rahim.age = 21;
    rahim.department = "CSE";
    rahim.marks = 35;

    rahim.showInfo();
    rahim.checkResult();

    cout << "\n===== TEACHER SECTION =====" << endl;

    Teacher teacher1;
    teacher1.name = "Mr. Hasan";
    teacher1.subject = "C++";
    teacher1.salary = 45000;

    teacher1.showInfo();
    teacher1.teach();

    Teacher teacher2;
    teacher2.name = "Ms. Sara";
    teacher2.subject = "Database";
    teacher2.salary = 50000;

    teacher2.showInfo();
    teacher2.teach();

    cout << "\n===== EMPLOYEE SECTION =====" << endl;

    Employee employee1;
    employee1.name = "Karim";
    employee1.id = 101;
    employee1.salary = 30000;

    employee1.showInfo();
    employee1.work();
    employee1.increaseSalary(5000);

    Employee employee2;
    employee2.name = "Nadia";
    employee2.id = 102;
    employee2.salary = 35000;

    employee2.showInfo();
    employee2.work();

    cout << "\n===== PRODUCT SECTION =====" << endl;

    Product product1;
    product1.name = "Laptop";
    product1.price = 65000;
    product1.quantity = 2;

    product1.showProduct();

    cout << "Total Price: "
         << product1.calculateTotal() << endl;

    Product product2;
    product2.name = "Keyboard";
    product2.price = 1500;
    product2.quantity = 3;

    product2.showProduct();

    cout << "Total Price: "
         << product2.calculateTotal() << endl;

    cout << "\n===== BOOK SECTION =====" << endl;

    Book book1;
    book1.title = "Learn C++";
    book1.author = "Programming Author";
    book1.pages = 350;

    book1.showInfo();
    book1.read();

    Book book2;
    book2.title = "Learn OOP";
    book2.author = "Computer Science Author";
    book2.pages = 280;

    book2.showInfo();
    book2.read();

    cout << "\n===== LOOP SECTION =====" << endl;

    for (int i = 1; i <= 5; i++) {
        cout << "Practice number: " << i << endl;
    }

    cout << "\n===== ARRAY OF OBJECTS =====" << endl;

    Student students[3];

    students[0].name = "Arko";
    students[0].age = 22;
    students[0].marks = 85;

    students[1].name = "Rahim";
    students[1].age = 21;
    students[1].marks = 72;

    students[2].name = "Karim";
    students[2].age = 23;
    students[2].marks = 38;

    for (int i = 0; i < 3; i++) {
        students[i].showInfo();
        students[i].checkResult();
    }

    cout << "\n===== FINAL RESULT =====" << endl;
    cout << "All class and object examples completed."
         << endl;

    return 0;
}
