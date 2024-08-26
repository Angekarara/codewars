const reverseVowels = (str) =>{ 
    const vowels = str.split('').filter(el => 'aeiou'.includes(el.toLowerCase()))
    return str.split('').map(el => 'aeiou'.includes(el.toLowerCase())? vowels.pop() : el).join('')
  }