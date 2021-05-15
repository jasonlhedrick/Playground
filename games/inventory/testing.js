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

function pickupItem(id) {
    if (id >= 1000) {
        // Search weaponList
        for (let i = 0; i < weaponsList.length; i++) {
            if (weaponsList[i]['id'] === id) {
                return weaponsList[i];
            }
        }
    }
}


playerInventory[0] = pickupItem(1050);


console.log(playerInventory);