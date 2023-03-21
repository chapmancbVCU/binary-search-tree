export class BinarySearchTree {
    private root: BSTNode;

    constructor() {
        this.root = null!;
    }

    /**
     * Builds a binary search tree from a sorted array of numbers.
     * @param { number[] } sortedArray A sorted array of numbers.
     * @param { number} start The start index of the sortedArray.
     * @param { number }end The end index of the sortedArray.
     * @returns The node of a binary search tree.
     */
    buildBST(sortedArray: number[], start: number, end: number) {
        // Base case
        if(start > end) {
            return null;
        }

        // Get middle element and make it root.
        let mid = Math.round((start + end) / 2);
        let node = new BSTNode(sortedArray[mid]);

        // Recursively construct left subtree and make it left child of root.
        node.left = this.buildBST(sortedArray, start, mid - 1)!;
        // Recursively construct right subtree and make it right child of root.
        node.right = this.buildBST(sortedArray, mid + 1, end)!;

        return node;
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
     * Prints a binary search tree to the command line.
     * @param { BSTNode } node The root of the binary search tree.
     * @param prefix 
     * @param isLeft 
     * @returns A print out of a node's value and position in binary search 
     * tree.
     */
    prettyPrint = (node: BSTNode, prefix = '', isLeft = true) => {
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
      }
}

/**
 * @class The node element in a binary search tree.
 * @author Chad Chapman
 */
class BSTNode {
    public data: number;
    public left: BSTNode;
    public right: BSTNode;

    /**
     * Sets value for data instance variables and sets left and right nodes 
     * to null.
     * @param { number } data The key data value for a node in the binary 
     * search tree. 
     */
    constructor(data: number) {
        this.data = data;
        this.left = null!;
        this.right = null!;
    }
}