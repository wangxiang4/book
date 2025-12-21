---
title: Chapter9 Permutations and Combinations – Module1 Fundamental Theoretical Knowledge
lang: en-US
---

# Module 9–01 Fundamental Theoretical Knowledge

## 1.Case Counting Principle (Addition Principle)

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Definition
- If __there are $\boldsymbol{n}$ categories of methods to complete a task__,
and __choosing any one method from any of these categories can complete the task__,
let __the first category have $\boldsymbol{m_1}$ different methods__,
__the second category have $\boldsymbol{m_2}$__, and so on,
with __the n‑th category having $\boldsymbol{m_n}$ methods__.
Then __the total number of ways to complete the task is $\boldsymbol{N=m_1+m_2+\cdots+m_n}$__.

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Explanation
- When __applying the addition principle to counting__,
__the key is to classify reasonably__,
__ensuring no overlaps and no omissions__.
__Each method within a category must be independently capable of completing the task__;
__the specific methods in different categories must be mutually exclusive__
(i.e., __the classification is non-overlapping__);
and __every possible way of completing the task must fall into one of these categories__
(i.e., __the classification is exhaustive__).
- Determining __a reasonable classification is often the challenging part of applying the addition principle to solve problems__.
__The criteria for classification vary from problem, so building up experience is important__.

## 2.Step Counting Principle (Multiplication Principle)

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Definition
- If __the task must be completed by performing $\boldsymbol{n}$ consecutive steps sequentially__,
and if __there are $\boldsymbol{m_1}$ different ways to complete the first step__,
__$\boldsymbol{m_2}$ different ways to complete the second step__, and so on,
with __$\boldsymbol{m_n}$ different ways to complete the n‑th step__,
then __the total number of ways to complete the task is $\boldsymbol{N=m_1\times m_2\times\cdots\times m_n}$__.

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Explanation
- When __applying the multiplication principle for counting__,
__the key is to reasonably divide the task into steps__.
__The steps are interrelated__,
and __no single method of any step can complete the task on its own__;
__the task must be completed by performing all $\boldsymbol{n}$ steps consecutively__.
__The counting for each step is independent__,
and if __the method chosen for any step differs__,
__the corresponding way of completing the task is considered different__.


## 3.The Differences and Connections Between the Two Principles
- __Fundamental difference__
  - __Addition is used between numbers when the methods belong to different categories__,
    and __each method can complete the entire task on its own__.
  - __Multiplication is used between numbers when the methods correspond to different steps__,
    and __each method can only complete a part of the task__.
- __Counterexample__
  - $\boldsymbol{\textsf{at most} \Leftrightarrow \le}$
  - $\boldsymbol{\textsf{at least} \Leftrightarrow \ge}$
  - __Classify a number of apples according to having at most $\boldsymbol{2}$ bad ones__,
    with __the first category having $\boldsymbol{2}$ bad apples__,
    __the second category having $\boldsymbol{1}$ bad apple__,
    and __note that there is also a category with $\boldsymbol{0}$ bad apples__.


| Content     | Addition Principle                                                                                                                        | Multiplication Principle                          |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| Essence     | __Each category can complete the task independently__                                                                                     | __Missing any step prevents task completion__     |
| Feature     | __Add corresponding to the number of categories__                                                                                         | __Multiply corresponding to the number of steps__ |
| Symbol      | $\boldsymbol{+}$                                                                                                                          | $\boldsymbol{\times}$                             |
| Application | __Apply classification for uncertain or interfering items__                                                                               | __Apply steps when multiple stages are involved__ |
| Coexistence | __When classification and steps appear together__, __first classify at a macroscopic level and then apply steps at a microscopic level__	 |



## 4.Focus 1
__The addition principle__  
- When encountering problems __that require classification__, apply __the addition principle__.


### $\fbox{1}\:$Student $\small A$ plans to travel from Sonoma to Cupertino for a trip. On that day, there are $\small 3$ trains, $\small 2$ ships, and $\small 5$ flights available from Sonoma to Cupertino. How many different travel options does Student $\small A$ have $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 3 &
\textsf{(B)} \: 2 &
\textsf{(C)} \: 5 &
\textsf{(D)} \: 10 &
\textsf{(E)} \: 30 & \\
\end{array}
$  
:::
#### Solution
- All categories complete the task independently  
  ::: wrap  
  $
  \begin{array}{ll}
  [
  \textsf{train}\mapsto3,\;
  \textsf{ship}\mapsto2,\;
  \textsf{flight}\mapsto5
  ] \\
  N=3+2+5=10 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $N=10$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  N=m_1+m_2+\cdots+m_n & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#definition}{\textsf{addition principle}} \\
  \end{array}
  >$

  :::
