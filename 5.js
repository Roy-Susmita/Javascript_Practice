// Object
//Object should have second bracket or curly bracket.
//Objects are variables too. But objects can contain many values. 
var student1 = {id: 100,phone: 987,name:"lee min ho"};
var student2 = {id: 101,phone: 900,name:"berk atan"};
console.log(student1,student2);

// Accessing Object Properties
// Object properties can be accessed in three(3) different ways.
//1-> obejectname.propertyname
var phoneNo = student1.phone;
console.log(phoneNo); 
 //2-> objectname["propertyname"]
 var idNo2 = student2["id"];
 console.log(idNo2);
//3-> store property in a variable
var phonePropName = "phone";
var phoneNo = student1[phonePropName];
console.log(phoneNo);
//update
student1["phone"] = "9090";
console.log(phoneNo);
console.log(student1);
//New property add
student1.drama = "eternal king";
console.log(student1);
