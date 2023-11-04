/*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
*/

console.log('Hello, world!');


/* Computing Team Quality (Maximum Performance of a team)
	 *
	 * When assembling a team of workers to perform a task, we focus on
	 * professionalism and speed of the workers. 
     
     To Calculate the overall quality of a team
	 
     - * of workers, 
     - (we take the sum of each worker's speed,    <-- add up all team members speed (k)
      - and multiply it by the lowest professionalism rating of all the team members.
	 
     
	 * Given information about several available workers, 
     
     select workers to create a team of **less than or equal** to a particular size k. 
     
     
     Determine the **maximum quality** of the team that can be created.
	 * 
	 * Example 1
	 * speed           = [4,3,15,5,6]
	 * professionalism = [7,6, 1,2,8]

class Worker {
    int speed;
    int prof;
}
 
Worker[] workers = new Worker[n];
for (...) {
  workers[i].speed = speed[i];
  ...
}

int[][] workers = ...

 
                         28,18,15,10,48

minHeap(3) sum=0 quality = max(quality, new_quality)
   6       +6=6   *8=48
   6,4     +4=10  *7=70
   6,4,3   +3=13  *6=78
   6,4,3   -3+5=15*2=30
   6,5,15  -4+15=26*1=26   

6 4 3| 1 15 ....
8 7 6| 2 1 .....

1 1 3

n

====== code of solution, not complete

int quality = 0;
int sum = 0;
for ( i ...k) {
   for i = 0, 1, 2,...k-1 // pushing, adding, calculation (result set is to the left) -- this is filling up a heap of size K
   for i = k,  .... // search for values we need to the right, proceed forward
   //if (i > k) {
      if (workers[i][0] <= minHeap.top()) {
         continue; // only add new worker if speed is greater than min in heap
      } 
      removed_speed = minHeap.pop(); // remove smallest
      minHeap.push(workers[i][0]);
      sum -= removed_speed;  // minHeap.pop();
   //}
   sum += workers[i][0]; // larger speed we have found
   quality = Math.max(quality, sumHeap * workers[i][1]);
}
return quality;
}
======


Time: nlogn + nlogk <= 2nlogn
Space: 

	 * maxWorkers  k   = 3
	 * 
     
     4 3 6 = 13
     7 6 8
     
     
     2 6 7
     
     
     take top 3 profs
     given k, only kth largest prof matters
     6*(sum of speeds of 7,8) [13]
     2*(sum of speeds of 6,7) -> 
     1*(sum of speeds of 6,2) ->
     
     
     
     
     
	 * Maximum quality can be achieved by selecting the *first, the second and the fifth workers.*
 	 *  Max quality =
  	 *    (speed[0]+speed[1]+speed[4])*min(professionalism[0],professionalism[1],professionalism[4])=
	 *    (4+3+6)*min(7,6,8) = 13*6 = 78
	 *    
     
     
	 * Example 2
	 * speed           = [12,112,100,13,55]
	 * professionalism = [31,  4,100,55,50]
	 * maxWorkers  k   = 3
	 * 
	 * Maximum quality can be achieved by only selecting the third worker.
	 * Max quality = 100*100 = 10000
	 * 
	 * Example 3
	 * speed           = [11, 10, 7];
     * professionalism = [6, 4, 8];
     * maxWorkers   k  = 2
     * 
     * Max quality = (11+7)*min(6,8) = 18*6 = 108
     * 
     * Constraints:
     * 1 <=  n (total available worker) <= 10^5
     * 1 <= speed[i] <= 10^5
     * 1 <= professionalism[i] <= 10^5
     * 1 <= maxWorkers k <= n
     *
	 */

/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
    // generate all possible answers
    
    (n,1) (n,2) ... (n,k) if k = n,  O(n * (2^n - 1)) // BRUTE FORCE, EXPONENTIAL
      n    n(n-1)/2! ..
      1.    1        (n-k+1)  // O(nlogn)
        
    // from 1 - k workers
    // Max quality = (speed[0]+speed[1]+speed[4]) * min(professionalism[0],professionalism[1],professionalism[4])=(4+3+6)*min(7,6,8) = 13*6 = 78
    
    // all sums of speed to get max speed sum
    // all combination of prof to get highest minimum
    // such that multiplied together you get the max quality
    // keep a global maxQuality tracking var
    
    
    // greedy - pick most favorable way to do things
        
    
    // 1 pick worker with highest both values. sum of prof+speed > rest
    // pick the highest value in prof
        
        
        
        // need to bundle together
        
        
 
100 100 100 99 99 99  1   1.  1
  1   1  1  99 99 99 100 100 100 
        
        

    
   
};


