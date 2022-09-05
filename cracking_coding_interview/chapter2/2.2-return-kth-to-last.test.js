//implement an algorithm to find the kth to last element of a singly linked list
import { Node } from './linkedList';

test("it correctly returns the 2nd to last", () => {
    let case1List = new Node("a");
    case1List = case1List.appendToTail("b");
    case1List = case1List.appendToTail("c");
    case1List = case1List.appendToTail("d");
    case1List = case1List.appendToTail("e");
    case1List = case1List.appendToTail("a");
    case1List = case1List.appendToTail("f");

    let result = case1List.returnKthToLast(2);

    expect(result.data).toEqual("e");
    expect(result.next.data).toEqual("a");
});

test("it correctly returns the 0th to last", () => {
    let case2List = new Node("a");
    case2List = case2List.appendToTail("b");
    case2List = case2List.appendToTail("c");
    case2List = case2List.appendToTail("d");
    case2List = case2List.appendToTail("e");
    case2List = case2List.appendToTail("a");
    case2List = case2List.appendToTail("f");

    let result = case2List.returnKthToLast(0);
    expect(result.data).toEqual("f");
    expect(result.next).toEqual(null);
});

test("with counter, it correctly returns the 2nd to last", () => {
    let case1List = new Node("a");
    case1List = case1List.appendToTail("b");
    case1List = case1List.appendToTail("c");
    case1List = case1List.appendToTail("d");
    case1List = case1List.appendToTail("e");
    case1List = case1List.appendToTail("a");
    case1List = case1List.appendToTail("f");

    let result = case1List.returnKthToLastWithCounter(2);
    expect(result.node.data).toEqual("e");
    expect(result.node.next.data).toEqual("a");
});

test("with counter, it correctly returns the 0th to last", () => {
    let case2List = new Node("a");
    case2List = case2List.appendToTail("b");
    case2List = case2List.appendToTail("c");
    case2List = case2List.appendToTail("d");
    case2List = case2List.appendToTail("e");
    case2List = case2List.appendToTail("a");
    case2List = case2List.appendToTail("f");

    let result = case2List.returnKthToLastWithCounter(0);
    expect(result.node.data).toEqual("f");
    expect(result.node.next).toEqual(null);
});