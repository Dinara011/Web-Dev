n = int(input())
n= n % 86400
h= n//3600
m = (n//60)%60
s = n%60
print(f"{h}:{m:02d}:{s:02d}")