document.getElementById("btn1").addEventListener("click", function(){
    alert("Button clicked!");
});

let para1 = document.getElementById("para1");
document.getElementById("btn2").addEventListener("click", function(){
    para1.innerText = "Text Changed Successfully!";
});

let para2 = document.getElementById("para2");
document.getElementById("btn3").addEventListener("click", function(){
    para2.style.cssText = "color: red; font-size: 24px";
});

document.getElementById("box1").addEventListener("dblclick", function(){
    this.style.backgroundColor = "green";
});

{
    document.getElementById("btn4").addEventListener("mouseover", function(){
        this.style.backgroundColor = "orange";
    });
    document.getElementById("btn4").addEventListener("mouseout", function(){
        this.style.backgroundColor = "blue";
    });
}

let input1 = document.getElementById("input1");
let para3 = document.getElementById("para3");
document.getElementById("btn5").addEventListener("click", function(){
    para3.innerText += input1.value;
    input1.value = "";
});

let para4 = document.getElementById("para4");
document.getElementById("input2").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        e.preventDefault();
        para4.innerText = document.getElementById("input2").value;
    }
});

let para5 = document.getElementById("para5");
document.getElementById("btn6").addEventListener("click", function(){
    if(para5.innerText === "Hello"){
        para5.innerText = "Goodbye";
    }
});

const list1 = document.getElementById("list1");
const input3 = document.getElementById("input3");
document.getElementById("btn7").addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText += input3.value;
    input3.value = "";
    list1.appendChild(li);
});

const image1 = document.getElementById("image1");
document.getElementById("btn8").addEventListener("click", function(){
    image1.src = "/ForMyPractice/images/linkedIn.svg";
});

const para6 = document.getElementById("para6");
document.getElementById("input4").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        para6.innerText = document.getElementById("input4").value;
        document.getElementById("input4").value = "";
    }
});

document.getElementById("box2").addEventListener("dblclick", function(){
    this.style.cssText = "background-color: pink; font-weight: bold;";
});

const para7 = document.getElementById("para7");
document.getElementById("btn9").addEventListener("click", function(){
    para7.innerText = para7.innerText.toUpperCase();
});

const para8 = document.getElementById("para8");
const input5 = document.getElementById("input5");
input5.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        para8.innerText = input5.value;
    }
});

const input6 = document.getElementById("input6");
const para9 = document.getElementById("para9");
input6.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        para9.innerText += input6.value;
        input6.value = " ";
    }
});

const para10 = document.getElementById("para10");
document.getElementById("btn10").addEventListener("click", function(){
    para10.style.cssText = "color: white; background-color: lightblue;";
});

const box3 = document.getElementById("box3");
const btn11 = document.getElementById("btn11");
const color1 = ["red", "yellow", "orange", "blue"];
btn11.addEventListener("click", function(){
    let randomColor = Math.floor(Math.random() * color1.length);
    box3.style.backgroundColor = color1[randomColor];
});

const input7 = document.getElementById("input7");
const btn12 = document.getElementById("btn12");
const para11 = document.getElementById("para11");

btn12.addEventListener("click", function(){
    para11.innerText = input7.value.split("").reverse().join("");
    input7.value = "";
});

const input8 = document.getElementById("input8");
const btn13 = document.getElementById("btn13");
const para12 = document.getElementById("para12");
btn13.addEventListener("click", function(){
    let rev = input8.value.split("").reverse().join("");
    if(input8.value === rev){
        para12.innerText = "Yes, it's a palindrome";
    }
    else{
        para12.innerText = "No, it's not a palindrome";
    }
});

const input9 = document.getElementById("input9");
const btn14 = document.getElementById("btn14");
const para13 = document.getElementById("para13");
btn14.addEventListener("click", function(){
    let text = input9.value.trim();
    let words = text.split(" ").filter(word => word !== "").length;
    let l1 = input9.value.length;
    para13.innerText = `Word: ${words}, Characters: ${l1}`;
    input9.value = "";
}); 

const input10 = document.getElementById("input10");
const btn15 = document.getElementById("btn15");
const para14 = document.getElementById("para14");
btn15.addEventListener("click", function(){
    if(input10.value % 2 === 0){
        para14.innerText = `${input10.value} is Even.`;
    }
    else{
        para14.innerText = `${input10.value} is Odd.`;
    }
    input10.value = "";
});

const input11 = document.getElementById("input11");
const btn16 = document.getElementById("btn16");
const para15 = document.getElementById("para15");
btn16.addEventListener("click", function(){
    if(input11.value === ""){
        para15.innerText = "Please Enter Something!";
    }
    else{
        para15.innerText = input11.value.toUpperCase();
    }
});

const input12 = document.getElementById("input12");
const btn17 = document.getElementById("btn17");
const para16 = document.getElementById("para16");
btn17.addEventListener("click", function(){
    let num = Number(input12.value);
    if(isNaN(num)){
        para16.innerText = "Please enter a valid Number";
    }
    else{
        para16.innerText = `Square: ${num**2}`;
    }
    input12.value = "";
});

const input13 = document.getElementById("input13");
const btn18 = document.getElementById("btn18");
const para17 = document.getElementById("para17");
btn18.addEventListener("click", function(){
    let fact = 1;
    if(input13.value > 0){
        for(let i = 1; i <= input13.value; i++){
            fact *= i;
        }
        para17.innerText = fact;
    }
    else{
        para17.innerText = "Please enter a positive number";
    }
    input13.value = "";
});


const para18 = document.getElementById("para18");
document.getElementById("input14").addEventListener("input", function(){
    let count = document.getElementById("input14").value;
    para18.innerText = `Characters: ${count.length}/50`;
    if(count.length > 50){
        para18.innerText = "Limit Exceeded!";
        para18.style.color = "red";
    }
    else{
        para18.style.color = "black";
    }
});

const input15 = document.getElementById("input15");
const btn19 = document.getElementById("btn19");
btn19.addEventListener("click", function(){
    if(input15.type === "password"){
        input15.type = "text";
        btn19.textContent = "🙈";
    }
    else{
        input15.type = "password";
        btn19.textContent = "👁️";
    }
})


const btn20 = document.getElementById("btn20");
let darkMode = false;
btn20.addEventListener("click", function () {
    darkMode = !darkMode; // toggle kar diya
    if (darkMode) {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "white";
        btn20.innerText = "Switch to Light Mode";
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "black";
        btn20.innerText = "Switch to Dark Mode";
    }
});

