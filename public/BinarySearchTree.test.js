/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import { ArrayHelper } from "./ArrayHelper";
import { BinarySearchTree } from "./BinarySearchTree";

describe('#buildBST', () => {
    test('Returns newly created BST.  Also test inorderToString', () => {
        let bst = new BinarySearchTree();
        let root = bst.buildBST([1, 2, 3], 0, 2);
        let inOrder = bst.toStringInorder(root);

        expect(inOrder).toBe('123');
    });
});

describe('#deleteNode', () => {
    describe('When no tree is created', () => {
        test('We get null', () => {
            let bst = new BinarySearchTree();
            let root = bst.deleteNode();

            expect(bst.getRootNode()).toBeNull();
        });
    });

    describe('When value does not exist.', () => {
        test('Message indicating value does not exist is printed', () => {
            let bst = new BinarySearchTree();
            bst.buildBST([1, 2, 3], 0, 2);
            const logSpy = jest.spyOn(global.console, 'log');
            bst.deleteNode(4);

            expect(logSpy).toHaveBeenCalled();
            expect(logSpy).toHaveBeenCalledWith('The value, 4, does not exist.');
        });
    });

    describe('When value exists as root', () => {
        test('The value has been removed is root.', () => {
            let bst = new BinarySearchTree();
            bst.buildBST([1, 2, 3], 0, 2);
            bst.deleteNode(2);
            let result = bst.toStringInorder(bst.getRootNode());

            expect(result).toBe('13');
        });
    });

    describe('When value exists in left subtree', () => {
        test('The value has been removed from left subtree.', () => {
            let bst = new BinarySearchTree();
            bst.buildBST([1, 2, 3], 0, 2);
            bst.deleteNode(1);
            let result = bst.toStringInorder(bst.getRootNode());

            expect(result).toBe('23');
        });
    });

    describe('When value exists in right subtree', () => {
        test('The value has been removed from right subtree.', () => {
            let bst = new BinarySearchTree();
            bst.buildBST([1, 2, 3], 0, 2);
            bst.deleteNode(3);
            let result = bst.toStringInorder(bst.getRootNode());

            expect(result).toBe('12');
        });
    });


});

describe('#insertNode', () => {
    describe('When root is null', () => {
        test('New node is added', () => {
            let bst = new BinarySearchTree();
            bst.insertNode(1);
            let root = bst.getRootNode();
            expect(root.data).toBe(1);
        });
    });

    describe('When value exists', () => {
        test('Message is printed indicating value already exists', () => {
            let bst = new BinarySearchTree();
            bst.buildBST([1, 2, 3], 0, 2);
            const logSpy = jest.spyOn(global.console, 'log');
            bst.insertNode(2);

            expect(logSpy).toHaveBeenCalled();
            expect(logSpy).toHaveBeenCalledWith('The value, 2, already exists.');
        });
    });

    describe('Insert node somewhere in tree', () => {
        test('Value is inserted into tree', () => {
            let bst = new BinarySearchTree();
            bst.buildBST([1, 3, 4, 5], 0, 3);
            bst.insertNode(2);
            let result = bst.toStringInorder(bst.getRootNode());

            expect(result).toBe('12345');
        });
    });
});


