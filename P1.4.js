//-----------------------------------------------------callback
function myDisplayer(some) {
    var x = some;
    console.log(x);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

//-----------------------------------------------------promises
function myDisplayer(some) {
    var x = some;
    console.log(x);
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    // The producing code (this may take some time)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function (value) { myDisplayer(value); },
    function (error) { myDisplayer(error); }
);

//-----------------------------------------------------Async/Await

async function myDisplay() {
    let myPromise = new Promise(function (myResolve, myReject) {
        setTimeout(function () { myResolve("I love You !!"); }, 3000);
    });
    var x = await myPromise;
    console.log(x);
}

myDisplay();
var x = "Yagnik 19CE019";
console.log(x);