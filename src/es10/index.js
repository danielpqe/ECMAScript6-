// flat, aplanar
let array = [1,2,3, [4,5,6, [4,9,0]]];
console.log(array.flat(2));

let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value,value*2]));

//trim start/end
let hello = '            hello world     ';
console.log(hello.trimStart());
console.log(hello.trimEnd());

//try catch
try{

}catch(error){
    console.log(error)
}

try{

}catch{
    console.log(error)
}

// clave valor a objeto
let entries = [
    ['name', 'Daniel'],['age',67]
]
console.log(Object.fromEntries(entries));

//Description in symbol objects
let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description)