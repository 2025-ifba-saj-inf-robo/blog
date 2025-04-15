---
icon: edit  
date: 2025-04-15 10:20:00.00 -3  
category:  
   - aula  
   - exercicio  
   - entrega
order: 3
---  

# Álgebra Booleana e Circuitos Lógicos

Uma álgebra Booleana pode ser definida com um conjunto de operadores e um conjunto de axiomas, que são assumidos verdadeiros sem necessidade de prova.

Em 1854, George Boole introduziu o formalismo que até hoje se usa para o tratamento sistemático da lógica, que é a chamada **Álgebra Booleana**. Em 1938, C. E. Shannon aplicou esta álgebra para mostrar que as propriedades de circuitos elétricos de chaveamento podem ser representadas por uma álgebra Booleana com dois valores.

Diferentemente da álgebra ordinária dos reais, onde as variáveis podem assumir valores no intervalo (-∞;+∞), as variáveis Booleanas só podem assumir um número finito de valores. Em particular, na álgebra Booleana de dois valores, cada variável pode assumir um dentre dois valores possíveis, os quais podem ser denotados por `[F,V]` (falso ou verdadeiro), `[H,L]` (high and low) ou ainda `[0,1]`. Mais para frente, adotaremos apenas a notação `[0,1]`, a qual também é utilizada em eletrônica digital.

Como o número de valores que cada variável pode assumir é finito (e pequeno), o número de estados que uma função Booleana pode assumir também será finito, o que significa que podemos descrever completamente as funções Booleanas utilizando tabelas. Devido a este fato, uma tabela que descreva uma função Booleana recebe o nome de **tabela verdade**, e nela são listadas todas as combinações de valores que as variáveis de entrada podem assumir e os correspondentes valores da função (saídas).

## Operações Básicas da Álgebra Booleana (ou Álgebra de Chaveamento)

Na álgebra Booleana, existem três operações ou funções básicas: **operação OU**, **operação E** e **complementação**. Todas as funções Booleanas podem ser representadas em termos destas operações básicas.

### Operação OU (Adição Lógica)

Uma definição para a operação OU, que também é denominada adição lógica, é:

::: info
        A operação OU resulta 1 se pelo menos uma das variáveis de entrada vale 1.
::: 

Como uma variável Booleana ou vale 1 ou vale 0, e como o resultado de uma operação qualquer pode ser encarado como (ou atribuído a) uma variável Booleana, basta que definamos quando a operação vale 1. Automaticamente, a operação resultará 0 nos demais casos. Assim, pode-se dizer que a operação OU resulta 0 somente quando todas as variáveis de entrada valem 0.

Um símbolo possível para representar a operação OU é “+”, tal como o símbolo da adição algébrica (dos reais). Porém, como estamos trabalhando com variáveis Booleanas, sabemos que não se trata da adição algébrica, mas sim da adição lógica. Outro símbolo também encontrado na bibliografia é “Ú”.

Listando as possibilidades de combinações entre dois valores Booleanos e os respectivos resultados para a operação OU, tem-se:

```console
 0 + 0 = 0 
 0 + 1 = 1 
 1 + 0 = 1 
 1 + 1 = 1 
```

Note que a operação OU só pode ser definida se houver, pelo menos, duas variáveis envolvidas. Ou seja, não é possível realizar a operação sobre somente uma variável. Devido a isso, o operador “+” (OU) é dito binário.

Nas equações, não costuma-se escrever todas as possibilidades de valores. Apenas adotamos uma letra (ou uma letra com um índice) para designar uma variável Booleana. Com isso, já se sabe que aquela variável pode assumir ou o valor 0 ou o valor 1. Então, supondo que queiramos demonstrar o comportamento da equação A+B (lê-se A ou B), poderíamos fazê-lo utilizando uma tabela verdade, como segue:


| A | B | A+B |
|---|---|-----|
| 0 | 0 |   0 |
| 0 | 1 |   1 |
| 1 | 0 |   1 |
| 1 | 1 |   1 |



