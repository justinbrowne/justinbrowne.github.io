function isEmailValid(email) {
    var splitEmail = email.split("@");
    if (splitEmail.length != 2)
        return false;

    return true;
}

isEmailValid("justinbrowne@live.com");





function isPhoneNumber(input) {
    if (!input) {
        return false;
    }
    var splitNumber = input.split("-");
    var joinedNumbers = splitNumber.join("");
    var numbers = "0123456789";
    for (var i = 0; i < joinedNumbers.length; i++) {
        if (numbers.includes(joinedNumbers[i]) === false)
            return false;
    }
    if (splitNumber.length > 4) {
        return false;
    }
    if (splitNumber.length == 4 && splitNumber[0] == "1") {
        if (splitNumber[0].length == 1 && splitNumber[1].length == 3 && splitNumber[2].length == 3 & splitNumber[3].length == 4) {
            return true;
        }
    }
    if (splitNumber.length == 3) {
        if (splitNumber[0].length == 3 && splitNumber[1].length == 3 && splitNumber[2].length == 4) {
            return true;
        }
    }
    if (splitNumber.length == 1) {
        if (splitNumber[0].length == 11 || splitNumber[0].length == 10) {
            return true;
        }
    }
    return false;
}
isPhoneNumber("1111-1111-1111-1111")

3.

function withoutSymbols(input) {
    var alphabetAndNumbers = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789 ";
    var output = "";
    for (var i = 0; i < input.length; i++) {
        if (alphabetAndNumbers.includes(input[i]))
            output += input[i];
    }
    return output;
}
withoutSymbols("Hey Bob, how's it going? Email me @ justinbrowne@live.com.")




function isDate(input) {
    var splitByDash = input.split("-");
    var splitBySlash = input.split("/");
    var splitInput = "";
    if (splitByDash.length > splitBySlash.length) {
        splitInput = splitByDash;
    } else {
        splitInput = splitBySlash;
    }
    var numbers = "0123456789";
    var splitInputJoined = splitInput.join("");
    var numbers = "0123456789";
    for (var i = 0; i < splitInputJoined.length; i++) {
        if (numbers.includes(splitInputJoined[i]) === false)
            return false;
    }
    if (splitInput.length == 3 && splitInput[0] <= 12 && splitInput[1] <= 31 && splitInput.length <= 4) {
        if (splitInput[0].length <= 2 && splitInput[1].length <= 2 && splitInput[2].length <= 4) {
            return true;
        }
    }
    return false;
}
isDate("1-27-2018")




function isDate(input) {
    var splitByDash = input.split("-");
    var splitBySlash = input.split("/");
    var splitInput = "";
    if (splitByDash.length > splitBySlash.length) {
        splitInput = splitByDash;
    } else {
        splitInput = splitBySlash;
    }
    var numbers = "0123456789";
    var splitInputJoined = splitInput.join("");
    var numbers = "0123456789";
    for (var i = 0; i < splitInputJoined.length; i++) {
        if (numbers.includes(splitInputJoined[i]) === false)
            return false;
    }
    if (splitInput.length == 3 && splitInput[0] <= 12 && splitInput[1] <= 31 && splitInput.length <= 4) {
        if (splitInput[0].length <= 2 && splitInput[1].length <= 2 && splitInput[2].length <= 4) {
            return true;
        }
    }
    return false;
}

function isBeforeDate(input, reference) {
    if (isDate(input) == false || isDate(reference) == false)
        return false;
    var splitByDash = input.split("-");
    var splitBySlash = input.split("/");
    var splitInput = "";
    if (splitByDash.length > splitBySlash.length) {
        splitInput = splitByDash;
    } else {
        splitInput = splitBySlash;
    }
    var splitByDash = reference.split("-");
    var splitBySlash = reference.split("/");
    var splitReference = "";
    if (splitByDash.length > splitBySlash.length) {
        splitReference = splitByDash;
    } else {
        splitReference = splitBySlash;
    }
    var refYear = parseInt(splitReference[2], 10);
    var inputYear = parseInt(splitInput[2], 10);
    // Testing year
    if (refYear !== inputYear) {
        if (refYear < inputYear) {
            return true;
        }
    } else {
        var refMonth = parseInt(splitReference[0], 10);
        var inputMonth = parseInt(splitInput[0], 10);
        // Testing year
        if (refMonth !== inputMonth) {
            if (refMonth < inputMonth) {
                return true;
            }
        } else {
            var refDay = parseInt(splitReference[1], 10);
            var inputDay = parseInt(splitInput[1], 10);
            // Testing year
            if (refDay !== inputDay) {
                if (refDay < inputDay) {
                    return true;
                }
            }
        }
    }
    return false;
}
console.log("isBeforeDate: " + isBeforeDate("12-15-2014", "12-16-2014"));

