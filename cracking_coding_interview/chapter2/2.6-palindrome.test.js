//implement a function to check if a linked list is a palindrome
import { Node } from './linkedList';

test("isPalindrome should correctly check a palindrome", () => {
    let case2List = new Node(5);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(5);

    expect(case2List.isPalindrome()).toEqual(true);
});

test("isPalindrome should correctly check a palindrome with an odd number", () => {
    let case2List = new Node(5);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(7);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(5);

    expect(case2List.isPalindrome()).toEqual(true);
});

test("isPalindromeRecursive should correctly check a palindrome", () => {
    let case2List = new Node(5);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(5);
    let result = case2List.isPalindromeRecursive(case2List, case2List.lengthOfList());
    expect(result.isPalindrome).toEqual(true);
});


test("isPalindromeRecursive should correctly check a palindrome", () => {
    let case2List = new Node(5);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(2);
    case2List = case2List.appendToTail(8);
    case2List = case2List.appendToTail(5);
    let result = case2List.isPalindromeRecursive(case2List, case2List.lengthOfList());
    expect(result.isPalindrome).toEqual(true);
});

