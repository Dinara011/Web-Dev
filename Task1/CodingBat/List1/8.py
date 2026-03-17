def max_end3(nums):
  s = []
  if nums[0] > nums[-1]:
    s.append(nums[0])
    s.append(nums[0])
    s.append(nums[0])
   
    
  else:
    s.append(nums[-1])
    s.append(nums[-1])
    s.append(nums[-1])
  return s
    
