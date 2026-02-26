#include <stdio.h>

// Unit-2 Program 2a: Bubble Sort
int main() {
    int arr[] = {25, 12, 22, 64, 11};
    int i, j, temp;
    int n = 5;
    
    for(i = 0; i < n - 1; i++) {
        for(j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    printf("Sorted Array:\n");
    for(i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
    return 0;
}

/* Output:
Sorted Array:
11 12 22 25 64
*/
