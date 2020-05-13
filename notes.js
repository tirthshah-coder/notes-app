const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    console.log('Your notes...');
}

// Add notes
const addNotes = function(title,body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })

    if(duplicateNotes.length === 0){  
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
const removeNotes = function(title){
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note){
        return note.title !== title;
    })
        if(notes.length > notesToKeep.length){
          console.log(chalk.bgGreen('Note removed!'));
          saveNotes(notesToKeep);  
        }else{
           console.log(chalk.bgRed('No note found!'));
        }
        
        
    }
    
// Utilities
const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson);
}

const loadNotes = function(){
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
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes
}