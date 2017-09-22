// // A function that takes at least three arguments and returns
//  the result of some set of operations using those arguments 

function myFirstFunc(a, b, c) {
	const volume = a * b * c;
	return volume;
};


// A function that takes no arguments and returns something
function mySecondFunc() {
	const myText = "I am a function that returns nothing";
    return myText;
};


// A function that takes arguments, does something but does not return anything
function myThirdFunc(a, b, c) {
	const result = a + b + c;
	console.log(result);
};

// A function called fullName that takes as argument first name
//and last name and returns the full name of the person

function fullName(fName, lName) {
	const result = fName + " " + lName;
	return result;
};

// A function that takes three strings and returns the string that is the longest
function longestName(str1, str2, str3) {
	const a = str1.length, b = str2.length, c = str3.length;
	if (a > b && a > c) {
    return a;
	} else if (b > a && b > c ) {
		return b;
	} else {
		return c;
	};
};

// A function that takes two numbers and returns 0 if they are equal,
// 1 if the first is larger and -1 if the second is larger 

function  condFunc(x, y) {
	if (x == y) {
		return 0;
	} else if (x > y) {
		return 1;
	} else {
		return -1;
	};
};
// A function that takes three inputs and returns the first truethy value 
function checkTruethy(a, b, c) {
	const x = "here we have no truethy value"
	if (a) {
		return a;
	} else if (b) {
		return b;
	} else if (c) {
		return c;
	} else {
		return x;
	};
};