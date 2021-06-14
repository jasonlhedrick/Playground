const sqlite = require('sqlite3').verbose();
const hash = require('../helpers/hashHelpers');
const dbPath = './db/test.db';

const db = new sqlite.Database(dbPath, (err) => {
    if (err) console.error(err.message);
    else console.log(`Connected to database ${dbPath}`);
})

async function test(password) {
    const selectAllUsers = new Promise((resolve, reject) => {
        db.all('SELECT * FROM users', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })

    return await selectAllUsers;
    /*
    const user = await selectAllUsers;
    const checkPass = await hash.compareHash(password, user.hash);
    if (checkPass === true) {
        return {user_id: user.user_id, email: user.email};
    }
    return {errMessage: 'Username or password incorrect.'}
    */
}

async function login(user) {
    const selectUser = new Promise((resolve, reject) => {
        db.each('SELECT * FROM users WHERE email=?', [user.email], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
    const checkUser = await selectUser;
    const checkPass = await hash.compareHash(user.pass, checkUser.hash);
    if (checkPass) return { user_id: checkUser.user_id, email: checkUser.email };
    return { error: 'Username or password not matched.' };
}

const  runTest = async () => {
    try {
        const testLogin = await login({email: 'a@a.com', pass: 'hello world'});
        console.log(testLogin)
    }
    catch (err) {
        console.log(err.message);
    }
}

async function addUser(user) {
    user.pass = await hash.hashPass(user.pass);
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO users(email, hash) VALUES(?,?)', [user.email, user.pass], (err, row) => {
            if (err) reject(err);
            resolve(row);
        })
    })
}

runTest();
