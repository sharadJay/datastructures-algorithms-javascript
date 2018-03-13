let MinHeap = function () {
    this.storage = [];
}

//helper functions
let getLeftChildIndex = n => 2 * n + 1;
let getRightChildIndex = n => 2 * n + 2;
let getParentIndex = n => Math.floor((n - 1) / 2);
MinHeap.prototype.swap = function (i, j) {
    [this.storage[i], this.storage[j]] = [this.storage[j], this.storage[i]];
}

MinHeap.prototype.getLeftChild = function (parentIndex) {
    return this.storage[getLeftChildIndex(parentIndex)];
}

MinHeap.prototype.getSize = function () {
    return this.storage.length;
}

MinHeap.prototype.getRightChild = function (parentIndex) {
    return this.storage[getRightChildIndex(parentIndex)];
}

MinHeap.prototype.getParent = function (childIndex) {
    return this.storage[getParentIndex(childIndex)];
}

MinHeap.prototype.hasLeftChild = function (parentIndex) {
    return getLeftChildIndex(parentIndex) < this.getSize();
}

MinHeap.prototype.hasRightChild = function (parentIndex) {
    return getRightChildIndex(parentIndex) < this.getSize();
}

MinHeap.prototype.hasParent = function (childNode) {
    return getParentIndex(childNode) > -1;
}

MinHeap.prototype.heapifyUp = function () {
    let index = this.getSize() - 1;
    while (this.hasParent(index) && this.getParent(index) > this.storage[index]) {
        this.swap(index, getParentIndex(index));
        index = getParentIndex(index);
    }
}

MinHeap.prototype.heapifyDown = function () {
    let index = 0;
    while (this.hasLeftChild(index)) {
        let smallestNumberIndex = getLeftChildIndex(index);
        if (this.hasRightChild(index) && this.getRightChild(index) < this.storage[smallestNumberIndex]) {
            smallestNumberIndex = getRightChildIndex(index);
        }
        this.swap(index, smallestNumberIndex);
        index = smallestNumberIndex;
    }
}

MinHeap.prototype.add = function (item) {
    this.storage.push(item);
    this.heapifyUp();
}

MinHeap.prototype.remove = function () {
    this.swap(0, this.getSize() - 1);
    let smallestNumber = this.storage.pop();
    this.heapifyDown()
    return smallestNumber;
}

MinHeap.prototype.getStorage = function () {
    return this.storage.toString();
}

MinHeap.prototype.peek = function () {
    return this.storage[0];
}


let heap = new MinHeap();
heap.add(2);
heap.add(4);
heap.add(8);
heap.add(12);
heap.add(3);
heap.add(1);
heap.add(0);
console.log(heap.getStorage(), "should be 0,3,1,12,4,8,2");
heap.remove();
console.log(heap.getStorage(), "should be 1,3,8,12,4,2");
console.log(heap.peek(),"should be 1");
