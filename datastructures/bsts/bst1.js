/** A node for a binary search tree.
 * @param {int} data The data contained within this node.
 * @param {pointer} left A pointer to the left node.
 * @param {pointer} right A pointer to the right node.
 */
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

/** 
 * A class containing the root node of a BST and required methods.
 * @method add A method to add data to a BST.
 * @param {int} data The value to add to the BST.
 * @method findMin - A method to find the minimum value in the BST.
 * @method findMax - A method to find the maximum value in the BST.
 * @method find - A method to find a value and return it's node.
 * @param {int} data The value to search for.
 * @returns The node containing the data searched for or null if not found.
 * @method isPresent - A method to find if a value is inside the BST.
 * @returns True if the data is present or else false.
 * @method Remove - A method to remove the specified data from the BST.
 * @param {int} data The value to remove from the BST.
 */
class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;

        if (node === null) {
            this.root = new Node(data);
            return;
        }
        const searchTree = function(node) {
            if (data < node.data) {
                if (node.left === null) {
                    node.left = new Node(data);
                    return;
                }
                if (node.left !== null) return searchTree(node.left);
            }
            if (data > node.data) {
                if (node.right === null) {
                    node.right = new Node(data);
                    return;
                }
                if (node.right !== null) return searchTree(node.right);
            }
            else return null;
        }
        return searchTree(node);
    }

    findMin() {
        let current = this.root;

        while(current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;

        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;

        while(current.data !== data) {
            if (current === null) return null;
            if (data < current.data) current = current.left;
            else current = current.right;
        }
        return current;
    }

    isPresent(data) {
        let current = this.root;
        while(current) { 
            if (data === current.data) return true;
            if (data < current.data) current = current.left;
            else current = current.right;
        }
        return false;
    }
    
    remove(data) {
        const removeNode = function(node, data) {
            if (node === null) return null;
            if (data === node.data) {

                if (node.left === null && node.right === null) return null;
                if (node.left === null) return node.right;
                if (node.right === null) return node.left;

                let tempNode = node.right;

                while(tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }
            if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }

        this.root = removeNode(this.root, data);
    }
}

let myBST = new BST();

myBST.add(1);
myBST.add(10);
console.log(myBST.root.data);
console.log(myBST.find(10));
myBST.remove(10);
console.log(myBST.isPresent(10));