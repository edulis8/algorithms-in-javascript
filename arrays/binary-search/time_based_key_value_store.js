
class TimeMap {
  constructor() {
      this.keys = new Map();
  }

  set(key, value, timestamp) {
      if (!this.keys.has(key)) {
          this.keys.set(key, []);
      }
      this.keys.get(key).push({timestamp, value});
  }

  get(key, timestamp) {
     if (!this.keys.has(key)) return '';

     const timestamps = this.keys.get(key);
     const index = this.binarySearch(0, timestamps.length - 1, timestamps, timestamp);
     if (index === -1) {
         return '';
     } else {
         return timestamps[index].value;
     }
  }

  binarySearch(start, end, arr, target) {
    if (start > end) {
      return end;
    }

    const mid = Math.floor((start + end) / 2);
    const midTimestamp = arr[mid].timestamp;

    if (midTimestamp === target) {
        return mid;
    }

    if (midTimestamp > target) {
        // search left
        return this.binarySearch(start, mid - 1, arr, target);
    } else {
        // search right
        return this.binarySearch(mid + 1, end, arr, target);
    }
  }
}