var path = require("path");
console.log(`${path.basename(__filename)}`);

console.log(process.title);
console.log(process.argv);
function garb(flag) {
  let index = process.argv.indexOf(flag);
  return index === -1 ? null : process.argv[index + 1];
}
var greeting = garb("--greeting");
var user = garb("--user");

if (!user || !greeting) {
  console.log("You blew it");
} else {
  console.log(`Welcome ${user}, ${greeting}`);
}
