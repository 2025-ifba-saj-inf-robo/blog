```plantuml {kroki=true}

rectangle "CPU" as CPU2 #LightBlue{
  rectangle "Registradores" as R #LightBlue
  rectangle "Barreamento Interno" as BarreamentoI #LightBlue
  rectangle "ALU" as ALU #LightBlue
  rectangle "Unidade de Controle" as Controle #LightGreen
}

rectangle "Unidade de Controle" as Controle2 #LightGreen{
  rectangle "Logica de Sequencia" as LS #LightGreen
  rectangle "Memoria de Controle" as MC #LightGreen
  rectangle "Registradores de \nunidade de controle e \nCodificações " as RU #LightGreen
  
}


```


```upmath
\begin{circuitikz}
    \draw
    (0,0) to[battery, l=Fonte de alimentação, invert] (0,3)
    -- (2,3) to[lamp] (2,0) -- (0,0);
\end{circuitikz}
```

```tikz{kroki=true}
\documentclass{article}
\usepackage{tikz}
\usepackage{circuitikz}
\begin{document}

\begin{circuitikz}
    \draw
    (0,0) to[battery, l=Fonte de alimentação, invert] (0,3)
    -- (2,3) to[lamp] (2,0) -- (0,0);
\end{circuitikz}

\end{document}
```


```d2{kroki=true}
a -> b: {
  hidden: true
  style.stroke: red  // Apenas para teste, isso não será renderizado pois está oculto
}

```
