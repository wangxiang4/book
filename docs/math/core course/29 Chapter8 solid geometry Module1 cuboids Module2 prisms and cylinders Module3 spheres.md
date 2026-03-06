---
title: Chapter8 Solid Geometry – Module1 Cuboids, Module2 Prisms and Cylinders, Module3 Spheres
---

# Module 8–01 Cuboids

## 1.Cuboids  
![Cuboid figure 8-1.svg](../../public/math/core%20course/Cuboid%20figure%208-1.svg)  
- ###### __Let the three adjacent edges have lengths $\boldsymbol{a}$, $b$, and $\boldsymbol{c}$__  
  - __volume__: $V=abc$
  - __total surface area__: $F=2(ab + bc +ac)$
  - __space diagonal (body diagonal)__: $d=\sqrt{a^2+b^2+c^2}$
  - __sum of edge lengths__: $l=4(a+b+c)$
- __Components__
  - __$\boldsymbol{6}$ faces__
  - __$\boldsymbol{8}$ vertices__
  - __$\boldsymbol{12}$ edges__
  - __$\boldsymbol{4}$ space diagonals__ 


## 2.Cubes
- ###### __Let the edge length be $\boldsymbol{a}$__
  - __volume__: $V=a^3$
  - __total surface area__: $F=6a^2$
  - __space diagonal (body diagonal)__: $d=\sqrt{3}a$
  - __sum of edge lengths__: $l=12a$

## 3.Focus 1
__The cuboids__   
- Use __the formulas for the space diagonal, surface area, and volume of cuboids__.


### $\fbox{1}\:$The ratio of the length to the width of a cuboid is $\small 2:1$, and the ratio of the width to the height is $\small 3:2$. If the total length of all the edges of the cuboid is $\small 220\textsf{cm}$, what is its volume $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 2880\textsf{ cm}^3 &
\textsf{(B)} \: 7200\textsf{ cm}^3 &
\textsf{(C)} \: 4600\textsf{ cm}^3 &
\textsf{(D)} \: 4500\textsf{ cm}^3 &
\textsf{(E)} \: 3600\textsf{ cm}^3 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\begin{cases}
\textsf{length}:\textsf{width}=2:1 \\
\textsf{width}:\textsf{height}=3:2 \\
\end{cases} \\
\textsf{length}:\textsf{width}:\textsf{height}=6:3:2 \\
6:3:2 \longrightarrow 6k:3k:2k & k=\textsf{scale factor} \\
l=4(6k+3k+2k)=220 \\
4\cdot11k=220 \\
k=\frac{220}{44}=5 \\
\textsf{length}:\textsf{width}:\textsf{height}=30:15:10 \\
V=30\cdot15\cdot10=4500 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $V=4500$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  l=4(a+b+c) & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#let-the-three-adjacent-edges-have-lengths-and}{\textsf{cuboid edge sum formula}} \\
  V=abc & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#let-the-three-adjacent-edges-have-lengths-and}{\textsf{cuboid volume formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{2}\:$The three adjacent edge lengths of a cuboid are in the ratio $\small 3:2:1$, and its surface area is $\small 88$. What is the length of the longest edge $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 8 &
