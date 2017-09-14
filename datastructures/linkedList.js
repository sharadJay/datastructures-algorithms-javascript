function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList(value) {
    var nodeToStartWith = new Node(value);
    this.head = nodeToStartWith;
    this.tail = nodeToStartWith;
}

LinkedList.prototype.addToTail = function (node) {
    this.tail.next = node;
    this.tail = node;
}

LinkedList.prototype.removeNode = function (searchValue) {
    var currentNode = this.head;
    while (currentNode.next) {
        if (currentNode.value === searchValue) {

        }
        currentNode = currentNode.next;
    }
}

LinkedList.prototype.forEach = function (callback) {
    var currentNode = this.head;
    while (currentNode) {
        callback(currentNode.value);
        currentNode = currentNode.next;
    }
}

LinkedList.prototype.print = function () {
    var result = [];
    this.forEach(value => result.push(value));
    console.log(result.join(", "))
}

LinkedList.prototype.insertAfter = function (refNode, value) {
    var newNode = new Node(value);
    var oldNextValue = refNode.next;
    refNode.next = newNode;
    newNode.next = oldNextValue;
    if (this.tail === refNode) this.tail = newNode;
}

LinkedList.prototype.removeAfter = function (refNode) {
    var currentNode = this.head;
    while (currentNode) {
        if (currentNode.next === refNode) {
            currentNode.next = refNode.next;
        }
        currentNode = currentNode.next;
    }
}

LinkedList.prototype.insertHead = function (value) {
    var newNode = new Node(value);
    var olderHead = this.head;
    this.head = newNode;
    newNode.next = olderHead;
    if (this.tail === olderHead) this.tail = newNode;
}

LinkedList.prototype.removeHead = function () {
    var nextNode = this.head.next;
    if (nextNode) {
        this.head.next = null;
        this.head = nextNode;
    }
}

