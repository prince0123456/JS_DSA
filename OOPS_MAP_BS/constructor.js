const prompt = require("prompt-sync")();
console.log("Hello");
/*
Create a class named 'Student' with String variable 'name' and integer variable 'roll_no'. 

Create a constructor through which you can assign values through objects on creation of objects.

if No value is passed through object then by default name should be initialized to "john" and roll_no as 2
*/
class Student{
    constructor(name="",roll=0){
      this.name=name;
      this.roll=roll;
    }
}
var x=new Student("vaibhav",101);
console.log(x.name)

var y=new Student("rahul",102);
console.log(y.name,y.roll)

var z=new Student();
console.log(z.name)