\textsf{(B)} \: 11 &
\textsf{(C)} \: 12 &
\textsf{(D)} \: 14 &
\textsf{(E)} \: 6 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
3:2:1 \rightarrow 3k:2k:k & k=\textsf{scale factor} \\
S=2(3k\cdot2k + 3k\cdot k + 2k\cdot k)=2(6k^2+3k^2+2k^2) \\
22k^2=88 \\
k=\sqrt{4}=2 \\
\textsf{longest}=3k=3\cdot2=6 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $\textsf{longest}=6$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  F=2(ab + bc +ac) & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#let-the-three-adjacent-edges-have-lengths-and}{\textsf{cuboid total surface area formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{3}\:$The areas of three adjacent faces of a cuboid are $\small 2, 6$, and $\small 3$, respectively. What is the volume of the cuboid $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 4 &
\textsf{(B)} \: 5 &
\textsf{(C)} \: 6 &
\textsf{(D)} \: 7.5 &
\textsf{(E)} \: 9 & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the substitution method (only applicable in simple cases)      
  ::: wrap  
  $
  \begin{array}{ll}
  \begin{cases}
  ab=2 \\
  bc=6 \\
  ac=3 \\
  \end{cases} \\
  b=\frac{2}{a} \\
  c=\frac{3}{a} \\
  bc=\frac{2}{a}\cdot\frac{3}{a}=6 \\
  \frac{6}{a^2}=6 \\
  a^2=1 \\
  a=1 \\
  b=\frac{2}{1}=2 \\
  c=\frac{3}{1}=3 \\
  V=1\cdot2\cdot3=6 \\
  \end{array}
  $   
  :::  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the volume formula  
  ::: wrap  
  $
  \begin{array}{ll}
  V=abc=\sqrt{a^2 \cdot b^2 \cdot c^2}=\sqrt{ab \cdot bc \cdot ac} \\
  \begin{cases}
  ab=2 \\
  bc=6 \\
  ac=3 \\
  \end{cases} \\
  \sqrt{2 \cdot 6 \cdot 3}=\sqrt{36}=6 \\
  \end{array}
  $   
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $V=6$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  F=2(ab + bc +ac) & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#let-the-three-adjacent-edges-have-lengths-and}{\textsf{cuboid total surface area formula}} \\
  V=abc & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#let-the-three-adjacent-edges-have-lengths-and}{\textsf{cuboid volume formula}} \\
  \end{array}
  >$

  :::
---

## 4.Focus 2
__The cubes__  
- Use __the formulas for the space diagonal, surface area, and volume of cubes__.


### $\fbox{4}\:$Given that the space diagonal of a cube is $\small 3$, what is its total surface area $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 16 &
\textsf{(B)} \: 18 &
\textsf{(C)} \: 20 &
\textsf{(D)} \: 22 &
\textsf{(E)} \: 24 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
d=\sqrt{3}a=3 \\
a=\frac{3}{\sqrt{3}}=\frac{3\cdot\sqrt{3}}{\sqrt{3}\cdot\sqrt{3}}=\sqrt{3} \\
S=6\sqrt{3}^2=6\cdot3=18 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $S=18$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=\sqrt{3}a & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#let-the-edge-length-be}{\textsf{cube body diagonal formula}} \\
  F=6a^2 & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#let-the-edge-length-be}{\textsf{cube total surface area formula}} \\
  \end{array}
  >$

  :::
---

# Module 8–02 Prisms and Cylinders

## 1.General Formulas
- The lateral surface of a prism and cylinder,
  when __laid out in its developed form__,
  is __a rectangle whose one side equals the perimeter of the base__
  and __whose other side equals the height of the solid__.  
  ![Prisms and cylinders general formulas.svg](../../public/math/core%20course/Prisms%20and%20cylinders%20general%20formulas.svg)
- __lateral surface area__: $S=\textsf{base perimeter}\cdot\textsf{height}$
- __volume__: $V=\textsf{base area}\cdot\textsf{height}$
- __total surface area__: $F=S_{\textsf{lateral}}+2S_{\textsf{base}}$

## 2.Formulas for Cylinders
- __Let the height be $\boldsymbol{h}$ and the base radius be $\boldsymbol{r}$__.  
  ![Cylinder formulas.svg](../../public/math/core%20course/Cylinder%20formulas.svg)
- __volume__: $V=\pi r^2h$
- __lateral surface area__: $S=2\pi rh$
- __total surface area__: $F=2\pi rh+2\pi r^2$ 

## 3.Focus 1
__The cylinders__   
- Use __the formulas for the lateral surface area, total surface area, and volume of a cylinder__,
  including __the special case of an equilateral cylinder__.
- ###### Equilateral cylinder: __the axial section is a square ($h=2r$)__.  
  ![Equilateral cylinder.svg](../../public/math/core%20course/Equilateral%20cylinder.svg)  


