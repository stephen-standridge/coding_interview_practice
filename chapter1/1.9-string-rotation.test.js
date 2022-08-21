// assume you have a method isSubstring, 
// which checks if one word is a substring of another. 
// Given two strings, s1 and s2, write code to check 
// if s2 is a rotation of s1 using only one call to isSubstring 
// (eg. "waterbottle" is a rotation of "erbottlewat")

const cases = [
    {
        original: "waterbottle",
        rotateLeft: "erbottlewat",
        rotateRight: "tlewaterbot",
    },
    {
        original: "GeeksForGeeks",
        rotateLeft: "eksForGeeksGe",
        rotateRight: "ksGeeksForGee"
    },
    {
        original: "GeeksForGeeks",
        rotateLeft: "eksForGeeksGeaaa",
    },
    {
        original: "waterbottle",
        rotateLeft: "erbottlewta",
    }
]

function isSubstring(sub, string) {
    return string.includes(sub);
}

function isRotation(string1, string2) {
    if (string1.length !== string2.length) return false;

    let testIndex = 0;
    let match = "";

    //runs in O(n^m) time, not performant.
    for (let i = 0; i < string2.length; i++) {
        let char = string2[i];
        while (testIndex < string1.length) {
            if (char === string1[testIndex]) {
                match = match.concat(char);
                break;
            }
            testIndex++;
        }
    }
    return isSubstring(string2.replace(match, ""), string1);
    //find part that matches original string
    //test rest is substring of original
}

function isRotationSimple(string1, string2) {
    if (string1.length !== string2.length) return false;
    let s1s1 = string1 + string1;
    // runs in O(A+B) time
    return isSubstring(string2, s1s1);
}

test("it works on left rotation", () => {
    let result = isRotationSimple(cases[0].rotateLeft, cases[0].original);
    expect(result).toEqual(true);
})

test("it works on right rotation", () => {
    let result = isRotationSimple(cases[0].rotateRight, cases[0].original);
    expect(result).toEqual(true);
})

test("it works on bigger left rotation", () => {
    let result = isRotationSimple(cases[1].rotateLeft, cases[1].original);
    expect(result).toEqual(true);
})

test("it works on bigger right rotation", () => {
    let result = isRotationSimple(cases[1].rotateRight, cases[1].original);
    expect(result).toEqual(true);
})

test("it fails if the strings aren't the right size", () => {
    let result = isRotationSimple(cases[2].rotateLeft, cases[2].original);
    expect(result).toEqual(false);
})

test("it fails if the strings aren't actually a rotation", () => {
    let result = isRotationSimple(cases[3].rotateLeft, cases[3].original);
    expect(result).toEqual(false);
})