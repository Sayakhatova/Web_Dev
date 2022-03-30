def max_end3(nums):
  max = 0
  if nums[0] > max and nums[0] >= nums[len(nums) - 1]: max = nums[0]
  if nums[len(nums) - 1] > max and nums[0] <= nums[len(nums) - 1]: max = nums[len(nums) - 1]
  return [max, max, max]
