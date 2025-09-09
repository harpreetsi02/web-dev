// asking question
// 11. Enter key in input1
document.getElementById("input1").addEventListener("keypress", function(e){
    if(e.key === "Enter") alert("enter pressed in input1;")
})

// asking question
// 10. Keyup - log key
document.addEventListener("keydown", function(e){
    console.log("Key Up:", e.key);
})

// asking question
// 6. Mousemove coordinates in box2
document.getElementById("box2").addEventListener("mousemove", function(e){
    this.textContent = `X:${e.offsetX}, Y:${e.offsetY}`;
})

// asking question
// 15. Input event input3
document.getElementById("input3").addEventListener("input", function(){
    console.log(this.value);
});

// asking question
// 17. Checkbox change
document.getElementById("check1").addEventListener("change", function(){
    console.log("Checked: " + this.value);
});

// asking question
// 18. Window load
window.addEventListener("load", function(){
    console.log("page loaded");
});