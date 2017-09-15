function Graph() {
    this._node = {};
}

Graph.prototype.addNode = function (value) {
    this._node[value] = this._node[value] || [];
}

Graph.prototype.addEdge = function (v1, v2) {
    if (!this._node[v1] || !this._node[v2]) {
        return "Invalid entry, nodes do not exist";
    }
    this._node[v1].push(v2);
    this._node[v2].push(v1);
}

Graph.prototype.depthFirstSearch = function (value, fn, visited = {}, distance = 0) {
    if (!this._node[value] || typeof fn !== 'function') {
        return "invalid value or function";
    }
    fn(value,distance);
    visited[value] = true;
    this._node[value].forEach(function(neighbour){
        if(visited[neighbour]) return;
        this.depthFirstSearch(neighbour,fn,visited,distance+1);
    },this)
}

var myGraph = new Graph();
myGraph.addNode(1);
myGraph.addNode(2);
myGraph.addNode(3);
myGraph.addNode(4);
myGraph.addNode(5);
myGraph.addNode(6);
myGraph.addEdge(1,2);
myGraph.addEdge(1,3);
myGraph.addEdge(2,4);
myGraph.addEdge(4,5);
myGraph.addEdge(5,6);

myGraph.depthFirstSearch(1,(value,distance) => console.log(value,distance));
