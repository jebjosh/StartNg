import math     #import math module to use the power and pi functions 

radius = int(input("Enter your radius: "))    #get radius from user

area = math.pow(radius,2) * math.pi         #calculate the area pi * r^2

print(f"The Area of a circle with the Radius as {radius} is {area}") #display area


