---
title: Chapter9 Permutations and Combinations – Module2 Six Fundamental Methods
---


# Module 9–02 Six Fundamental Methods

## 1.Method of Bundling Adjacent Items

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Adjacency
- __Bundle adjacent items into a group and treat it as a single item for the permutation__.

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Subgroup
- __Use the adjacent-item bundling method to combine the subitems into a single item__.

## 2.Focus 1
__The adjacent-item bundling method__
- When bundling, __note the internal order and multiple bundlings__.

### $\fbox{11}\:$There are $\small 3$ groups of $\small 3$ people each, and $\small 9$ seats in a row. How many different seating arrangements are there if the members of each group must sit together $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: (3!)^2\textsf{ ways} &
\textsf{(B)} \: (3!)^3\textsf{ ways} &
\textsf{(C)} \: 3(3!)^3\textsf{ ways} & \\
\textsf{(D)} \: (3!)^4\textsf{ ways} &
\textsf{(E)} \: 9!\textsf{ ways} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\left.
\begin{array}{cc}
[3\,\textsf{people}]=3! \\
[3\,\textsf{people}]=3! \\
[3\,\textsf{people}]=3! \\
\end{array}
\right\}3! \\
\underbrace{3!\times3!\times3!}_{\textsf{internal arrangements}}\times\underbrace{3!}_{\textsf{external arrangements}}=(3!)^4 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $3!\times3!\times3!\times3!=(3!)^4$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_1-method-of-bundling-adjacent-items}{\textsf{adjacent-item bundling method}} \\
  \frac{n!}{k_1!\times k_2!\times\cdots \times k_m!} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#multinomial-coefficient}{\textsf{multinomial coefficient}} \\
  \end{array}
  >$

  :::
---


### $\fbox{12}\:$Seven people stand in a row. If $\small A$ and $\small B$ must be adjacent, and $\small C$ and $\small D$ must be adjacent, how many different arrangements are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 480 &
\textsf{(B)} \: 460 &
\textsf{(C)} \: 420 &
\textsf{(D)} \: 408 &
\textsf{(E)} \: 390 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\left.
\begin{array}{cc}
[A, B]=2! \\
[C, D]=2! \\
3\,\textsf{people} \\
\end{array}
\right\}5! \\
2!\times2!\times5!=4\times120=480 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $2!\times2!\times5!=480$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_1-method-of-bundling-adjacent-items}{\textsf{adjacent-item bundling method}} \\
  \frac{n!}{k_1!\times k_2!\times\cdots \times k_m!} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#multinomial-coefficient}{\textsf{multinomial coefficient}} \\
  \end{array}
  >$

  :::
---


### $\fbox{13}\:$Form five-digit numbers using $\small 1, 2, 3, 4, 5$ without repetition, such that two even numbers are between $\small 1$ and $\small 5$. How many different arrangements are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 8 &
\textsf{(B)} \: 9 &
\textsf{(C)} \: 10 &
\textsf{(D)} \: 12 &
\textsf{(E)} \: 14 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\underbrace{1\,\boxed{2}\,\boxed{4}\,5}_{\textsf{subgroup}}3 \\
\left.
\begin{array}{cc}
\boxed{
\begin{array}{ll}
[2,4]=2! \\
[1,5]=2! \\
\end{array}} \\
3 \\
\end{array}
\right\}2! \\
2!\times2!\times2!=8 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $2!\times2!\times2!=8$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_1-method-of-bundling-adjacent-items}{\textsf{adjacent-item bundling method}} \\
  \frac{n!}{k_1!\times k_2!\times\cdots \times k_m!} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#multinomial-coefficient}{\textsf{multinomial coefficient}} \\
  \end{array}
  >$

  :::
---

## 3.Method of Inserting Alternating Items
- __First arrange the unrestricted items__,
  __then insert the remaining items into the gaps and at both ends according to the given conditions__.


## 4.Focus 2
__The alternating item insertion method__   
- __First arrange the unrestricted items__,
  __then insert the non-adjacent items into the gaps__.


