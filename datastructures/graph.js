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