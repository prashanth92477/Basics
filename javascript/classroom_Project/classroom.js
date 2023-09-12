export function getNumberOfGrades(grades) {
  console.log(grades);
  return grades.length;
}

export function getSumGrades(grades) {
  let sum = 0;
  grades.forEach(function (grade) {
    sum += grade;
  });
  return sum;
}

export function averageGrades(grades) {
  return getSumGrades(grades) / getNumberOfGrades(grades);
}

export function getPassingGrades(grades) {
  return grades.filter(function (grade) {
    return grade >= 10;
  });
}

export function getFailingGrades(grades) {
  return grades.filter(function (grade) {
    return grade <= 9;
  });
}

export function getRaisedGrades(grades) {
  return grades.map(function (grade) {
    if (grade + 1 > 20) {
      return 20;
    }
    return grade + 1;
  });
}
