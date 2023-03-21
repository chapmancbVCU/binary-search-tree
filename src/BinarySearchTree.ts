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
        const mid = Math.round((start + end) / 2);
        let node = new BSTNode(sortedArray[mid]);
        
        // We need to handle case when this.root is null.
        if (this.root == null)  {
            this.root = node;
        }
        
        // Recursively construct left subtree and make it left child of root.
        node.left = this.buildBST(sortedArray, start, mid - 1)!;
        // Recursively construct right subtree and make it right child of root.
        node.right = this.buildBST(sortedArray, mid + 1, end)!;

        return node;
    }

    /**
     * Calls the deleteNodeRecursively function.
     * @param { number } data The value we want removed from the binary search 
     * tree. 
     */
    deleteNode(data: number): void {
        this.root = this.deleteNodeRecursively(this.root, data);
    }

    /**
     * Traverses the tree and removes the node that contains the value we  
     * want to delete from the binary search tree.
     * @param { BSTNode} root The root of the tree or subtree. 
     * @param { number } data The value we want to remove.
     * @returns The root of the tree or subtree.
     */
    deleteNodeRecursively(root: BSTNode, data: number): BSTNode {
        // Base case: return root if treee is empty.
        if(root == null) {
            return root;
        }
        
        // Otherwise, recursively search tree for node with key.
        if (data < root.data) {
            root.left = this.deleteNodeRecursively(root.left, data);
        } else if (data > root.data) {
            root.right = this.deleteNodeRecursively(root.right, data);
        } else {
            // If key = root.data then delete key.
            
            // Node with only one child or no child.
            if (root.left == null) {
                return root.right;
            } else if (root.right == null) {
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
     * Calls the insertNodeRecursively function.
     * @param { number } data The value we want added to the binary search 
     * tree. 
     */
    insert(data: number): void {
        this.root = this.insertNodeRecursively(this.root, data);
    }

    /**
     * Traverses the tree and inserts the node that contains the value we  
     * want to add to the binary search tree.
     * @param { BSTNode} root The root of the tree or subtree. 
     * @param { number } data The value we want to add.
     * @returns The root of the tree or subtree.
     */
    insertNodeRecursively(root: BSTNode, data: number): BSTNode {
        // Returns new node if key is empty.
        if (root == null) {
            root = new BSTNode(data);
        
        // Otherwise recursively travers the tree.
        } else if (data < root.data) {
            root.left = this.insertNodeRecursively(root.left, data);
        } else if (data > root.data) {
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
    getRootNode(): BSTNode {
        return this.root;
    }

    /**
     * Returns value contained in left child of root.
     * @param { BSTNode } root The root of the tree or subtree. 
     * @returns The value contained in the node we removed.
     */
    minimumValue(root: BSTNode): number {
        let minValue = root.data;
        while(root.left != null) {
            minValue = root.left.data;
            root = root.left;
        }
        return minValue;
    }

    /**
     * Prints a binary search tree to the command line.
     * @param { BSTNode } node The root of the binary search tree.
     * @param prefix 
     * @param isLeft 
     * @returns A print out of a node's value and position in binary search 
     * tree.
     */
    prettyPrint = (node: BSTNode, prefix = '', isLeft = true): void|undefined => {
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

    /**
     * Function that searches the binary search tree for a value that is 
     * provided as an explicit parameter.
     * @param { BSTNode }root The root of the tree or subtree. 
     * @param { number} data The value we want to find in the binary search 
     * tree.
     * @returns The node containing the value we want to find. 
     */
    search(root: BSTNode, data: number): BSTNode {
        if (root == null || root.data == data) {
            return root;
        }

        if (root.data < data) {
            return this.search(root.right, data);
        }

        return this.search(root.left, data);
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