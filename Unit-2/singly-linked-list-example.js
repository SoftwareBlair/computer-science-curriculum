function Node(data) {
  this.data = data;
  this.next = null;
}

var what = new Node('huh');
var que = new Node('???');
var sayAgain = new Node('Say What?');

function SinglyLinkedList(head) {
  this.head = head;
  this.tail = head;
  this.length = 1;
}

SinglyLinkedList.prototype.add = function(node) {
  // Change the tail to be the new node
  var temp = this.head;

  while (temp.next) {
    temp = temp.next;
  }
  temp.next = node;
  // Increase the length by one
  this.length++;
}

SinglyLinkedList.prototype.removeLast = function() {
  // Get to the last node of the list and remove it
  // Reduce the length by one
  // Change the tail to proper node
}

SinglyLinkedList.prototype._getAtIndex = function(index) {
  // Pass in a number and return that node
}

var singleList = new SinglyLinkedList(what);

singleList.add(que);
singleList.add(sayAgain);

console.log(singleList.head.data);
console.log(singleList.head.next.data);
console.log(singleList.head.next.next.data);
