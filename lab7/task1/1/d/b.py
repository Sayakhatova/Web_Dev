n = int(input())
a = [int(x) for x in input().split()]

for i in a:
	if i % 2 == 0: print(i, end = ' ')