const sqlite = require('sqlite3').verbose();
const hash = require('../helpers/hashHelpers');
const dbPath = './db/test.db';

const db = new sqlite.Database(dbPath, (err) => {
    if (err) console.error(err.message);
    else console.log(`Connected to database ${dbPath}`);
})

async function test() {
    const selectAllUsers = new Promise((resolve, reject) => {
        db.each('SELECT * FROM users', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
    const user = await selectAllUsers;
    const checkPass = await hash.compareHash('hello world', user.hash);
    if (checkPass === true) {
        return {user_id: user.user_id, email: user.email};
    }

}

const  runTest = async () => {
    console.log(await test());
}

runTest();

db.close();