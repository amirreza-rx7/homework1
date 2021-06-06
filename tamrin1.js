// تابعی بنویسید که یک عدد به عنوان ورودی دریافت کند و اول بودن یا نبودن آنرا به عنوان خروجی چاپ نماید. 
let isPrime = true;
function controll(number) {
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    else if (number < 0) {
        console.log("enter a positive number")
    }

    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }
    }
    else {
        console.log("The number is not a prime number.");
    }
}
controll(parseInt(prompt("Enter a positive number: ")))