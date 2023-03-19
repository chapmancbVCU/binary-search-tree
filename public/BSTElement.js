"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BSTElement = void 0;
/**
 * @class This class creates an element for each node in a binary sesarch
 * tree.  In other languages, like Java, this class would implement the
 * comparable interface.  The purpose of this class is to store the data that
 * is associated with each node in a binary search tree.
 * @author Chad Chapman
 */
class BSTElement {
    /**
     * Creates a new BSTElement object and stores an integer in the key
     * variable.
     * @param key The value associated with a node in this tree.
     */
    constructor(key) {
        this.key = key;
    }
    /**
     * Compares the key of this element with other.
     * @param { BSTElement } other The other element to compare 'this' one
     * with.
     * @returns The difference between this.key and other.key.
     */
    compareTo(other) {
        return this.key - other.key;
    }
}
exports.BSTElement = BSTElement;
