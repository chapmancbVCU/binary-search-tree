/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import { ArrayHelper } from "./ArrayHelper";
import { BinarySearchTree } from "./BinarySearchTree";
//let inputArray = [5, 4, 3, 2, 1];
let sorter = new ArrayHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
//sorter.insertionSort();
sorter.removeDuplicates();
let array = sorter.getArray();
let bst = new BinarySearchTree();
bst.buildBST(array, 0, array.length - 1);
console.log(bst.prettyPrint(bst.getRootNode()));
console.log(bst.toStringInorder(bst.getRootNode()));
console.log(`height: ${bst.height(bst.getRootNode())}`);
console.log(`depth: ${bst.depth(bst.getRootNode())}`);
console.log(`balanced: ${bst.isBalanced(bst.getRootNode())}`);

bst.deleteNode(3);
bst.deleteNode(13);
bst.insertNode(17);
console.log(bst.prettyPrint(bst.getRootNode()));
console.log(`balanced: ${bst.isBalanced(bst.getRootNode())}`);

//let foo = bst.getRootNode();
let foo = bst.rebalanceBST(bst.getRootNode())!;
console.log(bst.prettyPrint(foo));
console.log(`balanced: ${bst.isBalanced(foo)}`);



