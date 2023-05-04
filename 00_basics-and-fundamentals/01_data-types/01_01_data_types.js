// This is a JavaScript function called `DataTypes`.
// The function demonstrates different data types available in JavaScript.
function DataTypes() {
    // Integer:
    // - It is a whole number.
    // - It has a MIN_VALUE and a MAX_VALUE to store numbers.
    const firstInteger = 1000;
    console.log(firstInteger);

    const minimumInteger = Number.MIN_VALUE; // -2147483648
    const maximumInteger = Number.MAX_VALUE; // 2147483647

    console.log('minimumInteger ' + minimumInteger);
    console.log('maximumInteger ' + maximumInteger);

    console.log('Busted MIN_VALUE ' + (minimumInteger - 1));
    console.log('Busted MAX_VALUE ' + (maximumInteger + 1));

    const minimumSafeInteger = Number.MIN_SAFE_INTEGER; // -9007199254740991
    const maximumSafeInteger = Number.MAX_SAFE_INTEGER; // 9007199254740991

    console.log('minimumSafeInteger ' + minimumSafeInteger);
    console.log('maximumSafeInteger ' + maximumSafeInteger);

    // Boolean:
    // - Allows two choices: True or False, Yes or No, 1 or 0.
    const trueBooleanValue = true;
    console.log(trueBooleanValue);

    const falseBooleanValue = false;
    console.log(falseBooleanValue);

    // String:
    // - JavaScript distinguishes between String objects and primitive string values.
    // - A datatype which is not a primitive type, it is a Class.
    // - A String is a sequence of characters.
    // - Technically, a String is limited by the memory of the MAX_VALUE of a Number.
    const stringPrimitive = 'String Primitive';
    console.log(stringPrimitive);

    const firstStringObject = new String('This is a string object');
    console.log(firstStringObject);
}

// Call the `DataTypes` function to demonstrate the different data types in JavaScript.
DataTypes();
