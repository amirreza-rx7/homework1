// برنامه ای بنویسید که آرایه ی زیر را برحسب تعداد حروف هر عضو، از کوچک به بزرگ مرتب نموده و چاپ نماید. مثال
// arr = [“Ali”,”Hosein”,”ab”,”ab”,”Reza”,”Abolfazl”,”saleh”];
// را به عنوان ورودی بگیرد و
// newArr = [“ab”,”ab”,”ali” ,”Reza”," saleh",” Hosein”,” Abolfazl”];
// را به عنوان خروجی چاپ کند.

let arr = ["Ali", "Hosein", "ab", "ab", "Reza", "Abolfazl", "sale"]
let num = arr.length
let newArr = []
let Min = arr[0].length;
let minvalue = arr[0]
let counter = 0
let key = null
for (let j = 0; j < num; j++) {
    key = false
    for (i = 1; i < arr.length; i++) {
        if (arr[i].length < Min) {
            Min = arr[i].length;
            minvalue = arr[i]
            counter = i
            key = true
        } else if (arr[i].length == Min) {
            key = true
        }
    }
    if (key == false) {
        counter = 0
        arr.splice(counter, 1)
        newArr.push(minvalue)
        if (arr.length < 1) {
            console.log("finished")
        } else {
            minvalue = arr[0]
            Min = arr[0].length
        }
    } else {
        arr.splice(counter, 1)
        newArr.push(minvalue)
        Min = arr[0].length
        minvalue = arr[0]
        counter = 0
    }
}

console.log(newArr)



