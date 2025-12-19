---
title: Chapter12 Power Functions – Cones
lang: en-US
---

# Module 12-01 Power Functions

## 1.Definition
- $\boldsymbol{y=x^\alpha}$, whose domain varies depending on the value of $\alpha$.
  However, __regardless of $\boldsymbol{\alpha}$__,
  the function is __always defined on $\boldsymbol{(0, +\infty)}$__,
  and its graph __passes through the point $\boldsymbol{(1, 1)}$__.
  When $\boldsymbol{\alpha>0}$, the graph also __passes through the origin__.
  - __First quadrant__: always has a graph
  - __Fourth quadrant__: never has a graph
  - __Second quadrant__: has a graph when $\boldsymbol{\alpha}$ is even (symmetric about the y-axis)
  - __Third quadrant__: has a graph when $\boldsymbol{\alpha}$ is odd (symmetric about the origin)
  - $\boldsymbol{\alpha>1}$: rises rapidly
  - $\boldsymbol{0\lt\alpha\lt1}$: rises slowly
  - $\boldsymbol{\alpha<1}$: decreases inversely  
  ![Power function three cases of α in first quadrant.svg](../../public/math/Core%20Course/Power%20function%20three%20cases%20of%20%CE%B1%20in%20first%20quadrant.svg)  
  <iframe src="https://www.desmos.com/calculator/j7x2gvljoh?embed" width="500" height="380" style="border: 1px solid #ccc" />
- Definitions of __exponential and power functions__  
  ::: wrap  
  $
  \begin{array}{ll}
  y=x^3 & y=x^\alpha \textsf{ (power function)} \\
  y=3^x & y=\alpha^x \textsf{ (exponential function)} \\
  \end{array}
  $
  :::  

## 2.Overview of Power Function Properties Table
<PowerFunctionTable/>

- When $\boldsymbol{\alpha>0}$, it can be divided into __three types__ based on symmetry:
  __odd function__ (graph in the first and third quadrants),
  __even function__ (graph in the first and second quadrants),
  __neither odd nor even__ (graph only in the first quadrant).
  1. $m$ is odd, $n$ is odd
     - Graph of multiple functions  
       <iframe src="https://www.desmos.com/calculator/z4by6wgqfv?embed" width="460" height="300" style="border: 1px solid #ccc" />
     - Properties  
       - The graph appears in __the first and third quadrants__.
       - When both $\boldsymbol{m}$ and $\boldsymbol{n}$ are odd,
         the function is __symmetric about the origin__,
         i.e. __$\boldsymbol{f(-x)=-f(x)}$, an odd function__.
         - For example, $\frac{5}{3} \lor \frac{7}{5} \lor \frac{1}{3}$: when __both numerator and denominator are odd__, the function is __necessarily odd__.
       - $\alpha>1$: __rises rapidly__, e.g. $\alpha=\frac{7}{5}=1.4$
       - $0\lt\alpha\lt1$: __rises slowly__, e.g. $\alpha=\frac{1}{3}\approx0.33$
  2. $m$ is even, $n$ is odd
     - Graph of multiple functions  
       <iframe src="https://www.desmos.com/calculator/os3d53cfbj?embed" width="460" height="300" style="border: 1px solid #ccc" />
     - Properties  
       - The graph appears in __the first and second quadrants__.
       - When the numerator $\boldsymbol{m}$ is even,
         the function is __symmetric about the y-axis__,
         i.e. __$\boldsymbol{f(-x)=f(x)}$, an even function__.
       - Can be rewritten as __an even power form__  
         ::: wrap  
         $
         \begin{array}{ll}  
         y=x^\frac{2}{3} \\
         x^{\frac{1}{3}\cdot2} \\
         (a^m)^n=a^{m\cdot n} & \textsf{power of a power rule} \\
         x^{\frac{1}{3}\cdot2}=(x^\frac{1}{3})^2 \\
         \end{array}
         $  
         :::
  3. $m$ is odd, $n$ is even
     - Function graph  
       <iframe src="https://www.desmos.com/calculator/jvmndyrlhf?embed" width="460" height="300" style="border: 1px solid #ccc" />
     - Properties  
       - The graph appears only in __the first quadrant__.
       - When the denominator $\boldsymbol{n}$ is even,
         the graph has __no symmetry__;
         it is __a neither odd nor even function__.
       - ###### Can be rewritten as __an even root form__.  
         ::: wrap  
         $
         \begin{array}{ll}  
         y=x^\frac{3}{4} \\
         a^\frac{m}{n}=\sqrt[n]{a^m} & \textsf{rational exponent rule} \\
         x^\frac{3}{4}=\sqrt[4]{x^3} & x\ge0 \\
         \end{array}
         $  
         :::

- When $\boldsymbol{\alpha<0}$, it can be divided into __three types__ based on symmetry:
  __odd function__ (graph in the first and third quadrants),
  __even function__ (graph in the first and second quadrants),
  __neither odd nor even__ (graph only in the first quadrant).
  1. $m$ is odd, $n$ is odd
     - Function graph  
       <iframe src="https://www.desmos.com/calculator/givdh77tix?embed" width="460" height="300" style="border: 1px solid #ccc" />
     - Properties
       - $\alpha<1$: __decreases inversely__;
         the graph is __a curve__ where, __as $\boldsymbol{x}$ increases__,
         the function value $\boldsymbol{y}$ gradually __decreases and approaches $\boldsymbol{0}$__.
  2. $m$ is even, $n$ is odd
     - Function graph  
       <iframe src="https://www.desmos.com/calculator/l3elhvrzx7?embed" width="460" height="300" style="border: 1px solid #ccc" />
  3. $m$ is odd, $n$ is even
     - Function graph  
       <iframe src="https://www.desmos.com/calculator/n01tjrdix9?embed" width="460" height="300" style="border: 1px solid #ccc" />

- Parity rules of power functions
  - When both __the numerator $\boldsymbol{m}$__ and __the denominator $\boldsymbol{n}$__ are odd,
    __the function is odd__;  
    when __the numerator $\boldsymbol{m}$__ is even,
    __the function is even__.
  - When __the denominator $\boldsymbol{n}$__ is even,
    __the function is neither odd nor even__.  
    Its domain must __satisfy $\boldsymbol{\ge0}$__,
    since [__an even root requires $\boldsymbol{x\ge0}$__](/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#can-be-rewritten-as-an-even-root-form)

## 3.Focus 1
__The Power functions__  
- When dealing with power functions,
  analyze them using __the properties table of power functions__ and __their definition__.

### $\fbox{1}\:$Given the power function $\small f(x)=k\cdot x^\alpha$ passes through the point $\small \left(\frac{1}{2}, \frac{\sqrt{2}}{2}\right)$, find $\small k+\alpha$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 2 &
\textsf{(B)} \: \frac{5}{2} &
\textsf{(C)} \: \frac{7}{2} &
\textsf{(D)} \: 1 &
\textsf{(E)} \: \frac{3}{2} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
y=x^\alpha \Longrightarrow k=1 \\
f(\frac{1}{2})=\frac{1}{2}^\alpha=\frac{\sqrt{2}}{2} \\
\frac{\sqrt{2}}{2}\cdot\frac{\sqrt{2}}{\sqrt{2}}=\frac{2}{2\sqrt{2}}=\frac{1}{\sqrt{2}} \\
\frac{1}{\sqrt{2}}=\frac{1}{2^\frac{1}{2}} & a^\frac{m}{n}=\sqrt[n]{a^m} \\
\frac{1}{2^\frac{1}{2}}=2^{-\frac{1}{2}} & a^{-n}=\frac{1}{a^n}\\
2^{-\frac{1}{2}}=(2^{-1})^\frac{1}{2} & (a^m)^n=a^{m\cdot n}\\
(\frac{1}{2})^\frac{1}{2} \Longrightarrow \alpha=\frac{1}{2} \\
k+\alpha=1+\frac{1}{2}=\frac{3}{2} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $k+\alpha=\frac{3}{2}$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  y=x^\alpha & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_1-definition}{\textsf{standard power function definition}} \\
  a^\frac{m}{n}=\sqrt[n]{a^m} & \textsf{rational exponent rule} \\
  a^{-n}=\frac{1}{a^n} & \textsf{negative exponent rule} \\
  (a^m)^n=a^{m\cdot n} & \textsf{power of a power rule} \\
  \end{array}
  >$

  :::
