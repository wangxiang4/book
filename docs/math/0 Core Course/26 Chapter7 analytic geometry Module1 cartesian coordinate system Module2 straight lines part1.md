---
title: Chapter7 Analytic Geometry – Module1 Cartesian Coordinate System, Module2 Straight Lines (Part1)
lang: en-US
---

# Module 7–01 Cartesian Coordinate System

## 1.Quadrant Positions of Coordinates
![Coordinate Relationship Between Two points.svg](../../public/math/Core%20Course/Coordinate%20Relationship%20Between%20Two%20points.svg)   

- __Points on the coordinate axes do not belong to any quadrant__.   
  - __points on x-axis $\boldsymbol{(x,0)}$__.
  - __points on y-axis $\boldsymbol{(0,y)}$__.

## 2.Midpoint Coordinates of Two Points
- __The midpoint of points $\boldsymbol{P_1(x_1,y_1)}$ and $\boldsymbol{P_2(x_2,y_2)}$ is $\boldsymbol{\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)}$__,
  which is essentially __the average of the two points__.
- Special case: __the midpoint of points $\boldsymbol{P_1(x_1,y_1)}$ and $\boldsymbol{O(0,0)}$ is $\boldsymbol{\left(\frac{x_1}{2},\frac{y_1}{2}\right)}$__.
- __Formula derivation__  
  ![Midpoint coordinates formula derivation.svg](../../public/math/Core%20Course/Midpoint%20coordinates%20formula%20derivation.svg)       
  ::: wrap  
  $
  \begin{array}{ll}
  x_2-x=x-x_1 \\
  x=\frac{x_1+x_2}{2} \\
  y=\frac{y_1+y_2}{2} \\
  P_1+P_2=2P \\
  P=\frac{P_1+P_2}{2} \\
  \end{array}
  $  
  :::

## 3.Distance Formula Between Two Points
- __The distance between points $\boldsymbol{A(x_1,y_1)}$ and $\boldsymbol{B(x_2,y_2)}$ is $\boldsymbol{d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}}$__.
- Special case: __the distance between points $\boldsymbol{A(x_1,y_1)}$ and $\boldsymbol{O(0,0)}$ is $\boldsymbol{d=\sqrt{x^2+y^2}}$__.  
- __Formula derivation__  
  ![Distance formula between two points derivation.svg](../../public/math/Core%20Course/Distance%20formula%20between%20two%20points%20derivation.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  c^2=a^2+b^2 \Rightarrow c=\sqrt{a^2+b^2} & \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#pythagorean-theorem}{\textsf{pythagorean theorem}} \\
  AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} \\
  \end{array}
  $  
  :::  

## 4.Focus 1
__The midpoint formula of two points__  
- Analyze using __the midpoint formula of two points $\boldsymbol{\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)}$__.


### $\fbox{1}\:$Given three points $\small A(x,5),B(-2,y)$, and $\small C(1,1)$, if point $\small C$ is the midpoint of segment $\small AB$, find $\small x$ and $\small y$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: x=4, y=-3 &
\textsf{(B)} \: x=0, y=3 &
\textsf{(C)} \: x=0, y=-3 & \\
\textsf{(D)} \: x=-4, y=-3 &
\textsf{(E)} \: x=3, y=-4 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
A+B=2C \\
\begin{cases}
x-2=1\cdot2 \\
5+y=1\cdot2 \\
\end{cases} \\
x=4 & ① \\
y=-3 & ② \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $x=4, y=-3$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right) & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_2-midpoint-coordinates-of-two-points}{\textsf{midpoint formula of two points}} \\
  \end{array}
  >$

  :::
---

## 5.Focus 2
__The distance formula__  
- Analyze using __the distance formula between two points $\boldsymbol{d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}}$__.


