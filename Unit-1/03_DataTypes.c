#include <stdio.h>

// Program 2a: Data Types
int main() {
    int a = 10;             // Integer
    float b = 3.14;         // Float
    double c = 12.3456789;  // Double - more precision
    char d = 'X';           // Character
    
    printf("Integer value: %d\n", a);
    printf("Float value: %.2f\n", b);
    printf("Double value: %.9f\n", c);
    printf("Character value: %c\n", d);
    
    return 0;
}

/* Output:
Integer value: 10
Float value: 3.14
Double value: 12.345678900
Character value: X
*/
