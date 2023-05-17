(function() {

// The goal of this exercise is to convert a string to a new string where
// each character in the new string is "(" if that character appears only
// once in the original string, or ")" if that character appears more than
// once in the original string. Ignore capitalization when determining if
// a character is a duplicate.

    function duplicateEncodes (word) {
        return word
            .toLowerCase()
            // lowercase the word, treats uppercase & lowercase the same
            .split('')
            // splits the lowercase 'word' string into an array of
            // individual characters
            .map(function (a, i, w)
            // map(), indexOf(), & lastIndexOf() are used to determine if
            // character 'a' appears once in the array 'w'
            {
                // if char 'a' appears once, the ternary op '? ;' is used to return
                // '(', otherwise tern op returns ')'
                return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
            }) // returns a new array with the same length as original
            // replacing letters with either '(' or ')' based on whether
            // a character appears once in original string.
            .join ('');
        // returns a new array with the same length as the original
        // and puts the characters together to create a new single string
    }

console.log(duplicateEncodes("kxxwxxzxxxxxRcxxx"))
    console.log(duplicateEncodes("()()"))

    function sumOfNumbers (input1,input2) {

        
    }









})();