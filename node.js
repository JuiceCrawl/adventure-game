var Connection = require('./connection');

var Node = function(title, text) {
  this.title = title;
  this.text = text;
  this.connections = [];
  this.conditions = {};
};

Node.prototype.connect = function(node, action){
    var newNode = new Connection(node, 
      action)

    // console.log("newNode ",newNode)
    this.connections.push(newNode)
    var index = this.connections.indexOf(newNode);
    if (!this.conditions[action]){
    this.conditions[action] = this.connections[index];
    } else {
      throw new Error();
    }
  }

module.exports = Node;
