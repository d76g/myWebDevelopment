// var n = confirm ("You Want A Random Number from 0 - 10 ...");
// function Random() {
// if (n == true) {
//   var random = Math.ceil((Math.random() * 10) + 1);
//   alert(random);
//
//   }
//   else
//   {
//     alert("Thank You");
//   }
// }



// var r = confirm("Hi");
// if (r == true) {
//   var n = Math.ceil((Math.Random() * 10) + 1);
//   alert(n);
// }
// else {
//   alert("You Pressed Cancel")
// }

// var n = Math.ceil((Math.random() * 10) + 1);
// document.getElementById('demo'). innerHTML = n;

// var n = Math.sqrt(81);
// document.write(n);
//
// var d3 = new Date();
// var year = d3.getFullYear()
// var month = d3.getMonth();
// var day = d3.getDate();
// var hours = d3.getHours();
// document.getElementById('demo'). innerHTML = "It's " + day +" of " + month + " at " + year;

// function myText() {
//   var a = document.getElementById('demo');
//   var arr = a.childNodes;
//   for (var x = 0 ; x < arr.length;x++) {
//     arr[0].innerHTML = "new text";
//   }
// }
// setTimeout(myText, 500);

// window.onload = function() {
//   var el = document.getElementsByTagName('a');
//   el[0].href = 'http://www.sololearn.com';
// };
// window.onload = function () {
// var el = document.getElementById('imgs');
// el.src = "pic2.png";
// };

// window.onload = function( ) {
//   var x = document.getElementById('demo');
//   x.style.width = "400px";
//   x.style.backgroundColor = "#00008B";
//   //y.style.background = #000;
// }
// window.onload = function( ) {
// var p = document.createElement("p");
// var node = document.createTextNode("New Paragraph created by JS");
// p.appendChild(node);
// var div = document.getElementById("demo");
// div.appendChild(p);
// };

// window.onload = function () {
//   var h1 = document.createElement('h1');
//   var node = document.createTextNode("Welcome");
//   h1.appendChild(node);
//   var div = document.getElementById('demo');
//   div.appendChild(h1);
// }

// window.onload = function() {
//
//   // var p = document.getElementById('p1');
//   // p.parentNode.removeChild(p);
//   var p4 = document.createElement("p4");
//   var node = document.createTextNode("This is forth Paragraph");
//   p4.appendChild(node);
//   var parent = document.getElementById('demo');
//   var newP = document.getElementById('p3');
//   parent.replaceChild(p4 , newP);
//
// };
// window.onload = function() {
//   var p = document.createElement("p");
//   var node = document.createTextNode("This is a replaceChild");
//   p.appendChild(node);
//
//   var div = document.getElementById('demo');
//   var newP = document.getElementById('p2');
//   div.replaceChild(p,newP);
// }
// window.onload = function () {
//   var pos = 0 ;
//   var box = document.getElementById('box');
//   var t = setInterval(move,10);
//
//   function move() {
//     if(pos >=140) {
//       clearInterval(t);
//     }
//     else {
//       pos+=1;
//       box.style.left = pos+'px';
//     }
//   }
// }

// function show() {
//   var txt;
//   var p = confirm("Sure");
//     if (p == true) {
//       txt = "Confirmed";
//     }
//     else {
//       txt = "Not Confirmed";
//     }
//     document.getElementById('p1').innerHTML = txt;
// }
// window.onload = function() {
//   var x = document.getElementById('b1');
//   x.addEventListener("click", show , false);
//   function show() {
//     alert(Date());
//     x.removeEventListener("click", show, false);
//   }
// }

// var Images = [
//   "pic1.png",
//   "pic2.png"
// ];
// var num = 0;
//
// function next() {
//   var slider = document.getElementById("Slider");
//   num++;
//   if (num >= Images.length){
//     num = 0;
//   }
//   Slider.src = Images[num];
// }
// function Prev() {
//   var Slider = document.getElementById('Slider');
//   num--;
//   if (num <0){
//     num = Images.length-1;
//   }
//   Slider.src= Images[num];
// }

