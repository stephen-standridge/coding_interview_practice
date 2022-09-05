let RomanDict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

let ArabicDict = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
}

var romanToInt = function (s) {
    let queue = Array.from(s);
    let returned = 0;
    let current, next;
    while (queue.length > 0) {
        current = queue.shift();
        next = queue[0];

        if (RomanDict[current] < RomanDict[next]) {
            returned += Number(RomanDict[next] - RomanDict[current]);
            queue.shift();
        } else {
            returned += Number(RomanDict[current]);
        }
    }
    return returned;
};

var intToRoman = function (num) {
    let digits = String(num).split("");
    let current = "", zeroes = "", returned = [];
    while (digits.length) {
        current = digits.pop() + zeroes;
        if (ArabicDict[current]) {
            returned.unshift(ArabicDict[current]);
            zeroes += 0;
            continue;
        }
        if (current > Number("5" + zeroes)) {
            let thisNumber = ArabicDict["5" + zeroes];
            current = String(Number(current) - Number("5" + zeroes));
            let rest = current[0];
            while (rest > 0) {
                thisNumber += ArabicDict["1" + zeroes];
                rest--;
            }
            returned.unshift(thisNumber);
            zeroes += 0;
            continue;
        }

        let rest = current[0];
        while (rest > 0) {
            returned.unshift(ArabicDict["1" + zeroes]);
            rest--;
        }

        zeroes += 0;
    }
    return returned.join("");
};

describe("romanToInt", () => {
    it("should work with basic case", () => {
        expect(romanToInt("III")).toEqual(3);
    })
    it("should work with a more advanced case", () => {
        expect(romanToInt("LVIII")).toEqual(58);
    })
    it("should work with an advanced case", () => {
        expect(romanToInt("MCMXCIV")).toEqual(1994);
    })
});

describe("intToRoman", () => {
    it("should work with basic case", () => {
        expect(intToRoman(3)).toEqual("III");
        expect(intToRoman(21)).toEqual("XXI");
        expect(intToRoman(61)).toEqual("LXI");
    })
    it("should work with a more advanced case", () => {
        expect(intToRoman(58)).toEqual("LVIII");
    })
    it("should work with an advanced case", () => {
        expect(intToRoman(1994)).toEqual("MCMXCIV");
    })
});