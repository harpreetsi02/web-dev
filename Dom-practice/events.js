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

// document.getElementById("box2").addEventListener("mousemove", function(e){
//     this.textContent = `X:${e.offsetX}, Y:${e.offsetY}`;
// });

// document.getElementById("input1").addEventListener("keypress", function(e){
//     if(e.key === "Enter") alert("enter pressed in input1;")
// });

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

document.getElementById("drag1").addEventListener("dragstart", function(){
    console.log("drag started");
});

document.getElementById("drop1").addEventListener("dragover", function(e){
    e.preventDefault();
    this.style.backgroundColor = "lightblue";
});

document.getElementById("drop1").addEventListener("drop", function(e){
    e.preventDefault();
    this.textContent = "Dropped";
    this.style.backgroundColor = "";
});

document.getElementById("box2").addEventListener("mouseenter", function(){
    this.style.border = "2px solid green";
});

document.getElementById("box2").addEventListener("mouseleave", function(){
    this.style.border = "";
});

document.getElementById("input1").addEventListener("copy", function(){
    alert("text copy");
});

document.getElementById("check1").addEventListener("click", function(){
    this.checked = !this.checked;
});

document.getElementById("btn3").addEventListener("mouseover", function(){
    this.style.backgroundColor = "yellow";
    this.style.border = "none";
    this.style.padding = "5px";
});

document.getElementById("btn3").addEventListener("mouseout", function(){
    this.style.backgroundColor = "";
    this.style.border = "";
    this.style.padding = "";
});

let customEvent = new Event("MyEvent");
document.getElementById("box4").addEventListener("MyEvent", function(){
    alert("Custom event trigger");
});

document.getElementById("triggerBtn").addEventListener("click", function(){
    document.getElementById("box4").dispatchEvent(customEvent);
});

document.getElementById("input1").addEventListener("focusin", function(){
    console.log("focusin on input1");
});

document.getElementById("input1").addEventListener("focusout", function(){
    console.log("focusout on input1");
});

document.getElementById("input3").addEventListener("input", function(){
    if(this.value.length > 5) alert("Max 5 charactor Allowed!");
});

document.getElementById("box1").addEventListener("contextmenu", function(e){
    e.preventDefault();
    alert("This is blocked!");
});

document.getElementById("drag1").addEventListener("dragend", function(){
    console.log("Drag function end");
});

document.getElementById("input1").addEventListener("select", function(){
    console.log("the Selected value: ", this.value);
});

document.getElementById("input1").addEventListener("blur", function(){
    if(this.value === "") alert("The input is not be empty");
});

document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("mouseover", function(){
        this.style.opacity = "0.5";
    });
});

document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("mouseout", function(){
        this.style.opacity = "1";
    });
});

document.getElementById("box1").addEventListener("click", function(e){
    e.stopPropagation();
    alert("Box3 clicked - propagation stopped!");
});
document.body.addEventListener("click", function(){
    alert("Body clicked");
});
