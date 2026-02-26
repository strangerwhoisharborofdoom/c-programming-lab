#include <stdio.h>

// Program 4e: Switch Case - Calculator
int main() {
    float num1, num2, result;
    char op;
    
    printf("Enter an expression (Example: 5 + 3): ");
    scanf("%f %c %f", &num1, &op, &num2);
    
    switch(op) {
        case '+':
            result = num1 + num2;
            printf("Result: %.2f\n", result);
            break;
        case '-':
            result = num1 - num2;
            printf("Result: %.2f\n", result);
            break;
        case '*':
            result = num1 * num2;
            printf("Result: %.2f\n", result);
            break;
        case '/':
            if(num2 != 0)
                result = num1 / num2;
            else
                printf("Error! Division by zero.\n");
                return 0;
            printf("Result: %.2f\n", result);
            break;
        default:
            printf("Invalid operator!\n");
    }
    return 0;
}

/* Output:
Enter an expression (Example: 5 + 3): 10 + 5
Result: 15.00
*/
