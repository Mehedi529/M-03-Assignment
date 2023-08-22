function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }
  
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1 , 4, 5, 6];
  console.log(arr2); 
  