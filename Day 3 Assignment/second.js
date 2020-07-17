var name = prompt("Plaese enter the OS name and Version (give space bettwen them): ","Android 9"); // taking input 

var name1 = name.split(" ");//split
console.log(`The OS name is ${name1[0]} and version is ${name1[1]}`);//print