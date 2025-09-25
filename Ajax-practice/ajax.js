const user = {name: "harpreet", age: 19, city: "Delhi"};
localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.city);

const profile = JSON.parse(localStorage.getItem("user"));
profile.age = 23;
localStorage.setItem("user", JSON.stringify(profile));

localStorage.removeItem("user");

const fruits = ["apple", "banana", "orange"];
localStorage.setItem("fruits", JSON.stringify(fruits));

let myFruits = JSON.parse(localStorage.getItem("fruits"));
myFruits.push("cherry");
console.log(myFruits.join(", "));

const setting = { theme: "dark", fontSize: 14 };
localStorage.setItem("setting", JSON.stringify(setting));

let s = JSON.parse(localStorage.getItem(setting)) || {theme: "light"};
console.log(s.theme);

const user2 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];
localStorage.setItem("user2", JSON.stringify(user2));

const list = JSON.parse(localStorage.getItem("user2"));
const u = list.find(x => x.id === 2);
console.log(u.name);

let count = JSON.parse(localStorage.getItem("count")) || 0;
count++;
localStorage.setItem("count", JSON.stringify(count));
console.log("Count: " + count);

function saveName(){
    localStorage.setItem("name", JSON.stringify(nameInput.value))
}
nameInput.value = JSON.parse(localStorage.getItem("name")) || "";
// localStorage.clear();

