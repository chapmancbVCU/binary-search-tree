"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = void 0;
class BinarySearchTree {
    constructor() {
        /**
         * Prints a binary search tree to the command line.
         * @param { BSTNode } node The root of the binary search tree.
         * @param prefix
         * @param isLeft
         * @returns A print out of a node's value and position in binary search
         * tree.
         */
        this.prettyPrint = (node, prefix = '', isLeft = true) => {
            if (node === null) {
                return;
            }
            if (node.right !== null) {
                this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
            }
            console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
            if (node.left !== null) {
                this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
            }
        };
        this.root = null;
    }
    /**
     * Builds a binary search tree from a sorted array of numbers.
     * @param { number[] } sortedArray A sorted array of numbers.
     * @param { number} start The start index of the sortedArray.
     * @param { number }end The end index of the sortedArray.
     * @returns The node of a binary search tree.
     */
    buildBST(sortedArray, start, end) {
        // Base case
        if (start > end) {
            return null;
        }
        // Get middle element and make it root.
        const mid = Math.round((start + end) / 2);
        let node = new BSTNode(sortedArray[mid]);
        // We need to handle case when this.root is null.
        if (this.root == null) {
            this.root = node;
        }
        // Recursively construct left subtree and make it left child of root.
        node.left = this.buildBST(sortedArray, start, mid - 1);
        // Recursively construct right subtree and make it right child of root.
        node.right = this.buildBST(sortedArray, mid + 1, end);
        return node;
    }
    /**
     * Checks if value does not exist in the binary search tree.  If it does
     * not then we print a message.  Otherwise we delete the value with the
     * deleteNodeRecursively function.
     * @param { number } data The value we want removed from the binary search
     * tree.
     */
    deleteNode(data) {
        let testNode = this.search(this.root, data);
        if (testNode == null) {
            console.log(`The value, ${4}, does not exist.`);
        }
        else {
            this.root = this.deleteNodeRecursively(this.root, data);
        }
    }
    /**
     * Traverses the tree and removes the node that contains the value we
     * want to delete from the binary search tree.
     * @param { BSTNode} root The root of the tree or subtree.
     * @param { number } data The value we want to remove.
     * @returns The root of the tree or subtree.
     */
    deleteNodeRecursively(root, data) {
        // Base case: return root if treee is empty.
        if (root == null) {
            return root;
        }
        // Otherwise, recursively search tree for node with key.
        if (data < root.data) {
            root.left = this.deleteNodeRecursively(root.left, data);
        }
        else if (data > root.data) {
            root.right = this.deleteNodeRecursively(root.right, data);
        }
        else {
            // If key = root.data then delete key.
            // Node with only one child or no child.
            if (root.left == null) {
                return root.right;
            }
            else if (root.right == null) {
                return root.left;
            }
            /* When node has no children we get inorder successor (smallest
               in right subtree). */
            root.data = this.minimumValue(root.right);
            // Delete the inorder sucessor.
            root.right = this.deleteNodeRecursively(root.right, root.data);
        }
        return root;
    }
    /**
     * Checks if value exists.  If it does we print out a message.  Otherwise,
     * we insert the new value using the insertNodeRecursively function.
     * @param { number } data The value we want added to the binary search
     * tree.
     */
    insertNode(data) {
        let testNode = this.search(this.root, data);
        if (testNode == null) {
            this.root = this.insertNodeRecursively(this.root, data);
        }
        else {
            console.log(`The value, ${data}, already exists.`);
        }
    }
    /**
     * Traverses the tree and inserts the node that contains the value we
     * want to add to the binary search tree.
     * @param { BSTNode} root The root of the tree or subtree.
     * @param { number } data The value we want to add.
     * @returns The root of the tree or subtree.
     */
    insertNodeRecursively(root, data) {
        // Returns new node if key is empty.
        if (root == null) {
            root = new BSTNode(data);
            // Otherwise recursively travers the tree.
        }
        else if (data < root.data) {
            root.left = this.insertNodeRecursively(root.left, data);
        }
        else if (data > root.data) {
            root.right = this.insertNodeRecursively(root.right, data);
        }
        // Return unchanged node pointer.
        return root;
    }
    /**
     * Getter function for the main root node of the binary search tree.
     * This does not include root nodes of any subtree.
     * @returns The root of the binary search tree.
     */
    getRootNode() {
        return this.root;
    }
    /**
     * Returns the height of the binary search tree.
     * @param { BSTNode} root The root of the binary search tree.
     * @returns The value representing the height of the binary search tree.
     */
    height(root) {
        // Initialize variable to count height of the tree.
        let height = 0;
        let queue = [];
        // Push first level element along with null.
        queue.push(root);
        queue.push(null);
        while (queue.length > 0) {
            let temp = queue.shift();
            // When null is encountered we increment.
            if (temp == null) {
                height += 1;
            }
            // If null not encounted we keep searching
            if (temp != null) {
                if (temp.left) {
                    queue.push(temp.left);
                }
                if (temp.right) {
                    queue.push(temp.right);
                }
            }
            // If queue still have elements left, puts null again to queue.
            else if (queue.length > 0) {
                queue.push(null);
            }
        }
        return height;
    }
    /**
     * Returns value contained in left child of root.
     * @param { BSTNode } root The root of the tree or subtree.
     * @returns The value contained in the node we removed.
     */
    minimumValue(root) {
        let minValue = root.data;
        while (root.left != null) {
            minValue = root.left.data;
            root = root.left;
        }
        return minValue;
    }
    /**
     * Function that searches the binary search tree for a value that is
     * provided as an explicit parameter.
     * @param { BSTNode }root The root of the tree or subtree.
     * @param { number} data The value we want to find in the binary search
     * tree.
     * @returns The node containing the value we want to find.
     */
    search(root, data) {
        if (root == null || root.data == data) {
            return root;
        }
        if (root.data < data) {
            return this.search(root.right, data);
        }
        return this.search(root.left, data);
    }
    /**
     * Returns a string representing inorder traversal of binary search tree.
     * @param {BSTNode} root The node of the tree or subtree.
     * @returns A string representation of inorder traversal of binary search
     * tree.
     */
    toStringInorder(root) {
        let s = '';
        if (root == null) {
            return '';
        }
        s += this.toStringInorder(root.left);
        s += root.data;
        s += this.toStringInorder(root.right);
        return s;
    }
    /**
     * Returns a string representing postorder traversal of binary search tree.
     * @param {BSTNode} root The node of the tree or subtree.
     * @returns A string representation of postorder traversal of binary search
     * tree.
     */
    toStringPostorder(root) {
        let s = '';
        if (root == null) {
            return '';
        }
        s += this.toStringPostorder(root.left);
        s += this.toStringPostorder(root.right);
        s += root.data;
        return s;
    }
    /**
     * Returns a string representing preorder traversal of binary search tree.
     * @param {BSTNode} root The node of the tree or subtree.
     * @returns A string representation of preorder traversal of binary search
     * tree.
     */
    toStringPreorder(root) {
        let s = '';
        if (root == null) {
            return '';
        }
        s += root.data;
        s += this.toStringPreorder(root.left);
        s += this.toStringPreorder(root.right);
        return s;
    }
}
exports.BinarySearchTree = BinarySearchTree;
/**
 * @class The node element in a binary search tree.
 * @author Chad Chapman
 */
class BSTNode {
    /**
     * Sets value for data instance variables and sets left and right nodes
     * to null.
     * @param { number } data The key data value for a node in the binary
     * search tree.
     */
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
