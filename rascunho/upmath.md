
```upmath
\begin{circuitikz}
  \node[sground, rotate=180] (vcc) at (0,0) {};
  \node[cground] (gnd) at (0,-5) {};

  \draw (vcc) -- (2,0) 
  \draw (2,0) to [cute open switch] (2,-2.5) 
  \draw (vcc) -- (-2,0)
  \draw (-2,0) to [cute open switch] (-2,-2.5) 
  \draw (-2,-2.5) to [Telmech=M,n=motor] (2,-2.5)
  \draw (gnd) -- (2,-5) 
  \draw (2,-5) to [cute open switch] (2,-2.5) 
  \draw (gnd) -- (-2,-5) 
  \draw (-2,-5) to [cute open switch] (-2,-2.5) 
  
\end{circuitikz}
```