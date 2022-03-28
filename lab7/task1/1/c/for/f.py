a = int(input())
x = 0

while a > 0:
    digit = a % 10
    a = a // 10
    x = x * 10
    x = x + digit  
    
print(x)