"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
const ArrayHelper_1 = require("./ArrayHelper");
const BinarySearchTree_1 = require("./BinarySearchTree");
//let inputArray = [5, 4, 3, 2, 1];
let sorter = new ArrayHelper_1.ArrayHelper([6, 5, 4, 5, 9, 3, 2, 5, 10, 1]);
sorter.insertionSort();
sorter.removeDuplicates();
console.log(`Output: ${sorter.toString()}\n`);
//let newArray = sorter.getArray();
let bst = new BinarySearchTree_1.BinarySearchTree();
let root = bst.getRootNode();
root = bst.buildBST(sorter.getArray(), 0, sorter.getArray().length - 1);
console.log(bst.prettyPrint(root));
/*var array = [1,3,2,1,3,4,5,6,7,3,5,6,4,3]
let output: number[] = new Array();

function removeDuplicates(array: number[]){

for(let item of array){
    
    if(!output.includes(item))
      output.push(item)
}
console.log(output.length);
return output

}
console.log(removeDuplicates(sorter.getArray()));*/ 
