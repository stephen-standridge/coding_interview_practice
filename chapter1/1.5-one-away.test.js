//There are three types of edits that can be performed on strings: 
// insert, remove or replace. Given two strings, 
// write a function to check if they are one edit (or zero edits) away

const cases = [
    ['pale', 'ple', true],
    ['pales', 'pale', true],
    ['pale', 'bale', true],
    ['pale', 'bake', false],
    ['pale', 'paless', false],
    ['pale', 'pl', false],
    ['ple', 'pale', true]
]

function oneAway(string1, string2) {
    let index1 = 0;
    let index2 = 0;
    let foundOne = false;

    //set longer string to s2; s2 is ALWAYS increased.
    //s1 is only increased on replacement or match.
    let s1 = string1.length > string2.length ? string2 : string1;
    let s2 = string1.length > string2.length ? string1 : string2;
    if (Math.abs(s1.length - s2.length) > 1) return false;
    while (index1 < s1.length && index2 < s2.length) {
        if (s1[index1] !== s2[index2]) {
            if (!foundOne) {
                foundOne = true;
            } else {
                return false;
            }
            if (s1.length === s2.length) {
                index1++; // handles replacement case where two strings are equal length
            }
        } else {
            index1++; //handles matching case or insertion case.
            //if matching, both indices need to be updated
            //if insertion, this string is shorter, so needs to be increased.
            //other index is already increased
        }
        // index1++;
        index2++;
    }

    return true
}

test("detects if strings are one removal away from eachother", () => {
    expect(oneAway(cases[0][0], cases[0][1])).toEqual(cases[0][2])
});
test("detects if strings are one addition away from eachother", () => {
    expect(oneAway(cases[1][0], cases[1][1])).toEqual(cases[1][2])
});
test("detects if strings are one change away from eachother", () => {
    expect(oneAway(cases[2][0], cases[2][1])).toEqual(cases[2][2])
});
test("fails on two changes", () => {
    expect(oneAway(cases[3][0], cases[3][1])).toEqual(cases[3][2])
});
test("fails on two additions", () => {
    expect(oneAway(cases[4][0], cases[4][1])).toEqual(cases[4][2])
});
test("fails on two removals", () => {
    expect(oneAway(cases[5][0], cases[5][1])).toEqual(cases[5][2])
});
test("works omni-directionally", () => {
    expect(oneAway(cases[6][0], cases[6][1])).toEqual(cases[6][2])
});
