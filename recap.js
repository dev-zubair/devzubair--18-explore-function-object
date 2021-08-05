// -------------------- 
// Concept 1 - VARIABLE
// -------------------- 
// How to declare variabnle
var myName ='zubair';


// --------------------
// Concept 2 -  ARRAY 
// -------------------- 
// ekti variable er moddhe onek gulo man rakha jay. take ARRAY bole
var bookList =['Harry Potter', 'thunder man', 'hooked', 'shoe dog'];

// array position start with 0
var shoeDogIndex = bookList.indexOf('shoe dog');
console.log(shoeDogIndex);

// replace a books name 
bookList[2] = 'johnny';
console.log(bookList);

// want to add a new book in the list 
bookList.push('Parul');
console.log(bookList);

// want to remove a book from the booklist 
bookList.pop();
console.log(bookList);

// --------------------
// Concept 3 - CONDITIONALS
// -------------------- 
if (bookList[1] == 'thunder man') {
    console.log('Yes, its correct !');
}
else{
    console.log('I am not a man');
}


// --------------------
// Concept 4 - WHILE LOOP & FOR LOOP
// -------------------- 

var i = 0;      // loop variable//
while (i < 15) {
    console.log(i);
    console.log('looping looping lopping');
    i++;        // Must be use for changing loop variable. otherwise it will be run continiusly. //
}

// --------------------
// FOR LOOP - Its a chapta version of WHILE LOOP
// -------------------- 

for(var i = 0; i < 10; i++) {
    console.log(i);
}