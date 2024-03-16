/*Task details

Question:-



A class named 'Student' with String variable 'name' and integer variable 'roll_no' and Constructor is already created.

Create a method display to print the attributes name and roll_no.*/
class Student{
    constructor(name='zyc',roll='0'){
      this.name=name;
      this.roll=roll;
    }
    show(){
        console.log(this.name);
        console.log(this.roll);
    }
}


var x=new Student("vaibhav",101);


var y=new Student("rahul",102);


var z=new Student();

x.show();
y.show();
z.show();