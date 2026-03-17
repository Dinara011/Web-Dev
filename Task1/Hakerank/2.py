n = int(input())
students = []
for i in range(n):
    x = []
    a = input()
    x.append(a)
    b = float(input())
    x.append(b)
    students.append(x)

scores = []
for i in range(len(students)):
    scores.append(students[i][1])

unique_scores = sorted(list(set(scores)))
second_lowest = unique_scores[1]


result_names = []
for i in range(len(students)):
    if students[i][1] == second_lowest:
        result_names.append(students[i][0])


result_names.sort()
for name in result_names:
    print(name)
    
    
