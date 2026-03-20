a = int(input())
x = list(map(int,input().split()))
for i in range(1,len(x)+1):
    if i %2!=0:
        print(x[i-1],end=" ")