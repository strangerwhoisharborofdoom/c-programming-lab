#include <stdio.h>
#include <stdlib.h>

// Unit-3 Program: Dynamic Memory - malloc and free
int main() {
    int *ptr;
    int n = 5;
    
    // Allocate memory for 5 integers using malloc
    ptr = (int*)malloc(n * sizeof(int));
    
    if(ptr == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }
    
    // Input values
    printf("Enter %d integers:\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%d", &ptr[i]);
    }
    
    // Display values
    printf("\nDisplaying values:\n");
    for(int i = 0; i < n; i++)
        printf("%d ", ptr[i]);
    
    // Free allocated memory
    free(ptr);
    printf("\nMemory freed successfully!\n");
    
    return 0;
}

/* Output:
Enter 5 integers:
10 20 30 40 50
Displaying values:
10 20 30 40 50
Memory freed successfully!
*/
