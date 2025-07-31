---
icon: pen-to-square
date: 2025-07-29 10:00:00.00 -3
category:
  - aula
  - prática
order: 15
---

# Ponte H: Fundamentos, Funcionamento e Aplicações

## Introdução
A ponte H é um circuito eletrônico fundamental para controlar motores de corrente contínua (CC) e motores de passo. Ela permite inverter a direção do motor e controlar sua velocidade, sendo amplamente utilizada em robótica, automação e projetos de controle de movimento.
## O que é uma Ponte H?
A ponte H é um arranjo de transistores ou relés que permite controlar a direção de rotação de um motor CC. O nome "ponte H" vem do arranjo dos componentes, que se assemelha à letra "H".

### Estrutura Física

Uma ponte H típica consiste em quatro transistores (ou relés) dispostos em  um formato de "H". Dois transistores controlam a corrente em uma direção, enquanto os outros dois controlam a corrente na direção oposta. Abaixo está um diagrama simplificado de uma ponte H:

<figure>
  
```upmath
\begin{circuitikz}
  \node[sground, rotate=180] (vcc) at (0,0) {};
  \node[cground] (gnd) at (0,-5) {};

  \draw (vcc) -- (2,0) 
  \draw (2,0) to [cute open switch,n=S2] (2,-2.5) 
  \draw (vcc) -- (-2,0)
  \draw (-2,0) to [cute open switch,n=S1] (-2,-2.5) 
  \draw (-2,-2.5) to [Telmech=M,n=motor] (2,-2.5)
  \draw (gnd) -- (2,-5) 
  \draw (2,-5) to [cute open switch,n=S4] (2,-2.5) 
  \draw (gnd) -- (-2,-5) 
  \draw (-2,-5) to [cute open switch,n=S3] (-2,-2.5) 

  \node at (-3,-1.3) {S1};
  \node at (3,-1.3) {S2};
  \node at (-3,-3.5) {S3};
  \node at (3,-3.5) {S4};
  
\end{circuitikz}
```

<figcaption>Ponte H</figcaption>

</figure>

### Funcionamento

Para controlar a direção do motor, os transistores S1 e S4 são ativados para permitir a passagem de corrente em uma direção, enquanto S2 e S3 são desativados. Para inverter a direção, S2 e S3 são ativados, enquanto S1 e S4 são desativados. Isso permite que o motor gire em ambas as direções.

<figure>

```upmath
\begin{circuitikz}
  \node[sground, red, rotate=180] (vcc) at (0,0) {};
  \node[cground, red] (gnd) at (0,-5) {};

  \draw (vcc) -- (2,0) 
  \draw (2,0) to [cute open switch,n=S2] (2,-2.5) 
  \draw[red,line width=2pt] (vcc) -- (-2,0)
  \draw[red,line width=2pt] (-2,0) to [cute closed switch,n=S1] (-2,-2.5) 
  \draw[red,line width=2pt] (-2,-2.5) to [Telmech=M,n=motor] (2,-2.5)
  \draw[red,line width=2pt] (gnd) -- (2,-5) 
  \draw[red,line width=2pt] (2,-5) to [cute closed switch,n=S4] (2,-2.5) 
  \draw (gnd) -- (-2,-5) 
  \draw (-2,-5) to [cute open switch,n=S3] (-2,-2.5) 

  \node at (-3,-1.3) {S1};
  \node at (3,-1.3) {S2};
  \node at (-3,-3.5) {S3};
  \node at (3,-3.5) {S4};
  
\end{circuitikz}
```
<figcaption>Ativação do motor</figcaption>

</figure>

### Inversão da Direção do Motor

<figure>

```upmath
\begin{circuitikz}
  \node[sground,red, rotate=180] (vcc) at (0,0) {};
  \node[cground,red] (gnd) at (0,-5) {};

  \draw[red,line width=2pt] (vcc) -- (2,0) 
  \draw[red,line width=2pt] (2,0) to [cute closed switch,n=S2] (2,-2.5) 
  \draw (vcc) -- (-2,0)
  \draw (-2,0) to [cute open switch,n=S1] (-2,-2.5) 
  \draw[red,line width=2pt] (-2,-2.5) to [Telmech=M,n=motor] (2,-2.5)
  \draw (gnd) -- (2,-5) 
  \draw (2,-5) to [cute open switch,n=S4] (2,-2.5) 
  \draw[red,line width=2pt] (gnd) -- (-2,-5) 
  \draw[red,line width=2pt] (-2,-5) to [cute closed switch,n=S3] (-2,-2.5) 

  \node at (-3,-1.3) {S1};
  \node at (3,-1.3) {S2};
  \node at (-3,-3.5) {S3};
  \node at (3,-3.5) {S4};
  
\end{circuitikz}
```
<figcaption>Inversão do motor</figcaption>
</figure>



[Ponte H com circuito L293D](https://www.tinkercad.com/things/28tQwP4wU7H-ponte-h)


## Referências
- [AULA 7 - Microcontroladores - IFSC](https://wiki.ifsc.edu.br/mediawiki/index.php/AULA_7_-_Microcontroladores_-_Eng)
- Datasheet L298N, L293D


