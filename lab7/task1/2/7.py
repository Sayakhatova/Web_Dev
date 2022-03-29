# Find the Runner-Up Score!

if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    a = set(arr)
    a.remove(max(a))
    print(max(a))