---
icon: pen-to-square  
date: 2025-04-24 14:00:00.00 -3
category:
    - aula
    - teoria
order: 6
---

# Circuitos Combinacionais

Circuitos combinacionais são sistemas digitais nos quais as saídas, em qualquer instante, dependem apenas do estado atual das entradas. Diferentemente dos circuitos sequenciais, não há elementos de memória: não importa o histórico dos sinais, apenas o valor presente das entradas determina o valor das saídas.

Um **circuito combinacional** é composto por portas lógicas interligadas de modo a realizar uma função lógica específica. As principais características são:

- **Sem memória:** Não armazena estados anteriores.
- **Saída instantânea:** A saída depende apenas das entradas atuais.
- **Função Booleana:** Cada circuito pode ser descrito por uma expressão algébrica Booleana.

Exemplos clássicos: somadores, comparadores, multiplexadores, decodificadores, codificadores.

## Estrutura Geral de um Circuito Combinacional

Todo circuito combinacional pode ser representado genericamente como um bloco com $n$ entradas e $m$ saídas, conforme o diagrama abaixo:

```upmath
\ctikzset{logic ports=ieee, logic ports/fill=gray!30}
\tikzset{small inline not/.style={inline not, /tikz/circuitikz/logic ports/scale=0.5}}
\begin{circuitikz}
    \draw[thick, fill=gray!10] (8.3,1) rectangle (16,-5);
    \node [and port](and1) at (12,0) {};
    \draw (and1.in 1) -- ++(-3,0) node[left, red](labelA){$E_1$};
    \draw (and1.in 2) -- ++(-3,0) node[left, red](labelC){$E_2$};
    \node [and port](and2) at (12,-2) {};
    \draw (and2.in 2) -- ++(-3,0) node[left, red](labelB){$E_3$};
    \draw (labelA.east) ++(0.5,0) node[circ]{} |- (and2.in 1);
    \node [and port](and3) at (12,-4) {};
    \draw (labelB.east) ++(0.5,0) node[circ]{} |- (and3.in 1);
    \draw (labelC.east) ++(1,0) node[circ]{} -- ++(0,-4)
    to[small inline not] ++(2,0);
    \node [or port](or1) at (15,-1) {};
    \draw (and1.out) -- (or1.in 1);
    \draw (and2.out) -- (or1.in 2);
    \draw (and3.out) -- ++(3.7,0) node[right, red](labelY){$S_2$};
    \draw (or1.out) -- ++(0.5,0) node[right, red](labelY){$S_1$};
    
    % Entradas
    \foreach \i in {1,2,3} {
        \draw[thick] (-2,2-\i) -- (0,2-\i);
        \node[left] at (-2,2-\i) {$E_{\i}$};
    }
    % Bloco combinacional
    \draw[thick, fill=gray!10] (0,-1.5) rectangle (3,1.5);
    \node at (1.5,0) {\begin{tabular}{c}
      Circuito\\ 
      Combinacional
   \end{tabular}};
    % Saídas
    \foreach \i in {1,2} {
        \draw[thick] (3,1.5-\i) -- (5,1.5-\i);
        \node[right] at (5,1.5-\i) {$S_{\i}$};
    }
\end{circuitikz}
```

O diagrama acima mostra um circuito combinacional genérico, com três entradas ($E_1$, $E_2$, $E_3$) e duas saídas ($S_1$, $S_2$). O número de entradas e saídas pode variar conforme a aplicação.


## Projeto de Circuitos Combinacionais

O projeto de circuitos combinacionais segue etapas bem definidas:

1. **Especificação do problema:** Definir claramente o que o circuito deve fazer.
2. **Tabela verdade:** Listar todas as combinações possíveis das entradas e as respectivas saídas desejadas.
3. **Expressão Booleana:** Derivar as funções lógicas para cada saída.
4. **Simplificação:** Simplificar as expressões usando álgebra Booleana ou mapas de Karnaugh.
5. **Implementação:** Montar o circuito usando portas lógicas básicas.

