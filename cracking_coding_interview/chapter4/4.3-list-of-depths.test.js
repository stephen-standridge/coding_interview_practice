import { BinarySearchTreeNode } from './Tree'

describe('list of depths', () => {
    it('should create a linked list of all nodes at each depth', () => {
        let testArray = [0, 1, 2, 3, 4, 5, 6];
        let tree = new BinarySearchTreeNode().fromArray(testArray);
        let returned = tree.getListOfDepths();
        expect(returned.length).toEqual(3);
        expect(returned[0].data).toEqual(3);
        expect(returned[0].next).toEqual(null);

        expect(returned[1].data).toEqual(1);
        expect(returned[1].next.data).toEqual(5);

        expect(returned[2].data).toEqual(0);
        expect(returned[2].next.data).toEqual(2);
        expect(returned[2].next.next.data).toEqual(4);
        expect(returned[2].next.next.next.data).toEqual(6);
    })
})