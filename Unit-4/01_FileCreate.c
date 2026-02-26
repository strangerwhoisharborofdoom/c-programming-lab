#include <stdio.h>
int main() {
    FILE *fp = fopen("test.txt", "w");
    fprintf(fp, "Hello World\n");
    fclose(fp);
    printf("File created\n");
    return 0;
}
