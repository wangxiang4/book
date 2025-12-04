---
title: Chapter4 Equations Inequalities – Module1 Equations
lang: en-US
---

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
     ![System of two linear equations intersection.svg](../../public/math/Core%20Course/System%20of%20two%20linear%20equations%20intersection.svg)  
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
     ![System of two linear equations parallel.svg](../../public/math/Core%20Course/System%20of%20two%20linear%20equations%20parallel.svg)  
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
     ![System of two linear equations coincidence.svg](../../public/math/Core%20Course/System%20of%20two%20linear%20equations%20coincidence.svg)  
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
::: wrap  
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
::::
- __Theorem derivation__  
  ::: wrap  
  $
  \begin{array}{ll}
  x=\frac{-b\pm\sqrt{\Delta}}{2a} & \href{/math/0%20Core%20Course/16%20Chapter4%20equations%20inequalities%20Module1%20equations.html#_3-steps-for-solving-quadratic-equations}{\textsf{quadratic formula}} \\
  \Delta=b^2-4ac & \href{/math/0%20Core%20Course/17%20Chapter4%20equations%20inequalities%20Module2%20inequalities.html#_3-relationship-among-functions-equations-and-inequalities}{\textsf{quadratic discriminant}} \\
  x_1=\frac{-b-\sqrt{\Delta}}{2a} \quad x_2=\frac{-b+\sqrt{\Delta}}{2a} \\
  x_1+x_2=\frac{-b-b}{2a}=-\frac{b}{a} \\
  x_1\cdot x_2=\frac{(-b+\sqrt{\Delta})(-b-\sqrt{\Delta})}{4a^2}=\frac{(-b)^2-\Delta}{4a^2} \\
  \frac{(-b)^2-(b^2-4ac)}{4a^2}=\frac{4ac}{4a^2}=\frac{c}{a} \\
  \end{array}
  $  
  ::: 


## 5.Extended Applications of Vieta's Theorem
- Using vieta's theorem, one can find __the values of symmetric expressions__ involving __the two roots__.  
  ::: wrap  
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
  ::::  

## 6.Focus 1
__The definition of an equation__  
- Determine __the unknown parameters__ according to the definitions of __the number of variables__ and __the degree of the equation__. 

::: wrap  
### $\fbox{3}\:$For what values of $\small m$ is $\small (m-5)x^{m^{2}-6m+7}+(m^3+2m^2+m)x+1=0$ a quadratic equation in one variable $\small \mathpunct{?}$.
:::  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 1 &
\textsf{(B)} \: 2 &
\textsf{(C)} \: -1 &
\textsf{(D)} \: -2 &
\textsf{(E)} \: 0 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
m^2-6m+7=2 \\
m^2-6m+5=0 \\
(m-1)(m-5)=0 \\
m=1 \lor 5 & a\ne0 \Longrightarrow m\ne5 \\
m=1 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $m=1$, so choose $A$. 

  :::
---


## 7.Focus 2
__The cases of real roots of an equation__  
- Use the sign of the discriminant to determine whether __real roots exist__ and __how many there are__.
  Note that when the discriminant equals $\boldsymbol{0}$,
  the equation still has __two real roots__,
  but they are __equal roots__.


### $\fbox{4}\:$Given the quadratic equation in $\small x$: $\small k^2x^2-(2k+1)x+1=0$ has two distinct real roots, find the range of values of $\small k$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: k \gt -\frac{1}{4} &
\textsf{(B)} \: k \ge -\frac{1}{4} &
\textsf{(C)} \: k \gt -\frac{1}{4} \land k \ne 0 & \\
\textsf{(D)} \: k \ge -\frac{1}{4} \land k \ne 0 &
\textsf{(E)} \: k \le -\frac{1}{4} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\Delta=(2k+1)^2-4k^2>0 \\
4k^2+4k+1-4k^2 \\
4k+1>0 \\
k>-\frac{1}{4} \land k\ne0 & a\ne0 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $k>-\frac{1}{4} \land k\ne0$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \Delta=b^2-4ac & \href{/math/0%20Core%20Course/17%20Chapter4%20equations%20inequalities%20Module2%20inequalities.html#_3-relationship-among-functions-equations-and-inequalities}{\textsf{quadratic discriminant}} \\
  (a\pm b)^2=a^2\pm2ab+b^2 & \href{/math/0%20Core%20Course/12%20Chapter3%20polynomials%20rational%20expressions%20functions%20Module1%20polynomials%20and%20operations%20upper.html#_1-six-fundamental-formulas}{\textsf{perfect square formula}} \\
  \end{array}
  >$

  :::
---

## 8.Focus 3
__The vieta's theorem__  
- Use __the relevant formulas and forms__ of vieta's theorem for analysis.
  Since vieta's theorem applies to both __real and complex roots__,
  when __solving for real roots__,
  remember to check __the discriminant__ after applying vieta's theorem.


### $\fbox{5}\:$If one root of the equation $\small x^2+px+q=0$ is twice the other, then what conditions must $\small p$ and $\small q$ satisfy $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: p^2=4q &
\textsf{(B)} \: 2p^2=9q &
\textsf{(C)} \: 4p=9q^2 & \\
\textsf{(D)} \: 2p=3q^2 &
\textsf{(E)} \: 2p=9q^2 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{let }x_1=2x_2 \\
\begin{cases}
x_1+x_2=3x_2=-p \\
x_1\cdot x_2=2x_2^2=q \\
\end{cases} \\
x^2=-\frac{p}{3} \\
2(-\frac{p}{3})^2=q \\
2\frac{p^2}{9}=q \\
2p^2=9q \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $2p^2=9q$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  x_1+x_2=-\frac{b}{a} \\
  x_1\cdot x_2=\frac{c}{a} \\
  \end{cases} & \href{/math/0%20Core%20Course/16%20Chapter4%20equations%20inequalities%20Module1%20equations.html#_4-relationship-between-roots-and-coefficients-vieta-s-theorem}{\textsf{vieta's theorem}} \\
  \end{array}
  >$

  :::
---

### $\fbox{6}\:$Let the quadratic equation $\small 3x^2+mx+5=0$ have two real roots $\small x_1,x_2$ satisfying $\small \frac{1}{x_1}+\frac{1}{x_2}=2$, then find the value of $\small m$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 5 &
\textsf{(B)} \: -10 &
\textsf{(C)} \: 10 &
\textsf{(D)} \: -5 &
\textsf{(E)} \: 2 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\frac{1}{x_1}+\frac{1}{x_2}=-\frac{b}{c}=-\frac{m}{5}=2 \\
m=-5\cdot2=-10 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $m=-10$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{1}{x_1}+\frac{1}{x_2}=-\frac{b}{c} & \href{/math/0%20Core%20Course/16%20Chapter4%20equations%20inequalities%20Module1%20equations.html#_5-extended-applications-of-vieta-s-theorem}{\textsf{vieta's theorem symmetric expressions}} \\
  \end{array}
  >$

  :::
---

### $\fbox{7}\:$Given that the roots of $\small 2x^2-3x-1=0$ are $x_1,x_2$, find the value of $\small |x_1-x_2|$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{\sqrt{17}}{2} &
\textsf{(B)} \: -\frac{\sqrt{17}}{2} &
\textsf{(C)} \: \frac{\sqrt{17}}{3} &
\textsf{(D)} \: -\frac{\sqrt{17}}{3} &
\textsf{(E)} \: \frac{\sqrt{17}}{4} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
|x_1-x_2|=\frac{\sqrt{\Delta}}{|a|}=\frac{\sqrt{(-3)^2-4\cdot2\cdot-1}}{2}=\frac{\sqrt{9+8}}{2}=\frac{\sqrt{17}}{2} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $|x_1-x_2|=\frac{\sqrt{17}}{2}$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  |x_1-x_2|=\frac{\sqrt{\Delta}}{|a|} & \href{/math/0%20Core%20Course/16%20Chapter4%20equations%20inequalities%20Module1%20equations.html#_5-extended-applications-of-vieta-s-theorem}{\textsf{vieta's theorem symmetric expressions}} \\
  \Delta=b^2-4ac & \href{/math/0%20Core%20Course/17%20Chapter4%20equations%20inequalities%20Module2%20inequalities.html#_3-relationship-among-functions-equations-and-inequalities}{\textsf{quadratic discriminant}} \\
  \end{array}
  >$

  :::
---

### $\fbox{8}\:$Given the quadratic equation in $\small x$: $\small x^2-2(m-\frac{1}{2})x+m^2-2=0$ with two real roots $\small x_1,x_2$, and $\small x_1^2-x_1x_2+x_2^2=12$, find the value of $\small m$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 5 \lor -1 &
\textsf{(B)} \: 5 &
\textsf{(C)} \: -1 &
\textsf{(D)} \: 0 &
\textsf{(E)} \: -5 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
x_1^2-x_1x_2+x_2^2=(x_1+x_2)^2-3x_1x_2 \\
(-\frac{-2(m-\frac{1}{2})}{1})^2-3\frac{m^2-2}{1}  \\
(2m-1)^2-3(m^2-2) \\
4m^2-4m+1-3m^2+6 \\
m^2-4m+7=12 \\
m^2-4m-5=0 \\
(m+1)(m-5)=0 \\
m= -1 \lor 5 \\
\textsf{verify discriminant} \\
\Delta=(2m-1)^2-4(m^2-2) \\
4m^2-4m+1-4m^2+8=-4m+9 \\
-4\cdot-1+9=13>0 & \textsf{substitute }m=-1 \\
-4\cdot5+9=-11<0 & \textsf{substitute }m=5 \\
m=-1 & m\ne5 \textsf{ ( }\Delta>0 \textsf{)} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $m=-1$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2 & \href{/math/0%20Core%20Course/16%20Chapter4%20equations%20inequalities%20Module1%20equations.html#_5-extended-applications-of-vieta-s-theorem}{\textsf{vieta's theorem symmetric expressions}} \\
  \begin{cases}
  x_1+x_2=-\frac{b}{a} \\
  x_1\cdot x_2=\frac{c}{a} \\
  \end{cases} & \href{/math/0%20Core%20Course/16%20Chapter4%20equations%20inequalities%20Module1%20equations.html#_4-relationship-between-roots-and-coefficients-vieta-s-theorem}{\textsf{vieta's theorem}} \\
  (a\pm b)^2=a^2\pm2ab+b^2 & \href{/math/0%20Core%20Course/12%20Chapter3%20polynomials%20rational%20expressions%20functions%20Module1%20polynomials%20and%20operations%20upper.html#_1-six-fundamental-formulas}{\textsf{perfect square formula}} \\
  \Delta=b^2-4ac & \href{/math/0%20Core%20Course/17%20Chapter4%20equations%20inequalities%20Module2%20inequalities.html#_3-relationship-among-functions-equations-and-inequalities}{\textsf{quadratic discriminant}} \\
  \end{array}
  >$

  :::
---

### $\fbox{9}\:$Given that $\small m$ is a positive real number, for the equation in $\small x$: $\small 2x^2-mx-30=0$ with roots $x_1,x_2$, and satisfying $\small 5x_1+3x_2=0$, find the value of $\small m$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 1 &
\textsf{(B)} \: 2 &
\textsf{(C)} \: 3 &
\textsf{(D)} \: 4 &
\textsf{(E)} \: 5 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
5x_1+3x_2=0 \\
x_1=-\frac{3}{5}x_2 \\
\begin{cases}
x_1+x_2=-\frac{3}{5}x_2+\frac{5}{5}x_2 \\
x_1\cdot x_2=-\frac{3}{5}x_2\cdot x_2 \\
\end{cases} \\
\frac{2}{5}x_2=\frac{m}{2} & ① \\
-\frac{3}{5}x_2^2=-15 & ② \\
x_2^2=\frac{-15}{-\frac{3}{5}}=25 \\
x^2=5 & m\gt0 \\
\frac{2}{5}5=\frac{m}{2} & \textsf{substitute }x^2 \\
m=2\cdot2=4 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $m=4$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  x_1+x_2=-\frac{b}{a} \\
  x_1\cdot x_2=\frac{c}{a} \\
  \end{cases} & \href{/math/0%20Core%20Course/16%20Chapter4%20equations%20inequalities%20Module1%20equations.html#_4-relationship-between-roots-and-coefficients-vieta-s-theorem}{\textsf{vieta's theorem}} \\
  \end{array}
  >$

  :::
---

### $\fbox{10}\:$Given that $\small a,b,c$ form both an arithmetic sequence and a geometric sequence, let $\alpha,\beta$ be the two roots of the equation $\small ax^2+bx-c=0$ with $\alpha > \beta$. Then find the value of $\small \alpha^3\beta-\alpha\beta^3$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \sqrt{5} &
\textsf{(B)} \: \sqrt{2} &
\textsf{(C)} \: \sqrt{3} &
\textsf{(D)} \: \sqrt{7} &
\textsf{(E)} \: \sqrt{11} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a=b=c\ne0 \\
\alpha^3\beta-\alpha\beta^3=\alpha\beta(\alpha^2-\beta^2)=\alpha\beta(\alpha+\beta)(\alpha-\beta) \\
ax^2+ax-a=0 \\
x^2+x-1=0 \\
\begin{cases}
\alpha+\beta=-1 \\
\alpha\beta=-1 \\
\end{cases} \\
\alpha-\beta=|\alpha-\beta| & \alpha > \beta \\
|\alpha-\beta|=\frac{\sqrt{\Delta}}{|a|}=\frac{\sqrt{1+4}}{1}=\sqrt{5} \\
\alpha\beta(\alpha+\beta)(\alpha-\beta)=-1\cdot-1\cdot\sqrt{5}=\sqrt{5} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $\alpha\beta(\alpha+\beta)(\alpha-\beta)=\sqrt{5}$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a^2-b^2=(a-b)(a+b) & \href{/math/0%20Core%20Course/12%20Chapter3%20polynomials%20rational%20expressions%20functions%20Module1%20polynomials%20and%20operations%20upper.html#_1-six-fundamental-formulas}{\textsf{difference of squares formula}} \\
  \begin{cases}
  x_1+x_2=-\frac{b}{a} \\
  x_1\cdot x_2=\frac{c}{a} \\
  \end{cases} & \href{/math/0%20Core%20Course/16%20Chapter4%20equations%20inequalities%20Module1%20equations.html#_4-relationship-between-roots-and-coefficients-vieta-s-theorem}{\textsf{vieta's theorem}} \\
  |x_1-x_2|=\frac{\sqrt{\Delta}}{|a|} & \href{/math/0%20Core%20Course/16%20Chapter4%20equations%20inequalities%20Module1%20equations.html#_5-extended-applications-of-vieta-s-theorem}{\textsf{vieta's theorem symmetric expressions}} \\
  \end{array}
  >$

  :::
---

### $\fbox{11}\:$The quadratic equation $\small 3x^2+bx+c=0 \textsf{ (}c\ne0\textsf{)}$ has two roots $\small \alpha,\beta$. If the quadratic equation with roots $\small \alpha+\beta$ and $\small \alpha\beta$ is $\small 3x^2-bx+c=0$, then what are the values of $\small b$ and $\small c \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 2,6 &
\textsf{(B)} \: 3,4 &
\textsf{(C)} \: -2,-6 &
\textsf{(D)} \: -3,-6 &
\textsf{(E)} \: -3,6 & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using vieta's theorem on the two equations  
  ::: wrap  
  $
  \begin{array}{ll}
  3x^2+bx+c=0 \\
  3x^2-bx+c=0 \\
  \textsf{system}1
  \begin{cases}
  \alpha+\beta=-\frac{b}{3} \\
  \alpha\beta=\frac{c}{3} \\
  \end{cases} \\
  \textsf{system}2
  \begin{cases}
  \alpha+\beta+\alpha\beta=\frac{b}{3} \\
  (\alpha+\beta)\alpha\beta=\frac{c}{3} \\
  \end{cases} \\
  \left.
  \begin{array}{ll}
  \alpha\beta=\frac{c}{3} & \textsf{system}1_{②} \\
  (\alpha+\beta)\alpha\beta=\frac{c}{3} & \textsf{system}2_{②} \\
  \end{array}
  \right\} \Longrightarrow \alpha+\beta=1 & c\ne0 \\
  \alpha+\beta=-\frac{b}{3} & \textsf{system}1_{①} \\
  1=-\frac{b}{3} & \textsf{substitute }\alpha+\beta \\
  b=-3 \\
  \alpha+\beta+\alpha\beta=\frac{b}{3} & \textsf{system}2_{①} \\
  -\frac{b}{3}+\frac{c}{3}=\frac{b}{3} & \textsf{substitute }\alpha+\beta,\alpha\beta  \\
  c-b=b \\
  c=2b=2\cdot-3=-6 \\
  \end{array}
  $   
  :::
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the quadratic equation with symmetric roots  
  ::: wrap  
  $
  \begin{array}{ll}
  ax^2+bx+c=0 & x_1,x_2 \\  
  ax^2-bx+c=0 & -x_1,-x_2 \\
  \left\{
  \begin{array}{ll}
  \alpha+\beta=-\alpha \\
  \alpha\beta=-\beta \\
  \end{array}
  \right. \\
  \alpha=\frac{-\beta}{\beta}=-1 & c\ne0 \textsf{ (}0\notin\left\{\textsf{equation roots}\right\}\textsf{)} \\
  -1+\beta=-(-1) & \textsf{substitute }\alpha \\
  \beta=2 \\
  3x^2+bx+c=0 \\
  \begin{cases}
  \alpha+\beta=-\frac{b}{3} \\
  \alpha\beta=\frac{c}{3} \\
  \end{cases} \\
  -1+2=-\frac{b}{3} & \textsf{substitute }\alpha,\beta \\
  b=-3 \\
  -1\cdot2=\frac{c}{3} & \textsf{substitute }\alpha,\beta \\
  c=-6 \\
  \end{array}
  $   
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $-3,-6$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  x_1+x_2=-\frac{b}{a} \\
  x_1\cdot x_2=\frac{c}{a} \\
  \end{cases} & \href{/math/0%20Core%20Course/16%20Chapter4%20equations%20inequalities%20Module1%20equations.html#_4-relationship-between-roots-and-coefficients-vieta-s-theorem}{\textsf{vieta's theorem}} \\
  \end{array}
  >$

  :::
- Quadratic equations with symmetric root transformations  
  ::: wrap
  >$
  \begin{array}{ll}
  \textsf{①} \;\, ax^2+bx+c=0 & x_1,x_2 \\
  \textsf{②} \;\, ax^2-bx+c=0 & -x_1,-x_2 \\
  \textsf{③} \;\, cx^2+bx+a=0 & \frac{1}{x_1},\frac{1}{x_2}\\
  \textsf{④} \;\, cx^2-bx+a=0 & -\frac{1}{x_1},-\frac{1}{x_2}\\
  \end{array}
  >$

  :::
---

::: wrap  
### $\fbox{12}\:$Given the quadratic equation $\small x^2-2ax+10x+2a^2-4a-2=0$ has real roots, find the minimum value of the product of its two roots.
:::  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: -4 &
\textsf{(B)} \: -3 &
\textsf{(C)} \: -2 &
\textsf{(D)} \: -1 &
\textsf{(E)} \: -6 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
x_1\cdot x_2=2a^2-4a-2 \\
2a^2-4a-2 & a>0\textsf{ (opens upward)}\\
a=-\frac{b}{2a}=\frac{-4}{-4}=1 \\
2-4-2=-4 & \textsf{substitute }a=1 \\
\textsf{verify discriminant} \\
x^2+8x-4=0 & \textsf{substitute }a=1 \\
\Delta=8^2+8=72>0 \\
\textsf{minimum}=-4 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $\textsf{minimum}=-4$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  x_1+x_2=-\frac{b}{a} \\
  x_1\cdot x_2=\frac{c}{a} \\
  \end{cases} & \href{/math/0%20Core%20Course/16%20Chapter4%20equations%20inequalities%20Module1%20equations.html#_4-relationship-between-roots-and-coefficients-vieta-s-theorem}{\textsf{vieta's theorem}} \\
  x=-\frac{b}{2a} & \href{/math/0%20Core%20Course/15%20Chapter3%20polynomials%20rational%20expressions%20functions%20Module2%20rational%20expressions%20Module3%20quadratic%20functions.html#axis-of-symmetry}{\textsf{axis of symmetry}} \\
  \Delta=b^2-4ac & \href{/math/0%20Core%20Course/17%20Chapter4%20equations%20inequalities%20Module2%20inequalities.html#_3-relationship-among-functions-equations-and-inequalities}{\textsf{quadratic discriminant}} \\
  \end{array}
  >$

  :::
---

## 9.Focus 4
__The signs of roots of an equation__  
- Use vieta's theorem to analyze the signs of the roots,
  such as __both positive roots__ or __both negative roots__.
  Additionally, remember to check __the discriminant__ after applying vieta's theorem.
  - __Two positive roots__  
    $
    \begin{cases}
    x_1+x_2>0 \\
    x_1x_2>0 \\
    \Delta\ge0 \\
    \end{cases}
    $
  - __Two negative roots__  
    $
    \begin{cases}
    x_1+x_2<0 \\
    x_1x_2>0 \\
    \Delta\ge0 \\
    \end{cases}
    $
  - __One positive root and one negative root__  
    ::: wrap  
    $
    \begin{cases}
    x_1x_2=\frac{c}{a}<0 \\
    \Delta=b^2-4ac>0 & \bcancel{\Delta>0}\textsf{ (}a,c\textsf{ opposite signs}\Rightarrow\Delta>0\textsf{)} \\
    \end{cases}
    $
    :::  


### $\fbox{13}\:$(Sufficiency judgment) The equation $\small 4x^2+(a-2)x+a-5=0$ has two distinct negative real roots.
::: wrap  
$
\begin{array}{lllll}
\textsf{(1)} \: 5\lt a \lt6 &
\textsf{(2)} \: a\gt14 & \\
\textsf{(A)} \: \textsf{(1)} &
\textsf{(B)} \: \textsf{(2)} & \\
\textsf{(C)} \: \textsf{(1)}+\textsf{(2)} &  
\textsf{(D)} \: \textsf{(1)},\textsf{(2)} & \\
\textsf{(E)} \: \varnothing & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\begin{cases}
x_1+x_2=\frac{2-a}{4}<0 \\
x_1x_2=\frac{a-5}{4}>0 \\
\Delta=(a-2)^2-16(a-5)>0 \\
\end{cases} \\
\frac{2-a}{4}<0 \Longrightarrow a>2 & ① \\
\frac{a-5}{4}>0 \Longrightarrow a>5 & ② \\
(a-2)^2-16(a-5)>0 & ③ \\
a^2-4a+4-16a+80>0 \\
a^2-20a+84>0 \\
a^2-20a+84\Rightarrow(a-6)(a-14)=0 \\
a=6 \lor 14 \\
\textsf{parabola analysis} \\
1>0\textsf{:}\, \textsf{opens upward} \\
\textsf{roots}\textsf{:}\, \textsf{intersects x-axis at }x_1=6\textsf{ and }x_2=14 \\
\textsf{range}\textsf{:}\, f(x)>0\textsf{ outside the two roots} \\
f(x)>0 \longrightarrow a<6 \lor a>14 \\
\left\{a<6 \lor a>14\right\}\cap\left\{a>2\right\}\cap\left\{a>5\right\} \\
5\lt a\lt6 \lor a>14 \\
\textcolor{#9333EA}{\textsf{verify condition }\textsf{(1)}} \\
5\lt a\lt6 \\
\textcolor{#9333EA}{\textsf{verify condition }\textsf{(2)}} \\
a>14 \\
\end{array}
$  
:::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $\textsf{(1)}\,✅\;,\textsf{(2)}\,✅\;$, so choose $D$.

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  x_1+x_2<0 \\
  x_1x_2>0 \\
  \Delta\ge0 \\
  \end{cases} & \href{/math/0%20Core%20Course/16%20Chapter4%20equations%20inequalities%20Module1%20equations.html#_9-focus-4}{\textsf{sign conditions of two roots}} \\
  \begin{cases}
  x_1+x_2=-\frac{b}{a} \\
  x_1\cdot x_2=\frac{c}{a} \\
  \end{cases} & \href{/math/0%20Core%20Course/16%20Chapter4%20equations%20inequalities%20Module1%20equations.html#_4-relationship-between-roots-and-coefficients-vieta-s-theorem}{\textsf{vieta's theorem}} \\
  \Delta=b^2-4ac & \href{/math/0%20Core%20Course/17%20Chapter4%20equations%20inequalities%20Module2%20inequalities.html#_3-relationship-among-functions-equations-and-inequalities}{\textsf{quadratic discriminant}} \\
  (a\pm b)^2=a^2\pm2ab+b^2 & \href{/math/0%20Core%20Course/12%20Chapter3%20polynomials%20rational%20expressions%20functions%20Module1%20polynomials%20and%20operations%20upper.html#_1-six-fundamental-formulas}{\textsf{perfect square formula}} \\
  \end{array}
  >$

  :::
---

## 10.Focus 5
__The range of roots of an equation__  
- When dealing with the range of the roots,
  __draw the parabola__ and analyze based on __the intersection points with the x-axis__.
  Note __that vieta's theorem should not be used__ for this analysis.

### $\fbox{14}\:$If the quadratic equation in $\small x$: $\small mx^2-(m-1)x+m-5=0$ has two real roots $\small \alpha,\beta$ satisfying $\small -1<\alpha<0$ and $\small 0<\beta<1$, then how many integers are contained in the range of $\small m\,\mathpunct{?}$.
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
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the signs of function values at endpoints  
  ![Question quadratic equations figure Q-14 solve-1.svg](../../public/math/Core%20Course/Question%20quadratic%20equations%20figure%20Q-14%20solve-1.svg)  
  ::: wrap   
  $
  \begin{array}{ll}
  \begin{cases}
  f(-1)\cdot f(0)<0 \\
  f(0)\cdot f(1)<0 \\
  \end{cases} \\
  f(-1)\cdot f(0)<0 & ① \\
  (m+m-1+m-5)(m-5)<0 & \textsf{substitute }x=-1\land0 \\
  m+m-1+m-5<0 \\
  3m-6<0 \\
  m-2<0 \\
  (m-2)(m-5)<0 \\
  m^2-7m+10\Rightarrow(m-2)(m-5)=0 \\
  m=2 \lor 5 \\
  \textsf{parabola analysis} \\
  1>0\textsf{:}\, \textsf{opens upward} \\
  \textsf{roots}\textsf{:}\, \textsf{intersects x-axis at }x_1=2\textsf{ and }x_2=5 \\
  \textsf{range}\textsf{:}\, f(x)<0\textsf{ between the two roots} \\
  f(x)<0 \longrightarrow 2 < m < 5 \\
  f(0)\cdot f(1)<0 & ② \\
  (m-5)(m-m+1+m-5)<0 & \textsf{substitute }x=0\land1 \\
  (m-5)(m-4)<0 \\
  m^2-9m+20\Rightarrow(m-5)(m-4)=0 \\
  m=4 \lor 5 \\
  \textsf{parabola analysis} \\
  1>0\textsf{:}\, \textsf{opens upward} \\
  \textsf{roots}\textsf{:}\, \textsf{intersects x-axis at }x_1=4\textsf{ and }x_2=5 \\
  \textsf{range}\textsf{:}\, f(x)<0\textsf{ between the two roots} \\
  f(x)<0 \longrightarrow 4 < m < 5 \\
  \left\{2 < m < 5\right\}\cap\left\{4 < m < 5\right\}=4 < m < 5 \\
  \end{array}
  $   
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $4 < m < 5$, so choose $A$. 

  :::
- Root existence based on function values at endpoints  
  ::: wrap
  >$
  \begin{array}{ll}
  \textsf{opposite signs at endpoints} \Longrightarrow \textsf{root exists} \\
  \textsf{same signs at endpoints} \Longrightarrow \textsf{root uncertain} \\
  \end{array}
  >$

  :::
---

| Platform    | Lesson                                                                                       | Materials                                                                                      |
|-------------|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=hK8elaKSvBI&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Core courseware](../../public/math/Core%20Course/pdf/Core%20courseware.pdf)                   |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9glvs0?playlist=x9h6d2)                           | [Core courseware answers](../../public/math/Core%20Course/pdf/Core%20courseware%20answers.pdf) |
| Rumble      | [Watch](https://rumble.com/v6s95bx-18-chapter4-equations-inequality-module2-equations.html)  |                                                                                                |
