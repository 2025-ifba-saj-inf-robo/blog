```upmath
\begin{tikzpicture}




% Tubo (condutor)
\draw[line width=2pt, rounded corners=10pt] 
  (0,1) -- (12,1) -- (12,-1) -- (0,-1) -- cycle;

% Macro para facilitar criação dos elétrons com setas
\newcommand{\eletron}[4]{
    \node [fill=blue!30, circle, draw] at (#1,#2)  {\textbf{e}}  edge[->, line width=1.5pt] (#3,#4);
}

% Vários elétrons com direções variadas
\eletron{1.2}{0.6}{0.5}{1}
\eletron{1.7}{-0.3}{2.5}{-0.8}
\eletron{2.8}{0.2}{2.1}{-0.1}
\eletron{3.5}{-0.6}{4.2}{-0.2}
\eletron{4.4}{0.5}{5.1}{1}
\eletron{5.3}{-0.4}{4.7}{-1.0}
\eletron{6.0}{0.3}{6.8}{-0.2}
\eletron{7.1}{-0.6}{6.4}{-0.9}
\eletron{7.8}{0.6}{8.5}{0.9}
\eletron{8.6}{-0.2}{9.3}{-0.7}
\eletron{9.5}{0.4}{10.2}{0.1}
\eletron{10.3}{-0.6}{10.9}{-0.3}

\end{tikzpicture}
```
