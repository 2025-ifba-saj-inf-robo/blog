---
icon: pen-to-square
date: 2025-07-15 10:00:00.00 -3
category:
  - aula
  - prática
  - entrega
order: 13
---


# Controle de LED com Push Button: Duas Abordagens

## Introdução

Nesta aula, você irá construir dois circuitos diferentes para controlar LEDs com push buttons:

1. **Controle direto:** O push button interrompe ou permite a passagem de energia para o LED, sem uso de microcontrolador.
2. **Controle digital:** O Arduino detecta o acionamento do push button e liga/desliga o LED via programação.

Ambas as abordagens ajudam a entender conceitos de eletrônica básica e lógica digital.

## Materiais Necessários

- 1 placa Arduino (Uno, Nano, etc.)
- 2 LEDs
- 2 resistores de 220Ω (um para cada LED)
- 2 push buttons
- 2 resistores de 10kΩ (pull-down para os botões)
- Jumpers
- Protoboard

## Tarefa 1: Push Button Interrompendo Energia do LED (Circuito Simples)

Neste circuito, o push button é ligado em série com o LED e o resistor. Quando o botão está pressionado, a corrente passa e o LED acende. Quando o botão é solto, o circuito é interrompido e o LED apaga.

**Montagem:**

- LED1 em série com resistor de 220Ω e push button1.
- Conecte tudo entre o VCC (5V) e o GND da protoboard.

**Funcionamento:**

O LED1 acende apenas enquanto o botão1 estiver pressionado, pois o botão fecha o circuito.
#### Exemplo de Circuito Simples com Push Button


```upmath
\begin{circuitikz}
    \draw
    (0,0) to[battery, l=Bateria] (0,2)
    -- (2,2) to[R, l=220\\Omega] (6,2)
    to[switch, l=Push Button] (8,2)
    to[lamp, l=LED] (8,0)
    -- (0,0);
\end{circuitikz}
```

O diagrama acima mostra um circuito simples: a bateria fornece energia, o resistor limita a corrente, o push button controla o fluxo e o LED acende quando o botão é pressionado.

## Tarefa 2: Push Button Controlando LED via Arduino

Neste circuito, o push button não alimenta diretamente o LED, mas envia um sinal para o Arduino, que então liga ou desliga o LED conforme o botão é pressionado.

**Montagem:**

- LED2 conectado ao pino digital 13 do Arduino, com resistor de 220Ω.
- Push button2 conectado ao pino digital 2 do Arduino, com resistor de 10kΩ (pull-down).
- Arduino alimentado via USB.

**Funcionamento:**

Quando o botão2 é pressionado, o Arduino detecta o sinal HIGH e acende o LED2. Quando o botão é solto, o LED2 apaga.


O diagrama acima mostra o push button conectado ao pino digital 2 do Arduino com resistor pull-down, e o LED conectado ao pino digital 13 com resistor limitador, ilustrando o controle digital do LED via Arduino.

## Resumo das Diferenças

- **Tarefa 1:** O botão controla diretamente o LED, sem lógica ou programação.
- **Tarefa 2:** O botão envia sinal ao Arduino, que decide quando ligar o LED via código.


## Aplicações Práticas

Esses circuitos são a base para diversos projetos, como:
- Controle de dispositivos por botões
- Sistemas de senha
- Contadores
- Jogos eletrônicos
- Interruptores inteligentes

[Entrega](https://www.tinkercad.com/classrooms/d571uL5CipS/activities/czQUarsvvdD)