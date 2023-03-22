/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import { ArrayHelper } from "./ArrayHelper";
import { BinarySearchTree } from "./BinarySearchTree";
//let inputArray = [5, 4, 3, 2, 1];
let sorter = new ArrayHelper([1, 2, 3]);
sorter.insertionSort();
sorter.removeDuplicates();

console.log(`Output: ${sorter.toString()}\n`);
