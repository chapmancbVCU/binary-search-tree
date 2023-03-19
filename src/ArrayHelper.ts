/**
 * @class A helper class for managing the array we will use to build the 
 * binary search tree.  This class includes functions for sorting and 
 * removing duplicates.
 * @author Chad Chapman
 */
export class ArrayHelper {
    private array: number[];

    constructor(array: number[]) {
        this.array = array;
    }

    getArray(): number[] {
        return this.array;
    }

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