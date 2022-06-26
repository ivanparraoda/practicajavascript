document.getElementsByClassName(boton).addEventListener("click",show)

function show(boton){
var element = document.getElementById("myDIV");
   element.classList.toggle("mystyle");
}