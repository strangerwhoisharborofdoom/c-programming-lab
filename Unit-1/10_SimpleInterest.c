#include <stdio.h>

int main() {
    float principal, rate, time, interest;
    
    printf("Enter principal: ");
    scanf("%f", &principal);
    printf("Enter rate of interest: ");
    scanf("%f", &rate);
    printf("Enter time period: ");
    scanf("%f", &time);
    
    interest = (principal * rate * time) / 100;
    
    printf("Simple Interest = %.2f\n", interest);
    printf("Total Amount = %.2f\n", principal + interest);
    
    return 0;
}
