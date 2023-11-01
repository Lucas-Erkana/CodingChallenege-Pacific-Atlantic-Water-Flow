/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  const m = heights.length; // Number of rows
  const n = heights[0].length; // Number of columns

  const result = []; // Array to store the result

  const pacific = Array.from({ length: m }, () => Array(n).fill(false)); // Matrix to track cells reachable from Pacific Ocean
  const atlantic = Array.from({ length: m }, () => Array(n).fill(false)); // Matrix to track cells reachable from Atlantic Ocean

  // DFS function to mark cells as reachable
  function dfs(row, col, ocean) {
    ocean[row][col] = true; // Mark the cell as reachable

    // Check neighbors (up, down, left, right)
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      // Check if the neighbor is within bounds and has not been visited
      if (
        newRow >= 0 &&
        newRow < m &&
        newCol >= 0 &&
        newCol < n &&
        !ocean[newRow][newCol] &&
        heights[newRow][newCol] >= heights[row][col]
      ) {
        dfs(newRow, newCol, ocean); // Recursively visit the neighbor
      }
    }
  }

  // Traverse the first and last rows, marking cells reachable from Pacific and Atlantic oceans
  for (let col = 0; col < n; col++) {
    dfs(0, col, pacific); // Traverse the first row
    dfs(m - 1, col, atlantic); // Traverse the last row
  }

  // Traverse the first and last columns, marking cells reachable from Pacific and Atlantic oceans
  for (let row = 0; row < m; row++) {
    dfs(row, 0, pacific); // Traverse the first column
    dfs(row, n - 1, atlantic); // Traverse the last column
  }

  // Check all cells and add those reachable from both oceans to the result array
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (pacific[row][col] && atlantic[row][col]) {
        result.push([row, col]);
      }
    }
  }

  return result;
};

console.log(pacificAtlantic([
  [1, 2, 3],
  [3, 2, 1],
  [2, 3, 1]
])) //expected result true

module.exports = pacificAtlantic;