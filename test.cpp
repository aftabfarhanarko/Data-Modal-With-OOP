#include <iostream>
#include <string>
using namespace std;

class Event {
private:
    string name;
    int id;
    string location;

public:
    Event(string a, int b, string c) {
        name = a;
        id = b;
        location = c;
    }

    void displayInfo() {
        cout << "Name: " << name << endl;
        cout << "ID: " << id << endl;
        cout << "Location: " << location << endl;
    }
};

int main() {
    Event event("Tech Conference", 101, "Dhaka,1207");

    event.displayInfo();

    return 0;
}