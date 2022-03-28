n = int(input())
a = [int(x) for x in input().split()]

cnt = 0

for i in a:
	if i > 0: cnt += 1
print(cnt)