function isAfterDate(input, reference) {
    if (isDate(input) == false || isDate(reference) == false)
        return false;
    var splitByDash = input.split("-");
    var splitBySlash = input.split("/");
    var splitInput = "";
    if (splitByDash.length > splitBySlash.length) {
        splitInput = splitByDash;
    } else {
        splitInput = splitBySlash;
    }
    var splitByDash = reference.split("-");
    var splitBySlash = reference.split("/");
    var splitReference = "";
    if (splitByDash.length > splitBySlash.length) {
        splitReference = splitByDash;
    } else {
        splitReference = splitBySlash;
    }
    var refYear = parseInt(splitReference[2], 10);
    var inputYear = parseInt(splitInput[2], 10);
    // Testing year
    if (refYear !== inputYear) {
        if (refYear > inputYear) {
            return true;
        }
    } else {
        var refMonth = parseInt(splitReference[0], 10);
        var inputMonth = parseInt(splitInput[0], 10);
        // Testing year
        if (refMonth !== inputMonth) {
            if (refMonth > inputMonth) {
                return true;
            }
        } else {
            var refDay = parseInt(splitReference[1], 10);
            var inputDay = parseInt(splitInput[1], 10);
            // Testing year
            if (refDay !== inputDay) {
                if (refDay > inputDay) {
                    return true;
                }
            }
        }
    }
    return false;
}
console.log("isAfterDate: " + isAfterDate("12-15-2014", "12-16-2014"));

function isBeforeToday(input) {
    var d = new Date();
    var dateString = (d.getMonth() + 1) + "-" + d.getDate() + "-" + d.getFullYear();
    return isBeforeDate(dateString, input);
}
console.log("isBeforeToday: " + isBeforeToday("12-15-2017"));

function isAfterToday(input) {
    var d = new Date();
    var dateString = (d.getMonth() + 1) + "-" + d.getDate() + "-" + d.getFullYear();
    return isAfterDate(dateString, input);
}
console.log("isAfterToday: " + isAfterToday("12-15-2017"));

function isEmpty(input) {
    var replaceSpaces = input.split(" ").join("");
    return replaceSpaces == "";
}
console.log("isEmpty: " + isEmpty("   "));

function contains(input, words) {
    for (var i = 0; i < words.length; i++) {
        var currentWord = words[0];
        if (input.includes(currentWord))
            return true;
    }
    return false;
}
console.log("contains: " + contains("hurts", ["Hurts"]));


function lacks(input, words) {
    return contains(input, words) == false;
}
console.log("lacks: " + lacks("help me this", ["i"]));

function isComposedOf(input, strings) {
    var inputSplit = input.split(".")
    var inputJoin = inputSplit.join("");
    for (var i = 0; i < strings.length; i++) {
        var currentString = strings[i];
        inputJoin = inputJoin.split(currentString).join("");
    }
    return isEmpty(inputJoin);
}
console.log("isComposedOf: " + isComposedOf("I am ready.", ["I", "I'm", "am", "not", "ready"]));

function isLength(input, n) {
    return (input.length <= n);
}
console.log("isLength: " + isLength("I am ready.", 9));

function isOfLength(input, n) {
    return (input.length >= n);
}
console.log("isOfLength: " + isOfLength("I am ready.", 12));

