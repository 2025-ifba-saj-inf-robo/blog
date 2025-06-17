---
icon: pen-to-square
date: 2025-05-15 11:00:00.00 -3
category:
    - aula
    - teoria
order: 9
---

# Circuito Elétrico

[^RE_M1]

## Circuito Elétrico: Conceitos e Componentes

Um circuito elétrico é um caminho fechado por onde a corrente elétrica pode circular, permitindo o funcionamento de dispositivos eletrônicos e elétricos. Para compreender como montar e analisar circuitos, é fundamental conhecer seus principais conceitos e componentes.

## Componentes Básicos de um Circuito Elétrico
Um circuito elétrico é composto por diversos componentes, cada um com uma função específica. Abaixo estão os principais componentes encontrados em circuitos elétricos:

### 1. Fonte de Energia

A fonte de energia é o componente responsável por fornecer a diferença de potencial (tensão) necessária para que os elétrons se movimentem pelo circuito. Exemplos comuns incluem:

- **Pilhas e baterias:** Fornecem energia química convertida em energia elétrica. Possuem polos positivo (+) e negativo (–).
- **Fontes de alimentação:** Dispositivos que convertem a energia da rede elétrica em tensão adequada para o circuito.

#### Exemplo de Fonte de Alimentação 

```upmath
\begin{circuitikz}
    \draw
    (0,0) to[battery, l=Fonte de alimentação, invert] (0,3)
    -- (2,3) to[lamp] (2,0) -- (0,0);
\end{circuitikz}
```

O diagrama acima mostra uma fonte de alimentação conectada a uma lâmpada, representando um circuito simples. A fonte fornece a tensão necessária para o funcionamento do circuito.


### 2. Condutores

Os condutores são materiais que permitem a passagem da corrente elétrica com facilidade. Nos circuitos, geralmente utilizamos fios de cobre revestidos por material isolante. Eles conectam todos os componentes, formando o caminho por onde os elétrons circulam.

#### Exemplo de Condutor 

```upmath
\begin{circuitikz}
    \draw (0,0) -- (3,0);
\end{circuitikz}
```

O exemplo acima mostra um fio condutor simples, representando a ligação entre dois pontos do circuito.

### 3. Resistores

Os resistores são componentes que limitam o fluxo de corrente elétrica, convertendo parte da energia elétrica em calor. Eles são essenciais para proteger outros componentes e controlar a intensidade da corrente. Os valores dos resistores são medidos em ohms (Ω) e identificados por códigos de cores.

#### Exemplo de Resistor 

```upmath
\begin{circuitikz}
    \draw (0,0) to[R, l=Resistor] (3,0);
\end{circuitikz}
```

O diagrama acima mostra um resistor conectado entre dois pontos do circuito.

### 4. Interruptores (Chaves)

Interruptores são dispositivos que abrem ou fecham o circuito, controlando o fluxo de corrente. Quando o interruptor está aberto, o circuito é interrompido e a corrente não circula. Quando está fechado, o circuito é completado e a corrente pode fluir.

#### Exemplo de Interruptor 

```upmath
\begin{circuitikz}
    \draw (0,0) to[switch, l=Interruptor] (3,0);
\end{circuitikz}
```

O diagrama acima mostra um interruptor (chave) em um circuito.

### 5. Cargas

A carga é o componente que consome energia elétrica para realizar algum trabalho, como:

- **Lâmpadas:** Convertem energia elétrica em luz e calor.
- **Motores:** Transformam energia elétrica em movimento.
- **Dispositivos eletrônicos:** Como sensores, microcontroladores, etc.

#### Exemplo de Lâmpada 

```upmath
\begin{circuitikz}
    \draw (0,0) to[lamp, l=Lâmpada] (3,0);
\end{circuitikz}
```

O diagrama acima mostra uma lâmpada como carga no circuito.

### 6. Dispositivos de Proteção

São componentes que protegem o circuito contra sobrecargas e curtos-circuitos, como:

- **Fusíveis:** Se a corrente ultrapassar um valor seguro, o fusível se rompe, interrompendo o circuito.
- **Disjuntores:** Funcionam como interruptores automáticos, desligando o circuito em caso de falha.

#### Exemplo de Fusível 

```upmath
\begin{circuitikz}
    \draw (0,0) to[fuse, l=Fusível] (3,0);
\end{circuitikz}
```

O diagrama acima mostra um fusível conectado ao circuito.

### 7. Placa de Protoboard

A protoboard é uma placa utilizada para montar circuitos temporários sem a necessidade de solda. Ela possui furos conectados internamente, facilitando a conexão dos componentes e a realização de testes.

#### Exemplo de Protoboard (Representação Simples) 

```upmath
\begin{circuitikz}
    \draw (0,0) node[rectangle, draw, minimum width=3cm, minimum height=1cm] {Protoboard};
\end{circuitikz}
```

O diagrama acima representa uma protoboard de forma simplificada.

### 8. Esquema de Montagem

Um circuito elétrico pode ser representado por um diagrama esquemático, onde cada componente é simbolizado de forma padronizada. Isso facilita a compreensão, montagem e manutenção do circuito.

#### Exemplo de Esquema de Montagem 

```upmath
\begin{circuitikz}
    \draw
    (0,0) to[battery, l=Bateria] (0,2)
    -- (2,2) to[R, l=R] (4,2)
    to[lamp, l=Lâmpada] (4,0)
    -- (0,0);
\end{circuitikz}
```

O diagrama acima mostra um esquema de montagem simples com bateria, resistor e lâmpada.

## Exemplo de Circuito Simples

Um circuito básico pode ser composto por uma bateria, um resistor, uma lâmpada e um interruptor, todos conectados por fios condutores. Ao fechar o interruptor, a corrente flui da bateria, passa pelo resistor (limitando a corrente), acende a lâmpada e retorna à bateria, completando o ciclo.


## Referências

 [^RE_M1]: ESCOLA DIGITAL PR. Material didático. Disponível em: https://aluno.escoladigital.pr.gov.br/re-m1. 