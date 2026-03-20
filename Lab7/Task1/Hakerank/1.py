a = int(input())
x = list(map(int,input().split()))
xx = []
maxx = max(x)
for i in x:
    if i != maxx:
        xx.append(i)
runup=max(xx)
print(runup)
