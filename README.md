# ECMAScript

Especificación del lenguage propuesto por ECMA Internacional
- 1996 NetScape, propuesta de JS
- 2015 Julio, nuevas version de JS

## ES6 2015
- LET, CONST
```
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
```

- Default params

```
function newFunction2(name='Daniel',age=20,country='Perú'){
    console.log(name,age,country)
};

newFunction2();
newFunction2('Dan',45,'MX');
```

- Template literal
```
let epicPhrase = `${'Hello'} ${'world'}`;
console.log(epicPhrase);
```

- Multiline
```
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
ut aliquip ex ea commodo consequat. Duis aute irure dolor`
console.log(lorem)
```

- Deestructuration
```
let person = {
    'name': 'Dan',
    'age': 45,
    'country': 'Perú'
}
console.log(person.name,person.age,person.country);
let {name, age, country} = person;
console.log(name,age,country);
```

- Spread operator
```
let team1 =['Dan','Mario'];
let team2= ['Maria','Pepa','Flor']
let Education = ['Percy',...team2,...team1];
console.log(Education)
```

- Param objects
```
let name = 'Dan'
let age = 50
    //es5
obj1 = {name:name, age:age}
    //es6
obj2 = {name,age}
console.log(obj2)
```
- Arrow Functions
```
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
```
- Promises
```
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
```
 - Clases
 ```
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
```
- Modules
```
import {hello} from './modulo'
hello();
```
- Generators
```
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
```

## ES7 July 2016
- Include Function
```
let numbers = [1,2,3,5,43,7,9];
if(numbers.includes(7)){
    console.log('Si se encuentra')
}else{
    console.log('No se encuentra')
}
```
- Math
```
let base = 4;
let exponente = 3;
let resultado = base**exponente;
console.log(resultado);
```

## ES8 July 2017
- Object.entries
```
const data = {
    frontend: 'Daniel',
    backed: 'Dan',
    design: 'Paul'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length)
```
- Return Values
```
const data2 = {
    frontend: 'Daniel',
    backed: 'Dan',
    design: 'Paul'
}

const values = Object.values(data2);
console.log(values)
console.log(values.length)
```
- Add in strings
```
const string = 'Hello';
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12,'_________'))
```
- Trailing comma
````
const comma = {
    name: 'Dan',
}
```
- Async Await
````
const helloWorld = ()=> {
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(()=> resolve('Hello world'), 3000)
        }else{
            reject(new Error('Test error'))
        }
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log('Despues del await')
    console.log(hello);
}

helloAsync();
```
- Try catch
````
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}
```
## ES9 July 2018

- Idle Operators
```
const obj = {
    name: 'Dan',
    age: 78,
    country: 'Perú'
};

let {country, ...all }  =obj;
console.log(all)
````

- Concatenate items in objects
```
const obj2 = {
    name: 'Dan',
    age: 78,
}; 

const obj3 = {
    ...obj2,
    country: 'Perú'
}
console.log(obj3)
````

- Promise.finally
```
const helloWorld = ()=> {
    return new Promise((resolve,reject)=>{
        (true)
            ? setTimeout(() => {
                resolve('Hello world')
            }, 3000 )
            : reject(new Error('Test de error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error=>console.log(error))
    .finally(()=>console.log('Finalizó'))
```
- Regex
```
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-04-20');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year,month,day)
```

## ES10 July 2019

- flat
```
let array = [1,2,3, [4,5,6, [4,9,0]]];
console.log(array.flat(2));

let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value,value*2]));
```
- trim start/end
```
let hello = '            hello world     ';
console.log(hello.trimStart());
console.log(hello.trimEnd());
```
- try catch
```
try{

}catch(error){
    console.log(error)
}

try{

}catch{
    console.log(error)
}
```
- key value to object
```
let entries = [
    ['name', 'Daniel'],['age',67]
]
console.log(Object.fromEntries(entries));
```

- Description in symbol objects
```
let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description)
```

## COMING SOON
TC39 group, evaluate proposals and implement in next versions
Steps

Idea >> Proposal >> Draft >> Candidate >> Ready 👌