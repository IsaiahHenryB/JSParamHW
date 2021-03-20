let myname = prompt("What's your name?")

let num = Number(prompt("choose a number"))

let numOne = Number(prompt("choose another number"));

let numTwo = Number(prompt("choose yet another number"));

let mytopic = Number(prompt("What's your favorite math topic?"));

function plusTwThree(num){
    return 23 + num;
}
console.log(plusTwThree(num))

function minusSevSeven(num){
    return num - 77;
}
console.log(minusSevSeven(num))

function timesTwo(num){
    return num * 2;
}
console.log(timesTwo(num))

function divByThree(num){
    return num / 3;
}
console.log(divByThree(num))

function name(myname){
    return `I'm ${myname} and I love math.`
}
console.log(name(myname))

function multiply(numOne, numTwo){
    return numOne + numTwo;
}
console.log(multiply(numOne, numTwo))

function divide(numOne, numTwo){
    return numOne / numTwo;
}
console.log(divide(numOne, numTwo))

function sub(numOne, numTwo){
    return numOne - numTwo;
}
console.log(sub(numOne, numTwo))

function add(numOne, numTwo){
    return numOne + numTwo;
}
console.log(add(numOne, numTwo))

function topic(myname, mytopic){
    return `I'm ${myname} and ${mytopic} is my favorite math topic!`
}
console.log(topic(myname, mytopic))