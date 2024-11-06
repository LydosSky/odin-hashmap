import HashMap from "./hashMap.js";
import assert from "assert";

const map = new HashMap();

map.set("apple", "red");
map.set("banana", "yellow");
map.set("carrot", "orange");
map.set("dog", "brown");
map.set("elephant", "gray");
map.set("frog", "green");
map.set("grape", "purple");
map.set("hat", "black");
map.set("ice cream", "white");
map.set("jacket", "blue");
map.set("kite", "pink");
map.set("lion", "golden");

assert.equal(map.get("car"), null);
assert.equal(map.get("jacket"), "blue");
assert.equal(map.has("car"), false);
assert.equal(map.has("apple"), true);
assert.equal(map.keys().length, 12);
assert.equal(map.values().length, 12);
assert.equal(map.entries().length, 12);
assert.equal(map.length(), 12);
map.clear();
assert.equal(map.length(), 0);
assert.equal(map.keys().length, 0);
assert.equal(map.values().length, 0);
assert.equal(map.entries().length, 0);
