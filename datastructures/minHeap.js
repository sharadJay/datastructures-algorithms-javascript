//minimum heap
// 1. Parent node is lower than the child nodes

function MinHeap() {
    this.storage = [];
}
//helper functions
MinHeap.prototype.getLeftChildIndex = function (parentIndex) {
    return 2 * parentIndex + 1;
}

MinHeap.prototype.getRightChildIndex = function (parentIndex) {
    return 2 * parentIndex + 2;
}

MinHeap.prototype.getParentIndex = function (childNode) {
    return Math.floor((childNode - 1) / 2);
}

MinHeap.prototype.hasLeftChild = function (parentIndex) {
    return this.getLeftChildIndex(parentIndex) <= this.storage.length;
}

MinHeap.prototype.hasRightChild = function (parentIndex) {
    return this.getRightChildIndex(parentIndex) <= this.storage.length;
}

MinHeap.prototype.hasParent = function (childIndex) {
    return this.getParentIndex(childIndex) >= 0;
}

// peek minimum element
MinHeap.prototype.peekMin = function () {
    return this.storage.length>=0 ? this.storage[0] : "Heap is empty";
}

MinHeap.prototype.extractMin = function () {
    switch (this.storage.length) {
        case 0:
            return "Heap is empty";
        case 1:
            return this.storage.unshift();
        default:
            [this.storage[0],this.storage[this.storage.length - 1]] = [this.storage[this.storage.length - 1], this.storage[0]];
            const minimumElement = this.storage.pop();
            this.heapifyDown(0);
            return minimumElement
    }
}

MinHeap.prototype.heapifyDown = function (startIndex) {
    if (this.hasLeftChild(startIndex)) {
        let minOfChildren = this.getLeftChildIndex(startIndex);
        if (this.hasRightChild(startIndex) && this.storage[this.getRightChildIndex(startIndex)] < this.storage[minOfChildren]) {
            minOfChildren = this.getRightChildIndex(startIndex);
        }
        if (this.storage[startIndex] > this.storage[minOfChildren]) {
            [this.storage[startIndex],this.storage[minOfChildren]] = [this.storage[minOfChildren], this.storage[startIndex]];
            this.heapifyDown(minOfChildren);
        }
    }
}

MinHeap.prototype.heapifyUp = function (startIndex) {
    if (this.hasParent(startIndex)) {
        let parentNode = this.getParentIndex(startIndex);
        if (this.storage[parentNode] > this.storage[startIndex]) {
            [this.storage[parentNode],this.storage[startIndex]]=[this.storage[startIndex], this.storage[parentNode]];
            this.heapifyUp(parentNode);
        }
    }
}

MinHeap.prototype.add = function (element) {
    this.storage.push(element);
    this.heapifyUp(this.storage.length - 1);
}


let heap = new MinHeap();
heap.add(2);
heap.add(3);
heap.add(0);
heap.add(-2);
heap.extractMin();
heap.extractMin();
console.log(heap.peekMin());