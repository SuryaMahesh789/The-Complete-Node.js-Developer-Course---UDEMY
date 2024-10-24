utils_name = require('./utils.js')

sum = require('./add.js')

// by the above require statement we can call and use utils.js,add.js  to app.js  

console.log(utils_name)

const ans = sum(1,2)

console.log(ans)


const {msg,greeting} = require('./greetings.js')

console.log(msg)
console.log(greeting('Mahesh'))


const {add,sub,mul,div} = require('./math.js')

console.log(add(10,2))
console.log(sub(10,2))
console.log(mul(10,2))
console.log(div(10,2))

const {note,getNotes} = require("./mynotes.js")
console.log(note)

noteMsg = getNotes()
console.log(noteMsg)