### $\fbox{14}\:$Seven people stand in a row. If $\small A, B$, and $\small C$ must not be adjacent to each other, how many different arrangements are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 1020 &
\textsf{(B)} \: 1040 &
\textsf{(C)} \: 1140 &
\textsf{(D)} \: 1220 &
\textsf{(E)} \: 1440 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions (arranging the non-adjacent items first may violate the condition)  
  ![Question six fundamental methods figure Q-14 solve-1.svg](../../public/math/Core%20Course/Question%20six%20fundamental%20methods%20figure%20Q-14%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  [D, E, F, G]=4! \\
  C_{[?,?,?,?,?]}^{[A, B, C]}=C_5^3 \\
  [A, B, C]=3! \\
  4!\times C_5^3\times3!=\frac{5\times4\times3}{3\times2\times1}\times144=1440 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $4!\times C_5^3\times3!=1440$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_3-method-of-inserting-alternating-items}{\textsf{alternating item insertion method}} \\
  \frac{n!}{k_1!\times k_2!\times\cdots \times k_m!} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#multinomial-coefficient}{\textsf{multinomial coefficient}} \\
  P_n^m=C_n^m\times m! & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#permutation-formula}{\textsf{permutation formula}} \\
  \end{array}
  >$

  :::
---

### $\fbox{15}\:$In a performance, there are $\small 3$ dances, $\small 2$ dramas, and $\small 2$ songs. If the dance performances must not appear consecutively, how many different performance orders are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 1020 &
\textsf{(B)} \: 1040 &
\textsf{(C)} \: 1140 &
\textsf{(D)} \: 1220 &
\textsf{(E)} \: 1440 & \\
\end{array}
$  
:::
#### Solution  
- Show known conditions  
  ![Question six fundamental methods figure Q-15 solve-1.svg](../../public/math/Core%20Course/Question%20six%20fundamental%20methods%20figure%20Q-15%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  [\textsf{drama}, \textsf{drama}, \textsf{solo}, \textsf{solo}]=4! \\
  C_{[?,?,?,?,?]}^{[\textsf{dance}, \textsf{dance}, \textsf{dance}]}=C_5^3 \\
  [\textsf{dance}, \textsf{dance}, \textsf{dance}]=3! \\
  4!\times C_5^3\times3!=\frac{5\times4\times3}{3\times2\times1}\times144=1440 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $4!\times C_5^3\times3!=1440$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_3-method-of-inserting-alternating-items}{\textsf{alternating item insertion method}} \\
  \frac{n!}{k_1!\times k_2!\times\cdots \times k_m!} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#multinomial-coefficient}{\textsf{multinomial coefficient}} \\
  P_n^m=C_n^m\times m! & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#permutation-formula}{\textsf{permutation formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{16}\:$There are $\small 8$ lights in a row. Three lights are turned off at the same time, and no two adjacent lights may be turned off together. How many different ways are there to turn off the lights $\small \mathpunct{?}$.
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
- Show known conditions       
  ![Question six fundamental methods figure Q-16 solve-1.svg](../../public/math/Core%20Course/Question%20six%20fundamental%20methods%20figure%20Q-16%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  [\textsf{on}\mapsto5, \textsf{off (not adjacent)}\mapsto3] \\
  \textsf{identical lights do not need to be arranged} \\
  C_{[?,?,?,?,?,?]}^{[\textsf{off}, \textsf{off}, \textsf{off}]}=C_6^3 \\
  C_6^3=\frac{6\times5\times4}{3\times2\times1}=20 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $C_6^3=20$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_3-method-of-inserting-alternating-items}{\textsf{alternating item insertion method}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#combination-formula}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---

## 5.Focus 3
__The adjacent and non-adjacent items coexist__  
- First, __bundle the adjacent items__,
  __and then handle the non-adjacent items__.



### $\fbox{17}\:$Seven people stand in a row. If $\small A$ and $\small B$ are adjacent and neither of them is adjacent to $\small C$, how many different arrangements are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 940 &
\textsf{(B)} \: 960 &
\textsf{(C)} \: 980 &
\textsf{(D)} \: 1100 &
\textsf{(E)} \: 1200 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question six fundamental methods figure Q-17 solve-1.svg](../../public/math/Core%20Course/Question%20six%20fundamental%20methods%20figure%20Q-17%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  [A, B]=2! \\
  [D, E, F, G]=4! \\
  C_{[?,?,?,?,?]}^{[[A, B], C]}=C_5^2 \\
  [[A, B], C]=2! \\
  2!\times4!\times C_5^2\times2!= \frac{5\times4}{2\times1}\times96=960 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $2!\times4!\times C_5^2\times2!=960$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_1-method-of-bundling-adjacent-items}{\textsf{adjacent-item bundling method}} \\
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_3-method-of-inserting-alternating-items}{\textsf{alternating item insertion method}} \\
  \frac{n!}{k_1!\times k_2!\times\cdots \times k_m!} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#multinomial-coefficient}{\textsf{multinomial coefficient}} \\
  P_n^m=C_n^m\times m! & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#permutation-formula}{\textsf{permutation formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{18}\:$Six people ($\small 3$ men and $\small 3$ women) stand in a row. If two of the women are adjacent, how many different arrangements are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 940 &
