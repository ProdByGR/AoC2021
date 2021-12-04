const { loadInput } = require("../utils");

function part1(commands) {
  let horizontal = 0;
  let depth = 0;

  commands.forEach((command) => {
    let [dir, units] = command.split(" ");
    units = parseInt(units);
    switch (dir) {
      case "forward":
        horizontal += units;
        break;
      case "down":
        depth += units;
        break;
      case "up":
        depth -= units;
        break;
    }
  });

  return horizontal * depth;
}

function part2(commands) {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  commands.forEach((command) => {
    let [dir, units] = command.split(" ");
    units = parseInt(units);

    switch (dir) {
      case "forward":
        horizontal += units;
        depth += aim * units;
        break;
      case "down":
        aim += units;
        break;
      case "up":
        aim -= units;
        break;
    }
  });

  return horizontal * depth;
}

loadInput(__dirname).then((input) =>
  console.log(`Part 1: ${part1(input)}\nPart 2: ${part2(input)}`)
);
