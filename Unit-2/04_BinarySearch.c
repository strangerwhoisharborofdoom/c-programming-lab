#include <stdio.h>

// Unit-2 Program 6: Binary Search
int main() {
    int arr[] = {5, 12, 18, 25, 32, 40};
    int low = 0, high = 5, mid, key;
    
    printf("Enter element to search: ");
    scanf("%d", &key);
    
    while(low <= high) {
        mid = (low + high) / 2;
        if(arr[mid] == key) {
            printf("Element %d found at position %d\n", key, mid+1);
            return 0;
        }
        else if(key > arr[mid])
            low = mid + 1;
        else
            high = mid - 1;
    }
    printf("Element %d not found\n", key);
    return 0;
}

/* Output:
Enter element to search: 25
Element 25 found at position 4
*/
