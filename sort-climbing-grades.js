function sortGrades(lst) {
  const order = [
    "VB",
    "V0",
    "V0+",
    "V1",
    "V2",
    "V3",
    "V4",
    "V5",
    "V6",
    "V7",
    "V8",
    "V9",
    "V10",
    "V11",
    "V12",
    "V13",
    "V14",
    "V15",
    "V16",
    "V17",
  ];
  const orderMap = {};
  for (let i = 0; i < order.length; i++) {
    orderMap[order[i]] = i;
  }
  return lst.sort((a, b) => orderMap[a] - orderMap[b]);
}
console.log(sortGrades(["V7", "V12", "V1"]));
console.log(sortGrades(["V13", "V14", "VB", "V0"]));
console.log(sortGrades(["V0+", "V0", "V16", "V2", "VB", "V6"]));
console.log(sortGrades(["V7", "V16", "V2", "VB", "V6"]));
