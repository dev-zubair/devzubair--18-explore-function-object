// --------------------
// INPUT PARAMETER - TAKA HOLO PARAMETER
// -------------------- 
function bringSingara(taka){
    console.log('Boos dise', taka, 'taka');
    console.log('eibar mama singara den!');
}
    bringSingara(100);

    function bringbread(taka){
        console.log('Boos dise', taka, 'taka');
        console.log('eibar mama singara den!');
    }
    var bread = 50;
    bringbread(bread );


// --------------------
// FUNCTION RETURN 
// -------------------- 
function bringSingara(taka){
    console.log('Boos dise', taka, 'taka');
    console.log('eibar mama singara den!');
    var singaraPrice = 10;
    var singaraQuantity = money / singaraPrice;
    return singaraQuantity;
}
    var money = 250;
    var singara = bringSingara(money);
    console.log('ei nen apnar singara', singara);
