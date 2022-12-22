/**
 * For a complete description of the concepts practiced in this ticket check the Java / BasicJava / Basics-and-Fundamentals
 */

function DataTypes() {
  /**
   * Integer
   * it is whole number
   * it has a MIN_VALUE and a MAX_VALUE to store numbers
   */
  const firstInteger = 1000;
  console.log(firstInteger);

  const minimumInteger = Number.MIN_VALUE; // -2147483648
  const maximumInteger = Number.MAX_VALUE; // 2147483647

  console.log("minimumInteger " + minimumInteger);
  console.log("maximumInteger " + maximumInteger);

  console.log("Busted MIN_VALUE " + (minimumInteger - 1) );
  console.log("Busted MAX_VALUE " + (maximumInteger + 1) );

  /**
   * Boolean
   * - allows two choices True or False, Yes or No, 1 or 0
   */
  const trueBooleanValue = true;
  console.log(trueBooleanValue);

  const falseBooleanValue = false;
  console.log(falseBooleanValue);

  /**
   * String
   * - JavaScript distinguishes between String objects and primitive string values.
   * - a datatype which is not a primitive type it is a Class
   * - a String is a sequence of characters
   * - technically a String is limited by memory of the MAX_VALUE of an Number
   *
   */

  const stringPrimitive = "String Primitive";
  console.log(stringPrimitive);

  const firstStringObject = new String("This is a string object");
  console.log(firstStringObject);
}

DataTypes();