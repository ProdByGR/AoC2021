const { loadInput } = require("../utils");

function part1(depths) {
  let increments = 0;

  depths.forEach((depth, index) => {
    if (index === 0) return;

    if (depth > depths[index - 1]) increments++;
  });

  return increments;
}

function part2(depths) {
  let increments = 0;
  let prevSum = depths[0] + depths[1] + depths[2];

  depths.forEach((depth, index) => {
    if (index < 3) return;

    let currentSum = depths[index] + depths[index - 1] + depths[index - 2];

    if (currentSum > prevSum) increments++;

    prevSum = currentSum;
  });

  return increments;
}

loadInput(__dirname).then((input) =>
  console.log(`Part 1: ${part1(input)}\nPart 2: ${part2(input)}`)
);