---

### $\fbox{2}\:$Find how many three-digit numbers whose digits sum is $\small 24$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 5 &
\textsf{(B)} \: 6 &
\textsf{(C)} \: 8 &
\textsf{(D)} \: 10 &
\textsf{(E)} \: 12 & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using enumeration  
  ::: wrap  
  $
  \begin{array}{ll}
  \frac{24}{3}=8 \\
  [888, 996, 789] \\
  888\in\underbrace{[888]}_{1} \\
  996\in\underbrace{[996,969,699]}_{3} \\
  789\in\underbrace{[789,798,879,897,978,987]}_{6} \\
  N=1+3+6=10 \\
  \end{array}
  $   
  :::  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the permutation formula    
  ::: wrap  
  $
  \begin{array}{ll}
  \frac{24}{3}=8 \\
  [888, 996, 789] \\
  888 \Longrightarrow 1 \\
  996 \longrightarrow
  \boxed{
  \begin{array}{ll}
  ①: C_3^2=\frac{3!}{2!(3-2)!}=\frac{6}{2}=3 \\
  ②: \frac{3!}{2!\times1!}=\frac{6}{2}=3 \\
  \end{array}
  } \\
  789 \longrightarrow 
  \frac{3!}{1!\times1!\times1!}=\frac{6}{1}=6 \\
  N=m_1+m_2+\cdots+m_n \\
  N=1+3+6=10 \\
  \end{array}
  $   
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $N=10$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  N=m_1+m_2+\cdots+m_n & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#definition}{\textsf{addition principle}} \\
  \end{array}
  >$

  :::
