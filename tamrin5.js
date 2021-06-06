// حرف اول هررشته را بزرگ کند

let st = prompt("enter a string")
let StrUpperCase = ""
function capitalize(str) {
    StrUpperCase = str.replace(str[0], str[0].toUpperCase())
    str = StrUpperCase
    console.log(str)

}

capitalize(st)