x,y = map(int,input().split())
def xor(x,y):
    if(x==0 and y==0) or (x==1 and y==1):
        return 0
    else:
        return 1
print(xor(x,y))