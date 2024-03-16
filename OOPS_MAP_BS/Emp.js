/*
Task details

Create a class Employee Having 3 attributes (name, year of joining, address)

Create a constructor to initialize the attributes in realtime on object creation.

Create a function print_details to print the details of the employee. (it should be just separated by a space).
*/


class Employee{
    constructor(name='',yearOfJoining='',address=''){
        this.name=name;
        this.yearOfJoining=yearOfJoining;
        this.address=address;
    }
    print_details(){
        console.log(this.name+" "+this.yearOfJoining+" "+this.address);
    }
}


var t=new Employee("ram",1992,"Bangalore");
t.print_details();

var x=new Employee("shyam",2010,"Lucknow");
x.print_details();

var y=new Employee("babu_rao",2015,"Delhi");
y.print_details();
