
/**
 * 
 * Starting from the given pixel, we recolor it and check if any of its neighbors have the same color as the current pixel
 *  originally had. If a neighbor satisfies this property, we recursively color it along with its further neighbors. We
 *  continue this until we are left with no adjacent pixels to check/recolor.

If the given pixel is already of new_color color, we need to be careful and make sure DFS doesn’t enter into infinite recursion. 
We simply return the original image unchanged in this case.
 * 

Time Complexity
O(number of pixels).

In the worst case we recolor all pixels. Coloring each pixel takes a constant amount of work.

Auxiliary Space Used
O(number of pixels).

At worst, the number of recursive calls in the call stack can be equal to the total number of pixels we recolor.

Space Complexity
O(number of pixels).





 * @param {int32} pixel_row
 * @param {int32} pixel_column
 * @param {int32} new_color
 * @param {list_list_int32} image
 * @return {list_list_int32}
 */
function flood_fill(pixel_row, pixel_column, new_color, image) {
  // getNeighbors function
  // DFS graph solution
  // you know if a node is visited if it has already been changed...
  
  const oldColor = image[pixel_row][pixel_column];
  dfs(pixel_row, pixel_column)
  
  return image;
  
  function dfs(row, col) {
     
      image[row][col] = new_color;
      
      const neighbors = getNeighbors(row, col, oldColor);
      for (const [rowNeighbor, colNeighbor] of neighbors) {
           if (image[rowNeighbor][colNeighbor] == oldColor) {
                dfs(rowNeighbor, colNeighbor)
           }
         
      }
      
  }
  
  function getNeighbors(row, col) {
      // row -1, col
      // row + 1, col
      // row, col + 1
      // row, col -1
      const result = [];
      const rowLength = image.length;
      const colLength = image[0].length;
      if (row - 1 >= 0) result.push([row-1,col]);
      if (row + 1 < rowLength) result.push([row+1,col]);
      if (col - 1 >= 0) result.push([row,col-1]);
      if (col + 1 < colLength) result.push([row,col+1]);
      
      return result;
  }
}
