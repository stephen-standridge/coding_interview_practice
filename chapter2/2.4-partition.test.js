//write code to partition a linked list around a value "x", 
// such that all nodes less than "x" come before all nodes greater than or equal to "x".
// (IMPORTANT: the partition element "x" can appear anywhere in the "right partition"; 
//  it does not need to appear between the left and right partitions. 
//  The additional spacing in the example below indicates the partition. 
//  Yes, the output below is one of many valid outputs)
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 
// Partition: 5
// Output: 3 -> 1 -> 2    ->    10 -> 5 -> 5 -> 8
import { Node } from './linkedList';

test("it correctly partitions and returns both partitions", () => {
    let case2List = new Node(3);
    case2List = case2List.appendToTail(5);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(5);
    case2List = case2List.appendToTail(10);
    case2List = case2List.appendToTail(2);
    case2List = case2List.appendToTail(1);

    const { left, right } = case2List.partition(5);
    expect(left.data).toEqual(3);
    expect(left.next.data).toEqual(2);
    expect(left.next.next.data).toEqual(1);
    expect(left.next.next.next).toEqual(null);

    expect(right.data).toEqual(5);
    expect(right.next.data).toEqual(8);
    expect(right.next.next.data).toEqual(5);
    expect(right.next.next.next.data).toEqual(10);
    expect(right.next.next.next.next).toEqual(null);

});