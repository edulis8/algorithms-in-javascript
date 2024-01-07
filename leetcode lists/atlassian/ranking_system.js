const voteData = [
  { '1': 5, char: 'A' },
  { '2': 2, '3': 3, char: 'B' },
  { '2': 3, '3': 2, char: 'C' }
];

const sortByPositionDescending = (a, b) => {
  const getPositionData = obj => Object.entries(obj).filter(([key, value]) => typeof value === 'number');

  const positionsA = getPositionData(a).sort(([keyA], [keyB]) => keyB - keyA);
  const positionsB = getPositionData(b).sort(([keyA], [keyB]) => keyB - keyA);

  for (let i = 0; i < positionsA.length; i++) {
    const [keyA, valueA] = positionsA[i];
    const [keyB, valueB] = positionsB[i];

    if (valueB !== valueA) {
      return valueB - valueA;
    }
  }

  // If all position properties are the same, use char property as a tie-breaker
  return a.char.localeCompare(b.char);
};

const sortedVoteData = voteData.sort(sortByPositionDescending);

console.log(sortedVoteData.map(item => item.char).join(''));