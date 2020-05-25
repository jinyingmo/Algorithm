// LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // 返回  1
// cache.put(3, 3);    // 该操作会使得密钥 2 作废
// cache.get(2);       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得密钥 1 作废
// cache.get(1);       // 返回 -1 (未找到)
// cache.get(3);       // 返回  3
// cache.get(4);       // 返回  4

class LRUCache {
  constructor(max) {
    this.max = max
    this.cache = {}
    this.keys = []
  }
  put(key, value) {
    if(this.cache[key]) {
      this.keys.splice(key, 1)
      this.keys.push(key)
    } else {
      this.cache[key] = value
      this.keys.push(key)
      if(this.keys.length > this.max) {
        delete this.cache[this.keys[0]]
        this.keys.shift()
      }
    }
  }
  get(key) {
    return this.cache[key] || -1
  }
}

const lru = new LRUCache(2)
lru.put(1, 1)
lru.put(2, 2)
lru.put(3, 3)
lru.put(4, 4)
lru.put(5, 5)
lru.put(6, 6)

console.log(lru.get(4), lru.get(5))