//LET, CONST
{
    var globalVar = 'Global var';
}
{
    let globalLet = 'Global let' // Scope local
}
console.log(globalVar);
console.log(globalLet);

const a = 'b';
const a ='c';

console.log(a);

// Default Params
function newFunction(name, age, country){
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'Perú';
    console.log(name,age,country);
}

//es6
function newFunction2(name='Daniel',age=20,country='Perú'){
    console.log(name,age,country)
};

newFunction2();
newFunction2('Dan',45,'MX');

// Template literal
let epicPhrase = `${'Hello'} ${'world'}`;
console.log(epicPhrase);

// Multilinea
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
ut aliquip ex ea commodo consequat. Duis aute irure dolor`
console.log(lorem)

// Desestructuración
let person = {
    'name': 'Dan',
    'age': 45,
    'country': 'Perú'
}
console.log(person.name,person.age,person.country);
let {name, age, country} = person;
console.log(name,age,country);

//Spread operator
let team1 =['Dan','Mario'];
let team2= ['Maria','Pepa','Flor']
let Education = ['Percy',...team2,...team1];
console.log(Education)

// Parámetros en objetos
let name = 'Dan'
let age = 50
    //es5
obj1 = {name:name, age:age}
    //es6
obj2 = {name,age}
console.log(obj2)

//Arrow Functions
const names = [
    {name: 'Dan ',age:16},
    {name: 'Tito',age:37}
]
let listOfNames = names.map(function (item){
    console.log(item.name);
})

let listOfNames2 = names.map(item =>console.log(item.name));

const listOfNames3 = (name, age, country) =>{
    //code here
}
const listOfNames4 = name =>{ 
    //code here
}
const square = num => num*num;

// Promises
const helloPromise = ()=>{
    return new Promise((resolve,reject)=> {
        if(false){
            resolve('Todo ok')
        }else{
            reject('Ups!')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(()=>console.log('Hey there'))
    .catch(error=>console.log(error));

// Clases
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2,4));

// Módulos
import {hello} from './modulo'
hello();

// Generadores
function* helloWorld() {
    if(true){
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
