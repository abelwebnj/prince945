//getting elements by tagname
console.log("hello world!!");
const h1=document.getElementsByTagName("h1");
console.log(h1);

//getting elements by classname
document.getElementsByClassName("classname");//syntax
//const title=document.getElementsByClassName("heading");

//getting elements by id
// document.getElementsById("id");//
const title=document.getElementById("heading");
console.log(title);
//getting element by queryseletor
document.querySelector("class id tagname attribute");
const headings= document.querySelector("#container");
console.log(headings);