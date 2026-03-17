a =  int(input())
x = list(map(int,input().split()))
count = 0
for i in range(0,len(x)):
    if x[i]>0:
        count+=1
print(count)