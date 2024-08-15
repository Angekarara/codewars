function findUniq(arr) {
    return arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item))
  }
  console.log(findUniq([ 1, 0, 0 ]))
  console.log(findUniq([ 1, 1, 1, 2, 1, 1]))
  console.log(findUniq([ 3, 10, 3, 3, 3 ]))
  console.log(findUniq([ 6, 6, 6, 9 ]))