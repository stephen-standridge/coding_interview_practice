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

    appendNodeToTail(end) {
        let n = this;
        while (n.next !== null) {
            n = n.next;
        }
        n.next = end;
        return this;
    }

    appendToHead(d) {
        let start = new Node(d);
        start.next = this;
        return start;
    }

    appendNodeToHead(start) {
        start.next = this;
        return start;
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

    removeMiddleNode() {
        let head = this;
        if (head.next === null) head.data = null;
        while (head.next !== null) {
            head.data = head.next.data;
            head = head.next;
        }
        return this;
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

    partition(num) {
        let left = new Node(null);
        let right = new Node(null);
        let head = this;

        while (head !== null) {
            if (head.data < num) {
                if (left.data == null) left.data = head.data;
                else left.appendToTail(head.data);
            } else {
                if (right.data == null) right.data = head.data;
                else right.appendToTail(head.data);
            }
            head = head.next;
        }

        return { left, right }
    }

    toNumber(direction = "forward") {
        let returned = "";
        let head = this;
        while (head !== null) {
            if (direction === "forward") returned = head.data + returned;
            else returned = returned + head.data;
            head = head.next;
        }
        return Number(returned);
    }

    sum(other, direction = "forward") {
        let num1 = this.toNumber(direction);
        let num2 = other.toNumber(direction);
        let num3 = String(num1 + num2);
        let returned = new Node(null);
        for (let i = 0; i < num3.length; i++) {
            let iterator = direction === "forward" ? num3.length - 1 - i : i;
            if (returned.data === null) returned.data = num3[iterator];
            else returned.appendToTail(num3[iterator]);
        }
        return { node: returned, number: Number(num3) };
    }

    sumWithCarry(other, direction = "forward") {
        let head = this;
        let head2 = other;
        let sum = "0";
        let returned = new Node(null);
        let returnedHead = returned;
        let digit;
        while (head !== null) {
            sum = String(Number(head.data) + Number(head2.data) + Number(sum));
            digit = sum.slice(sum.length - 1);
            sum = sum.slice(0, sum.length - 1);

            if (returnedHead.data === null) returnedHead.data = digit;
            else {
                returnedHead.appendToTail(digit);
                if (direction === "backward" && sum.length > 0) returnedHead.data = String(Number(returnedHead.data) + Number(sum));
                returnedHead = returnedHead.next;
            }

            head = head.next;
            head2 = head2.next;
        }

        return { node: returned, number: returned.toNumber(direction) };
    }


    addList(l1, l2, carry, direction) {
        if (l1 === null && l2 === null && carry == 0) {
            return null;
        }

        let result = new Node(null);
        let newNode = null;
        let sum = String(Number(l1.data) + Number(l2.data) + Number(carry));
        if (sum.length > 1) {
            carry = sum[0];
            result.data = Number(sum[1]);
        } else {
            carry = 0;
            result.data = Number(sum);
        }

        if (l1.next !== null) {
            let addedTo = result.addList(l1.next, l2.next, direction === "forward" ? carry : 0, direction);
            newNode = addedTo.node;
            carry = addedTo.carry;
            if (direction === "backward") {
                result.data = Number(result.data) + Number(carry);
                carry = 0;
            }
            result.next = newNode;
        }
        return { node: result, carry };
    }

    zeroPad(first, second, direction = "forward") {
        let head = first;
        let head2 = second;
        let diff = 0;
        while (head !== null || head2 !== null) {
            if (head === null && head2 !== null) {
                diff += 1;
            }
            if (head !== null && head2 === null) {
                diff -= 1;
            }
            if (head !== null) head = head.next;
            if (head2 !== null) head2 = head2.next;
        }

        while (diff > 0) {
            if (direction == "forward") first = first.appendTofirst(0);
            else first = first.appendToTail(0);
            diff -= 1;
        }
        while (diff < 0) {
            if (direction == "forward") second = second.appendToHead(0);
            else second = second.appendToTail(0);
            diff += 1;
        }
        return { l1: first, l2: second };
    }

    sumWithCarryRecursive(other, direction = "forward") {
        const { l1, l2 } = this.zeroPad(this, other, direction);
        return this.addList(l1, l2, 0, direction);
    }

    isPalindrome() {
        let stack = [];
        let isUneven = false;
        let fast = this;
        let slow = this;
        //iterate over first half of list
        while (fast !== null && fast.next !== null) {
            stack.push(slow.data);
            fast = fast.next;
            fast = fast.next;
            if (fast !== null && fast.next === null) isUneven = true;
            slow = slow.next;
        }
        if (isUneven) slow = slow.next;
        //check that against second half of list
        while (slow !== null) {
            if (slow.data !== stack.pop()) return false;
            slow = slow.next;
        }
        return true;
    }

    lengthOfList() {
        let head = this;
        let count = 0;
        while (head !== null) {
            count += 1;
            head = head.next;
        }
        return count;
    }

    isPalindromeRecursive(head, length) {
        if (head == null || length <= 0) {
            return { node: head, isPalindrome: true };
        }
        if (length == 1) {
            return { node: head.next, isPalindrome: true };
        }

        let result = this.isPalindromeRecursive(head.next, length - 2);
        if (!result.isPalindrome || result.node === null) {
            return { node: null, isPalindrome: false };
        }
        result.isPalindrome = (head.data == result.node.data);
        result.node = result.node.next;

        return result;
    }

    findIntersection(list) {
        let head = this;
        let head2 = list;
        let len1 = 0;
        let len2 = 0;

        //lists could be different lengths; get those lengths
        while (head.next !== null || head2.next !== null) {
            if (head.next !== null) {
                len1 += 1;
                head = head.next;
            }
            if (head2.next !== null) {
                len2 += 1;
                head2 = head2.next;
            }
        }

        //intersection should result in last nodes being identical
        if (head !== head2) return false;

        //shorten lists to be same length
        head = this;
        head2 = list;
        while (len1 > len2) {
            head = head.next;
            len1 -= 1;
        }
        while (len2 > len1) {
            head2 = head2.next;
            len2 -= 1;
        }

        //shorten lists to be same length
        while (head.next !== null) {
            if (head == head2) return head;
            head = head.next;
            head2 = head2.next;
        }
        return false;
    }

    detectLoop() {
        let visited = {};
        let head = this;
        while (head.next !== null) {
            if (visited[head.data]) return head;
            visited[head.data] = true;
            head = head.next;
        }
        return false;
    }
}