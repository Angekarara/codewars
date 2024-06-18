function checkParity(parity, bin){
    let results;
    const arr = bin.toString().split("").map(num => Number(num)).filter(n => n === 1)
    if(parity === 'even' && arr.length % 2 === 0){
      results = 0;
    }
    else if(parity === 'odd' && arr.length % 2 !== 0){
      results = 0;
    }
    else{
     results = 1
    }
    return results 
  }
  console.log(checkParity('even', 01010))
  console.log(checkParity('even', 010110))
  console.log(checkParity('odd', 01010))