\textsf{(B)} \: 960 &
\textsf{(C)} \: 980 &
\textsf{(D)} \: 1100 &
\textsf{(E)} \: 1200 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions    
  ![Question six fundamental methods figure Q-18 solve-1.svg](../../public/math/Core%20Course/Question%20six%20fundamental%20methods%20figure%20Q-18%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  [\textsf{male}, \textsf{male}, \textsf{male}]=3! \\
  \textsf{unknown two female items, use permutation formula} \\
  C_{[\textsf{female}, \textsf{female}, \textsf{female}]}^{[\textsf{female}, \textsf{female}]}=C_3^2 \\
  [\textsf{female}, \textsf{female}] = 2! \\
  C_{[?,?,?,?]}^{[[\textsf{female}, \textsf{female}], \textsf{female}]}=C_4^2 \\
  [[\textsf{female}, \textsf{female}], \textsf{female}]=2! \\
  3!\times C_3^2\times2!\times C_4^2\times2!=\frac{3\times2}{2\times1}\times\frac{4\times3}{2\times1}\times24=432 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $3!\times C_3^2\times2!\times C_4^2\times2!=432$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_1-method-of-bundling-adjacent-items}{\textsf{adjacent-item bundling method}} \\
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_3-method-of-inserting-alternating-items}{\textsf{alternating item insertion method}} \\
  \frac{n!}{k_1!\times k_2!\times\cdots \times k_m!} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#multinomial-coefficient}{\textsf{multinomial coefficient}} \\
  P_n^m=C_n^m\times m! & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#permutation-formula}{\textsf{permutation formula}} \\
  \end{array}
  >$

  :::
---

## 6.Focus 4
__The neither of the two categories are adjacent items__  
- First, __arrange one category__,
  __and then insert the other category into the gaps__,
  __filling all the intermediate gaps__.


### $\fbox{19}\:$Six people ($\small 3$ men and $\small 3$ women) stand in a row. If no two women are adjacent and no two men are adjacent, how many different arrangements are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 64 &
\textsf{(B)} \: 68 &
\textsf{(C)} \: 72 &
\textsf{(D)} \: 80 &
\textsf{(E)} \: 90 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions (not filling all the intermediate gaps would violate the condition)  
  ![Question six fundamental methods figure Q-19 solve-1.svg](../../public/math/Core%20Course/Question%20six%20fundamental%20methods%20figure%20Q-19%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  [\textsf{male}, \textsf{male}, \textsf{male}]=3! \\
  [\textsf{female}, \textsf{female}, \textsf{female}]=3! \\
  \left.
  \begin{array}{cc}
  [\textsf{female},\textsf{male},\textsf{female},\textsf{male},\textsf{female},\textsf{male}] \\
  [\textsf{male},\textsf{female},\textsf{male},\textsf{female},\textsf{male},\textsf{female}] \\
  \end{array}
  \right\}2 \\
  3!\times3!\times2=72 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $3!\times3!\times2=72$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_3-method-of-inserting-alternating-items}{\textsf{alternating item insertion method}} \\
  \frac{n!}{k_1!\times k_2!\times\cdots \times k_m!} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#multinomial-coefficient}{\textsf{multinomial coefficient}} \\
  \end{array}
  >$

  :::
---

### $\fbox{20}\:$Seven people ($\small 4$ men and $\small 3$ women) stand in a row. If no two women are adjacent and no two men are adjacent, how many different arrangements are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 104 &
\textsf{(B)} \: 112 &
\textsf{(C)} \: 124 &
\textsf{(D)} \: 128 &
\textsf{(E)} \: 144 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions (arranging the smaller group first would violate the condition)  
  ![Question six fundamental methods figure Q-20 solve-1.svg](../../public/math/Core%20Course/Question%20six%20fundamental%20methods%20figure%20Q-20%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  [\textsf{male}, \textsf{male}, \textsf{male}, \textsf{male}]=4! \\
  [\textsf{female}, \textsf{female}, \textsf{female}]=3! \\
  4!\times3!=144 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $4!\times3!=144$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_3-method-of-inserting-alternating-items}{\textsf{alternating item insertion method}} \\
  \frac{n!}{k_1!\times k_2!\times\cdots \times k_m!} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#multinomial-coefficient}{\textsf{multinomial coefficient}} \\
  \end{array}
  >$

  :::
