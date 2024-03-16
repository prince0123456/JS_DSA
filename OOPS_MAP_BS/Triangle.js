
/*
Create a class Triangle Having 3 sides as attributes (side1, side2, side 3).

Create a constructor to initialize the sides in realtime on object creation.

Create 2 functions calculate_area and calculate_perimeter

calculate_area functions returns the area of the triangle ( side1 * side2 * side3)

calculate_perimeter functions returns the perimeter of the triangle (side1+side2+side3).
*/
class Triangle{
    constructor(side1,side2,side3){
        this.side1=side1;
        this.side2=side2;
        this.side3=side3;
    }
    calculate_area(){
        let result=Math.floor(this.side1*this.side2*this.side3);
       return result;
    }
    calculate_perimeter(){
        let result=Math.floor(this.side1+this.side2+this.side3);
       return result;
    }
}
var t=new Triangle(3,4,5);
console.log(t.calculate_area());
var per=t.calculate_perimeter();
console.log(per);
t=new Triangle(9,10,11);
console.log(t.calculate_area());
per=t.calculate_perimeter();
console.log(per);