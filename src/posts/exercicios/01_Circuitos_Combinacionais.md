---
icon: dumbbell
date: 2025-04-29 9:10:11.00 -3
category:
  - exercicio
order: 1
---

# Exercícios 

1. **Projeto de Circuito Lógico para Controle de Bomba e Eletroválvula em um Sistema de Abastecimento**

    Desenvolva um **circuito lógico digital** que automatize o controle de uma bomba de água e uma **eletroválvula** em um sistema de abastecimento. A bomba será responsável por transferir água de um **reservatório no térreo** para uma **caixa d’água situada no topo** do edifício. O circuito deve garantir um funcionamento eficiente, evitando desperdício de água e possíveis falhas no abastecimento.  

   - Sensores de nível de água:
     - Sensor A: Detecta quando a **caixa d’água inferior** está cheia.  
     - Sensor B: Detecta quando a **caixa d’água inferior** está vazia.  
     - Sensor C: Detecta quando a **caixa d’água superior** está cheia.  
   - Bomba:
     - A bomba deve ser acionada **automaticamente** sempre que o nível da caixa d’água superior estiver **baixo** (**Sensor C**).
     - A bomba não pode ser acionada se a caixa inferior estiver **vazia** (**Sensor B**).  
     - A bomba deve ser desligada **automaticamente** quando a caixa superior atingir o **nível máximo permitido** (**Sensor C**).
     - A bomba **também deve ser desligada** caso não haja água suficiente na caixa inferior (**Sensor B**).
   - Controle da eletroválvula
     - A **eletroválvula** deve ser aberta para encher a **caixa d’água inferior**, garantindo o abastecimento da bomba.
     - A válvula **fecha automaticamente** quando a caixa inferior estiver **cheia** (**Sensor A ativado**).  
   1. Construção da Tabela-Verdade
      Liste todas as possíveis combinações das entradas **A, B e C** e determine as saídas correspondentes para **bomba** e **eletroválvula**.
   2. Definição das Expressões Lógicas
      Escreva as equações booleanas que representam a ativação/desativação da bomba e da eletroválvula.
   3. Representação do Circuito Lógico
      Utilize **portas lógicas digitais** (**AND, OR, NOT**) para implementar as expressões booleanas obtidas no passo anterior e represente o circuito usando um **diagrama esquemático**.  


2. **Circuito Lógico para Controle de Máquinas com Prioridade**
   
   Uma indústria possui quatro máquinas de alta potência, identificadas como Máquina 1, Máquina 2, Máquina 3 e Máquina 4. Por questões de segurança e consumo de energia, é permitido o funcionamento simultâneo de, no máximo, duas máquinas. Além disso, existe uma hierarquia de prioridade entre elas: Máquina 1 tem prioridade sobre a Máquina 2, que tem prioridade sobre a Máquina 3, que, por sua vez, tem prioridade sobre a Máquina 4.
   
   Elabore um circuito lógico para controlar o acionamento dessas máquinas, obedecendo às seguintes condições:
   - Cada máquina é acionada por uma entrada: A aciona a Máquina 1, B aciona a Máquina 2, C aciona a Máquina 3 e D aciona a Máquina 4.
   - O circuito deve garantir que nunca mais de duas máquinas estejam ligadas ao mesmo tempo.
   - Caso mais de duas entradas estejam ativadas simultaneamente, apenas as máquinas de maior prioridade devem permanecer ligadas.
   - Apresente o diagrama lógico do circuito, utilizando portas lógicas, e explique como o controle de prioridade e limitação de máquinas é realizado.
1. **Aquecedores de água solares**  
    Alguns aquecedores solares usam uma bomba para forçar a circulação da água. Nesses aquecedores, há dois sensores de temperatura: um localizado no interior de uma das placas e outro localizado no interior do boiler (reservatório de água quente).  
    
    Um circuito lógico que controla o acionamento da bomba recebe quatro sinais nesse tipo de sistema:  

   - **Sinal A**: nível ALTO sempre que a temperatura da placa estiver abaixo de 4 ºC, servindo para evitar o congelamento.  
   - **Sinal B**: nível ALTO sempre que a temperatura das placas estiver acima de 70 ºC, servindo para evitar sobreaquecimento.  
   - **Sinal C**: nível ALTO sempre que a diferença de temperatura entre a água das placas e a do boiler estiver acima de 5 ºC, servindo para forçar a circulação.  
   - **Sinal M**: nível BAIXO quando o sistema estiver operando em modo automático e nível ALTO se estiver operando em modo manual.  

    O circuito lógico citado deverá enviar um sinal de nível ALTO para o sistema de acionamento da bomba **sempre que o sinal M estiver em modo automático**, e ocorrer pelo menos um dos seguintes eventos:  
    - A temperatura das placas for inferior a 4 ºC;  
    - A temperatura das placas for superior a 70 ºC;  
    - A diferença entre ambas for superior a 5 ºC.  

   1. Qual é a equação lógica do sinal de saída do circuito lógico?  

      A) S = A.B.C + M  
      B) S = A.B.C.M  
      C) S = (A + B + C)M  
      D) S = A + B + C + M  
      E) S = (A + B + C)M  
