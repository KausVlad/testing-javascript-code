describe('Max/Min/Sum array number', () => {
  const desc = '<p>This is a test of Max/Min/Sum array number on output</p>';
  describe(desc, () => {
    it('should return the max number in the array', () => {
      expect(maxArrayNumber([1, 2, 3])).toBe(3);
      expect(maxArrayNumber([-1, -2, -3])).toBe(-1);
      expect(maxArrayNumber([0, 0, 0])).toBe(0);
      expect(maxArrayNumber([1.1, 2.2, 3.3])).toBe(3.3);
      expect(maxArrayNumber([-1, 2, -3, 4])).toBe(4);
    });
    it('should return null for empty array', () => {
      expect(maxArrayNumber([])).toBeNull();
    });
    it('should return the min number in the array', () => {
      expect(minArrayNumber([1, 2, 3])).toBe(1);
      expect(minArrayNumber([-1, -2, -3])).toBe(-3);
      expect(minArrayNumber([0, 0, 0])).toBe(0);
      expect(minArrayNumber([1.1, 2.2, 3.3])).toBe(1.1);
      expect(minArrayNumber([-1, 2, -3, 4])).toBe(-3);
    });
    it('should return null for empty array', () => {
      expect(minArrayNumber([])).toBeNull();
    });
    it('should return the sum of all numbers in the array', () => {
      expect(sumArray([1, 2, 3])).toBe(6);
      expect(sumArray([-1, -2, -3])).toBe(-6);
      expect(sumArray([0, 0, 0])).toBe(0);
      expect(sumArray([1.1, 2.2, 3.3])).toBe(6.6);
      expect(sumArray([-1, 2, -3, 4])).toBe(2);
    });
    it('should return null for empty array', () => {
      expect(sumArray([])).toBeNull();
    });
  });
});

describe('Only number array', () => {
  const desc = '<p>This is a test of only number array on output</p>';
  describe(desc, () => {
    it("should return only number in array ['sh', '62', 'glek', 64, -7, undefined, 4, 'grek', true, 84, 42, 0.1]", () => {
      expect(
        onlyNumberArray([
          'sh',
          '62',
          'glek',
          64,
          -7,
          undefined,
          4,
          'grek',
          true,
          84,
          42,
          0.1,
        ])
      ).toEqual([62, 64, -7, 4, 84, 42, 0.1]);
    });
    it('should return an empty array if the input array is empty', () => {
      expect(onlyNumberArray([])).toEqual([]);
    });

    it('should return an array of numbers if the input array contains only numbers [1, 2, 3]', () => {
      expect(onlyNumberArray([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it("should return an array of numbers [1, 2, 3] if the input array contains numbers and non-number values ['1', '2', '3', 'a', 'b', 'c']", () => {
      expect(onlyNumberArray(['1', '2', '3', 'a', 'b', 'c'])).toEqual([
        1, 2, 3,
      ]);
    });

    it("should return an array of negative numbers [-1, -2, -3] if the input array contains negative numbers ['-1', '-2', '-3']", () => {
      expect(onlyNumberArray(['-1', '-2', '-3'])).toEqual([-1, -2, -3]);
    });

    it("should return an array of numbers [1, 2, 3] if the input array contains numbers with whitespace ['1 ', ' 2', ' 3 ']", () => {
      expect(onlyNumberArray(['1 ', ' 2', ' 3 '])).toEqual([1, 2, 3]);
    });

    it("should return an array of numbers [1.1, 2.2, 3.3] if the input array contains numbers with decimal points ['1.1', '2.2', '3.3']", () => {
      expect(onlyNumberArray(['1.1', '2.2', '3.3'])).toEqual([1.1, 2.2, 3.3]);
    });
  });
});
