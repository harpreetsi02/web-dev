document.getElementById("btn1").addEventListener("click", function(){
    alert("Button Click!");
});

let para1 = document.getElementById("para1");
document.getElementById("btn2").addEventListener("click", function(){
    para1.innerText = "After click button";
});

document.getElementById("input1").addEventListener("input", function(){
    console.log(this.value);
});

{
    document.getElementById("image1").addEventListener("mouseover", function(){
        document.getElementById("image1").src = "/ForMyPractice/images/linkedIn.svg";
    });
    document.getElementById("image1").addEventListener("mouseout", function(){
        document.getElementById("image1").src = "/ForMyPractice/images/facebook.png";
    });
}

document.body.addEventListener("dblclick", function(){
    document.body.style.backgroundColor = "yellow";
});


let list1 = document.getElementById("list1");
document.getElementById("btn3").addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText += "Hello";
    list1.appendChild(li);
});

document.getElementById("btn4").addEventListener("mouseover", function(){
    this.style.backgroundColor = "red";
});