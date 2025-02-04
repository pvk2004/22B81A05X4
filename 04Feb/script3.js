const events = require('events');

const myEmitter = new events.EventEmitter();

myEmitter.on("myEvent", (name,age)=> {
    console.log(`Hello ${name} you are ${age} years old`);
});

myEmitter.emit('myEvent',"Vamshi",20)
myEmitter.emit('myEvent',"Krishna",25)
