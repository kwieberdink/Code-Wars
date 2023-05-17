// (function(){
    "use strict"

// In Ruby: Write a function calc_fuel that calculates the minimum amount of fuel needed to
// produce a certain number of iron ingots. This function should return a hash of the form
// {:lava => 2, :blaze_rod => 1, :coal => 1, :wood => 0, :stick => 0} In JavaScript:
// Write a function calcFuel that calculates the minimum amount of fuel needed to produce
// a certain number of iron ingots. This function should return an object of the form
// {lava: 2, blazeRod: 1, coal: 1, wood: 0, stick: 0} In Python: Write a function calc_fuel
// that calculates the minimum amount of fuel needed to produce a certain number of iron
// ingots. This function should return a dictionary of the form {"lava": 2, "blaze rod":
// 1, "coal": 1, "wood": 0, "stick": 0}

// Prompt number of ingots
// let ingot = prompt`How many iron ingots do you need to smelt?`

const fuelTypes = [
    {
        name: 'Lava',
        seconds: 800,
    },
    {
        name: 'Blazerod',
        seconds: 120,
    },
    {
        name: 'Coal',
        seconds: 80,
    },
    {
        name: 'Wood',
        seconds: 15,
    },
    {
        name: 'Stick',
        seconds: 1,
    },
]

function calc_Fuel (ingots) {
    let secsIngot = 11 // amount of time for one ingot
    let ingotTime = ingots * secsIngot; // amount of time for inputted ingots]
    let total= secsIngot/fuelTypes[i].seconds + 1;
    return total
}

console.log(calc_Fuel(12))











// Looping through each object in the array, and outputting the index
// & fuelType
for ( let i = 0; i < fuelTypes.length ; i++) {

    console.log("We are at index: " + i)
    console.log(fuelTypes[i].name);
    console.log(fuelTypes[i].seconds);
};












    // })();

