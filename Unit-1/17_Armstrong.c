#include <stdio.h>
#include <math.h>

int countDigits(int num) {
    int count = 0;
    while (num > 0) {
        count++;
        num /= 10;
    }
    return count;
}

int main() {
    int num, sum = 0, temp, digit, n;
    printf("Enter a number: ");
    scanf("%d", &num);
    
    temp = num;
    n = countDigits(num);
    
    while (temp > 0) {
        digit = temp % 10;
        sum += pow(digit, n);
        temp /= 10;
    }
    
    if (sum == num)
        printf("%d is an Armstrong number\n", num);
    else
        printf("%d is not an Armstrong number\n", num);
    
    return 0;
}
