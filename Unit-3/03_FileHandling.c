#include <stdio.h>

// Unit-4 Program: File Handling - Write and Read Data
int main() {
    FILE *fp;
    char str[100];
    
    // Writing data to a file
    fp = fopen("data.txt", "w");
    if(fp == NULL) {
        printf("Error: Cannot open file for writing!\n");
        return 1;
    }
    
    fprintf(fp, "Welcome to File Handling in C\n");
    fprintf(fp, "This text is written to the file.\n");
    fclose(fp);
    printf("Data written to file successfully!\n");
    
    // Reading data from a file
    fp = fopen("data.txt", "r");
    if(fp == NULL) {
        printf("Error: Cannot open file for reading!\n");
        return 1;
    }
    
    printf("\nReading data from file:\n");
    while(fgets(str, sizeof(str), fp) != NULL)
        printf("%s", str);
    
    fclose(fp);
    return 0;
}

/* Output:
Data written to file successfully!
Reading data from file:
Welcome to File Handling in C
This text is written to the file.
*/
