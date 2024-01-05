// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer",


//     openCafe() {
//         if(this.hasSpecialOffers) {
//         return "Time for a special offer!";
//         }
//     },
//     closeCafe() {
//         return "We are closed, come back tomorrow!"
//     }
// };
// console.log(cafe.openCafe());



// if (time<1100) {
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time<1500) {
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// } else {
//     console.log(cafe.noOffer);
// }






// console.log(cafe["drinks"][2])



// let day = "tue"
// const alarm = {
//     weekendAlarm : "no alarm needed",
//     weekdayAlarm : "get up at 7am"
// }

// if (day == "sat" || day == "sun") {
//     console.log(alarm["weekendAlarm"]);
// } else  {
//     console.log(alarm["weekdayAlarm"]);
// }





////////////////////////// ACTIVITY 1 ///////////////////////////////

// let person = { 
//     name: "Alex", 
//     age: 40, 
//     sayHi() {
//         return `Hello my name is ${this.name}`
//     }
//     }


// person.favSongs = ["Beethoven's 5th", "Csardas", "Nils Frahm - Says"]

// console.log(person.sayHi())


/////////////////////////// ACTIVITY 2 ///////////////////////////////////

// const pet = {
//     name: "Jeremy",
//     typeOfPet: "Doggo",
//     age: "17",
//     colour: "Dusty Brown",
//     eat() {
//         return `${this.name} is eating.`
//     },
//     drink() {
//         return `${this.name} is drinking.`
//     }
// }

// console.log(pet.eat())
// console.log(pet.drink())




/////////////////////////////// ACTIVITY 3 //////////////////////////


let order = ["Tea", "Espresso"]

const coffeeShop = {
    branch: "Canterbury",
    drinks: {
        "Tea" : 1.50,
        "Capuccino" : 2.00,
        "Espresso" : 1.80
    },
    food: {
        "Chips" : 2.00,
        "Sandwich": 3.50,
        "Steak" : 5.50
    },
    drinksOrdered() {
       return this.drinks
    },
    foodOrdered() {
        return this.food
    },
    total() {
        return this.drinksOrdered() + this.foodOrdered()
    }
}



console.log(coffeeShop.total())








/////// End of Activities////////