def average(array):
    ss =set()
    for i in range(len(array)):
         ss.add(array[i])
    l = len(ss)
    summ = 0
    for i in ss:
        summ+=i
    return summ/l

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)