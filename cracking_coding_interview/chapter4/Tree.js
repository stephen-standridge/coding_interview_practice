
import { Node } from "../chapter2/linkedList";

export class BinaryTreeNode {
    data;
    name;
    children = [];
    parent = null;

    constructor(name, data) {
        this.name = name;
        this.data = data;
    }

    get left() { return this.children[0] || null; }
    set left(val) {
        this.children[0] = val;
        // val.parent = this;
    }
    get right() { return this.children[1] || null; }
    set right(val) {
        this.children[1] = val;
        // val.parent = this;
    }

    postOrderTraversal(node, callback) {
        if (node !== null) {
            this.postOrderTraversal(node.left, callback);
            this.postOrderTraversal(node.right, callback);
            callback(node)
        }
    }

    preOrderTraversal(node, callback) {
        if (node !== null) {
            callback(node)
            this.preOrderTraversal(node.left, callback);
            this.preOrderTraversal(node.right, callback);
        }
    }

    inOrderTraversal(node, callback) {
        if (node !== null) {
            this.inOrderTraversal(node.left, callback);
            callback(node)
            this.inOrderTraversal(node.right, callback);
        }
    }

    append(name, data) {
        let toAppend = new BinaryTreeNode(name, data);
        let queue = [], head;
        queue.push(this);

        ///must do a level-order traversal using a queue to ensure tree is balanced.
        while (queue.length > 0) {
            head = queue.shift();

            if (head.left !== null) {
                queue.push(head.left);
            } else {
                head.left = toAppend;
                return
            }

            if (head.right !== null) {
                queue.push(head.right);
            } else {
                head.right = toAppend;
                return;
            }
        }
    }

    listOfDepths(node, list, depth) {
        if (node !== null) {
            if (!list[depth]) list[depth] = new Node(node.data);
            else list[depth].appendToTail(node.data)
            this.listOfDepths(node.left, list, depth + 1);
            this.listOfDepths(node.right, list, depth + 1);
        }
        return list;
    }

    getListOfDepths() {
        let returned = [];
        return this.listOfDepths(this, returned, 0);
    }

    getSubtreeHeight(node) {
        let subHeights = 0;
        if (node !== null) {
            subHeights[0] = this.getSubtreeHeight(node.left);
            subHeights[1] = this.getSubtreeHeight(node.right);
            subHeights += 1 + Math.Max(subHeights[0], subHeights[1]);
        }
        return 0;
    }

    checkBalanced() {
        //should return true if height of subtrees do not differ by more than 1.
        let leftSubtreeHeight = 0;
        let rightSubtreeHeight = 0;
        let queue = [node];
        let head;
        while (queue.length) {
            head = queue.shift();
            if (head.left !== null) {
                queue.push(head.left);
                leftSubtreeHeight += 1;
            }
            if (head.right !== null) {
                queue.push(head.right);
                rightSubtreeHeight += 1;
            }
        }

    }
}

export class BinarySearchTreeNode extends BinaryTreeNode {
    constructor(name, data) {
        super(name, data);
    }
    swap(child) {
        let { name, data } = this;
        this.name = child.name;
        this.data = child.data;
        child.name = name;
        child.data = data;
    }

    fromArray(sortedArray) {
        return this.createMinimalBST(sortedArray, 0, sortedArray.length - 1);
    }

    createMinimalBST(array, start, end) {
        if (end < start) {
            return null;
        }
        let middleIndex = Math.floor((start + end) / 2);
        let n = new BinarySearchTreeNode(null, array[middleIndex]);
        n.left = n.createMinimalBST(array, start, middleIndex - 1);
        n.right = n.createMinimalBST(array, middleIndex + 1, end);
        return n;
    }

    append(name, data) {
        let appended = new BinarySearchTreeNode(name, data);
        let head = this;
        while (head !== null) {
            if (data < head.data) {
                if (head.left === null) {
                    head.left = appended;
                    return appended;
                }
                head = head.left;
            } else {
                if (head.right === null) {
                    head.right = appended;
                    return appended;
                }
                head = head.right;
            }
        }

        // let parent = head.parent;
        // while (parent && (parent.data < head.data)) {
        //     parent.swap(head);
        //     parent = this.parent;
        //     head = this;
        // }

    }
}

export class MinTreeNode extends BinaryTreeNode {
    swap(child) {
        let { name, data } = this;
        this.name = child.name;
        this.data = child.data;
        child.name = name;
        child.data = data;
    }

    append(name, data) {
        let toAppend = new MinTreeNode(name, data);
        let queue = [], head;
        queue.push(this);
        while (queue.length > 0) {
            head = queue.shift();
            if (head.left !== null) {
                queue.push(head.left);
            } else {
                head.left = toAppend;
                head = toAppend;
                break;
            }
            if (head.right !== null) {
                queue.push(head.right);
            } else {
                head.right = toAppend;
                head = toAppend;
                break;
            }
        }
        let parent = head.parent;
        while (parent && (parent.data > head.data)) {
            parent.swap(head);
            parent = this.parent;
            head = this;
        }
    }
    // insert(name, data) {
    //     let inserted = new MinTreeNode(name, data);
    //     head = this;
    //     while (head !== null) {
    //         head = head.left;
    //         head = head.right;
    //     }
    // }
}

class MaxTreeNode extends BinaryTreeNode {
    append(name, data) {
        //should first set at end of the tree, 
        //swap with parent if greater than
    }
}