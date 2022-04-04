console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const maxItems = 5;

let basket =[];

function addItem(string,array){

array.push(string);
if(array.includes(string)){
    return true;
}
}
console.log(addItem(`Hello Dorian!`,basket));
console.log(basket);

function empty(array){
    while (array.length>0){
        array.pop()
}
}// I used a while loop that is using the arrays length as its fuel so that no matter the length of the array, if we say added 15 items in to the array previously, one single action of empty would remove everything in the array regardless of amount!

console.log(`The array named basket currently conatins the string  '${basket}' `);
empty(basket);
console.log(`the array named basket currently contains the following:${basket}`);//okay great we see that it worked at least once. now lets make sure it will work regardless of array length, so lets add a bunch of stuff to basket using our first function.
addItem(`one`,basket);
addItem(`two`,basket);
addItem(`three`,basket);
addItem(`four`,basket);
addItem(`five`,basket);
addItem(`six`,basket);
//now lets check and make sure that out function worked and added all the itemns we wanted to basket,
console.log(basket);//great everyone is here!
empty(basket);//lets call on our empty function to remove everything in the basket array
console.log(basket)//here we check the contects of basket and see that there is nothing inside the array it is empty and the length is 0
console.log(basket.length);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(`Streth Goals!`);

console.log(`__Using functions in other functions!__`);


let littleBasket = [1,2,3];

let justrightBasket =[1,2,3,4,5];

let bigBasket = [1,2,3,4,5,6,7,8,9,10];



function isFull(array){
    if (array.length < maxItems){
        return false;
    }else if(array.length >= maxItems ){
        return true;
    }
}
console.log(`little basket is less < 5 so we should see false. ${isFull(littleBasket)}`);
console.log(`just right basket is == 5 so we should see true. ${isFull(justrightBasket)}`);
console.log(`bigBasket is > 5 so we should see true. ${isFull(bigBasket)}`);




function addItem(string,array){
    if(!isFull(array)){
    array.push(string);
    return true;
    }else if (isFull(array))
        return false;
    }

    console.log(addItem(`Function`,littleBasket));
    console.log(addItem(`Function`,justrightBasket));
    console.log(addItem(`Function`,bigBasket));
    
console.log(littleBasket);
console.log(justrightBasket);
console.log(bigBasket);


console.log(`__Using Array built-in functions!__`);


let cart = [`cheese`,`milk`,`eggs`,`tea`,`coffee`,`bread`,`butter`];


function removeItem(item, array) {
    let i = array.indexOf(item);
    if (i > -1) {
      array.splice(i, 1);
return item    
    }else{
         return null
 }  
}


console.log(cart);
console.log(cart.length);

console.log(removeItem(`tea`,cart));

console.log(cart.length);
console.log(cart)


