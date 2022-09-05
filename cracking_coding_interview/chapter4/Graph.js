class Graph {
    _current = null;
    root = null;
    nodes = [];

    constructor(name, data) {
        if (name && data !== undefined) {
            this.append(name, data);
        }
    }

    get current() { return this._current || this.root };
    set current(val) {
        this._current = val
    }

    depthTraversal(root, callback) {
        this.current = root;
        if (root === null) return;
        callback(root);
        root.visited = true;
        root.children.forEach((node) => {
            if (node.visited) return;
            this.current = node;
            this.depthTraversal(node, callback);
        });
    }

    breadthTraversal(root, callback) {
        if (root === null) return;
        let queue = [root];
        while (queue.length > 0) {
            let current = queue.shift();

            this.current = current;
            current.visited = true;
            callback(current);
            for (let i = 0; i < current.children.length; i++) {
                let node = current.children[i];
                if (!node.visited) {
                    node.visited = true;
                    queue.push(node);
                }
            }
        }
    }

    pathExists(node1, node2, callback) {
        if (node1 === null || node2 === null) return;
        let queue1 = [node1], queue2 = [node2];
        while (queue1.length > 0 && queue2.length > 0) {
            if (queue1.length > 0) {
                let current1 = queue1.shift();
                if (current1 === node2 || queue2.includes(current1)) return true;
                current1.children.forEach((node) => {
                    if (!node.visited) {
                        node.visited = true;
                        queue1.push(node)
                    }
                });
            }
            if (queue2.length > 0) {
                let current2 = queue2.shift();
                if (current2 === node1 || queue1.includes(current2)) return true;
                current2.children.forEach((node) => {
                    if (!node.visited) {
                        node.visited = true;
                        queue2.push(node)
                    }
                });
            }
        }
        return false;
    }

    append(name, data) {
        let toAppend = new Node(name, data);
        this.nodes.push(toAppend);
        if (this.current === null) {
            this.root = toAppend;
            return toAppend;
        }
        this.current.children.push(toAppend);
        return toAppend;
    }

    appendNode(toAppend) {
        if (this.current === null) {
            this.root = toAppend;
            return toAppend;
        }
        this.current.children.push(toAppend);
        return toAppend;
    }
}

class Node {
    visited = false;
    name = "";
    data = "";
    graph = null;
    children = [];
    constructor(name, data) {
        this.name = name;
        this.data = data;
    }
}

export { Graph, Node }