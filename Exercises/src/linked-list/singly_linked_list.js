'use strict'

function Node(val, next=null) {
  this.val = val;
  this.next = next;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// Get node at index
SinglyLinkedList.prototype.__getNodeAt = function(index) {
  // if arg is out of bounds, return undefined
  if (index >= this.length || index < 0) { return undefined; }

  // set current node
  let current = this.head;
  // loop .next until we reach the passed index
  for (let i = 0; i < index; i++) {
    current = current.next;
  }

  return current;
};

SinglyLinkedList.prototype.push = function(val) {
  let newNode = new Node(val);
  if (this.length === 0) {
    this.head = newNode;
  }
  else {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  ++this.length;
  return this;
};

SinglyLinkedList.prototype.clear = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

SinglyLinkedList.prototype.pop = function() {
  let result;
  // check if its empty
  if (!this.head) return undefined;
  // deal with SLL of length 1
  if (this.length === 1) {
    result = this.head.val;
    this.clear();
  }
  else {
    // assign val of tail node to result
    result = this.tail.val;
    // get the currently 2nd to last node
    let newTail = this.__getNodeAt(this.length - 2);
    // reset its .next to null bc it will now be a tail
    newTail.next = null;
    // reset this.tail
    this.tail = newTail;
    // decrement length
    --this.length;
  }
  return result;
};

SinglyLinkedList.prototype.unshift = function(val) {
  let newNode = new Node(val, this.head);
  if (this.length === 0) {
    this.tail = newNode;
    this.head = newNode;
  }
  else {
    this.head = newNode;
  }
  ++this.length;
  return this;
};

SinglyLinkedList.prototype.shift = function() {
  
  --this.length;
};

SinglyLinkedList.prototype.get = function(index) {
};

SinglyLinkedList.prototype.set = function(index, val) {
};

SinglyLinkedList.prototype.remove = function(index) {
};

SinglyLinkedList.prototype.reverse = function () {
};

module.exports = SinglyLinkedList;
