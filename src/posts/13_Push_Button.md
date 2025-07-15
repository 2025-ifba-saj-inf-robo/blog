---
icon: pen-to-square
date: 2025-07-15 10:00:00.00 -3
category:
  - aula
  - prática
  - entrega
order: 13
---

# Push Button: Fundamentos, Funcionamento e Aplicações

## Introdução

O push button (botão de pressão) é um dos componentes mais simples e importantes da eletrônica. Ele permite ao usuário interagir com circuitos, enviando comandos de ligar ou desligar, iniciar ou parar processos, ou alterar estados de dispositivos. Seu uso é fundamental em sistemas embarcados, automação, robótica, interfaces homem-máquina e projetos educacionais.

## O que é um Push Button?

Um push button é um interruptor momentâneo: ele fecha o contato elétrico apenas enquanto está pressionado. Quando solto, o circuito é aberto novamente. Existem diversos tipos de push button, mas todos funcionam segundo o mesmo princípio: permitir ou interromper o fluxo de corrente elétrica.

### Estrutura Física

O push button é composto por dois pares de terminais. Ao pressionar o botão, os contatos internos se unem, permitindo a passagem de corrente. Quando o botão é liberado, os contatos se separam, interrompendo o circuito.

### Símbolo em Diagramas

O símbolo do push button em diagramas elétricos é representado por uma chave momentânea:

```upmath
\begin{circuitikz}
    \draw
    (0,0)  to[switch, l=Push Button] (5,0);
\end{circuitikz}
```

## Funcionamento Elétrico

Quando o push button é inserido em um circuito, ele pode ser usado para:
- Fechar um circuito e permitir que a corrente flua (ligar um LED, motor, etc.)
- Enviar um sinal de entrada para um microcontrolador (como o Arduino)

### Ligações Comuns

1. **Em série com carga:** O botão controla diretamente o fluxo de corrente para o dispositivo (ex: LED).
2. **Como entrada digital:** O botão é ligado a um pino de entrada do microcontrolador, que detecta seu estado e executa ações programadas.

## Conceitos Fundamentais

### Corrente, Tensão e Resistência

- **Corrente elétrica:** Fluxo de elétrons que percorre o circuito quando o botão está pressionado.
- **Tensão:** Diferença de potencial entre os terminais do botão, que impulsiona a corrente.
- **Resistência:** Utilizada para limitar a corrente e proteger componentes como LEDs.

### Resistor Pull-down

Quando usamos push button como entrada digital em microcontroladores, é necessário garantir que o pino de entrada não fique "flutuando" (sem valor definido) quando o botão não está pressionado. O resistor pull-down conecta o pino ao GND, garantindo nível LOW (0V) quando o botão está aberto.

## Aplicações do Push Button

- Controle de dispositivos (LEDs, motores, relés)
- Interfaces de usuário (painéis, teclados, controles)
- Sistemas de senha e autenticação
- Contadores e cronômetros
- Jogos eletrônicos
- Robótica educacional

## Exemplos de Uso

### 1. Controle direto de carga
O push button pode ser usado para ligar/desligar um LED, motor ou outro dispositivo, simplesmente fechando o circuito.

### 2. Controle digital via microcontrolador
O botão envia um sinal para o microcontrolador, que interpreta o comando e executa ações programadas (acender LED, iniciar motor, etc.).

## Cuidados ao Utilizar Push Button

- Sempre utilize resistores para limitar corrente em cargas como LEDs.
- Use resistor pull-down ou pull-up para garantir leituras estáveis em entradas digitais.
- Verifique a polaridade dos componentes (LEDs, microcontroladores).

## Exercício Prático: Controle de LED com Push Button (Duas Abordagens)

Após estudar os conceitos, realize o exercício abaixo para fixar o conteúdo:

### Controle de LED com Push Button: Duas Abordagens

#### Materiais Necessários

- 1 placa Arduino (Uno, Nano, etc.)
- 2 LEDs
- 2 resistores de 220Ω (um para cada LED)
- 2 push buttons
- 2 resistores de 10kΩ (pull-down para os botões)
- Jumpers
- Protoboard

#### Tarefa 1: Push Button Interrompendo Energia do LED (Circuito Simples)

Monte um circuito em que o push button é ligado em série com o LED e o resistor. Quando o botão está pressionado, a corrente passa e o LED acende. Quando o botão é solto, o circuito é interrompido e o LED apaga. Nesse caso, o push button controla diretamente o fluxo de corrente para o LED e o arduino é utilizado somente para alimentar o circuito.

**Montagem:**
- LED1 em série com resistor de 220Ω e push button1.
- Conecte tudo entre o VCC (5V) e o GND da protoboard.

**Funcionamento:**
O LED1 acende apenas enquanto o botão1 estiver pressionado, pois o botão fecha o circuito.

#### Tarefa 2: Push Button Controlando LED via Arduino

Monte um circuito em que o push button envia sinal para o Arduino, que então liga ou desliga o LED conforme o botão é pressionado.

**Montagem:**
- LED2 conectado ao pino digital 13 do Arduino, com resistor de 220Ω.
- Push button2 conectado ao pino digital 2 do Arduino, com resistor de 10kΩ (pull-down).
- Arduino alimentado via USB.

**Funcionamento:**
Quando o botão2 é pressionado, o Arduino detecta o sinal HIGH e acende o LED2. Quando o botão é solto, o LED2 apaga.

#### Código Exemplo para Tarefa 2 (Arduino)

```cpp
// Controle de LED2 com Push Button2
int ledPin = 13;
int buttonPin = 2;
int buttonState = 0;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT);
}

void loop() {
  buttonState = digitalRead(buttonPin);
  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH); // Liga o LED2
  } else {
    digitalWrite(ledPin, LOW);  // Desliga o LED2
  }
}
```

#### Exercícios de Fixação

1. Monte o circuito da Tarefa 1 e explique por que o LED só acende quando o botão está pressionado.
2. Monte o circuito da Tarefa 2 e explique como o Arduino detecta o botão pressionado e aciona o LED.
3. Modifique o código da Tarefa 2 para que o LED2 troque de estado (liga/desliga) a cada vez que o botão2 for pressionado.
4. Adicione um segundo LED ao Arduino e faça com que ele acenda quando o botão2 não estiver pressionado.
5. Explique a função do resistor pull-down nos dois circuitos.

[Entrega](https://www.tinkercad.com/classrooms/d571uL5CipS/activities/czQUarsvvdD)

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