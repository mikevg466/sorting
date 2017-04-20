describe("MergeSort", function(){
  describe("Split function", function(){
    it("should return two arrays", function(){
      var arr = [1, 2, 3, 4, 5, 6];
      var splitResult = split(arr);
      expect(splitResult.length).toEqual(2);
      expect(Array.isArray(splitResult[0])).toEqual(true);
      expect(Array.isArray(splitResult[1])).toEqual(true);
    });
    it("should return two arrays", function(){
      var arr = [1, 2, 3, 4, 5, 6];
      var splitResult = split(arr);
      expect(splitResult[0].length).toEqual(3);
      expect(splitResult[1].length).toEqual(3);
    });
    it("should return two arrays", function(){
      var arr = [1, 2, 3, 4, 5, 6, 7];
      var splitResult = split(arr);
      expect(splitResult.length).toEqual(2);
      expect(splitResult[0].length).toEqual(3);
      expect(splitResult[1].length).toEqual(4);
    });
  });
  describe("Merge function", function(){
    it('returns an array', function(){
      expect(Array.isArray(merge([1], [2]))).toEqual(true);
    });
    it('length of result should be combined length', function(){
      expect(merge([1, 2], [3, 4, 5]).length).toEqual(5);
    });
    it('orders two single element arrays that start in order', function(){
      expect(merge([1], [2])).toEqual([1, 2]);
    });
    it('orders two single element arrays that start out of order', function(){
      expect(merge([2], [1])).toEqual([1, 2]);
    });
    it('orders multi element array that is in order', function(){
      expect(merge([3, 4], [5, 6])).toEqual([3, 4, 5, 6]);
    });
    it('orders two multi element arrays that start out of order', function(){
      expect(merge([5, 6], [3, 4])).toEqual([3, 4, 5, 6]);
    });
    it('result sorts two arrays that hold different magnitudes of values', function(){
      expect(merge([1, 4], [2, 3])).toEqual([1, 2, 3, 4]);
    });
    it('works for strings', function(){
      expect(merge(['apple'], ['abcd', 'banana'])).toEqual(['abcd', 'apple', 'banana']);
    });
  });
  describe("mergeSort function", function(){
    it('should be recursive', function(){
      spyOn(window, 'mergeSort').and.callThrough();
      mergeSort([4, 8, 2, 9, 10, 1]);
      expect(window.mergeSort.calls.count()).toEqual(11);
    });
    it('should return a sorted array', function(){
      expect(mergeSort([4, 8, 2, 9, 10, 1])).toEqual([1, 2, 4, 8, 9, 10]);
    });
    it('should not mutate original array', function(){
      var arr = [4, 8, 2, 9, 10, 1];
      mergeSort(arr);
      expect(arr).toEqual([4, 8, 2, 9, 10, 1]);
    });
    it('should work for an empty array', function(){
      expect(mergeSort([])).toEqual([]);
    });
    it('should work for an array with one element', function(){
      expect(mergeSort([1])).toEqual([1]);
    });
    it('should work for large unsorted arrays', function(){
      expect(mergeSort(['apple', 'banana', 'abcd'])).toEqual(['abcd', 'apple', 'banana']);
    });
    it('should work for sorted arrays', function(){
      expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
