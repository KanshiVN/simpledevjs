// objects are just "Arrays" in javascript 


const product ={
    // name:'kanshi',
    // email:'kanshinale332@gmail.com',
    // phone:'8208381473'
    name:'socks',
    price:2000
};

// updating the value after it's defined

product.name = 'cotten socks';
// left:property 
console.log(product.name,product.price);
console.log(product.price);

// adding a new object value
product.newValue = true;
console.log(product.newValue);

console.log(typeof(product)); //object
// instead of creating bunch of values for same type of product we create objects and add all the values in the same product

const score ={
    wins :0,
    losse: 0,
    ties :0,
    ['delivery-time']:'1 day',

    rating: {
        stars:4.5,
        count:83
    },

    func: function starts(){
        console.log('Hello')
    }

}
score.wins++;
score.wins++;
console.log(score)

// another way to access the values without . opertator

console.log(score['wins']);
console.log(score['wins-permatch']);

console.log(score['delivery-time']);
// console.log(score.wins-permatch); // here it gives error because it consider it as minus(-) thus we have to use brackets for these kind of notations


// nested objects
console.log(score.rating.count);

// functions inside the objects
score.func();

// JSON syntax is more universal thus we use json 
console.log(JSON.stringify(score)); //this convert sccore into json
console.log(typeof JSON.stringify(score)); //this convert sccore into json which is a type of string

// stringify is the method of the json which is used to convert the js objects into json


// JSON.parse is used to convert  json back into JS 

// const jString = JSON.stringify(score);
// console.log(JSON.parse(jString));

// localStorage.setItem('message','hello');>>

// console.log('hello'.toUpperCase()), toLowerCase

const obj1 = {
    message:'hello',
    price:393
};
//here obj2 point to the obj1 reference
const obj2 = obj1;
//its not copying the value it just works as pointer which points to the same object reference

// const message = obj1.message;

//its called destructuring which saves the values of objects into the variables
const {message,price} = obj1;
console.log(message,price);

 