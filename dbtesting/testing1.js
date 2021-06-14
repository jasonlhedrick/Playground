const sqlite = require('sqlite3');

const db = new sqlite.Database('test.db', (err) => {
    if (err) console.error(err.message);
    else console.log(`Connected to database test.db`);
});

async function createNotesTable() {
    return new Promise((resolve, reject) => {
        db.run(`CREATE TABLE IF NOT EXISTS notes(
            note_id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            body TEXT
        )`, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
}

async function addNote(note) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO notes(title, body) VALUES(?, ?)', [note.title, note.body], (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    })
}

async function getNotes() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM notes', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}
async function test() {
    await addNote({title: 'Testing', body: 'test note'});
    const notes = await getNotes();
    console.log(notes);
    db.close();
}

test();
