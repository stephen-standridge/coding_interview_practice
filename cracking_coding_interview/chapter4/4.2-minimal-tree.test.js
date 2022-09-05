//given a sorted (increasing order) array with unique integer elements, 
//write an algorithm to create a binary search tree with minimal height.
import { BinarySearchTreeNode } from "./Tree";

describe("from array", () => {
    it("should create a balanced tree from a sorted array", () => {
        let testArray = [0, 1, 2, 3, 4, 5, 6];
        let tree = new BinarySearchTreeNode().fromArray(testArray);
        tree.fromArray(testArray);
        expect(tree.data).toEqual(3);
        expect(tree.left.data).toEqual(1)
        expect(tree.left.left.data).toEqual(0)
        expect(tree.left.right.data).toEqual(2)
    })
})