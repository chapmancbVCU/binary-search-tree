/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import { ArrayHelper } from "./ArrayHelper";

describe('#getArray', () => {
    test('Returns an array of numbers', () => {
        let helper = new ArrayHelper([1, 2, 3]);
        let array = helper.getArray();

        expect(array).toContain(1);
        expect(array).toContain(2);
        expect(array).toContain(3);
    })
});

describe('#insertionSort', () => {
    test('Returns a sorted list', () => {
        let helper = new ArrayHelper([3, 2, 1]);
        helper.insertionSort();
    
        expect(helper.toString()).toBe('[1, 2, 3]');
    });
});

describe('#removeDuplicates', () => {
    describe('Sorted array', () => {
        test('Remove duplicates from sorted array', () => {
            let helper = new ArrayHelper([1, 2, 3, 3 ,5 , 3, 7, 8, 9, 7]);
            helper.insertionSort();
            helper.removeDuplicates();
            expect(helper.toString()).toBe('[1, 2, 3, 5, 7, 8, 9, 7, 8, 9]');
        });
    });

    describe('Array of length 1', () => {
        test('Return original array', () => {
            let helper = new ArrayHelper([1]);
            helper.removeDuplicates();

            expect(helper.toString()).toBe('[1]');
        })
    });

    describe('Array of length 0', () => {
        test('Return original array', () => {
            let helper = new ArrayHelper([]);
            helper.removeDuplicates();

            expect(helper.toString()).toBe('[]');
        })
    });

    describe('Array with unique elements', () => {
        test('Return original array', () => {
            let helper = new ArrayHelper([1, 2, 3, 4, 5]);
            helper.removeDuplicates();

            expect(helper.toString()).toBe('[1, 2, 3, 4, 5]');
        });
    });
});

describe('#toString', () => {
    test('Returns a formatted string', () => {
        let helper = new ArrayHelper([1, 2, 3]);
        let result = helper.toString();

        expect(result).toBe('[1, 2, 3]');
    });
});