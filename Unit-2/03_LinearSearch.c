#include <stdio.h>

// Unit-2 Program 5: Linear Search
int main() {
    int arr[] = {10, 25, 30, 45, 50};
    int i, key, found = 0;
    
    printf("Enter element to search: ");
    scanf("%d", &key);
    
    for(i = 0; i < 5; i++) {
        if(arr[i] == key) {
            found = 1;
            break;
        }
    }
    
    if(found)
        printf("Element %d found at position %d\n", key, i+1);
    else
        printf("Element %d not found\n", key);
    
    return 0;
}

/* Output:
Enter element to search: 45
Element 45 found at position 4
*/