### $\fbox{2}\:$Given that the length of segment $\small AB$ is $\small 12$, point $\small A$ has coordinates $\small (-4,8)$, and the x- and y-coordinates of point $\small B$ are equal, find the coordinates of point $\small B$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: (-4,-4) &
\textsf{(B)} \: (8,8) & \\
\textsf{(C)} \: (4,4) \lor (8,8) &
\textsf{(D)} \: (-4,-4) \lor (8,8) & \\
\textsf{(E)} \: (4,4) \lor (-8,-8) & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{let }B=(x, x) \\
AB=\sqrt{(x+4)^2+(x-8)^2}=12 \\
\sqrt{(x+4)^2+(x-8)^2}^2=12^2 \\
(x+4)^2+(x-8)^2=144 \\
(x+4)^2=x^2+8x+16 \\
(x-8)^2=x^2-16x+64 \\
x^2+8x+16+x^2-16x+64=144 \\
2x^2-8x+80=144 \\
2x^2-8x+80-144=0 \\
2x^2-8x-64=0 \\
\frac{2x^2-8x-64}{2}=\frac{0}{2} \\
x^2-4x-32=0 \\
x=\frac{-b\pm \sqrt{b^2-4ac}}{2a} \\
\Delta=(-4)^2-4\cdot1\cdot-32=16+128=144 \\
x=\frac{4\pm \sqrt{144}}{2}=\frac{4\pm 12}{2} \\
x=\frac{4+12}{2}=8 \lor \frac{4-12}{2}=-4 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $x=8 \lor -4 \\$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_3-distance-formula-between-two-points}{\textsf{distance formula between two points}} \\
  x=\frac{-b\pm\sqrt{\Delta}}{2a} & \href{/math/0%20Core%20Course/16%20Chapter4%20equations%20inequalities%20Module1%20equations.html#_3-steps-for-solving-quadratic-equations}{\textsf{quadratic formula}} \\
  \Delta=b^2-4ac & \href{/math/0%20Core%20Course/17%20Chapter4%20equations%20inequalities%20Module2%20inequalities.html#_3-relationship-among-functions-equations-and-inequalities}{\textsf{quadratic discriminant}} \\
  (a\pm b)^2=a^2\pm2ab+b^2 & \href{/math/0%20Core%20Course/12%20Chapter3%20polynomials%20rational%20expressions%20functions%20Module1%20polynomials%20and%20operations%20upper.html#_1-six-fundamental-formulas}{\textsf{perfect square formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{3}\:$In an equilateral triangle $\small ABC$, two vertices are $\small A(2,0)$ and $\small B(5,3\sqrt{3})$. What are the coordinates of the third vertex $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: (8, 0) &
\textsf{(B)} \: (-8, 0) &
\textsf{(C)} \: (1, -3\sqrt{3}) & \\
\textsf{(D)} \: (8, 0) \lor (-1, 3\sqrt{3}) &
\textsf{(E)} \: (6, 0) \lor (-1, 3\sqrt{3}) & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question cartesian coordinate system figure Q-3 solve-1.svg](../../public/math/Core%20Course/Question%20cartesian%20coordinate%20system%20figure%20Q-3%20solve-1.svg)  
  ::: wrap   
  $
  \begin{array}{ll}
  \textsf{let }C=(x, y) \\
  AB=AC=BC \\
  \sqrt{3^2+(3\sqrt{3})^2}=\sqrt{(x-2)^2+y^2}=\sqrt{(x-5)^2+(y-3\sqrt{3})^2}=6 \\
  \textsf{two equations with two unknowns, complex; substitute options to verify} \\
  \textsf{(A)}\:\,❌\; \\
  \sqrt{(8-2)^2+0^2}=6 \\
  \sqrt{(8-5)^2+(0-3\sqrt{3})^2}\ne6 \\
  \textsf{(D)}\:\,✅\; \\
  \sqrt{(8-2)^2+0^2}=6 \\
  \sqrt{(-1-5)^2+(3\sqrt{3}-3\sqrt{3})^2}=6 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $C(8, 0) \lor C(-1, 3\sqrt{3})$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#_16-equilateral-triangle}{\textsf{equilateral triangle}} \\
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_3-distance-formula-between-two-points}{\textsf{distance formula between two points}} \\
  \end{array}
  >$

  :::
- Additionally, if the problem is an isosceles right triangle with the right-angle vertex at $C$  
  ::: wrap   
  >$
  \begin{array}{ll}
  \textsf{let }C=(x, y) \\
  AC=BC=\sqrt{2}AB & \href{/math/0%20Core%20Course/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#_15-isosceles-right-triangle}{\textsf{isosceles right triangle}} \\
  AB=\sqrt{2}AC=\sqrt{2}BC \\
  \sqrt{3^2+(3\sqrt{3})^2}=\sqrt{2}\cdot\sqrt{(x-2)^2+y^2}=\sqrt{2}\cdot\sqrt{(x-5)^2+(y-3\sqrt{3})^2}=6 \\
  \textsf{two equations with two unknowns, complex; substitute options to verify} \\
  \end{array}
  >$

  :::
---

# Module 7–02 Straight Lines

## 1.Inclination angle
- The angle between __the line and the positive direction of the x-axis__ is called __the inclination angle__,
  denoted as $\boldsymbol{\alpha}$, where $\boldsymbol{\alpha \in [0, \pi)}$.  
  ![Angle of inclination with x-axis figure 7-1.svg](../../public/math/Core%20Course/Angle%20of%20inclination%20with%20x-axis%20figure%207-1.svg)      
- Note: when __the line is horizontal__, __the inclination angle is $\boldsymbol{0^\circ}$__.
  When __the line is vertical__, __the inclination angle is $\boldsymbol{90^\circ}$__.  
  - __clockwise rotation decreases $\boldsymbol{\alpha}$__.
  - __counterclockwise rotation increases $\boldsymbol{\alpha}$__.  
    <ThemeAwareImage
      dark-src="/math/Core%20Course/Angle%20of%20inclination%20with%20x-axis%20figure%207-1%20black%20solve-1.gif"
      light-src="/math/Core%20Course/Angle%20of%20inclination%20with%20x-axis%20figure%207-1%20white%20solve-1.gif"
    />  


## 2.Definition of Slope
- __The tangent of the inclination angle is the slope__, denoted as $\boldsymbol{k=\textsf{tan}\alpha, \alpha\ne\frac{\pi}{2}}$.  
  $\boldsymbol{\alpha=\frac{\textsf{opposite}}{\textsf{adjacent}}}$  
  ![Tan alpha slope figure 7-2.svg](../../public/math/Core%20Course/Tan%20alpha%20slope%20figure%207-2.svg)  
 
- __When $\boldsymbol{\alpha=0, k=0}$;__  
  $\textsf{numerator}=0$
- __When $\boldsymbol{0<\alpha<90^\circ, k>0}$__.
- __When $\boldsymbol{\alpha=90^\circ, k=\textsf{undefined}}$__;  
  $\textsf{denominator}=0$
- __When $\boldsymbol{90^\circ<\alpha<180^\circ, k<0}$__.  

  ![Tan alpha slope figure 7-2 solve-1.svg](../../public/math/Core%20Course/Tan%20alpha%20slope%20figure%207-2%20solve-1.svg)  

## 3.Common Inclination Angles and Slope
- __Two complementary angles, the tangents are opposites of each other__.  
  $\boldsymbol{\textsf{tan}(180^\circ-\theta)=-\textsf{tan}\theta}$  

| Inclination Angle $\boldsymbol{(\alpha)}$ | Slope $\boldsymbol{(k=\textsf{tan}\alpha)}$ |
|-------------------------------------------|---------------------------------------------|
| $0^\circ$                                 | $0$                                         |
| $30^\circ$                                | $\frac{\sqrt{3}}{3}$                        |
| $45^\circ$                                | $1$                                         |
| $60^\circ$                                | $\sqrt{3}$                                  |
| $90^\circ$                                | $\textsf{undefined}$                        |
| $120^\circ$                               | $-\sqrt{3}$                                 |
| $135^\circ$                               | $-1$                                        |
| $150^\circ$                               | $-\frac{\sqrt{3}}{3}$                       |
| $180^\circ$                               | $0$                                         |


## 4.Two-Point Slope Formula
- Let there be __two points $\boldsymbol{P_1(x_1,y_1)}$ and $\boldsymbol{P_2(x_2,y_2)}$ on line $\boldsymbol{l}$__,
  the slope is $\boldsymbol{k=\frac{y_2-y_1}{x_2-x_1}}$, where $\boldsymbol{x_1 \ne x_2}$.
- __Special cases__   
  - If $\boldsymbol{y_2=y_1}$, __the line is horizontal, and $k=0$__.
  - If $\boldsymbol{x_2=x_1}$, __the line is vertical, and $k=\textsf{undefined}$__.  
  - ###### __The slope between points $\boldsymbol{P(x,y)}$ and $\boldsymbol{O(0,0)}$ is $\boldsymbol{k=\frac{y}{x}}$__.  

  ![Line slope two points.svg](../../public/math/Core%20Course/Line%20slope%20two%20points.svg)


## 5.Focus 1
__The inclination angle and slope__  
- Note __special inclination angles__, __such as $\boldsymbol{90^\circ}$__, and __observe the changes in the sign and magnitude of the slope__.  

### $\fbox{4}\:$How many correct statements are there about the inclination angle and slope $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(1)} \: \textsf{the greater the inclination angle, the greater the slope} & \\
\textsf{(2)} \: \textsf{when the inclination angle is }135^\circ\textsf{, the slope is }1 & \\ 
\textsf{(3)} \: \textsf{when the inclination angle is less than }90^\circ, \\
                \hspace{0.7cm} \textsf{the greater the inclination angle, the greater the slope} & \\
\textsf{(4)} \: \textsf{when the inclination angle is greater than }90^\circ, \\
                \hspace{0.7cm} \textsf{the larger the inclination angle, the smaller the slope} & \\
\textsf{(A)} \: 0 & \\
\textsf{(B)} \: 1 & \\
\textsf{(C)} \: 2 & \\
\textsf{(D)} \: 3 & \\
\textsf{(E)} \: 4 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{(1)} \:\,❌\;\\
\alpha=45^\circ \implies k=1 \\
\alpha=135^\circ \implies k=-1 \\
\textsf{(2)} \: \alpha>90^\circ \implies k<0 \,❌\;\\
\textsf{(3)} \: 0 \le \alpha<90^\circ \implies \alpha \uparrow \,\Rightarrow k \uparrow \,✅\;\\
\textsf{(4)} \: \alpha>90^\circ \implies \alpha \uparrow \,\Rightarrow k \uparrow \,❌\;\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $\textsf{(3)}$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  0<\alpha<90^\circ, k>0 \\
  90^\circ<\alpha<180^\circ, k<0 \\
  \end{cases} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_2-definition-of-slope}{\textsf{slope definition}} \\
  135^\circ=-1 & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_3-common-inclination-angles-and-slope}{\textsf{inclination angle–slope}} \\
  \end{array}
  >$

  :::  
