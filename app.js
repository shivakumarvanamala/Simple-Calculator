// Calculating through the buttons on the screen :
let btns = document.querySelectorAll(".btn");
let input = document.querySelector("input");
let str = "";
btns.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (btn.textContent == "=") {
            str = eval(str);
            if (str == undefined || NaN) {
                input.value = "Invalid sytax";
            } else {
                input.value = str;
            }
        }
        else if (btn.textContent == "C") {
            str = "";
            input.value = str;
        } else if (btn.textContent == "Del") {
            str = str.toString().slice(0, -1);
            input.value = str;
        }
        else {

            str += btn.textContent;
            input.value = str;
        }
    })
})

// Calculating through entering the values form the keyboard: 
// result = {
//     Enter() {
//         input.value = eval(input.value)
//     },
//     8() {
//         input.value = input.value.toString().slice(0, -1)
//     }
// }
function result(eve) {
    switch (eve) {
        case eve.which == 8:
            return input.value = eval(input.value);
        case eve.which == 13:
            return input.value = input.value.toString().slice(0, -1);
        case eve.key == "c":
            return input.value = "";

    }

    return false
}

// FIXME : add condition statement for not inserting the values into the "input" when user enters other than the numbers -->
document.addEventListener("keypress", (eve) => {
    // if(eve.keyCode in result){
    //     result(item.keyCode)
    // }
    input.value += result(eve) || eve.key;
    console.dir(eve);
})
