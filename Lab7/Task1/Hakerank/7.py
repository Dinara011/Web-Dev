a = int(input())
aa = set(map(int,input().split()))
b = int(input())
bb = set(map(int,input().split()))
x=list(aa.difference(bb))
y=list(bb.difference(aa))
xy=x+y
xy=sorted(xy)
for i in xy:
    print(i)
