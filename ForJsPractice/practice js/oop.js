// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// let p1 = new Person("Bob", 25);
// p1.greet();

// class Car{
//     constructor(brand = "toyota", model = "Corallel"){
//         this.brand = brand;
//         this.model = model;
//     }
// }
// const c1 = new Car();
// console.log(c1.brand, c1.model);

// class Rectengle{
//     constructor(width, height){
//         this._width = width;
//         this._height = height;
//     }
//     get area(){
//         return this._width * this._height;
//     }
//     set width(value){
//         this._width = value;
//     }
// }

// let rect = new Rectengle(5, 10);
// console.log(rect.area);
// rect.width = 20;
// console.log(rect.area);

// class Animal{
//     speak(){
//         console.log("Animals make sound");
//     }
//     drive(){
//         console.log("driving...")
//     }
// }
// class Dog extends Animal{
 
//     // Method overrinding
//     speak(){
//         super.speak();
//         console.log("Dog Bark...")
//     }
// }
// let d = new Dog();
// d.speak();

// class Parent{
//     speak(){
//         console.log("hello form parent");
//     }
// }
// class Child extends Parent{
//     speak(){
//         super.speak();
//         console.log("hello form child");
//     }
// }
// new Child().speak();

// class mathHelper{
//     static add(a, b){
//         return a+b;
//     }
// }
// console.log(mathHelper.add(5,8));

// class bankAccount{
//     #balance = 0;

//     Deposite(amount){
//         this.#balance += amount;
//     }

//     getBalance(){
//         return this.#balance;
//     }
// }

// const acc = new bankAccount();
// acc.Deposite(1000);
// console.log(acc.getBalance());

// class Shape{
//     area(){
//         return 0;
//     }
// }
// class Circul extends Shape{
//     constructor(radius){
//         super();
//         this.radius = radius;
//     }
//     area(){
//         return Math.PI * this.radius * this.radius;
//     }
// }
// console.log(new Circul(5).area());

// class Counter{
//     #count = 0;

//     increment(){
//         this.#count++;
//     }

//     getCount(){
//         return this.#count;
//     }
// }
// let c = new Counter();
// c.increment();
// console.log(c.getCount());

// class Student{
//     constructor(name1, age){
//         this.name1 = name1;
//         this.age = age;
//     }
// }
// let p1 = new Student("alice", 14);
// let p2 = new Student("bob", 15);
// console.log(p2.name1);

// class Engine{
//     start(){
//         console.log("Engine Started...")
//     }
// }

// class Car{
//     constructor(){
//         this.engine = new Engine();
//     }
//     startCar(){
//         this.engine.start();
//         console.log("car is started..")
//     }
// }
// new Car().startCar();

// class Counter{
//     constructor(){
//         this.count = 0;
//     }
//     inc(){
//         this.count++;
//         return this;
//     }
// }
// let c1 = new Counter();
// c1.inc().inc();
// console.log(c1.count);
