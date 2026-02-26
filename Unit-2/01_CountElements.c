#include <stdio.h>

// Unit-2 Program 1: Count Number of Elements in an Array
int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int count = sizeof(arr) / sizeof(arr[0]);
    printf("Total number of elements in the array: %d\n", count);
    return 0;
}

/* Output:
Total number of elements in the array: 5
*/
