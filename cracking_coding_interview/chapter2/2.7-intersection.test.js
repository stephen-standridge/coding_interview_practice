//Given two (singly) linked lists, determine if the two lists intersect.
//Return the intersecting node. Note that the intersection is defined based on reference, not value.
//That is, if the kth node of the first list is the exact same node (by reference) as the jth
//node of the second linked list, then they are intersecting.

import { Node } from "./linkedList";

test("it should return the intersecting node", () => {
    let testNode = new Node("I'm here!");
    testNode = testNode.appendToTail(3);
    testNode = testNode.appendToTail(4);
    // testNode.isCorrect = true;

    let list1 = new Node(0);
    list1 = list1.appendToTail(1);
    list1 = list1.appendToTail(2);
    list1 = list1.appendNodeToTail(testNode);


    let list2 = new Node(5);
    list2 = list2.appendToTail(6);
    list2 = list2.appendNodeToTail(testNode);


    let result = list1.findIntersection(list2);
    expect(result).toBe(testNode);
});

test("it should return false if none", () => {
    let testNode = new Node("I'm here!");
    testNode = testNode.appendToTail(3);
    testNode = testNode.appendToTail(4);
    // testNode.isCorrect = true;

    let list1 = new Node(0);
    list1 = list1.appendToTail(1);
    list1 = list1.appendToTail(2);
    list1 = list1.appendNodeToTail(testNode);


    let list2 = new Node(5);
    list2 = list2.appendToTail(6);
    list2 = list2.appendToTail("I'm here!");
    list2 = list2.appendToTail(3);
    list2 = list2.appendToTail(4);


    let result = list1.findIntersection(list2);
    expect(result).toEqual(false);
});