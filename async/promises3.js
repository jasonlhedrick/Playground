const sqlite3 = require('sqlite3').verbose();

const hash = require('../helpers/hashHelpers');

const dbPath = './db/test.db';

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error(err.message);
    else console.log('Connected to database successfully.');
});

async function createUsersTable() {
    const query = `CREATE TABLE IF NOT EXISTS users(
        user_id INTEGER PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        hash TEXT NOT NULL)`;

    db.run(query, (err) => {
        if (err) throw err;
    });
}

async function addUser(user) {
    // Expects a user object in the form of user.email & user.hash
    user.hash = await hash.hashPass(user.hash);
    db.run(`INSERT INTO users(email, hash) VALUES(?,?)`, [user.email, user.hash], (err, row) => {
        if (err) console.error(err.message);
    });
    db.each(`SELECT user_id FROM users WHERE email = ?`, user.email, (err, row) => {
        if (err) console.log(err);
        console.log(row);
    })
}


createUsersTable().then(() => {
    addUser({email: 'a@a.com', hash: 'hello world'});
}); 


db.all(`SELECT * FROM users`, (err, rows) => {
    console.log(rows);
});