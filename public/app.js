"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
const ArrayHelper_1 = require("./ArrayHelper");
//let inputArray = [5, 4, 3, 2, 1];
let sorter = new ArrayHelper_1.ArrayHelper([5, 4, 3, 2, 1]);
sorter.insertionSort();
let newArray = sorter.getArray();
console.log(sorter.toString());
