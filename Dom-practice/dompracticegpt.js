// <----- 1 - 10 ----->
document.getElementById("change").innerText = "Welcome to Dom";

document.getElementById("text").innerText = "Hi, Herpreet";

document.getElementById("change-ele").innerHTML = "hello kaisa hai";

document.getElementById("col-siz").style.cssText = "color: red; font-size: 20px";

let toUpper = document.getElementById("upper");
toUpper.innerText = toUpper.innerText.toUpperCase();

document.getElementById("text").style.cssText = "background-color: yellow; font-weight: bold";

toUpper.innerText += " JavaScript";

document.getElementById("col-fon").style.cssText = "font-family: Courier New; color: green;";

document.getElementById("add-element").innerHTML += "<p>What are you doing bro?</p>";

// <----- 11 - 20 ----->
let item3 = document.querySelectorAll(".col-chan");
item3.forEach(p => {
    p.style.color = "red";
});

let item4 = document.querySelectorAll("ul li");
item4.forEach(p => {
    p.innerText = p.innerText.toUpperCase();
})

let text1 = document.querySelectorAll(".box-text");
text1.forEach(t => {
    t.innerHTML = "<p>Box</p>"
});

let fontChange = document.querySelectorAll(".classH2");
fontChange.forEach(t1 => {
    t1.style.fontSize = "20px"
});

let textAdd = document.querySelectorAll("p");
textAdd.forEach(a1 => {
    a1.innerText += " kaisa hai bhai";
});

let pColor = document.querySelectorAll("p");
pColor[0].style.color = "blue";
pColor[pColor.length-1].style.color = "brown";

item4.forEach((a, index) => {
    a.innerText = `Item ${index + 1}: ${a.innerText}`;
});

let pAddDiv = document.querySelectorAll("div");
pAddDiv.forEach(a => {
    a.innerHTML += "<p>Inside div</p>";
});

item4.forEach((a, index) => {
    a.style.listStyle = "number";
})
