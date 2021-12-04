const fs = require("fs");
const path = require("path");

async function loadInput(folder) {
  try {
    const data = await fs.readFileSync(path.join(folder, "input"));
    return data.toString().trim().split("\n");
  } catch (err) {
    console.error(err);
  }
}

module.exports = { loadInput };
