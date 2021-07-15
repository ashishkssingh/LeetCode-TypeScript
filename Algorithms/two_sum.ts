function twoSum(nums: number[], target: number): number[] {
    const comp_map = {}
    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i];
        if (comp in comp_map) {
            return [comp_map[comp], i];
        }
        comp_map[nums[i]] = i;
    };
    return null;
};

console.log(twoSum([2, 7, 11, 15], 9))