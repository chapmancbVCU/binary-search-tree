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

describe('#toString', () => {
    test('Returns a formatted string', () => {
        let helper = new ArrayHelper([1, 2, 3]);
        let result = helper.toString();

        expect(result).toBe('[1, 2, 3]');
    });
});