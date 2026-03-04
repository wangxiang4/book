---
title: Chapter7 Analytic Geometry – Module2 Straight Lines (Part2)
lang: en-US
---

## 9.Positional Relationships Between Two Lines

| Line Relationship | Slope-Intercept Form<br/>$\boldsymbol{l_1:\;y=k_1x+b_1}$<br/>$\boldsymbol{l_2:\;y=k_2x+b_2}$ |     General Form<br/>$\boldsymbol{l_1:\;a_1x+b_1y+c_1=0}$<br/>$\boldsymbol{l_2:\;a_2x+b_2y+c_2=0}$     |
|:------------------|:--------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------:|
| Parallel          |                   $l_1 \parallel l_2 \Leftrightarrow k_1=k_2,b_1 \ne b_2$                    |        $l_1 \parallel l_2 \Leftrightarrow \frac{a_1}{a_2}=\frac{b_1}{b_2} \ne \frac{c_1}{c_2}$         |
| Intersecting      |                                        $k_1 \ne k_2$                                         |                                 $\frac{a_1}{a_2} \ne \frac{b_1}{b_2}$                                  |
| Perpendicular     |                          $l_1 \perp l_2 \Leftrightarrow k_1k_2=-1$                           | $l_1 \perp l_2 \Leftrightarrow \frac{a_1}{b_1}\cdot\frac{a_2}{b_2}=-1 \Leftrightarrow a_1a_2+b_1b_2=0$ |

__Examples__  
- __Slope-Intercept Form__
  - __Parallel__    
    ::: wrap    
    $
    \begin{array}{ll}
    y=2x-1 \\
    y=2x+3 \\
    k \rightarrow 2=2 \\
    b \rightarrow -1 \ne 3 & \textsf{not coincident}\\
    \end{array}
    $
    :::  
  - __Perpendicular__    
    ::: wrap  
    $
    \begin{array}{ll}
    y=-\frac{1}{2}x-1 \\
    y=2x+3 \\
    k_1k_2=-\frac{1}{2}\cdot2=-1 \\
    \end{array}
    $  
    :::  
- __General Form__   
  - __Parallel__    
    ::: wrap  
    $
    \begin{array}{ll}
    2x-3y+1=0 \\
    4x-6y+5=0 \\
    \frac{a_1}{a_2}=\frac{b_1}{b_2}\rightarrow \frac{2}{4}=\frac{-3}{-6} \\
    \frac{b_1}{b_2} \ne \frac{c_1}{c_2}\rightarrow 0.5 \ne \frac{1}{5} & \textsf{not coincident}\\
    \end{array}
    $
    :::  
  - __Perpendicular__  
    ::: wrap  
    $
    \begin{array}{ll}
    3x+4y-1=0 \\
    4x-3y+2=0 \\
    a_1a_2+b_1b_2=3\cdot4+4\cdot-3=0 \\
    \end{array}
    $  
    :::  

## 10.Focus 4
__The two lines are parallel__  
- Analyze parallelism based on __equal slopes__,
  note __the cases where the slope is $\boldsymbol{0}$ or undefined__.  



