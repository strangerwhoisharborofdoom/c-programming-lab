#include <stdio.h>

// Unit-3 Program: Pointers - Access Array Elements Using Pointer
int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *p = arr;  // Pointer to first element
    
    printf("Array elements using pointer:\n");
    for(int i = 0; i < 5; i++)
        printf("%d ", *(p + i));
    
    printf("\n\nPointer Address and Values:\n");
    for(int i = 0; i < 5; i++) {
        printf("p+%d = %p, *(p+%d) = %d\n", i, (p + i), i, *(p + i));
    }
    
    return 0;
}

/* Output:
Array elements using pointer:
10 20 30 40 50

Pointer Address and Values:
p+0 = 0x7ffd5ea5b480, *(p+0) = 10
p+1 = 0x7ffd5ea5b484, *(p+1) = 20
... and so on
*/
