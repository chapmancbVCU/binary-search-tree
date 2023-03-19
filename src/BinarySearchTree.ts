class BinarySearchTree {
    
}

class BSTNode {
    public data: Number;
    public left: BSTNode;
    public right: BSTNode;

    constructor(data: number) {
        this.data = data;
        this.left = null!;
        this.right = null!;
    }
}