// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];
// coffeeOrder.unshift("dave - coffee");

// console.log(coffeeOrder);

// let favSongs = [
//     "Sweet Child of Mine",
//     "Barbie Girl",
//     "Another Brick in the Wall"
// ];
// favSongs.push("Stairway to Heaven", "Fearless")

// console.log(favSongs)

// favSongs.pop()
// console.log(favSongs)

// let favDrinks = [
//     "tea", "beer", "water", "qahwa", "gin"
// ]

// for(let i=0; i< favDrinks.length; i++) {
// console.log(favDrinks[i])
// }

// let multiplesTwo = [];

// for (let i=0; i<200; i++) {
//     if (i%2===0) {
//         multiplesTwo.push(i);
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 200 are: ${multiplesTwo}`);

// let age = 15;
// while(age< 18) {
//     console.log("you're a child");
//     age++;
// }
// console.log("you're an adult!");

// let cards = ["diamond", "spade", "heart", "club"];
// let currentCard = "club";
// while(currentCard != "spade") {
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }
// console.log(currentCard);

// let num = "1221"
// let stringStatus = "is"

// for (let i=0; i<num.length/2; i++) {
//     if (num[i] !=num[num.length -1 -i]) {
//         stringStatus = "not"
//         break;
//     }
    
// }
// if (stringStatus == "not") {
//     console.log("it is not a palindrome")
// } else {
//     console.log("its a palindrome")
// }



//////////////////////////  ACTIVITY 1 /////////////////////////////////


// let favFilms = ["Dune", "Crocodile Dundee", "Fear and Loathing in Las Vegas", "The Hangover"];

// favFilms.push("Star Trek: The Motion Picture", "Alien")

// for (let i = 0 ; i< favFilms.length; i++) {
//     console.log(favFilms[i]);
// }



////////////////////// ACTIVITY 2 //////////////////////////////////////



// for(let i=0; i<6 ; i++) {
//     let num = Math.floor(Math.random()*51)
//     console.log(num)
// }




///////////////////// ACTIVITY 3 ////////////////////////////

// for(let i=9; i>-1 ; i--) {
//     console.log(i);
// }


////////////////////////// ACTIVITY 4 ////////////////////////

// let fourFilms = ["Power Rangers: the Movie", "Pokemon: The Movie", "Ghostbusters", "Barbie: The Moivie"];

// for (let i=0; i <3; i++) {
//     if (fourFilms[2] === "Ghostbusters") {
//         console.log("Yay Ghostbusters!!")
//         break;
//     } else {
//         console.log("Boo we want Ghostbusters!")
//        break;
//     }
// }




///////////////////////////////ACTIVITY 5 ///////////////////

// for(let i=0; i<6 ; i++) {
//     let num = Math.floor(Math.random()*31)
//     if (num%7 === 0) {
//         console.log(`${num} is divisible by 7`)
//     } else {
//         console.log(`${num} is not divisible by 7`)
//     }
// }


///////////////////////////// ACTIVITY 6 //////////////////////////

// let bobsFollowers = ["Jane", "Terence", "Waqas", "Shen"]
// let hannahsFollowers = ["Terence", "Shaniqwa", "Waqas", "Esmerelda"]

// for (let i=0; i<bobsFollowers.length; i++) {
//     for (let j=0; j<hannahsFollowers.length; j++) {
//         if (bobsFollowers[i] === hannahsFollowers[j]) {
//             console.log(`${bobsFollowers[i]} is friend to both Bob and Hannah.`)
//         }
//     }
// }




////////////////////////  ACTIVITY 7 /////////////////////////////


for (let i=0; i<10; i++) {
    console.log(i);
}
 //For loops are good for cycling through a known data set and applying actions to items in the array.


 while (i<10) {
    text += "Number" +i; i++;
 }