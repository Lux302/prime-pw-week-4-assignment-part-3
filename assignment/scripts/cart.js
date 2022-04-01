console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket =[];
function addItem(string,array){
array.push(string);
if(array.includes(string)){
    return true;
}
}
console.log(addItem(`Hello Dorian`,basket));
console.log(basket);