- Alternating permutation formula   
  ::: wrap  
  >$
  \begin{array}{ll}
  n!\times n!\times2 & n\textsf{ male }n\textsf{ female alternating} \\
  (n+1)!\times n! & (n+1)\textsf{ male }n\textsf{ female alternating}  \\
  \end{array}
  >$

  :::  
---

## 7.Divider Method with Identical Items (Stars and Bars)

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Conditions  
- __The items are identical__
- __The objects are distinct__
- __Each object receives at least one item__

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Description
- __The items are identical__,
  and __each object is distinguished by the number of items it receives__.


### $\textcolor{#1E3A5F}{\fbox{3}}\:$Formula
- __There are $\boldsymbol{n}$ identical items and $\boldsymbol{m}$ distinct objects__.
  __Each object receives at least one item__.
  - $\boldsymbol{C_{\textsf{gaps}}^{\textsf{dividers}}}=C_{n-1}^{m-1}$
  - __If the objects are empty__, $\boldsymbol{\textsf{total items}=m+n}$  
    $\boldsymbol{C_{n+m-1}^{m-1}}$
- __A row of $\boldsymbol{n}$ identical items has $\boldsymbol{n−1}$ gaps between them__.
  __By inserting $\boldsymbol{m−1}$ dividers__,
  __the row can be divided into $\boldsymbol{n}$ parts__.  
  ![Divider method formula explanation.svg](../../public/math/Core%20Course/Divider%20method%20formula%20explanation.svg)
- __In the divider method__,
  __dividers cannot be placed at the ends__,
  __and no two dividers can be placed together__.

## 8.Focus 5
__The stars and bars method__  
- __There are $\boldsymbol{n}$ identical items and $\boldsymbol{m}$ distinct objects__.
  __Each object receives at least one item__.  
  - $\boldsymbol{C_{\textsf{gaps}}^{\textsf{dividers}}}=C_{n-1}^{m-1}$
  - __If the objects are empty__,
    __the number of combinations is $\boldsymbol{C_{n+m-1}^{m-1}}$__.
  

