#include <stdio.h>
int main() {
    int x = 10;
    int *p = &x;
    printf("Value: %d, Address: %p\n", *p, (void*)p);
    return 0;
}
