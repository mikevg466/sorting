function split(array){
  var midPoint = Math.floor(array.length / 2);
  var result = [];
  result.push(array.slice(0, midPoint));
  result.push(array.slice(midPoint));
  return result;
}

function merge(aArr, bArr){
  var result = [];
  var aCount, bCount;
  aCount = bCount = 0;
  for(var i = 0; i < aArr.length + bArr.length; i++){
    if(aCount === aArr.length || (bCount < bArr.length && bArr[bCount] < aArr[aCount])){
      result.push(bArr[bCount++]);
    } else{
      result.push(aArr[aCount++]);
    }
  }
  return result;
}

function mergeSort(array){
  if(array.length > 1){
    var splitArr = split(array);
    var aArr = mergeSort(splitArr[0]);
    var bArr = mergeSort(splitArr[1]);
    return merge(aArr, bArr);
  }
  return array;
}
