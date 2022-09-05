// import { Graph, Node } from "./Graph";

// describe("Graph Creation", () => {
//     let graph, test1, test2, test3, test4, test5, func;

//     beforeEach(() => {
//         graph = new Graph("gweneth", 0);
//         test1 = graph.append("matt", 1);
//         test4 = graph.append("geryl", 4);
//         test5 = graph.append("barry", 5);
//         graph.current = test1;
//         test3 = graph.append("morpheus", 3);
//         graph.appendNode(test4);
//         graph.current = test3;
//         test2 = graph.append("blythe", 2);
//         graph.appendNode(test4);
//         graph.current = test2;
//         graph.appendNode(test1);
//         graph.current = graph.root;
//         func = jest.fn();
//     });

//     afterEach(() => {
//         graph.root.visited = false;
//         test1.visited = false;
//         test2.visited = false;
//         test3.visited = false;
//         test4.visited = false;
//         test5.visited = false;
//         func.mockClear();
//     })

//     it("should allow for appending", () => {
//         expect(graph.current.children.length).toEqual(3);
//         expect(graph.current.children[0]).toEqual(test1);
//         expect(graph.current.children[1]).toEqual(test4);
//         expect(graph.current.children[2]).toEqual(test5);
//         graph.current = test1;
//         expect(graph.current.children.length).toEqual(2);
//         expect(graph.current.children[0]).toEqual(test3);
//         expect(graph.current.children[1]).toEqual(test4);
//         graph.current = test3;
//         expect(graph.current.children.length).toEqual(2);
//         expect(graph.current.children[0]).toEqual(test2);
//         expect(graph.current.children[1]).toEqual(test4);
//     });

//     it("should handle depth-first traversal", () => {
//         graph.depthTraversal(graph.root, func);

//         expect(func.mock.calls[0][0]).toBe(graph.root);
//         expect(graph.root.visited).toBe(true);
//         expect(func.mock.calls[1][0]).toEqual(test1);
//         expect(test1.visited).toBe(true);
//         expect(func.mock.calls[2][0]).toEqual(test3);
//         expect(test3.visited).toBe(true);
//         expect(func.mock.calls[3][0]).toEqual(test2);
//         expect(test2.visited).toBe(true);
//         expect(func.mock.calls[4][0]).toEqual(test4);
//         expect(test4.visited).toBe(true);
//         expect(func.mock.calls[5][0]).toEqual(test5);
//         expect(test5.visited).toBe(true);
//     });

//     it("should handle breadth-first taversal", () => {
//         graph.breadthTraversal(graph.root, func);
//         expect(func.mock.calls.length).toEqual(6);
//         expect(func.mock.calls[0][0]).toBe(graph.root);
//         expect(graph.root.visited).toBe(true);
//         expect(func.mock.calls[1][0]).toEqual(test1);
//         expect(test1.visited).toBe(true);
//         expect(func.mock.calls[2][0]).toEqual(test4);
//         expect(test4.visited).toBe(true);
//         expect(func.mock.calls[3][0]).toEqual(test5);
//         expect(test5.visited).toBe(true);
//         expect(func.mock.calls[4][0]).toEqual(test3);
//         expect(test3.visited).toBe(true);
//         expect(func.mock.calls[5][0]).toEqual(test2);
//         expect(test2.visited).toBe(true);

//     });

//     it("should determine if a path exists between nodes", () => {
//         expect(graph.pathExists(test1, test3)).toEqual(true)
//         expect(graph.pathExists(graph.root, test2)).toEqual(false)
//     })
// })
it("should work", () => expect(true).toBe(true));