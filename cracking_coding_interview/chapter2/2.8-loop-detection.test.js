//given a linked list, which might contain a loop,
// implement an algorithm that returns the node at the beginning of the loop (if one exists)

import { Node } from './linkedList';

test("it should return the node at the beginning of the loop", () => {
    let whole = new Node(0);
    whole = whole.appendToTail(1);
    whole = whole.appendToTail(2);
    whole = whole.appendToTail(3);

    let loop = new Node(4);
    loop = loop.appendToTail(5);
    loop = loop.appendToTail(6);
    loop = loop.appendToTail(7);
    loop = loop.appendNodeToTail(loop);

    whole = whole.appendNodeToTail(loop);

    let result = whole.detectLoop();
    expect(result).toBe(loop);
});

it('should return false if nothing', () => {
    let whole = new Node(0);
    whole = whole.appendToTail(1);
    whole = whole.appendToTail(2);
    whole = whole.appendToTail(3);
    let result = whole.detectLoop();
    expect(result).toEqual(false);
});