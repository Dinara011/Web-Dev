def pow(x,n):
    result = 1.0
    for i in range(0,n):
        result*=x
    return result
x,n = input().split()
x = float(x)
n = int(n)

print(pow(x,n))
