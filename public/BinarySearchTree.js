"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = void 0;
class BinarySearchTree {
    //sortedArray: number[];
    constructor() {
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
        //this.sortedArray = null!;
    }
    buildBST(sortedArray, start, end) {
        // Base case
        if (start > end) {
            return null;
        }
        // Get middle element and make it root.
        let mid = Math.round((start + end) / 2);
        let node = new BSTNode(sortedArray[mid]);
        // Recursively construct left subtree and make it left child of root.
        node.left = this.buildBST(sortedArray, start, mid - 1);
        // Recursively construct right subtree and make it right child of root.
        node.right = this.buildBST(sortedArray, mid + 1, end);
        return node;
    }
}
exports.BinarySearchTree = BinarySearchTree;
class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
