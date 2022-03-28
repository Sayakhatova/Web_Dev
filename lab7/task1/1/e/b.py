def power(a, n):
	return a ** int(n)

a = [float(x) for x in input().split()]

print(power(a[0], a[1]))