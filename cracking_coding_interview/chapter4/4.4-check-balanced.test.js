
import { BinarySearchTreeNode } from 'Tree';

describe('check balanced', () => {
    it('should tell if the tree is balanced', () => {
        let testArray = [0, 1, 2, 3, 4, 5, 6];
        let tree = new BinarySearchTreeNode().fromArray(testArray);
        expect(tree.checkBalanced()).toEqual(true)
    });
    it('should not return true if it is not balanced', () => {
        let testArray = [0, 1, 2, 3, 4, 5, 6];
        let tree = new BinarySearchTreeNode().fromArray(testArray);
        tree = tree.left.left.append(-1);
        tree.left.left.left.append(-2);
        expect(tree.checkBalanced).toEqual(false);
    })
})