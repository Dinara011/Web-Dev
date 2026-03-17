a = int(input())
x = list(map(int,input().split()))
for i in range(0,len(x)):
    if x[i]%2==0:
        print(x[i],end=" ")