- [variation of the slope-intercept line](https://phet.colorado.edu/sims/html/graphing-slope-intercept/latest/graphing-slope-intercept_all.html) $\boldsymbol{y=kx+b}$  
  ::: wrap  
  > - __Counterclockwise rotation: $\boldsymbol{k\uparrow}$__.  
  > - __Clockwise rotation: $\boldsymbol{k\downarrow}$__.  
  > - The size of $\boldsymbol{|k|}$ indicates __the steepness of the line__.
  >   - The larger $\boldsymbol{|k|}$ is, __the steeper the line becomes__.
  >   - The smaller $\boldsymbol{|k|}$ is, __the flatter the line becomes__.

  :::
---


### $\fbox{5}\:$If line $\small l$ intersects the line $\small y=1$ at point $\small P$ and the line $\small x=7$ at point $\small Q$, and the midpoint of segment $\small PQ$ has coordinates $\small (1,−1)$, find the slope of line $\small l$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{3} &
\textsf{(B)} \: -\frac{1}{3} &
\textsf{(C)} \: \frac{2}{3} &
\textsf{(D)} \: -\frac{2}{3} &
\textsf{(E)} \: \frac{3}{2} & \\
\end{array}
$  
:::
#### Solution
- Show known conditions    
  ![Question straight lines figure Q-5 solve-1.svg](../../public/math/Core%20Course/Question%20straight%20lines%20figure%20Q-5%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  P(x,1) \quad Q(7,y) \\
  \begin{cases}
  x+7=1\cdot2 \\
  1+y=(-1)\cdot2 \\
  \end{cases} \\
  x=-5 & ① \\
  y=-3 & ② \\
  P(-5,1) \quad Q(7,-3) \\
  k=\frac{1-(-3)}{-5-7}=\frac{4}{-12}=-\frac{1}{3} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $k=-\frac{1}{3}$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right) & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_2-midpoint-coordinates-of-two-points}{\textsf{midpoint formula of two points}} \\
  k=\frac{y_2-y_1}{x_2-x_1} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_4-two-point-slope-formula}{\textsf{two-point slope formula}} \\
  \end{array}
  >$

  :::
