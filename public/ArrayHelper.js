"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayHelper = void 0;
/**
 * @class A helper class for managing the array we will use to build the
 * binary search tree.  This class includes functions for sorting and
 * removing duplicates.
 * @author Chad Chapman
 */
class ArrayHelper {
    /**
     * Constructor that accepts an array of numbers as a parameter.
     * @param { number[] } array An array of numbers that we will use to build
     * our binary search tree.
     */
    constructor(array) {
        this.array = array;
    }
    /**
     *
     * @returns
     */
    getArray() {
        return this.array;
    }
    insertionSort() {
        for (let i = 0; i < this.array.length; i++) {
            let next = this.array[i];
            // Find the insertion location and move all larger elements up.
            let j = i;
            while (j > 0 && this.array[j - 1] > next) {
                this.array[j] = this.array[j - 1];
                j--;
            }
            // Insert the element
            this.array[j] = next;
        }
    }
    toString() {
        let result = '[';
        for (let i = 0; i < this.array.length; i++) {
            if (i < this.array.length - 1) {
                result = result + `${this.array[i]}, `;
            }
            else {
                result = result + `${this.array[i]}`;
            }
        }
        return result + ']';
    }
}
exports.ArrayHelper = ArrayHelper;
