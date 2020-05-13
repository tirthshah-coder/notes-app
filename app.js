const notes = require('./notes')
const yargs = require('yargs')

// Add
yargs.command({
    command:'add',
    describe:'Add note',
    builder:{
        'title':{
            describe:'Note title',
            demandOption:true,  // So we have to pass it is required one.
            type:'string', // if we not provide any title then by default it is boolean
        },
        'body':{
            describe:'Note body',
            demandOption:true,
            type:'string',
        },
    },
    handler(argv){    // Similar to handler:function(argv){}
       notes.addNotes(argv.title, argv.body);
    }
})

// Remove
yargs.command({
    command:'remove',
    describe:'Remove note',
    builder:{
        'title':{
            describe:'Remove a note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title);
    }
})
// List
yargs.command({
    command:'list',
    describe:'List note',
    handler(){
        notes.listNotes();
    }
})
// Read
yargs.command({
    command:'read',
    describe:'Read note',
    builder:{
        title:{
            describe:'Read note title',
            demandOption:true,
            type:"string",
        }
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
})

.parse()
// console.log(yargs.argv);