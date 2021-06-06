class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        // If the root node is null that means this tree is empty so add at the head.
        if (node === null) {
            this.root = new Node(data);
            return;
        }
    
        // Create a recursive function to search through looking for a proper empty space.
        const searchTree = function(node) {
            // If the data is less than the node.data we're going left.
            if (data < node.data) {
                // If there isn't a node to the left we create a new node and add it there.
                if (node.left === null) {
                    node.left = new Node(data);
                    return;
                }
                // Else go down a node to the left and do the search again.
                if (node.left !== null) return searchTree(node.left);
            }
            // If the data is greater than the node.data we're going right.
            if (data > node.data) {
                // If there isn't a node to the right than create a new node and add it there.
                if (node.right === null) {
                    node.right = new Node(data);
                    return;
                }
                // Else go down a node to the right and do the search again.
                if (node.right !== null) return searchTree(node.right);
            }
            /* Neither data < node.data or data > node.data branch was called meaning
                This prevents data being added to the BST that's already part of it.
            */
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
            /***************
                If the data matches up return ASAP
                If we've run into a null dead end return ASAP.
                If data is smaller than the current node go left.
                Otherwise go right.
            ****************/
            if (data === current.data) return true;
            if (current ===  null) return false;
            if (data < current.data) current = current.left;
            else current = current.right;
        }
    }
}

let myBST = new BST();

myBST.add(1);
console.log(myBST.root.data);
console.log(myBST.isPresent(1));