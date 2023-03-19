/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import { ArrayHelper } from "./ArrayHelper";

//let inputArray = [5, 4, 3, 2, 1];
let sorter = new ArrayHelper([5, 4, 3, 2, 1]);
sorter.insertionSort();
let newArray = sorter.getArray();

console.log(sorter.toString());