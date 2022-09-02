const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passingGradesOnly = (array) => {
  return array.filter((num) => num > 70);
};

console.log(passingGradesOnly(grades));
