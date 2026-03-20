a = int(input())
count = 0
x = list(map(int,input().split()))
for i in range(0,len(x)-1):
    if x[i]<x[i+1]:
        count+=1
print(count)
