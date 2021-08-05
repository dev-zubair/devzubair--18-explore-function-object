// --------------------
// OBJECT PROPERTIES
// -------------------- 
var computer = {
    HDD : '156gb',
    BrandName : 'Dell',
    processor : 'core i5',
    RAM : '16gb',
    price : 20500
};
// WANT TO SEE FULL OBJECT AND PROPERTIES
console.log(computer);

// WANT TO SEE ONLY A SINGLE PROPERTIES (PRICE) 
var computerPrice = (computer.price);
console.log(computerPrice);

// WANT TO CHANGE A PROPERTY VALUE 
computer.price = 15000;
console.log(computer);


// Different way to set a value of an object property
var priceProperty = "price";
computer.price = 15000; 
computer["price"] = 23000;
computer[priceProperty] = 25000;
console.log(computer);

