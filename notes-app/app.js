const notes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')

const yargs = require('yargs')

yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',  
    handler: function(){
        console.log('Adding a new note!')
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',  
    handler: function(){
        console.log('Removing a note!')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',  
    handler: function(){
        console.log('Reading a note!')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Listing the notes',  
    handler: function(){
        console.log('Listing the notes!')
    }
})

console.log(yargs.argv)