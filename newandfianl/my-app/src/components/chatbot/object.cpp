#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name;
    int age;
    string major;
    double gpa;

    void inputDetails() {
        cout << "Enter name: ";
        getline(cin, name);
        cout << "Enter age: ";
        cin >> age;
        cin.ignore();
        cout << "Enter major: ";
        getline(cin, major);
        cout << "Enter GPA: ";
        cin >> gpa;
    }

    void displayDetails() {
        cout << "\nStudent Details:\n";
        cout << "Name: " << name << "\n";
        cout << "Age: " << age << "\n";
        cout << "Major: " << major << "\n";
        cout << "GPA: " << gpa << "\n";
    }
};

int main() {
    Student student;
    student.inputDetails();
    student.displayDetails();
    return 0;
}