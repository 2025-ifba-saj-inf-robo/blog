---
icon: pen-to-square
date: 2025-08-05 14:00:00.00 -3
category:
  - aula
  - prática
order: 17
---


# Conectando motores ao Arduino usando o L293D

[^1]

Agora é hora de conectar o driver do motor L293D a um Arduino e controlar alguns motores!

Começaremos conectando a energia aos motores. Neste experimento, estamos usando motores TT, comumente usados em robôs com tração em duas rodas. Esses motores geralmente funcionam bem com tensões entre 3 V e 6 V. Como usaremos uma fonte de alimentação externa de 5 V para nossos motores, precisamos conectar esses 5 V ao pino VS (VCC2) do L293D.

Em seguida, precisamos alimentar o circuito lógico dentro do L293D. Para isso, conectaremos o pino VSS (VCC1) ao pino de saída de 5 V do Arduino.

Além disso, é muito importante garantir que tudo compartilhe um aterramento comum; isso significa conectar um pino de aterramento do seu Arduino a uma conexão de aterramento na fonte de alimentação do seu motor externo e também conectar o pino GND do L293D ao aterramento do Arduino.

Uma vez feitas as conexões de energia, podemos conectar os pinos de controle. O L293D possui dois pinos de habilitação (ENA e ENB) e quatro pinos de entrada (IN1, IN2, IN3 e IN4). Conectaremos ENA ao pino 9 do Arduino, IN1 ao pino 8, IN2 ao pino 7, IN3 ao pino 5, IN4 ao pino 4 e ENB ao pino 3.

Vale a pena notar que os pinos 9 e 3 no Arduino são habilitados para PWM, o que significa que podemos usá-los mais tarde para controlar a velocidade dos motores usando PWM.

Por fim, conectaremos nossos motores. Pegue um motor e conecte seus dois fios aos pinos OUT1 e OUT2 do L293D. Em seguida, conecte o segundo motor aos pinos OUT3 e OUT4. Não se preocupe muito com qual fio vai para qual pino de saída do motor; você pode trocá-los se o motor girar na direção oposta à esperada, pois não existe uma maneira única "certa" ou "errada" de conectá-los.

Aqui está uma tabela de referência rápida para as conexões dos pinos:

| Pino L293D | Conexão Arduino |
| ---------- | --------------- |
| GND        | GND             |
| ENA        | 9               |
| IN1        | 8               |
| IN2        | 7               |
| IN3        | 5               |
| IN4        | 4               |
| ENB        | 3               |

:Conexões do L293D com o Arduino

A imagem abaixo mostra o diagrama de fiação completo para esta configuração.

![Conexão do CI do driver do motor L293D com motores DC Arduino](./img/L293D/Conexão.png)

## Código de exemplo do Arduino

Aqui está um esboço simples do Arduino que mostra como controlar a direção e a velocidade de dois motores CC usando o driver de motor L293D e um Arduino. Você não precisa de nenhuma biblioteca especial para este esboço; ele usa apenas as funções básicas integradas do IDE do Arduino.

Este exemplo é uma ótima maneira de adquirir experiência prática com o L293D para controlar a velocidade e a direção de motores. Depois de entender isso, você poderá construir facilmente sistemas de controle de motores mais complexos, como os usados em robôs básicos ou carros de controle remoto.

```c++
// Motor A connections
int enA = 9;
int in1 = 8;
int in2 = 7;
// Motor B connections
int enB = 3;
int in3 = 5;
int in4 = 4;

void setup() {
  // Set all the motor control pins to outputs
  pinMode(enA, OUTPUT);
  pinMode(enB, OUTPUT);
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT);
  pinMode(in4, OUTPUT);

  // Turn off motors - Initial state
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);
  digitalWrite(in4, LOW);
}

void loop() {
  directionControl();
  delay(1000);
  speedControl();
  delay(1000);
}

// This function lets you control spinning direction of motors
void directionControl() {
  // Set motors to maximum speed
  digitalWrite(enA, HIGH);
  digitalWrite(enB, HIGH);

  // Turn on motor A & B
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
  digitalWrite(in3, HIGH);
  digitalWrite(in4, LOW);
  delay(2000);

  // Now change motor directions
  digitalWrite(in1, LOW);
  digitalWrite(in2, HIGH);
  digitalWrite(in3, LOW);
  digitalWrite(in4, HIGH);
  delay(2000);

  // Turn off motors
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);
  digitalWrite(in4, LOW);
}

// This function lets you control speed of the motors
void speedControl() {
  // Turn on motors
  digitalWrite(in1, LOW);
  digitalWrite(in2, HIGH);
  digitalWrite(in3, LOW);
  digitalWrite(in4, HIGH);

  // Accelerate from zero to maximum speed
  for (int i = 0; i < 256; i++) {
    analogWrite(enA, i);
    analogWrite(enB, i);
    delay(20);
  }

  // Decelerate from maximum speed to zero
  for (int i = 255; i >= 0; --i) {
    analogWrite(enA, i);
    analogWrite(enB, i);
    delay(20);
  }

  // Now turn off motors
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);
  digitalWrite(in4, LOW);
}
```

