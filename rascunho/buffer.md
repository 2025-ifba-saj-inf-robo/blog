
```upmath
\ctikzset{logic ports=ieee, logic ports/fill=gray!30}
\begin{circuitikz}
  % Entradas
  \node (A) at (0,2) {A};
  \node (B) at (0,0.88) {B};
  % XOR para A e B
  \node[xnor port, scale=2] (xor1) at (3,1.45) {};
  \draw (A.east) -- (xor1.in 1);
  \draw (B.east) -- (xor1.in 2);
  % Saída
  \draw (xor1.out) -- ++(0.7,0) node[right]{$A \oplus B$};
\end{circuitikz}
```




```upmath
\ctikzset{logic ports=ieee, logic ports/fill=gray!30}
\tikzset{small inline not/.style={inline not, /tikz/circuitikz/logic ports/scale=0.5}}
\begin{circuitikz}
    \node [and port](and1) at (0,0) {};
    \draw (and1.in 1) -- ++(-3,0) node[left, red](labelA){A};
    \draw (and1.in 2) -- ++(-3,0) node[left, red](labelC){C};
    \node [and port](and2) at (0,-2) {};
    \draw (and2.in 2) -- ++(-3,0) node[left, red](labelB){B};
    \draw (labelA.east) ++(0.5,0) node[circ]{} |- (and2.in 1);
    \node [and port](and3) at (0,-4) {};
    \draw (labelB.east) ++(0.5,0) node[circ]{} |- (and3.in 1);
    \draw (labelC.east) ++(1,0) node[circ]{} -- ++(0,-4)
    to[small inline not] ++(2,0);
    \node [or port](or1) at (3,-1) {};
    \draw (and1.out) -- (or1.in 1);
    \draw (and2.out) -- (or1.in 2);
    \node [and port](and4) at (6,-2) {};
    \draw (or1.out) -- (and4.in 1);
    \draw (and3.out) -- (and4.in 2);
    \draw (and4.out) -- ++(0.5,0) node[right, red](labelY){Y};
\end{circuitikz}
```


```upmath
\ctikzset{logic ports=ieee, logic ports/fill=gray!30}
\tikzset{small inline not/.style={inline not, /tikz/circuitikz/logic ports/scale=0.5}}
\begin{circuitikz}[american]
    \node (labelA) at (7.35,0.28) {$A$};
    \node [and port](and2) at (12,-2) {};
    \draw (and2.in 2) -- ++(-3,0) node[left](labelB){$B$};
    \draw (labelA.east) ++(1,0) node[circ]{} -- ++(0,-2) to[small inline not] ++(2,0);
    \draw (and2.out) -- ++(0.5,0) node[right, red](labelS1){$S_2$};
    \draw (labelA.east) -- ++(5,0) node[right, red](labelS2){$S_1$};
\end{circuitikz}
```