---

### $\fbox{2}\:$Given the power function $\small y=(m^2-3m+3)x^{m^2-m-2}$, if its graph does not pass through the origin, how many possible values does $\small m$ have $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 0 &
\textsf{(B)} \: 1 &
\textsf{(C)} \: 2 &
\textsf{(D)} \: 3 &
\textsf{(E)} \: \infty & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
y=x^\alpha \Longrightarrow m^2-3m+3=1 \\
m^2-3m+2=0 \\
(m-1)(m-2)=0 \\
m=1 \lor 2 \\
y=x^{1-1-2} & \textsf{substitute }m=1 \\
x^{-2} & x\ne0 \textsf{ (nonzero denominator)} \\
y=x^{4-2-2} & \textsf{substitute }m=2 \\
x^0 & x\ne0 \textsf{ (}x^0 = 1\textsf{)} \\
\end{array}
$  
:::  
![Question power functions figure Q-2 solve-1.svg](../../public/math/Core%20Course/Question%20power%20functions%20figure%20Q-2%20solve-1.svg)  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $y=\frac{1}{x^2},y=1$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  y=x^\alpha & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_1-definition}{\textsf{standard power function definition}} \\
  a^{-n}=\frac{1}{a^n} & \textsf{negative exponent rule} \\
  \end{array}
  >$

  :::
---

### $\fbox{3}\:$Given the power functions $\small f(x)=x^\alpha$ and $\small g(x)=x^\beta$, where $\small \alpha\gt\beta\gt0$, how many of the following statements are correct $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(1)} \: \textsf{the graphs of }f(x)\textsf{ and }g(x)\textsf{ both pass through the point }(1, 1) & \\
\textsf{(2)} \: \textsf{the graphs of }f(x)\textsf{ and }g(x)\textsf{ both pass through the point }(-1, 1) & \\
\textsf{(3)} \: \textsf{on the interval }[1, +\infty)\textsf{, }f(x)\textsf{ increases faster} & \\
\textsf{(4)} \: \textsf{on the interval }[1, +\infty)\textsf{, }g(x)\textsf{ increases faster} & \\
\textsf{(A)} \: 0 & \\
\textsf{(B)} \: 1 & \\
\textsf{(C)} \: 2 & \\
\textsf{(D)} \: 3 & \\
\textsf{(E)} \: 4 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question power functions figure Q-3 solve-1.svg](../../public/math/Core%20Course/Question%20power%20functions%20figure%20Q-3%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{let }\alpha=2 \quad \beta=1 \\
  f(2)=x^2 \\
  g(1)=x \\
  \textsf{(1)} \: \,✅\;\\
  \textsf{(2)} \: \,❌\;\\
  \textsf{(3)} \: \,✅\;\\
  \textsf{(4)} \: \,❌\;\\
  \end{array}
  $  
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\textsf{(2)},\textsf{(3)}$, so choose $C$.

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  y=x^\alpha & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_1-definition}{\textsf{standard power function definition}} \\
  \end{array}
  >$

  :::
---

### $\fbox{4}\:$Among the following functions, how many have different domains and ranges $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(1)} \: y=x^\frac{1}{3} & 
\textsf{(2)} \: y=x^\frac{5}{3} & 
\textsf{(3)} \: y=x^\frac{1}{6} & 
\textsf{(4)} \: y=x^\frac{2}{3} & \\
\end{array}
$  
$
\begin{array}{lllll}
\textsf{(A)} \: 0 &  
\textsf{(B)} \: 1 &
\textsf{(C)} \: 2 &
\textsf{(D)} \: 3 &
\textsf{(E)} \: 4 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{(1)} \: f(\mathbb{R})=\mathbb{R} \,❌\;\\
\textsf{(2)} \: f(\mathbb{R})=\mathbb{R} \,❌\;\\
\textsf{(3)} \: x^\frac{1}{6}=\sqrt[6]{x}\quad f([0, +\infty))=[0, +\infty) \,❌\;\\
\textsf{(4)} \: f(\mathbb{R})=[0, +\infty) \,✅\;\\
\end{array}
$  
:::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $\textsf{(4)}$, so choose $B$.

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  a^\frac{m}{n}=\sqrt[n]{a^m} & \textsf{rational exponent rule} \\
  \end{array}
  >$

  :::
---

