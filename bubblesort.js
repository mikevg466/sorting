function bubbleSort(array){
  for (var i = 0; i < array.length; i++){
    for (var j = 1; j < array.length - i; j++){
      if (compare(array[j-1],array[j])){
        var swappedVal = array[j];
        array[j] = array[j-1];
        array[j-1] = swappedVal;
      }
    }
  }
  return array;
};

function compare(a, b){
  return a > b;
};

// function swap(a, b){
//
// }
