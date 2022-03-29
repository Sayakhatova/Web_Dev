# Finding the percentage

if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    
    marks = 0
    for i in student_marks[query_name]:
        marks += i
    
    print("%.2f"%(marks / 3))