/**
 * Closures
 *
 * - we do not create closure manually as we create a new array or a new unction
 * - a closure just happens automatically in certain situations, we just need to recognize those situations
 */
const secureBooking = function () {
  let passengerCount = 0;

  // a closure makes a function remember all the variables that existed at the functions birthplace
  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

/**
 * as the inner function of secureBooking had access to
 * passengerCount at the moment of creation,
 * by calling the inner function we have access to manipulating
 * the variable, which normally is inaccessible
 * outside ot the secureBooking function itself
 *
 * - a function has access to the variable environment (VE) of the execution context in which it was created
 * - a closure is - a variable environment attached to a function,
 * exactly as it was at the time and place the function was created
 * - thanks to a closure, a function does not loose connection to variables that existed at the functions birthplace
 */

/**
 * - a closure is the closed-over variable environment of the execution context in which
 * a function was created, even after that execution context is gone
 * - a closure gives a function access to all the variables of its parent function, even
 * after that parent function has returned - the function keeps a reference to it's
 * outer scope, which preserves the scope chain throughout time
 * - a closure makes sure that a function does not loose connection to variables that existed at the functions birthplace
 * - a closure is like a backpack that a function carries around wherever it goes - this backpack has all the variables hat were present in the environment where the function was created
 */

// situation 2
let f;
const g = function () {
  const a = 23;
  // this creates the closure and gives variable `f` access to variable `a`
  f = function () {
    console.log(a + 23);
  };
};
g(); // assigns the inner function to f
f(); // calling f actually calls the inner function of g

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
h(); // this reassigned f with the inner function of h
f(); // calling f now will call the inner function of h

// situation 3
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  // set a timer
  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`there are 3 groups, each with ${perGroup} passengers`);
  }, 1000);

  console.log(`will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // this will not be used inside boardPassengers - this is because the closure has priority over the scope chain

boardPassengers(180, 3);
