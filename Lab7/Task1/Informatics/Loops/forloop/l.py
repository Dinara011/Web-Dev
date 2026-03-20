x =input()
c = 0
l = len(x)
x = x[::-1]
for i in range(l):
        c+=int(x[i])* 2**i
print(c)