- permutations of distinct items  
  ::: wrap  
  > - __All identical items have only $\boldsymbol{1}$ permutation__
  > - __Some identical items__
  >   - __Enumeration lists all possibilities__
  >   - ###### __[Multinomial coefficient](https://en.wikipedia.org/wiki/Multinomial_theorem)__ $\boldsymbol{\frac{n!}{k_1!\times k_2!\times\cdots \times k_m!}}$
  >      - __order matters__, __remove duplicates from swapping identical items__
  >      - $\boldsymbol{n}$: __total items__
  >      - $\boldsymbol{k_i}$: __identical items in group $\boldsymbol{i}$__, __where $\boldsymbol{k_1+k_2+\cdots+k_m=n}$__  
  >      - __example__  
  > $
           \begin{array}{ll}
           [7,8,9] \\
           n=3 \\
           k_i=1\times1\times1 & 7,8,9\textsf{ each appear once} \\
           k_1+k_2+k_3=1+1+1=3 \\
           \frac{3!}{1!\times1!\times1!}=\frac{6}{1}=6 \\
           [7,8,9] \\
           [7,9,8] \\
           [8,7,9] \\
           [8,9,7] \\
           [9,7,8] \\
           [9,8,7] \\
           \end{array}
  > $
  >   - __[Combination formula](/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#number-of-combinations)__ $\boldsymbol{C_n^m=\frac{n!}{m!(n-m)!}}$
  >     - __order does not matter, remove duplicates caused by different orders__
  > - __All distinct items can only be arranged using the multinomial coefficient $\boldsymbol{\frac{n!}{k_1!\times k_2!\times\cdots \times k_m!}}$__
  >   - __combination formula not applicable, ignores order, removes ordered duplicates__

  :::  

---

## 5.Focus 2
__The multiplication principle__   
- When encountering multi-step problems, apply the multiplication principle.


### $\fbox{3}\:$A class is participating in a $\small 400\textsf{m}$ relay at the school sports meet. Two students can run the first leg, three the second, two the third, and one the final leg. The total number of possible running orders is $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 5 &
\textsf{(B)} \: 3 &
\textsf{(C)} \: 8 &
\textsf{(D)} \: 7 &
\textsf{(E)} \: 12 & \\
\end{array}
$  
:::
#### Solution
- The task requires collaboration     
  ::: wrap  
  $
  \begin{array}{ll}
  \begin{cases}
  \textsf{part}_1\mapsto2 \\
  \textsf{part}_2\mapsto3 \\
  \textsf{part}_3\mapsto2 \\
  \textsf{part}_4\mapsto1 \\
  \end{cases}\\
  N=m_1\times m_2\times\cdots\times m_n \\
  N=2\times3\times2\times1=12 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $N=12$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  N=m_1\times m_2\times\cdots\times m_n & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#_2-principle-of-counting-by-steps-multiplication-principle}{\textsf{multiplication principle}} \\
  \end{array}
  >$

  :::
- Determine: addition or multiplication  
  ::: wrap
  >$
  \textsf{task}
  \begin{cases}
  \textsf{incomplete} \to \times \\
  \textsf{completed} \to + \\
  \end{cases}
  >$

  :::
---

## 6.Focus 3
__The coexistence of addition and multiplication__
- When both classification and step-by-step processes appear together, __first classify at a macro level__, then __break down into steps at a micro level__.  


### $\fbox{4}\:$From $\small 5$ sketches, $\small 3$ oil paintings, and $\small 2$ watercolors, how many different ways can two pieces of artwork of different types be selected to decorate the classroom $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 35 &
\textsf{(B)} \: 33 &
\textsf{(C)} \: 32 &
\textsf{(D)} \: 31 &
\textsf{(E)} \: 30 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
[[\textsf{sketch}, \textsf{oil painting}], [\textsf{sketch}, \textsf{watercolor}], [\textsf{oil painting}, \textsf{watercolor}]] \\
[\textsf{sketch}, \textsf{oil painting}] 
\begin{cases}
\begin{array}{ll}
\textsf{part}_1\mapsto C_5^1=\frac{5!}{1!(5-1)!}=\frac{120}{24}=5 \\
\textsf{part}_2\mapsto C_3^1=\frac{3!}{1!(3-1)!}=\frac{6}{2}=3 \\
\end{array}
\end{cases} \\
[\textsf{sketch}, \textsf{watercolor}]
\begin{cases}
\begin{array}{ll}
\textsf{part}_1\mapsto C_5^1=\frac{5!}{1!(5-1)!}=\frac{120}{24}=5 \\
\textsf{part}_2\mapsto C_2^1=\frac{2!}{1!(2-1)!}=\frac{2}{1}=2 \\
\end{array}
\end{cases} \\
[\textsf{oil painting}, \textsf{watercolor}]
\begin{cases}
\begin{array}{ll}
\textsf{part}_1\mapsto C_3^1=\frac{3!}{1!(3-1)!}=\frac{6}{2}=3 \\
\textsf{part}_2\mapsto C_2^1=\frac{2!}{1!(2-1)!}=\frac{2}{1}=2 \\
\end{array}
\end{cases} \\
N=m_1\times m_2\times\cdots\times m_n & \textsf{subprocess} \\
N=m_1+m_2+\cdots+m_n & \textsf{main process} \\
N=(5\times3)+(5\times2)+(3\times2)=31 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $N=31$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  N=m_1\times m_2\times\cdots\times m_n & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#_2-principle-of-counting-by-steps-multiplication-principle}{\textsf{multiplication principle}} \\
  C_n^k=\frac{n!}{k!(n-k)!} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  N=m_1+m_2+\cdots+m_n & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#definition}{\textsf{addition principle}} \\
  \end{array}
  >$

  :::
---

## 7.Permutations

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Definition of permutation
- A permutation refers to __selecting $\boldsymbol{m}$ elements $\boldsymbol{(m \le n)}$__ from __$\boldsymbol{n}$ distinct elements__ and arranging them in __a specific order__.
This is called __a permutation__ of $m$ elements from __$\boldsymbol{n}$ distinct elements__.


### $\textcolor{#1E3A5F}{\fbox{2}}\:$Number of permutations
- The number of permutations refers to __the total number of different ways__ to select and arrange $m$ elements $(m \le n)$ from $n$ distinct elements.
It is denoted as $\boldsymbol{P_n^m}$ or $\boldsymbol{A_n^m}$.
When $m=n$, it is called __a full permutation__, written as $\boldsymbol{P_n^n}$ or $\boldsymbol{A_n^n}$.
- Note: It is important to distinguish between a permutation and the number of permutations.
  - __A permutation__ is one specific arrangement of $m$ elements selected from $n$ distinct elements.
    It is __not a number__.
  - __The number of permutations__ is __the total count__ of all such possible arrangements.
    It is __a numerical value__.
    Therefore, the notation $P_n^m$ represents only __the number of permutations__,
    __not the specific arrangements themselves__.


### $\textcolor{#1E3A5F}{\fbox{3}}\:$Formula for the number of permutations
::: wrap  
- $P_n^m=A_n^m=n(n-1)(n-2)\cdots(n-m+1)=\frac{n!}{(n-m)!}$   
- $n$: total number of available items (supply).
- $m$: number of items to arrange (demand, order matters).
:::  
- __Example__      
  $
  \begin{array}{ll}
  A_6^3=\underbrace{6\times5\times4}_{3 \textsf{ numbers}}=120 \\
  \end{array}
  $


## 8.Combinations

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Definition of combination
- Selecting $m$ elements $(m \le n)$ from $n$ distinct elements and __grouping them together__ (regardless of order)
is called __a combination__ of $m$ elements from $n$ distinct elements.
 
### $\textcolor{#1E3A5F}{\fbox{2}}\:$Number of combinations
- The number of combinations refers to __the total number of ways__ to choose $m$ elements $(m \le n)$ from $n$ distinct elements.
It is denoted as $\boldsymbol{C_n^m}$.
  ::: wrap  
  - ###### __Formula for the number of combinations__: $C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1}=\frac{n!}{m!(n-m)!}=\boldsymbol{\frac{A_n^m}{m!}}$.
    - $n$: total number of available items (supply).
    - $m$: number of elements to choose (demand, order does not matter).   
    - one permutation when all or none are selected: $C_n^0=C_n^n=1$.
    - __Example__    
      $
      \begin{array}{ll}
      C_7^3=\frac{7\times6\times5}{3\times2\times1}=\frac{210}{6}=35 \\
      C_7^4=\frac{7\times6\times5\times4}{4\times3\times2\times1}=\frac{840}{24}=35 \\
      \end{array}
      $
  :::  
  - ###### A permutation is __a combination__ followed by __arrangement__: $A_n^m=C_n^m\times A_m^m=\boldsymbol{C_n^m\times m!}$.  
    $A_4^3=C_4^3\times3!$

### $\textcolor{#1E3A5F}{\fbox{3}}\:$Property of combinations
- $C_n^m=C_n^{n-m}$
- __Example__: $C_9^6=C_9^3$


## 9.Problem-Solving Rules
- Permutations $A_n^m=C_n^m\times A_m^m=C_n^m\times m!$.
  A permutation is __a combination__ followed by __arrangement__, so $\boldsymbol{A_n^m}$ can be __expressed as $\boldsymbol{C_n^m\times m!}$__.
- Use combinations $\boldsymbol{C_n^m}$ when __selecting elements or positions__.
- Use factorial $\boldsymbol{m!}$ when __arranging (sorting) elements__.
- Break down all problems into a process of __selection__ and __arrangement__ and then __write expressions accordingly__.


## 10.Focus 4
__The calculation of permutations and combinations__  
- The calculation of permutations and combinations is based on their definitions and __formulas__. 


### $\fbox{5}\:\small C_8^4-C_7^3=\,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 25 &
\textsf{(B)} \: 28 &
\textsf{(C)} \: 30 &
\textsf{(D)} \: 32 &
\textsf{(E)} \: 35 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} \\
C_8^4=\frac{\bcancel{8}\times7\times\bcancel{6}\times5}{\bcancel{4}\times\bcancel{3}\times\bcancel{2}\times1}=\frac{2\times7\times5}{1}=70 \\
C_7^3=\frac{7\times\bcancel{6}\times5}{\bcancel{3}\times\bcancel{2}\times1}=\frac{7\times5}{1}=35 \\
70-35=35 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $70-35=35$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{6}\:$If $\small C_{m-1}^{m-2}=\frac{3}{n-1}C_{n+1}^{n-2}$, then what $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: m=n-2 &
\textsf{(B)} \: m=n+2 &
\textsf{(C)} \: m=\sum_{k=1}^{n} k & \\
\textsf{(D)} \: m=1+\sum_{k=1}^{n} k &
\textsf{(E)} \: \nexists & \\
\end{array}
$  
:::
#### Solution 
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the method of assigning specific values (note: there may be multiple correct options — continue testing values until the correct one(s) are identified)    
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{let }n=2 \\
  C_{m-1}^{m-2}=C_{m-1}^{(m-1)-(m-2)}=C_{m-1}^{1}=\frac{m-1}{1}=m-1 \\
  m-1=\frac{3}{1}C_3^0=\frac{3}{1}\times1=3 & \textsf{substitute }n=2 \\
  m-1=3 \longrightarrow m=4 \\
  \textsf{(A)} \: m=2-2=0 &❌\;\\
  \textsf{(B)} \: m=2+2=4 &✅\;\\
  \textsf{(C)} \: m=\sum_{k=1}^{n}k=1+2+\cdots+n=\frac{n(n+1)}{2}=\frac{2(2+1)}{2}=3 &❌\;\\
  \textsf{(D)} \: m=1+\frac{2(2+1)}{2}=4 &✅\;\\
  \textsf{two correct options found — keep testing values} \\
  \textsf{let }n=4 \\   
  m-1=\frac{3}{3}C_5^2=1\times\frac{5\times4}{2\times1}=10 & \textsf{substitute }n=4 \\
  m-1=10 \longrightarrow m=11 \\  
  \textsf{(B)} \: m=4+2=6 &❌\;\\   
  \textsf{(D)} \: m=1+\frac{4(4+1)}{2}=11 &✅\;\\  
  \end{array}
  $   
  :::  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the symmetric property of combinations: $C_n^m=C_n^{n-m}$    
  ::: wrap  
  $
  \begin{array}{ll}
  C_{m-1}^{m-2}=C_{m-1}^{(m-1)-(m-2)}=C_{m-1}^{1}=\frac{m-1}{1}=m-1 \\
  C_{n+1}^{n-2}=C_{n+1}^{(n+1)-(n-2)}=C_{n+1}^3 \\
  m-1=\frac{3}{n-1}C_{n+1}^3=\frac{\bcancel{3}}{\bcancel{n-1}}\times\frac{(n+1)\times n \times \bcancel{(n-1)}}{\bcancel{3}\times2\times1}=\frac{n(n+1)}{2} \\
  m=1+\frac{n(n+1)}{2} \\
  \sum_{k=1}^{n}k=1+2+\cdots+n=\frac{n(n+1)}{2} \\
  m=1+\sum_{k=1}^{n}k \\
  \end{array}
  $   
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $m=1+\sum_{k=1}^{n}k$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  C_n^m=C_n^{n-m} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#property-of-combinations}{\textsf{combinations property}} \\
  \frac{n(n+1)}{2} & \textsf{arithmetic sum formula} \\
  \end{array}
  >$

  :::  