---

## 6. Equation of a Line

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Slope-intercept form
- Given __the slope $\boldsymbol{k}$__ and __the $\overbrace{\textsf{y-intercept }\boldsymbol{b}}^{\textsf{y-axis intersection}}$__,
  the equation of the line is $\boldsymbol{y=kx+b}$.
- ###### __Special cases__  
  - $b=0: y=kx$  
    __line passing through the origin__
  - $k=0: y=b$  
    __horizontal line__ 
- [slope-intercept demo](https://phet.colorado.edu/sims/html/graphing-slope-intercept/latest/graphing-slope-intercept_all.html)       
  ![Slope-intercept form.svg](../../public/math/Core%20Course/Slope-intercept%20form.svg)  

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Point-slope form
- Given __the slope $\boldsymbol{k}$__ and __a point $\boldsymbol{(x_0, y_0)}$__,
  the equation of the line is __$\boldsymbol{y=y_0+k(x-x_0)}$ or $\boldsymbol{\frac{y-y_0}{x-x_0}=k}$__.  
- __Special case__: $(x_0, y_0) \rightarrow (0,b) \Longrightarrow \textsf{point-slope form}=\textsf{slope-intercept form}$.  
- [point-slope demo](https://phet.colorado.edu/sims/html/graphing-lines/latest/graphing-lines_all.html)  
- __Equation derivation__  
  ![Point-slope equation derivation.svg](../../public/math/Core%20Course/Point-slope%20equation%20derivation.svg)   
  ::: wrap  
  $
  \begin{array}{ll}
  y=k(x-x_0)+y_0 \\
  \frac{y-y_0}{x-x_0}=k & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_4-two-point-slope-formula}{\textsf{two-point slope formula}} \\
  y=y_0+k(x-x_0) \\
  \end{array}
  $  
  :::


### $\textcolor{#1E3A5F}{\fbox{3}}\:$Intercept form
- Given __the x-intercept and y-intercept__, the equation of the line is $\boldsymbol{\frac{x}{a}+\frac{y}{b}=1}$,
  where __$\boldsymbol{a}$ and $\boldsymbol{b}$ are the x-intercept and y-intercept__, respectively, and $\boldsymbol{a,b \ne 0}$.
  ![Intercept form.svg](../../public/math/Core%20Course/Intercept%20form.svg)  


### $\textcolor{#1E3A5F}{\fbox{4}}\:$Two-point form
- Given __the coordinates of two points $\boldsymbol{(x_1, y_1)}$ and $\boldsymbol{(x_2, y_2)}$__,
  the equation of the line is $\boldsymbol{\frac{x-x_1}{x_2-x_1}=\frac{y-y_1}{y_2-y_1}}$.
- __Special cases__  
  - __The intercept form is a special case of the two-point form__. 
  - __The two-point form can be converted into the point-slope form__.
- __Equation derivation__  
  ![Two-point equation derivation.svg](../../public/math/Core%20Course/Two-point%20equation%20derivation.svg)   
  ::: wrap  
  $
  \begin{array}{ll}
  \frac{x-x_1}{x_2-x_1}=\frac{y-y_1}{y_2-y_1} & \href{/math/0%20Core%20Course/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#for-similar-triangles-similar-figures-the-ratios-of-corresponding-sides-are-equal-to-the-similarity-ratio}{\textsf{similar triangles sides ratio formula}} \\
  y-y_1=\frac{x-x_1}{x_2-x_1}(y_2-y_1) \\
  y-y_1=\underbrace{\frac{y_2-y_1}{x_2-x_1}}_{k}(x-x_1) &\href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#point-slope-form}{\textsf{point-slope form}} \\
  \end{array}
  $  
  :::


### $\textcolor{#1E3A5F}{\fbox{5}}\:$General form
- Combine the above four equations into __a linear function of the form $\boldsymbol{ax+by+c=0}$__.
- ###### The slope of the general form is $k=-\frac{a}{b}$.  
  ::: wrap  
  $
  \begin{array}{ll}
  ax+by+c=0 \\
  by=-ax-c \\
  y=\underbrace{-\frac{a}{b}}_{k}x-\frac{c}{b} \\
  \textsf{example: }4x+3y-5=0 \Longrightarrow k=-\frac{4}{3} \\
  \end{array}
  $  
  :::
- ###### The intercepts of the general form  
  ![General form calculate intercept form.svg](../../public/math/Core%20Course/General%20form%20calculate%20intercept%20form.svg)   
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{let }y=0 \\
  ax+b0+c=0 \\
  ax+c=0 \\
  ax=-c \\
  x=-\frac{c}{a} \\
  \textsf{let }x=0 \\
  a0+by+c=0 \\
  by+c=0 \\
  by=-c \\
  y=-\frac{c}{b} \\
  \textsf{triangle area formed by intercepts} \\
  S=\frac{1}{2}\cdot -\frac{c}{a}\cdot -\frac{c}{b} & \href{/math/0%20Core%20Course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#where-is-the-altitude-to-side}{\textsf{triangle area formula}}\\
  S=\frac{c^2}{2|ab|} \\
  \end{array}
  $  
  :::  
- ###### __Special cases__
  - $a=0:\:by+c=0$  
    __horizontal line__
  - $b=0:\:ax+c=0$  
    __vertical line__
  - $c=0:\:ax+by=0$  
    __line passing through the origin__

## 7.Focus 2
__The equation of a line__  
- Use the equation of a line to __understand the differences between various forms of the equation__.

### $\fbox{6}\:$How many of the following statements are correct $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(1)} \: \textsf{a line passing through the origin can be represented in intercept form} & \\
\textsf{(2)} \: \textsf{a horizontal line cannot be represented in intercept form} & \\
\textsf{(3)} \: \textsf{a vertical line can be represented in point-slope form} & \\
\textsf{(4)} \: \textsf{all lines can be represented in general form} & \\
\textsf{(A)} \: 0 & \\
\textsf{(B)} \: 1 & \\
\textsf{(C)} \: 2 & \\
\textsf{(D)} \: 3 & \\
\textsf{(E)} \: 4 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{(1)} \: \frac{x}{a}+\frac{y}{b}=0 \,❌\;\\
\textsf{(2)} \: \textsf{a horizontal line has no intersection with the x-axis} \,✅\;\\
\textsf{(3)} \: \textsf{the slope of a vertical line does not exist} \,❌\;\\
\textsf{(4)} \: \textsf{all lines can be transformed into the general form} \,✅\;\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\textsf{(2)},\textsf{(4)}$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{x}{a}+\frac{y}{b}=1 & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#intercept-form}{\textsf{intercept form}} \\
  y=y_0+k(x-x_0) & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#point-slope-form}{\textsf{point-slope form}} \\
  ax+by+c=0 & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#general-form}{\textsf{line general form}} \\
  \end{array}
  >$

  :::
- Line representation of the equation of a straight line  
  > <br/>
  >
  >| Equation             | Horizontal Line | Vertical Line | Line Passing Through the Origin | Other Lines |
  >|:---------------------|:---------------:|:-------------:|:-------------------------------:|:-----------:|
  >| Slope-intercept form |        ✅        |       ❌       |                ✅                |      ✅      |
  >| Point-slope form     |        ✅        |       ❌       |                ✅                |      ✅      |
  >| Intercept form       |        ❌        |       ❌       |                ❌                |      ✅      | 
  >| Two-point form       |        ❌        |       ❌       |                ✅                |      ✅      | 
  >| General form         |        ✅        |       ✅       |                ✅                |      ✅      |
---


### $\fbox{7}\:$Given $\small A(-1, 2), B(2, 4)$, and $\small C(x, 3)$ and that points $\small A, B$, and $\small C$ are collinear, find $\small x$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{5} &
\textsf{(B)} \: \frac{1}{4} &
\textsf{(C)} \: \frac{1}{3} &
\textsf{(D)} \: \frac{1}{2} &
\textsf{(E)} \: 1 & \\
\end{array}
$  
:::
#### Solution
- Three points are collinear $\Longleftrightarrow$
  The slopes of any two points are equal $\Longleftrightarrow$
  They cannot form a triangle    
  ::: wrap   
  $
  \begin{array}{ll}
  k_{AB}=k_{BC}=k_{AC} \\
  k_{AB}=k_{BC} & \textsf{ no unknown} \\
  \frac{4-2}{2-(-1)}=\frac{4-3}{2-x} \\
  \frac{2}{3}=\frac{1}{2-x} \\
  4-2x=3 \\
  x=\frac{1}{2} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $x=\frac{1}{2}$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  k=\frac{y_2-y_1}{x_2-x_1} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_4-two-point-slope-formula}{\textsf{two-point slope formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{8}\:$What is the equation of the line passing through the point $\small (5, 8)$ and having intercepts that are opposites of each other $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: x-y+3=0 &
\textsf{(B)} \: x+y+3=0 &
\textsf{(C)} \: -x-y+3=0 & \\
\textsf{(D)} \: x-y-3=0 &
\textsf{(E)} \: x-y+3=0 \lor 8x-5y=0 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\frac{x}{a}+\frac{y}{b}=1 \xrightarrow{\textsf{opposite numbers}} b=-a \\
\frac{x}{a}-\frac{y}{a}=1 \Longrightarrow x-y=a \\
(5, 8) \Longrightarrow 5-8=a \\
a=-3 \\
\frac{x}{-3}-\frac{y}{-3}=1 \\
x-y+3=0 \\
y=kx \quad k=\frac{y}{x} & \textsf{line passing through origin} \\
(5, 8) \Longrightarrow y=\frac{8}{5}x \\
5y=8x \\
8x-5y=0 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $x-y+3=0 \lor 8x-5y=0$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{x}{a}+\frac{y}{b}=1 & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#intercept-form}{\textsf{intercept form}} \\
  y=kx & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#special-cases}{\textsf{line passing through origin}} \\
  k=\frac{y}{x} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#the-slope-between-points-and-is}{\textsf{slope of line passing through origin}} \\
  \end{array}
  >$

  :::
- Opposite intercepts and equal intercepts  
  ::: wrap   
  >- __The intercepts are opposites__  
     ![Opposite intercepts.svg](../../public/math/Core%20Course/Opposite%20intercepts.svg)    
     __① $\boldsymbol{k=1}$__     
     __② line passes through origin__     
  >- __The intercepts are equal__  
     ![Equal intercepts.svg](../../public/math/Core%20Course/Equal%20intercepts.svg)     
     __① $\boldsymbol{k=-1}$__    
     __② line passes through origin__   

  :::  
---


### $\fbox{9}\:$Find the y-intercept of the line passing through the points $\small (1, -3)$ and $\small (3, 1)$.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: 5 &
\textsf{(B)} \: -2 &
\textsf{(C)} \: -3 &
\textsf{(D)} \: -4 &
\textsf{(E)} \: -5 & \\
\end{array}
$  
:::
#### Solution   
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the point-slope form     
  ::: wrap  
  $
  \begin{array}{ll}
  k=\frac{y_2-y_1}{x_2-x_1} \\
  k=\frac{4}{2}=2 \\
  y=y_0+k(x-x_0) \\
  y=-3+2(x-1) \\
  y=2(x-1)-3 \\
  y=2x-5 \\
  b=-5 \\
  \end{array}
  $  
  :::    
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the three points are collinear  
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{y-intercept}=(0,b) \\
  \textsf{three points are collinear} \Longleftrightarrow \textsf{slopes of any two points are equal} \\
  k=\frac{y_2-y_1}{x_2-x_1} \\
  \frac{1-(-3)}{3-1}=\frac{b-1}{0-3} \\
  2=\frac{b-1}{-3} \\
  b=-5 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $b=-5$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  k=\frac{y_2-y_1}{x_2-x_1} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_4-two-point-slope-formula}{\textsf{two-point slope formula}} \\
  \frac{x}{a}+\frac{y}{b}=1 & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#intercept-form}{\textsf{intercept form}} \\
  y=y_0+k(x-x_0) & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#point-slope-form}{\textsf{point-slope form}} \\
  y=kx+b & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#slope-intercept-form}{\textsf{slope-intercept form}} \\
  \end{array}
  >$

  :::
---


### $\fbox{10}\:$Find the product of the x- and y-intercepts of the line $\small 2x-3y+12=0$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: -48 &
\textsf{(B)} \: -24 &
\textsf{(C)} \: 24 &
\textsf{(D)} \: -12 &
\textsf{(E)} \: 12 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question straight lines figure Q-10 solve-1.svg](../../public/math/Core%20Course/Question%20straight%20lines%20figure%20Q-10%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{y-intercept}=-\frac{c}{b}=-\frac{12}{-3}=4 \\
  \textsf{x-intercept}=-\frac{c}{a}=-\frac{12}{2}=-6 \\
  4\cdot-6=-24 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $4\cdot-6=-24$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  ax+by+c=0 & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#general-form}{\textsf{line general form}} \\
  \begin{cases}
  \textsf{y-intercept}=-\frac{c}{b} \\
  \textsf{x-intercept}=-\frac{c}{a} \\
  \end{cases} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#the-intercepts-of-the-general-form}{\textsf{intercepts of general form}} \\
  \end{array}
  >$

  :::
- Additionally, If the problem is the area of the triangle formed by the intercepts  
  ::: wrap
  > ![Question straight lines figure Q-10 solve-2.svg](../../public/math/Core%20Course/Question%20straight%20lines%20figure%20Q-10%20solve-2.svg)  
  >$
  \begin{array}{ll}
  2x-3y+12=0 \\
  S=\frac{c^2}{2|ab|} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#the-intercepts-of-the-general-form}{\textsf{triangle area formed by intercepts}} \\
  S=\frac{12^2}{2|2\cdot-3|}=\frac{24}{12}=12 \\
  \end{array}
  >$

  :::
---

## 8.Focus 3
__The line passes through quadrants__  
- Analyze based on __the slope and intercepts of the line__.   
- $\boldsymbol{k>0}$: the line must pass through __the first and third quadrants__
- $\boldsymbol{k<0}$: the line must pass through __the second and fourth quadrants__  
  ![Line cross quadrants.svg](../../public/math/Core%20Course/Line%20cross%20quadrants.svg)    


### $\fbox{11}\:$(Data Sufficiency) The line $\small ax+bx+c=0$ does not pass through the third quadrant.
::: wrap   
$
\begin{array}{lllll}
\textsf{(1)} \: ac \le 0, bc<0. &
\textsf{(2)} \: ab>0, c<0. & \\
\textsf{(A)} \: \textsf{(1)} &
\textsf{(B)} \: \textsf{(2)} & \\
\textsf{(C)} \: \textsf{(1)}+\textsf{(2)} &  
\textsf{(D)} \: \textsf{(1)},\textsf{(2)} & \\
\textsf{(E)} \: \varnothing & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#9333EA}{\textsf{verify condition }\textsf{(1)}}$   
  ![Question straight lines figure Q-11 solve-1.svg](../../public/math/Core%20Course/Question%20straight%20lines%20figure%20Q-11%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  ac<0 \lor ac=0,bc<0 \\ 
  ①\,
  \begin{cases}
  \begin{array}{ll}
  ac<0 \\
  bc<0 \\
  \end{array}
  \end{cases} \\
  \textsf{x-intercept}=-\frac{c}{a}=-\frac{9}{-3}=3 \\
  \textsf{y-intercept}=-\frac{c}{b}=-\frac{9}{-3}=3 \\
  ②\,
  \begin{cases}
  \begin{array}{ll}
  a=0 & \textsf{must satisfy } bc<0 \\
  bc<0 \\
  \end{array}
  \end{cases} \\
  a=0 \longrightarrow by+c=0 \\
  \textsf{x-intercept}=-\frac{c}{a}=0 \\
  \textsf{y-intercept}=-\frac{c}{b}=-\frac{9}{-3}=3 \\
  \end{array}
  $  
  :::     
- $\textcolor{#9333EA}{\textsf{verify condition }\textsf{(2)}}$  
  ![Question straight lines figure Q-11 solve-2.svg](../../public/math/Core%20Course/Question%20straight%20lines%20figure%20Q-11%20solve-2.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  ab>0, c<0 \\
  k=-\frac{a}{b}=-\frac{9}{3}=-3 \\
  k<0 \Longrightarrow 90^\circ<\alpha<180^\circ \\
  \begin{cases}
  \begin{array}{ll}
  ac & \textsf{unknown} \\
  bc & \textsf{unknown} \\
  \end{array}
  \end{cases} \\
  \textsf{x-intercept}=-\frac{c}{a}=-\frac{9}{3}=-3 \\
  \textsf{y-intercept}=-\frac{c}{b}=-\frac{9}{3}=-3 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $\textsf{(1)}\,✅\;,\textsf{(2)}\,❌\;$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  \textsf{y-intercept}=-\frac{c}{b} \\
  \textsf{x-intercept}=-\frac{c}{a} \\
  \end{cases} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#the-intercepts-of-the-general-form}{\textsf{intercepts of general form}} \\
  a=0 \longrightarrow by+c=0 & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#special-cases-1}{\textsf{horizontal line of general form}} \\
  k=-\frac{a}{b} & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#the-slope-of-the-general-form-is}{\textsf{slope of general form}} \\
  90^\circ<\alpha<180^\circ, k<0 & \href{/math/0%20Core%20Course/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_2-definition-of-slope}{\textsf{slope definition}} \\
  \end{array}
  >$

  :::
---

| Platform    | Lesson                                                                                                               | Materials                                                                                      |
|-------------|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=RgN-VMM4lXA&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)                         | [Core courseware](../../public/math/Core%20Course/pdf/Core%20courseware.pdf)                   |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuhu?playlist=x9h6d2)                                                   | [Core courseware answers](../../public/math/Core%20Course/pdf/Core%20courseware%20answers.pdf) |
| Rumble      | [Watch](https://rumble.com/v6s95h9-27-chapter7-resolve-geometry-module1-rectangular-coordinate-system-module2-.html) |                                                                                                |
