const mapData = new Map([
  [10, "ten"],
  ["isMarried", false],
]);

mapData.set("name", "John");
mapData.set(true, "Yes");

const obj = {};

mapData.set(obj, "person");

mapData.clear();
mapData.delete(10);
console.log(mapData.has(obj));
console.log(mapData.get("name"));
console.log(mapData);
console.log(mapData.size);

mapData.forEach((value, key) => {
  console.log(value, key);
});

for (let [key, value] of mapData.entries()) {
  console.log(key, value);
}


