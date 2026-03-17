def rotate_left3(nums):
    if len(nums) > 1:
        first = nums.pop(0)  
        nums.append(first)   
    return nums