// function Validate() {
//   var n1 = document.getElementById('num1');
//   var n2 = document.getElementById('num2');
//   if (n1.value !='' && n2.value != ''){
//     if(n1.value == n2.value){
//       return true;
//     }
//   }
//   alert("Numbers Must Be Same  !!");
//   return false;
// }
// function varTest() {
//     var x = 1;
//     if (true) {
//         var x = 2;  // same variable
//         console.log(x);  // 2
//     }
//     console.log(x);  // 2
// }
//
// function letTest() {
//     let x = 1;
//     if (true) {
//         let x = 2;  // different variable
//         console.log(x);  // 2
//     }
//     console.log(x);  // 1
// }
//
// varTest();
// letTest();
// let name = 'Bashar';
// console.log(`Welcome ${name} !`);

// const message = x => "Welcome "+x;
// document.write(message("Ali"));
//
// const x = () => alert("Log in");
// x();

// let tree = {
//   height : 10,
//   color : 'Green',
//   grow(){
//     this.height +=2;
//   }
// };
// tree.grow();
// document.write(tree.height);

// let prop = 'Jack';
// let id = '1234';
// let mobile = '08923';
//
// let user = {
//   [`user_${prop}`]: `${prop}`,
//   // [`user_${mobile}`]:`${mobile}`,
//   // [`user_${id}`]: `${id}`
//   [`user_${id}`]: `${id}`
//
// };
// document.write(user.user_Jack);
// document.write(user.user_1234);
// // document.write(user.user_08923);
// let person = {
//     name: 'Jack',
//     age: 18,
//     sex: 'male'
// };
// let student = {
//     name: 'Bob',
//     age: 20,
//     xp: '2'
// };
//
// let newStudent = Object.assign({}, person, student);
//
// console.log(newStudent.name); // Bob
// console.log(newStudent.age); // 20
// console.log(newStudent.sex); // male
// console.log(newStudent.xp); // 2
// let {a, b} = {a:'Hello ' , b: 'Jack'};
//
// document.write(a+b);

// function containAll(arr, ...nums) {
//   for (let num of nums) {
//     if (arr.indexOf(num) === -1) {
//       return false;
//     }
//   }
//   return true;
// }
// let x = [2,4,6,7];
// document.write(containAll(x,2,4,7));
// document.write(containAll(x,2,4,6));

// function magic(...nums) {
//   let sum = 0;
//   nums.filter(n => n % 2 == 0).map(el => sum+= el);
//   return sum;
// }
// console.log(magic(1, 2, 3, 4, 5, 6));

// let map = new Map();
// map.set ('k1','v1').set('k2','v2').set ('k3', 'v3');
//
// // document.write(map.get('k3'));
// // document.write(map.has('k2'));
//
// for (let kv of map.entries())
// document.write(" " + kv[0] + " : " + kv[1])

// let set = new Set([1 , 2 , 3 , 4, 56, 98, 9]);
// set.add(5);
// document.write(set.has(5));
// document.write("<br>")
// document.write(set.delete(5));
// document.write("<br>")
// for (let s of set.values())
//   document.write(" " + s);
// // document.write(set.size);
//## Promise Chapter ##
// function displayer (some) {
// document.getElementById('demo').innerHTML = some;
// }
//
// let _Promise = new Promise (function(myResolve , myReject) {
//   let x = 1;
//
//   if ( x == 0){
//     myResolve("I love U !!");
//   }
//   else {
//     myReject("Error 100");
//   }
// });
//
// _Promise.then (
//   function(value){displayer(value);},
//   function(error){displayer(error);}
// );
// let myPromise = new Promise (function(myResolve, myReject){
//   setTimeout(function(){ myResolve("Error Occured"); }, 3000);
//  });
//
//
// myPromise.then (function(value) {
//   document.getElementById('demo').innerHTML = value;
// });
// const myPromise = new Promise(function(myResolve, myReject) {
//   setTimeout(function(){ myResolve("I love You !!"); }, 3000);
// });
//
// myPromise.then(function(value) {
//   document.getElementById("demo").innerHTML = value;
// });

// let myObj = {
//   [Symbol.iterator] : function *() {
//     yield 1 , yield 2 , yield 3;
//   }
// };
// document.write([...myObj]);