Da mesma forma, podemos mostrar o comportamento da equação A+B+C (lê-se A ou B ou C) por meio de uma tabela verdade. Como na equação há somente o símbolo “+”, trata-se da operação OU sobre três variáveis. Logo, pode-se aplicar diretamente a definição da operação OU: o resultado será 1 se pelo menos uma das variáveis de entrada valer 1.

 
| A | B | C | A+B+C |
|---|---|---|-------|
| 0 | 0 | 0 |   0   |
| 0 | 0 | 1 |   1   |
| 0 | 1 | 0 |   1   |
| 0 | 1 | 1 |   1   |
| 1 | 0 | 0 |   1   |
| 1 | 0 | 1 |   1   |
| 1 | 1 | 0 |   1   |
| 1 | 1 | 1 |   1   |



É importante notar que, devido ao fato de haver somente um operador na equação, pode-se também avaliar a equação decompondo-a em pares. Por exemplo, pode-se primeiramente achar o resultado de A+B, para depois operar os valores resultantes com os respectivos valores de C. Esta propriedade é conhecida como associativa. Também a ordem em que são avaliadas as variáveis A, B e C é irrelevante (propriedade comutativa). Estas propriedades são ilustradas pela tabela verdade a seguir. Nela, os parênteses indicam subexpressões já avaliadas em coluna imediatamente à esquerda. Note que os valores das colunas referentes às expressões A+B+C, (A+B)+C e (B+C)+A são os mesmos (na mesma ordem).

| A | B | C | A+B+C | A+B | (A+B)+C | B+C | (B+C)+A |
|---|---|---|-------|-----|---------|-----|---------|
| 0 | 0 | 0 |   0   |  0  |    0    |  0  |    0    |
| 0 | 0 | 1 |   1   |  0  |    1    |  1  |    1    |
| 0 | 1 | 0 |   1   |  1  |    1    |  1  |    1    |
| 0 | 1 | 1 |   1   |  1  |    1    |  1  |    1    |
| 1 | 0 | 0 |   1   |  1  |    1    |  0  |    1    |
| 1 | 0 | 1 |   1   |  1  |    1    |  1  |    1    |
| 1 | 1 | 0 |   1   |  1  |    1    |  1  |    1    |
| 1 | 1 | 1 |   1   |  1  |    1    |  1  |    1    |


### Operação E (Multiplicação Lógica)

A operação E, ou multiplicação lógica, pode ser definida da seguinte forma:

::: info
A operação E resulta 0 se pelo menos uma das variáveis de entrada vale 0
:::


Pela  definição  dada,  pode-se  deduzir  que  o  resultado  da  operação  E  será  1  se,  e 

somente se, todas as entradas valerem 1. 



O símbolo usualmente utilizado na operação E é “×”, porém outra notação possível é “Ù”. Podemos, também, listar as possibilidades de combinações entre dois valores Booleanos e os respectivos resultados, para a operação E: 

```console
0 × 0    =     0 
0 × 1    =     0 
1 × 0    =     0 
1 × 1    =     1 
```

Assim como a operação OU, a operação E só pode ser definida entre, pelo menos duas variáveis. Ou seja,  o operador “×” (E) também é binário. 
Para mostrar o comportamento da equação A  × B (lê-se A e B), escreve-se uma tabela 

| A | B | A×B |
|---|---|-----|
| 0 | 0 |  0  |
| 0 | 1 |  0  |
| 1 | 0 |  0  |
| 1 | 1 |  1  |

De forma semelhante, pode-se determinar o resultado da equação A×B×C (lê-se A e B e C) utilizando diretamente a definição da operação  E: o resultado será 0 se pelo menos uma das variáveis de entrada valer 0. 


