// npm install yargs

const yargs = require('yargs')

// customize yargs function 

yargs.version('1.1.0')

// create add yargs.command

yargs.command({
    command:'add',
    describe:'Add a note',
    builder:
    {
        title:{
            describe:'Note title',
            demandOption:true
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        console.log('Title: '+argv.title)
        console.log('Body: '+argv.body)
    }
})

// create remove yargs.command

yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function(){
        console.log('Removing a new note!')
    }
})

// create list yargs.command

yargs.command({
    command:'list',
    describe:'List a note',
    handler:function(){
        console.log('Listing all your notes!')
    }
})

// create read yargs.command

yargs.command({
    command:'read',
    describe:'read a note',
    handler:function(){
        console.log('Listing all your notes!')
    }
})

// console.log(yargs.argv)

yargs.parse()

