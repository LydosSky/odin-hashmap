const HashMap = function () {
  const buckets = [];
  let lengthCounter = 0;
  function hash(key) {
    let hasCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hasCode = primeNumber * hasCode + key.charCodeAt(i);
    }

    return hasCode;
  }
  function set(key, value) {}

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
    return lengthCounter;
  }

  // Removes all entries in the hash map
  function clear() {
    buckets = [];
    lengthCounter = 0;
  }

  function keys() {}
  function values() {}
  function entries() {}

  return { set, get, has, remove, length, clear, keys, values, entries };
};

export default HashMap;
