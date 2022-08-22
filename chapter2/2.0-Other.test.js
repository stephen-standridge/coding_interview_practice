import { Node } from './linkedList';

test("it should append items to the head", () => {
    let testCase = new Node(0);
    testCase = testCase.appendToTail(1);
    testCase = testCase.appendToHead(1);
    expect(testCase.data).toEqual(1);
    expect(testCase.next.data).toEqual(0);
    expect(testCase.next.next.data).toEqual(1);
});