// var Car = {
//   model: "Perdo",
//   color: "Black",
//   year : "2021"
// }
// document.getElementById('demo').innerHTML = Car.color;

// var FirstName = "Bashar";
// var LasrName = "Alshaibani";
// var Age = 20;
//
// var info = `I am ${FirstName} ${LasrName} and I am ${Age} years old`;
// document.getElementById('demo').innerHTML = info;

// const Cars = ["BMW", "Perdoi", "Mercids"];
// Cars.push("Volvo");
// Cars.unshift("Jugur", "Honda");
// document.getElementById('demo').innerHTML = Cars;
// Cars.reverse();
// document.getElementById('demo1').innerHTML = Cars;
// const Slice = Cars.slice(1,3);
// document.getElementById('demo2').innerHTML = Slice;

// const Person = {
//   firstName : 'Bashar',
//   lastName : 'Alshaibani',
//   job : 'Information Technology Student',
//   dateOfbirth : 2001,
//
//    printName : function() {
//      document.getElementById('demo').innerHTML = (this.firstName + ' ' + this.lastName);
//    },
//
//    CalculateAge : function () {
//      Age =  2021 - this.dateOfbirth;
//      return Age;
//    }
// };
//
// document.getElementById('demo2').innerHTML = (Person.firstName +" is " + Person.CalculateAge() + " Years Old ,and he is an " + Person.job + " .");

// function showInfo() {
//   const firstName = document.getElementById('nameField')['value'];
//   const hpNumber= document.getElementById('hpField')['value'];
//   const address = document.getElementById('addressField')['value'];
//   alert("Welcome "+ firstName);
//   //document.getElementsByClassName('inputContainer').style.setProperty('--display', 'block');
//   document.getElementById('fName').innerHTML = "Your Name is " +firstName;
//   document.getElementById('hpNumber').innerHTML = "Your Phone Number  is " + hpNumber;
//   document.getElementById('address').innerHTML = "Your Address is " + address;
// };

// let x = 2;
// let y = 4;

// const object = {x : 22, y:40};
//     ({x , y} = object);

// console.log(x);
// console.log(y);

// const Gym = {
//     name : 'BuildSelf',
//     locations : ['KL' , 'Johor', 'Selangor'],
//     operationHours : {
//         Sat: {Open : 10 , Close : 12},
//         Sun : {Open : 10 , Close : 10},
//         Fri : {Open : 8, Close : 12}
//     }

// };

// const {locations} = Gym;
// console.log(locations);

// function printFullName(FN , LN , Age) {
//     console.log(`Your Name is ${FN} ${LN} and your are ${Age} years Old`);
// }
// const Names = ['Bashar' , 'Muhanna', 20];
// printFullName(...Names);

// const Add = function (...Number) {
//     let res = 0;
//     for (let x = 0 ; x < Number.length; x++) {
//         res += Number[x];
//     }
//     console.log(res);
// };
//
// Add (2 , 4);
// Add (3 , 9 , 10);
// Add (5 , 3 , 6 , 2 , 10);

// var person = {
//   name:"Bashar" , age:20,
//   favcolor:"Black", height:163
// }
//
// var x = person.name;
// var y = person['favcolor'];
// console.log(x);
// console.log(y);
// document.write(person.name.length);

// function Person(name, Age) {
//   this.name = name;
//   this.Age = Age;
//   //Function outside the constructor
//   this.yearOfBirtth = bornYear;
//   //Function inside constructor
//   this.changeName = function changeName(name) {
//     this.name = name;
//   }
// }
// function bornYear() {
//   return 2021 - this.Age;
// }
//
// let p1 = new Person('Bashar', 20);
// // document.write(p1.Age);
// p1.changeName('Ali');
// document.write(p1.name);
// document.write(p1.yearOfBirtth());

// var p = new Person("Bashar", 20);
// p.changeName('Ali');
// document.write(p.name);

// var courses = new Array("HTML", "CSS" , "JS");
// var course = courses[0];
//
// document.write(course);

// document.getElementById('myText').innerHTML = "Hello";
// var element = document.getElementById('demo') ;
// element.innerHTML = "Header";

