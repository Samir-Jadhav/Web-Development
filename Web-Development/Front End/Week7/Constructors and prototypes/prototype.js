// Problem statement
// Follow the steps given below to produce the desired result.

// 1. Fix the code below by deleting the printDetails() function from the Student object and adding it to the Student prototype object. 

// 2. Then create 4 new instances of the Student object by setting the id, name, club values to (1, “Raj”, “Cricket”), (2, “Rohan”, “Dance”), (3, “Rita”, “Basketball”) and (4, “Reema”, “Music”). 

// 3. Now create an array of these 4 objects.

// 4. Run a loop on the array you created and call each object's printDetails() function.
// Expected Output:


function Student(id, name, club){
    this.id = id ;
    this.name = name ;
    this.club = club ;

}

Student.prototype.printDetails = function(){
        console.log( this.id, this.name, this.club);
    }

var student1 = new Student(1, "Raj", "Cricket");
var student2 = new Student(2, "Rohan", "Dance");
var student3 = new Student(3, "Rita", "Basketball");
var student4 = new Student(4, "Reema", "Music");

var students = [student1, student2, student3, student4];

students.forEach(student => student.printDetails());

