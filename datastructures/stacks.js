function Stack () {
	this.stackString = ""
}

Stack.prototype.pop = function() {
	if (this.size() > 0) {
		var positionOfDelimiter = this.stackString.lastIndexOf(",");
		this.stackString = this.stackString.slice(0,positionOfDelimiter);
		console.log('popped the value');
		console.log(`current stack: ${this.stackString}`);
	} else {
		console.log("There are currently no items in stack");
	}
}

Stack.prototype.push = function(value) {
	this.stackString = this.stackString.concat(`,${value}`);
	console.log(`pushed ${value}`);
	console.log(`current stack: ${this.stackString}`)
}

Stack.prototype.size = function () {
		var occurences =  this.stackString.match(/,/g);
		return occurences ? occurences.length : 0;
}

module.exports = Stack;
