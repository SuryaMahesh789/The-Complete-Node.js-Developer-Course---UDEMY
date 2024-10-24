// For node modules ,package-lock.json

// npm i validator@13.12.0  


const validator = require('validator')

console.log('suryamahesh@gmail.com is valid : ' + validator.isEmail('suryamahesh@gmail.com'))

console.log('suryamahesh@gmail is valid : ' + validator.isEmail('suryamahesh@gmail'))

console.log('suryamahesh@.com is valid : ' + validator.isEmail('suryamahesh@.com'))

console.log('https://mahesh.io is valid : ' + validator.isURL('https://mahesh.io'))

console.log('https://mahesh is valid : ' + validator.isURL('https://mahesh'))