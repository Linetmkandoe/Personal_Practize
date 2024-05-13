#Question1
def fizzbuzz(n):
    numbers=range(n)
    for number in numbers:
        if number%3==0 and number%5==0:
            print("FizzBuzz")
        elif number%3==0:
            print("Fizz")
        elif number%5==0:
            print("Buzz")
        else:
            print(number)
def is_Leap(year):
    
    if year%4==0 and year%100!=0:
        if year%400==0:
            print(year, "is a leap year.")
    elif year%4!=0:
        print(year, "is not a leap year.")
print(is_Leap(1900))



def calculate_sum(numbers):
    sum =0
    for num in numbers:
        sum +=num
    print(sum)

calculate_sum([20,2,3,4,10])
    


def check_number_in_list(array, number):
    return number in array

my_list = [1, 2, 3, 4, 5]
number_to_check = 3

if check_number_in_list(my_list, number_to_check):
    print(f"{number_to_check} exists in the list.")
else:
    print(f"{number_to_check} does not exist in the list.")

def is_prime_division(number):
    if number <= 1:
        return False
    if number <= 3:
        return True
    if number % 2 == 0 or number % 3 == 0:
        return False
    i = 5
    while i * i <= number:
        if number % i == 0 or number % (i + 2) == 0:
            return False
        i += 6
    return True

num = 29
if is_prime_division(num):
    print(f"{num} is a prime number.")
else:
    print(f"{num} is not a prime number.")