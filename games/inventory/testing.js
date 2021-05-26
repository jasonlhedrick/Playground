const playerInventory = Array(12);

// Loot table of item ids this creature drops
const lootTable = [1050, 1, 21, 12];

// A hashtable might work better than using an array of objects
// Quicker search time
// Try that out later.

let weaponsList = [
    {
        id: 1050,
        name: 'Sword of the Night',
        strReq: '75',
        damage: '190',
        accuracy: '500',
        value: '25000'
    },
];

function findItemByID(id) {
    if (isNaN(id)) throw 'Error: Item ID is not a number.';
    if (id < 0) throw 'Error: Item ID is less than zero.';

    if (id >= 1000) {
        // Search weaponList
        for (let i = 0; i < weaponsList.length; i++) {
            if (weaponsList[i]['id'] === id) return weaponsList[i];
        }
    }
}

function pickupItem(id) {
    try {
        const item = findItemByID(id);
        return item;
    } catch(e) {
        console.error(e);
        return null;
    }
}

playerInventory[0] = pickupItem(1150);

console.log(playerInventory);