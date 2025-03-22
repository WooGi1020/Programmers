def is_prime(length):
    arr = list(map(int, input().split())) 

    decimal = 0  

    for num in arr:
        if num < 2:  
            continue  
        
        is_prime = True  

        for j in range(2, int(num ** 0.5) + 1):  
            if num % j == 0:
                is_prime = False  
                break  
        
        if is_prime:
            decimal += 1  

    print(decimal)  


length = int(input())  
is_prime(length) 
