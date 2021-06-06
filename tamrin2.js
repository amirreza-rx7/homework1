// -تابعی بنویسید که یک عدد به عنوان ورودی دریافت کند و اعداد اول بین 1 تا آن عدد را به عنوان خروجی چاپ نماید. 
add = parseInt(prompt("Enter a prime number: "))
let PrimeArray = []
primecounter(add)


function primecounter(x) {
    for (let i = 2; i <= x; i++) {
        controll(i)
    }

    console.log("majmooe adad"+" ((( "+PrimeArray+" ))) "+`adad avale beyne 1 ta ${x} hastand`)
}



function controll(number) {
    let isPrime = true;
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
            PrimeArray.push(`${number}`)
        }
    }
}
