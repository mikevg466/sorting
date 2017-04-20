function bubbleSort(array){
  for (var i = 0; i < array.length; i++){
    for (var j = 1; j < array.length - i; j++){
      if (compare(array[j-1],array[j])){
        swap(array,j,(j-1));
      }
    }
  }
  return array;
};

function compare(a, b){
  return a > b;
};

function swap(array, i, j){
  var swappedVal = array[j];
  array[j] = array[i];
  array[i] = swappedVal;
};
