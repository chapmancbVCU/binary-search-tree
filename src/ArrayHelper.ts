/**
 * @class A helper class for managing the array we will use to build the 
 * binary search tree.  This class includes functions for sorting and 
 * removing duplicates.
 * @author Chad Chapman
 */
export class ArrayHelper {
    private array: number[];

    /**
     * Constructor that accepts an array of numbers as a parameter.
     * @param { number[] } array An array of numbers that we will use to build 
     * our binary search tree.
     */
    constructor(array: number[]) {
        this.array = array;
    }

    /**
     * Getter function for an array of numbers.
     * @returns An array of numbers.
     */
    getArray(): number[] {
        return this.array;
    }

    /**
     * Function that performs the insertionSort algorithm aganst an array of 
     * numbers.
     */
    insertionSort(): void {
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

    /**
     * Removes duplicats from this array.
     */
    removeDuplicates(): void {
        let output: number[] = new Array();

        for (let item of this.array) {
            if (!output.includes(item)) {
                output.push(item);
            }
        }

        this.array = output;
    }

    /**
     * A to string function that returns the an array in the following format:
     * [1, 2, 3].
     * @returns A formatted string containing the array.
     */
    toString(): string {
        let result = '['
        for (let i = 0; i < this.array.length; i++) {
            if (i < this.array.length - 1) {
                result = result + `${this.array[i]}, `;
            } else {
                result = result + `${this.array[i]}`;
            }
        }
        return result + ']';
    }
}