// //Change the content of the same Tag
// var elementTag = document.getElementsByTagName('p');
// for (var x = 0 ; x < elementTag.length; x++) {
//   elementTag[x].innerHTML = 'Hi';
// }

// function myText() {
//   var text = document.getElementById('text');
//   var arr = text.childNodes;
//   for (x = 0; x <arr.length; x++) {
//     arr[x].innerHTML = 'Welcome';
//   }
// }
//
// setTimeout(myText, 1000)
// function myText2() {
//   var text = document.getElementById('text');
//   var arr = text.childNodes;
//   for (x = 0; x <arr.length; x++) {
//     arr[x].innerHTML = 'Hi';
//   }
// }
//
// setTimeout(myText2, 2000)
// function changeWidth() {
//   //change width of the container class
//   var x = document.getElementsByClassName("Container")[0];
//     x.style.['background-color'] = "#FF0000";
//     //Change all p tags color
//     var y = document.getElementsByTagName('p');
//     for (x = 0 ; x <y.length;x++) {
//       y[x].style.color = '#6600FF';
//     }
// }
// setTimeout(changeWidth,500)
//
// function changePcolor() {
//   //change color of a specific p using its indxe
//   var z = document.getElementsByTagName('p')[1];
//     z.style.color = '#FF0000';
// }
// setTimeout(changePcolor,600)

//Create New Element
// var p = document.createElement('p');
// var node = document.createTextNode("Hello");
// p.appendChild(node);
//
// var div = document.getElementById('text');
// div.appendChild(p);
// function removerParagraph() {
//   var parent = document.getElementById('text');
//   var child1 = document.getElementById('p1');
//   var child2 = document.getElementById('p2');
//     parent.removeChild(child1);
//     parent.removeChild(child2);
// }
//   setTimeout(removerParagraph,500)
//
// function addParagraph() {
//   var p = document.createElement('p');
//   //Create a class for an element
//   p.className = "p3";
//   var content = document.createTextNode("Welcome");
//   p.appendChild(content);
//   var div = document.getElementById('text');
//   div.appendChild(p);
// }
//   setTimeout(addParagraph,600)
//
//   //replaceChild
//   var x = document.createElement('p');
//   var content = document.createTextNode('Hola');
//   var parent = document.getElementById('text');
//   var child = document.getElementById('p1');
//   parent.replaceChild(content,child);

//JS animation
// window.onclick = function() {
//   var pos = 0;
//   var para = document.getElementById('p1');
//   var t = setInterval(move,10);
//   function move() {
//     if (pos >=130) {
//       clearInterval(t);
//     }
//     else {
//       pos +=1;
//       para.style.left = pos +'px';
//     }
//   }
// }

  // var x = document.getElementById('btn');
  // x.onclick = function () {
  //     var para = document.createElement('p');
  //     var date = document.createTextNode(Math.floor(Math.random()*10));
  //     var parent = document.getElementById('text');
  //     var child = document.getElementById('p1');
  //     parent.replaceChild(date,child);
  //
  //     //Change Style while using the same var for a button.
  //     x.style.color = 'red';
  //     x.style.backgroundColor = 'blue';
  // }
  //
  // window.onload = function () {
  //   var btn = document.getElementById('btn');
  //   btn.addEventListener("click",showDate);
  //
  //   function showDate() {
  //     var para = document.createElement('p');
  //     var date = document.createTextNode(Date());
  //     var parent = document.getElementById('text');
  //     var child = document.getElementById('p1');
  //     parent.replaceChild(date,child);
  //     btn.removeEventListener("click", showDate);
  //   }
  //   //Change button Inner Text
  //     btn.addEventListener("click",changebtnContent);
  //   function changebtnContent() {
  //     var btnContent = document.querySelector('#btn').innerText = 'Time is';
  //   }
  // }
  // //Form validation
  //   function validation() {
  //     var n1 = document.getElementById('num1');
  //     var n2 = document.getElementById('num2');
  //
  //     if (n1.value != '' && n2.value != '') {
  //       if (n1.value == n2.value) {
  //         alert('Numbers matched');
  //         return true;
  //       }
  //     }
  //     alert ('Numbers must be matched !!');
  //     return false;
  // }
  //Print String in ES6
