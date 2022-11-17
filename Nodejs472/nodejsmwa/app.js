const events = require('events')

class Pet extends events {
    name =''
    constructor (n){
        super();
        this.name = n
    }
    sound(s){
        this.emit('barking', this.name + ` is ` + s)
    }
}
const theo =  new Pet ('Theo')

theo.on('barking', (data) => {
    console.log(data)
})
theo.sound('whowho')
theo.sound('whowho1')
theo.sound('whowho2')