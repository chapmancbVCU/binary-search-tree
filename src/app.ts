/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import { ArrayHelper } from "./ArrayHelper";
import { BinarySearchTree } from "./BinarySearchTree";
//let inputArray = [5, 4, 3, 2, 1];
let sorter = new ArrayHelper([6, 5, 4, 5, 9, 3, 2, 5, 10, 1]);
sorter.insertionSort();
sorter.removeDuplicates();
let newArray = sorter.getArray();
console.log(`${newArray.toString()}\n`);
let bst = new BinarySearchTree();
bst.root = bst.buildBST(newArray, 0, newArray.length-1)!;
console.log(bst.prettyPrint(bst.root));