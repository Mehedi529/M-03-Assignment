function getLastItem(array) {
    if (array.length === 0) {
      return undefined;
    }
    return array[array.length - 1];
  }
  
  console.log(getLastItem([1, 2, 3, 4, 5]));
  console.log(getLastItem(['apple', 'banana', 'orange']));
  console.log(getLastItem([]));
  