| A | B | C | A×B×C |
|---|---|---|-------|
| 0 | 0 | 0 |   0   |
| 0 | 0 | 1 |   0   |
| 0 | 1 | 0 |   0   |
| 0 | 1 | 1 |   0   |
| 1 | 0 | 0 |   0   |
| 1 | 0 | 1 |   0   |
| 1 | 1 | 0 |   0   |
| 1 | 1 | 1 |   1   |



Também para a operação E valem as propriedades associativa e comutativa. Então, a equação A×BC pode ainda ser avaliada tomando-se as variáveis aos pares, em qualquer ordem. 

Veja a tabela verdade a seguir e compare os resultados. 



| A | B | C | A×B×C | A×B | (A×B)×C | B×C | A×(B×C) |
|---|---|---|-------|-----|---------|-----|---------|
| 0 | 0 | 0 |   0   |  0  |    0    |  0  |    0    |
| 0 | 0 | 1 |   0   |  0  |    0    |  0  |    0    |
| 0 | 1 | 0 |   0   |  0  |    0    |  0  |    0    |
| 0 | 1 | 1 |   0   |  0  |    0    |  1  |    0    |
| 1 | 0 | 0 |   0   |  0  |    0    |  0  |    0    |
| 1 | 0 | 1 |   0   |  0  |    0    |  0  |    1    |
| 1 | 1 | 0 |   0   |  1  |    0    |  0  |    0    |
| 1 | 1 | 1 |   1   |  1  |    1    |  1  |    1    |


#### 2.1.3 Complementação (ou Negação, ou Inversão)

A operação 'complementação dispensa uma definição. É a operação cujo resultado é simplesmente o valor complementar ao que a variável apresenta. Também devido ao fato de uma variável Booleana poder assumir um entre somente dois valores, o valor complementar será 1 se a variável vale 0 e será 0 se a variável vale 1. 

Os símbolos utilizados para representar a operação complementação sobre uma variável Booleana A são $\overline{A}$ , ~A e A' (lê-se A negado). Nesta disciplina, adotaremos o primeiro símbolo. O resultado da operação complementação pode ser listado: 

$$
\overline{0}    =     1 \\\\
\overline{1}    =     0 
$$


Diferentemente das operações  OU e  E,  a  complementação só é definida sobre uma variável, ou sobre o resultado de uma expressão. Ou seja,  o operador complementação é dito unário. 

E a tabela verdade para $\overline{A}$ é: 


A | ¬A
--|---
0 |  1
1 |  0



### 2.2 Avaliação de Expressões Booleanas

Dada a equação que descreve uma função Booleana qualquer, deseja-se saber detalhadamente como esta função se comporta para qualquer combinação das variáveis de entrada. O comportamento de uma função é descrito pela sua tabela verdade.

## 2.2 Avaliação de Expressões Booleanas

Dada a equação que descreve uma função Booleana qualquer, deseja-se saber detalhadamente como esta função se comporta para qualquer combinação das variáveis de entrada. O comportamento de uma função é descrito pela sua tabela verdade e este problema é conhecido como avaliação da função ou da expressão que descreve a função considerada. Em suma, deseja-se achar a tabela verdade para a função Booleana.

Uma tabela verdade consiste basicamente de um conjunto de colunas, nas quais são listadas todas as combinações possíveis entre as variáveis de entrada (à esquerda) e o resultado da função (à direita). Também, pode-se criar colunas intermediárias, onde são listados os resultados de subexpressões contidas na expressão principal. Isto normalmente facilita a avaliação, principalmente no caso de equações muito complexas e/ou contendo muitas variáveis.

Quando numa mesma equação Booleana aparecem operações E e OU, é necessário seguir a ordem de precedência. Tal como na álgebra dos reais, a multiplicação (lógica) tem precedência sobre a adição (lógica). Além disso, expressões entre parêntesis têm precedência sobre operadores E e OU que estejam no mesmo nível. Quanto à complementação, esta deve ser avaliada tão logo seja possível. Caso a complementação seja aplicada sobre uma subexpressão inteira, é necessário que se avalie primeiramente a subexpressão para, só após, inverter o seu resultado.