function countWords(input) {
    var wordCount = 0;
    var lowerCaseInput = input.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var previousWasAlphabet = false;
    for (var i = 0; i < lowerCaseInput.length; i++) {
        var currentWord = lowerCaseInput[i];
        if (!alphabet.includes(currentWord) && previousWasAlphabet) {
            wordCount++;
            previousWasAlphabet = false;
        } else if (i > 0) {
            var previousWord = lowerCaseInput[i - 1];
            if (alphabet.includes(previousWord)) {
                previousWasAlphabet = true;
            }
        }
    }
    if (previousWasAlphabet) {
        wordCount++;
    }
    return wordCount;
}
console.log("countWords: " + countWords("this is five words now"));

function lessWordsThan(input, n) {
    return (countWords(input) <= n);
}
console.log("lessWordsThan: " + lessWordsThan("two words", 1));

function moreWordsThan(input, n) {
    return (countWords(input) >= n);
}
console.log("moreWordsThan: " + moreWordsThan("two words", 1));

function isBetween(input, floor, ceil) {
    return (lessWordsThan(input, ceil) && moreWordsThan(input, floor));
}
console.log("isBetween: " + isBetween("this is five words now", 6, 10));

function isAlphanumeric(input) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz1234567890";
    for (var i = 0; i < input.length; i++) {
        var currentCharacter = input[i];
        if (!alphabet.includes(currentCharacter)) {
            return false;
        }
    }
    return true;
}
console.log("isAlphanumeric: " + isAlphanumeric("hello!"));

function isCreditCard(input) {
    if (!input) {
        return false;
    }
    var splitNumber = input.split("-");
    var joinedNumbers = splitNumber.join("");
    var numbers = "0123456789";
    for (var i = 0; i < joinedNumbers.length; i++) {
        if (numbers.includes(joinedNumbers[i]) === false)
            return false;
    }
    if (splitNumber.length == 1) {
        return splitNumber[0].length == 16;
    }
    if (splitNumber.length != 4) {
        return false;
    }
    for (var i = 0; i < splitNumber.length; i++) {
        if (splitNumber[i].length != 4) {
            return false;
        }
    }
    return true;
}
console.log("isCreditCard: " + isCreditCard("13545678"));

function isHex(input) {
    if (input.length != 4 && input.length != 7) {
        return false;
    }
    if (input[0] != "#") {
        return false;
    }
    var inputEverythingElse = input.substring(1);
    var alphabet = "abcdef1234567890";
    for (var i = 0; i < inputEverythingElse.length; i++) {
        var currentCharacter = inputEverythingElse[i];
        if (!alphabet.includes(currentCharacter)) {
            return false;
        }
    }
    return true;
}
console.log("isHex: " + isHex("#aabbcc"));

function isRGB(input) {
    var charactersToRemove = "rgb("
    var inputReplace = input.replace("rgb(", "");
    inputReplace = inputReplace.replace(")", "");
    var inputSplit = inputReplace.split(",");
    if (inputSplit.length != 3) {
        return false;
    }
    for (var i = 0; i < inputSplit.length; i++) {
        var currentNumber = parseInt(inputSplit[i], 10);
        if (currentNumber > 255 || currentNumber < 0) {
            return false;
        }
    }
    return true;
}
console.log("isRGB: " + isRGB("rgb(2,-41,2)"));

function isHSL(input) {
    var charactersToRemove = "hsl("
    var inputReplace = input.replace("hsl(", "");
    inputReplace = inputReplace.replace(")", "");
    var inputSplit = inputReplace.split(",");
    if (inputSplit.length != 3) {
        return false;
    }
    var inputSplitIntFirst = parseInt(inputSplit[0]);
    var inputSplitIntSecond = parseFloat(inputSplit[1]);
    var inputSplitIntThird = parseFloat(inputSplit[2]);
    if (inputSplitIntFirst > 360 || inputSplitIntFirst < 0) {
        return false;
    }
    if (inputSplitIntSecond > 1 || inputSplitIntSecond < 0) {
        return false;
    }
    if (inputSplitIntThird > 1 || inputSplitIntThird < 0) {
        return false;
    }
    return true;
}

console.log("isHSL: " + isHSL("hsl(.5,.4,.3)"));

function isColor(input) {
    return isHex(input) || isRGB(input) || isHSL(input);
}
console.log("isColor: " + isColor("#aabbcc"));

function isTrimmed(input) {
    return input[0] != " " && input[input.length - 1] != " ";
}
console.log("isTrimmed: " + isTrimmed(" aabbcc"));