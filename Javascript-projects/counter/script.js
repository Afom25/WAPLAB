// /** 
//  * app2.js
//  */
// var p = 50;
// var q = 100;
// var r = function (p, q, r) {
//     console.log(`a = ${a}`);
//     console.log("q =" + q);
//     var s = function (p, q, r) {
//         p = r;
//         console.log(`p=${p}`);
//         p = q;
//         r = r * 2;
//         var a = 75;
//         return r;
//     }
//     return s(p, q, r);
// }
// a = 17;
// q = r(18, 19, 100);
// console.log("p= " + p);
// console.log(`q = ${q}`);






// var count = 0;

// function changeCount(num) {
//     count += num;
//     document.getElementById("count").innerHTML =
//         count;
// }

// function codeHoist() {
//     a = 10;
//     let b = 50;
//     b = 50;
// }
// codeHoist();

// console.log(a); // 10
// console.log(b);

x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
    console.log(x);
    console.log(a);
    var f = function (a, b, c) {
        b = a;
        console.log(b);
        b = c;
        var x = 5;

    }
    f(a, b, c);
    console.log(b);
    var x = 10;
}
c(8, 9, 10);
console.log(b);
console.log(x);

function calc(add, base, ...numbers) {
    var val = numbers.reduce((accumulator, num) => accumulator + num, base);
    return add + val;
}
var total = calc(3, 6, 1, 4, 9, 5);
console.log(total);

