#include <stdlib.h>
#include <stdio.h>
int calcularFatorial(a){
    int res;
    for (res=a; a>1; a--)
    {
        res *= a-1;    
    }
    return res;
}
int main (){
    int numero;
    printf("Informe um numero\n");
    scanf("%d", &numero);
    printf("O fatorial de %d e: %d", numero, calcularFatorial(numero));
}