function minNumber(...num) {
    if (num.length === 0) {
      return null; 
    }
  
    let min = num[0];
  
    for (let i = 1; i < num.length; i++) {
      if (num[i] < min) {
        min = num[i];
      }
    } 
    return min;
  }
  console.log(minNumber(5, 10, 3, 7));
  