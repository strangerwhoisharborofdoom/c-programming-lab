#include <stdio.h>

int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }

int main() {
    printf("Add: %d\n", add(10, 5));
    printf("Sub: %d\n", subtract(10, 5));
    return 0;
}