### $\fbox{5}\:$The graph of the power function $\small y=f(x)$ passes through the point $\small (2, \sqrt{2})$. Find the smallest integer in the range of the function $\small y=x-f(x)$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: -1 &
\textsf{(B)} \: 1 &
\textsf{(C)} \: -2 &
\textsf{(D)} \: 2 &
\textsf{(E)} \: 0 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
y=f(x)=x^\alpha \\
2^\alpha=\sqrt{2} & \textsf{substitute }(2, \sqrt{2}) \\
\sqrt{2}=2^\frac{1}{2} \\
2^\frac{1}{2} \Longrightarrow \alpha=\frac{1}{2} \\
f(x)=x^\frac{1}{2}=\sqrt{x} \\
y=x-f(x)=x-\sqrt{x} \\
\textsf{let }t=\sqrt{x} & x\ge0 \\
y=t^2-t \\
x=-\frac{b}{2a}=\frac{1}{2} \\
\frac{1}{2}=0.5\ge0 & \textsf{verify }x\ge0 \\
(\frac{1}{2})^2-\frac{1}{2} & \textsf{substitute }x=\frac{1}{2} \\
\frac{1}{4}-\frac{1}{2}=-\frac{1}{4} \\
[-\frac{1}{4}, +\infty) \Longrightarrow 0 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $[-\frac{1}{4}, +\infty) \Longrightarrow 0$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  y=x^\alpha & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_1-definition}{\textsf{standard power function definition}} \\
  a^\frac{m}{n}=\sqrt[n]{a^m} & \textsf{rational exponent rule} \\
  x=-\frac{b}{2a} & \href{/math/0%20Core%20Course/15%20Chapter3%20polynomials%20rational%20expressions%20functions%20Module2%20rational%20expressions%20Module3%20quadratic%20functions.html#axis-of-symmetry}{\textsf{axis of symmetry}} \\
  \end{array}
  >$

  :::
---

### $\fbox{6}\:$Given the function $\small f(x)=(x^2-4x+3)^\frac{3}{2}$, find the smallest integer in its increasing interval.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 3 &
\textsf{(B)} \: 4 &
\textsf{(C)} \: 5 &
\textsf{(D)} \: 6 &
\textsf{(E)} \: \nexists & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
g(x)=x^2-4x+3 \\
f(x)=g(x)^\frac{3}{2}=\sqrt{g(x)^3} & g(x)\ge0 \\
x^2-4x+3\ge0 \\
x^2-4x+3\Rightarrow(x-1)(x-3)=0 \\
x=1 \lor 3 \\
\textsf{parabola analysis} \\
1>0\textsf{:}\, \textsf{opens upward} \\
\textsf{roots}\textsf{:}\, \textsf{intersects x-axis at }x_1=1\textsf{ and }x_2=3 \\
\textsf{range}\textsf{:}\, f(x)\ge0\textsf{ outside the two roots} \\
f(x)\ge0 \longrightarrow x\le1 \lor x\ge3 \\
\textsf{increasing interval}=x\ge3 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $x\ge3$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  a^\frac{m}{n}=\sqrt[n]{a^m} & \textsf{rational exponent rule} \\
  \end{array}
  >$

  :::
- Monotonicity of the composite function $y=f(g(x))$  
  > <br/>
  >
  >|        $\boldsymbol{g(x)}$         |        $\boldsymbol{f(x)}$         |         $\boldsymbol{y}$          |
  >|:----------------------------------:|:----------------------------------:|:---------------------------------:|
  >|  Domain ($\boldsymbol{\uparrow}$)  |  Domain ($\boldsymbol{\uparrow}$)  |  Range ($\boldsymbol{\uparrow}$)  |
  >| Domain ($\boldsymbol{\downarrow}$) | Domain ($\boldsymbol{\downarrow}$) |  Range ($\boldsymbol{\uparrow}$)  |
  >|  Domain ($\boldsymbol{\uparrow}$)  | Domain ($\boldsymbol{\downarrow}$) | Range ($\boldsymbol{\downarrow}$) |
  >| Domain ($\boldsymbol{\downarrow}$) |  Domain ($\boldsymbol{\uparrow}$)  | Range ($\boldsymbol{\downarrow}$) |
---

### $\fbox{7}\:$Given the power function $\small f(x)=(m^2-4m+4)x^{m^2-2m}$ is increasing on $\small (0, +\infty)$, how many integer values of $\small m$ satisfy this condition $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 0 &
\textsf{(B)} \: 1 &
\textsf{(C)} \: 2 &
\textsf{(D)} \: 3 &
\textsf{(E)} \: \infty & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
y=x^\alpha \Longrightarrow m^2-4m+4=1 \\
m^2-4m+3=0 \\
(m-1)(m-3)=0 \\
m=1 \lor 3 \\
f(x)=x^{1-2} & \textsf{substitute }m=1 \\
x^{-1}=\frac{1}{x} \\
\frac{1}{x} \longrightarrow \textsf{decreasing on }(0, +\infty) \\
f(x)=x^{9-6} & \textsf{substitute }m=3 \\
x^3 \longrightarrow \textsf{increasing on }(0, +\infty) \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $m=3$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  y=x^\alpha & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_1-definition}{\textsf{standard power function definition}} \\
  a^{-n}=\frac{1}{a^n} & \textsf{negative exponent rule} \\
  \end{array}
  >$

  :::
---

### $\fbox{8}\:$Given the power function $\small f(x)=(8m^2-2m)x^m$ is increasing on $\small (0, +\infty)$, find $\small f(4)$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 6 &
\textsf{(B)} \: 4 &
\textsf{(C)} \: 2 &
\textsf{(D)} \: 3 &
\textsf{(E)} \: 8 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
y=x^\alpha \Longrightarrow 8m^2-2m=1 \\
8m^2-2m-1=0 \\
(2m-1)(4m+1)=0 \\
m=\frac{1}{2} \lor -\frac{1}{4} \\
f(x)=x^\frac{1}{2} & \textsf{substitute }m=\frac{1}{2} \\
x^\frac{1}{2} \longrightarrow \textsf{increasing on }(0, +\infty) \\
f(x)=x^{-\frac{1}{4}} & \textsf{substitute }m=-\frac{1}{4} \\
x^{-\frac{1}{4}} \longrightarrow \textsf{decreasing on }(0, +\infty) \\
f(4)=4^\frac{1}{2}=\sqrt{4}=2 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $f(4)=2$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  y=x^\alpha & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_1-definition}{\textsf{standard power function definition}} \\
  a^\frac{m}{n}=\sqrt[n]{a^m} & \textsf{rational exponent rule} \\
  \end{array}
  >$

  :::
---

### $\fbox{9}\:$Given the power function $\small f(x)=(a^2-3a+3)x^{a+1}$ is an even function, how many integer values of $\small a$  satisfy this condition $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 0 &
\textsf{(B)} \: 1 &
\textsf{(C)} \: 2 &
\textsf{(D)} \: 3 &
\textsf{(E)} \: \infty & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
y=x^\alpha \Longrightarrow a^2-3a+3=1 \\
a^2-3a+2=0 \\
(a-1)(a-2)=0 \\
a=1 \lor 2 \\
f(x)=x^2 & \textsf{substitute }a=1 \\
x^2 \longrightarrow \textsf{even function} \\
f(x)=x^3 & \textsf{substitute }a=2 \\
x^3 \longrightarrow \textsf{odd function} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $a=1$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  y=x^\alpha & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_1-definition}{\textsf{standard power function definition}} \\
  \end{array}
  >$

  :::
---

### $\fbox{10}\:$Given $\small (5-2m)^\frac{1}{2} < (m-1)^\frac{1}{2}$, how many prime numbers are included in the range of $\small m \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 0 &
\textsf{(B)} \: 1 &
\textsf{(C)} \: 2 &
\textsf{(D)} \: 3 &
\textsf{(E)} \: \infty & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
(5-2m)^\frac{1}{2} < (m-1)^\frac{1}{2} \\
\sqrt{5-2m}<\sqrt{m-1} \\
0\le5-2m\lt m-1 & \textsf{domains }[0, +\infty) \\
5-2m\lt m-1 \\
6\lt3m \\
2\lt m \\
0\le5-2m \\
2m\le5 \\
m\le\frac{5}{2} \\
\left\{2\lt m\right\} \cap \left\{m\le\frac{5}{2}\right\} \\
2\lt m\le\frac{5}{2} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $2\lt m\le\frac{5}{2}$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  a^\frac{m}{n}=\sqrt[n]{a^m} & \textsf{rational exponent rule} \\
  \end{array}
  >$

  :::
---

### $\fbox{11}\:$Given the power function $\small y=(m^2-m-1)x^{m^2-2m-3}$, which is not an even function, and $\small m$ is an integer, if the function is decreasing on $\small (0, +\infty)$, find $y(2)$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{4} &
\textsf{(B)} \: \frac{1}{8} &
\textsf{(C)} \: \frac{1}{16} &
\textsf{(D)} \: 4 &
\textsf{(E)} \: 8 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
y=x^\alpha \Longrightarrow m^2-m-1=1 \\
m^2-m-2=0 \\
(m+1)(m-2)=0 \\
m=-1 \lor 2 \\
f(x)=x^{1+2-3} & \textsf{substitute }m=-1 \\
x^0 \longrightarrow
\begin{cases}
\textsf{even function} \\
x\ne0 \textsf{ (}x^0 = 1\textsf{)} \\
\end{cases} \\
f(x)=x^{4-4-3} & \textsf{substitute }m=2 \\
x^{-3} \longrightarrow 
\begin{cases}
\textsf{odd function} \\
\textsf{decreasing on }(0, +\infty) \\
\end{cases} \\  
y(2)=2^{-3}=\frac{1}{2^3}=\frac{1}{8} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $y(2)=\frac{1}{8}$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  y=x^\alpha & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_1-definition}{\textsf{standard power function definition}} \\
  a^{-n}=\frac{1}{a^n} & \textsf{negative exponent rule} \\
  \end{array}
  >$

  :::
