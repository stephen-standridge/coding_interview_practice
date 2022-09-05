//write code to remove duplicates from an unsorted linked list.
//follow up how would you solve this with no temporary buffer?
import { Node } from './linkedList';

test("it correctly removes duplicated nodes", () => {
    let case1List = new Node("a");
    case1List = case1List.appendToTail("b");
    case1List = case1List.appendToTail("c");
    case1List = case1List.appendToTail("d");
    case1List = case1List.appendToTail("e");
    case1List = case1List.appendToTail("a");
    case1List = case1List.appendToTail("f");

    case1List = case1List.removeDuplicatesLinear();

    expect(case1List.next.next.next.next.next.data).toEqual("f");
    expect(case1List.next.next.next.next.next.next).toEqual(null);
});

test("it correctly removes multiple duplicate nodes", () => {
    let case2List = new Node("a");
    case2List = case2List.appendToTail("b");
    case2List = case2List.appendToTail("c");
    case2List = case2List.appendToTail("d");
    case2List = case2List.appendToTail("b");
    case2List = case2List.appendToTail("e");
    case2List = case2List.appendToTail("a");
    case2List = case2List.appendToTail("f");

    case2List = case2List.removeDuplicatesLinear();

    expect(case2List.next.next.next.next.data).toEqual("e");
    expect(case2List.next.next.next.next.next.data).toEqual("f");
    expect(case2List.next.next.next.next.next.next).toEqual(null);
});