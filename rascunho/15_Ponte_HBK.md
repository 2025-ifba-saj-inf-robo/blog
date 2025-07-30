---
icon: pen-to-square
date: 2025-07-29 10:00:00.00 -3
category:
  - aula
  - prática
order: 14
---

# Ponte H: Fundamentos, Funcionamento e Aplicações

## Introdução
A ponte H é um circuito eletrônico fundamental para controlar motores de corrente contínua (CC) e motores de passo. Ela permite inverter a direção do motor e controlar sua velocidade, sendo amplamente utilizada em robótica, automação e projetos de controle de movimento.
## O que é uma Ponte H?
A ponte H é um arranjo de transistores ou relés que permite controlar a direção de rotação de um motor CC. O nome "ponte H" vem do arranjo dos componentes, que se assemelha à letra "H".

### Estrutura Física

Uma ponte H típica consiste em quatro transistores (ou relés) dispostos em  um formato de "H". Dois transistores controlam a corrente em uma direção, enquanto os outros dois controlam a corrente na direção oposta. Abaixo está um diagrama simplificado de uma ponte H:

```upmath
\begin{circuitikz}[american]
  % Alimentação
  \draw (0,4) node[vcc]{+Vcc};
  % Transistores superiores
  \draw (0,4) to[short] (0,3.2) to[Tnpn, n=Q1, o-o] (0,2);
  \draw (2,4) to[short] (2,3.2) to[Tnpn, n=Q2, o-o] (2,2);
  % Transistores inferiores
  \draw (0,2) to[Tnpn, n=Q3, invert, o-o] (0,0);
  \draw (2,2) to[Tnpn, n=Q4, invert, o-o] (2,0);
  % Motor entre os meios
  \draw (0,2) -- (0.7,2);
  \draw (2,2) -- (1.3,2);
  \draw (0.7,2) to[motor, l=M] (1.3,2);
  % GND
  \draw (0,0) node[ground]{};
  \draw (2,0) node[ground]{};
  % Rótulos dos transistores
  \node at (-0.5,3.2) {Q1};
  \node at (2.5,3.2) {Q2};
  \node at (-0.5,0.8) {Q3};
  \node at (2.5,0.8) {Q4};
\end{circuitikz}
```

    
    

Onde:
- Q1, Q2, Q3, Q4: transistores (ou relés)
- M: motor DC

## Funcionamento da Ponte H
O controle do sentido de rotação do motor é feito ativando pares de transistores:

- Para girar o motor em um sentido: ativa-se Q1 e Q4 (Q2 e Q3 desligados)
- Para girar no sentido oposto: ativa-se Q2 e Q3 (Q1 e Q4 desligados)
- Se ambos Q1/Q3 ou Q2/Q4 estiverem ligados ao mesmo tempo, ocorre curto-circuito (NUNCA FAÇA ISSO!)
- Se todos estiverem desligados, o motor para.

### Tabela Verdade da Ponte H

| Q1 | Q2 | Q3 | Q4 | Sentido do Motor |
|----|----|----|----|------------------|
| 1  | 0  | 0  | 1  | Horário          |
| 0  | 1  | 1  | 0  | Anti-horário     |
| 0  | 0  | 0  | 0  | Parado           |
| 1  | 1  | 0  | 0  | Parado           |
| 0  | 0  | 1  | 1  | Parado           |
| 1  | 0  | 1  | 0  | Curto-circuito!  |
| 0  | 1  | 0  | 1  | Curto-circuito!  |

## Aplicações da Ponte H
- Controle de motores DC em robôs móveis
- Controle de portas automáticas
- Impressoras
- Carrinhos autônomos
- Braços robóticos

## Exemplo de Controle de Ponte H com Arduino
Um dos circuitos mais comuns utiliza o CI L298N ou L293D para facilitar o controle dos transistores. Veja um exemplo básico de código para inverter o sentido de um motor DC:

```cpp
// Exemplo: Controle de motor DC com Ponte H (L298N ou L293D)
int IN1 = 8;
int IN2 = 9;

void setup() {
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
}

void loop() {
  // Sentido horário
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  delay(2000);
  // Sentido anti-horário
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  delay(2000);
  // Parar
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  delay(1000);
}
```

## Dicas de Segurança
- Nunca ligue ambos os lados da ponte ao mesmo tempo (curto-circuito)
- Use diodos de proteção para evitar picos de corrente
- Verifique a corrente máxima suportada pelos transistores ou CI


https://www.tinkercad.com/things/28tQwP4wU7H-ponte-h


## Referências
- [AULA 7 - Microcontroladores - IFSC](https://wiki.ifsc.edu.br/mediawiki/index.php/AULA_7_-_Microcontroladores_-_Eng)
- Datasheet L298N, L293D

