// --------------------
// BREAK IN WHILE LOOP
// -------------------- 
var i = 0;
while (i < 10) {
    // console.log(i);
    if (i == 5){
        break;
    }
    i++;
}

// --------------------
// BREAK IN FOR LOOP
// -------------------- 
for (i = 0; i < 15; i++){
    // console.log(i);
    if (i == 10){
    break;
}
}

// --------------------
// BREAK IN ARRAY
// -------------------- 
// var numbers =[23, 34, 45, 56, 67, 78, 89, 90, 102, 45, 56, 120];
// for(i = 0; i < numbers.length; i++) {
//     var number = numbers [i];
//     console.log(number);
//     if (number > 100){
//         break;
//     }
// }

// --------------------
// CONTINUE IN ARRAY
// -------------------- 
var numbers =[23, 34, 45, 56, 67, 78, 89, 90, 102, 45, 56, 120];
for(i = 0; i < numbers.length; i++) {
    var number = numbers [i];
    console.log(number);
    if (number > 60){
        continue;
    }
}