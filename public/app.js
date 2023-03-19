"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
const ArrayHelper_1 = require("./ArrayHelper");
const BinarySearchTree_1 = require("./BinarySearchTree");
//let inputArray = [5, 4, 3, 2, 1];
let sorter = new ArrayHelper_1.ArrayHelper([6, 5, 4, 3, 2, 1]);
sorter.insertionSort();
let newArray = sorter.getArray();
let bst = new BinarySearchTree_1.BinarySearchTree();
bst.root = bst.buildBST(newArray, 0, newArray.length - 1);
console.log(bst.prettyPrint(bst.root));
