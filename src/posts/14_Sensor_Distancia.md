---
icon: pen-to-square
date: 2025-07-22 10:00:00.00 -3
category:
  - aula
  - prática
order: 14
---

# Sensor de Distância: Fundamentos, Funcionamento e Aplicações



## Introdução

O sensor de distância é um componente essencial em muitos sistemas eletrônicos, permitindo medir a distância entre o sensor e um objeto. Ele é amplamente utilizado em robótica, automação industrial, veículos autônomos e dispositivos de segurança. 

## O que é um Sensor de Distância?
Um sensor de distância é um dispositivo que detecta a presença de objetos e mede a distância até eles. Existem vários tipos de sensores de distância, incluindo ultrassônicos, infravermelhos e a laser. Cada tipo utiliza princípios físicos diferentes para medir a distância.

### Tipos Comuns de Sensores de Distância
- **Sensor Ultrassônico:** Emite ondas sonoras de alta frequência e mede o tempo que leva para o eco retornar após refletir em um objeto.
- **Sensor Infravermelho:** Emite luz infravermelha e mede a intensidade da luz refletida para calcular a distância.
- **Sensor a Laser:** Emite um feixe de laser e mede o tempo que leva para o feixe refletido retornar ao sensor.  
- **Sensor de Efeito Hall:** Mede a distância com base na variação do campo magnético.

### Estrutura Física
Um sensor de distância geralmente consiste em um emissor (que pode ser um transdutor ultrassônico, LED infravermelho ou laser) e um receptor (microfone, fotodetector ou fototransistor). O emissor envia um sinal, e o receptor capta o sinal refletido de um objeto próximo.

### Exemplo de uso 

<iframe width="725" height="453" src="https://www.tinkercad.com/embed/jPl2qa2ybbZ?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>

Nesse projeto o sensor de distância é utilizado para medir a distância entre o sensor e um objeto, como uma parede ou um obstáculo. O sensor envia um sinal ultrassônico e calcula a distância com base no tempo que leva para o eco retornar.

```c
// C++ code
//
int distancia = 0;

int limiteVerde = 0;

int limiteAmarelo = 0;

long readUltrasonicDistance(int triggerPin, int echoPin)
{
  pinMode(triggerPin, OUTPUT);  // Clear the trigger
  digitalWrite(triggerPin, LOW);
  delayMicroseconds(2);
  // Sets the trigger pin to HIGH state for 10 microseconds
  digitalWrite(triggerPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(triggerPin, LOW);
  pinMode(echoPin, INPUT);
  // Reads the echo pin, and returns the sound wave travel time in microseconds
  return pulseIn(echoPin, HIGH);
}

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(13, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(11, OUTPUT);
  Serial.begin(9600);

  limiteVerde = 180;
  limiteAmarelo = 100;
  digitalWrite(LED_BUILTIN, LOW);
  digitalWrite(13, LOW);
  digitalWrite(12, LOW);
  digitalWrite(11, LOW);
}

void loop()
{
  Serial.println(distancia);
  distancia = 0.01723 * readUltrasonicDistance(2, 2);
  if (distancia >= limiteVerde) {
    // Ligar o Verde
    digitalWrite(11, HIGH);
    digitalWrite(12, LOW);
    digitalWrite(13, LOW);
  }
  if (distancia < limiteVerde) {
    // Ligar o Amarelo
    digitalWrite(11, HIGH);
    digitalWrite(12, LOW);
    digitalWrite(13, HIGH);
  }
  if (distancia < limiteAmarelo) {
    // Ligar o Vermelho
    digitalWrite(11, LOW);
    digitalWrite(12, LOW);
    digitalWrite(13, HIGH);
  }
  delay(10); // Delay a little bit to improve simulation performance
}

```
A cor do LED indica a distância medida pelo sensor:
- **Verde:** Distância maior que 180 cm.
- **Amarelo:** Distância entre 100 cm e 180 cm.
- **Vermelho:** Distância menor que 100 cm.

