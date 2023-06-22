// Returning Today's Date
    const date = new Date();

    let numDay = date.getDate();
    let numMonth = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${numMonth}/${numDay}/${year}`

    let day = date.getDay();
    let daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

        // Goes from 0 (Sunday) to 6 (Saturday)
        // Returns a number that correlates to a day within the array list
    console.log(`Today is : ${daylist[day]}`)

    console.log(currentDate) //Returns today's date in date format

// Returning current time
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let nightDay = (hour >= 12) ? " PM " : " AM ";
    hour = (hour>= 12) ? hour - 12 : hour;

    if (hour === 0 && nightDay === ' PM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            nightDay = ' Noon';
        } else {
            hour = 12;
            nightDay = ' PM';
        }
    }

    if (hour === 0 && nightDay === ' AM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            nightDay = ' Midnight';
        } else {
            hour = 12;
            nightDay = ' AM ';
        }
    }

    console.log(`Current Time: ${hour}:${minute}:${second} ${nightDay}`)

// Christmas Count Down
    let cmas = new Date (date.getFullYear(), 11, 25);
    if (date.getMonth() === 11 && date.getDate()>25) {
        cmas.setFullYear(cmas.getFullYear() + 1);
    }
    let oneDay = 1000 * 60 * 60 * 24;
    console.log(Math.ceil((cmas.getTime() - date.getTime()) / (oneDay)) + " days left until Christmas!")