// --------------------
// If and else if
// -------------------- 
var color = 'Skyblue';

if (color == 'white') {
    console.log('color is white');
}
else if (color == 'blue'){
    console.log('color is blue');
}
else if (color == 'Skyblue'){
    console.log('color is right');
}
else {
    console.log('did not find any color');
}

// --------------------
// SWITCH
// -------------------- 
switch (color){
    case 'white':
        console.log('This is a white');
        break;
    case 'black':
        console.log('This is a black');
        break;
    case 'Skyblue':
        console.log('This is Skyblue');
    default:
        console.log('This is nothing');
}