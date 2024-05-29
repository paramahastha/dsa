function medianSlidingWindow(nums: number[], k: number): number[] {
    let result: number[] = [];    

    if (nums.length === k) {
        let sorted = nums.sort((a,b) => a - b);
                
        if (k & 1) {
            return [sorted[k >> 1]];
        }
        else {            
            return [(sorted[(k >> 1) - 1] + sorted[k >> 1]) / 2];            
        } 
    }

    for (let i = 0; i <= nums.length - k; i++) {    
        let window: number[] = nums.slice(i, i + k).sort((a,b) => a - b);            
        
        if (k & 1) {
            result.push(window[k >> 1]);
        }
        else {
            result.push((window[(k >> 1) - 1] + window[k >> 1]) / 2);
        }                 
    }

    return result;
};



console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7], 3));


function backtrackSubsets(nums: number[], start: number, path: number[], result: number[][]) {
    result.push([...path]); // Add a copy of current path to result
    for (let i = start; i < nums.length; i++) {
        // Include the current element in the subset
        path.push(nums[i]);
        console.log({path}, "X");
        // Explore further with the updated path
        backtrackSubsets(nums, i + 1, path, result);
        // Backtrack: Remove the current element from the subset
        path.pop();
        console.log({path}, "y");
    }
}

function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    backtrackSubsets(nums, 0, [], result);
    return result;
}

const nums: number[] = [1, 2, 3];
console.log(subsets(nums));