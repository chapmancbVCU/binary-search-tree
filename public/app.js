"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
const ArrayHelper_1 = require("./ArrayHelper");
const BinarySearchTree_1 = require("./BinarySearchTree");
//let inputArray = [5, 4, 3, 2, 1];
let sorter = new ArrayHelper_1.ArrayHelper([1, 2, 3, 4, 5]);
//sorter.insertionSort();
sorter.removeDuplicates();
let array = sorter.getArray();
let bst = new BinarySearchTree_1.BinarySearchTree();
bst.buildBST(array, 0, array.length - 1);
console.log(bst.prettyPrint(bst.getRootNode()));
console.log(bst.toStringPostorder(bst.getRootNode()));
