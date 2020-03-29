// Object.entries
const data = {
    frontend: 'Daniel',
    backed: 'Dan',
    design: 'Paul'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length)

// Return Values
const data2 = {
    frontend: 'Daniel',
    backed: 'Dan',
    design: 'Paul',
}

const values = Object.values(data2);
console.log(values)
console.log(values.length)

// Agregar valores a cadenas de texto
const string = 'Hello';
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12,'_________'))

// Training comma
const comma = {
    name: 'Dan',
}

// Async Await
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

// Try catch
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}