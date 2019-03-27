const questions = [
  "What is your name ?",
  "What is your fav hobby?",
  "What is you fav language?"
];
const answers = [];
function ask(i) {
  process.stdout.write(`\n ${questions[i]}`);
}
process.stdin.on("data", function(data) {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});
process.on("exit", function() {
  process.stdout.write(`${answers[0]} ${answers[1]} ${answers[2]}`);
});
ask(0);
