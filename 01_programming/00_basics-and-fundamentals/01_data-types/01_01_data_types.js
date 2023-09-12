(() => {
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
})();

(() => {
    /**
     * Data Types
     *
     * @task
     * Complete the code in the editor below. The variables `i`, `d`, and `s` are already declared and initialized for you. You must:
     * 1. Declare 3 variables: one of type int, one of type double, and one of type String.
     * 2. Read 3 lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your 3 variables.
     * 3. Use the `+` operator to perform the following operations:
     *       - Print the sum of `i` plus your int variable on a new line.
     *       - Print the sum of `d` plus your double variable to a scale of one decimal place on a new line.
     *       - Concatenate `s` with the string you read as input and print the result on a new line.
     * Note: If you are using a language that doesn't support using `+` for string concatenation (e.g.: C),
     * you can just print one variable immediately following the other on the same line. The string provided
     * in your editor must be printed first, immediately followed by the string you read as input.
     */

    function main() {
        var i = 4;
        var d = 4.0;
        var s = 'HackerRank ';

        // Declare second integer, double, and String variables.
        let int, double, string;

        // Read and save an integer, double, and String to your variables.
        int = parseInt(process.argv[2] || 0);
        double = parseFloat(process.argv[3] || 0.0);
        string = process.argv[4] || '';

        // Print the sum of both integer variables on a new line.
        console.log(i + int);

        // Print the sum of the double variables on a new line.
        console.log((d + double).toFixed(1));

        // Concatenate and print the String variables on a new line
        // The 's' variable above should be printed first.
        console.log(s + string);
    }

    main();
})();
