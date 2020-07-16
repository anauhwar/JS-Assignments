// String methods
var str = "Hey LetsUpgrade";
var n = str.search("LetsUpgrade"); //search
console.log(n);

var res = str.slice(4, 14);  //slice
console.log(res);

var res2 = str.split(" "); //split
console.log(res2);

var n = str.startsWith("Hey");  //startswith
console.log(n);

var res3 = str.substr(4, 4); //substr
console.log(res3);

var res4 = str.substring(4, 7);  //substring
console.log(res4);

var res5 = str.toLowerCase();  //lower case
console.log(res5);

var res6 = str.toString();  // to string
console.log(res6);

var res7 = str.toUpperCase();  // upper case
console.log(res7);

alert(str.trim());  //trim

//Array methods

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.shift();  // Removes the first 
console.log(fruits);


var fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit[fruit.length] = "Kiwi";  //add the new element
console.log(fruit);


var fruit2 = ["Banana", "Orange", "Apple", "Mango"];
delete fruit2[0];   //delete the element
console.log(fruit2);


var fruit3 = ["Banana", "Orange", "Apple", "Mango"];
fruit3.splice(2, 0, "Lemon", "Kiwi"); //add  the element 
console.log(fruit3);

var fruit4 = ["Banana", "Orange", "Apple", "Mango"];
fruit4.splice(2, 2, "Lemon", "Kiwi"); //replace the element
console.log(fruit4);