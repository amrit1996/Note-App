const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')



//Customize yargs version
yargs.version('1.1.0')

//Create add command

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        //console.log('Adding a new note!',argv)
        // console.log('Title:' + argv.title)
        // console.log('Body:'+ argv.body)

        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'remove note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
        
    }
})

//Create list command
yargs.command({
    command:'list',
    describe:'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title: {
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})



// add, remove, read, list
//console.log(yargs.argv)
yargs.parse()





























// const msg = getNoets()
// console.log(msg)
// const greenMsg = chalk.blue.inverse.bold('Success!') 
// console.log(greenMsg)

// console.log(process.argv[2])