O número de combinações que as variáveis de entrada podem assumir pode ser calculado por 2ⁿ, onde n é o número de variáveis de entrada.

O procedimento para a criação da tabela verdade a partir de uma equação Booleana é:

1. Criar colunas para as variáveis de entrada e listar todas as combinações possíveis, utilizando a fórmula de combinações = 2ⁿ (onde n é o número de variáveis de entrada);
2. Criar uma coluna para cada variável de entrada que apareça complementada na equação e anotar os valores resultantes;
3. Avaliar a equação seguindo a ordem de precedência, a partir do nível de parêntesis mais internos:
    - Multiplicação lógica
    - Adição lógica

Tomemos como exemplo a expressão `W = X + Y × Z`. A variável `W` representa a função Booleana propriamente dita. Esta variável depende das variáveis que estão à direita do sinal `=`, ou seja, depende de `X`, `Y` e `Z`. Logo, são 3 as variáveis de entrada. O total de combinações entre 3 variáveis será 2³ = 8. Então, a tabela verdade para `W` deverá ter 3 colunas à esquerda e 8 linhas. Seguindo o procedimento dado acima, cria-se uma coluna, na qual listam-se os valores para `Z`. Após, inicia-se a avaliação propriamente dita, a partir do nível mais interno de parêntesis. Como não há parêntesis na expressão, resolvem-se as subexpressões que envolvem a operação `E`. No caso em questão, há somente uma tal subexpressão, que é `X × Y`. Então, cria-se uma coluna para `X × Y`, na qual anotam-se os resultados para este produto. Finalmente, utilizam-se os resultados de `X × Y`, listados na coluna anterior, para operar o `OU` com a variável `X`. Repare os passos descritos na tabela verdade que segue. Nela, os parêntesis em torno do produto `X × Y` indicam somente que este termo já foi avaliado e que no passo referente a esta coluna, tomaram-se apenas os valores previamente encontrados.        


Para a expressão `W = X + Y × Z`, a tabela verdade é:

| X | Y | Z | Y × Z | W = X + (Y × Z) |
|---|---|---|-------|-----------------|
| 0 | 0 | 0 |   0   |        0        |
| 0 | 0 | 1 |   0   |        0        |
| 0 | 1 | 0 |   0   |        0        |
| 0 | 1 | 1 |   1   |        1        |
| 1 | 0 | 0 |   0   |        1        |
| 1 | 0 | 1 |   0   |        1        |
| 1 | 1 | 0 |   0   |        1        |
| 1 | 1 | 1 |   1   |        1        |



### Exercícios

1. **Tabela Verdade para Operação OU**  
        Construa a tabela verdade para a expressão Booleana `A + B + C + D`. Liste todas as combinações possíveis das variáveis de entrada e determine o resultado da operação.

2. **Tabela Verdade para Operação E**  
        Dada a expressão `X × Y × Z`, crie a tabela verdade correspondente. Certifique-se de listar todas as combinações possíveis das variáveis de entrada e calcule o resultado da operação.

3. **Complementação de Variáveis**  
        Considere as variáveis Booleanas `A` e `B`. Determine os valores de saída para as expressões complementadas `¬A` e `¬B`. Em seguida, construa a tabela verdade para a expressão `¬A + ¬B`.

4. **Avaliação de Expressões Booleanas**  
        Avalie a expressão `W = (A × B) + ¬C` e construa a tabela verdade correspondente. Certifique-se de seguir a ordem de precedência das operações e inclua colunas intermediárias para as subexpressões.

5. **Propriedades Associativa e Comutativa**  
        Verifique as propriedades associativa e comutativa para a operação OU utilizando as expressões `(A + B) + C` e `(B + C) + A`. Construa a tabela verdade e compare os resultados para confirmar as propriedades.

[Entrega](https://classroom.github.com/a/2gsprvty)