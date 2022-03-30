def string_splosion(str):
  ans = ''
  for i in range(len(str)):
    ans += str[:i]
  return  ans + str