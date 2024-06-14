function squareDigits(num){
    const arr = String(num).split('').map( nums => Number(nums))
   const arr2 = arr.map( n => n*n)
    return Number(arr2.join(''));
  }
  console.log(squareDigits(2537))
  console.log(squareDigits(9119))