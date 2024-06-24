function isInfiniteProcess(a, b) {  
    if(a>b){
      return true
    }
     if((a-b) % 2 !== 0){
       return true
     }
     return false
   }
   console.log((isInfiniteProcess(2,6)))
   console.log((isInfiniteProcess(2,3)))
   console.log((isInfiniteProcess(2,10)))
   console.log((isInfiniteProcess(0,1)))