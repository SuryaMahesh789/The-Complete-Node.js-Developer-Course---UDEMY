
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

console.log(book)
console.log(book.title)
console.log(book.author)


const bookString = JSON.stringify(book)

console.log(bookString)

const bookJSON = JSON.parse(bookString)

console.log(bookJSON.title)
console.log(bookJSON.author)

const fs = require('fs')
fs.writeFileSync('json1.json', bookString)


const dataBuffer = fs.readFileSync('json1.json')
console.log(dataBuffer)

const dataJson = dataBuffer.toString()

console.log(dataJson)

const data = JSON.parse(dataJson)

console.log(data)

console.log(data.title)

console.log(data.author)

