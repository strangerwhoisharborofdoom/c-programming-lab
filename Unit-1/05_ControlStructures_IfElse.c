#include <stdio.h>

// Program 4a: Simple if
int main() {
    int x;
    printf("Enter the number: ");
    scanf("%d", &x);
    if (x > 0)
        printf("%d is positive\n", x);
    return 0;
}

/* Output:
Enter the number: 8
8 is positive
*/
