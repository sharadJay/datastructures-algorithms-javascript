function Stack () {
	this.storage = {}
  this.count = 0
}

Stack.prototype.pop = function() {
	if (this.size() > 0) {
		var valueToBeDeleted = this.storage[--this.count];
		debugger;
		delete this.storage[this.count];
		console.log(`popped the ${valueToBeDeleted}`);
		return valueToBeDeleted;
	} else {
		console.log("There are currently no items in stack");
	}
}

Stack.prototype.push = function(value) {
	this.storage[this.count++] = value;
}

Stack.prototype.size = function () {
  return this.count;
}

Stack.prototype.peek = function () {
	return this.storage[this.count-1];
}

module.exports = Stack;
