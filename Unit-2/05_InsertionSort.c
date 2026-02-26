#include <stdio.h>

// Unit-2 Program 2b: Insertion Sort
int main() {
    int arr[] = {14, 33, 27, 10, 35, 19, 44, 42};
    int n = 8;
    int i, j, key, temp;
    
    printf("Before Sorting: ");
    for(i = 0; i < n; i++)
        printf("%d ", arr[i]);
    
    // Insertion sort algorithm
    for(i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    
    printf("\nAfter Sorting: ");
    for(i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
    
    return 0;
}

/* Output:
Before Sorting: 14 33 27 10 35 19 44 42
After Sorting: 10 14 19 27 33 35 42 44
*/
