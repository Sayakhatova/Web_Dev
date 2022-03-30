def double_char(str):
  ans = ''
  for i in range(len(str)):
    ans += str[i] + str[i]
  return ans
