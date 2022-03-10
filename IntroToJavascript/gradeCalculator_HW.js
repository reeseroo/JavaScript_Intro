//grade calculator
//inputs: homeworkAvg, quizAvg, examAvg
//output: overall grade (hw at 10%, quizzes at 15%, exams at 75%)

function gradeCalculator (homework, quiz, exam){
    homework = homework * .10;
    quiz = quiz * .15;
    exam = exam * .75;
    return homework+quiz+exam;
}

var firstTry = gradeCalculator(100, 100, 100);
var secondTry = gradeCalculator(50, 30, 100);
var thirdTry = gradeCalculator(80, 70, 50);

console.log(firstTry);
console.log(secondTry);
console.log(thirdTry);