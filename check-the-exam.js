function checkExam(array1, array2) {
  // good luck
  /* The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"]. The second one is "answers" array and contains student's answers.

  The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).

  If the score < 0, return 0.*/
  var examScore = 0;
  for (var i in array1) {
    if (array1[i] === array2[i]) {
      examScore += 4;
    }
    else if (array1[1] !== array2[i] && array2[i] === '') {
      examScore += 0;
    }
    else {
      examScore -= 1;
    }
  }

  if (examScore < 0) {
    return 0;
  }
  else {
    return examScore;
  }
}
checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']);