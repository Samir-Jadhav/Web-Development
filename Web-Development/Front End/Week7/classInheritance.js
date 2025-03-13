// Defining the Parent Class Person
class Person {
    constructor(name) {
        this.name = name;
    }
}

// Defining the Student Class inheriting from Person
class Student extends Person {
    constructor(name, rollNo, studentClass) {
        super(name); // Calling the Parent Constructor
        this.rollNo = rollNo;
        this.class = studentClass;
    }

    getDetails() {
        return [this.name, this.rollNo, this.class];
    }
}

// Defining the Teacher Class inheriting from Person
class Teacher extends Person {
    constructor(name, teacherId, subject) {
        super(name); // Calling the Parent Constructor
        this.teacherId = teacherId;
        this.subject = subject;
    }

    getDetails() {
        return [this.name, this.teacherId, this.subject];
    }
}

// Example Usage
const student1 = new Student("Alice", 101, "10th Grade");
const teacher1 = new Teacher("Mr. Smith", "T202", "Mathematics");

console.log(student1.getDetails()); // Output: ["Alice", 101, "10th Grade"]
console.log(teacher1.getDetails()); // Output: ["Mr. Smith", "T202", "Mathematics"]
