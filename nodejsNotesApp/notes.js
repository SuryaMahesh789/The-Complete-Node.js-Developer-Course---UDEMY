const fs=require('fs')

const chalk = require('chalk')

const getNotes = function()
{
    return 'Your Notes...'
}

const addNote=function(title,body)
{
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function (note){
        if(note.title === title)
        {
            console.log("Note with duplicate title detected...")
        }

        if(note.body === body)
        {
                console.log("Note with duplicate body detected...")
        }

        return note.title === title | note.body === body
    })

    console.log("Duplicate Notes length : "+duplicateNotes.length)

    if(duplicateNotes.length === 0)
    {
        notes.push({
            title:title,
            body:body
        })
    
        // console.log(notes)
        saveNotes(notes)
        console.log(chalk.green.inverse("new note added"))

        console.log("Notes Count : "+notes.length)
    }
    else{
        console.log(chalk.red.inverse('Note title/body already taken!'))
    }
  
}

const saveNotes = function(notes)
{
    const dataString = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataString)
}   

const loadNotes = function()
{
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataString = dataBuffer.toString()
    const dataJSON = JSON.parse(dataString)

    console.log("No Exception")

    return dataJSON

    }
    catch(e)
    {
        console.log("Exception "+e)
        return []
    }

}

const removeNotes= function(title)
{
    console.log("Req to removeNotes with title : "+title)

    const notes = loadNotes()

    const notesToKeep = notes.filter(function (note){
        return note.title !== title
    })

    if(notes.length > notesToKeep.length)
    {
        console.log(chalk.green.inverse('Note Removed!'))
    }
    else{
        console.log(chalk.red.inverse('No Note Found!'))   
    }

    saveNotes(notesToKeep)

}


module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNotes:removeNotes
}