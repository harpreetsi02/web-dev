// document.getElementById("btn1").addEventListener("click", function(){
//     alert("button 1 clicked");
// });

// document.getElementById("btn2").addEventListener("click", function(){
//     this.textContent = "Clicked!";
// });

document.getElementById("btn3").addEventListener("click", function(){
    document.body.style.backgroundColor = "lightblue";
});

document.getElementById("box1").addEventListener("mouseover", function(){
    this.style.backgroundColor = "yellow";
});

document.getElementById("box1").addEventListener("mouseout", function(){
    this.style.backgroundColor = "red";
});

document.getElementById("box3").addEventListener("mousedown", function(){
    this.style.border = "2px solid black";
});

document.getElementById("box3").addEventListener("mouseup", function(){
    this.style.border = "none";
});

document.addEventListener("keydown", function(e){
    console.log("Key Up:", e.key);
});

document.getElementById("box2").addEventListener("mousemove", function(e){
    this.textContent = `X:${e.offsetX}, Y:${e.offsetY}`;
});

document.getElementById("input1").addEventListener("keypress", function(e){
    if(e.key === "Enter") alert("enter pressed in input1;")
});

document.getElementById("form1").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Form Submitted!");
});

document.getElementById("input2").addEventListener("focus", function(){
    this.style.backgroundColor = "lightblue";
});

document.getElementById("input2").addEventListener("blur", function(){
    this.style.backgroundColor = "";
});

document.getElementById("input3").addEventListener("input", function(){
    console.log(this.value);
});

document.getElementById("select1").addEventListener("change", function(){
    alert("Selected: " + this.value);
});

document.getElementById("check1").addEventListener("change", function(){
    console.log("Checked: " + this.value);
});

window.addEventListener("load", function(){
    console.log("page loaded");
});

document.getElementById("box1").addEventListener("click", function(){
    this.classList.toggle("active");
});

document.getElementById("btn1").addEventListener("dblclick", function(){
    alert("double click button");
});

document.getElementById("btn2").addEventListener("contextmenu", function(e){
    e.preventDefault();
    alert("Right button click");
});

