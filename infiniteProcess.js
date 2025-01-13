function isInfiniteProcess(a, b) {  
    if(a>b){
      return true
    }
     if((a-b) % 2 !== 0){
       return true
     }
     return false
   }
  