import LinkedList from "./linkedList.js";

const HashMap = function () {
  let buckets = createBuckets(16);
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
    if (!isNull(node) && node.key === key) {
      node.value = value;
      changeSize("+");
      return;
    }

    // Collision Case
    if (!isNull(node) && node.key !== key) {
      if (!isNull(node.next)) {
        node.next = new Node(key, value, null);
        changeSize("+");
        return;
      }

      // Get the end of the list
      while (!isNull(node.next)) {
        node = node.next;
      }

      node.next = new Node(key, value, null);
      changeSize("+");
      return;
    }

    // new enterance no previous value or collision
    if (isNull(node)) {
      buckets[hashValue] = new Node(key, value, null);
      changeSize("+");
      return;
    }
  }

  // Takes a key and return the value assigned to this key
  function get(key) {
    const hashValue = hash(key);
    const node = buckets[hashValue];
    if (isNull(node)) return null;
    function helper(head) {
      if (isNull(head)) return null;
      if (head.key === key) return head.value;
      return helper(head.next);
    }

    return helper(node);
  }

  // Takes a key and returns true or false based on
  // whether or not the key is in the hash map
  function has(key) {
    return !isNull(get(key));
  }

  // If the given key is in the hash map, it should
  // remove the entry with that key and return true
  // otherwise false
  function remove(key) {
    const hashValue = hash(key);
    const node = buckets[vashValue];
    if (isNull(node)) return false;
    return true;
  }

  // Returns the number of stored keys in the hash map
  function length() {
    return sizeCount;
  }

  // Removes all entries in the hash map
  function clear() {
    buckets = createBuckets(16);
    sizeCount = 0;
  }

  // Returns the keys of the hash map
  function keys() {
    function reducer(prev, curr) {
      if (curr === null) return [...prev];
      if (curr.next === null) return [...prev, curr.key];
      else return [...prev, ...listItem(curr, "key")];
    }

    return buckets.reduce(reducer, []);
  }

  // Given head of a list returns the item of
  // object of the list
  // example: listItem(head, "key")
  //          returns all the keys
  function listItem(head, item) {
    function helper(acc, curr) {
      if (curr === null) return acc;
      return helper([...acc, curr[item]], curr.next);
    }
    return helper([], head);
  }

  // Flattens the buckets

  // returns an array containing all the values.
  function values() {
    function reducer(prev, curr) {
      if (curr === null) return [...prev];
      if (curr.next === null) return [...prev, curr.value];
      else return [...prev, ...listItem(curr, "value")];
    }

    return buckets.reduce(reducer, []);
  }

  // Returns an array that contains each [key, value] pair.
  // [[firstKey, firstValue], [secondKey, secondValue]]
  function entries() {
    function zipList(head) {
      function helper(acc, curr) {
        if (curr === null) return acc;
        return helper([...acc, [curr.key, curr.value]], curr.next);
      }

      return helper([], head);
    }

    function reducer(prev, curr) {
      if (curr === null) return [...prev];
      if (curr.next === null) return [...prev, [curr.key, curr.value]];
      else return [...prev, ...zipList(curr)];
    }

    return buckets.reduce(reducer, []);
  }

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

  // Determine given node is null or not
  function isNull(node) {
    return node === null;
  }

  return { set, get, has, remove, length, clear, keys, values, entries };
};

export default HashMap;
