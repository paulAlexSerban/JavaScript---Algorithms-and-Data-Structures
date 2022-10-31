const setData = new Set(["John", 10, false, { firstname: "Bob" }, "John"]);

setData.add("Nick");
console.log(setData.size);

for (let value of setData.values()) {
  console.log(value);
}

for (let value of setData.keys()) {
  console.log(value);
}

for (let value of setData.entries()) {
  console.log(value);
}
