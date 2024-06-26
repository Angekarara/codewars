function tailSwap(arr) {
    const [ar1, ar2] = arr.map(e => e.split(':'))
    return [`${ar1[0]}:${ar2[1]}`,`${ar2[0]}:${ar1[1]}`] 
     
   }