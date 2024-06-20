const binaryArrayToNumber = arr => {
    const str = arr.join('')
    console.log(str)
    return parseInt(str,2)
  };
  console.log(binaryArrayToNumber([0, 0, 0, 1]))
  console.log(binaryArrayToNumber([0, 0, 1, 0]))
  console.log(binaryArrayToNumber([1, 1, 1, 1]))