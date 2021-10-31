//----------------------------------------------------destructuring assignment
var names = ["alpha", "beta", "gamma", "delta"];

var firstName = names[0];
var secondName = names[1];

console.log(firstName);//"alpha"
console.log(secondName);//"beta"
//----------------------------------------------------array destructuring
var names = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = names;

console.log(firstName);//"alpha"
console.log(secondName);//"beta"

//Both of the procedure are same
var [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];

console.log(firstName);//"alpha"
console.log(secondName);//"beta
//----------------------------------------------------object destructuring
var marks = { x: 21, y: -34, z: 47 };

var x = marks.x; // x = 21
var y = marks.y; // y = -34
var z = marks.z; // z = 47

console.log(x);
console.log(y);
console.log(z);
var z = "Yagnik 19CE019";
console.log(z);
