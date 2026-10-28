
#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name;
    float age;
};

int main() {
    Student arko;

    arko.age = 73.46;
    arko.name = "Aftab Farhan ARKO";

    cout << "Name: " << arko.name << endl;
    cout << "Age: " << arko.age << endl;

    return 0;
}
