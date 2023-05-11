# הנחתי שאם רוחב המשולש הוא 3 מותר לשרטט את המשולש למרות
#שאין מספרים אי זוגיים בין 1 ל3 (כל שאר השורות יהיו של 3)

#הנחתי שאין הגבלה ביחס בין הגובה לרוחב למרות שאם הבסיס
#קטן משמעותית מהגובה מאבדים קצת מהצורה של המשולש


import math

def handleRectangularTower(height,width):
    difference = abs(height-width)
    if(difference==0 or difference>5):
        print("The area of the rectangle is: "+str(height*width))
    else: print("The perimeter of the rectangle is: "+str((height+width)*2))

def handleTriangularTower(height,width):
    triangularCmd=int(input("To calculate the perimeter of the triangle, press 1. To print the triangle, press 2 "))
    if(triangularCmd==1):
        side=math.sqrt((width/2)**2+height**2) #According to the Pythagorean theorem
        print("The perimeter of the triangle is "+str(width+side*2)) 
    elif(triangularCmd==2):
        if(width % 2 == 0 or width > height * 2 or width == 1):
            print("The triangle cannot be printed")
        else:
            numOfSpace=width//2
            numOfOddNums=width//2-1 if width//2 else 0 #that we won't came to a -1 situation
            numOfLines=(height-2)//numOfOddNums if numOfOddNums else 1 #prevent a division by 0 
            remainder=(height-2)-numOfLines*numOfOddNums
            print(" "*numOfSpace+"*")
            numOfSpace-=1
            oddNum=3
            for k in range(remainder):  #The remainder print at the top
                print(" "*numOfSpace+"*"*oddNum)
            for i in range(numOfOddNums):
                for j in range(numOfLines):
                    print(" "*numOfSpace+"*"*oddNum)
                oddNum+=2
                numOfSpace-=1
            print("*"*width)
            

def main():
    cmd = int(input("For the rectangular tower press 1, for the triangular tower press 2, for the exit press 3 "))
    while(cmd!=3):
        height=int(input("Enter the height of the tower: "))
        width=int(input("Enter the width of the tower: "))
        if(cmd==1):
            handleRectangularTower(height,width)
        elif(cmd==2):
            handleTriangularTower(height,width)
        cmd = int(input("For the rectangular tower press 1, for the triangular tower press 2, for the exit press 3 "))

main()
