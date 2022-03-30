def combo_string(a, b):
  n = len(a)
  m = len(b)
  if n < m: return a + b + a
  elif n > m: return b + a + b
