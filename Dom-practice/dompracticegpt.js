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

item4.forEach(a => {
    a.style.listStyle = "number";
})

// <----- 21 - 30 ----->
let item = document.querySelectorAll("#items li");
item[0].innerText = "First Item";

item[item.length-1].innerText = "Last Item";

let item2 = document.querySelector("#updateText p");
item2.innerText = "Update";

let chanCol = document.querySelectorAll("section h2");
chanCol.forEach(a => {
    a.style.color = "blue";
});

item[0].nextElementSibling.innerText = "Next one";

item[item.length-1].previousElementSibling.innerText = "Pre One"

// item.forEach((a, index) => {
//     a.innerText = "Child " + (index + 1);
// });

let childParent = document.getElementById("child");
childParent.parentElement.style.cssText = "background-color: yellow; width: 200px; border-radius: 10px; display: flex; align-items: center; flex-direction: column;"

let countChild = document.getElementById("parent");
console.log("Count: ", countChild.children.length);

let textChan = document.getElementById("textCha");
let allElement = textChan.querySelectorAll("*");

allElement.forEach(el => {
    el.style.color = "purple";
});


// <----- 31 - 40 ----->
// document.body.innerHTML += "<p>This is new</p>";
let para = document.createElement("p");
para.innerText = "This is new";
document.body.appendChild(para);

let divPara = document.createElement("div");
divPara.innerText = "Hello box";
document.body.appendChild(divPara);

function createLi(text){
    let li = document.createElement("li");
    li.innerText = text;
    return li;
}

let ul = document.getElementById("myList");
ul.appendChild(createLi("New Item"));

ul.prepend(createLi("First item"));

ul.insertBefore(createLi("Last Item"), null);

let removeH2 = document.querySelectorAll(".classH2");
removeH2.forEach(a => {
    a.remove();
});

let paraRemove = document.querySelectorAll(".addText");
paraRemove.forEach(a => {
    a.remove();
});

let liRemove = document.querySelectorAll("#items li");
liRemove.forEach(a => {
    a.remove();
});

let creBut = document.createElement("button");
creBut.innerText = "Click Me";
document.getElementById("parent").appendChild(creBut);

let image = document.createElement("img");
image.src = "/youtube/images/hamburger-logo.png";
image.alt = "Hemburger png";
image.style.cssText = "width: 50px"
document.getElementById("textCha").append(image);

// <----- 41 - 50 ----->
let fruits = ["apple", "banana", "mango"];
let ulList = document.createElement("ul");
ulList.id = "fruitList";
ulList.style.listStyle = "none";

fruits.forEach((fruit, index) => {
    let li = document.createElement("li");
    li.innerText = `${index + 1}: ${fruit}`;
    ulList.appendChild(li);
});
document.body.appendChild(ulList);

// table
let data = [
    {name: "harpreet", age: "20"},
    {name: "baldev", age: "23"},
    {name: "gurnaam", age: "25"}
];

// create a table
let table = document.createElement("table");
table.border = 1;

// create a table head
let tHead = document.createElement("thead");
let tableRow = document.createElement("tr");

["Name", "Age"].forEach(text => {
    let th = document.createElement("th");
    th.innerText = text;
    tableRow.appendChild(th);
});
tHead.appendChild(tableRow);
table.appendChild(tHead);

let tBody = document.createElement("tbody");
data.forEach(item => {
    let tr = document.createElement("tr");
    let tName = document.createElement("td");
    tName.innerText = item.name;
    tr.appendChild(tName);

    let tAge = document.createElement("td");
    tAge.innerText = item.age;
    tr.appendChild(tAge);

    tBody.appendChild(tr);
});
table.appendChild(tBody);

document.body.appendChild(table);

// adding
let para1 = document.createElement("p");
para.innerText = "This is paragraph tag";

let heading = document.createElement("h2");
heading.innerText = "This is heading tag";

let add1 = document.getElementById("addPH");
add1.appendChild(para1);
add1.appendChild(heading);

let names = ["harpreet", "badal", "gollu"];
// create ol 
let olList = document.createElement("ol");
olList.id = "olList";

names.forEach(items => {
    let li = document.createElement("li");
    li.innerText = items;
    olList.appendChild(li);
});
document.body.appendChild(olList);


let arr = [1,2,3,4,5,6,7,8,9,10];

let ulList1 = document.createElement("ul");
arr.forEach(a => {
    if(a % 2 === 0){
        let li = document.createElement("li");
        li.innerText = a;
        ulList1.appendChild(li);
    }
});
document.body.appendChild(ulList1);



let div = document.getElementById("formDiv");

// form create karo
let form = document.createElement("form");

// input create karo
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter something";
input.name = "myInput";

// submit button create karo
let submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.innerText = "Submit";

// form ke andar input aur button add karo
form.appendChild(input);
form.appendChild(submitBtn);

// div ke andar form add karo
div.appendChild(form);


// creating a table
let data1 = [
    {name:"Harpreet", age:19}, 
    {name:"Aman", age:20}
];


let table1 = document.createElement("table");
table1.border = 1;

let tHead1 = document.createElement("thead");
let tRow1 = document.createElement("tr");
["Name", "Age"].forEach(text1 => {
    let th1 = document.createElement("th");
    th1.innerText = text1;
    tRow1.appendChild(th1);
});
tHead1.appendChild(tRow1);
table1.appendChild(tHead1);

let tBody1 = document.createElement("tbody");
data1.forEach(item1 => {
    let tr1 = document.createElement("tr");
    let tdName1 = document.createElement("td");
    tdName1.innerText = item1.name;
    tr1.appendChild(tdName1);

    let tdAge1 = document.createElement("td");
    tdAge1.innerText = item1.age;
    tr1.appendChild(tdAge1);

    tBody1.appendChild(tr1);
});
table1.appendChild(tBody1);

document.body.appendChild(table1);

let obj = {name: "harpreet", age: 20};
let para2 = document.createElement("p");
para2.innerText = `Name: ${obj.name}, Age: ${obj.age}`;
document.body.appendChild(para2);

