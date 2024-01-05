// console.log("Hello Baby!".toUpperCase())
// console.log(Math.ceil(Math.random()*10))

// console.log(Math.floor(Math.random()*10))

// console.log(Math.round(Math.random()*10))

// console.log("   |   |   ")
// console.log("___|___|___")
// console.log("   |   |   ")
// console.log("___|___|___")
// console.log("   |   |   ")
// console.log("   |   |   ")

// const grid = [
//     ["   ", " | ", "   ", " | ", "   "],
//     ["   ", " | ", "   ", " | ", "   "],
//     ["   ", " | ", "   ", " | ", "   "],
//     ["---", "---", "---", "---", "---"],
//     ["   ", " | ", "   ", " | ", "   "],
//     ["   ", " | ", "   ", " | ", "   "],
//     ["   ", " | ", "   ", " | ", "   "],
//     ["---", "---", "---", "---", "---"],
//     ["   ", " | ", "   ", " | ", "   "],
//     ["   ", " | ", "   ", " | ", "   "],
//     ["   ", " | ", "   ", " | ", "   "],
// ];

// console.log(grid)

// function logGridOne() {
//     for (let i = 0; i < grid.length; i++) {
//         console.log(grid[i].join(""));
//     }
// }

// logGridOne();

// function logGridTwo() {
//     let gridLine = 1;

//     for (let i = 1; i <= 8; i++) {
//         if (gridLine % 3 === 0) {
//             console.log("---------------");
//             gridLine++;
//         } else {
//             console.log("    |     |    ");
//             gridLine++;
//         }
//     }
// }

// logGridTwo();

// console.log(`Hello There Baby Gurrl

// ________|________|_________\n_______|________|_____\n_____|_____|____`)

// n = "All Around the World"
// n1 = n.charAt(7).toUpperCase();
// console.log(n1)

// console.log("All Around The World".split(.7))

// let name = "Frank the Bank"
// console.log(name)

// let i = 2
// i +=2
// console.log(i)

// let favouriteDrink = "coffee"
// console.log("my favourite drink is " + favouriteDrink)

// console.log(`your favourite drink is ${favouriteDrink}`)

// let nom = "David"
// let age = 25
// let favColour = "brown"

// let x = `My friend's name is ${nom} and he is ${age} years old.\nHis favourite colour is ${favColour}.`
// console.log(x)

// nom = "Frank"
// age = 42
// favColour = "turquoise"

// console.log(x)




// let breakfast = "porridge";
// let lunch = "mackarel";
// let dinner = "pies";
// let day = "Today";

// let x = `${day} the breakfast is ${breakfast}, the lunch is ${lunch} and the dinner is ${dinner}.\nBon Appetit!`;
// console.log(x);

// breakfast = "croissants";
// lunch = "cranberries, lots of cranberries";
// dinner = "more pies";
// day = "Tomorrow";

// x = `${day} the breakfast is ${breakfast}, the lunch is ${lunch} and the dinner is ${dinner}.\nBon Appetit!`;
// console.log(x);





// let today = new Date();
// let birthDate = new Date(1983, 8, 23)
// let one_day = 1000 * 60 * 60 * 24
// let NumOfDays = Math.round((today - birthDate)/ one_day)
// console.log(`It has been ${NumOfDays} days since my birth.\nHow many more left to go?\n\nMomento Mori..\n\n`)




let space1, space2, space3, space4, space5, space6, space7, space8, space9;

space1 = "X";
space2 = "O";
space3 = " ";
space4 = "X";
space5 = "X";
space6 = " ";
space7 = "O";
space8 = " ";
space9 = " ";

console.log(`
   |   |   
 ${space1} | ${space2} | ${space3} 
   |   |   
-----------
   |   |   
 ${space4} | ${space5} | ${space6} 
   |   |    
-----------
   |   |   
 ${space7} | ${space8} | ${space9}
   |   |   
`)


