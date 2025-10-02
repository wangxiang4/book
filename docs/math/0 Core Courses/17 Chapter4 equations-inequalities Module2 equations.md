---
title: Chapter4 Equations Inequalities – Module2 Equations
lang: en-US
---

| Platform    | Course                                                                                       | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=hK8elaKSvBI&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9glvs0?playlist=x9h6d2)                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95bx-18-chapter4-equations-inequality-module2-equations.html)  |                                                                   |

# Module 4-01 Linear Equations (Systems)

## 1.Definition
- An equation with __one unknown__, whose __highest degree is $\boldsymbol{1}$__, is called __a linear equation in one variable__.
- Its general form is $\boldsymbol{ax=b} \textsf{ (}a\ne0\textsf{)}$, and the solution is $\boldsymbol{x=\frac{b}{a}}$.

## 2.System of Equations
- The form of a system of two linear equations in two variables is
  $
  \begin{cases}
  a_1x+b_1y=c_1 \\
  a_2x+b_2y=c_2 \\
  \end{cases}
  $
  and it can be solved using __the elimination method__ or __the substitution method__.
  1. If $\boldsymbol{\frac{a_1}{a_2}\ne\frac{b_1}{b_2}}$, then the system has __a unique solution $\boldsymbol{(x,y)}$__.  
     ![System of two linear equations intersection.svg](../../public/math/Core%20Courses/System%20of%20two%20linear%20equations%20intersection.svg)  
  2. If $\boldsymbol{\frac{a_1}{a_2}=\frac{b_1}{b_2}=\frac{c_1}{c_2}}$, then the system has __infinitely many solutions__.  
     ::: wrap  
     $
     \begin{array}{ll}
     \begin{cases}
     2x+3y=5 \\
     4x+6y=10 \\
     \end{cases} 
     \end{array}
     $  
     :::  
     ![System of two linear equations parallel.svg](../../public/math/Core%20Courses/System%20of%20two%20linear%20equations%20parallel.svg)  
  3. If $\boldsymbol{\frac{a_1}{a_2}=\frac{b_1}{b_2}\ne\frac{c_1}{c_2}}$, then the system has __no solution__.  
     ::: wrap  
     $
     \begin{array}{ll}
     \begin{cases}
     2x+3y=5 \\
     2x+3y=7 \\
     \end{cases}
     \end{array}
     $  
     :::  
     ![System of two linear equations coincidence.svg](../../public/math/Core%20Courses/System%20of%20two%20linear%20equations%20coincidence.svg)  
- Note: the cases of a system of two linear equations can be __interpreted geometrically__ as __the relationship between two straight lines in a plane__.
  The above three cases correspond respectively to two lines __intersecting__, __coinciding__, and __being parallel__.

## 3.Focus 1
__The linear equation in one variable__  
- A linear equation in one variable can be __transformed into the standard form $\boldsymbol{ax=b}$__ by __transposition__,
  and then solved accordingly.

### $\fbox{1}\:$A student, when solving the equation $\small \frac{ax+1}{3}-\frac{x+1}{2}=1$, mistakenly treated $\small x+1$ as $\small x-1$, and obtained the solution $\small x=1$. Then, what are the value of $\small a$ and the solution of the original equation $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: a=1,x=7 &
\textsf{(B)} \: a=2,x=5 &
\textsf{(C)} \: a=2,x=7 & \\
\textsf{(D)} \: a=5,x=2 &
\textsf{(E)} \: a=5,x=\frac{1}{7} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\frac{ax+1}{3}-\frac{x-1}{2}=1 & \textsf{incorrect equation} \\
\frac{a+1}{3}=1 & \textsf{substitute }x=1 \\
a+1=3 \\
a=2 \\
\frac{ax+1}{3}-\frac{x+1}{2}=1 & \textsf{correct equation} \\
\frac{2x+1}{3}-\frac{x+1}{2}=1 & \textsf{substitute }a \\
2(2x+1)-3(x+1)=6 \\
4x+2-3x-3=6 \\
x-1=6 \\
x=7 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $a=2,x=7$, so choose $C$. 

  :::
---

## 4.Focus 2
__The system of two linear equations in two variables__  
- When dealing with a system of equations,
  __the elimination method__ can be used to solve for __the unknowns__.
  Additionally, if __two systems of equations have the same solution__,
  then recombining their equations into __a new system still yields the same solution__.
  One can first recombine __the two equations without parameters__ to solve for $\boldsymbol{x}$ and $\boldsymbol{y}$,
  and then determine __the parameter values__.


### $\fbox{2}\:$If $\scriptsize \left\{ \begin{array}{ll} x+3y=7 \\ \beta x+\alpha y=1 \\ \end{array} \right.$ and $\scriptsize \left\{ \begin{array}{ll} 3x-y=1 \\ \alpha x+\beta y=2 \\ \end{array} \right.$ have the same solution, then find $\small (\alpha+\beta)^{9999}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 1 &
\textsf{(B)} \: -1 &
\textsf{(C)} \: 2 &
\textsf{(D)} \: -2 &
\textsf{(E)} \: 3 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\begin{cases}
x+3y=7 \\
3x-y=1 \\
\end{cases} & \textsf{recombine system of equations} \\
x+3y=7 & ① \\
9x-3y=3 & ② \\
x+3y+9x-3y=7+3 & ①\,+② \\
10x=10 \\
x=\frac{10}{10}=1 \\
1+3y=7 & \textsf{substitute }x \\
3y=6 \\
y=\frac{6}{3}=2 \\
\begin{cases}
\beta x+\alpha y=1 \\
\alpha x+\beta y=2 \\
\end{cases} & \textsf{recombine system of equations} \\
\beta+2\alpha=1 & ① \\
\alpha+2\beta=2 & ② \\
\beta+2\alpha+\alpha+2\beta=1+2 & ①\,+② \\
3(\alpha+\beta)=3 \Longrightarrow \alpha+\beta=1 \\
(\alpha+\beta)^{9999}=1^{9999}=1 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $(\alpha+\beta)^{9999}=1$, so choose $A$. 

  :::