- Common properties of combinations  
  ::: wrap   
  >1. $C_n^0=C_n^n=1$  
  >2. $C_n^1=C_n^{n-1}=n$   
  >3. $C_n^2=C_n^{n-2}=\frac{n(n-1)}{2}$  
  >    - __Derivation__  
  >$
         \begin{array}{ll}
         C_n^{n-2}=\frac{n!}{(n-2)!\times2!}=\frac{n(n-1)(n-2)!}{(n-2)!\times2!} \\
         \frac{n(n-1)\bcancel{(n-2)!}}{\bcancel{(n-2)!}\times2!}=\frac{n(n-1)}{2} \\
         C_n^2=C_n^{n-2}=\frac{n(n-1)}{2} \\
         \end{array}
  >$  
  >4. Common combinations   
  >$
     \begin{array}{ll}
     C_3^2=C_3^1=3 \\
     C_4^2=6 \\
     C_5^2=C_5^3=10 \\
     C_6^2=C_6^4=15 \\
     C_6^3=20 \\
     \end{array}  
  >$

  :::   

---

## 11.Focus 5
__The applications of permutations and combinations__   
- Calculate using the definitions and formulas of permutations and combinations.


### $\fbox{7}\:$How many permutations are there when selecting any two elements from the four distinct elements $\small A, B, C$, and $\small D$ using enumeration $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 5 &
\textsf{(B)} \: 6 &
\textsf{(C)} \: 7 &
\textsf{(D)} \: 8 &
\textsf{(E)} \: 12 & \\
\end{array}
$  
:::
#### Solution 
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using enumeration  
  ::: wrap  
  $
  \begin{array}{ll}
  [A, B]\; [B, A]\\
  [A, C]\; [C, A]\\
  [A, D]\; [D, A]\\
  [B, C]\; [C, B]\\
  [B, D]\; [D, B]\\
  [C, D]\; [D, C]\\
  \end{array}
  $   
  :::
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the permutation formula  
  ::: wrap  
  $
  \begin{array}{ll}
  Р_4^2=4\times3=12 \\
  p_n^m \Longleftrightarrow C_n^m\times m! \\
  Р_4^2=C_4^2 \times 2!=\frac{4\times3}{2\times1}\times2=12 \\
  \end{array}
  $   
  :::   
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $12$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  P_n^m=А_n^m=n(n-1)(n-2)\cdots(n-m+1) & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#formula-for-the-number-of-permutations}{\textsf{permutation formula }} \\
  P_n^m=C_n^m\times m! & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#a-permutation-is-a-combination-followed-by-arrangement}{\textsf{combination to permutation formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{8}\:$How many combinations are there when selecting any two elements from the four distinct elements $\small A, B, C$, and $\small D$ using enumeration $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 5 &