---

### $\fbox{12}\:$Given the power function $\small y=x^{m-2}$ ($\small m\in\mathbb{N}$), its graph does not intersect either the x-axis or the y-axis, and it is symmetric about the y-axis. How many possible values can $\small m$ take $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 0 &
\textsf{(B)} \: 1 &
\textsf{(C)} \: 2 &
\textsf{(D)} \: 3 &
\textsf{(E)} \: \infty & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{no intercepts} \Longrightarrow m-2\le0 \\
m\le2 \\
\left\{ 0,1,2 \right\} & m\in\mathbb{N} \\
y=x^{0-2} & \textsf{substitute }m=0 \\
x^{-2} \longrightarrow \textsf{y-axis symmetric} \\
y=x^{1-2} & \textsf{substitute }m=1 \\
x^{-1} \longrightarrow \textsf{origin symmetric} \\
y=x^{2-2} & \textsf{substitute }m=2 \\
x^0 \longrightarrow
\begin{cases}
\textsf{y-axis symmetric} \\
x\ne0 \textsf{ (}x^0 = 1\textsf{)} \\
\end{cases} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $m=0 \lor 2$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  \end{array}
  >$

  :::
- Intercepts of the power function $y=x^\alpha$  
  ::: wrap
  > - When $\boldsymbol{\alpha>0}$: it intersects both the x-axis and y-axis at $(0, 0)$.
  > - When $\boldsymbol{\alpha\le0}$: it does not intersect either the x-axis or the y-axis.

  :::
---

### $\fbox{13}\:$Given that the point $\small (\sqrt{2}, 2)$ lies on the graph of the power function $\small f(x)$, and the point $\small (-2, \frac{1}{4})$ lies on the graph of the power function $\small g(x)$, find the maximum value of $\small \min(f(x), g(x))$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 4 &
\textsf{(B)} \: 3 &
\textsf{(C)} \: 2 &
\textsf{(D)} \: 1 &
\textsf{(E)} \: \nexists & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
f(x)=x^\alpha \\
(\sqrt{2})^\alpha=2 & \textsf{substitute }(\sqrt{2}, 2) \\
(2^\frac{1}{2})^\alpha=2^1 & a^\frac{m}{n}=\sqrt[n]{a^m} \\
\alpha \Longrightarrow \frac{2}{1}=2 \\
g(x)=x^\beta \\
(-2)^\beta=\frac{1}{4} & \textsf{substitute }(-2, \frac{1}{4}) \\
\frac{1}{(-2)^\beta}=\frac{1}{4} & a^{-n}=\frac{1}{a^n} \\
\beta \Longrightarrow -2 \\
\min(x^2, x^{-2})_{\textsf{max}}=1 \\
\end{array}
$  
:::  
![Question power functions figure Q-13 solve-1.svg](../../public/math/Core%20Course/Question%20power%20functions%20figure%20Q-13%20solve-1.svg)  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $\min(x^2, x^{-2})_{\textsf{max}}=1$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  a^\frac{m}{n}=\sqrt[n]{a^m} & \textsf{rational exponent rule} \\
  (a^m)^n=a^{m\cdot n} & \textsf{power of a power rule} \\
  a^{-n}=\frac{1}{a^n} & \textsf{negative exponent rule} \\
  \end{array}
  >$

  :::
---

# Module 12-02 Cones

## 1.Cone
### $\textcolor{#1E3A5F}{\fbox{1}}\:$Formulas for a cone
- Geometric diagram of a cone (development view): __the height is $\boldsymbol{h}$__,
  __the base radius is $\boldsymbol{r}$__,
  __the slant height is $\boldsymbol{l}$__,
  and __the axial cross-section is an isosceles triangle__.  
  ![Cone development geometric diagram.svg](../../public/math/Core%20Course/Cone%20development%20geometric%20diagram.svg)  
1. ###### __Slant height of a cone__: $l=\sqrt{h^2+r^2}$  
   ::: wrap  
   $
   \begin{array}{ll}
   c^2=a^2+b^2 \Rightarrow c=\sqrt{a^2+b^2} & \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#pythagorean-theorem}{\textsf{pythagorean theorem}} \\
   \end{array}
   $  
   :::
