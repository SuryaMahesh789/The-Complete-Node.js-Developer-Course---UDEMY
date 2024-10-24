const filesystem = require('fs')

// fs to access filesystem with nodejs 

filesystem.writeFileSync('notes.txt','This File Was Created by Node.js')
filesystem.writeFileSync('name.txt','My Name is Surya Mahesh')


filesystem.appendFileSync('notes.txt','\nAppending by Nodejs')
filesystem.appendFileSync('name.txt','\nMy appended name - Kolisetty')
