function MinHeap() {
    this.storage = [];
}

//has left child
MinHeap.prototype.hasLeft = function (parentIndex) {
    return (2 * parentIndex + 1) < this.storage.length;
}
MinHeap.prototype.hasRight = function (parentIndex) {
    return (2 * parentIndex + 2) < this.storage.length;
}
MinHeap.prototype.hasParent = function (childIndex) {
    return ( childIndex - 1) / 2 >= 0;
}
MinHeap.prototype.getLeftChild = function (parentIndex) {
    return this.storage[this.getLeftChildIndex(parentIndex)];
}
MinHeap.prototype.getRightChild = function (parentIndex) {
    return this.storage[this.getRightChildIndex(parentIndex)];
}
MinHeap.prototype.getParent = function (childIndex) {
    return this.storage[this.getParentIndex(childIndex)];
}

MinHeap.prototype.getLeftChildIndex = function (parent) {
    return 2 * parent + 1;
}

MinHeap.prototype.getRightChildIndex = function (parent) {
    return 2 * parent + 2;
}

MinHeap.prototype.getParentIndex = function (child) {
    let index = Math.floor((child - 1) / 2);
    return index >= 0 ? index : 0;
}

MinHeap.prototype.peek = function () {
    return this.storage[0];
};

MinHeap.prototype.poll = function () {
    [this.storage[0],this.storage[this.storage.length - 1]] = [this.storage[this.storage.length - 1], this.storage[0]];
    var min = this.storage.pop();
    this.heapifyDown();
    return min;
}

MinHeap.prototype.add = function (value) {
    this.storage.push(value);
    this.heapifyUp();
}

MinHeap.prototype.heapifyUp = function () {
    let childIndex = this.storage.length - 1;
    let parentIndex = this.getParentIndex(childIndex);
    while (this.hasParent(childIndex) && this.storage[childIndex] < this.storage[parentIndex]) {
        [this.storage[childIndex],this.storage[parentIndex]] = [this.storage[parentIndex], this.storage[childIndex]];
        childIndex = parentIndex;
        parentIndex = this.getParentIndex(parentIndex);
    }
};

MinHeap.prototype.heapifyDown = function () {
    currentIndex = 0;
    while (this.hasLeft(currentIndex)) {
        let rightIndex = this.getRightChildIndex(currentIndex);
        let leftIndex = this.getLeftChildIndex(currentIndex);
        if(this.storage[rightIndex]<this.storage)
            }
    }
    ;

    MinHeap.prototype.print = function () {
        console.log(this.storage);
    };

    let heap = new MinHeap();
    heap.add(2);
    heap.add(4);
    heap.add(0);
    heap.print()