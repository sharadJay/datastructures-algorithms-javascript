/*
LINKED LIST
Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.
*/

function Node(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
}

function LinkedList(headValue) {
    if (headValue === undefined) console.log('Must provide value for first node');
    this.head = new Node(headValue);
    this.tail = this.head
}

LinkedList.prototype.forEach = function (callback) {
    let currentNode = this.head;
    while (currentNode) {
        callback(currentNode.value);
        currentNode = currentNode.next;
    }
};
// Time complexity: linear

LinkedList.prototype.print = function () {
    var result = [];
    this.forEach(function (value) {
        result.push(value);
    });
    return result.join(', ');
};
// Time complexity: linear

LinkedList.prototype.insertAfter = function (node, value) {
    let newNode = new Node(value);
    newNode.next = node.next;
    newNode.prev = node;
    node.next = newNode;
    if (this.tail == node) this.tail = newNode;
    return newNode;
};
// Time complexity: constant

LinkedList.prototype.removeAfter = function (node) {
    let nodeToBeRemoved = node.next
    if (nodeToBeRemoved) {
        node.next = nodeToBeRemoved.next;
        if (this.tail == nodeToBeRemoved) {
            this.tail = nodeToBeRemoved;
        } else {
            nodeToBeRemoved.next.prev = node;
        }
        nodeToBeRemoved.next = null;
        nodeToBeRemoved.prev = null;
        return nodeToBeRemoved;
    } else {
        console.log("There is no node to be removed.")
    }
};
// Time complexity: constant

LinkedList.prototype.insertHead = function (value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
};
// Time complexity: constant

LinkedList.prototype.removeHead = function () {
    if (this.head) {
        if (this.tail == this.head)
            this.tail = null
        let previousHead = this.head;
        this.head = previousHead.next;
        this.head.prev = null;
        //remove after effects
        previousHead.next = null;
    } else {
        console.log("there is no head");
    }
}

LinkedList.prototype.findNode = function (value) {
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === value)
            return currentNode;
        currentNode = currentNode.next;
    }
};
// Time complexity: linear

LinkedList.prototype.appendToTail = function (value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
};
// Time complexity: constant


// PART 2:

LinkedList.prototype.insertBefore = function (node, value) {
    let newNode = new Node(value);
    if (node.prev == null) {
        this.head = newNode;
    } else {
        node.prev.next = newNode;
    }
    newNode.prev = node.prev;
    newNode.next = node;
    node.prev = newNode;
};
// Time complexity: constant

LinkedList.prototype.removeBefore = function (node) {
    if (node.prev) {
        let nodeToBeRemoved = node.prev;
        node.prev = nodeToBeRemoved.prev;
        let previousNodeOfRemoved = nodeToBeRemoved.prev;
        if (previousNodeOfRemoved) {
            previousNodeOfRemoved.next = node
        } else { //it is head
            this.head = node
        }
        nodeToBeRemoved.next = null;
        nodeToBeRemoved.prev = null;
    }

};
// Time complexity: constant


var myList = new LinkedList(0);

console.log(myList.print(), 'should be 0');
console.log(myList.insertAfter(myList.head, 1), 'should be 1');
console.log(myList.print(), 'should be 0, 1');
console.log(myList.insertAfter(myList.head.next, 3), 'should be 3');
console.log(myList.print(), 'should be 0, 1, 3');
console.log(myList.insertAfter(myList.head.next, 2), 'should be 2');
console.log(myList.print(), 'should be 0, 1, 2, 3');
console.log(myList.removeAfter(myList.head), 'should be 1');
console.log(myList.print(), 'should be 0, 2, 3');
console.log(myList.insertHead(-1), 'should be -1');
console.log(myList.print(), 'should be -1, 0, 2, 3');
console.log(myList.removeHead(), 'should be -1');
console.log(myList.print(), 'should be 0, 2, 3');
console.log(myList.appendToTail(4), 'should be 4');
console.log(myList.print(), 'should be 0, 2, 3, 4');
console.log(myList.findNode(0) === myList.head, 'should be true');
console.log(myList.findNode(3) === myList.head.next.next, 'should be true');
myList.insertAfter(myList.findNode(2), 2.5);
console.log(myList.print(), 'should be 0, 2, 2.5, 3, 4');
myList.removeAfter(myList.findNode(2));
console.log(myList.print(), 'should be 0, 2, 3, 4');

console.log(myList.insertBefore(myList.head.next, 1), 'should be 1');
console.log(myList.print(), 'should be 0, 1, 2, 3, 4');
console.log(myList.removeBefore(myList.head.next.next), 'should be 1');
console.log(myList.print(), 'should be 0, 2, 3, 4');
console.log(myList.removeBefore(myList.head.next), 'should be 0');
console.log(myList.print(), 'should be 2, 3, 4');