---

# Module 4-02 Quadratic Equations

## 1.Definition
- An equation containing __only one unknown__,
  with __the highest degree of the unknown being $\boldsymbol{2}$__,
  is called __a quadratic equation in one variable__.
- Its general form is $\boldsymbol{ax^2+bx+c=0} \textsf{ (}a\ne0\textsf{)}$.


## 2.Cases of the Roots
- Let $\boldsymbol{\Delta=b^2-4ac}$. The solutions of the equation fall into __three cases__:
  1. When $\boldsymbol{\Delta>0}$, the equation has __two distinct real roots__, given by $x_{1,2}=\frac{-b\pm\sqrt{\Delta}}{2a}$.
  2. When $\boldsymbol{\Delta=0}$, the equation has __two equal real roots__, $x_{1,2}=-\frac{b}{2a}$.
  3. When $\boldsymbol{\Delta<0}$, the equation has __no real roots__.
- Because of its importance in determining the solutions of a quadratic equation in one variable,
  $\Delta=b^2-4ac$ is called __the discriminant of the quadratic equation__.
  
## 3.Steps for Solving Quadratic Equations
- Step 1: First, try factorization using __the cross-multiplication method__.
  After factorization, the roots of the equation can be __obtained__.
  - Condition for cross-multiplication: $\boldsymbol{\Delta=\textsf{perfect square}}$.  
    ::: wrap  
    $
    \begin{array}{ll}
    \Delta=16 \longrightarrow \sqrt{16}=4 \\
    \Delta=25 \longrightarrow \sqrt{25}=5 \\
    \Delta=49 \longrightarrow \sqrt{49}=7 \\
    \Delta=18 \longrightarrow \sqrt{18} \approx 4.24\,❌ & \textsf{solve by using }\frac{-b\pm\sqrt{\Delta}}{2a} \\
    \end{array}
    $  
    :::
- Step 2: If factorization by cross-multiplication is __not possible__,
  use the quadratic formula: $\boldsymbol{x_{1,2}=\frac{-b\pm\sqrt{\Delta}}{2a}}$.


## 4.Relationship Between Roots and Coefficients (Vieta's Theorem)
- $\boldsymbol{x_1, x_2}$ are the two roots of the equation
  $
  ax^2+bx+c=0 \textsf{ (}a\ne0\textsf{)}
  \Longleftrightarrow
  \boxed{
  \begin{array}{ll}
  x_1+x_2=\boldsymbol{-\frac{b}{a}} \\ 
  x_1\cdot x_2=\boldsymbol{\frac{c}{a}} \\
  \end{array}}
  $
- __Theorem derivation__  
  ::: wrap  
  $
  \begin{array}{ll}
  x=\frac{-b\pm\sqrt{\Delta}}{2a} & \href{https://en.wikipedia.org/wiki/Quadratic_formula}{\textsf{quadratic formula}} \\
  \Delta=b^2-4ac & \href{/math/0%20Core%20Courses/16%20Chapter4%20equations-inequalities%20Module1%20inequalities.html#_3-relationship-among-functions-equations-and-inequalities}{\textsf{quadratic discriminant}} \\
  x_1=\frac{-b-\sqrt{\Delta}}{2a} \quad x_2=\frac{-b+\sqrt{\Delta}}{2a} \\
  x_1+x_2=\frac{-b-b}{2a}=-\frac{b}{a} \\
  x_1\cdot x_2=\frac{(-b+\sqrt{\Delta})(-b-\sqrt{\Delta})}{4a^2}=\frac{(-b)^2-\Delta}{4a^2} \\
  \frac{(-b)^2-(b^2-4ac)}{4a^2}=\frac{4ac}{4a^2}=\frac{c}{a} \\
  \end{array}
  $  
  ::: 


## 5.Extended Applications of Vieta's Theorem
- Using Vieta's theorem, one can find __the values of symmetric expressions__ involving __the two roots__.  
  1. $\frac{1}{x_1}+\frac{1}{x_2}=\frac{x_1+x_2}{x_1x_2}=\frac{-\frac{b}{a}}{\frac{c}{a}}=\boldsymbol{-\frac{b}{c}}$
  2. $\frac{1}{x_1^2}+\frac{1}{x_2^2}=\frac{(x_1+x_2)^2-2x_1x_2}{(x_1x_2)^2}$
  3. $|x_1-x_2|=\sqrt{(x_1-x_2)^2}=\sqrt{(x_1+x_2)^2-4x_1x_2}=\boldsymbol{\frac{\sqrt{\Delta}}{|a|}}$  
     $
     \begin{array}{ll}
     x_1=\frac{-b+\sqrt{\Delta}}{2a} \quad x_2=\frac{-b-\sqrt{\Delta}}{2a} \\
     |x_1-x_2|=\left|\frac{-b+\sqrt{\Delta}}{2a}-(\frac{-b-\sqrt{\Delta}}{2a})\right| \\
     \left|\frac{2\sqrt{\Delta}}{2a}\right|=\boldsymbol{\frac{\sqrt{\Delta}}{|a|}} \\
     \end{array}
     $
  4. $x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2$
  5. $x_1^2-x_2^2=(x_1+x_2)(x_1-x_2)$
  6. $x_1^3+x_2^3=(x_1+x_2)(x_1^2-x_1x_2+x_2^2)=(x_1+x_2)[(x_1+x_2)^2-3x_1x_2]$
