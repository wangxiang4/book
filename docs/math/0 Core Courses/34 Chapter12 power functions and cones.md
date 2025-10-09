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

## 1.Power Function
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
       - $\alpha>1$: __rises slowly__, e.g. $\alpha=\frac{1}{3}\approx0.33$
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