// let name = 'Bashar';
// alert(`Welcome ${name} !`)

// //For in and For of
//
// //For in loops through the properties of an Object
// let arr = [1,2,3];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }
//
// let obj = {a:4, b:5};
// for (var k in obj) {
//   console.log(k);
// }
//
// // For/of loops through iterable objects
// let list = [1,2,3];
// for (var s of list) {
//   console.log(s);
// }
// for (var ch of "Bashar") {
//   console.log(ch);
// }

// var person = {fname:"Bashar" , age:20}
// var text = " ";
// var x;
//
// for (x in person) {
//   text = text + person[x] + " ";
// }
//   console.log(text);

// const add = (x,y) => {
//   let sum = x + y;
//   console.log(`The sum of ${x} and ${y} is ${sum} `);
// }
// add(6,7);
  //Function without function keyword and return
// const displayName = x => alert(`Welcome ${x}`);
// displayName("Bashar");

//Function without parameters and arguments
// const greeting = () => alert("Hi");
// greeting();

// //Using arrow function for inline funtion
// var arr = [1,2,3,4];
// arr.forEach(i => {
//   console.log(i * 2);
// });

// ES6 Objects
// let height = 10;
// let color = "green";
// let tree = {
//   height,
//   color,
//
//   colorfun(){
//     this.color = tree.color;
//     this.height += 2;
//   }
// }
// tree.colorfun();
// console.log(tree.color);
// console.log(tree.height);

// // use template literals (string interpolation)
// let id = "1"
// let name = "Bashar";
// let hpNumber = "+601128563327";
// let email = "basharalshaibani12@gmail.com";
//
// let user = {
//   //Use Index to number the variables
//   [`user_${id}0`]:  "Bashar",
//   [`user_${id}1`] : `${email}`,
//   [`user_${id}2`] : `${hpNumber}`
// }
//
// console.log(user.user_10);
// console.log(user.user_11);
// console.log(user.user_12);

// //Array Destructuring
// let arr = [1,2,3];
// let [one,two,three] = arr;
//
// console.log(one);
// console.log(two);

// //Another Way using Function
//
// let a = () => {
//   return [1,2,3]
// }
//
// let [one,two,three] = a();
// console.log(one);


//Object Destructuring
// let {a,b} = {a:"Hello", b: " Bashar"};
// console.log(a+b);

// //Assigning default values
// var obj = {id:22, name:'Bashar'};
// let {id=10, age=20} = obj ;
//
// console.log(id);
// console.log(age);

//Spread operator

// let printName = (fn, ln) => {
//   console.log(`Your name is ${fn} ${ln}`);
// }
// const names = ["Bashar", "Muhanna"];
// printName(...names);

// function* idMaker() {
//   let index = 1;
//   while (index <= 10)
//     yield index++;
// }
// var gen = idMaker();
//
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// Try to add one more console.log, just like the above see what happens.

// const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
// const my_obj = {
//   [Symbol.iterator]: function*() {
//     for(let index of arr) {
//       yield `${index}`;
//     }
//   }
// };
//
// const all = [...arr] /* Here you can replace the '[...my_obj]' with 'arr'. */
//   .map(i => parseInt(i, 10))
//   .map(Math.sqrt)
//   .filter((i) => i < 5) /* try changing the value of 5 to 4 see what happens.*/
//   // .reduce((i, d) => i + d); /* comment this line while you are changing the value of the line above */
//
// console.log(all);

/* Bubble Sort*/
// var arr = new Array(7,2,8,1,3,4);
// var i , j , temp;
//
// document.write("<br/>Before Sorting ..<br/>");
// for (i = 0; i < 6; i++) {
//   document.write(arr[i] + "<br/>");
// }
//
// for (i = 0; i < 6; i++) {
//   for ( j = 0; j < 5; j++) {
//     if (arr[j] > arr[j + 1]){
//       temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
//
// document.write("<br/>After Sorting ..<br/>");
// for (i = 0; i < 6; i++) {
//   document.write(arr[i] + "<br/>");
// }
