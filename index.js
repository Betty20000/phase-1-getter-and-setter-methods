// Add your Circle class here
class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    // Getter methods
    get radius() {
      return this._radius;
    }
  
    get diameter() {
      return this._radius * 2;
    }
  
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    get area() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  
    // Setter methods
    set radius(radius) {
      this._radius = radius;
    }
  
    set diameter(diameter) {
      this._radius = diameter / 2;
    }
  
    set circumference(circumference) {
      this._radius = circumference / (2 * Math.PI);
    }
  
    set area(area) {
      this._radius = Math.sqrt(area / Math.PI);
    }
  }
  
  
  const circle = new Circle(5);
  console.log("Radius:", circle.radius);
  console.log("Diameter:", circle.diameter);
  console.log("Circumference:", circle.circumference);
  console.log("Area:", circle.area);
  
  circle.diameter = 10;
  console.log("Updated Radius (after setting diameter):", circle.radius);
  
  circle.circumference = 31.42;
  console.log("Updated Radius (after setting circumference):", circle.radius);
  
  circle.area = 78.54;
  console.log("Updated Radius (after setting area):", circle.radius);
  