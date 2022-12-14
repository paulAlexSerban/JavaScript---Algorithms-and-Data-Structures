const basket = ["apple", "blueberry", "bread"];

console.log(basket[Symbol.iterator]()); // array iterator

const iterator = basket[Symbol.iterator]();
// console.log(iterator.next()); // { value: 'apple', done: false }
// console.log(iterator.next()); // { value: 'blueberry', done: false }
// console.log(iterator.next()); // { value: 'bread', done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

let iteration = iterator.next();
while (!iteration.done) {
  console.log(iteration.value);
  iteration = iterator.next();
}

// create custom iterator of an object
const obj = {
  *[Symbol.iterator]() {
    for (let i = 1; i < 3; i++) {
      yield i;
    }
  },
};
const it2 = obj[Symbol.iterator]();
console.log(it2.next()); // { value: 1, done: false }

// treat the obj objects as iterables
for(const x of obj) {
  console.log(x)
}
// OR

console.log([...obj])