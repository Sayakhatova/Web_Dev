import math

n = int(input())
x = int(math.sqrt(n))

cnt = 0

for i in range(1, x): 
    if n % i == 0: cnt += 2
if n % x == 0: cnt += 1

print(cnt)