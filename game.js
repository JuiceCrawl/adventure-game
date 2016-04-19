var Node = require('./node');

var Game = function() {
  this.nodes = {};
  this.startingPoint = null;
};

Game.prototype.addNode = function(title, text){
  if(!this.nodes[title]){
    this.nodes[title] = new Node(title, text);
    if(this.startingPoint === null){
      this.startingPoint = this.nodes[title];
    }
    return this.nodes[title];
  }else{
    throw new Error();
  }
  
}

Game.prototype.getNode = function(title){
  return this.nodes[title];
}

Game.prototype.connect = function(title1, title2, condition){
  if (!this.nodes[title1] || !this.nodes[title2]){
    throw new Error();
  }
  var node1 = this.nodes[title1];
  var node2 = this.nodes[title2];
  node1.connect(node2, condition);
  // var args = [].slice(arguments);

  // args.forEach(function(title){
  //   var node = this.nodes[title];
  //   node.connect(node, action);
  //})

}

module.exports = Game;
