function findMin(arr) {
    let min_digit = 9999999999999999999999999999999999999999999999999999999999999999999999999999999;
    for (let i = 0; i < arr.length; i++){
      if (min_digit > arr[i]){
        min_digit = arr[i];
      }
    }
    return min_digit;
  }
