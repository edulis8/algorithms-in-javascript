// Check whether the packages can be shipped in less than "days" days with
// "c" capacity.


function shipWithinDays(weights, days) {
  let totalLoad = 0;
  let maxLoad = 0;
  for (let weight of weights) {
    totalLoad += weight;
    maxLoad = Math.max(maxLoad, weight);
  }

  return binarySearch(weights, maxLoad, totalLoad);

  function feasible(weights, c, days) {
    let daysNeeded = 1;
    let currentLoad = 0;
  
    for (let weight of weights) {
      currentLoad += weight;
      if (currentLoad > c) {
        daysNeeded++;
        currentLoad = weight;
      }
    }
    return daysNeeded <= days;
  }

  function binarySearch(weights, l, r) {
    if (l >= r) {
      return l;
    }
    const mid = Math.floor((l + r) / 2);
    if (feasible(weights, mid, days)) {
      // If we can ship the packages with mid as the ship's capacity in less than or equal to days days, 
      // we move to the lower half of the range by setting r = mid.
      return binarySearch(weights, l, mid, days);
    } else {
      // Otherwise, if we cannot ship the packages with m capacity in the required days, we move to the upper half of the range by setting l = mid + 1.
      return binarySearch(weights, mid + 1, r, days);
    }
  }
}

