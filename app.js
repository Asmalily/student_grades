const yargs = require('yargs')
const comm = require('./commands')

// add
yargs.command({
    command: 'add',
    describe: 'add students',
    builder: {
        id: {
            describe: 'this is id in add command',
            demandOption: true,
            type: 'number'
        },
        name: {
            describe: 'this is name in add command',
            demandOption: true,
            type: 'string'
        },
        degrees: {
            describe: 'this is degrees in add command',
            demandOption: true,
            type: 'array'
        },
        comment: {
            describe: 'Add a comment',
            demandOption: false,
            type: 'string'
        }

    },
    handler: (x) => {
        comm.addstud(x.id, x.name, x.degrees, x.comment)
    }
})

//delete 
yargs.command({
    command: 'delete',
    describe: 'student delete',
    builder: {
        id: {
            describe: 'student is deleted',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (x) => {
        comm.deleteStud(x.id)
    }
})


//list 
yargs.command({
    command: 'list',
    describe: 'list student',
    handler: () => {
        comm.listStud()
    }
})

//read 
yargs.command({
    command: 'read',
    describe: 'read student data',
    handler: (x) => {
        comm.readStud(x.id)
    }
})

yargs.parse()