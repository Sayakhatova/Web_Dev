def array_front9(nums):
  cnt = 0
  for i in nums[:4]:
    if i == 9: return True
  return False