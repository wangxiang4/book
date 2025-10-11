---
title: Chapter12 Power Functions – Cones    
lang: en-US
---

| Platform    | Course                                                                                       | Coursewares                                                       | Exercises                                                                           |
|-------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=xswEYoH6ybA&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) | [Exercise](../../public/math/Core%20Courses/pdf/34%20Exercises.pdf)                 |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gx65i?playlist=x9h6d2)                           |                                                                   | [Exercise answer](../../public/math/Core%20Courses/pdf/34%20Exercise%20answers.pdf) |
| Rumble      | [Watch](https://rumble.com/v6s95j1-35-chapter12-power-function-and-cone.html)                |                                                                   |

# Module 12-01 Power Function

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
  ![Power function three cases of α in first quadrant.svg](../../public/math/Core%20Courses/Power%20function%20three%20cases%20of%20%CE%B1%20in%20first%20quadrant.svg)  
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
    since [__an even root requires $\boldsymbol{x\ge0}$__](/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#can-be-rewritten-as-an-even-root-form)

## 3.Focus 1
__The power function__  
- When dealing with a power function,
  analyze using __the power function properties table__ along with __its definition__.

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
  y=x^\alpha & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_1-definition}{\textsf{definition of standard power function}} \\
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
![Question power function figure Q-2 solve-1.svg](../../public/math/Core%20Courses/Question%20power%20function%20figure%20Q-2%20solve-1.svg)
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
  & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  y=x^\alpha & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_1-definition}{\textsf{definition of standard power function}} \\
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
  ![Question power function figure Q-3 solve-1.svg](../../public/math/Core%20Courses/Question%20power%20function%20figure%20Q-3%20solve-1.svg)
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
  & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  y=x^\alpha & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_1-definition}{\textsf{definition of standard power function}} \\
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
  & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
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
  y=x^\alpha & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_1-definition}{\textsf{definition of standard power function}} \\
  a^\frac{m}{n}=\sqrt[n]{a^m} & \textsf{rational exponent rule} \\
  x=-\frac{b}{2a} & \href{/math/0%20Core%20Courses/15%20Chapter3%20polynomials-rational%20expressions-functions%20Module2%20rational%20expressions%20Module3%20quadratic%20functions.html#axis-of-symmetry}{\textsf{axis of symmetry}} \\
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
\textsf{(E)} \: \nexists  & \\
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
  & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
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
\textsf{(E)} \: \infty  & \\
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
  & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  y=x^\alpha & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_1-definition}{\textsf{definition of standard power function}} \\
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
  & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  y=x^\alpha & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_1-definition}{\textsf{definition of standard power function}} \\
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
\textsf{(E)} \: \infty  & \\
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
  & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  y=x^\alpha & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_1-definition}{\textsf{definition of standard power function}} \\
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
\textsf{(E)} \: \infty  & \\
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
\left(2\lt m\right) \cap \left(m\le\frac{5}{2}\right) \\
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
  & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
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
  & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  y=x^\alpha & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_1-definition}{\textsf{definition of standard power function}} \\
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
\textsf{(E)} \: \infty  & \\
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
  & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
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
\textsf{(E)} \: \nexists  & \\
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
![Question power function figure Q-13 solve-1.svg](../../public/math/Core%20Courses/Question%20power%20function%20figure%20Q-13%20solve-1.svg)
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
  & \href{/math/0%20Core%20Courses/34%20Chapter12%20power%20functions%20and%20cones.html#_2-overview-of-power-function-properties-table}{\textsf{power function properties table}} \\
  a^\frac{m}{n}=\sqrt[n]{a^m} & \textsf{rational exponent rule} \\
  (a^m)^n=a^{m\cdot n} & \textsf{power of a power rule} \\
  a^{-n}=\frac{1}{a^n} & \textsf{negative exponent rule} \\
  \end{array}
  >$

  :::
---
