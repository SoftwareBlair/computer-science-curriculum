/*

  A tree can be represented by a single root node that has child nodes,
  which in turn have child nodes etc...

       A
      /\
    B   C
   /\
  D E

  You can represent trees with just arrays in various different ways.
  One way looks like this:

  [
    'a',
    [
      [
        'b',
        [
          [
           'd',
           []
         ],
          [
           'e',
           []
          ]
        ]
      ],
      [
        'c',
        []
      ]
    ]
  ]

  Your job is to turn an array with the format above into a tree of nodes.

  Imlement this depth-first, using recursion.

*/

const Node = require('./node');
//Start on the above file- you'll want to use the class from that file!
//It has properties already set up for you, such as 'name' and 'children'.
//It also has a method, addChild(), which is essential.


//Make sure that this function calls new Node()
const arrayToNode = (input) => {
  let newNode = new Node(input[0]);
  input[1].map(data => newNode.addChild(arrayToNode(data)));
  return newNode;
};

module.exports = arrayToNode;
