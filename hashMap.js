import LinkedList from "./linkedList.js";

const HashMap = function () {
  const buckets = createBuckets(16);
  let sizeCount = 0;

  function hash(key) {
    let hasCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hasCode = (primeNumber * hasCode + key.charCodeAt(i)) % buckets.length;
    }

    return hasCode;
  }

  // Places the key value pair to
  // their place handles collisions.
  function set(key, value) {
    const hashValue = hash(key);
    const node = buckets[hashValue];
    // updating preexisting key's value
    if (node !== null && node.key === key) {
      node.value = value;
      return;
    }
    // new enterance no previous value or collision
    if (node === null) {
      buckets[hashValue] = new Node(key, value, null);
      changeSize("+");
      return;
    }
  }

  // Takes a key and return the value assigned to this key
  function get(key) {
    return buckets[hash(key)];
  }

  // Takes a key and returns true or false based on
  // whether or not the key is in the hash map
  function has(key) {
    return buckets[hash(key)] !== undefined;
  }

  function remove(key) {}
  // Returns the number of stored keys in the hash map
  function length() {
    return sizeCount;
  }

  // Removes all entries in the hash map
  function clear() {
    buckets = createBuckets(16);
    sizeCount = 0;
  }

  function keys() {}
  function values() {}
  function entries() {}

  // Takes the size and returns a new
  // buckets array of the size filled with null
  function createBuckets(size) {
    return new Array(size).fill(null);
  }

  // Hold each key and value
  function Node(key, value, next) {
    return { key, value, next };
  }

  // Increase or decrease the size
  function changeSize(sign) {
    switch (sign) {
      case "+":
        sizeCount += 1;
        return;
      case "-":
        sizeCount -= 1;
        return;
      default:
        return;
    }
  }

  return { set, get, has, remove, length, clear, keys, values, entries };
};

export default HashMap;