::: info 

Ao acelerar ou desacelerar um motor CC, você pode ouvir um zumbido, especialmente em valores de PWM mais baixos. Não se preocupe — isso é completamente normal. Isso acontece porque os motores CC precisam de uma certa quantidade mínima de tensão para começar a girar e, em valores de PWM baixos, a tensão pode não ser alta o suficiente para manter o motor funcionando sem problemas.

:::


### Explicação do código


No início do esboço, definimos quais pinos do Arduino serão usados para controlar o Motor A e o Motor B. Para o Motor A, temos um pino para habilitá-lo (permitindo-nos controlar sua velocidade com PWM) e dois pinos para controle de direção. Da mesma forma, para o Motor B, temos um pino de habilitação e dois pinos de controle de direção.

```c++
// Motor A connections
int enA = 9;
int in1 = 8;
int in2 = 7;

// Motor B connections
int enB = 3;
int in3 = 5;
int in4 = 4;

```
Na função `setup()`, configuramos todos os seis pinos de controle do motor como saídas, pois estamos enviando sinais do Arduino para o L293D. Também garantimos que ambos os motores estejam desligados, configurando todos os pinos de controle de direção para LOW. Isso garante que os motores não comecem a girar repentinamente quando o Arduino for ligado.

```c++
void setup() {
  // Set all the motor control pins to outputs
  pinMode(enA, OUTPUT);
  pinMode(enB, OUTPUT);
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT);
  pinMode(in4, OUTPUT);

  // Turn off motors - Initial state
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);
  digitalWrite(in4, LOW);
}
```

Na função `loop()`, chamamos duas funções personalizadas com um intervalo de um segundo entre elas. A primeira função é `directionControl()`, e a segunda é `speedControl()`.

```c++
void loop() {
  directionControl();
  delay(1000);
  speedControl();
  delay(1000);
}
```
Vamos analisar o que cada uma dessas funções faz.

A função `directionControl()` demonstra como controlar a direção de ambos os motores. Primeiro, ajustamos ambos os motores à velocidade máxima possível, configurando ambos os pinos de habilitação em nível ALTO. Em seguida, enviamos os sinais necessários aos pinos de controle de direção para fazer com que os motores A e B girem para frente. Após girarem nessa direção por dois segundos, transferimos os sinais para seus pinos de direção, o que faz com que ambos os motores invertam a direção de rotação por mais dois segundos. Por fim, paramos os motores configurando todos os pinos de controle de direção em nível BAIXO.

```c++
void directionControl() {
  // Set motors to maximum speed
  digitalWrite(enA, HIGH);
  digitalWrite(enB, HIGH);

  // Turn on motor A & B
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
  digitalWrite(in3, HIGH);
  digitalWrite(in4, LOW);
  delay(2000);

  // Now change motor directions
  digitalWrite(in1, LOW);
  digitalWrite(in2, HIGH);
  digitalWrite(in3, LOW);
  digitalWrite(in4, HIGH);
  delay(2000);

  // Turn off motors
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);
  digitalWrite(in4, LOW);
}
```

A função `speedControl()` demonstra como controlar a velocidade dos motores usando PWM. Começamos configurando os pinos de controle de direção para que ambos os motores girem na mesma direção. Em seguida, aumentamos lentamente a velocidade do motor, elevando gradualmente o valor de PWM de 0 a 255. Isso simula um efeito de aceleração. Assim que os motores atingem a velocidade máxima, invertemos o processo — diminuindo lentamente o valor de PWM de 255 para 0, o que faz com que os motores diminuam gradualmente a velocidade e parem. Por fim, paramos os motores configurando todos os pinos de controle de direção para BAIXO.

```c++
void speedControl() {
  // Turn on motors
  digitalWrite(in1, LOW);
  digitalWrite(in2, HIGH);
  digitalWrite(in3, LOW);
  digitalWrite(in4, HIGH);

  // Accelerate from zero to maximum speed
  for (int i = 0; i < 256; i++) {
    analogWrite(enA, i);
    analogWrite(enB, i);
    delay(20);
  }

  // Decelerate from maximum speed to zero
  for (int i = 255; i >= 0; --i) {
    analogWrite(enA, i);
    analogWrite(enB, i);
    delay(20);
  }

  // Now turn off motors
  digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);
  digitalWrite(in4, LOW);
}
```

## Referências


[^1]: https://lastminuteengineers.com/l293d-dc-motor-arduino-tutorial/

[^2]: https://lastminuteengineers-com.translate.goog/l293d-dc-motor-arduino-tutorial/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc


