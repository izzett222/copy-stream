const fs = require("fs");
const input = fs.createReadStream(process.argv[2]);
const output = fs.createWriteStream(process.argv[3]);
input.pipe(output)