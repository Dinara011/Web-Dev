
def solve(s):
    s = s.split(" ")
    ss=[]
    for i in s:
        ss.append(i.capitalize())
    return " ".join(ss)

a = input()
result = solve(a)
print(result)
