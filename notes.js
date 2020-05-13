const fs = require('fs');
const chalk = require('chalk');

// Add notes
const addNotes = (title,body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.find((note) => {
        return note.title === title;
    })

    if(!duplicateNotes){  
        notes.push({
            title:title,
            body:body,
        })
    saveNotes(notes);
    console.log('New note added');
    }
    else{
        console.log('Note title taken!');
    }
}

// Remove notes
const removeNotes = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {     
       // find will stop when it matches while filer not stop it executes all
        return note.title !== title;
    })
        if(notes.length > notesToKeep.length){
          console.log(chalk.bgGreen('Note removed!'));
          saveNotes(notesToKeep);  
        }else{
           console.log(chalk.bgRed('No note found!'));
        }
    }

    // List notes
    const listNotes = () => {
        const notes = loadNotes();
        console.log(chalk.red('Your notes'));
         notes.forEach((note) => {
            console.log(note.title);
        })            
    }

    // Read notes
    const readNotes = (title) =>{
        const notes = loadNotes();
        const note = notes.find((note) => note.title === title);
        if(note){
            console.log(chalk.inverse(note.title));
            console.log(note.body);
        }else{
            console.log(chalk.red.inverse('No title found!'));
        }
     
    }
    
// Utilities
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson);
}

const loadNotes = () => {
    try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataString = dataBuffer.toString();
    return JSON.parse(dataString);
    }
    catch(e){
        return [];
    }
}

module.exports = {
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}