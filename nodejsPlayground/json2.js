const fs =require('fs')

const dataBuffer = fs.readFileSync('json2.json')
console.log(dataBuffer)

const dataString = dataBuffer.toString()
console.log(dataString)


const dataJson = JSON.parse(dataString)
console.log(dataJson)

console.log(dataJson.name)
console.log(dataJson.planet)
console.log(dataJson.age)

dataJson.name = 'Surya'
dataJson.planet = 'earth'
dataJson.age = 21

console.log(dataJson.name)
console.log(dataJson.planet)
console.log(dataJson.age)

const data = JSON.stringify(dataJson)
console.log(data)

fs.writeFileSync('json2edit.json',data)

