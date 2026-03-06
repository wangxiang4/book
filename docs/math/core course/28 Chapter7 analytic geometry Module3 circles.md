---
title: Chapter7 Analytic Geometry – Module3 Circles
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Tzz3WDdaVEI?si=m4F_fnKl4-9TpMiJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Module 7–03 Circles

## 1.Equation of a Circle

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Standard form
- __The equation of a circle with center $\boldsymbol{(x_0,y_0)}$ and radius $\boldsymbol{r}$ is $\boldsymbol{(x-x_0)^2+(y-y_0)^2=r^2}$__.
- __Equation derivation__  
  ![Circle standard form equation derivation.svg](../../public/math/core%20course/Circle%20standard%20form%20equation%20derivation.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  \sqrt{(x-x_0)^2+(y-y_0)^2} = r & \href{/math/core%20course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#_3-distance-formula-between-two-points}{\textsf{distance formula between two points}} \\
  (x-x_0)^2+(y-y_0)^2 = r^2 \\
  \boldsymbol{\textsf{example: }}(x+3)^2+(y-2)^2=4 \\
  \textsf{center: }(-3,2) & \textsf{let }r=0\textsf{ to shrink center} \\
  \textsf{radius: }r=2 & 2^2=4 \\
  \end{array}
  $  
  :::

### $\textcolor{#1E3A5F}{\fbox{2}}\:$General form  
- $\boldsymbol{x^2+y^2+ax+by+c=0}$  
::: wrap  
- ###### __Completing the square, the standard form of the circle is $\boldsymbol{(x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4}}$__.
  - __The center is $\boldsymbol{(-\frac{a}{2},-\frac{b}{2})}$__.
  - __The radius is $\boldsymbol{r=\frac{a^2+b^2-4c}{2}}$__.
:::  
::: wrap  
- __Special cases__
  - $a=0\textsf{: }x^2+y^2+by+c=0$  
    __center on the y-axis__
  - $b=0\textsf{: }x^2+y^2+ax+c=0$  
    __center on the x-axis__
  - $c=0\textsf{: }x^2+y^2+ax+by+c=0$  
    __equation passes through the origin__
:::   
- ###### Note: __the condition for the general form of a circle is $\boldsymbol{a^2+b^2-4c>0}$__.
- __Equation derivation__   
  ::: wrap  
  $
  \begin{array}{ll}
  (x-x_0)^2+(y-y_0)^2 = r^2 & \textsf{standard form} \\
  x^2-2x_0x+x_0^2+y^2-2 y_0y+y_0^2 = r^2 \\
  x^2+y^2-2x_0x-2y_0y+(x_0^2+y_0^2)=r^2 \\
  x^2+y^2-2x_0x-2y_0y+(x_0^2+y_0^2-r^2)=0 \\
  \textsf{let }a=-2x_0 \quad b=-2y_0 \quad c=x_0^2+y_0^2-r^2 \\
  x^2+y^2+ax+by+c=0 \\
  \end{array}
  $  
  :::

## 2.Special Circles (Standard Form)  

|   	Special Circle   |         Equation          |                                                               Graph                                                               |         Property          |
|:-------------------:|:-------------------------:|:---------------------------------------------------------------------------------------------------------------------------------:|:-------------------------:|
|       $x_0=0$       |    $x^2+(y-y_0)^2=r^2$    | ![Special circles standard form graph 1.svg](../../public/math/core%20course/Special%20circles%20standard%20form%20graph%201.svg) | __Center on the y-axis__  |
|       $y_0=0$       |    $(x-x_0)^2+y^2=r^2$    | ![Special circles standard form graph 2.svg](../../public/math/core%20course/Special%20circles%20standard%20form%20graph%202.svg) | __Center on the x-axis__  |
|     $x_0=y_0=0$     |       $x^2+y^2=r^2$       | ![Special circles standard form graph 3.svg](../../public/math/core%20course/Special%20circles%20standard%20form%20graph%203.svg) | __Center at the origin__  |
|     $\|y_0\|=r$     | $(x-x_0)^2+(y-y_0)^2=r^2$ | ![Special circles standard form graph 4.svg](../../public/math/core%20course/Special%20circles%20standard%20form%20graph%204.svg) | __Tangent to the x-axis__ |
|     $\|x_0\|=r$     | $(x-x_0)^2+(y-y_0)^2=r^2$ | ![Special circles standard form graph 5.svg](../../public/math/core%20course/Special%20circles%20standard%20form%20graph%205.svg) | __Tangent to the y-axis__ |
| $\|x_0\|=\|y_0\|=r$ | $(x-x_0)^2+(y-y_0)^2=r^2$ | ![Special circles standard form graph 6.svg](../../public/math/core%20course/Special%20circles%20standard%20form%20graph%206.svg) | __Tangent to both axes__  |

## 3.Focus 1
__The equation of a circle__  
- Note __the conditions of the circle's equation__ and __the form of the semicircle's equation__.


### $\fbox{22}\:$Given the circle $\small x^2+y^2-4x+6y+m=0$, find the range of $\small m$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: m<12 &
\textsf{(B)} \: m<13 &
\textsf{(C)} \: m\le12 &
\textsf{(D)} \: m\le13 &
\textsf{(E)} \: m>13 & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by transforming into standard form  
  ::: wrap   
  $
  \begin{array}{ll}
  (x+\frac{-4}{2})^2+(y+\frac{6}{2})^2=\frac{(-4)^2+6^2-4m}{4} \\
  (x-2)^2+(y+3)^2=\frac{16+36-4m}{4}=\frac{52-4m}{4} \\
  (x-2)^2+(y+3)^2=13-m>0 & \textsf{valid circle (radius}>0\textsf{)}\\
  m<13 \\
  \end{array}
  $   
  :::    
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the condition for the general form  
  ::: wrap   
  $
  \begin{array}{ll}
  a^2+b^2-4c>0 \\
  (-4)^2+6^2-4m>0 \\
  16+36-4m>0 \\
  52-4m>0 \\
  \frac{52}{4}>m \\
  m<13 \\
  \end{array}
  $   
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $m<13$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#completing-the-square-the-standard-form-of-the-circle-is}{\textsf{completing the circle standard form}} \\
  x^2+y^2+ax+by+c=0 & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#general-form}{\textsf{circle general form}} \\
  a^2+b^2-4c>0 & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#note-the-condition-for-the-general-form-of-a-circle-is}{\textsf{circle general form condition}} \\
  \end{array}
  >$

  :::
---


### $\fbox{23}\:$Given the circle $\small x^2+y^2=1$, find the equation of its right semicircle.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: y-\sqrt{1-x^2}=0 &
\textsf{(B)} \: x-\sqrt{1-y^2}=0 &
\textsf{(C)} \: y+\sqrt{1-x^2}=0 & \\
\textsf{(D)} \: x+\sqrt{1-y^2}=0 &
\textsf{(E)} \: x^2+y^2=\frac{1}{2} & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question circles figure Q-23 solve-1.svg](../../public/math/core%20course/Question%20circles%20figure%20Q-23%20solve-1.svg)  
  ::: wrap   
  $
  \begin{array}{ll}
  x^2+y^2=1 \\
  x^2=1-y^2 \\
  x=\sqrt{1-y^2} \\
  x-\sqrt{1-y^2}=0 \rightarrow x=\sqrt{1-y^2} & x \in \mathbb{R_+} \textsf{ right semicircle} \\
  x+\sqrt{1-y^2}=0 \rightarrow x=-\sqrt{1-y^2} & x \in \mathbb{R_-} \textsf{ left semicircle} \\
  y-\sqrt{1-x^2}=0 \rightarrow y=\sqrt{1-x^2} & y \in \mathbb{R_+} \textsf{ upper semicircle} \\
  y+\sqrt{1-x^2}=0 \rightarrow y=-\sqrt{1-x^2} & y \in \mathbb{R_-} \textsf{ lower semicircle} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $x-\sqrt{1-y^2}=0$, so choose $B$. 

  :::
- Circle standard form semicircle equation    
  ::: wrap
  >$
  \begin{array}{ll}
  (x-x_0)^2+(y-y_0)^2=r^2 \\
  (x-x_0)^2=r^2-(y-y_0)^2 \\
  x=x_0+\sqrt{r^2-(y-y_0)^2} & \textsf{left semicircle} \\
  x=x_0-\sqrt{r^2-(y-y_0)^2} & \textsf{right semicircle} \\
  (y-y_0)^2=r^2-(x-x_0)^2 \\
  y=y_0+\sqrt{r^2-(x-x_0)^2} & \textsf{upper semicircle} \\
  y=y_0-\sqrt{r^2-(x-x_0)^2} & \textsf{lower semicircle} \\
  \end{array}
  >$

  :::
---

## 4.Focus 2
__The intersection of a circle and the coordinate axes__
- $\boldsymbol{y=0}$: __intersection points of the circle with the x-axis__. 
- $\boldsymbol{x=0}$: __intersection points of the circle with the y-axis__.
- If the circle has __only one intersection point with an axis__,
  __the circle is tangent to that axis__.



### $\fbox{24}\:$Find the two intersection points of the circle $\small x^2+(y-1)^2=4$ with the x-axis.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: (-\sqrt{5},0),(\sqrt{5},0) &
\textsf{(B)} \: (-2,0),(2,0) & \\
\textsf{(C)} \: (0,-\sqrt{5}),(0,\sqrt{5}) &
\textsf{(D)} \: (-\sqrt{3},0),(\sqrt{3},0) & \\
\textsf{(E)} \: (-\sqrt{2},-\sqrt{3}),(\sqrt{2},\sqrt{3}) & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{let }y=0 \\
x^2+(0-1)^2=4 \\
x^2+1=4 \\
x=\pm\sqrt{3} \Longrightarrow (-\sqrt{3},0),(\sqrt{3},0)\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $x=\pm\sqrt{3} \Rightarrow (-\sqrt{3},0),(\sqrt{3},0)$, so choose $D$. 

  :::
---


### $\fbox{25}\:$Find the equation of a circle tangent to the y-axis with its center at $\small P(−2,3)$.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: (x-2)^2+(y+3)^2=4 &
\textsf{(B)} \: (x+2)^2+(y-3)^2=4 & \\
\textsf{(C)} \: (x-2)+(y+3)^2=9 &
\textsf{(D)} \: (x+2)^2+(y-3)^2=9 & \\
\textsf{(E)} \: (x-3)^2+(y+2)^2=9 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
|x_0|=r & \textsf{tangent to y-axis} \\
r=|-2|=2 \\
((-2)-x_0)^2+(3-y_0)^2=2^2 \\ 
(x+2)^2+(y-3)^2=4 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $(x+2)^2+(y-3)^2=4$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  |x_0|=r & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#_2-special-circles-standard-form}{\textsf{special circles in standard form}} \\
  (x-x_0)^2+(y-y_0)^2=r^2 & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#standard-form}{\textsf{circle standard form}} \\
  \end{array}
  >$

  :::
---

## 5.Positional Relationship Between a Point and a Circle
- For __a point $\boldsymbol{P(x_p, y_p)}$__ and __a circle $\boldsymbol{(x-x_0)^2+(y-y_0)^2=r^2}$__  
  ::: wrap  
  $
  (x_p-x_0)^2+(y_p-y_0)^2
  \begin{cases}
  \lt r^2 & \textsf{ point lies inside circle} \\
  =r^2 & \textsf{ point lies on circle} \\
  \gt r^2 & \textsf{ point lies outside circle} \\
  \end{cases}
  $  
  :::  
  ![Point circle relation.svg](../../public/math/core%20course/Point%20circle%20relation.svg)

## 6.Relationship Between a Line and a Circle
- For __the line $\boldsymbol{y=kx+b}$__ and __the circle $\boldsymbol{(x-x_0)^2+(y-y_0)^2=r^2}$__,
  __the distance from the circle's center $\boldsymbol{O(x_0,y_0)}$ to the line is $\boldsymbol{d}$__.

|          Line–Circle Position Relationship           |                                                          Diagram                                                          |              Geometric Condition              |
|:----------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------:|
| __Line and circle are separate__<br/>No Intersection | ![Line circle relationship diagram 1.svg](../../public/math/core%20course/Line%20circle%20relationship%20diagram%201.svg) |                     $d>r$                     |
| __Line tangent to circle__<br/>1 Intersection Point  | ![Line circle relationship diagram 2.svg](../../public/math/core%20course/Line%20circle%20relationship%20diagram%202.svg) |                     $d=r$                     |
| __Line intersects circle__<br/>2 Intersection Points | ![Line circle relationship diagram 3.svg](../../public/math/core%20course/Line%20circle%20relationship%20diagram%203.svg) |                     $d<r$                     |

- ###### __Chord length of a circle__
  - Derived from __the pythagorean theorem $\boldsymbol{c^2=a^2+b^2}$__.
  - $\textsf{chord length} = 2\sqrt{r^2-d^2}$  
    ![Circle chord length.svg](../../public/math/core%20course/Circle%20chord%20length.svg)  


## 7.Relationship Between Two Circles
- For __the two circles $\boldsymbol{(x-x_1)^2+(y-y_1)^2=r_1^2}$ and $\boldsymbol{(x-x_2)^2+(y-y_2)^2=r_2^2}$__, __where $\boldsymbol{r_1>r_2}$__,
  __the distance between their centers $\boldsymbol{O_1(x_1, y_1)}$ and $\boldsymbol{O_2(x_2, y_2)}$ is $\boldsymbol{d}$__.

|       Circle–Circle Position Relationship       |                                                          Diagram                                                          |              Geometric Condition              | 	Number of Common Internal Tangents | Number of Common External Tangents |
|:-----------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------:|:-----------------------------------:|:----------------------------------:|
|   __Externally separate__<br/>No Intersection   | ![Two circles relationship diagram 1.svg](../../public/math/core%20course/Two%20circles%20relationship%20diagram%201.svg) |                  $d>r_1+r_2$                  |                  2                  |                 2                  |
| __Externally tangent__<br/>1 Intersection Point | ![Two circles relationship diagram 2.svg](../../public/math/core%20course/Two%20circles%20relationship%20diagram%202.svg) |                  $d=r_1+r_2$                  |                  1                  |                 2                  |
|   __Intersecting__<br/>2 Intersection Points    | ![Two circles relationship diagram 3.svg](../../public/math/core%20course/Two%20circles%20relationship%20diagram%203.svg) |         $\|r_1-r_2\|\lt d\lt r_1+r_2$         |                  0                  |                 2                  |
| __Internally tangent__<br/>1 Intersection Point | ![Two circles relationship diagram 4.svg](../../public/math/core%20course/Two%20circles%20relationship%20diagram%204.svg) |                $d=\|r_1-r_2\|$                |                  0                  |                 1                  |
|  __Internally contained__<br/>No Intersection   | ![Two circles relationship diagram 5.svg](../../public/math/core%20course/Two%20circles%20relationship%20diagram%205.svg) |              $d\lt \|r_1-r_2\|$               |                  0                  |                 0                  |

- ###### Distance relationships between two circles  
  ![Circle distance range position axis.svg](../../public/math/core%20course/Circle%20distance%20range%20position%20axis.svg)   


## 8.Focus 3
__The positional relationship between a point and a circle__
- Analyze by __substituting a point into the equation of a circle__.


### $\fbox{26}\:$If the point $\small P(2m, m)$ lies inside the circle $\small x^2+y^2-4x+2y+1=0$, find the range of $\small m$.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{5} < m < 1 &
\textsf{(B)} \: -\frac{1}{5} < m < 1 &
\textsf{(C)} \: m \lt \frac{1}{5} \lor m \gt 1 & \\
\textsf{(D)} \: -1 < m < \frac{1}{5} &
\textsf{(E)} \: -1 < m < -\frac{1}{5} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
x^2+y^2-4x+2y+1<0 & \textsf{point lies inside circle} \\
4m^2+m^2-8m+2m+1<0 & \textsf{substitute }P \\
5m^2-6m+1<0 \\
5m^2-6m+1\Rightarrow(1m-1)(5m-1)=0 \\
m=1 \lor \frac{1}{5} \\
\textsf{parabola analysis} \\
5>0\textsf{:}\, \textsf{opens upward} \\
\textsf{roots}\textsf{:}\, \textsf{intersects x-axis at }x_1=\frac{1}{5}\textsf{ and }x_2=1 \\
\textsf{range}\textsf{:}\, f(x)<0\textsf{ between the two roots} \\
f(x)<0 \longrightarrow \frac{1}{5} < m < 1 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $f(x)<0 \longrightarrow \frac{1}{5} < m < 1$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (x_p-x_0)^2+(y_p-y_0)^2
  \begin{cases}
  \lt r^2 & \textsf{ point lies inside circle} \\
  =r^2 & \textsf{ point lies on circle} \\
  \gt r^2 & \textsf{ point lies outside circle} \\
  \end{cases} & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#_5-positional-relationship-between-a-point-and-a-circle}{\textsf{point-circle position}} \\
  \end{array}
  >$

  :::
---
  
## 9.Focus 4
__The positional relationship between a line and a circle__   
- First, __find the distance $\boldsymbol{d}$ from the circle's center to the line__,
  then __compare $\boldsymbol{d}$ with the radius $\boldsymbol{r}$ for analysis__.
- The key positional relationship is __tangency__,
  when __they intersect__, __the chord length is $\boldsymbol{2\sqrt{r^2-d^2}}$__.


### $\fbox{27}\:$The line $\small y=k(x+2)$ is a tangent to the circle $\small x^2+y^2=1$, find $\small k$.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: \pm\frac{\sqrt{3}}{2} &
\textsf{(B)} \: \frac{\sqrt{3}}{3} &
\textsf{(C)} \: -\frac{\sqrt{3}}{3} &
\textsf{(D)} \: \pm\frac{\sqrt{3}}{3} &
\textsf{(E)} \: \pm\sqrt{3} & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the geometric condition $d=r$  
  ::: wrap   
  $
  \begin{array}{ll}
  y=k(x+2) \\
  y=kx+k2 \\
  kx-y+k2=0 \\
  d=\frac{|2k|}{\sqrt{k^2+1^2}}=1 & \textsf{center}=O(0,0) \\
  |2k|=\sqrt{k^2+1} \\
  (2k)^2=(\sqrt{k^2+1})^2 \\
  4k^2=k^2+1 \\
  3k^2=1 \\
  k^2=\frac{1}{3} \\
  k=\pm\frac{1}{\sqrt{3}} \\
  \frac{1}{\sqrt{3}}\cdot\frac{\sqrt{3}}{\sqrt{3}}=\frac{\sqrt{3}}{3} \\
  k=\pm\frac{\sqrt{3}}{3} \\
  \end{array}
  $   
  :::     
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by setting up a system of equations  
  ::: wrap   
  $
  \begin{array}{ll}
  \begin{cases}
  y=k(x+2) \\
  x^2+y^2=1 \\
  \end{cases} \\
  x^2+k^2(x+2)^2=1 & \textsf{substitute }y \\
  x^2+k^2(x^2+4x+4)=1 \\
  x^2+k^2x^2+4k^2x+4k^2=1 \\
  (1+k^2)x^2+4k^2x+(4k^2-1)=0 \\
  \Delta=(4k^2)^2-4(1+k^2)(4k^2-1)=0 & \textsf{tangent} \\
  16k^4-4(1+k^2)(4k^2-1)=0 \\
  16k^4-4[1(4k^2-1)+k^2(4k^2-1)]=0 \\
  16k^4-4[4k^2-1+4k^4-k^2]=0 \\
  16k^4-4[3k^2+4k^4-1]=0 \\
  16k^4-[12k^2+16k^4-4]=0 \\
  16k^4-16k^4-12k^2+4=0 \\
  -12k^2+4=0 \\
  k^2=\frac{-4}{-12}=\frac{1}{3} \\
  k=\pm\frac{1}{\sqrt{3}} \\
  \frac{1}{\sqrt{3}}\cdot\frac{\sqrt{3}}{\sqrt{3}}=\frac{\sqrt{3}}{3} \\
  k=\pm\frac{\sqrt{3}}{3} \\
  \end{array}
  $   
  :::  
- $\textcolor{#228B22}{\fbox{3}}\:$Solve by using graphical analysis (only applicable in simple cases)  
  ![Question circles figure Q-27 solve-1.svg](../../public/math/core%20course/Question%20circles%20figure%20Q-27%20solve-1.svg)   
  ::: wrap   
  $
  \begin{array}{ll}
  y=k(x+2) \\
  y=y_0+k(x_0+2) \\
  \overbrace{y_0=0 \Longrightarrow \textsf{x-intercept}=(–2, 0)}^{\textsf{let both sides = 0}} \\
  (x-x_0)^2+(y-y_0)^2=r^2 \Longrightarrow \textsf{r=1} \\
  1:\sqrt{3}:2 = 30^\circ,60^\circ,90^\circ & \textsf{special right triangle} \\
  30^\circ=\frac{\sqrt{3}}{3} & \textsf{angle-slope reference}\\
  k=\pm\frac{\sqrt{3}}{3} \\
  \end{array}
  $   
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $k=\pm\frac{\sqrt{3}}{3}$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=r & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#_6-relationship-between-a-line-and-a-circle}{\textsf{line-circle relationship}} \\
  ax+by+c=0 & \href{/math/core%20course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#general-form}{\textsf{line general form}} \\
  d=\frac{|c|}{\sqrt{a^2+b^2}} & \href{/math/core%20course/27%20Chapter7%20analytic%20geometry%20Module2%20straight%20lines%20part2.html#_14-distance-from-a-point-to-a-line}{\textsf{point-to-line distance formula}} \\
  (x-x_0)^2+(y-y_0)^2=r^2 & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#standard-form}{\textsf{circle standard form}} \\
  (a\pm b)^2=a^2\pm2ab+b^2 & \href{/math/core%20course/12%20Chapter3%20polynomials%20rational%20expressions%20functions%20Module1%20polynomials%20and%20operations%20part1.html#_1-six-fundamental-formulas}{\textsf{perfect square formula}} \\
  \Delta=b^2-4ac & \href{/math/core%20course/17%20Chapter4%20equations%20and%20inequalities%20Module3%20linear%20inequalities%20Module4%20quadratic%20inequalities.html#_3-relationship-among-functions-equations-and-inequalities}{\textsf{quadratic discriminant}} \\
  y=y_0+k(x-x_0) & \href{/math/core%20course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#point-slope-form}{\textsf{point-slope form}} \\
  1:\sqrt{3}:2 & \href{/math/core%20course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20part2.html#in-a-right-triangle-the-ratio-of-the-three-sides-is}{\textsf{30-60-90 right triangle}} \\
  30^\circ=\frac{\sqrt{3}}{3} & \href{/math/core%20course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#_3-common-inclination-angles-and-slope}{\textsf{inclination angle–slope}} \\
  \end{array}
  >$

  :::
---


### $\fbox{28}\:$Given a circle whose center is the intersection point of the line $\small x-y+1=0$ and the x-axis, and the circle is tangent to the line $\small x+y+3=0$, find the equation of the circle.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: (x-1)^2+y^2=2 &
\textsf{(B)} \: (x+1)^2+y^2=2 & \\
\textsf{(C)} \: (x+1)^2+y^2=4 &
\textsf{(D)} \: x^2+(y+1)^2=2 & \\
\textsf{(E)} \: x^2+(y-1)^2=2 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
x-y+1=0 \\
y=x+1 \\
\overbrace{y=0 \Longrightarrow \textsf{x-intercept}=(–1, 0)}^{\textsf{let both sides = 0}} & \textsf{center} \\
x+y+3=0 \\
d=\frac{|-1+3|}{\sqrt{1+1}}=\frac{2\sqrt{2}}{2}=\sqrt{2} & \textsf{substitute }(-1, 0) \\
r=\sqrt{2} \\
[x-(-1)]^2+(y-0)^2=\sqrt{2}^2 \\
(x+1)^2+y^2=2 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $(x+1)^2+y^2=2$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  y=kx+b & \href{/math/core%20course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#slope-intercept-form}{\textsf{slope-intercept form}} \\
  d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}} & \href{/math/core%20course/27%20Chapter7%20analytic%20geometry%20Module2%20straight%20lines%20part2.html#_14-distance-from-a-point-to-a-line}{\textsf{point-to-line distance formula}} \\
  (x-x_0)^2+(y-y_0)^2=r^2 & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#standard-form}{\textsf{circle standard form}} \\
  \end{array}
  >$

  :::
---


### $\fbox{29}\:$Find the length of the chord intercepts by the line $\small x+2y-5+\sqrt{5}=0$ on the circle $\small x^2+y^2-2x-4y=0$.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: 1 &
\textsf{(B)} \: 2 &
\textsf{(C)} \: 4 &
\textsf{(D)} \: 6 &
\textsf{(E)} \: 4\sqrt{6} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
x^2+y^2-2x-4y=0 \\
(x+\frac{-2}{2})^2+(y+\frac{-4}{2})^2=\frac{(-2)^2+(-4)^2-4\cdot0}{4} \\
(x-1)^2+(y-2)^2=5 & r=\sqrt{5} \\
(-\frac{a}{2}, -\frac{b}{2}) \longrightarrow (1,2) \\
x+2y-5+\sqrt{5}=0 \\
d=\frac{|(1\cdot1)+(2\cdot2)+(-5+\sqrt{5})|}{\sqrt{1^2+2^2}}=\frac{\sqrt{5}}{\sqrt{5}}=1 & \textsf{substitute }(1,2) \\
\textsf{chord length}=2\sqrt{\sqrt{5}^2-1^2}=2\sqrt{4}=4 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\textsf{chord length}=4$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#completing-the-square-the-standard-form-of-the-circle-is}{\textsf{completing the circle standard form}} \\
  (-\frac{a}{2}, -\frac{b}{2}) & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#completing-the-square-the-standard-form-of-the-circle-is}{\textsf{center of standard-form circle}} \\
  d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}} & \href{/math/core%20course/27%20Chapter7%20analytic%20geometry%20Module2%20straight%20lines%20part2.html#_14-distance-from-a-point-to-a-line}{\textsf{point-to-line distance formula}} \\
  2\sqrt{r^2-d^2} & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#chord-length-of-a-circle}{\textsf{chord length of a circle}} \\
  \end{array}
  >$

  :::
---


### $\fbox{30}\:$If the line $\small x−y+1=0$ and the circle $\small (x-a)^2+y^2=2$ have common points, find the range of $\small a$.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: [-4, 1] &
\textsf{(B)} \: [-3, 1] &
\textsf{(C)} \: (-3, 1) & \\
\textsf{(D)} \: [1, 4] &
\textsf{(E)} \: [-3, 3] & \\
\end{array}
$  
:::
#### Solution
- __have common points $\boldsymbol{\Longrightarrow}$ tangent and intersecting__   
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the geometric condition $d \le r$  
  ::: wrap   
  $
  \begin{array}{ll}
  (x-a)^2+y^2=2 & r=\sqrt{2}\\
  (-\frac{a}{2}, -\frac{b}{2}) \longrightarrow (a, 0) \\
  x−y+1=0 \\
  d=\frac{|(1\cdot a)+(-1\cdot0)+1|}{\sqrt{1^2+1^2}} \le \sqrt{2} & \textsf{substitute }(a, 0) \\
  |a+1| \le 2 \\
  -2 \le a+1 \le 2  & ∣x∣ \le c \iff −c \le x \le c \\
  -2-1 \le a \le 2-1 \\
  -3 \le a \le 1 \\
  \end{array}
  $   
  :::  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by setting up a system of equations  
  ::: wrap   
  $
  \begin{array}{ll}
  \begin{cases}
  x−y+1=0 \rightarrow y=x+1\\
  (x-a)^2+y^2=2 \\
  \end{cases} \\
  (x-a)^2+(x+1)^2=2 & \textsf{substitute }y \\
  x^2-2ax+a^2+x^2+2x+1=2 \\
  2x^2+(-2a+2)x+(a^2+1)=2 \\
  2x^2+(-2a+2)x+(a^2+1-2)=0 \\
  2x^2+(2-2a)x+a^2-1=0 \\
  \Delta=(2-2a)^2-8(a^2-1) \ge 0 & \textsf{tangent and intersecting} \\
  4-8a+4a^2-8a^2+8 \ge 0 \\
  -4a^2-8a+12 \ge 0 \\
  a^2+2a-3 \le 0 \\
  a^2+2a-3\Rightarrow(a+3)(a-1)=0 \\
  a=-3 \lor 1 \\
  \textsf{parabola analysis} \\
  1>0\textsf{:}\, \textsf{opens upward} \\
  \textsf{roots}\textsf{:}\, \textsf{intersects x-axis at }x_1=-3\textsf{ and }x_2=1 \\
  \textsf{range}\textsf{:}\, f(x)\le0\textsf{ between the two roots} \\
  f(x)\le0 \longrightarrow -3 \le a \le 1 \\
  \end{array}
  $   
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $f(x)\le0 \longrightarrow -3 \le a \le 1$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (x-x_0)^2+(y-y_0)^2=r^2 & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#standard-form}{\textsf{circle standard form}} \\
  (-\frac{a}{2}, -\frac{b}{2}) & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#completing-the-square-the-standard-form-of-the-circle-is}{\textsf{center of standard-form circle}} \\
  d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}} & \href{/math/core%20course/27%20Chapter7%20analytic%20geometry%20Module2%20straight%20lines%20part2.html#_14-distance-from-a-point-to-a-line}{\textsf{point-to-line distance formula}} \\
  ∣x∣ \le c \iff −c \le x \le c & \textsf{absolute value inequality expansion} \\
  \Delta=b^2-4ac & \href{/math/core%20course/17%20Chapter4%20equations%20and%20inequalities%20Module3%20linear%20inequalities%20Module4%20quadratic%20inequalities.html#_3-relationship-among-functions-equations-and-inequalities}{\textsf{quadratic discriminant}} \\
  (a\pm b)^2=a^2\pm2ab+b^2 & \href{/math/core%20course/12%20Chapter3%20polynomials%20rational%20expressions%20functions%20Module1%20polynomials%20and%20operations%20part1.html#_1-six-fundamental-formulas}{\textsf{perfect square formula}} \\
  \end{array}
  >$

  :::
---

## 10.Focus 5
__The positional relationship between two circles__  
- First, __find the distance $\boldsymbol{d}$ between the two circle centers__,
  then __compare it with $\boldsymbol{r_1+r_2}$ and $\boldsymbol{|r_1-r_2|}$ for analysis__.
- The key positional relationship is __internal and external tangency__,
  __the positional relationships correspond to the common tangents__.

### $\fbox{31}\:$The radii of two circles are the two roots of the equation $\small x^2-3x+2=0$, and the distance between the two centers is $\small 3$. What is the positional relationship between the two circles $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \textsf{externally separate} &
\textsf{(B)} \: \textsf{externally tangent} & 
\textsf{(C)} \: \textsf{internally tangent} & \\
\textsf{(D)} \: \textsf{intersecting} & 
\textsf{(E)} \: \textsf{internally contained} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
x^2-3x+2=0 \\
(x-1)(x-2)=0 \\
r_1=1 \lor r_2=2 \\
d=3=r_1+r_2 \Longrightarrow \textsf{externally tangent} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $d=r_1+r_2 \Longrightarrow \textsf{externally tangent}$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=r_1+r_2 & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#_7-relationship-between-two-circles}{\textsf{relationship between two circles}} \\
  \end{array}
  >$

  :::
---


### $\fbox{32}\:$The two circles $\small (x-a)^2+(y-b)^2=r^2$ and $\small (x-b)^2+(y-a)^2=r^2$ are tangent, find the correct expression.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: (a-b)^2=r^2 &
\textsf{(B)} \: (a-b)^2=2r^2 &
\textsf{(C)} \: (a+b)^2=r^2 & \\
\textsf{(D)} \: (a+b)^2=2r^2 &
\textsf{(E)} \: (a-b)^2=3r^2 & \\
\end{array}
$  
:::
#### Solution
 
- __tangency $\boldsymbol{\Longrightarrow}$ internal and external tangency__  
- __$\boldsymbol{d=|r_1-r_2|=0}$, there is no tangency; the two circles coincide and merge into one__   
- Solve by using the geometric condition $d=r_1+r_2$      
  ::: wrap   
  $
  \begin{array}{ll}
  r_1=r_2=r \\
  (a,b) \land (b,a) \\
  d=\sqrt{(a-b)^2+(b-a)^2}=r+r=2r \\
  2(a-b)^2=4r^2 \\
  (a-b)^2=2r^2 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $(a-b)^2=2r^2$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  d=r_1+r_2 \\
  d=|r_1-r_2| \\
  \end{cases} & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#_7-relationship-between-two-circles}{\textsf{relationship between two circles}} \\
  (x-x_0)^2+(y-y_0)^2=r^2 & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#standard-form}{\textsf{circle standard form}} \\
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/core%20course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#_3-distance-formula-between-two-points}{\textsf{distance formula between two points}} \\
  \end{array}
  >$

  :::
---


### $\fbox{33}\:$How many common tangents do the circles $\small x^2+y^2+2x+2y-2=0$ and $\small x^2+y^2-4x-2y+1=0$ have $\small \mathpunct{?}$.
::: wrap  
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
(x+\frac{2}{2})^2+(y+\frac{2}{2})^2=\frac{2^2+2^2-4(-2)}{4} \\
(x+1)^2+(y+1)^2=4 \\
(-1, -1) \land r_1=2 \\
(x+\frac{-4}{2})^2+(y+\frac{-2}{2})^2=\frac{(-4)^2+(-2)^2-4(1)}{4} \\
(x-2)^2+(y-1)^2=4 \\
(2, 1) \land r_2=2 \\
d=\sqrt{[2-(-1)]^2+[1-(-1)]^2}=\sqrt{13} \approx 3.6 \\
r_1-r_2 \lt \sqrt{13} \lt r_1+r_2 \Longrightarrow \textsf{intersecting} \\
\textsf{intersecting} \Longrightarrow \textsf{only 2 common tangents} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\textsf{intersecting} \Rightarrow \textsf{only 2 common tangents}$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#distance-relationships-between-two-circles}{\textsf{distance relationship between two circles}} \\
  (x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#completing-the-square-the-standard-form-of-the-circle-is}{\textsf{completing the circle standard form}} \\
  (-\frac{a}{2}, -\frac{b}{2}) & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#completing-the-square-the-standard-form-of-the-circle-is}{\textsf{center of standard-form circle}} \\
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/core%20course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#_3-distance-formula-between-two-points}{\textsf{distance formula between two points}} \\
  \end{array}
  >$

  :::
---

::: wrap   
### $\fbox{34}\:$The two circles $\small (x-2)^2+(y-1)^2=r^2 \textsf{ (} r>0 \textsf{)}$ and $\small x^2-6x+y^2-8y=0$ have intersection points, find the range of $\small r$.
:::   
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 5-\sqrt{10}\lt r\lt 5 &
\textsf{(B)} \: 5-\sqrt{10}\lt r\lt 5+\sqrt{10} & \\
\textsf{(C)} \: 5-\sqrt{10}\le r\le 5+\sqrt{10} &
\textsf{(D)} \: 5-\sqrt{10}\le r\le 5 & \\
\textsf{(E)} \: 5\le r \le 5+\sqrt{10} & \\
\end{array}
$  
:::
#### Solution
- __Have intersection points $\boldsymbol{\Longrightarrow}$ intersecting and internal and external tangency__  
  ::: wrap  
  $
  \begin{array}{ll}
  (x-2)^2+(y-1)^2=r^2 \\
  (2, 1) \land r_1=r \\
  (x+\frac{-6}{2})^2+(y+\frac{-8}{2})^2=\frac{(-6)^2+(-8)^2+(-4\cdot0)}{4} \\
  (x-3)^2+(y-4)^2=25 \\
  (3, 4) \land r_2=5 \\
  d=\sqrt{(3-2)^2+(4-1)^2}=\sqrt{10}\approx 3.16 \\
  |r_1-r_2| \le d \le r_1+r_2 \\
  |r-5| \le d \le r+5 \\
  d \le r+5 & \forall r\textsf{ holds} \\
  |r-5| \le d \\
  -\sqrt{10} \le r-5 \le \sqrt{10}  & ∣x∣ \le c \iff −c \le x \le c \\
  5-\sqrt{10} \le r \le 5+\sqrt{10}
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $5-\sqrt{10} \le r \le 5+\sqrt{10}$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#distance-relationships-between-two-circles}{\textsf{distance relationship between two circles}} \\
  (x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#completing-the-square-the-standard-form-of-the-circle-is}{\textsf{completing the circle standard form}} \\
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/core%20course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#_3-distance-formula-between-two-points}{\textsf{distance formula between two points}} \\
  ∣x∣ \le c \iff −c \le x \le c & \textsf{absolute value inequality expansion} \\
  \end{array}
  >$

  :::   
- Derivation relationship between __intersection points__ and __intersecting__    
  ::: wrap
  >$
  \begin{array}{ll}
  \underset{1 \lor 2 \textsf{ intersection points}}{\textsf{having intersection points}} \underset{✅}{\overset{❌}{\Longleftrightarrow}} \underset{2 \textsf{ intersection points}}{\textsf{intersecting}} \\
  \underset{0 \textsf{ intersection points}}{\textsf{no intersection points}} \underset{❌}{\overset{✅}{\Longleftrightarrow}} \underset{0 \lor 1 \textsf{ intersection points}}{\textsf{no intersecting}} \\
  \end{array}
  >$

  :::
---


### $\fbox{35}\:$How many common tangents do the circles $\small x^2+y^2-4x+2y+1=0$ and $\small x^2+y^2+4x-4y-1=0$ have $\small \mathpunct{?}$.
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
(x+\frac{-4}{2})^2+(y+\frac{2}{2})^2=\frac{(-4)^2+2^2-4(1)}{4} \\
(x-2)^2+(y+1)^2=4 \\
(2, -1) \land r_1=2 \\
(x+\frac{4}{2})^2+(y+\frac{-4}{2})^2=\frac{4^2+(-4)^2-4(-1)}{4} \\
(x+2)^2+(y-2)^2=9 \\
(-2, 2) \land r_2=3 \\
d=\sqrt{(-2-2)^2+(2-(-1))^2}=\sqrt{25}=5 \\
5=r_1+r_2 \Longrightarrow \textsf{external tangency} \\
\textsf{external tangency} \Longrightarrow \textsf{only 3 common tangents} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\textsf{externally tangent} \Rightarrow \textsf{only 3 common tangents}$,
  > so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#distance-relationships-between-two-circles}{\textsf{distance relationship between two circles}} \\
  (x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#completing-the-square-the-standard-form-of-the-circle-is}{\textsf{completing the circle standard form}} \\
  (-\frac{a}{2}, -\frac{b}{2}) & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#completing-the-square-the-standard-form-of-the-circle-is}{\textsf{center of standard-form circle}} \\
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/core%20course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#_3-distance-formula-between-two-points}{\textsf{distance formula between two points}} \\
  \end{array}
  >$

  :::
---


### $\fbox{36}\:$The two circles $\small x^2+y^2=4$ and $\small x^2+y^2-2ax+a^2-1=0$ are internally tangent, find $\small a$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: -1 &
\textsf{(B)} \: 1 &
\textsf{(C)} \: 2 &
\textsf{(D)} \: \pm1 &
\textsf{(E)} \: \pm2 & \\
\end{array}
$  
:::
#### Solution 
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the distance formula between two points  
  ::: wrap  
  $
  \begin{array}{ll}
  x^2+y^2=4 \\
  (0, 0) \land r_1=2 \\
  (x+\frac{-2a}{2})^2+(y+\frac{0}{2})^2=\frac{(-2a)^2+0^2-4(a^2-1)}{4} \\
  (x-a)^2+y^2=1 \\
  (a, 0) \land r_2=1 \\
  d=\sqrt{a^2+0^2}=|a|=2-1=1 \\
  |a|=1 \\
  a=\pm1 \\
  \end{array}
  $   
  :::  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using graphical analysis (only applicable in simple cases)  
  ![Question circles figure Q-36 solve-1.svg](../../public/math/core%20course/Question%20circles%20figure%20Q-36%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  x^2+y^2=4 & C_1 \\ 
  (0, 0) \land r_1=2 \\
  (x+\frac{-2a}{2})^2+(y+\frac{0}{2})^2=\frac{(-2a)^2+0^2-4(a^2-1)}{4} & C_2 \\
  (x-a)^2+y^2=1 \\
  (a, 0) \land r_2=1 \\
  \end{array}
  $   
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $a=\pm1$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (-\frac{a}{2}, -\frac{b}{2}) & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#completing-the-square-the-standard-form-of-the-circle-is}{\textsf{center of standard-form circle}} \\
  (x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#completing-the-square-the-standard-form-of-the-circle-is}{\textsf{completing the circle standard form}} \\
  d=\sqrt{x^2+y^2} & \href{/math/core%20course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20part1.html#_3-distance-formula-between-two-points}{\textsf{distance formula between two points}} \\
  d=|r_1-r_2| & \href{/math/core%20course/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#_7-relationship-between-two-circles}{\textsf{relationship between two circles}} \\
  \end{array}
  >$

  :::
---  

