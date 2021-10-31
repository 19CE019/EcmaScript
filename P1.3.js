//-------------------------------------------------map
const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  var x = persons.map(getFullName);
  console.log(x);
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }
//-------------------------------------------------filter
const ages = [32, 33, 16, 40];

var x = ages.filter(checkAdult)    // Returns [32, 33, 40]
console.log(x);
function checkAdult(age) {
  return age >= 18;
}

//-------------------------------------------------reduce
const numbers = [15.5, 2.3, 1.1, 4.7];
var x = numbers.reduce(getSum, 0);
console.log(x);
function getSum(total, num) {
  return total + Math.round(num);
}
var x="Yagnik 19CE019";
console.log(x);