### $\fbox{5}\:$If the height of a cylinder is increased to $\small 3$ times its original height, and its base radius is increased to $\small 1.5$ times its original radius, then by what factor does its volume increase compared to the original volume $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 4.5 &
\textsf{(B)} \: 6.75 &
\textsf{(C)} \: 9 &
\textsf{(D)} \: 12.5 &
\textsf{(E)} \: 15 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
V_\textsf{before}=\pi r^2h \\
V_\textsf{after}=\pi (1.5r)^2(3h) \\
\pi \cdot 2.25r^2 \cdot 3h \\
\pi r^2h \cdot (2.25 \cdot 3) \\
\pi r^2h\cdot 6.75 \\
\textsf{scale factor}=\frac{V_\textsf{after}}{V_\textsf{before}}=\frac{\pi r^2h\cdot 6.75}{\pi r^2h}=6.75 \\ 
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $\textsf{scale factor}=6.75$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  V=\pi r^2h & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#_2-formulas-for-cylinders}{\textsf{cylinder volume formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{6}\:$If the lateral development of a cylinder is a square, then its lateral surface area is how many times the area of its base $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 2 &
\textsf{(B)} \: 4 &
\textsf{(C)} \: 4\pi &
\textsf{(D)} \: \pi &
\textsf{(E)} \: 2\pi & \\
\end{array}
$  
:::
#### Solution
- Solve by using the method of assigning specific values     
  ![Question prisms and cylinders figure Q-6 solve-1.svg](../../public/math/core%20course/Question%20prisms%20and%20cylinders%20figure%20Q-6%20solve-1.svg)   
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{lateral development}=\textsf{square} \\
  \textsf{let }r=1 \quad c=2\pi \longrightarrow h=2\pi &  \\
  \frac{S_{\textsf{lateral}}}{S_{\textsf{base}}}=\frac{(2\pi)^2}{\pi\cdot1^2}=4\pi \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\frac{S_{\textsf{lateral}}}{S_{\textsf{base}}}=4\pi$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S=\pi r^2 & \textsf{circle area formula} \\
  S=a^2 & \href{/math/core%20course/25%20Chapter6%20plane%20geometry%20Module3%20quadrilaterals.html#_4-square}{\textsf{square area formula}} \\
  \end{array}
  >$

  :::
---

## 4.Focus 2
__The prisms__   
- Use __the formulas for the surface area and volume of common triangular and quadrangular prisms__.


### $\fbox{7}\:$Figure 8–3, if the top and bottom faces of a right triangular prism are right triangles, what is the surface area of the triangular prism $\small \mathpunct{?}$.
![Question prisms and cylinders figure 8-3.svg](../../public/math/core%20course/Question%20prisms%20and%20cylinders%20figure%208-3.svg)  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 28 &
\textsf{(B)} \: 30 &
\textsf{(C)} \: 32 &
\textsf{(D)} \: 36 &
\textsf{(E)} \: 38 & \\
\end{array}
$  
:::  
#### Solution
- Show known conditions       
  ![Question prisms and cylinders figure 8-3 solve-1.svg](../../public/math/core%20course/Question%20prisms%20and%20cylinders%20figure%208-3%20solve-1.svg)   
  ::: wrap  
  $
  \begin{array}{ll}
  S=S_{\textsf{lateral}}+2S_{\textsf{base}} \\
  S_{\textsf{lateral}}=(3+4+5)\cdot2=24 \\
  2S_{\textsf{base}}=2(\frac{1}{2}\cdot4\cdot3)=12 \\
  S=24+12=36 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $S=36$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (3,4,5) & \href{/math/core%20course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20part2.html#common-pythagorean-triples}{\textsf{common pythagorean triples}} \\
  S=\textsf{base perimeter}\cdot\textsf{height} & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#_1-general-formulas}{\textsf{lateral area formula for prisms and cylinders}} \\
  S=\frac{1}{2}ah & \href{/math/core%20course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20part2.html#where-is-the-altitude-to-side}{\textsf{triangle area formula}} \\
  F=S_{\textsf{lateral}}+2S_{\textsf{base}} & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#_1-general-formulas}{\textsf{total surface area formula for prisms and cylinders}} \\
  \end{array}
  >$

  :::
---


### $\fbox{8}\:$A quadrangular prism has a lateral development in the shape of a square with a side length of $\small 40$, and its base is also a square. What is its volume $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 2800 &
\textsf{(B)} \: 4000 &
\textsf{(C)} \: 4200 &
\textsf{(D)} \: 4800 &
\textsf{(E)} \: 5000 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions    
  ![Question prisms and cylinders figure Q-8 solve-1.svg](../../public/math/core%20course/Question%20prisms%20and%20cylinders%20figure%20Q-8%20solve-1.svg)   
  ::: wrap  
  $
  \begin{array}{ll}
  V=10^2\cdot40=4000 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $V=4000$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S=a^2 & \href{/math/core%20course/25%20Chapter6%20plane%20geometry%20Module3%20quadrilaterals.html#_4-square}{\textsf{square area formula}} \\
  V=\textsf{base area}\cdot\textsf{height} & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#_1-general-formulas}{\textsf{volume formula for prisms and cylinders}} \\
  \end{array}
  >$

  :::
---

# Module 8–03 Spheres

## 1.Volume and Surface Area
- __Let the radius of the sphere be $\boldsymbol{r}$__
  - __volume__: $V=\frac{4}{3}\pi r^3$
  - __surface area__: $S=4\pi r^2$

## 2.Section of a Sphere
- Figure 8–4,
  __the line connecting the center of the sphere to the center of the cross-sectional circle is perpendicular to the section__.
- Let __the distance from the sphere's center to the section be $\boldsymbol{d}$__,
  __the radius of the sphere $\boldsymbol{R}$__,
  and __the radius of the section $\boldsymbol{r}$__,
  then $\boldsymbol{r^2+d^2=R^2}$.  
  ![Sphere section figure 8-4.svg](../../public/math/core%20course/Sphere%20section%20figure%208-4.svg)

## 3.Circumscribed Sphere and Inscribed Sphere
- For __the cylinder with base radius $\boldsymbol{r}$__,
  __the sphere with radius $\boldsymbol{R}$__,
  and __the cylinder height $\boldsymbol{h}$__.

| Solid    | Inscribed Sphere (Conditional)                                                          | Circumscribed Sphere (Unconditional)                                   |
|----------|-----------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| Cuboid   | __None (only a cube has it)__                                                           | __Body diagonal $\boldsymbol{l=2R}$__                                  |
| Cube     | __Edge length $\boldsymbol{a=2R}$__                                                     | __Body diagonal $\boldsymbol{l=2R}\textsf{ (}2R=\sqrt{3}a\textsf{)}$__ |
| Cylinder | __Only a cylinder whose axial section is a square has it, with $\boldsymbol{2r=h=2R}$__ | __Body diagonal $\boldsymbol{\sqrt{h^2+(2r)^2}=2R}$__                  |

![Solid circumscribed sphere and inscribed sphere.svg](../../public/math/core%20course/Solid%20circumscribed%20sphere%20and%20inscribed%20sphere.svg)

- __The key is to analyze the solid using its axial section__.

## 4.Focus 1
__The spheres__   
- Use __the formulas for the volume and surface area of spheres__. 
- ###### __The surface area is proportional to the square of the radius, and the volume is proportional to the cube of the radius__.
  - $\frac{S_1}{S_2}=(\frac{r_1}{r_2})^2$. 
  - $\frac{V_1}{V_2}=(\frac{r_1}{r_2})^3$.


### $\fbox{9}\:$If the surface area of a sphere increases to $\small 9$ times its original value, what its volume $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \textsf{increase to }9\textsf{ times the original} &
\textsf{(B)} \: \textsf{increase to }27\textsf{ times the original} & \\
\textsf{(C)} \: \textsf{increase to }3\textsf{ times the original} &
\textsf{(D)} \: \textsf{increase to }6\textsf{ times the original} & \\
\textsf{(E)} \: \textsf{increase to }8\textsf{ times the original} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\frac{S_1}{S_2}=(\frac{r_1}{r_2})^2 \\
S_2=S_1\cdot9 \\
\frac{S_2}{S_1}=9 \\
(\frac{r_1}{r_2})^2=9 \Longrightarrow \frac{r_1}{r_2}=3 \\
\frac{V_1}{V_2}=(\frac{r_1}{r_2})^3 \\
\frac{V_2}{V_1}=(3)^3=27 \\
V_2=V_1\cdot27 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $V_2=V_1\cdot27$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{S_1}{S_2}=(\frac{r_1}{r_2})^2 & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#the-surface-area-is-proportional-to-the-square-of-the-radius-and-the-volume-is-proportional-to-the-cube-of-the-radius}{\textsf{sphere surface area ratio formula}} \\
  \frac{V_1}{V_2}=(\frac{r_1}{r_2})^3 & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#the-surface-area-is-proportional-to-the-square-of-the-radius-and-the-volume-is-proportional-to-the-cube-of-the-radius}{\textsf{sphere volume ratio formula}} \\
  \end{array}
  >$

  :::
---

## 5.Focus 2
__The circumscribed sphere and the inscribed sphere__   
- Use __the formulas for the circumscribed sphere of a cuboid, cube, and cylinder__,
  and __the formulas for the inscribed sphere of a cube and an equilateral cylinder__.     



### $\fbox{10}\:$If a cuboid is inscribed in a sphere and its edge lengths are $\small 1, 2$, and $\small 3$, what is the surface area of the sphere $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{7\sqrt{14}}{6}\pi &
\textsf{(B)} \: 7\pi &
\textsf{(C)} \: \frac{7\sqrt{14}}{3}\pi &
\textsf{(D)} \: 14\pi &
\textsf{(E)} \: 28\pi & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
r=\frac{d=\sqrt{a^2+b^2+c^2}}{2}=\frac{\sqrt{1^2+2^2+3^2}}{2}=\frac{\sqrt{14}}{2} \\
S=4\pi r^2 = 4\pi\cdot\frac{14}{4} = 14\pi \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $S=14\pi$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  l=2R & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#_3-circumscribed-sphere-and-inscribed-sphere}{\textsf{circumscribed sphere diameter (cuboid)}} \\
  d=\sqrt{a^2+b^2+c^2} & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#let-the-three-adjacent-edges-have-lengths-and}{\textsf{cuboid body diagonal formula}} \\
  S=4\pi r^2 & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#_1-volume-and-surface-area}{\textsf{sphere surface area formula}} \\ 
  \end{array}
  >$

  :::
---


### $\fbox{11}\:$A circle is inscribed in an equilateral cylinder. Find the ratio of the volume of the empty space of the cylinder to the volume of the inscribed sphere.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{3}{4} &
\textsf{(B)} \: \frac{2}{3} &
\textsf{(C)} \: \frac{1}{2} &
\textsf{(D)} \: \frac{1}{4} &
\textsf{(E)} \: \frac{1}{3} & \\
\end{array}
$  
:::
#### Solution
- Show known conditions    
  ![Question sphere figure Q-11 solve-1.svg](../../public/math/core%20course/Question%20sphere%20figure%20Q-11%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{let }r=1 \\
  h=2r=2 \\
  \frac{S_{\textsf{empty}}}{S_{\textsf{sphere}}}=\frac{\pi r^2h-\frac{4}{3}\pi r^3}{\frac{4}{3}\pi r^3}=\frac{\pi\cdot1^2\cdot2-\frac{4}{3}\pi\cdot1^3}{\frac{4}{3}\pi\cdot1^3} \\
  \frac{2\pi-\frac{4}{3}\pi}{\frac{4}{3}\pi} = \frac{\frac{2}{3}\pi}{\frac{4}{3}\pi}=\frac{2}{3}\cdot\frac{3}{4}=\frac{6}{12}=\frac{1}{2} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\frac{S_{\textsf{removed}}}{S_{\textsf{sphere}}}=\frac{1}{2}$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  h=2r & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#equilateral-cylinder-the-axial-section-is-a-square}{\textsf{axial section height (equilateral cylinder)}} \\
  V=\pi r^2h & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#_2-formulas-for-cylinders}{\textsf{cylinder volume formula}} \\
  V=\frac{4}{3}\pi r^3 & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#_1-volume-and-surface-area}{\textsf{sphere volume formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{12}\:$A cylinder is inscribed in a hemisphere, and the radius of the base of the cylinder is half the radius of the hemisphere. Find the ratio of the volume of the cylinder to the volume of the hemisphere.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 4:1 &
\textsf{(B)} \: 8:3 &
\textsf{(C)} \: 16:3 &
\textsf{(D)} \: 16:3\sqrt{2} &
\textsf{(E)} \: 16:3\sqrt{3} & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question sphere figure Q-12 solve-1.svg](../../public/math/core%20course/Question%20sphere%20figure%20Q-12%20solve-1.svg)   
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{let }r=1 \\
  1:\sqrt{3}:2 \\ 
  r=1 \\
  R=2 \\
  h=\sqrt{3} \\
  V_{\textsf{hemisphere}}=\frac{\frac{4}{3}\pi r^3}{2} = \frac{4}{3}\pi r^3\cdot\frac{1}{2} = \frac{4}{6}\pi r^3=\frac{2}{3}\pi r^3 \\
  \frac{V_{\textsf{hemisphere}}}{V_{\textsf{cylinder}}}=\frac{\frac{2}{3}\pi r^3}{\pi r^2h}=\frac{\frac{2}{3}\pi\cdot2^3}{\pi\cdot1^2\cdot\sqrt{3}} \\
  \frac{\frac{2}{3}\pi\cdot2^3}{\pi\cdot1^2\cdot\sqrt{3}}=\frac{\frac{16}{3}\pi}{\sqrt{3}\pi}=\frac{\frac{16}{3}}{\sqrt{3}}=\frac{16}{3}\cdot\frac{1}{\sqrt{3}}=\frac{16}{3\sqrt{3}} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $\frac{V_{\textsf{hemisphere}}}{V_{\textsf{cylinder}}}=16:3\sqrt{3}$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  1:\sqrt{3}:2 & \href{/math/core%20course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20part2.html#in-a-right-triangle-the-ratio-of-the-three-sides-is}{\textsf{30-60-90 right triangle}} \\
  V=\frac{4}{3}\pi r^3 & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#_1-volume-and-surface-area}{\textsf{sphere volume formula}} \\
  V=\pi r^2h & \href{/math/core%20course/29%20Chapter8%20solid%20geometry%20Module1%20cuboids%20Module2%20prisms%20and%20cylinders%20Module3%20spheres.html#_2-formulas-for-cylinders}{\textsf{cylinder volume formula}} \\
  \end{array}
  >$

  :::
---

## 6.Focus 3
__The section of a sphere__  
- Let __the distance from the sphere's center to the section be $\boldsymbol{d}$__,
  __the radius of the sphere $\boldsymbol{R}$__,
  and __the radius of the section $\boldsymbol{r}$__,
  then $\boldsymbol{r^2+d^2=R^2}$.


### $\fbox{13}\:$Two cross-sections of a sphere have radii $\small 5$, and their areas are $\small 9\pi$ and $\small 16\pi$, respectively. Find the distance between the two cross-sections.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 1 &
\textsf{(B)} \: 7 &
\textsf{(C)} \: 3 \lor 4 &
\textsf{(D)} \: 1 \lor 7 &
\textsf{(E)} \: 3 \lor 5 & \\
\end{array}
$  
:::
#### Solution
- Both cross-sections may lie on the same side of the sphere or on opposite sides        
  ![Question sphere figure Q-13 solve-1.svg](../../public/math/core%20course/Question%20sphere%20figure%20Q-13%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  S=\pi r^2 \\
  \textsf{cross-section}_1=9\pi \Longrightarrow r_1=3 \\
  \textsf{cross-section}_2=16\pi \Longrightarrow r_2=4 \\
  d_{\textsf{opposite sides}}=4+3=7 \\
  d_{\textsf{same side}}= 4-3=1 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $d=1\lor7$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S=\pi r^2 & \textsf{circle area formula} \\
  (3,4,5)& \href{/math/core%20course/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20part2.html#common-pythagorean-triples}{\textsf{common pythagorean triples}} \\
  \end{array}
  >$

  :::
---

| Platform    | Lesson                                                                                       | Materials                                                                                      |
|-------------|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=vuODkDgkk_U&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Core courseware](../../public/math/core%20course/pdf/core%20courseware.pdf)                   |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuam?playlist=x9h6d2)                           | [Core courseware answers](../../public/math/core%20course/pdf/core%20courseware%20answers.pdf) |
| Rumble      | [Watch](https://rumble.com/v6s95hx-30-chapter8-solid-geometry.html)                          |                                                                                                |
