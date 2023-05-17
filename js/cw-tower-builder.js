function towerBuilder(nFloors) {
    // initializing space and star as empty strings
    // initializing tower as an empty array
    let space, star, tower = [];
    // loops through each floor of the tower, starting from first floor (i=1)
    // and ending at the specified number of floors (nFloors)
    for (let i = 1; i <= nFloors; i++) {
        // Number of spaces is equal to (nFloors - i) which means number of spaces
        // increases as the floor number increases
        space = ' '.repeat(nFloors - i);
        // Number of stars increases as the floor number decreases as floor number increases
        star = '*'.repeat(2 * i -1);
        // Concatenates the required number of spaces, stars, and spaces
        // It adds the constructed string to the "tower" array using the "push" method
        tower.push(`${space}${star}${space}`);
    }
    // Returns the "tower" array
    return tower;
}

console.log(towerBuilder(20))