### $\fbox{12}\:$Given that the lines $\small (k-3)x+(4-k)y+1=0$ and $\small 2(k-3)x-2y+3=0$ are parallel, find $\small k$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 3 &
\textsf{(B)} \: 5 &
\textsf{(C)} \: 1 &
\textsf{(D)} \: -1 &
\textsf{(E)} \: 3 \lor 5 & \\
\end{array}
$  
:::
#### Solution
- Solve by Substituting the options to verify  
  ::: wrap  
  $
  \begin{array}{ll}
  \frac{a_1}{a_2}=\frac{b_1}{b_2} \ne \frac{c_1}{c_2} \\
  \frac{k-3}{2(k-3)}=\frac{4-k}{-2} \ne \frac{1}{3} \\
  \textsf{substitute }k=3 \\
  y+1=0 & \textsf{horizontal line }a=0 \\
  -2y+3=0 & \textsf{horizontal line }a=0 \\
  k=3 \Longrightarrow \textsf{two horizontal lines are parallel} \\
  \frac{1}{2}=\frac{4-k}{-2} \ne \frac{1}{3} \\
  \textsf{substitute }k=5 \\
  \frac{1}{2}=\frac{4-5}{-2} \\
  \frac{1}{2}=\frac{1}{2} \ne \frac{1}{3} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $k=3 \lor k=5$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap  
  >$
  \begin{array}{ll}
  a=0 \longrightarrow by+c=0 & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#special-cases-1}{\textsf{horizontal line of general form}} \\
  l_1 \parallel l_2 \Leftrightarrow \frac{a_1}{a_2}=\frac{b_1}{b_2} \ne \frac{c_1}{c_2} & \href{/math/0%20Core%20Course/27%20Chapter7%20analytic%20geometry%20Module2%20straight%20lines%20part2.html#_9-positional-relationships-between-two-lines}{\textsf{parallel positional relationship}} \\
  \end{array}
  >$

  :::
---

## 11.Focus 5
__Two lines are perpendicular__   
- When __the product of the slopes of two lines is $\boldsymbol{-1}$__,
  or when __their slopes are negative reciprocals of each other__,
  the __two lines are perpendicular__.
  Note __the cases where the slope is $\boldsymbol{0}$ or undefined__.


### $\fbox{13}\:$(Data Sufficiency) The lines $\small (m +2)x+3my+1=0$ and $\small (m-2)x+(m+2)y-3=0$ are perpendicular to each other.
::: wrap  
$
\begin{array}{lllll}
\textsf{(1)} \: m=\frac{1}{2} &
\textsf{(2)} \: m=-2 & \\
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
(m+2)(m-2)+3m(m+2)=0 \\
\textcolor{#9333EA}{\textsf{verify condition }\textsf{(1)}} \\
(\frac{1}{2}+2)(\frac{1}{2}-2)+3\frac{1}{2}(\frac{1}{2}+2)=0 \\
\frac{5}{2}\cdot-\frac{3}{2}+3\cdot\frac{5}{4}=0 \\
-\frac{15}{4}+\frac{15}{4}=0 \\
\textcolor{#9333EA}{\textsf{verify condition }\textsf{(2)}} \\
(-2+2)(-2-2)+3(-2)(-2+2)=0 \\
0\cdot-4+-6\cdot0=0 \\
0+0=0 \\
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
  a_1a_2+b_1b_2=0 & \href{/math/0%20Core%20Course/27%20Chapter7%20analytic%20geometry%20Module2%20straight%20lines%20part2.html#_9-positional-relationships-between-two-lines}{\textsf{perpendicular positional relationship}} \\
  \end{array}
  >$

  :::
---


### $\fbox{14}\:$If the lines $\small mx+3y+5=0$ and $\small nx−2y+1=0$ are perpendicular to each other, how many pairs of positive integer solutions satisfy this condition $\small \mathpunct{?}$.
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
mn+3\cdot-2=0 \\
mn=6 \\
6=1\cdot6 \\
6=6\cdot1 \\
6=2\cdot3 \\
6=3\cdot2 \\
\end{array}
$   
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $4 \textsf{ pairs}$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_1a_2+b_1b_2=0 & \href{/math/0%20Core%20Course/27%20Chapter7%20analytic%20geometry%20Module2%20straight%20lines%20part2.html#_9-positional-relationships-between-two-lines}{\textsf{perpendicular positional relationship}} \\
  \end{array}
  >$

  :::
---


### $\fbox{15}\:$Given the points $\small A(1, -2)$ and $\small B(m, 2)$, and the equation of the perpendicular bisector of segment $\small AB$ as $\small x+2y−2=0$, find $\small m$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 3 &
\textsf{(B)} \: 4 &
\textsf{(C)} \: 5 &
\textsf{(D)} \: 6 &
\textsf{(E)} \: 7 & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by setting up an equation  
  ![Question straight lines figure Q-15 solve-1.svg](../../public/math/Core%20Course/Question%20straight%20lines%20figure%20Q-15%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll} 
  (\frac{m+1}{2},0) & \textsf{midpoint} \\
  \frac{m+1}{2}+0-2=0 \\
  m+1+0-2=2 \\
  m+1=4 \\
  m=3 \\
  \end{array}
  $  
  :::  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the slopes  
  ::: wrap  
  $
  \begin{array}{ll}
  k_{AB}=\frac{4}{m-1} \\
  x+2y−2=0 \Longrightarrow k=-\frac{1}{2} \\
  \textsf{perpendicular}=\textsf{slopes are negative reciprocals of each other} \\
  k_{AB}=\frac{2}{1} \\
  k_{AB}=\frac{4}{m-1}=2 \\
  4=2m-2 \\
  \frac{6}{2}=m \\
  m=3 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $m=3$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right) & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#_2-midpoint-coordinates-of-two-points}{\textsf{midpoint formula of two points}} \\
  k=\frac{y_2-y_1}{x_2-x_1} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#_4-two-point-slope-formula}{\textsf{two-point slope formula}} \\
  k=-\frac{a}{b} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#the-slope-of-the-general-form-is}{\textsf{slope of general form}} \\
  \end{array}
  >$

  :::
---


### $\fbox{16}\:$Given the equation of the line $\small x+2y−4=0$ and the coordinates of point $\small A$ as $\small (5,7)$, find the x-coordinate of the foot of the perpendicular from point $\small A$ to the line.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 6 &
\textsf{(B)} \: 5 &
\textsf{(C)} \: 2 &
\textsf{(D)} \: -2 &
\textsf{(E)} \: -1 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question straight lines figure Q-16 solve-1.svg](../../public/math/Core%20Course/Question%20straight%20lines%20figure%20Q-16%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  l=x+2y−4=0 \Longrightarrow k=-\frac{1}{2} \\
  \end{array}
  $  
  :::  
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the two-point slope formula  
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{let }B=(x_0,y_0) \\
  k_l=-\frac{1}{2} \Longrightarrow k_{AB}=2 \\
  \begin{cases}
  \begin{array}{ll}
  x_0+2y_0-4=0 & \textsf{point }B\textsf{ on }l \\
  \frac{y_0-7}{x_0-5}=2 & \textsf{slope of line segment }AB \\
  \end{array}
  \end{cases} \\
  x_0=4-2y_0 & ① \\
  \frac{y_0-7}{x_0-5}=2 & ② \\
  y_0-7=2(x_0-5) \\
  y_0-7=2x_0-10 \\
  y_0=2x_0-3 \\
  y_0=2(4-2y_0)-3 & \textsf{substitute }x_0 \\
  y_0=8-4y_0-3 \\
  y_0=5-4y_0 \\
  5y_0=5 \\
  y_0=1 \\
  x_0=4-2\cdot1 & \textsf{substitute }y_0 \\
  x_0=2 \\
  \end{array}
  $  
  :::    
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the point-slope form  
  ::: wrap   
  $
  \begin{array}{ll}
  k_l=-\frac{1}{2} \Longrightarrow k_{AB}=2 \\
  y=2(x-5)+7=2x-3 \\
  \begin{cases}
  x+2y−4=0 \\
  y=2x-3 \\
  \end{cases} \\
  x+2(2x-3)−4=0 & \textsf{substitute }y \\
  x+4x-6-4=0 \\
  5x-10=0 \\
  5x=10 \\
  x=2 \\
  \end{array}
  $  
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $x=2$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  k=-\frac{a}{b} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#the-slope-of-the-general-form-is}{\textsf{slope of general form}} \\
  k=\frac{y_2-y_1}{x_2-x_1} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#_4-two-point-slope-formula}{\textsf{two-point slope formula}} \\
  y=y_0+k(x-x_0) & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#point-slope-form}{\textsf{point-slope form}} \\
  \end{array}
  >$

  :::
---

## 12.Focus 6
__Two lines intersect__  
- When __the slopes of two lines are not equal__, __the two lines intersect__.
- __The system of equations formed by two lines__ can be used to find __the coordinates of their intersection point__.


### $\fbox{17}\:$(Data Sufficiency) The lines $\small (m+1)x+3y+1=0$ and $\small 2x+my−3=0$ intersect.
::: wrap  
$
\begin{array}{lllll}
\textsf{(1)} \: m>\frac{1}{2} &
\textsf{(2)} \: m<-4 & \\
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
\frac{a_1}{a_2} \ne \frac{b_1}{b_2} & \textsf{intersect} \rightarrow \textsf{not proportional} \\
\frac{m+1}{2} \ne \frac{3}{m} \\
m^2+m-6 \ne 0 \\
m^2+m-6\Rightarrow(m-2)(m+3)=0 \\
m=2 \lor -3 \longrightarrow m\ne2 \land m\ne-3 \\
m \in \mathbb{R} \setminus \{2, -3\} \\
\textcolor{#9333EA}{\textsf{verify condition }\textsf{(1)}} \\
m>\frac{1}{2} \Longrightarrow m=2 \\
\textcolor{#9333EA}{\textsf{verify condition }\textsf{(2)}} \\
m<-4 \Longrightarrow m\ne2 \land m\ne-3 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $\textsf{(1)}\,❌\;,\textsf{(2)}\,✅\;$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{a_1}{a_2} \ne \frac{b_1}{b_2} & \href{/math/0%20Core%20Course/27%20Chapter7%20analytic%20geometry%20Module2%20straight%20lines%20part2.html#_9-positional-relationships-between-two-lines}{\textsf{intersecting positional relationship}} \\
  \end{array}
  >$

  :::
---


### $\fbox{18}\:$What is the distance from the intersection point of $\small 2x+3y+4=0$ and $\small 3x+y−1=0$ to the origin $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \sqrt{2} &
\textsf{(B)} \: \sqrt{3} &
\textsf{(C)} \: 2 &
\textsf{(D)} \: \sqrt{5} &
\textsf{(E)} \: \sqrt{7} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\begin{cases}
2x+3y+4=0 \\
3x+y-1=0 \\
\end{cases} \\
2x+3y+4=0 & ① \\
9x+3y-3=0 & ② \\
(9x+3y-3)-(2x+3y+4)=0 & & ①\,-②\\
7x-7=0 \\
x=1 \\
3\cdot1+y-1=0 & \textsf{substitute }x \\
y=-2 \\
\textsf{Intersection point}=(1, -2) \\
d=\sqrt{(1-0)^2+(-2-0)^2} = \sqrt{5} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $d=\sqrt{5}$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#_3-distance-formula-between-two-points}{\textsf{distance formula between two points}} \\
  \end{array}
  >$

  :::
---

## 13.Positional Relationship Between a Point and a Line
- For __a point $\boldsymbol{(x_0, y_0)}$__ and __a line $\boldsymbol{y=kx+b}$__  
  ::: wrap  
  $
  y_0
  \begin{cases}
  \gt kx_0+b & \textsf{ point lies above line} \\
  =kx_0+b & \textsf{ point lies on line} \\
  \lt kx_0+b & \textsf{ point lies below line} \\
  \end{cases}
  $  
  :::  
  ![Point line relation.svg](../../public/math/Core%20Course/Point%20line%20relation.svg)  


## 14.Distance from a Point to a Line 
- For __the line $\boldsymbol{ax+by+c=0}$__,
  __the distance from the point $\boldsymbol{(x_0, y_0)}$ to the line is $\boldsymbol{d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}}$__.  
- Special case: __the distance from $\boldsymbol{O(0, 0)}$ to the line is $\boldsymbol{d=\frac{|c|}{\sqrt{a^2+b^2}}}$__.  
  ![Point line distance.svg](../../public/math/Core%20Course/Point%20line%20distance.svg)  


## 15.Distance Between Two Parallel Lines
- __The distance between the lines $\boldsymbol{ax+by+c_1=0}$ and $\boldsymbol{ax+by+c_2=0}$ is $\boldsymbol{d=\frac{|c_1-c_2|}{\sqrt{a^2+b^2}}}$__.
- Note: the derivation is done using __a point on one of the lines__,
  and then applying __the point-to-line distance formula__ to find __the distance between the two parallel lines__.  
  ![Parallel lines distance.svg](../../public/math/Core%20Course/Parallel%20lines%20distance.svg)  


## 16.Focus 7
__The positional relationship between a point and a line__   
- First __transform the line to the form $\boldsymbol{y=kx+b}$__, and __then substitute the point into the line for verification__.
- Note: if __the coefficient of $\boldsymbol{y}$ is not positive__, __the result will be the opposite__.
- ###### General form: $ax+by+c=0$  
  ::: wrap  
  $
  \begin{array}{ll}
  b>0
  \begin{cases}
  \begin{array}{ll}
  ax+by+c>0 & \textsf{point lies above line} \\
  ax+by+c<0 & \textsf{point lies below line} \\
  \end{array}
  \end{cases} \\
  b<0
  \begin{cases}
  \begin{array}{ll}
  ax+by+c>0 & \textsf{point lies below line} \\
  ax+by+c<0 & \textsf{point lies above line} \\
  \end{array}
  \end{cases}
  \end{array}
  $  
  :::


### $\fbox{19}\:$Given the line $\small x+2y-4=0$ and the coordinates of point $\small A$ as $\small (5-m, m)$. If point $\small A$ lies above the line, find the range of $\small m$. 
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: m>1 &
\textsf{(B)} \: m>-1 &
\textsf{(C)} \: m>-2 &
\textsf{(D)} \: m>-\frac{1}{2} &
\textsf{(E)} \: m<-1 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
A=(5-m, m) \\
5-m+2m-4 > 0 \\
(5-4)+(-m+2m) > 0 \\
1+m>0 \\
m>-1 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $m>-1$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  ax+by+c=0 & \href{/math/0%20Core%20Course/27%20Chapter7%20analytic%20geometry%20Module2%20straight%20lines%20part2.html#general-form}{\textsf{point-line position}} \\
  \end{array}
  >$

  :::
---

## 17.Focus 8
__The distance from a point to a line__
- First __transform the line to the general form__,
  and then use __the point-to-line distance formula__.


### $\fbox{20}\:$Given the points $\small C(2,−3),M(5,5)$, and $\small N(−3,−1)$, find the distance from point $\small C$ to line $\small MN$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{23}{5} &
\textsf{(B)} \: \frac{22}{5} &
\textsf{(C)} \: \frac{21}{5} &
\textsf{(D)} \: \frac{19}{5} &
\textsf{(E)} \: \frac{18}{5} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
K_{MN}=\frac{5-(-1)}{5-(-3)}=\frac{6}{8}=\frac{3}{4} \\
3x-4y+c=0 & \textsf{reverse-derive }k=-\frac{a}{b} \\
3 \cdot 5-4 \cdot 5+c=0 & \textsf{substitute }M \lor N \\
15-20+c=0 \\
c=5 \\
3\cdot 2-4\cdot (-3)+5=0 & \textsf{substitute }C \\
d=\frac{6+12+5}{\sqrt{3^2+4^2}}=\frac{23}{5} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $d=\frac{23}{5}$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  k=\frac{y_2-y_1}{x_2-x_1} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#_4-two-point-slope-formula}{\textsf{two-point slope formula}} \\
  k=-\frac{a}{b} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#the-slope-of-the-general-form-is}{\textsf{slope of general form}} \\
  ax+by+c=0 & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#general-form}{\textsf{line general form}} \\
  d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}} & \href{/math/0%20Core%20Course/27%20Chapter7%20analytic%20geometry%20Module2%20straight%20lines%20part2.html#_14-distance-from-a-point-to-a-line}{\textsf{point-to-line distance formula}} \\
  \end{array}
  >$

  :::
---

## 18.Focus 9
__The distance between two parallel lines__
- Use __the distance formula for two parallel lines__.
  First, __make the coefficients of $\boldsymbol{x}$ and $\boldsymbol{y}$ equal for both lines__, then solve.


### $\fbox{21}\:$Given the lines $\small 3x-4y+2=0$ and $\small 6x-8y+9=0$, find the distance between the two lines. 
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{7}{10} &
\textsf{(B)} \: \frac{1}{4} &
\textsf{(C)} \: \frac{1}{3} &
\textsf{(D)} \: \frac{1}{2} &
\textsf{(E)} \: \frac{7}{5} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\begin{cases}
\begin{array}{ll}
3x-4y+2=0 \longrightarrow 6x-8y+4=0 \\
6x-8y+9=0 \\
\end{array}
\end{cases} \\
d=\frac{|9-4|}{\sqrt{6^2+8^2}} = \frac{5}{10} = \frac{1}{2}\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $d=\frac{1}{2}$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=\frac{|c_1-c_2|}{\sqrt{a^2+b^2}} & \href{/math/0%20Core%20Course/27%20Chapter7%20analytic%20geometry%20Module2%20straight%20lines%20part2.html#_15-distance-between-two-parallel-lines}{\textsf{parallel lines distance formula}} \\
  \end{array}
  >$

  :::
---

| Platform    | Lesson                                                                                            | Materials                                                                                      |
|-------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=rzjADVpR2JQ&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)      | [Core courseware](../../public/math/Core%20Course/pdf/Core%20courseware.pdf)                   |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuak?playlist=x9h6d2)                                | [Core courseware answers](../../public/math/Core%20Course/pdf/Core%20courseware%20answers.pdf) |
| Rumble      | [Watch](https://rumble.com/v6s95hb-28-chapter7-resolve-geometry-module2-straight-line-lower.html) |                                                                                                |
