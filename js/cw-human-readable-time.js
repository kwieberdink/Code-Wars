// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// You can find some examples in the test fixtures

function humanReadable(seconds) {
    // Setting a constraint to the user input
    if(seconds < 0 || seconds > 359999) {
        return null
    }
    // If the seconds equal zero, then return format with zeroes
    if(seconds === 0) {
        return '00:00:00'
    }
    // Returning
    let hours = Math.floor(seconds/3600)
    seconds = seconds - (hours * 3600)
    // If hours are single digits, return zero plus the single digit
    if(hours < 10) {
        hours = '0' + hours
    }
    let minutes = Math.floor(minutes/60)
    seconds = seconds - (minutes * 60)
    // If minutes are single digits, return zero plus the single digit
    if(minutes < 10) {
        minutes = '0' + minutes
    }
    // if seconds are single digits, return zero plus the single digit
    if(seconds < 10) {
        seconds = '0' + seconds
    }
    return `${hours}:${minutes}:${seconds}`
}

function readable(seconds) {
    // Setting a constraint to the user input
    if(seconds < 0 || seconds > 359999) {
        return 'Put a number from 0 to 359999'
    // If seconds === 0, then return blank format
    } else if (seconds === 0) {
        return '00:00:00'
    } else {
        let hours = Math.floor(seconds/3600)
        let minutes = Math.floor(minutes/60)
    }

}