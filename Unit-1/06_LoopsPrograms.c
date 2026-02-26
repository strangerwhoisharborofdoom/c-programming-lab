#include <stdio.h>

// Program 4f: For Loop - Sum of natural numbers
int main() {
    int n, i, sum = 0;
    printf("Enter a positive integer: ");
    scanf("%d", &n);
    
    for(i = 1; i <= n; i++)
        sum = sum + i;
    
    printf("Sum: %d\n", sum);
    return 0;
}

/* Output:
Enter a positive integer: 5
Sum: 15
*/
