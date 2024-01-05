// if(2 === "2") {
//     console.log("this is true")
// } else {
//     console.log("this is false")
// }


// if (1 !="1") {
//     console.log(true)
// }  else {
//     console.log(false)
// }

// let age = 16;
// let canDrink = (age<18) ? "too young" : "old enough"

// console.log(canDrink)



// ACTIVITY 1 //


// let age = 17
// let country = "UK"

// if (age > 17 && country === "UK" ) {
//     console.log("Yes I can serve you")
// } else {
//     console.log("You aren't old enough under UK Law")
// }






////  ACTIVITY 2 ////

// let topping = "Anchovies";

// switch(topping) {
//     case "Mozzarella":
//     case "Mozzarella Bufala":
//     case "Tomato sauce":
//         console.log("These are important ingredients for my pizza.");
//         break;
//     case "Artichoke":
//     case "Feta":
//     case "Mushrooms":
//     case "Chicken":
//         console.log(`I don't mind having ${topping} on my pizza.`);
//         break;
//     case "Pineapple":  
//     case "Anchovies":
//     case "Tuna":
//         console.log(`${topping} should not be on a pizza.`)
//         break;
//     default:
//         console.log(`Is ${topping} even a pizza topping though?`);

// }



////// ACTIVITY 3 ////////

// let password = "Password1!"

// if (password.length < 8) {
//     console.log("Your password is too short.");
// } else {
//     console.log(`Your password is "${password}"`)
// }

// let num = 99985735

// if (num%3 === 0 || num%5 === 0) {
//     console.log("This number is divisible by 3 or 5")
// } else {
//     console.log("INCORRECT!")
// }


//// ACTIVITY 4 //////

// let num = 15

// if (num % 3 ===0 && num % 5=== 0) {
//     console.log("fizz buzz")
// } else if (num%3 === 0 ) {
//     console.log("fizz")
// } else if (num%5 === 0) {
//     console.log("buzz")
// } else {
//     console.log(num)
// }


/////// ACTIVITY 5 ////////

// let num = 1221

// let numRev = num.toString().split("").reverse().join("")*Math.sign(num);

// if (numRev === num) {
//     console.log("Yep it's a palindrome")
// } else {
//     console.log("Not a palindrome, just a regular old number.")
// }



// /////// ACTIVITY 6 ///////////////

// let time = 4
// let placeOfWOrk = "in Luton";
// let townOfHome = "in Slough";
// let where = []

// if (time >= 9 && time <= 17 ) {
//     where = placeOfWOrk;
// } else if (time === 8 || time === 18) {
//     where = "commuting";
// } else if (time >=0 && time <= 7) {
//     where = townOfHome;
// } else if( time >=17 && time < 24) {
//     where = townOfHome;
// } else {
//     where = "nowhere";
// }

// console.log(`At ${time}:00hrs I'm ${where}`)


////////ACTIVITY 7 ///////////

// let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"



// for (let i = str.length ; i > 0 ; i--) {
//     if(str[i]=== "a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u") {
//         console.log("The last vowel is " + str[i] + " at index " + [i])
//         console.log(i)
//         break;
//     } else {
//         console.log("didnt work")
//     }
// }




////////////////  ACTIVITY 8 ////////////////

// let word = "hsgdifhswksaldhsh"

// if(word.charAt(word.length -1) === word[0]) {
//     console.log(true);
// } else {
//     console.log(false);
// }



////////////////////////  ACTIVITY 9 //////////////////////////

let num1 = 72
let num2 = 59
let sum = num1 + num2

if(sum %2 === 0) {
    console.log("2")
}
