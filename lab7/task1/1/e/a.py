def min4(a, b, c, d):
	return min(min(a, b), min(c, d))

a = [int(x) for x in input().split()]

print(min4(a[0], a[1], a[2], a[3]))