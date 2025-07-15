---
icon: pen-to-square
date: 2025-06-17 11:00:00.00 -3
category:
    - aula
order: 10
---

# Programação em Blocos no Tinkercad

[^MAKERHERO]

A programação em blocos no Tinkercad oferece uma maneira intuitiva de criar programas para controlar seus circuitos eletrônicos. Utilizando uma interface gráfica, você pode arrastar e soltar blocos de código para construir a lógica do seu projeto sem a necessidade de escrever código manualmente.

Para exemplificar, iremos projetar um semáforo no Tinkercad.

## Como fazer um semáforo no Tinkercad?
O circuito que iremos utilizar está ilustrado na imagem abaixo:

![Circuito do Semáforo no Tinkercad](https://www.makerhero.com/wp-content/uploads/2024/06/guia-tinkercad-p-09.1.png.webp)

- Conecte o LED verde (pedestres) à porta digital 12 do Arduino.
- Conecte o LED vermelho (pedestres) à porta digital 11 do Arduino.
- Conecte o LED verde (veículos) à porta digital 10 do Arduino.
- Conecte o LED amarelo (veículos) à porta digital 9 do Arduino.
- Conecte o LED vermelho (veículos) à porta digital 8 do Arduino.
- Certifique-se de que os componentes estão corretamente aterrados e alimentados, usando um resistor de 330Ω entre o terminal positivo dos LEDs e os pinos digitais do Arduino.
- Vá para a aba de “Código” e selecione “Blocos + Texto” como modo de edição. Você verá uma área de trabalho onde poderá arrastar blocos de código.


A ligação dos LEDs do semáforo com o Arduino ficará assim:

![Tabela](https://www.makerhero.com/wp-content/uploads/2024/06/guia-tinkercad-p-09.2.png.webp)

## Funcionamento do semáforo no Tinkercad

O sistema coordenado de semáforos para pedestre e veículos é essencial para garantir a segurança de todos no trânsito, prevenindo acidentes e organizando o fluxo de veículos e pedestres de maneira eficiente. O sistema funciona da seguinte forma:

![Semáforo veículos e pedestres](https://www.makerhero.com/wp-content/uploads/2024/06/guia-tinkercad-p-09.3-1024x498.png.webp)


- Quando o semáforo para veículos estiver verde, o semáforo para pedestres estará vermelho.
- Quando o semáforo para veículos mudar de verde para amarelo, o semáforo para pedestre ainda estará vermelho.
- Quando o semáforo para veículos estiver vermelho, o semáforo de pedestre estará verde.
- Um pouco antes do semáforo para veículos mudar de vermelho para verde, o semáforo para pedestres irá piscar a lâmpada vermelha.

Depois disso, o ciclo recomeça. Portanto, Teremos 4 fases:

![Fases](https://www.makerhero.com/wp-content/uploads/2024/06/guia-tinkercad-p-09.4-1024x498.png.webp)

Essa divisão por fases irá ajudar a configurar os blocos para o funcionamento do semáforo no Tinkercad. 

## Programa em blocos para semáforo

Para criar o código em blocos do semáforo no Tinkercad, dividiremos a lógica em 4 fases, como indicado na tabela acima:

A primeira delas é acender o LED verde dos veículos e o LED vermelho dos pedestres. Todos os outros LEDs devem estar desligados.

## Referências

[^MAKERHERO]: Adaptado de: [Como fazer um semáforo no Tinkercad: Programação em blocos - MakerHero](https://www.makerhero.com/guia/tinkercad/semaforo-programacao-em-blocos/)
