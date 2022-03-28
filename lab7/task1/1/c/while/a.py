import math

n = int(input())
i = 1

while n > 0 and i <= n:
	x = int(math.sqrt(i))
	if x * x == i: print(i)
	i += 1