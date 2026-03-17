a = int(input())
x = list(map(int,input().split()))
for i in range(0,len(x)-1):
    if (x[i] > 0 and x[i+1]>0) or (x[i] < 0 and x[i+1]<0):
        print("YES")
        break
else:
    print("NO")