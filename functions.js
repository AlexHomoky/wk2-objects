// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds.")
// }

// pressGrindBeans()

// let colour = "redness"

// const favColour = () => {
//     console.log(`My fav colour is ${colour}`)

// }
// favColour()

// let coffeeIsGrinding = true;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the Grind Goggins")
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true
//     }
// }
// pressGrindBeans()
// pressGrindBeans()

// const cashwithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing $${amount} from account ${accnum}`);
// }

// cashwithdrawal(300, 34456677);
// cashwithdrawal(400, 12345653);
// cashwithdrawal(535, 24253654);

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addUp(18, 34));
// console.log(addUp(3, 4))




// const multNineFifths = (celsius) => {
//     return celsius*(9/5);
// }
// const getFarenheit = (celsius) => {
//     return multNineFifths(celsius) + 32;
// };

// console.log("The temp is " + getFarenheit(5) + "F")



//////////////////// ACTIVITY 1 ////////////////////

// const factorial = (n) => {
//     if(n===0 || n===1) {
//         return 1;
//     } else {
//         return (n*factorial(n-1));
//     }
// }
// console.log(factorial(33));



//////////////////////// ACTIVITY 2 /////////////////////////////////

// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log(`Pizza with ${topping1} and ${topping2}`);
//     orderCount++;
//     console.log(`the order count is currently ${orderCount}`)
// }
// takeOrder("Anchovies", "Pineapple");


///////////////////////////// ACTIVITY 3 /////////////////////////////

// let balance = 3233
// let pin = 1234


// const withdraw = (pinInput, amount) => {
//     const mult10 = (amount) => {
//         if (amount %10 ===0) {
//             return true;
//         } else {
//             return false;
//         } 
//     } ;
   
//     if (amount <= balance && pinInput === pin && mult10(amount) == false) {
//         console.log(`Please type the amount you wish to withdraw in multiples of £10`)
//     } else if(amount <= balance && pinInput === pin && mult10(amount) == true) {
//         console.log(`Withdrawing £${amount} from your account...`)
//     } else if (pin != pinInput) {
//         console.log(`Incorrect pin. Please try again.`)
//     } else if (pin = pinInput && amount > balance) {
//         console.log(`You have insufficient funds in your account`)
//     }
// }

// withdraw(1334, 3230)
// withdraw(1234, 67)
// withdraw(1234, 20)

