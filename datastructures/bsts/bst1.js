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
        else {
            // Create a recursive function to search through looking for a proper empty space.
            const searchTree = function(node) {
                // If the data is less than the node.data we're going left.
                if (data < node.data) {
                    // If there isn't a node to the left we create a new node and add it there.
                    if (node.left === null) {
                        node.left = new Node(data);
                    }
                    // Else go down a node to the left and do the search again.
                    else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                }
                // If the data is greater than the node.data we're going right.
                else if (data > node.data) {
                    // If there isn't a node to the right than create a new node and add it there.
                    if (node.right === null) {
                        node.right = new Node(data);
                    }
                    // Else go down a node to the right and do the search again.
                    else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                }
                /* Neither data < node.data or data > node.data branch was called meaning
                    This prevents data being added to the BST that's already part of it.
                */
                else return null;
            }
            return searchTree(node);
        }
    }
}