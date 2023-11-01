const pacificAtlantic = require('./solution');
const assert = require('assert');

describe('Tests', function () {
  it('Test Case 1', function () {
    const heights = [
      [1, 2, 2, 3, 5],
      [3, 2, 3, 4, 4],
      [2, 4, 5, 3, 1],
      [6, 7, 1, 4, 5],
      [5, 1, 1, 2, 4]
    ];
    const expected = [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]];
    const result = pacificAtlantic(heights);
    assert.deepStrictEqual(result, expected);
  });

  it('Test Case 2', function () {
    const heights = [
      [1]
    ];
    const expected = [[0, 0]];
    const result = pacificAtlantic(heights);
    assert.deepStrictEqual(result, expected);
  });

  it('Test Case 3', function () {
    const heights = [
      [1, 2],
      [2, 1]
    ];
    const expected = [ [ 0, 1 ], [ 1, 0 ] ];
    const result = pacificAtlantic(heights);
    assert.deepStrictEqual(result, expected);
  });

  it('Test Case 4', function () {
    const heights = [
      [1, 2, 3],
      [3, 2, 1],
      [2, 3, 1]
    ];
    const expected = [ [ 0, 1 ], [ 0, 2 ], [ 1, 0 ], [ 1, 1 ], [ 2, 0 ], [ 2, 1 ] ];
    const result = pacificAtlantic(heights);
    assert.deepStrictEqual(result, expected);
  });

  it('Test Case 5', function () {
    const heights = [
      [5, 5],
      [5, 5]
    ];
    const expected = [[0, 0], [0, 1], [1, 0], [1, 1]];
    const result = pacificAtlantic(heights);
    assert.deepStrictEqual(result, expected);
  });
});
