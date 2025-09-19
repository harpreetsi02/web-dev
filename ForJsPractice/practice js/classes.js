// class Animal{
//     constructor(name){
//         this.name = name;
//     }
// }
// let dog = new Animal("Begal");
// console.log(dog);

// class Car{
//     drive() {console.log("driving...")}
// }
// new Car().drive();

// class person {
//     constructor(name){
//         this.name = name;
//     }
// }
// let pName = new person("Alice");
// console.log(pName.name);
// console.log(new person("alice").name);

// class Book{
//     constructor(title, author){
//         this.title = title;
//         this.author = author;
//     }
// }
// console.log(new Book("JS", "John"));

// class Laptop{
//     constructor(name){
//         this.name = name;
//     }

//     // creating a method
//     info() {
//         return `Laptop brand ${this.name}`;
//     }
// }
// console.log(new Laptop("Dell").info());

// class Pen{
//     constructor(color = "blue"){
//         this.color = color;
//     }
// }
// console.log(new Pen().color);

// class Addition{
//     static add (a,b){
//         return a+b;
//     }
// }
// console.log(Addition.add(3,5));

// <----- Asking question ----->
// class Animal2 {
//     speak() {
//         console.log("Some sound");
//     }
// }
// class Dog extends Animal2{
//     speak(){
//         console.log("Bark");
//     }
// }
// new Dog().speak();

// class Parent{
//     constructor(name){
//         this.name = name;
//     }
// }

// class Child extends Parent{
//     constructor(name, age){
//         super(name); 
//         this.age = age;
//     }
// }
// let nameAge = new Child("Tom", 10);
// console.log(nameAge);

// console.log(new Child("Tom", 10));

