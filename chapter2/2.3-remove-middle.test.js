//given only access to a node, delete just that node from a linked list
//implement an algorithm to find the kth to last element of a singly linked list
import { Node } from './linkedList';

test("it correctly removes an item at the start", () => {
    let testCase;
    let case1List = new Node("a");
    testCase = case1List;
    case1List = case1List.appendToTail("b");
    case1List = case1List.appendToTail("c");
    case1List = case1List.appendToTail("d");
    case1List = case1List.appendToTail("e");
    case1List = case1List.appendToTail("a");
    case1List = case1List.appendToTail("f");

    testCase = testCase.removeMiddleNode();
    expect(testCase.data).toEqual("b");
    expect(testCase.next.data).toEqual("c");
});

test("it correctly removes an item in the middle", () => {
    let testCase;
    let case2List = new Node("a");
    case2List = case2List.appendToTail("b");
    case2List = case2List.appendToTail("c");
    case2List = case2List.appendToTail("d");
    testCase = case2List.next.next.next;
    case2List = case2List.appendToTail("e");
    case2List = case2List.appendToTail("a");
    case2List = case2List.appendToTail("f");

    testCase = testCase.removeMiddleNode();
    expect(testCase.data).toEqual("e");
    expect(testCase.next.data).toEqual("a");
});

test("it correctly removes an item at the end", () => {
    let testCase;
    let case1List = new Node("a");
    case1List = case1List.appendToTail("b");
    case1List = case1List.appendToTail("c");
    case1List = case1List.appendToTail("d");
    case1List = case1List.appendToTail("e");
    case1List = case1List.appendToTail("a");
    case1List = case1List.appendToTail("f");
    testCase = case1List.next.next.next.next.next.next;
    testCase = testCase.removeMiddleNode();
    expect(testCase.data).toEqual(null);
    expect(testCase.next).toEqual(null);
});
