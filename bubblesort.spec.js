describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('sorts an array of integers', function(){
    var randArray = [3,7,2,4,9,1,15,3];
    expect( bubbleSort(randArray)).toEqual([1,2,3,3,4,7,9,15]);
  });
  it('should leave a sorted array in place', function(){
    var newArr = [1,2,3,3,4,7,9,15];
    expect( bubbleSort(newArr)).toEqual([1,2,3,3,4,7,9,15]);
  });
  it('should work for an array of one element', function(){
    var oneElArray = [5];
    expect( bubbleSort(oneElArray)).toEqual([5]);
  });
  it('mutates the array', function(){
    var randArray = [3,7,2,4,9,1,15,3];
    bubbleSort(randArray);
    expect( (randArray)).toEqual([1,2,3,3,4,7,9,15]);
  });
  it('works for strings', function(){
    var stringArr = ["banana", "apple", "abcd"];
    expect( bubbleSort(stringArr)).toEqual(["abcd","apple","banana"]);
  });
});
