function scramble(str1, str2) {
    const count = {}
    for(let s of str1) {
    if(count[s]){
      count[s]++
    }
    else{
      count[s] = 1
    }
  } 
    for(let letter of str2){
      if (!count[letter]){
        return false
      }
      else{
        count[letter] -= 1
      }
    }
    return true;
  }
  console.log(scramble('rkqodlw','world'))
  console.log(scramble('cedewaraaossoqqyt', 'codewars'))
  console.log(scramble('javscripts','javascript' ))