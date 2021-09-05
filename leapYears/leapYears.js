// input user
const year = prompt('Enter a year : ');


if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
    console.log(year + ' is a leap year');
} else{
    console.log(year + ' is NOT a leap year');
}