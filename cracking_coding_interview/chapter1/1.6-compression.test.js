// Implement a method to perform basic string compression
// using the counts of repeated characters. For example, 
// the string aabcccccaaa would become a2b1c5a3. 
// If the "compressed" string would not become smaller than the original string, 
// your method should return the original string. 
// You can assume the string only has uppercase and lowercase letters.

const cases = [
    ['aabcccccaaa', 'a2b1c5a3'],
    ['abbbbcaaaaaa', 'a1b4c1a6'],
    ['abcd', 'abcd'],
]

function compress(string) {
    let returned = "";
    let last = string[0];
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (last === string[i]) count++;
        else {
            returned = returned.concat(`${last}${count}`);
            last = string[i];
            count = 1;
        }
    }
    returned = returned.concat(`${last}${count}`);
    return returned.length > string.length ? string : returned;
}

test("reduces one string", () => {
    expect(compress(cases[0][0])).toEqual(cases[0][1])
});
test("reduces a different string", () => {
    expect(compress(cases[1][0])).toEqual(cases[1][1])
});
test("returns the shortest string", () => {
    expect(compress(cases[2][0])).toEqual(cases[2][1])
});