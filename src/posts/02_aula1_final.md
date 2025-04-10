---
article: false
---

# Teste novo plugin


<NumberConverter />

```upmath
\begin{circuitikz}
\draw(0,0) node[above] {$A$} to[short, o-*] ++(0.7,0)
coordinate (A) to[generic, *-*] ++(2,0)
coordinate (B) to[generic, *-*] ++(2,0)
coordinate (E) to[generic, *-*] ++(2,0)
coordinate (D) to[short, *-o] ++(0.7,0) node[above] {$B$};
\draw (A)-- ++(0,-0.7)-| (E) (B)-- ++(0,0.7)-| (D);
\end{circuitikz}
```

```upmath
\frac{a}{b}
```

```upmath
\usetikzlibrary {circuits.logic.US}
\begin{tikzpicture}[circuit logic US]
  \matrix[column sep=7mm]
  {
    \node (i0) {0}; &                            & \\
                    & \node [and gate] (a1) {};  & \\
    \node (i1) {0}; &                            & \node [or gate] (o) {};\\
                    & \node [nand gate] (a2) {}; & \\
    \node (i2) {1}; &                            & \\
  };
  \draw (i0.east) -- ++(right:3mm) |- (a1.input 1);
  \draw (i1.east) -- ++(right:3mm) |- (a1.input 2);
  \draw (i1.east) -- ++(right:3mm) |- (a2.input 1);
  \draw (i2.east) -- ++(right:3mm) |- (a2.input 2);
  \draw (a1.output) -- ++(right:3mm) |- (o.input 1);
  \draw (a2.output) -- ++(right:3mm) |- (o.input 2);
  \draw (o.output) -- ++(right:3mm);
\end{tikzpicture}
```