\textsf{(B)} \: 6 &
\textsf{(C)} \: 7 &
\textsf{(D)} \: 8 &
\textsf{(E)} \: 12 & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using enumeration  
  ::: wrap  
  $
  \begin{array}{ll}
  [A, B] \\
  [A, C] \\
  [A, D] \\
  [B, C] \\
  [B, D] \\
  [C, D] \\
  \end{array}
  $   
  :::  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the combination formula
  ::: wrap  
  $
  \begin{array}{ll}
  C_4^2=\frac{4\times3}{2\times1}=6 \\
  \end{array}
  $   
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $6$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{9}\:$There are $\small 9$ number balls labeled $\small 1$ to $\small 9$. How many groups of three balls can be formed $\small \mathpunct{?}$. 
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 84 &
\textsf{(B)} \: 124 &
\textsf{(C)} \: 254 &
\textsf{(D)} \: 358 &
\textsf{(E)} \: 504 & \\
\end{array}
$  
:::
#### Solution
::: wrap
$
\begin{array}{ll}
C_9^3=\frac{9\times8\times7}{3\times2\times1}=\frac{504}{6}=84 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $C_9^3=84$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{10}\:$There are $\small 9$ number balls labeled $\small 1$ to $\small 9$. How many three-digit numbers can be formed by selecting any three of them $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 404 &
\textsf{(B)} \: 424 &
\textsf{(C)} \: 454 &
\textsf{(D)} \: 458 &
\textsf{(E)} \: 504 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
Р_9^3=9\times8\times7=504 \\
p_n^m \Longleftrightarrow C_n^m\times m! \\
Р_9^3=C_9^3 \times 3!=\frac{9\times8\times7}{3\times2\times1}\times(3\times2\times1)=84\times6=504 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $Р_9^3=C_9^3 \times 3!=504$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  P_n^m=А_n^m=n(n-1)(n-2)\cdots(n-m+1) & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#formula-for-the-number-of-permutations}{\textsf{permutation formula }} \\
  P_n^m=C_n^m\times m! & \href{/math/0%20Core%20Course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#a-permutation-is-a-combination-followed-by-arrangement}{\textsf{combination to permutation formula}} \\
  \end{array}
  >$

  :::
---

| Platform    | Lesson                                                                                                               | Materials                                                                                      |
|-------------|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=BKL0JLJVS5U&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)                         | [Core courseware](../../public/math/Core%20Course/pdf/Core%20courseware.pdf)                   |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuac?playlist=x9h6d2)                                                   | [Core courseware answers](../../public/math/Core%20Course/pdf/Core%20courseware%20answers.pdf) |
| Rumble      | [Watch](https://rumble.com/v6s95i3-31-chapter9-permutations-and-combinations-module1-basic-theoretical-knowled.html) |                                                                                                |
