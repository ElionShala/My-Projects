number1 = float(input("Enter the first number: "))
number2 = float(input("Enter the second number: "))
operator = input("Enter the operator (+, -, *, /): ")
result = ""

if operator == "+":
    result = float(number1 + number2)
    print("The result is: ", result)
elif operator == "-":
    result = float(number1 - number2)
    print("The result is: ", result)
elif operator == "*":
    result = float(number1 * number2)
    print("The result is: ", result)
elif operator == "/":
    if number2 == 0:
        print("Can not devide with 0 (infinite)")
    else:
        result = number1 / number2
        print(result)
else:
    print("Wrong operator!")

