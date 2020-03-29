//Operador de reposo
const obj = {
    name: 'Dan',
    age: 78,
    country: 'Perú'
};

let {country, ...all }  =obj;
console.log(all)

// Unir elementos de objetos
const obj2 = {
    name: 'Dan',
    age: 78,
}; 

const obj3 = {
    ...obj2,
    country: 'Perú'
}
console.log(obj3)

// Promise.finally
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

// Agrupar bloques de regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-04-20');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year,month,day)