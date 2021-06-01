var date = new Date();
console.log(date);

var personName = ["Jony","Rony","sony","bony","tony","fony","kony"];
var partnerName =personName.slice(0,3);
console.log(partnerName);
console.log(personName);

//Array

var age = [32,90,87,67,56];
var kimAge = age[2];
console.log(kimAge);
age[1] = 25;
console.log(age.length);
var positionKimAge = age.indexOf(25);
console.log(positionKimAge);
age.push(30); //add elements in the end
age.push(50);
age.unshift(12);//add elements at the begining
age.pop()
age.shift()
console.log(age);
