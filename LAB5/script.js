//// question 1
function max(firstNum, secondNum) {
    if (firstNum > secondNum) {
        console.log(firstNum + "" + " is larger than " + "" + secondNum);
    }
    else {
        console.log(firstNum + "" + " is less than  " + "" + secondNum);
    }
    return;
}

max(20, 3);

///// question2
function maxOfThree(numOne, numTwo, numThree) {
    if (numOne > numTwo && numOne > numThree) {
        console.log("maxofThree  " + "" + numOne);
    } else if (numTwo > numOne && numTwo > numThree) {
        console.log("maxofThree  " + "" + numTwo);
    } else {
        console.log(" maxofThree " + "" + numThree);
    }
}

maxOfThree(14, 82, 50);

///////question 3
function isVowel(char) {
    if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u') || (char
        ===
        'a')) {
        return true;
    } else {
        return false;
    }
}
var char = "a";


if (isVowel(char)) {
    console.log(char + " is a vowel");
} else {
    console.log(char + " is not a vowel");
}

/// question 4

// const sum = (a) => {
//     for (let n of a) {
//         sum += n;
//     }
//     return sum;
// }
// const a = [1, 2, 3, 4];
// console.log(`the sum of numbers in ${a} is ${sum(a)}`)

/// question 5 

function reverse(str) {
    var text = '';
    for (var i = str.length - 1; i >= 0; i--) {
        text += str[i];
        continue
    }
    return text.toLowerCase();
}
console.log(reverse("jag testar"));





////question 9

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const odds = [];
arr.forEach(number => {
    if (number % 2 !== 0) {
        odds.push(number);
    }
});
console.log(odds); // [1, 3, 5, 7, 9]

///question15


var date = new Date();
var current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
var current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
var date_time = current_date + " " + " " + current_time;
document.getElementById("p1").innerHTML = date_time;


const btns = document.querySelectorAll('.question-btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const question = (e.currentTarget.parentElement.parentElement);
        question.classList.toggle('show-answer');
    });
});
