/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import { ArrayHelper } from "./ArrayHelper";
import { BinarySearchTree } from "./BinarySearchTree";
//let inputArray = [5, 4, 3, 2, 1];
let sorter = new ArrayHelper([6, 5, 4, 5, 9, 3, 2, 5, 10, 1]);
sorter.insertionSort();
sorter.removeDuplicates();

console.log(`Output: ${sorter.toString()}\n`);
//let newArray = sorter.getArray();
let bst = new BinarySearchTree();
let root = bst.getRootNode();
root = bst.buildBST(sorter.getArray(), 0, sorter.getArray().length-1)!;
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