class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value, null, null);
      return this;
    } else {
      let cur = this.root;
      while (true) {
        if (value > cur.value) {
          if (cur.right === null) {
            cur.right = new Node(value, null, null);
            return this;
          } else {
            cur = cur.right;
          }
        } else {
          if (cur.left === null) {
            cur.left = new Node(value, null, null);
            return this;
          } else {
            cur = cur.left;
          }
        }
      }
    }
  }
  print(order) {
    if (this.root !== null) {
      if (order === 'inorder') {
        this.print_inorder(this.root);
        return;
      }
      if (order === 'postorder') {
        this.print_postorder(this.root);
        return;
      }
      if (order === 'preorder') {
        this.print_preorder(this.root);
        return;
      }
    }
  }

  // DFS Traversals
  print_inorder(cur) {
    if (cur !== null) {
      this.print_inorder(cur.left);
      console.log(cur.value);
      this.print_inorder(cur.right);
    }
  }
  print_postorder(cur) {
    if (cur !== null) {
      this.print_postorder(cur.left);
      this.print_postorder(cur.right);
      console.log(cur.value);
    }
  }
  print_preorder(cur) {
    if (cur !== null) {
      console.log(cur.value);
      this.print_preorder(cur.left);
      this.print_preorder(cur.right);
    }
  }
  lookup(value) {
    let cur = this.root;
    while (true) {
      if (cur.value === value) {
        return true;
      } else {
        if (value < cur.value) {
          if (cur.left === null) {
            return false;
          } else {
            cur = cur.left;
          }
        } else {
          if (cur.right === null) {
            return false;
          } else {
            cur = cur.right;
          }
        }
      }
    }
  }
  // remove is much more difficult then lookup and insert
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};

if (require.main === module) {
  t = new BST();
  t.insert(2);
  t.insert(1);
  t.insert(3);
  t.insert(5);
  t.insert(6);

  console.log('PREORDER\n');
  t.print('preorder');

  console.log('\nINORDER\n');
  t.print('inorder');

  console.log('\nPOSTORDER\n');
  t.print('postorder');

  console.log('\n', 'BST : ', JSON.stringify(traverse(t.root)));

  const myNumber = 3;
  const msg = t.lookup(myNumber)
    ? `${myNumber} is in BST`
    : `${myNumber} is not in BST`;
  console.log('\n', msg);
}

exports.BST = BST;
exports.traverse = traverse;
exports.Node = Node;