### $\fbox{21}\:$Distribute $\small 10$ candies to $\small 7$ people, with each person receiving at least one candy. How many different distributions are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 84 &
\textsf{(B)} \: 124 &
\textsf{(C)} \: 254 &
\textsf{(D)} \: 258 &
\textsf{(E)} \: 304 & \\
\end{array}
$  
:::
#### Solution 
- Show known conditions    
  ![Question six fundamental methods figure Q-21 solve-1.svg](../../public/math/Core%20Course/Question%20six%20fundamental%20methods%20figure%20Q-21%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  C_{10-1}^{7-1}=C_9^6=\frac{\bcancel{9}\times\bcancel{8}\times7\times\bcancel{6}\times\bcancel{5}\times\bcancel{4}}{\bcancel{6}\times\bcancel{5}\times\bcancel{4}\times\bcancel{3}\times\bcancel{2}\times1}=\frac{3\times4\times7}{1}=84 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $C_{10-1}^{7-1}=84$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  C_{n-1}^{m-1} & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#formula}{\textsf{restricted stars and bars method}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#combination-formula}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{22}\:$Distribute $\small 18$ candies to $\small 7$ people, with each person receiving at least two candies. How many different distributions are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 94 &
\textsf{(B)} \: 124 &
\textsf{(C)} \: 168 &
\textsf{(D)} \: 210 &
\textsf{(E)} \: 240 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
18-7=11 & \textsf{first round} \\
C_{11-1}^{7-1}=C_{10}^{6}=C_{10}^{4} & \textsf{second round} \\
C_{10}^{4}=\frac{10\times\bcancel{9}\times\bcancel{8}\times7}{\bcancel{4}\times\bcancel{3}\times\bcancel{2}\times1}=\frac{10\times3\times7}{1}=210 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $C_{11-1}^{7-1}=210$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  C_{n-1}^{m-1} & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#formula}{\textsf{restricted stars and bars method}} \\
  C_n^m=C_n^{n-m} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#properties-of-combinations}{\textsf{property of combinations}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#combination-formula}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{23}\:$Find the number of solutions in positive integers for $\small x_1+x_2+x_3+x_4=12$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 160 &
\textsf{(B)} \: 165 &
\textsf{(C)} \: 175 &
\textsf{(D)} \: 184 &
\textsf{(E)} \: 190 & \\
\end{array}
$  
:::
#### Solution 
- Show known conditions  
  ![Question six fundamental methods figure Q-22 solve-1.svg](../../public/math/Core%20Course/Question%20six%20fundamental%20methods%20figure%20Q-22%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{let }x_1=1 \quad x_2=3 \quad x_3=4 \quad x_4=4 \\
  C_{12-1}^{4-1}=C_{11}^{3}=\frac{11\times\bcancel{10}\times\bcancel{9}}{\bcancel{3}\times\bcancel{2}\times1}=\frac{11\times5\times3}{1}=165 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $C_{12-1}^{4-1}=165$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  C_{n-1}^{m-1} & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#formula}{\textsf{restricted stars and bars method}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#combination-formula}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
- Additionally, if the problem is find the number of solutions in non-negative integers for $x_1+x_2+x_3+x_4=12$  
  ::: wrap  
  > ![Question six fundamental methods figure Q-22 solve-1.svg](../../public/math/Core%20Course/Question%20six%20fundamental%20methods%20figure%20Q-22%20solve-1.svg)  
  >$
  \begin{array}{ll}
  \underbrace{x_1}_{\ge0}+\underbrace{x_2}_{\ge0}+\underbrace{x_3}_{\ge0}+\underbrace{x_4}_{\ge0}=12 \\
  \textsf{each object receives at least one item} \\
  (x_1+1)+(x_2+1)+(x_3+1)+(x_4+1)=12+4 \\
  \underbrace{y_1}_{\ge1}+\underbrace{y_2}_{\ge1}+\underbrace{y_3}_{\ge1}+\underbrace{y_4}_{\ge1}=16 \\
  C_{16-1}^{4-1}=C_{15}^{3} \Longleftrightarrow C_{n+m-1}^{m-1}=C_{12+4-1}^{4-1} \\
  \end{array}
  >$

  :::
---


### $\fbox{24}\:$There are $\small 10$ candies to be distributed among $\small 4$ people. If each person receives at least one candy, there are $\small n$ ways; if some people are allowed to receive none, there are $\small m$ ways. Find $\small m−n$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 160 &
\textsf{(B)} \: 164 &
\textsf{(C)} \: 175 &
\textsf{(D)} \: 184 &
\textsf{(E)} \: 202 & \\
\end{array}
$  
:::
#### Solution
::: wrap   
$
\begin{array}{ll}
n\ge1 \quad m\ge0 \\
n=C_{10-1}^{4-1}=C_{9}^{3}=\frac{\bcancel{9}\times\bcancel{8}\times7}{\bcancel{3}\times\bcancel{2}\times1}=\frac{3\times4\times7}{1}=84 \\
m=C_{10+4-1}^{4-1}=C_{13}^{3}=\frac{13\times\bcancel{12}\times11}{\bcancel{3}\times\bcancel{2}\times1}=\frac{13\times2\times11}{1}=286 \\
m-n=286-84=202 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $m-n=202$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  C_{n-1}^{m-1} & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#formula}{\textsf{restricted stars and bars method}} \\
  C_{n+m-1}^{m-1} & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#formula}{\textsf{unrestricted stars and bars method}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#combination-formula}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---

## 9.Power Method with Repeated Objects

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Conditions
- __The items are distinct__
- __The objects are distinct__
- __The objects can be used repeatedly__


### $\textcolor{#1E3A5F}{\fbox{2}}\:$Description
- __Placing $\boldsymbol{n}$ distinct items into $\boldsymbol{m}$ distinct objects yields $\boldsymbol{m^n}$ ways__.


### $\textcolor{#1E3A5F}{\fbox{3}}\:$Usage
- $\boldsymbol{\textsf{objects}^\textsf{items}=m^n}$
  - $\boldsymbol{m=\textsf{common objects}}$
  - __Method derivation__  
    ::: wrap
    $
    \begin{array}{ll}
    n\textsf{ people} \to m\textsf{ rooms} \\
    \underbrace{C_m^1}_{1\textsf{st person}}\times\underbrace{C_m^1}_{2\textsf{nd person}}\times\underbrace{C_m^1}_{3\textsf{rd person}}\times\cdots\times\underbrace{C_m^1}_{n^\textsf{th}\textsf{ person}}=m^n \\
    \textsf{repeated multiplication of the same combination yields a power}
    \end{array}
    $  
    :::
- __$\boldsymbol{n}$ people going to $\boldsymbol{m}$ different rooms yields $\boldsymbol{m^n}$ ways__.
- __$\boldsymbol{n}$ distinct balls placed into $\boldsymbol{m}$ distinct boxes yields $\boldsymbol{m^n}$ ways__.
- __$\boldsymbol{n}$ distinct letters put into $\boldsymbol{m}$ distinct mailboxes yields $\boldsymbol{m^n}$ ways__.


## 10.Focus 6
__The repeated-object power method__  
- When __using the repeated-object power method__,
  __do not interchange the base and the exponent__.

### $\fbox{25}\:$Five people register for three different training programs, with each person choosing exactly one program. How many possible registrations are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 243 &
\textsf{(B)} \: 125 &
\textsf{(C)} \: 81 &
\textsf{(D)} \: 60 &
\textsf{(E)} \: 56 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
m^n=3^5=243 & \textsf{projects}^\textsf{people} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $m^n=243$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  m^n & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#usage}{\textsf{repeated-object power method}} \\
  \end{array}
  >$

  :::
- Additionally, if the problem is that each person must register for at least two programs  
  ::: wrap  
  >$
  \begin{array}{ll}
  C_3^2+C_3^3=3+1=4 & \textsf{each person's ways to register} \\
  4\times4\times4\times4\times4=4^5 \\
  \end{array}
  >$

  :::
---


### $\fbox{26}\:$Five people participate in three different competitions. Each competition can have only one winner. How many winning outcomes are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 243 &
\textsf{(B)} \: 125 &
\textsf{(C)} \: 81 &
\textsf{(D)} \: 60 &
\textsf{(E)} \: 54 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
m^n=C_5^1\times C_5^1\times C_5^1=5^3=125 & \textsf{people}^\textsf{competitions} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $m^n=125$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  m^n & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#usage}{\textsf{repeated-object power method}} \\
  \end{array}
  >$

  :::
---


### $\fbox{27}\:$Six people are assigned to seven groups. How many different assignments are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 7^6 &
\textsf{(B)} \: 6^7 &
\textsf{(C)} \: 7! &
\textsf{(D)} \: 6! &
\textsf{(E)} \: C_7^6 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
m^n=7^6 & \textsf{groups}^\textsf{people}\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $m^n=7^6$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  m^n & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#usage}{\textsf{repeated-object power method}} \\
  \end{array}
  >$

  :::
---



## 11.Correct Matching and Incorrect Matching

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Conditions
- __The items are distinct__
- __The objects are distinct__
- __Items correspond to objects__


### $\textcolor{#1E3A5F}{\fbox{2}}\:$Description
- __correct matches: $\boldsymbol{1}$ way__
- __$\boldsymbol{2}$ incorrect matches: $\boldsymbol{1}$ way__
- __$\boldsymbol{3}$ incorrect matches: $\boldsymbol{2}$ ways__
- __$\boldsymbol{4}$ incorrect matches: $\boldsymbol{9}$ ways__
- __$\boldsymbol{5}$ incorrect matches: $\boldsymbol{44}$ ways__
- __$\boldsymbol{6}$ incorrect matches: $\boldsymbol{265}$ ways__

![Incorrect matches of 2 and 3 elements.svg](../../public/math/Core%20Course/Incorrect%20matches%20of%202%20and%203%20elements.svg)



## 12.Focus 7
__The correct matching and incorrect matching__  
- __correct matches: $\boldsymbol{1}$ way__
- __$\boldsymbol{2}$ incorrect matches: $\boldsymbol{1}$ way__
- __$\boldsymbol{3}$ incorrect matches: $\boldsymbol{2}$ ways__
- __$\boldsymbol{4}$ incorrect matches: $\boldsymbol{9}$ ways__
- __$\boldsymbol{5}$ incorrect matches: $\boldsymbol{44}$ ways__


### $\fbox{28}\:$Five balls labeled $\small 1, 2, 3, 4, 5$ and five boxes labeled $\small 1, 2, 3, 4, 5$. Each box receives one ball, If exactly one ball is placed in the box with the same number, how many possible ways are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 20 &
\textsf{(B)} \: 30 &
\textsf{(C)} \: 45 &
\textsf{(D)} \: 60 &
\textsf{(E)} \: 130 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions    
  ![Question six fundamental methods figure Q-28 solve-1.svg](../../public/math/Core%20Course/Question%20six%20fundamental%20methods%20figure%20Q-28%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  C_5^1\times9=45 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $C_5^1\times9=45$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#description-2}{4\textsf{ incorrect matches: }9\textsf{ ways}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#combination-formula}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{29}\:$Six people and six groups, with one person per group. If exactly two people are in the group with the same number, how many possible ways are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 120 &
\textsf{(B)} \: 130 &
\textsf{(C)} \: 135 &
\textsf{(D)} \: 160 &
\textsf{(E)} \: 180 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question six fundamental methods figure Q-29 solve-1.svg](../../public/math/Core%20Course/Question%20six%20fundamental%20methods%20figure%20Q-29%20solve-1.svg)   
  ::: wrap  
  $
  \begin{array}{ll}
  C_6^2\times9=\frac{6\times5}{2\times1}\times9=135 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $C_6^2\times9=135$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#description-2}{4\textsf{ incorrect matches: }9\textsf{ ways}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#combination-formula}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{30}\:$Six people and six groups, with one person per group. If at least two people are in the group with the same number, how many possible ways are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 170 &
\textsf{(B)} \: 180 &
\textsf{(C)} \: 190 &
\textsf{(D)} \: 191 &
\textsf{(E)} \: 192 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions (at least two $\Longleftrightarrow \ge2$)  
  ![Question six fundamental methods figure Q-30 solve-1.svg](../../public/math/Core%20Course/Question%20six%20fundamental%20methods%20figure%20Q-30%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  \textcolor{#228B22}{\scriptsize\fbox{1}}\:\textsf{solve by using the direct counting (}\ge2\textsf{)} \\
  C_6^2\times9 + C_6^3\times2 + C_6^4\times1 + C_6^6 \\
  \frac{6\times5}{2\times1}\times9 + \frac{\bcancel{6}\times5\times4}{\bcancel{3}\times\bcancel{2}\times1}\times2 + \frac{\bcancel{6}\times5\times\bcancel{4}\times3}{\bcancel{4}\times\bcancel{3}\times\bcancel{2}\times1}\times1 + 1 \\
  15\times9 + 20\times2 + 15\times1 +1 = 191 \\
  \textcolor{#228B22}{\scriptsize\fbox{2}}\:\textsf{solve by using the complementary counting (}\lt2\textsf{)} \\
  6!-C_6^1\times44-265 \\
  720-(6\times44)-265=191 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $191$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#description-2}{\textsf{correct matches: }1\textsf{ ways}} \\
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#description-2}{2\textsf{ incorrect matches: }1\textsf{ ways}} \\
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#description-2}{3\textsf{ incorrect matches: }2\textsf{ ways}} \\
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#description-2}{4\textsf{ incorrect matches: }9\textsf{ ways}} \\
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#description-2}{5\textsf{ incorrect matches: }44\textsf{ ways}} \\
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#description-2}{6\textsf{ incorrect matches: }265\textsf{ ways}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#combination-formula}{\textsf{combination formula}} \\
  \frac{n!}{k_1!\times k_2!\times\cdots \times k_m!} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#multinomial-coefficient}{\textsf{multinomial coefficient}} \\
  \end{array}
  >$

  :::
---


## 13.Exhaustive Listing Method

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Usage
- __When items interfere with each other or cannot be chosen directly__,
  __list them according to the conditions__.
- __When listing__,
  __a reference standard must be established__;
  __otherwise, errors of overcounting or undercounting may occur__.



## 14.Focus 8
__The exhaustive listing method__  
- When __the conditions make combinations impossible to choose directly__,
  __list them according to the conditions__.
  __If direct listing is complex__,
  __use complementary listing__.


### $\fbox{31}\:$Nine cards are numbered $\small 1$ to $\small 9$. Three cards are drawn such that their numbers sum to $\small 9$. How many different drawn are there $\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 2 &
\textsf{(B)} \: 3 &
\textsf{(C)} \: 4 &
\textsf{(D)} \: 5 &
\textsf{(E)} \: 6 & \\
\end{array}
$  
:::
#### Solution
- Establish $1$ as the reference standard  
  ::: wrap  
  $
  \begin{array}{ll}
  \underbrace{1}_{\Delta}\quad2\quad3\quad4\quad5\quad6\quad7\quad8\quad9 \\
  1
  \begin{cases}
  1+2+6=9 \\
  1+3+5=9 \\
  \end{cases} \\
  2
  \begin{cases}
  2+3+4=9 \\
  \end{cases} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $3$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_13-exhaustive-listing-method}{\textsf{exhaustive listing method}} \\
  \end{array}
  >$

  :::
---


### $\fbox{32}\:$A balance scale has weights of $\small 1\textsf{g}$, $\small 3\textsf{g}$, and $\small 9\textsf{g}$, If the weights can be placed on only one side, how many different weights are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 4 &
\textsf{(B)} \: 5 &
\textsf{(C)} \: 6 &
\textsf{(D)} \: 7 &
\textsf{(E)} \: 8 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question six fundamental methods figure Q-32 solve-1.svg](../../public/math/Core%20Course/Question%20six%20fundamental%20methods%20figure%20Q-32%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  1\textsf{g} \quad 3\textsf{g} \quad 9\textsf{g} \\
  \textsf{one weight}
  \begin{cases}
  1 \\
  3 \\
  9 \\
  \end{cases} \\
  \textsf{two weights}
  \begin{cases}
  1+3 \\
  1+9 \\
  3+9 \\
  \end{cases} \\
  \textsf{three weights}
  \begin{cases}
  1+3+9
  \end{cases} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $7$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_13-exhaustive-listing-method}{\textsf{exhaustive listing method}} \\
  \end{array}
  >$

  :::
---


### $\fbox{33}\:$Mike has one five-dollar bill, four ten-dollar bills, and eight one-dollar bills. He wants to buy a book costing $\small 8$ dollars. How many different pays are there $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 4 &
\textsf{(B)} \: 5 &
\textsf{(C)} \: 6 &
\textsf{(D)} \: 7 &
\textsf{(E)} \: 8 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
5 \quad [10, 10, 10, 10] \quad [1, 1, 1, 1, 1, 1, 1, 1] \\
3\textsf{ types}
\begin{cases}
5+2+1 \\
\end{cases} \\
2\textsf{ types}\begin{cases}
5+1+1+1 \\
2+2+2+1+1 \\
2+2+1+1+1+1 \\
2+1+1+1+1+1+1 \\
\end{cases} \\
1\textsf{ type}
\begin{cases}
2+2+2+2 \\
1+1+1+1+1+1+1+1 \\
\end{cases} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $7$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_13-exhaustive-listing-method}{\textsf{exhaustive listing method}} \\
  \end{array}
  >$

  :::
---


### $\fbox{34}\:$Using $\small 0.1, 0.2$, and $\small 0.5$, find the number of combinations that sum to $\small 1$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 5 &
\textsf{(B)} \: 6 &
\textsf{(C)} \: 7 &
\textsf{(D)} \: 8 &
\textsf{(E)} \: 10 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
1\textsf{ type}
\begin{cases}
0.1\times10 \\
0.2\times5 \\
0.5\times2 \\
\end{cases} \\
2\textsf{ types}
\begin{cases}
0.1\times2+0.2\times4 \\
0.1\times4+0.2\times3 \\
0.1\times5+0.5 \\
0.1\times6+0.2\times2 \\
0.1\times8+0.2 \\
\end{cases} \\
3\textsf{ types}
\begin{cases}
0.5+0.2\times2+0.1 \\
0.5+0.2+0.1\times3 \\
\end{cases} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $10$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Course/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_13-exhaustive-listing-method}{\textsf{exhaustive listing method}} \\
  \end{array}
  >$

  :::
---

| Platform    | Lesson                                                                                                       | Materials                                                                                      |
|-------------|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=AL5zf-Li0KE&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)                 | [Core courseware](../../public/math/Core%20Course/pdf/Core%20courseware.pdf)                   |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuma?playlist=x9h6d2)                                           | [Core courseware answers](../../public/math/Core%20Course/pdf/Core%20courseware%20answers.pdf) |
| Rumble      | [Watch](https://rumble.com/v6s95i9-32-chapter9-permutations-and-combinations-module2-six-basic-methods.html) |                                                                                                |

