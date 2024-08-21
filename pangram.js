function isPangram(string){
    const arr = ['a','b','c','d','e','f','j','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const sentence = string.toLowerCase()
   const results = arr.every(char => sentence.includes(char));
    return results;
  }
  