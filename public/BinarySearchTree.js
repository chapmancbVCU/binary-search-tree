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
    deleteNode(key) {
        this.root = this.deleteNodeRecursively(this.root, key);
    }
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
            /* When node has not children we get inorder successor (smallest
               in right subtree). */
            root.data = this.minimumValue(root.right);
            // Delete the inorder sucessor.
            root.right = this.deleteNodeRecursively(root.right, root.data);
        }
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
    minimumValue(root) {
        let minValue = root.data;
        while (root.left != null) {
            minValue = root.left.data;
            root = root.left;
        }
        return minValue;
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