---

## Exemplo Prático

Desenvolver um sistema automático para controlar os semáforos 1 e 2 presentes no cruzamento da RUA A e B. O sistema deve atender as seguintes características:
- Quando houver carros apenas na Rua B, o semáforo 2 deve permanecer verde.
- Quando houver carros apenas na Rua A, o semáforo 1 deve permanecer verde.
- Quando houver carros em ambas as Ruas, o semáforo para Rua A deve ser aberto.

<figure>

```upmath
\begin{tikzpicture}[scale=1.2, every node/.style={font=\small}]
    % Ruas
    \draw[thick] (0,0) -- (4,0); % Rua A (horizontal)
    \draw[thick] (2,-2) -- (2,2); % Rua B (vertical)
    % Nomes das ruas
    \node[above] at (3.8,0.2) {Rua A};
    \node[right] at (2,1.8) {Rua B};
    % Semáforos
    % Semáforo 1 (Rua A, à esquerda da interseção)
    \draw[fill=gray!20] (1.2,0.25) rectangle (1.5,-0.25);
    \draw[fill=green] (1.35,0.1) circle (0.07);
    \draw[fill=red] (1.35,-0.1) circle (0.07);
    \node[below] at (1.4,-0.3) {S1};
    % Semáforo 2 (Rua B, abaixo da interseção)
    \draw[fill=gray!20] (2.25,-0.2) rectangle (1.75,-0.5);
    \draw[fill=green] (2.1,-0.35) circle (0.07);
    \draw[fill=red] (1.9,-0.35) circle (0.07);
    \node[right] at (2.2,-0.35) {S2};
    % Carros
    \draw[fill=blue!40] (0.5,0.15) rectangle (0.8,-0.15); % Carro na Rua A
    \node[above] at (0.65,0.15) {\tiny Carro};
    \draw[fill=orange!60] (2.15,-1.2) rectangle (1.85,-1.5); % Carro na Rua B
    \node[right] at (2.15,-1.35) {\tiny Carro};
\end{tikzpicture}
```

<figcaption>Ilustração Cruzamento</figcaption>
</figure>


### Tabela Verdade

Considere as entradas:
- $A$: Carro na Rua A (1 = sim, 0 = não)
- $B$: Carro na Rua B (1 = sim, 0 = não)

As saídas:
- $S_1$: Semáforo 1 verde (Rua A)
- $S_2$: Semáforo 2 verde (Rua B)

| $A$ | $B$ | $S_1$ | $S_2$ |
|-----|-----|-------|-------|
|  0  |  0  |   0   |   0   |
|  0  |  1  |   0   |   1   |
|  1  |  0  |   1   |   0   |
|  1  |  1  |   1   |   0   |

### Equações Booleanas

- $S_1 = (A \cdot \overline{B}) + ( A \cdot B )$
    - $S_1 = A ( \overline{B} + B )$
    - $S_1 = A \cdot 1$
    - $S_1 = A$
- $S_2 = \overline{A} \cdot B$

<figure>

```upmath
\ctikzset{logic ports=ieee, logic ports/fill=gray!30}
\tikzset{small inline not/.style={inline not, /tikz/circuitikz/logic ports/scale=0.5}}
\begin{circuitikz}[american]
    \node (labelA) at (7.35,0.28) {$A$};
    \node [and port](and2) at (12,-2) {};
    \draw (and2.in 2) -- ++(-3,0) node[left](labelB){$B$};
    \draw (labelA.east) ++(1,0) node[circ]{} -- ++(0,-2) to[small inline not] (and2.in 1);
    \draw (and2.out) -- ++(0.5,0) node[right, red](labelS1){$S_2$};
    \draw (labelA.east) -- ++(5,0) node[right, red](labelS2){$S_1$};
\end{circuitikz}
```

<figcaption>Circuito para controlar semáforo</figcaption>

</figure>

