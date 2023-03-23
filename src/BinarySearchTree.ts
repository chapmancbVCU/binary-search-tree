import { ArrayHelper } from "./ArrayHelper";

export class BinarySearchTree {
    private root: BSTNode;
    private array: ArrayHelper;
    constructor() {
        this.root = null!;
        this.array = new ArrayHelper([]);
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
     * Checks if value does not exist in the binary search tree.  If it does 
     * not then we print a message.  Otherwise we delete the value with the 
     * deleteNodeRecursively function.
     * @param { number } data The value we want removed from the binary search 
     * tree. 
     */
    deleteNode(data: number): void {
        let testNode = this.search(this.root, data);
        if (testNode == null) {
            console.log(`The value, ${4}, does not exist.`);
        } else {
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
     * Determines the depth of the binary search tree and returns this value 
     * as a number.  The depth is the longest path from the root node to the 
     * farthest leaf node.
     * @param { BSTNode } root The root of the tree or subtree.
     * @returns The depth of the binary search tree.
     */
    depth(root: BSTNode): number {
        if (root == null) {
            return 0;
        } else {
            // Compute depth of each subtree.
            let leftDepth = this.depth(root.left);
            let rightDepth = this.depth(root.right);

            // Use the larger value.
            if (leftDepth > rightDepth) {
                return leftDepth + 1;
            } else {
                return rightDepth + 1;
            }
        }
    }

    /**
     * Checks if value exists.  If it does we print out a message.  Otherwise,
     * we insert the new value using the insertNodeRecursively function.
     * @param { number } data The value we want added to the binary search 
     * tree. 
     */
    insertNode(data: number): void {
        let testNode = this.search(this.root, data);
        if (testNode == null) {
            this.root = this.insertNodeRecursively(this.root, data);
        } else {
            
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
     * Determines if the tree is balanced.
     * @param {BSTNode } root The root of the tree or subtree.
     * @returns True if balanced, otherwise false.
     */
    isBalanced(root: BSTNode): boolean {
        if (root == null) {
            return true;
        }

        // Determine height of left and right subtree.
        let leftHeight = this.isBalancedHelper(root.left);
        let rightHeight = this.isBalancedHelper(root.right);

        if (Math.abs(leftHeight - rightHeight) <= 1 && 
            this.isBalanced(root.left) == true && 
            this.isBalanced(root.right) == true) {
                return true;
        }

        // If we get here then tree is not height-balanced.
        return false;
    }

    /**
     * Helper function to assist isBalanced by determining height.
     * @param {BSTNode} root 
     * @returns The hight of the tree.
     */
    isBalancedHelper(root: BSTNode): number {
        if (root == null) {
            return 0;
        }

        return Math.max(this.isBalancedHelper(root.left), 
            this.isBalancedHelper(root.right)) + 1;
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
     * Returns the height of the binary search tree.
     * @param { BSTNode} root The root of the binary search tree. 
     * @returns The value representing the height of the binary search tree.
     */
    height(root: BSTNode): number {
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

    rebalanceBST(root: BSTNode) {
        // Store nodes in sorted order.
        let nodes: number[] = new Array()
        this.storeBSTNodes(root, this.array.getArray())!;
        for(let i = 0; i < this.array.getArray().length; i++) {
            console.log(this.array.getArray()[i]);
        }
        // Construct BST from nodes array.
        let n = this.array.getArray().length!;
        return this.buildBST(this.array.getArray(), 0, n-1);
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

    storeBSTNodes(root: BSTNode, nodes: number[]) {
        // Base case.
        if (root == null) {
            return;
        }

        // Store nodes in order.
        this.storeBSTNodes(root.left, nodes);
        nodes.push(root.data);
        this.storeBSTNodes(root.right, nodes);

        return nodes;
    }

    /**
     * Returns a string representing inorder traversal of binary search tree.
     * @param {BSTNode} root The node of the tree or subtree.
     * @returns A string representation of inorder traversal of binary search 
     * tree.
     */
    toStringInorder(root: BSTNode) {
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
    toStringPostorder(root: BSTNode) {
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
    toStringPreorder(root: BSTNode) {
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