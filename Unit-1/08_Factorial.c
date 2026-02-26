#include <stdio.h>

// Program 8: Factorial of a Number
int main() {
    int n, i;
    long fact = 1;
    
    printf("Enter a number: ");
    scanf("%d", &n);
    
    if(n < 0) {
        printf("Error! Negative numbers do not have factorial.\n");
        return 1;
    }
    
    for(i = 1; i <= n; i++)
        fact = fact * i;
    
    printf("Factorial of %d: %ld\n", n, fact);
    return 0;
}

/* Output:
Enter a number: 5
Factorial of 5: 120
*/
