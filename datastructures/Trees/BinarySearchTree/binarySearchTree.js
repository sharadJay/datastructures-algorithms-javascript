/*
BINARY SEARCH TREES
Abstract data type
A binary search tree is a tree with the additional constraints:
- each node has only two child nodes (node.left and node.right)
- all the values in the left subtree of a node are less than or equal to the value of the node
- all the values in the right subtree of a node are greater than the value of the node*/

let BinarySearchTree = function (val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.insertNode = function (val) {
    if (val < this.val) {
        if (this.left)
            this.left.insertNode(val);
        else
            this.left = new BinarySearchTree(val);
    } else {
        if (this.right)
            this.right.insertNode(val);
        else
            this.right = new BinarySearchTree(val);
    }
    return this;
}

BinarySearchTree.prototype.contains = function (val) {
    if (this.val === val) return true;
    if (val < this.val) {
        if (!!this.left)
            return this.left.contains(val);
    } else {
        if (!!this.right)
            this.right.contains(val);
    }
    return false;
}

// Application - This gets sorted list
BinarySearchTree.prototype.traverseDepthFirst_inOrder = function (callback) {
    if (!!this.left) this.left.traverseDepthFirst_inOrder(callback);
    callback(this.val);
    if (this.right) this.right.traverseDepthFirst_inOrder(callback);
}

BinarySearchTree.prototype.traverseDepthFirst_preOrder = function (callback) {
    callback(this.val);
    if (!!this.left) this.left.traverseDepthFirst_preOrder(callback);
    if (!!this.right) this.right.traverseDepthFirst_preOrder(callback);
}

BinarySearchTree.prototype.traverseDepthFirst_postOrder = function (callback) {
    if (!!this.left) this.left.traverseDepthFirst_postOrder(callback);
    if (!!this.right) this.right.traverseDepthFirst_postOrder(callback);
    callback(this.val);
}

BinarySearchTree.prototype.isValid = function (min = -Infinity, max = Infinity) {
    if (this.val <= min || this.val >= max) return false;
    if (!!this.left)
        if (!this.left.isValid(min, this.val))
            return false;
    if (!!this.right)
        if (!this.right.isValid(this.val, max))
            return false;
    return true;
}

BinarySearchTree.prototype.checkIfBalanced = function () {
    let heights = [];
    let recurse = function (node, depth) {
        if (!node) {
            heights.push(depth);
        } else {
            recurse(node.left, depth + 1);
            recurse(node.right, depth + 1);
        }
    }
    recurse(this, 0);
    let max = Math.max.apply(null, heights);
    let min = Math.min.apply(null, heights);
    return max - min <= 1;
};

BinarySearchTree.prototype.traverseBreadthFirst = function (fn) {
    let queue = [this];
    while (queue.length > 0) {
        let enqueuedItem = queue.shift();
        fn(enqueuedItem);
        !!enqueuedItem.left && queue.push(enqueuedItem.left);
        !!enqueuedItem.right && queue.push(enqueuedItem.right);
    }
}


BinarySearchTree.prototype.checkIfFull = function () {
    let isFull = true;
    this.traverseBreadthFirst(function (node) {
        if (!node.left && node.right) isFull = false;
        else if (node.left && !node.right) isFull = false;
    });
    return isFull;
};

//WIP
BinarySearchTree.prototype.deleteMin = function (parent = null) {
    if (!this.left && !this.right)
        parent.left = null;
    else if (!this.left && parent.right) {
        parent.left = this.right;
    }
    if (this.left) this.left.deleteMin(this);
}


let bst = new BinarySearchTree(21);
bst.insertNode(5);
bst.insertNode(8);
bst.insertNode(2);
bst.insertNode(3);
bst.insertNode(25);
bst.insertNode(23);
bst.insertNode(28);
// console.log(bst.contains(21), "should be true");
// console.log(bst.contains(2), "should be true");
// console.log(bst.contains(15), "should be false");
// console.log(bst.contains(0), "should be false");
// bst.traverseDepthFirst_inOrder(val => console.log(val));
// bst.traverseDepthFirst_preOrder(val => console.log(val));
// bst.traverseDepthFirst_postOrder(val => console.log(val));
// console.log(bst.checkIfBalanced(), " should be true");
// var fullBSTree = new BinarySearchTree(10);
// fullBSTree.insertNode(5).insertNode(20).insertNode(15).insertNode(21).insertNode(16).insertNode(13);
// console.log(fullBSTree.checkIfFull(), 'should be true');
//
// bst.traverseBreadthFirst(node => console.log(node.val));