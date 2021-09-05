//transform item numbers to (even, odd, numbers multiplies by 5, prime numbers, prime numbers less than 100)
//odd even
 let chek = function(num){
    if (!isNaN(num) && num >= 0) {
    if (num % 2 === 0) {
        console.log("is an odd number");
    } else {
        console.log("is an even number");
    }
}
 //multiples 5
    let mul = num * 5
    console.log(mul)
    return mul

// check if number is a prime number
function isPrime (number) {
    for (var i = 2; i < number; i++) {
        if(number % i === 0)
            return false;
    }
    return true;
  }
 }
