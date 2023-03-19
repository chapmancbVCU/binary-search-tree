/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import { BSTElement } from "./BSTElement";

describe('#compareTo', () => {
    describe('When values of key are the same', () => {
        test('Returns 0', () => {
            const a = new BSTElement(1);
            const b = new BSTElement(1);
            const result = a.compareTo(b);
            
            expect(result).toBe(0);
        });
    });

    describe(`When a is less than b`, () => {
        test('Returns less than 0', () => {
            const a = new BSTElement(1);
            const b = new BSTElement(2);
            const result = a.compareTo(b);
            
            expect(result).toBeLessThan(0);
        });
    });

    describe('When a is greater than b', () => {
        test('Returns greater than 0', () => {
            const a = new BSTElement(2);
            const b = new BSTElement(1);
            const result = a.compareTo(b);
            
            expect(result).toBeGreaterThan(0);
        });
    });
});
