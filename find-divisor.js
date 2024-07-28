function divisors(integer) {
    let arr = []
      if(integer > 1){
        for(let i=2; i<integer; i++){
          if(integer % i === 0){
             arr.push(i)
          }
          
      }
    }
    return arr.length ? arr : `${integer} is prime`;
  }