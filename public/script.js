var loader = document.getElementById("loading-state");
var content = document.getElementsByClassName("hide-content")[0];

window.addEventListener("load", function(){
    setTimeout(function(){
        loader.style.display = "none";
    }, 3000); // 3000 milliseconds = 3 seconds
});

window.addEventListener("load", function(){
    setTimeout(function(){
        content.style.display = "block";
    }, 3050); // 3000 milliseconds = 3 seconds
});

