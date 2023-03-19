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

describe('#toString', () => {
    let helper = new ArrayHelper([1, 2, 3]);
    let result = helper.toString();

    expect(result).toBe('[1, 2, 3]');
})