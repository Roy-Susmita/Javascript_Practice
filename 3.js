var nums = [90,88,55,66,44,11];
for(var i = 0;i<nums.length;i++){
    console.log(nums[i]);
}

// switch case
var expr = "Strawberries";
switch (expr) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log('Sorry, we are out of ' + expr + '.');
  }
  
  console.log("Is there anything else you'd like?");

  //
var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log('default')
    // fall-through
    break;
  case 1:
    console.log('1');
}
//

var Animal = 'Cat';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
      break;
  default:
    console.log('This animal is extinct.');
}


//Multi case chain operation

var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}