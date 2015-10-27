// ///Change inner html to "Hello Cats"
// var myHeading = document.querySelector('h1');
// myHeading.innerHTML = 'Hello Cats!';

// //Alert... the cat is crying
// var myVariable = document.querySelector('h1');
// alert('MEEAAOOW!!!');


// ////process and pass function into html
// var myHeading = document.querySelector('h1');

// function multiply(num1,num2) {
//   var result = num1 * num2;
//   return result;
// }
// // myHeading.innerHTML = multiply(20,20);
// myHeading.innerHTML = multiply(0.5,3);


//FUNCTION AS VARIABLE
// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
// }
// var temp=2000;
// var myVariable = document.querySelector('h1');
// document.getElementById("title").innerHTML = "The temperature is " + toCelsius(temp) + " Celsius";


////click html to change inner html text
// var myHeading = document.querySelector('h1');

// document.querySelector('h1').onclick = function() {
//     myHeading.innerHTML = 'HTML CLICKED';
// }

// ////click html to change inner html text
// var myHeading = document.querySelector('h1');

// var myHTML = document.querySelector('html');

// myHTML.onclick = function() {
// 	myHeading.innerHTML = 'HTML CLICKED';
// };


// //TOGGLE IMAGE
// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/cat.png') {
//       myImage.setAttribute ('src','images/dog.png');
//     } else {
//       myImage.setAttribute ('src','images/cat.png');
//     }
// }


///Change users and store in local storage
// var myButton = document.querySelector('button');

// var myHeading = document.querySelector('h1');

// function setUserName() {
// 	var storedName = localStorage.getItem('name');
// 	if (!localStorage.getItem('name')){
// myHeading.innerHTML = 'NO USER IN LOCAL STORAGE';
// }
//   var myName = prompt('Please enter your name.');
// if (storedName==myName){
// 	myHeading.innerHTML = 'Welcome back, ' + myName;
// }else{
// 	myHeading.innerHTML = myName +' placed in local storage';
// 	localStorage.setItem('name', myName);
// }
// }

// g.onclick = function() {
//   setUserName();
// }



// //CHANGE COLOR & SIZE
// function red() {
//     var x = document.getElementById("demo");
//     x.style.fontSize = "25px";           
//     x.style.color = "red"; 
// }
// function blue() {
//     var x = document.getElementById("demo");
//     x.style.fontSize = "10px";           
//     x.style.color = "blue"; 
// }


///VALIDATE NUMBER
// function validateNumber() {
//     var x, text;
//     // Get the value of the input field with id="numb"
//     x = document.getElementById("numb").value;
//     // If x is Not a Number or less than one or greater than 10
//     if (isNaN(x) || x < 1 || x > 10) {
//         text = "Input not valid";
//     } else {
//         text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
// }


//ADDRESS HTML DOCUMENT
// function alertWindow(){
// window.alert(5 + 6);}

// function docWrite(){
// document.write(5 + 6);}


//OBJECTS 
// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// var car = {type:"Fiat", model:500, color:"white"};
// document.getElementById("demo").innerHTML = car;
// document.getElementById("demo").innerHTML = car.type;
// document.getElementById("demo").innerHTML = person["age"];



// / ARRAYS
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Cherry"); 
// fruits.sort();
// fruits[fruits.length] = "Lemon"; 
// document.getElementById("demo").innerHTML = fruits.length;
// document.getElementById("demo2").innerHTML = fruits;


//Button to list
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// function list() {
    
//     var text = "<ul>";

//     for (var index = 0; index < fruits.length; index++) {
//         text += "<li>" + fruits[index] + "</li>";
//     }
//     text += "</ul>";
//     document.getElementById("demo").innerHTML = text;
// }


///////JSON
var text = {"adresses":[
{
	"name":"John Johnson",
	"street":"Oslo West 16",
	"phone":"555 1234567"},

{	"name":"Ayo Okunseinde",
	"street":"235 Jefferson",
	"phone":"555 789098"},

{	"name":"Darke Idiot",
	"street":"0 Dance Skills",
	"phone":"555 777777"},
]};
document.getElementById("demo").innerHTML = text.adresses[0].name + "<br>" + text.adresses[1].name + "<br>" +
text.adresses[2].phone[8];





