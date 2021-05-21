/* Promises with the sqlite3 library */

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/messages.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to database successfully.');
});

function testTableNotes() {
    db.run('CREATE TABLE IF NOT EXISTS greetings(message text)', (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    })
    .run(`INSERT INTO greetings(message)
        VALUES('HI'),
            ('Hello'),
            ('Welcome')`)
    .each(`SELECT message FROM greetings`, (err, row) => {
        if (err) throw err;
        console.log(row.message);
    })
}

//testTableNotes();

async function selectMessages() {
    const query = `SELECT message FROM greetings`;
    const rows = new Array;
    db.each(query, (err, row) => {
        if (err) throw err;
        rows.push(row);
    });
    return rows;
}

function test() {
    return new Promise(resolve => {
        db.all(`SELECT message FROM greetings`, (err, rows) => {
            if (err) throw err;
            resolve(rows);
        });
    })
}

async function test2() {
    db.all(`SELECT message FROM greetings`, (err, rows) => {
        if(err) throw err;
        return rows;
    });
}

function cb(err, rows) {
    //if(err) throw err;
    return rows;
}

function getMessages() {
    db.all(`SELECT message FROM greetings`, cb);
}

async function blah() {
    console.log(await test());
    console.log(await test2());
}

blah();
console.log(getMessages());
/*
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
});
*/