---
title: Chapter4 Equations Inequalities – Module2 Inequalities
lang: en-US
---

# Module 4-03 Linear Inequalities (Systems)

## 1.Definition of Inequalities
- An inequality is formed by __connecting two (or more) expressions with an inequality sign__.
  The values of the unknown that satisfy the inequality are called __the solutions of the inequality__.
  The inequality signs include $\boldsymbol{\gt,\lt,\le,\ge}$, and $\boldsymbol{\ne}$.

## 2.Classification of Inequalities
- According to the nature of their solutions, inequalities can be classified into the following three types:
  1. __Absolute inequalities__: inequalities whose solution set is $\mathbb{R}$.
     - $x^2+2>0$
  2. __Conditional inequalities__: inequalities whose solution set is __a non-empty proper subset of the real numbers__.
     - $x^2-2>0$
  3. __Contradictory inequalities__: inequalities whose solution set is __the empty set__.
     - $x^2+2<0$


## 3.Basic Properties of Inequalities (Note the direction of inference; some cannot be reversed)
- Transitivity:  
  $
  \left\{
  \begin{array}{ll}
  a>b \\
  b>c \\
  \end{array}
  \right. \boldsymbol{\Longrightarrow a > c}
  $
- Addition (same direction):  
  $
  \left\{
  \begin{array}{ll}
  a>b \\
  c>d \\
  \end{array}
  \right. \boldsymbol{\Longrightarrow a+c > b+d}
  $
- Multiplication (both positive, same direction):  
  $
  \left\{
  \begin{array}{ll}
  a>b>0 \\
  c>d>0 \\
  \end{array}
  \right. \boldsymbol{\Longrightarrow ac > bd}
  $
::: wrap  
- Reciprocal property (same sign):  
  $
  \boldsymbol{a>b>0 \Longleftrightarrow \frac{1}{b}>\frac{1}{a}>0}\textsf{; }
  \boldsymbol{a<b<0 \Longleftrightarrow \frac{1}{b}<\frac{1}{a}<0}
  $
:::  
::: wrap  
- Exponentiation and root (both positive):  
  $
  \boldsymbol{a>b>0 \Longrightarrow a^n>b^n>0,
  \sqrt[n]{a}>\sqrt[n]{b}>0 \textsf{ (}n \in \mathbb{Z_+}\textsf{)}}
  $
:::  
- __Derivation relationship between inequalities__  
  $
  \begin{array}{ll}
  a>b \underset{❌}{\overset{❌}{\Longleftrightarrow}} a^2>b^2 \\
  |a|>|b| \underset{✅}{\overset{✅}{\Longleftrightarrow}} a^2>b^2 \\
  a>b \underset{✅}{\overset{✅}{\Longleftrightarrow}} a^3>b^3 \\
  a>b \underset{❌}{\overset{❌}{\Longleftrightarrow}} \frac{1}{a}<\frac{1}{b} \\
  \end{array}
  $

## 4.Focus 1
__The properties of inequalities__  
- When comparing the sizes of inequalities,
  it is important to __analyze them based on the properties of inequalities__,
  especially when dealing with __fractional inequalities or absolute value inequalities__.
  Care must be taken to __avoid mistakes__.

### $\fbox{15}\:$Given that $\small \frac{1}{a}\lt\frac{1}{b}\lt0$, determine which of the following inequalities is correct: $\small ①\hspace{0.2cm}\frac{1}{a+b}<\frac{1}{ab}$; $\small ②\hspace{0.2cm}|a|+b>0$; $\small ③\hspace{0.2cm}a-\frac{1}{a}>b-\frac{1}{b}$; $\small ④\hspace{0.2cm}\ln{a^2} > \ln{b^2}$. Which inequality is correct $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: ①\;④ &
\textsf{(B)} \: ②\;③ &
\textsf{(C)} \: ①\;③ &
\textsf{(D)} \: ②\;④ &
\textsf{(E)} \: ①\;② & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\frac{1}{a}<\frac{1}{b}<0 \Longleftrightarrow b\lt a\lt 0 \\
\textsf{① } \:\,✅\;\\
\begin{cases}
\frac{1}{a+b}<0 \\
\frac{1}{ab}>0 \\
\end{cases} \Longrightarrow \frac{1}{a+b}<\frac{1}{ab} \\
\textsf{② } \:\,❌\;\\
|b|>|a| \Longrightarrow -b>|a| \\
|a|+b<0 \\
\textsf{③ } \:\,✅\;\\
\frac{1}{a}<\frac{1}{b} \\
\frac{1}{a}\cdot-1<\frac{1}{b}\cdot-1 \\
\begin{cases}
-\frac{1}{a}>-\frac{1}{b} \\
a>b \\
\end{cases} \Longrightarrow -\frac{1}{a}+a>-\frac{1}{b}+b \\
\textsf{④ } \:\,❌\;\\
|b|>|a| \Longrightarrow \ln{|b|}>\ln{|a|} \\
2\ln{|b|}>2\ln{|a|} \\
\ln{b^2}>\ln{a^2} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\textsf{① },\textsf{③ }$, so choose $C$.

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
   & \href{/math/0%20Core%20Course/17%20Chapter4%20equations%20inequalities%20Module2%20inequalities.html#_3-basic-properties-of-inequalities-note-the-direction-of-inference-some-cannot-be-reversed}{\textsf{properties of inequalities}} \\
  \end{array}
  >$

  :::
---

## 5.Focus 2
__The linear inequalities (systems)__  
- Solve each inequality individually,
  and then find __the solution set of the system__ by considering __the intersection of the individual solution sets__.


### $\fbox{16}\:$For the system of inequalities $\scriptsize \begin{cases} x-1 \le a^2 \\ x-4 \ge 2a \end{cases}$ to have a solution, how many integers are contained in the range of values of the real number $\small a\,\mathpunct{?}$.
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
- Show known conditions  
  ![Question linear inequalities figure Q-16 solve-1.svg](../../public/math/Core%20Course/Question%20linear%20inequalities%20figure%20Q-16%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  \begin{cases}
  x \le a^2+1 \\
  x \ge 2a+4 \\
  \end{cases} \\
  2a+4 \le a^2+1 \\
  a^2-2a-3\ge0 \\
  a^2-2a-3\Rightarrow(a-3)(a+1)=0 \\
  a=3 \lor -1 \\
  \textsf{parabola analysis} \\
  1>0\textsf{:}\, \textsf{opens upward} \\
  \textsf{roots}\textsf{:}\, \textsf{intersects x-axis at }x_1=-1\textsf{ and }x_2=3 \\
  \textsf{range}\textsf{:}\, f(x)\ge0\textsf{ outside the two roots} \\
  f(x)\ge0 \longrightarrow a\le-1 \lor a\ge3 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $f(x)\ge0 \longrightarrow a\le-1 \lor a\ge3$, so choose $E$. 

  :::
---

# Module 4-04 Quadratic Inequalities

## 1.Standard Form of Quadratic Inequalities
- $ax^2+bx+c>0\textsf{ (or }<0\textsf{)}$
- Other __non-standard forms of inequalities__ can be transformed into the standard form through __equivalent transformations__.


## 2.Steps for Solving Quadratic Inequalities
- Step 1: Convert the inequality into __the standard form__ $ax^2+bx+c>0\textsf{ (or }<0\textsf{)}$, with $\boldsymbol{a>0}$.
- Step 2: Compute __the discriminant $\Delta$ of the corresponding quadratic equation__.
- Step 3: Find __the roots of the corresponding equation__.
- Step 4: Using the fact that when __$\boldsymbol{a>0}$, the parabola opens upward__,
  the quadratic function is __greater than zero outside the two roots__ and __less than zero between them__ to determine __the solution set__.

## 3.Relationship among Functions, Equations, and Inequalities
- The commonly encountered quadratic forms represent __a quadratic function__, __a quadratic equation__, and __a quadratic inequality__.
  These three are __closely related__ and can be __analyzed using the graph of a parabola__.


| Quadratics                                                                         |                                                                                $\Delta>0$                                                                                |                                                                                $\Delta=0$                                                                                |                                                                               	$\Delta<0$                                                                                |
|:-----------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| __Quadratic function__<br/>$y=ax^2+bx+c \textsf{ (}a>0\textsf{)}$ graph            | ![Discriminant cases of upward-opening quadratics graph 1.svg](../../public/math/Core%20Course/Discriminant%20cases%20of%20upward-opening%20quadratics%20graph%201.svg) | ![Discriminant cases of upward-opening quadratics graph 2.svg](../../public/math/Core%20Course/Discriminant%20cases%20of%20upward-opening%20quadratics%20graph%202.svg) | ![Discriminant cases of upward-opening quadratics graph 3.svg](../../public/math/Core%20Course/Discriminant%20cases%20of%20upward-opening%20quadratics%20graph%203.svg) |
| __Quadratic equation__<br/>$ax^2+bx+c=0 \textsf{ (}a>0\textsf{)}$ roots            |                                                 Two distinct real roots<br/>$x_1,x_2 \textsf{ (} x_1 \lt x_2 \textsf{)}$                                                 |                                                             Two equal real roots<br/>$x_1=x_2=-\frac{b}{2a}$                                                             |                                                                              No real roots                                                                               |
| __Quadratic inequality__<br/>$ax^2+bx+c\gt0 \textsf{ (}a>0\textsf{)}$ solution set |                                                             $\Big\{ x \,\|\, x\lt x_1 \lor x\gt x_2 \Big\}$                                                              |                                                               $\Big\{ x \,\|\, x \ne -\frac{b}{2a} \Big\}$                                                               |                                                                               $\mathbb{R}$                                                                               |
| __Quadratic inequality__<br/>$ax^2+bx+c\lt0 \textsf{ (}a>0\textsf{)}$ solution set |                                                                 $\Big\{ x \,\|\, x_1\lt x\lt x_2 \Big\}$                                                                 |                                                                              $\varnothing$                                                                               |                                                                              $\varnothing$                                                                               |

## 4.Focus 1
__The finding solution set__  
- If an inequality is given,
  first __factorize it to find the roots__,
  then write the solution set.
  For inequalities involving parameters,
  __compare the sizes of the two roots__ before writing the solution set.


### $\fbox{17}\:$What is the solution set of the quadratic inequality $\small x^2-3x+2<0 \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \left\{ x \,|\, x<-2 \lor x>-1 \right\} &
\textsf{(B)} \: \left\{ x \,|\, x<1 \lor x>2 \right\} & \\
\textsf{(C)} \: \left\{ x \,|\, 1< x <2 \right\} &
\textsf{(D)} \: \left\{ x \,|\, -2< x <-1 \right\} & \\
\textsf{(E)} \: \left\{ x \,|\, -1< x <2 \right\} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
x^2-3x+2<0 \\
x^2-3x+2\Rightarrow(x-1)(x-2)=0 \\
x=1 \lor 2 \\
\textsf{parabola analysis} \\
1>0\textsf{:}\, \textsf{opens upward} \\
\textsf{roots}\textsf{:}\, \textsf{intersects x-axis at }x_1=1\textsf{ and }x_2=2 \\
\textsf{range}\textsf{:}\, f(x)<0\textsf{ between the two roots} \\
f(x)<0 \longrightarrow 1 < x < 2 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $f(x)<0 \longrightarrow 1 < x < 2$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
   & \href{/math/0%20Core%20Course/17%20Chapter4%20equations%20inequalities%20Module2%20inequalities.html#_3-relationship-among-functions-equations-and-inequalities}{\textsf{relationship among quadratics}} \\
  \end{array}
  >$

  :::
---

### $\fbox{18}\:$What is the solution set of the quadratic inequality $\small 3x^2-4ax+a^2<0 \textsf{ (}a<0\textsf{)} \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{a}{3}\lt x\lt a &
\textsf{(B)} \: x\gt a \lor x\lt \frac{a}{3} &
\textsf{(C)} \: a\lt x\lt \frac{a}{3} & \\
\textsf{(D)} \: x\gt \frac{a}{3} \lor x\lt a &
\textsf{(E)} \: a\lt x\lt 3a & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
3x^2-4ax+a^2<0 \\
3x^2-4ax+a^2\Rightarrow(1x-a)(3x-a)=0 \\
x=a \lor \frac{a}{3} \\
a<0 \Longrightarrow a<\frac{a}{3} \\
\textsf{parabola analysis} \\
3>0\textsf{:}\, \textsf{opens upward} \\
\textsf{roots}\textsf{:}\, \textsf{intersects x-axis at }x_1=a\textsf{ and }x_2=\frac{a}{3} \\
\textsf{range}\textsf{:}\, f(x)<0\textsf{ between the two roots} \\
f(x)<0 \longrightarrow a < x < \frac{a}{3} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $f(x)<0 \longrightarrow a < x < \frac{a}{3}$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/17%20Chapter4%20equations%20inequalities%20Module2%20inequalities.html#_3-relationship-among-functions-equations-and-inequalities}{\textsf{relationship among quadratics}} \\
  \end{array}
  >$

  :::
---

## 5.Focus 2 
__The finding solution set parameters__  
- If the solution set of an inequality is known,
  the endpoints of the solution set are __the roots of the corresponding equation__.
  Substituting them into __the original equation allows us to determine the parameters__.


### $\fbox{19}\:$If the solution set of the inequality $\small 5x^2-bx+c<0$ is $\small \left\{ x \,|\, -1< x <3 \right\}$, then find the value of $\small b+c$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 5 &
\textsf{(B)} \: -5 &
\textsf{(C)} \: -25 &
\textsf{(D)} \: 10 &
\textsf{(E)} \: 15 & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by setting up a system of equations       
  ::: wrap  
  $
  \begin{array}{ll}
  x_1=-1 \lor x_2=3 \\
  5x^2-bx+c=0 & \textsf{substitute }x_1 \land x_2 \\
  \begin{cases}
  5+b+c=0 \\
  45-3b+c=0 \\
  \end{cases} \\
  b+c=-5 & ① \\
  -3b+c=-45 & ② \\
  (-3b+c)-(b+c)=-45-(-5) & ②\,-① \\
  -4b=-40 \\
  b=\frac{-40}{-4}=10 \\
  10+c=-5 & \textsf{substitute }b \\
  c=-15 \\
  b+c=10+(-15)=-5 \\
  \end{array}
  $  
  :::
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the vieta's theorem  
  ::: wrap  
  $
  \begin{array}{ll}
  x_1=-1 \lor x_2=3 \\
  5x^2-bx+c=0 \\
  \begin{cases}
  -1+3=-\frac{-b}{5}\\
  -1\cdot3=\frac{c}{5} \\
  \end{cases} \\
  2=\frac{b}{5} & ① \\
  b=10 \\
  -3=\frac{c}{5} & ② \\
  c=-15 \\
  b+c=10+(-15)=-5 \\
  \end{array}
  $  
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $b+c=-5$, so choose $B$. 

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

## 6.Focus 3
__The solution set is either all real numbers or the empty set__  
- For a quadratic inequality $ax^2+bx+c<0\textsf{ (or }>0\textsf{)}$,
  __the necessary and sufficient conditions__ for the solution set to be __all real numbers__ are
  $
  \begin{cases}
  a<0 \textsf{ (or }>0\textsf{)} \\
  \Delta<0 \\
  \end{cases}
  $
- Note: If __the coefficient $\boldsymbol{a}$ contains a parameter__, remember to also consider __the case $\boldsymbol{a=0}$__.  
 ![Quadratic inequality with all-real solution set.svg](../../public/math/Core%20Course/Quadratic%20inequality%20with%20all-real%20solution%20set.svg)


### $\fbox{20}\:$Given the quadratic inequality $\small ax^2+(a-1)x+a-1<0$ in $\small x$, if its solution set is $\small \mathbb{R}$, find the range of values of $\small a$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: a<\frac{1}{3} &
\textsf{(B)} \: a>\frac{1}{3} &
\textsf{(C)} \: a<-\frac{1}{3} & \\
\textsf{(D)} \: a>-\frac{1}{3} &
\textsf{(E)} \: a>-3 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{discriminant analysis} \\
\begin{cases}
a<0 \\
\Delta=(a-1)^2-4a(a-1)<0 \\
\end{cases} \\
a<0 & ① \\
(a-1)(-3a-1)<0 & ② \\
(a-1)(3a+1)>0 \\
a<0 \Longrightarrow 3a+1<0 \\
3a<-1 \\
a<-\frac{1}{3} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $a<-\frac{1}{3}$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \Delta=b^2-4ac & \href{/math/0%20Core%20Course/17%20Chapter4%20equations%20inequalities%20Module2%20inequalities.html#_3-relationship-among-functions-equations-and-inequalities}{\textsf{quadratic discriminant}} \\
  \end{array}
  >$

  :::
---

### $\fbox{21}\:$Given $\small (a^2-1)x^2-(a-1)x-1\ge0$ has an empty solution set, then how many integers are contained in the range of real numbers $\small a\,\mathpunct{?}$.
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
(a^2-1)x^2-(a-1)x-1<0 & \varnothing \Leftrightarrow \mathbb{R} \\
\textsf{discriminant analysis} \\
\begin{cases}
a^2-1<0 \\
\Delta=(a-1)^2+4(a^2-1)<0 \\
\end{cases} \\
a^2<1 \Longrightarrow -1\lt a\lt 1 & ① \\
(a-1)^2+4(a-1)(a+1)<0 & ② \\
(a-1)(5a+3)<0 \\
5a^2-2a-3 \Rightarrow (a-1)(5a+3)=0 \\
a=1 \lor -\frac{3}{5} \\
\textsf{parabola analysis} \\
5>0\textsf{:}\, \textsf{opens upward} \\
\textsf{roots}\textsf{:}\, \textsf{intersects x-axis at }x_1=-\frac{3}{5}\textsf{ and }x_2=1 \\
\textsf{range}\textsf{:}\, f(x)<0\textsf{ between the two roots} \\
f(x)<0 \longrightarrow -\frac{3}{5} < a < 1 \\
\left\{-1\lt a\lt 1\right\} \cap \left\{-\frac{3}{5} < a < 1\right\}=-\frac{3}{5} < a < 1 \\
a^2-1=0 \Longrightarrow a=\pm1 & \textsf{existence of linear case }a=0 \\
2x-1<0 & \textsf{substitute }a=-1 \\
x<\frac{1}{2} \Longrightarrow \textsf{solution set}\ne\mathbb{R} \\
-1<0 \Longrightarrow \textsf{solution set}=\mathbb{R} & \textsf{substitute }a=1 \\
\left\{ -\frac{3}{5} < a < 1 \right\} \cup \left\{ 1 \right\} = (-\frac{3}{5},1] \\
-\frac{3}{5} < a \le 1 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $-\frac{3}{5} < a \le 1$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  f(x)\ge0 \Longleftrightarrow f(x)\lt0  & \href{/math/0%20Core%20Course/17%20Chapter4%20equations%20inequalities%20Module2%20inequalities.html#_3-relationship-among-functions-equations-and-inequalities}{\textsf{quadratic inequalities }\varnothing \Leftrightarrow \mathbb{R}} \\
  \Delta=b^2-4ac & \href{/math/0%20Core%20Course/17%20Chapter4%20equations%20inequalities%20Module2%20inequalities.html#_3-relationship-among-functions-equations-and-inequalities}{\textsf{quadratic discriminant}} \\
  a^2-b^2=(a-b)(a+b) & \href{/math/0%20Core%20Course/12%20Chapter3%20polynomials%20rational%20expressions%20functions%20Module1%20polynomials%20and%20operations%20upper.html#_1-six-fundamental-formulas}{\textsf{difference of squares formula}} \\
  \end{array}
  >$

  :::
---

### $\fbox{22}\:$If the inequality $\small \frac{2x^2+2kx+k}{4x^2+6x+3}<1$ holds for all real numbers $\small x$, then how many integers are contained in the range of real numbers $\small k\,\mathpunct{?}$.
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
4x^2+6x+3 & \textsf{denominator} \\
\textsf{discriminant analysis} \\
\begin{cases}
a>0 \\
\Delta=6^2-4\cdot4\cdot3=-12<0 \\
\end{cases} \\
4x^2+6x+3<0 \longrightarrow \varnothing & 4x^2+6x+3\ne\varnothing \textsf{ (no solution)}\\
4x^2+6x+3>0 \longrightarrow \mathbb{R} & \textsf{always positive} \\
2x^2+2kx+k<4x^2+6x+3 \\
2x^2+(6-2k)x+3-k>0 & x=\mathbb{R} \\
\begin{cases}
a>0 \\
\Delta=(6-2k)^2-8(3-k)<0 \\
\end{cases} \\
a>0 & ① \\
36-24k+4k^2-24+8k<0 & ② \\
4k^2-16k+12<0 \\
k^2-4k+3<0 \\
k^2-4k+3 \Rightarrow (k-1)(k-3)=0 \\
k=1 \lor 3 \\
\textsf{parabola analysis} \\
1>0\textsf{:}\, \textsf{opens upward} \\
\textsf{roots}\textsf{:}\, \textsf{intersects x-axis at }x_1=1\textsf{ and }x_2=3 \\
\textsf{range}\textsf{:}\, f(x)<0\textsf{ between the two roots} \\
f(x)<0 \longrightarrow 1 < k < 3 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $f(x)<0 \longrightarrow 1 < k < 3$, so choose $B$. 

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

| Platform    | Lesson                                                                                       | Materials                                                                                      |
|-------------|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=oJRcX7dnz00&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Core courseware](../../public/math/Core%20Course/pdf/Core%20courseware.pdf)                   |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9glvrw?playlist=x9h6d2)                           | [Core courseware answers](../../public/math/Core%20Course/pdf/Core%20courseware%20answers.pdf) |
| Rumble      | [Watch](https://rumble.com/v6s95br-17-chapter4-equations-inequality-module1-inequality.html) |                                                                                                |
