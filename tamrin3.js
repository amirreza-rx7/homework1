// برنامه ای بنویسید که در آن تابعی به نام findMiddle یک آرگومان به صورت رشته گرفته و سه حرف وسط آن را به
// صورت یک رشته جدید چاپ کند:
let x = prompt("Enter a name: ")
function findMiddle(x){
    if (x.length<3){
        console.log("toole reshteh kamtar az 3 mibashad")
    }
    else if (x.length % 2 == 0){
        console.log("andade reshte zoj mibashad")
    }
    else if(x.length == 3){
        console.log(x[1])

    }
    else{
        mid = parseInt(x.length / 2)
        console.log(x[mid-1]+x[mid]+x[mid+1])
    }
}
findMiddle(x)