2. ###### __Central angle of the developed sector__: $\theta=\frac{2\pi r}{l}$  
   ::: wrap  
   $
   \begin{array}{ll}
   \href{https://www.mathsisfun.com/geometry/radians.html}{\textsf{radian measure}}=\frac{\textsf{arc length}}{\textsf{radius}} \\
   \end{array}
   $  
   :::
3. ###### __Lateral surface area of a cone__: $S_{\textsf{lateral}}=\pi rl$  
   ::: wrap  
   $
   \begin{array}{ll}
   S=\frac{1}{2}ah & \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#where-is-the-altitude-to-side}{\textsf{triangle area formula}} \\
   S_{\textsf{lateral}}=\frac{1}{2}\cdot 2\pi r\cdot l\\
   \end{array}
   $  
   :::
4. ###### __Total surface area of a cone__: $S_{\textsf{total}}=\pi r(l+r)$  
   ::: wrap  
   $
   \begin{array}{ll}
   S_{\textsf{total}}=S_{\textsf{lateral}}+S_{\textsf{base}}=\pi rl+\pi r^2 \\
   \end{array}
   $  
   :::
5. ###### __Volume of a cone__: $V=\frac{1}{3}\pi r^2h$  
   ::: wrap  
   $
   \begin{array}{ll}
   V=\pi r^2h & \href{/math/0%20Core%20Course/29%20Chapter8%20solid%20geometry.html#volume}{\textsf{cylinder volume formula}} \\
   V=\frac{1}{3} \cdot \pi r^2h \\
   \end{array}
   $  
   :::
6. ###### __Properties of a cross-section parallel to the base__: $\frac{S_1}{S}=\frac{h_1^2}{h^2}, \frac{V_1}{V}=\frac{h_1^3}{h^3}$  
   ![Cone cross-sections similarity properties.svg](../../public/math/Core%20Course/Cone%20cross-sections%20similarity%20properties.svg)  
   ::: wrap  
   $
   \begin{array}{ll}
   \frac{a_1}{a_2}=\frac{b_1}{b_2}=\frac{c_1}{c_2}=k & \href{/math/0%20Core%20Course/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#for-similar-triangles-similar-figures-the-ratios-of-corresponding-sides-are-equal-to-the-similarity-ratio}{\textsf{similar triangles sides ratio formula}} \\
   \frac{h_1}{h}=\frac{r_1}{r} \\
   \frac{S_1}{S}=\frac{r_1^2}{r^2}=\frac{h_1^2}{h^2} & \href{https://www.mathsisfun.com/geometry/area.html}{\textsf{what is area}}\\
   \frac{V_1}{V}=\frac{r_1^3}{r^3}=\frac{h_1^3}{h^3} \\
   \end{array}
   $  
   :::

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Special types of cones
1. __Cone with an equilateral triangle as its axial cross-section__: $l=2r, h=\sqrt{3}r, \theta=\pi$  
   ![Cone axial cross-section equilateral triangle.svg](../../public/math/Core%20Course/Cone%20axial%20cross-section%20equilateral%20triangle.svg)  
   ::: wrap  
   $
   \begin{array}{ll}
   l^2=h^2+r^2 &  \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#pythagorean-theorem}{\textsf{pythagorean theorem}} \\
   h^2=4r^2-r^2=3r^2 & l=2r \\
   h=\sqrt{3}r \\
   \theta=\frac{2\pi r}{l}=\frac{2\pi r}{2r}=\pi \\
   \end{array}
   $  
   :::
2. __Cone with an isosceles right triangle as its axial cross-section__: $h=r, l=\sqrt{2}r, \theta=\sqrt{2}\pi$  
   ![Cone axial cross-section isosceles right triangle.svg](../../public/math/Core%20Course/Cone%20axial%20cross-section%20isosceles%20right%20triangle.svg)  
   ::: wrap  
   $
   \begin{array}{ll}
   h=r \\
   l=\sqrt{h^2+r^2}=\sqrt{r^2+r^2}=\sqrt{2}r \\
   \theta=\frac{2\pi r}{l}=\frac{2\pi r}{\sqrt{2}r}=\frac{2\pi}{\sqrt{2}} \\
   \frac{2\pi}{\sqrt{2}}\cdot\frac{\sqrt{2}}{\sqrt{2}}=\frac{2\sqrt{2}\pi}{2}=\sqrt{2}\pi \\
   \end{array}
   $  
   :::
3. __Cone whose developed sector has a central angle of $\boldsymbol{120^{\circ}}$__: $l=3r, h=2\sqrt{2}r$  
   ::: wrap  
   $
   \begin{array}{ll}
   120^\circ=\frac{120\pi}{180}=\frac{2\pi}{3} & \textsf{deg} \rightarrow \textsf{rad} \\
   \frac{2\pi}{3}=\frac{2\cdot180}{3}=\frac{360}{3}=120^\circ & \textsf{rad} \rightarrow \textsf{deg}\\
   \theta=\frac{2\pi r}{l}=\frac{2\pi}{3} \\
   6\pi r=2\pi l \\
   l=3r \\
   l^2=h^2+r^2 &  \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#pythagorean-theorem}{\textsf{pythagorean theorem}} \\
   h^2=9r^2-r^2=8r^2 \\
   h=\sqrt{8}r=\sqrt{4}\cdot\sqrt{2}r=2\sqrt{2}r \\
   \end{array}
   $  
   :::
4. __Cone whose developed sector has a central angle of $\boldsymbol{90^{\circ}}$__: $l=4r, h=\sqrt{15}r$  
   ::: wrap  
   $
   \begin{array}{ll}
   90^\circ=\frac{90\pi}{180}=\frac{\pi}{2} & \href{https://www.mathsisfun.com/geometry/radians.html}{\textsf{deg} \rightarrow \textsf{rad}} \\
   \theta=\frac{2\pi r}{l}=\frac{\pi}{2} \\
   4\pi r=\pi l \\
   l=4r \\
   l^2=h^2+r^2 & \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#pythagorean-theorem}{\textsf{pythagorean theorem}} \\
   h^2=16r^2-r^2=15r^2 \\
   h=\sqrt{15}r \\
   \end{array}
   $  
   :::
- Note: when __a plane parallel to the base__ cuts a cone, it forms __a smaller cone__ and __a frustum__.
  ![Cone cross-section forms frustum and smaller cone.svg](../../public/math/Core%20Course/Cone%20cross-section%20forms%20frustum%20and%20smaller%20cone.svg)  

## 2.Pyramid
### $\textcolor{#1E3A5F}{\fbox{1}}\:$Triangular pyramid
- A pyramid with __a triangular base__.
- A regular triangular pyramid is a pyramid whose base is __an equilateral triangle__ and
  whose three lateral faces are __congruent isosceles triangles__.  
  ![Regular triangular pyramid.svg](../../public/math/Core%20Course/Regular%20triangular%20pyramid.svg)
- If all faces are __congruent equilateral triangles__, it is called __a regular tetrahedron__.  
  ![Regular tetrahedron.svg](../../public/math/Core%20Course/Regular%20tetrahedron.svg)  

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Quadrangular pyramid
- A pyramid with __a quadrilateral base__.
- A quadrangular pyramid with __a square base__ is called __a regular square pyramid__.  
  ![Regular square pyramid.svg](../../public/math/Core%20Course/Regular%20square%20pyramid.svg)  

## 3.Inscribed and Circumscribed Spheres
### $\textcolor{#1E3A5F}{\fbox{1}}\:$Inscribed sphere of a cone
![Cone inscribed sphere.svg](../../public/math/Core%20Course/Cone%20inscribed%20sphere.svg)  
- The inscribed circle lies within __the triangular axial cross-section of the cone__.
- ###### __Inscribed circle radius formula__: $\boldsymbol{r=\frac{2S}{c}}$ (where $S$ is __the area of the axial cross-section triangle__, and $c$ is __its perimeter__)  
  - __Formula derivation__  
    ![Cone inscribed circle radius derivation.svg](../../public/math/Core%20Course/Cone%20inscribed%20circle%20radius%20derivation.svg)  
    ::: wrap  
    $
    \begin{array}{ll}
    S=\frac{1}{2}ah & \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#where-is-the-altitude-to-side}{\textsf{triangle area formula}} \\
    S=\frac{1}{2}(ar+br+cr)=\frac{r}{2}(a+b+c) \\
    2S=r(a+b+c) \\
    r=\frac{2S}{(a+b+c)} \\
    \textsf{inradii of other special triangles} \\
    r=
    \begin{cases}
    \frac{a+b-c}{2} & \textsf{right triangle} \\
    \frac{\sqrt{3}a}{6} & \textsf{equilateral triangle} \\
    \end{cases} \\
    \end{array}
    $  
    :::
- __Inscribed sphere radius formula__: $\boldsymbol{r=\frac{3V}{S_{\textsf{total}}}}$ (where $V$ is __the volume of the cone__, and $S_{\textsf{total}}$ is __its total surface area__)  
  - __Formula derivation__  
    ![Cone inscribed sphere radius derivation.svg](../../public/math/Core%20Course/Cone%20inscribed%20sphere%20radius%20derivation.svg)  
    ::: wrap  
    $
    \begin{array}{ll}
    V=\frac{1}{3}\pi r^2h & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#volume-of-a-cone}{\textsf{cone volume formula}} \\
    V=\frac{1}{3}(S_1r+S_2r+S_3r) & \href{https://www.mathsisfun.com/geometry/volume.html}{\textsf{what is volume}} \\
    V=\frac{r}{3}(S_1+S_2+S_3) \\
    3V=r(S_1+S_2+S_3) \\
    r=\frac{3V}{(S_1+S_2+S_3)} \\
    S_{\textsf{total}}=(S_1+S_2+S_3)=\pi r(l+r) & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#total-surface-area-of-a-cone}{\textsf{cone total surface area formula}}\\
    \end{array}
    $  
    :::
  
### $\textcolor{#1E3A5F}{\fbox{2}}\:$Circumscribed sphere of a cone
![Cone circumscribed sphere.svg](../../public/math/Core%20Course/Cone%20circumscribed%20sphere.svg)  
- The circumscribed circle lies outside __the triangular axial cross-section of the cone__.
- ###### __Circumscribed sphere radius formula__: $\boldsymbol{R=\frac{r^2+h^2}{2h}=\frac{l^2}{2h}}$
  ::: wrap  
  $
  \begin{array}{ll}
  c^2=a^2+b^2 \Rightarrow c=\sqrt{a^2+b^2} & \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#pythagorean-theorem}{\textsf{pythagorean theorem}} \\
  r^2+(h-R)^2=R^2 \\
  r^2+h^2-2hR+R^2=R^2 \\
  r^2+h^2-2hR=0 \\
  2hR=r^2+h^2 \\
  R=\frac{r^2+h^2}{2h} \\
  l=\sqrt{h^2+r^2} & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#slant-height-of-a-cone}{\textsf{cone slant height}} \\
  \frac{r^2+h^2}{2h}=\frac{l^2}{2h} \\
  \end{array}
  $  
  :::


## 4.Focus 1
__The cone__  
- When dealing with a cone, first analyze __its shape__, and then apply __the cone formulas__.

### $\fbox{1}\:$Given that the radius of the base of a cone is $\small 6$ and its height is $\small 8$, find the lateral surface area of the cone.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 48 &
\textsf{(B)} \: 48\pi &
\textsf{(C)} \: 120\pi &
\textsf{(D)} \: 60\pi &
\textsf{(E)} \: 90\pi & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question cones figure Q-1 solve-1.svg](../../public/math/Core%20Course/Question%20cones%20figure%20Q-1%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  l=\sqrt{8^2+6^2}=\sqrt{100}=10 \\
  S_{\textsf{lateral}}=\pi\cdot6\cdot10=60\pi \\
  \end{array}
  $  
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $S_{\textsf{lateral}}=60\pi$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  l=\sqrt{h^2+r^2} & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#slant-height-of-a-cone}{\textsf{cone slant height}} \\
  S_{\textsf{lateral}}=\pi rl & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#lateral-surface-area-of-a-cone}{\textsf{cone lateral surface area formula}} \\
  \end{array}
  >$

  :::
---

### $\fbox{2}\:$A sector with a central angle of $\small 90^\circ$ is rolled up to form the lateral surface of a cone. What is the relationship between the cone's lateral surface area $\small S_{\textsf{lateral}}$ and its base area $\small S_{\textsf{base}} \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: S_{\textsf{lateral}}=S_{\textsf{base}} &
\textsf{(B)} \: S_{\textsf{lateral}}=2S_{\textsf{base}} &
\textsf{(C)} \: S_{\textsf{lateral}}=3S_{\textsf{base}} & \\
\textsf{(D)} \: S_{\textsf{lateral}}=3.5S_{\textsf{base}} &
\textsf{(E)} \: S_{\textsf{lateral}}=4S_{\textsf{base}} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
90^\circ=\frac{90\pi}{180}=\frac{\pi}{2} \\
\theta=\frac{2\pi r}{l}=\frac{\pi}{2} \\
4\pi r=\pi l \\
l=4r \\
\frac{S_{\textsf{lateral}}}{S_{\textsf{base}}}=\frac{\pi rl}{\pi r^2}=\frac{l}{r} \\
\frac{4r}{r}=4 & \textsf{substitute }l \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $\frac{S_{\textsf{lateral}}}{S_{\textsf{base}}}=4$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \theta=\frac{2\pi r}{l} & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#central-angle-of-the-developed-sector}{\textsf{cone sector central angle formula}} \\
  S_{\textsf{lateral}}=\pi rl & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#lateral-surface-area-of-a-cone}{\textsf{cone lateral surface area formula}} \\
  \end{array}
  >$

  :::
---

### $\fbox{3}\:$Figure 12–1-1, a sector and a circle with radius $\small 1$ are cut from a square metal sheet, and are then used to form a cone as shown in Figure 12–1-2. What is the height of the cone $\small \mathpunct{?}$.
![Question cones figure 12-1.svg](../../public/math/Core%20Course/Question%20cones%20figure%2012-1.svg)  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \sqrt{17} &
\textsf{(B)} \: 4 &
\textsf{(C)} \: \sqrt{15} &
\textsf{(D)} \: \sqrt{3} &
\textsf{(E)} \: 3.5 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question cones figure 12-1 solve-1.svg](../../public/math/Core%20Course/Question%20cones%20figure%2012-1%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  r=1 \\
  90^\circ=\frac{90\pi}{180}=\frac{\pi}{2} \\
  \theta=\frac{2\pi r}{l}=\frac{\pi}{2} \\
  4\pi r=\pi l \\
  l=4r \\
  l=4 \\
  l^2=h^2+r^2 \\
  h^2=l^2-r^2 \\
  h=\sqrt{l^2-r^2}=\sqrt{4^2-1^2}=\sqrt{15} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $h=\sqrt{15}$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \theta=\frac{2\pi r}{l} & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#central-angle-of-the-developed-sector}{\textsf{cone sector central angle formula}} \\
  c^2=a^2+b^2 \Rightarrow c=\sqrt{a^2+b^2} & \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#pythagorean-theorem}{\textsf{pythagorean theorem}} \\
  \end{array}
  >$

  :::
- Additionally, if the problem is to find the diagonal of the square metal sheet  
  ::: wrap
  > ![Question cones figure 12-1 solve-2.svg](../../public/math/Core%20Course/Question%20cones%20figure%2012-1%20solve-2.svg)  
  >$
  \begin{array}{ll}
  r=1 \\
  90^\circ=\frac{90\pi}{180}=\frac{\pi}{2} \\
  \theta=\frac{2\pi r}{l}=\frac{\pi}{2} \\
  4\pi r=\pi l \\
  l=4r \\
  \textsf{line}1=l=4r \\
  \textsf{line}2=r \\
  \textsf{line}3=\sqrt{r^2+r^2}=\sqrt{2r^2}=\sqrt{2}r \\
  \textsf{diagonal}=\textsf{line}1+\textsf{line}2+\textsf{line}3=4r+r+\sqrt{2}r=(\sqrt{2}+5)r
  \end{array}
  >$

  :::
---

### $\fbox{4}\:$Mike needs to make a conical birthday hat with a base radius of $\small 9\textsf{cm}$ and a height of $\small 12\textsf{cm}$ using a sector of paper. What is the central angle of the sector $\small \mathpunct{?}$.
![Question cones figure 12-2.svg](../../public/math/Core%20Course/Question%20cones%20figure%2012-2.svg)  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 150^\circ &
\textsf{(B)} \: 180^\circ &
\textsf{(C)} \: 216^\circ &
\textsf{(D)} \: 240^\circ &
\textsf{(E)} \: 270^\circ & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
(9,12,15) \Longrightarrow l=15 \\
\theta=\frac{2\pi r}{l}=\frac{2\pi\cdot9}{15}=\frac{18\pi}{15}=\frac{6\pi}{5} \\
\frac{6\pi}{5}=\frac{6\cdot180}{5}=\frac{1080}{5}=216^\circ \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\theta=216^\circ$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (9,12,15) & \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#common-pythagorean-triples}{\textsf{common pythagorean triples}} \\
  \theta=\frac{2\pi r}{l} & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#central-angle-of-the-developed-sector}{\textsf{cone sector central angle formula}} \\
  \end{array}
  >$

  :::
---

### $\fbox{5}\:$If the axial cross-section of a cone is an equilateral triangle with an area of $\small \sqrt{3}$, what is the total surface area of the cone $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 3\pi &
\textsf{(B)} \: 3\sqrt{3}\pi &
\textsf{(C)} \: 6\pi &
\textsf{(D)} \: 9\pi &
\textsf{(E)} \: 10\pi & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question cones figure Q-5 solve-1.svg](../../public/math/Core%20Course/Question%20cones%20figure%20Q-5%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  S=\frac{\sqrt{3}}{4}l^2=\sqrt{3} \\
  \frac{1}{4}l^2=1 \\
  l^2=4 \\
  l=\pm\sqrt{4}=\pm2 \\
  l=2 & \ne-2 \textsf{ (triangle sides}>0 \textsf{)} \\
  l=2 \Longrightarrow r=1 \\
  S_{\textsf{total}}=\pi r(l+r)=\pi\cdot1\cdot3=3\pi \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $S_{\textsf{total}}=3\pi$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S=\frac{\sqrt{3}}{4}a^2 & \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#the-area-of-an-equilateral-triangle-is-where-is-the-side-length}{\textsf{equilateral triangle area formula}} \\
  x^2=a \longrightarrow x=\pm\sqrt{a} & \textsf{n-th root property} \\
  S_{\textsf{total}}=\pi r(l+r) & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#total-surface-area-of-a-cone}{\textsf{cone total surface area formula}}\\
  \end{array}
  >$

  :::
---

### $\fbox{6}\:$Figure 12–3 within triangle $\small ABC$, $\small AB=2$, $\small BC=1.5$, and $\small \angle ABC=120^\circ$. What is the volume of the cone after subtracting the volume of the smaller inner cone $\small \mathpunct{?}$.
![Question cones figure 12-3.svg](../../public/math/Core%20Course/Question%20cones%20figure%2012-3.svg)  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{7}{2}\pi &
\textsf{(B)} \: \frac{5}{2}\pi &
\textsf{(C)} \: 2\pi &
\textsf{(D)} \: \frac{1}{2}\pi &
\textsf{(E)} \: \frac{3}{2}\pi & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question cones figure 12-3 solve-1.svg](../../public/math/Core%20Course/Question%20cones%20figure%2012-3%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  V_{\textsf{large}}=\frac{1}{3}\pi\cdot\sqrt{3}^2\cdot(1+1.5) \\
  V_{\textsf{small}}=\frac{1}{3}\pi\cdot\sqrt{3}^2\cdot1 \\
  V_{\textsf{large}}-V_{\textsf{small}}=\frac{1}{3}\pi(3\cdot2.5-3\cdot1)=\frac{1}{3}\pi4.5 \\
  \frac{1}{3}\cdot\frac{9}{2}\pi=\frac{9}{6}\pi=\frac{3}{2}\pi \\
  \end{array}
  $  
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $V_{\textsf{large}}-V_{\textsf{small}}=\frac{3}{2}\pi$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  1:\sqrt{3}:2 & \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#in-a-right-triangle-the-ratio-of-the-three-sides-is}{\textsf{30-60-90 right triangle}} \\
  V=\frac{1}{3}\pi r^2h & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#volume-of-a-cone}{\textsf{cone volume formula}} \\
  \end{array}
  >$

  :::
---

### $\fbox{7}\:$A conical water tank with a depth of $\small 50\textsf{m}$ and a top radius of $\small 100\textsf{m}$ is completely filled with water. The water level drops uniformly at a rate of $\small 2\textsf{m}$ per hour. How much water remains in the tank after $\small 10$ hours $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 108000\pi &
\textsf{(B)} \: 36000\pi &
\textsf{(C)} \: 54000\pi &
\textsf{(D)} \: 21600\pi &
\textsf{(E)} \: 10800\pi & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question cones figure Q-7 solve-1.svg](../../public/math/Core%20Course/Question%20cones%20figure%20Q-7%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  h_{\textsf{small}}=50-2\cdot10=30\textsf{m} \\
  \frac{h_1}{h}=\frac{r_1}{r} \Longrightarrow \frac{30}{50}=\frac{r_1}{100} \\
  30\cdot100=50r_1 \\
  r_1=\frac{3000}{50}=60 \\
  V_{\textsf{small}}=\frac{1}{3}\pi\cdot60^2\cdot30=\frac{108000}{3}\pi=36000\pi \\
  \end{array}
  $  
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $V_{\textsf{small}}=36000\pi$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{h_1}{h}=\frac{r_1}{r} & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#properties-of-a-cross-section-parallel-to-the-base}{\textsf{properties of parallel cross-sections of cones}} \\
  V=\frac{1}{3}\pi r^2h & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#volume-of-a-cone}{\textsf{cone volume formula}} \\
  \end{array}
  >$

  :::
---

### $\fbox{8}\:$A cylindrical container with a base diameter of $\small 20$ is partially filled with water. A conical rock with a base diameter of $\small 12$ and a height of $\small 10$ is submerged in the water. When the rock is removed, by how much does the water level in the container drop $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 2.4 &
\textsf{(B)} \: 2 &
\textsf{(C)} \: 1.6 &
\textsf{(D)} \: 1.2 &
\textsf{(E)} \: 0.9 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question cones figure Q-8 solve-1.svg](../../public/math/Core%20Course/Question%20cones%20figure%20Q-8%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  V_{\textsf{rock}}=\frac{1}{3}\pi\cdot6^2\cdot10=\frac{360}{3}\pi=120\pi \\
  V_{\textsf{drop water}}=\pi10^2h=120\pi \\
  10^2h=120 \\
  h=\frac{120}{100}=1.2 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $h=1.2$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  V=\frac{1}{3}\pi r^2h & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#volume-of-a-cone}{\textsf{cone volume formula}} \\
  V=\pi r^2h & \href{/math/0%20Core%20Course/29%20Chapter8%20solid%20geometry.html#volume}{\textsf{cylinder volume formula}} \\
  \end{array}
  >$

  :::
---

### $\fbox{9}\:$Given that the base radius of a cone is $\small 6$ and its slant height is $\small 10$, what is the surface area of the sphere circumscribed about the cone $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 300\pi &
\textsf{(B)} \: 360\pi &
\textsf{(C)} \: 450\pi &
\textsf{(D)} \: 540\pi &
\textsf{(E)} \: \frac{625\pi}{4} & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question cones figure Q-9 solve-1.svg](../../public/math/Core%20Course/Question%20cones%20figure%20Q-9%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  R=\frac{l^2}{2h}=\frac{10^2}{2\cdot8}=\frac{100}{16}=\frac{25}{4} \\
  S=4\pi R^2=4\pi\frac{25^2}{4^2}=\frac{625\pi}{4} \\
  \end{array}
  $  
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $S=\frac{625\pi}{4}$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (6,8,10) & \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#common-pythagorean-triples}{\textsf{common pythagorean triples}} \\
  R=\frac{l^2}{2h} & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#circumscribed-sphere-radius-formula}{\textsf{circumscribed sphere radius formula}} \\
  S=4\pi r^2 & \href{/math/0%20Core%20Course/29%20Chapter8%20solid%20geometry.html#_1-volume-and-surface-area}{\textsf{sphere surface area formula}} \\
  \end{array}
  >$

  :::
- Additionally, if the problem is to find the surface area of the inscribed sphere  
  ::: wrap
  > ![Question cones figure Q-9 solve-2.svg](../../public/math/Core%20Course/Question%20cones%20figure%20Q-9%20solve-2.svg)    
  >$
  \begin{array}{ll}
  S=\frac{1}{2}\cdot12\cdot8=\frac{96}{2}=48 \\
  r=\frac{2\cdot48}{10+10+12}=\frac{96}{32}=3 \\
  S=4\pi r^2=4\pi3^2=36\pi \\
  S=\frac{1}{2}ah & \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#where-is-the-altitude-to-side}{\textsf{triangle area formula}} \\
  r=\frac{2S}{c} & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#inscribed-circle-radius-formula-where-is-the-area-of-the-axial-cross-section-triangle-and-is-its-perimeter}{\textsf{inscribed circle radius formula}} \\
  \end{array}
  >$

  :::
---

### $\fbox{10}\:$There is an inverted conical container whose axial cross-section is an equilateral triangle. A sphere is placed inside, and water is poured in until the water surface is tangent to the sphere. After the sphere is removed, what is the depth of the water in the container $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \sqrt[3]{15}r &
\textsf{(B)} \: 2r &
\textsf{(C)} \: \frac{3r}{2} &
\textsf{(D)} \: \sqrt{6}r &
\textsf{(E)} \: \sqrt[3]{14}r & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question cones figure Q-10 solve-1.svg](../../public/math/Core%20Course/Question%20cones%20figure%20Q-10%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  r=\frac{\sqrt{3}}{6}l \\
  6r=\sqrt{3}l \\
  l=\frac{6r}{\sqrt{3}}=\frac{6\sqrt{3}r}{3}=2\sqrt{3}r \\
  r_{\textsf{red}}=\frac{l}{2}=\frac{2\sqrt{3}r}{2}=\sqrt{3}r \ \\
  h_{\textsf{red}}=\frac{\sqrt{3}}{2}l=\frac{\sqrt{3}}{2}2\sqrt{3}r=3r \lor r_{\textsf{red}}\cdot\sqrt{3}=3r \\
  V_{\textsf{red}}=\frac{1}{3}\pi(\sqrt{3}r)^2\cdot3r=3\pi r^3 \\
  V_{\textsf{blue}}=V_{\textsf{red}}-V_{\textsf{sphere}}=3\pi r^3-\frac{4}{3}\pi r^3 \\
  \frac{9\pi r^3}{3}-\frac{4\pi r^3}{3}=\frac{5\pi r^3}{3} \\
  V_{\textsf{blue}}=\frac{1}{3}\pi r^2h=\frac{5\pi r^3}{3} \\
  r_{\textsf{blue}}=\frac{h}{\sqrt{3}} & 1:\sqrt{3}:2 \\
  \frac{1}{3}\pi(\frac{h}{\sqrt{3}})^2\cdot h=\frac{1}{3}\cdot\frac{h^2}{3}\pi h=\frac{\pi h^3}{9}=\frac{5\pi r^3}{3} \\
  3\pi h^3=45\pi r^3 \\
  h^3=\frac{45\pi r^3}{3\pi}=15r^3 \\
  h=\sqrt[3]{15}r \\
  \end{array}
  $  
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $h=\sqrt[3]{15}r$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  r=\frac{\sqrt{3}a}{6} & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#inscribed-circle-radius-formula-where-is-the-area-of-the-axial-cross-section-triangle-and-is-its-perimeter}{\textsf{inscribed circle radius formula}} \\
  h=\frac{\sqrt{3}}{2}a & \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#the-ratio-of-the-height-to-the-side-is}{\textsf{equilateral triangle height-side ratio formula}} \\
  1:\sqrt{3}:2 & \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#in-a-right-triangle-the-ratio-of-the-three-sides-is}{\textsf{30-60-90 right triangle}} \\
  V=\frac{1}{3}\pi r^2h & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#volume-of-a-cone}{\textsf{cone volume formula}} \\
  V=\frac{4}{3}\pi r^3 & \href{/math/0%20Core%20Course/29%20Chapter8%20solid%20geometry.html#_1-volume-and-surface-area}{\textsf{sphere volume formula}} \\
  \end{array}
  >$

  :::
---

### $\fbox{11}\:$A conical pile of sand has a base area of $\small 20\textsf{m}^2$ and a height of $\small 1.2\textsf{m}$. The sand is to be spread over a road $\small 10\textsf{m}$ wide with a thickness of $\small 2\textsf{cm}$. How many meters of the road can be covered $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 20\textsf{m} &
\textsf{(B)} \: 25\textsf{m} &
\textsf{(C)} \: 30\textsf{m} &
\textsf{(D)} \: 40\textsf{m} &
\textsf{(E)} \: 45\textsf{m} & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question cones figure Q-11 solve-1.svg](../../public/math/Core%20Course/Question%20cones%20figure%20Q-11%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  V=\frac{1}{3}\cdot20\cdot1.2=10\cdot0.02\cdot x \\
  0.2x=\frac{24}{3}=8 \\
  x=\frac{8}{0.2}=40 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $x=40$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  V=\frac{1}{3}\pi r^2h & \href{/math/0%20Core%20Course/34%20Chapter12%20power%20functions%20and%20cones.html#volume-of-a-cone}{\textsf{cone volume formula}} \\
  V=abc & \href{/math/0%20Core%20Course/29%20Chapter8%20solid%20geometry.html#let-the-three-adjacent-edges-have-lengths-and}{\textsf{cuboid volume formula}} \\
  \end{array}
  >$

  :::
---

### $\fbox{12}\:$A lamp is installed above the center of a circular restaurant with a radius of $\small 30\textsf{m}$. The beam of light forms a cone whose axial cross-section has a central angle of $\small 120^\circ$. What should the height of the lamp be so that the light illuminates the entire restaurant $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 30\sqrt{3} &
\textsf{(B)} \: 15\sqrt{2} &
\textsf{(C)} \: 10\sqrt{3} &
\textsf{(D)} \: 15 &
\textsf{(E)} \: 16 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question cones figure Q-12 solve-1.svg](../../public/math/Core%20Course/Question%20cones%20figure%20Q-12%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  h=\frac{30}{\sqrt{3}}=\frac{30\sqrt{3}}{3}=10\sqrt{3} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $h=10\sqrt{3}$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  1:\sqrt{3}:2 & \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#in-a-right-triangle-the-ratio-of-the-three-sides-is}{\textsf{30-60-90 right triangle}} \\
  \end{array}
  >$

  :::
---

| Platform    | Lesson                                                                                       | Materials                                                                                                                                                                                                                                                                         | 
|-------------|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=xswEYoH6ybA&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Core courseware](../../public/math/Core%20Course/pdf/Core%20courseware.pdf)<br/>[Core courseware answers](../../public/math/Core%20Course/pdf/Core%20courseware%20answers.pdf)                                                                                                   |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gx65i?playlist=x9h6d2)                           | [Power functions and cones exercise](../../public/math/Core%20Course/pdf/34%20Power%20functions%20and%20cones%20exercise.pdf)<br/>[Power functions and cones exercise answers](../../public/math/Core%20Course/pdf/34%20Power%20functions%20and%20cones%20exercise%20answers.pdf) |
| Rumble      | [Watch](https://rumble.com/v6s95j1-35-chapter12-power-function-and-cone.html)                |                                                                                                                                                                                                                                                                                   |
