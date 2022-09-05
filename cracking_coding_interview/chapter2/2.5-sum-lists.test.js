// You have two numbers represented by a linked list, 
// where each node contains a single digit. 
// The digits are stored in reverse order, such that the 1's digit is at the head of the list. 
// Write a function that adds the two numbers and returns the sum as a linked list. 
// (You are not allowed to "cheat" and just convert the linked list to an integer)
import { Node } from "./linkedList";

test("toNumber correctly works forward", () => {
    let case2List = new Node(3);
    case2List = case2List.appendToTail(5);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(5);
    case2List = case2List.appendToTail(9);
    case2List = case2List.appendToTail(2);
    case2List = case2List.appendToTail(1);

    const returned = case2List.toNumber();
    expect(returned).toEqual(1295853)
});

test("toNumber correctly works backward", () => {
    let case2List = new Node(3);
    case2List = case2List.appendToTail(5);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(5);
    case2List = case2List.appendToTail(9);
    case2List = case2List.appendToTail(2);
    case2List = case2List.appendToTail(1);
    const returned = case2List.toNumber('backward');
    expect(returned).toEqual(3585921)
});

test("sum correctly works forward", () => {
    let case2List = new Node(3);
    case2List = case2List.appendToTail(5);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(5);

    let case3List = new Node(9)
    case3List = case3List.appendToTail(2);
    case3List = case3List.appendToTail(1);
    case3List = case3List.appendToTail(3);

    const returned = case2List.sum(case3List);
    expect(returned.number).toEqual(8982)
    expect(returned.node.data).toEqual("2")
    expect(returned.node.next.data).toEqual("8")
    expect(returned.node.next.next.data).toEqual("9")
    expect(returned.node.next.next.next.data).toEqual("8")

});

test("sum correctly works backwards", () => {
    let case2List = new Node(5);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(5);
    case2List = case2List.appendToTail(3);

    let case3List = new Node(3)
    case3List = case3List.appendToTail(1);
    case3List = case3List.appendToTail(2);
    case3List = case3List.appendToTail(9);

    const returned = case2List.sum(case3List, "backward");
    expect(returned.number).toEqual(8982)
    expect(returned.node.data).toEqual("8")
    expect(returned.node.next.data).toEqual("9")
    expect(returned.node.next.next.data).toEqual("8")
    expect(returned.node.next.next.next.data).toEqual("2")

});

test("sumWithCarry correctly works forward", () => {
    let case2List = new Node(3);
    case2List = case2List.appendToTail(5);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(5);

    let case3List = new Node(9)
    case3List = case3List.appendToTail(2);
    case3List = case3List.appendToTail(1);
    case3List = case3List.appendToTail(3);

    const returned = case2List.sumWithCarry(case3List);
    expect(returned.number).toEqual(8982)
    expect(returned.node.data).toEqual("2")
    expect(returned.node.next.data).toEqual("8")
    expect(returned.node.next.next.data).toEqual("9")
    expect(returned.node.next.next.next.data).toEqual("8")

});

test("sumWithCarry correctly works backwards", () => {
    let case2List = new Node(5);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(5);
    case2List = case2List.appendToTail(3);

    let case3List = new Node(3)
    case3List = case3List.appendToTail(1);
    case3List = case3List.appendToTail(2);
    case3List = case3List.appendToTail(9);

    const returned = case2List.sumWithCarry(case3List, "backward");
    expect(returned.number).toEqual(8982)
    expect(returned.node.data).toEqual("8")
    expect(returned.node.next.data).toEqual("9")
    expect(returned.node.next.next.data).toEqual("8")
    expect(returned.node.next.next.next.data).toEqual("2")

});

test("zeroPad correctly works zeroPads forward", () => {
    let case2List = new Node(3);
    case2List = case2List.appendToTail(5);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(5);

    let case3List = new Node(9)
    case3List = case3List.appendToTail(2);
    case3List = case3List.appendToTail(1);

    const { l1, l2 } = case2List.zeroPad(case2List, case3List);
    expect(l2.data).toEqual(0)
    expect(l2.next.data).toEqual(9)
    expect(l2.next.next.data).toEqual(2)
    expect(l2.next.next.next.data).toEqual(1)

    expect(l1.data).toEqual(3)
    expect(l1.next.data).toEqual(5)
    expect(l1.next.next.data).toEqual(8)
    expect(l1.next.next.next.data).toEqual(5)

});

test("zeroPad doesnt mutate original", () => {
    let case2List = new Node(3);
    case2List = case2List.appendToTail(5);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(5);

    let case3List = new Node(9)
    case3List = case3List.appendToTail(2);
    case3List = case3List.appendToTail(1);

    const { l1, l2 } = case2List.zeroPad(case2List, case3List);
    expect(case3List.data).toEqual(9)
    expect(case3List.next.data).toEqual(2)
    expect(case3List.next.next.data).toEqual(1)
});

test("zeroPad correctly works zeroPads backward", () => {
    let case2List = new Node(3);
    case2List = case2List.appendToTail(5);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(5);

    let case3List = new Node(9)
    case3List = case3List.appendToTail(2);
    case3List = case3List.appendToTail(1);

    const { l1, l2 } = case2List.zeroPad(case2List, case3List, "backward");
    expect(l2.data).toEqual(9)
    expect(l2.next.data).toEqual(2)
    expect(l2.next.next.data).toEqual(1)
    expect(l2.next.next.next.data).toEqual(0)

    expect(l1.data).toEqual(3)
    expect(l1.next.data).toEqual(5)
    expect(l1.next.next.data).toEqual(8)
    expect(l1.next.next.next.data).toEqual(5)

});

test("sumWithCarryRecursive correctly works forwards", () => {
    let case2List = new Node(3);
    case2List = case2List.appendToTail(5);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(5);

    let case3List = new Node(9)
    case3List = case3List.appendToTail(2);
    case3List = case3List.appendToTail(1);
    case3List = case3List.appendToTail(3);

    const result = case2List.sumWithCarryRecursive(case3List);
    const returned = result.node;
    expect(returned.toNumber()).toEqual(8982)
    expect(returned.data).toEqual(2)
    expect(returned.next.data).toEqual(8)
    expect(returned.next.next.data).toEqual(9)
    expect(returned.next.next.next.data).toEqual(8)

});

test("sumWithCarryRecursive correctly works backwards", () => {
    let case2List = new Node(5);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(5);
    case2List = case2List.appendToTail(3);

    let case3List = new Node(3)
    case3List = case3List.appendToTail(1);
    case3List = case3List.appendToTail(2);
    case3List = case3List.appendToTail(9);

    const result = case2List.sumWithCarryRecursive(case3List, "backward");
    const returned = result.node;
    expect(returned.toNumber("backward")).toEqual(8982)
    expect(returned.data).toEqual(8)
    expect(returned.next.data).toEqual(9)
    expect(returned.next.next.data).toEqual(8)
    expect(returned.next.next.next.data).toEqual(2)

});
