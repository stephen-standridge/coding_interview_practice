export class Node {
    next = null;
    data;

    constructor(d) {
        this.data = d;
    }

    appendToTail(d) {
        let end = new Node(d);
        let n = this;
        while (n.next !== null) {
            n = n.next;
        }
        n.next = end;
        return this;
    }

    deleteNode(d) {
        let head = this;
        if (head.data === d) {
            //return next node or null, test = test.delete(d) will be set to next node or null
            return head.next;
        }
        while (head.next !== null) {
            if (head.next.data === d) {
                head.next = head.next.next;
                return head;
            }
            head = head.next;
        }
        return head;
    }

    removeDuplicates() {
        //requires O(n^2) time
        let current = this;
        while (current.next !== null) {
            current.next.deleteNode(current.data);
            current = current.next;
        }
        return this;
    }

    removeDuplicatesLinear() {
        //linear time using a hash array
        let duplicates = {};
        let head = this;
        let prev = null;

        while (head !== null) {
            if (duplicates[head.data]) {
                prev.next = head.next
            } else {
                duplicates[head.data] = true;
            }
            prev = head;
            head = head.next;
        }
        return this;
    }

    returnKthToLast(num) {
        let queue = new Array(num + 1);
        let head = this;

        while (head !== null) {
            queue.unshift(head);
            if (queue.length > num + 1) {
                queue.pop();
            }
            head = head.next;
        }
        return queue[queue.length - 1];
    }

    returnKthToLastWithCounter(num) {
        let counter = num;
        let head = this;

        if (head.next === null) return { node: counter > 0 ? null : head, counter: counter > 0 ? counter - 1 : 0 }
        let result = head.next.returnKthToLastWithCounter(counter);


        if (result.counter === 0) return { node: result.node || head, counter: result.counter }
        if (result.node === null) return { node: null, counter: result.counter - 1 };

    }
}