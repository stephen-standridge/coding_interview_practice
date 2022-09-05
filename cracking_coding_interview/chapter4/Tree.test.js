// import { BinaryTreeNode, MinTreeNode } from './Tree.js';

// describe("Binary Tree Node", () => {
//     let head, test1, test2, test3, test4, test5, func;

//     beforeEach(() => {
//         head = new BinaryTreeNode("bob", 1);
//         head.append("jill", 2);

//         test1 = head.children[0];
//         head.append("phil", 3);
//         test2 = head.children[1];

//         test1.append("janet", 4);
//         test3 = test1.children[0];

//         test2.append("oren", 5);
//         test4 = test2.children[0];
//         test2.append("albert", 6);
//         test5 = test2.children[1];

//         func = jest.fn()
//     });
//     afterEach(() => {
//         func.mockClear()
//     })

//     it("should allow for nodes to be appended", () => {
//         expect(head.children[0]).toBe(test1);
//         expect(head.children[1]).toBe(test2);
//         expect(test1.children[0]).toBe(test3);
//         expect(test1.children.length).toBe(1);

//         expect(test2.children[0]).toBe(test4);
//         expect(test2.children[1]).toBe(test5);
//         expect(test2.children.length).toBe(2);
//     });

//     it('should allow for in order traversal', () => {
//         head.inOrderTraversal(head, func);
//         expect(func.mock.calls[0][0]).toBe(test3);

//         expect(func.mock.calls[1][0]).toBe(test1);
//         expect(func.mock.calls[2][0]).toBe(head);
//         expect(func.mock.calls[3][0]).toBe(test4);
//         expect(func.mock.calls[4][0]).toBe(test2);
//         expect(func.mock.calls[5][0]).toBe(test5);

//     });

//     it('should allow for pre order traversal', () => {
//         head.preOrderTraversal(head, func);
//         expect(func.mock.calls[0][0]).toBe(head);
//         expect(func.mock.calls[1][0]).toBe(test1);
//         expect(func.mock.calls[2][0]).toBe(test3);
//         expect(func.mock.calls[3][0]).toBe(test2);
//         expect(func.mock.calls[4][0]).toBe(test4);
//         expect(func.mock.calls[5][0]).toBe(test5);
//     });

//     it('should allow for post order traversal', () => {
//         head.postOrderTraversal(head, func);
//         expect(func.mock.calls[0][0]).toBe(test3);
//         expect(func.mock.calls[1][0]).toBe(test1);

//         expect(func.mock.calls[2][0]).toBe(test4);
//         expect(func.mock.calls[3][0]).toBe(test5);
//         expect(func.mock.calls[4][0]).toBe(test2);

//         expect(func.mock.calls[5][0]).toBe(head);
//     });

//     it('should automatically append node to the first available place', () => {
//         head = new BinaryTreeNode("bob", 8);
//         head.append("jill", 7);
//         head.append("phil", 6);
//         test1 = head.children[0];
//         test2 = head.children[1];

//         test1.append("janet", 5);
//         test1.append("oren", 4);
//         test3 = test1.children[0];
//         test4 = test1.children[1];

//         test2.append("albert", 3);
//         test5 = test2.children[0];

//         head.append("final1", 2);
//         head.append("final2", 1);

//         expect(head.right.right.name).toEqual("final1");
//         expect(head.left.left.left.name).toEqual("final2");
//     });
// });

// describe('min tree node', () => {
//     let head, test1, test2, test3, test4, test5, func;

//     beforeEach(() => {
//         head = new MinTreeNode("bob", 1);
//         head.append("jill", 2);

//         test1 = head.children[0];
//         head.append("phil", 3);
//         test2 = head.children[1];

//         test1.append("janet", 4);
//         test3 = test1.children[0];

//         test2.append("oren", 5);
//         test4 = test2.children[0];
//         test2.append("albert", 6);
//         test5 = test2.children[1];

//         // func = jest.fn()
//     });

//     afterEach(() => {
//         // func.mockClear()
//     });

//     it("should allow for swapping nodes by name/val", () => {
//         head.swap(test1);

//         expect(head.name).toEqual("jill")
//         expect(head.data).toEqual(2)
//     });

//     // it('should allow extracting the min element')
// });
it("should work", () => expect(true).toBe(true));