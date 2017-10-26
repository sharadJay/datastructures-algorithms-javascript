// each tree has two nodes

function BinaryTree(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
}

BinaryTree.prototype.insert = function (value) {
    if (value <= this.value) {
        if (this.leftChild) {
            this.leftChild.insert(value);
        } else {
            this.leftChild = new BinaryTree(value);
        }
    }
    if (value > this.value) {
        if (this.rightChild) {
            this.rightChild.insert(value);
        } else {
            this.rightChild = new BinaryTree(value);
        }
    }
    return this;
}

BinaryTree.prototype.insertNode = function (node) {
    if (node.value <= this.value) {
        if (this.leftChild) {
            this.leftChild.insert(node);
        } else {
            this.leftChild = node;
        }
    }
    if (node.value > this.value) {
        if (this.rightChild) {
            this.rightChild.insert(node);
        } else {
            this.rightChild = node;
        }
    }
    return this;
}

BinaryTree.prototype.contains = function (value) {
    if (this.value === value) {
        return true;
    } else {
        if (value < this.value) {
            if (this.leftChild) return this.leftChild.contains(value);
            return false;
        }

        if (value > this.value) {
            if (this.rightChild) return this.rightChild.contains(value);
            return false;
        }
    }
}

BinaryTree.prototype.traverseInOrder = function () {
    if (this.rightChild === null && this.leftChild === null) {
        console.log(this.value);
        return;
    }
    if (!!this.leftChild) this.leftChild.traverseInOrder();
    console.log(this.value);
    if (!!this.rightChild) this.rightChild.traverseInOrder();
}

BinaryTree.prototype.traversePreOrder = function () {
    if (this.rightChild === null && this.leftChild === null) {
        console.log(this.value);
        return;
    }
    console.log(this.value);
    if (!!this.leftChild) this.leftChild.traversePreOrder();
    if (!!this.rightChild) this.rightChild.traversePreOrder();
}

BinaryTree.prototype.traversePostOrder = function () {
    if (this.rightChild === null && this.leftChild === null) {
        console.log(this.value);
        return;
    }
    if (!!this.leftChild) this.leftChild.traversePostOrder();
    if (!!this.rightChild) this.rightChild.traversePostOrder();
    console.log(this.value);
}

BinaryTree.prototype.deleteLowest = function (parent) {
    if (!this.leftChild && !this.rightChild) {
        if (parent === undefined) {
            console.log(`deleting parent ${this.value}`);
            return null;
        }
        console.log(`Deleting ${this.value}`)
        parent.leftChild = null;
        return;
    }
    else if (!this.leftChild && this.rightChild) {
        if (parent === undefined) {
            console.log(`deleting parent ${this.value}`);
            return this.rightChild;
        }
        console.log(`Deleting ${this.value}`);
        parent.leftChild = this.rightChild;
        return;
    } else if (this.leftChild) this.leftChild.deleteLowest(this);
    return this;
}

BinaryTree.prototype.deleteMax = function (parent) {
    if (!this.leftChild && !this.rightChild) {
        if (parent === undefined) {
            console.log(`Deleting root node ${this.value}`);
            this.value = null;
        }
        else {
            console.log(`Deleting node ${this.value}`);
            parent.rightChild = null;
        }
    } else if (!this.rightChild && this.leftChild) {
        if (parent === undefined) {
            console.log(`Deleting root node ${this.value}`);
            this.value = this.leftChild.value;
            this.leftChild = this.leftChild.leftChild;
        } else {
            console.log(`Deleting node ${this.value}`);
            parent.rightChild = this.leftChild;
        }
    } else if (this.rightChild) this.rightChild.deleteMax(this);
    return this;
}

BinaryTree.prototype.deleteNode = function (value, parent) {
    if (this.value === null) {
        console.log(`Node with value: ${value} not found`);
        return;
    }
    if (this.value > value) {
        this.leftChild.deleteNode(value, this);
    } else if (this.value < value) {
        this.rightChild.deleteNode(value, this);
    } else {
        console.log(`found node with value ${this.value}`);

    }
};

BinaryTree.prototype.deleteNodeRef = function (currentNode, parentNode) {
    if (parentNode.value > currentNode.value) {//it was left child
        if (!currentNode.leftChild && !currentNode.rightChild) {
            parentNode.leftChild = null;
        } else if (currentNode.leftChild && !currentNode.rightChild) {
            parentNode.leftChild = currentNode.leftChild;
        } else {
            parentNode.leftChild = currentNode.leftChild;
            parentNode.insertNode(currentNode.rightChild);
        }
    } else if (parentNode.value < currentNode.value) { //it was right child
        if (!currentNode.leftChild && !currentNode.rightChild) {
            parentNode.rightChild = null;
        }
        //else if(currentNode.leftChild)

    }
}

BinaryTree.prototype.depthFirstSearch = function (callback, distance = 0) {
    if (this.leftChild) this.leftChild.depthFirstSearch(callback, distance + 1);
    if (this.rightChild) this.rightChild.depthFirstSearch(callback, distance + 1);
    callback(this.value, distance);
}

BinaryTree.prototype.breadthFirstSearch = function () {
    let nodeQueue = [this];
    while (nodeQueue.length > 0) {
        console.log("current");
        console.log(nodeQueue);
        let currentNode = nodeQueue.shift();
        // console.log(currentNode.value);
        if (currentNode.leftChild) nodeQueue.push(currentNode.leftChild);
        if (currentNode.rightChild) nodeQueue.push(currentNode.rightChild);
    }
}
var levelOrder = function (root) {
    var traverseAndPopulateResults = function (root, depth) {
        if (root === null) return;
        if (results[depth]) {
            results[depth].push(root.val)
        } else {
            results[depth] = [root.val]
        }
        if (root.left) traverseAndPopulateResults(root.left, depth + 1)
        if (root.right) traverseAndPopulateResults(root.right, depth + 1)
    }
    var results = [];
    if (root === null) return [];
    if (root.right === null && root.left === null) return [[root.val]];
    traverseAndPopulateResults(root, 0);
    return results;
};



var root = new BinaryTree(4);
root.insert(2);
root.insert(7);
root.insert(21);
root.insert(1);
// console.log(root.contains(1));
// console.log(root.contains(21));
// console.log("In order");
// root.traverseInOrder();
// console.log("Pre order");
// root.traversePreOrder();
// console.log("Post order");
//root.traversePostOrder();
root.breadthFirstSearch();
// root.depthFirstSearch((value, distance) => console.log("DFS", value, distance));

