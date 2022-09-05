let ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
let teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
let tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]

let billion = 1000000000;
let million = 1000000;

var convertBillions = function (num) {
    if (num >= billion) {
        return convertBillions(Math.floor(num / billion)).trim() + " Billion " + convertMillions(num % billion).trim();
    }
    return convertMillions(num);
}

var convertMillions = function (num) {
    if (num >= 1000000) {
        return convertMillions(Math.floor(num / million)).trim() + " Million " + convertThousands(num % million).trim();
    }
    return convertThousands(num);
}

var convertThousands = function (num) {
    if (num >= 1000) {
        return convertThousands(Math.floor(num / 1000)).trim() + " Thousand " + convertHundreds(num % 1000).trim();
    }
    return convertHundreds(num);
}

var convertHundreds = function (num) {
    if (num > 99) {
        return convertHundreds(Math.floor(num / 100)).trim() + " Hundred " + convertTens(num % 100).trim();
    }
    return convertTens(num);
}
var convertTens = function (num) {
    if (num < 10) return ones[num];
    else if (num >= 10 && num < 20) return teens[num - 10];
    else {
        let thisTens = tens[Math.floor(num / 10)];
        let thisOnes = ones[num % 10]
        return thisTens + (thisOnes && " " + thisOnes);
    }
}

var numberToWords = function (num) {
    if (num === 0) return "Zero";
    if (num < 10) return ones[num];
    return convertBillions(num).trim();
};

test("it should correctly convert", () => {
    // var cases = [0, 1, 2, 7, 10, 11, 12, 13, 15, 19, 20, 21, 25, 29, 30, 35, 50, 55, 69, 70, 99, 100, 101, 119, 510, 900, 1000, 5001, 5019, 5555, 10000, 11000, 100000, 199001, 1000000, 1111111, 190000009];
    // for (var i = 0; i < cases.length; i++) {
    //     console.log(cases[i] + ": " + numberToWords(cases[i]));
    // }
})