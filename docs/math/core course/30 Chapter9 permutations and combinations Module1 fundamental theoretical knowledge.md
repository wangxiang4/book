---
title: Chapter9 Permutations and Combinations – Module1 Fundamental Theoretical Knowledge
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
  N=m_1+m_2+\cdots+m_n & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#definition}{\textsf{addition principle}} \\
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
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the permutations of distinct items    
  ::: wrap  
  $
  \begin{array}{ll}
  \frac{24}{3}=8 \\
  [888, 996, 789] \\
  888 \Longrightarrow 1 \\
  996 \Longrightarrow C_3^2=\frac{3\times2}{2\times1}=3 \\
  789 \Longrightarrow 3!=6 \\
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
  N=m_1+m_2+\cdots+m_n & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#definition}{\textsf{addition principle}} \\
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
  >   - __[Combination formula](/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#number-of-combinations)__ $\boldsymbol{C_n^m=\frac{n!}{m!(n-m)!}}$
  >     - __order does not matter, remove duplicates caused by different orders__
  > - __All distinct items can only be arranged using the multinomial coefficient $\boldsymbol{\frac{n!}{k_1!\times k_2!\times\cdots \times k_m!}=n!}$__
  >   - __combination formula not applicable, ignores order, removes ordered duplicates__

  :::  

---

## 5.Focus 2
__The multiplication principle__   
- When encountering __stepwise problems__, apply __the multiplication principle__.


### $\fbox{3}\:$A class participates in a relay race. Two students can run the first leg, three students can run the second leg, two students can run the third leg, and one student can run the final leg. Find the total number of possible running orders.
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
  [
  \textsf{leg}_1\mapsto2, 
  \textsf{leg}_2\mapsto3, 
  \textsf{leg}_3\mapsto2, 
  \textsf{leg}_4\mapsto1
  ] \\
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
  N=m_1\times m_2\times\cdots\times m_n & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#_2-principle-of-counting-by-steps-multiplication-principle}{\textsf{multiplication principle}} \\
  \end{array}
  >$

  :::
- Determine whether to use addition or multiplication  
  ::: wrap
  >$
  \begin{array}{ll}
  \textsf{task not completed} \to \times \\
  \textsf{task completed} \to + \\
  \end{array}
  >$

  :::
---

## 6.Focus 3
__The addition and multiplication principles coexist__
- When __classification and steps appear together__,
  first __classify at a macroscopic level__ and __then apply steps at a microscopic level__.

### $\fbox{4}\:$There are $\small 5$ sketches, $\small 3$ oil paintings, and $\small 2$ watercolor paintings. Two paintings of different types are selected to decorate the classroom. How many different ways are there $\small \mathpunct{?}$.
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
[\left\{ \textsf{sketch}, \textsf{oil painting} \right\}, \left\{ \textsf{sketch}, \textsf{watercolor painting} \right\}, \left\{ \textsf{oil painting}, \textsf{watercolor painting} \right\}] \\
\left\{ \textsf{sketch}, \textsf{oil painting} \right\} \\
\textsf{painting}_1\mapsto C_5^1=\frac{5}{1}=5 \\
\textsf{painting}_2\mapsto C_3^1=\frac{3}{1}=3 \\
\left\{ \textsf{sketch}, \textsf{watercolor painting} \right\} \\
\textsf{painting}_1\mapsto C_5^1=\frac{5}{1}=5 \\
\textsf{painting}_2\mapsto C_2^1=\frac{2}{1}=2 \\
\left\{ \textsf{oil painting}, \textsf{watercolor painting} \right\} \\
\textsf{painting}_1\mapsto C_3^1=\frac{3}{1}=3 \\
\textsf{painting}_2\mapsto C_2^1=\frac{2}{1}=2 \\
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
  N=m_1\times m_2\times\cdots\times m_n & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#_2-principle-of-counting-by-steps-multiplication-principle}{\textsf{multiplication principle}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#combination-formula}{\textsf{combination formula}} \\
  N=m_1+m_2+\cdots+m_n & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#definition}{\textsf{addition principle}} \\
  \end{array}
  >$

  :::
---

## 7.Permutations

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Definition
- From __$\boldsymbol{n}$ distinct items__,
  __choosing $\boldsymbol{m}$ items $\boldsymbol{(m \le n)}$ and arranging them in a sequence is called a permutation__.

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Number of permutations
- __The total number of permutations obtained by choosing $\boldsymbol{m}$ items $\boldsymbol{(m \le n)}$ from $\boldsymbol{n}$ distinct items is denoted by $\boldsymbol{P_n^m}$__.
  __When $\boldsymbol{m=n}$__, it is called __a full permutation__, __denoted by $\boldsymbol{P_n^m}$__.

### $\textcolor{#1E3A5F}{\fbox{3}}\:$Permutation formula
::: wrap  
- $\boldsymbol{P_n^m=n(n-1)(n-2)\cdots(n-m+1)=\frac{n!}{(n-m)!}=C_n^m\times m!}$   
  - $\boldsymbol{n}$: __total items__
  - $\boldsymbol{m}$: __number of items chosen (order matters)__
- __example__  
  $
  \begin{array}{ll}
  P_n^m=n(n-1)(n-2)\cdots(n-m+1) \\
  P_6^3=\underbrace{6\times5\times4}_{3 \textsf{ numbers}}=120 \\
  \end{array}
  $  
:::  



## 8.Combinations

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Definition
- From __$\boldsymbol{n}$ distinct items__,
  __choosing $\boldsymbol{m}$ items $\boldsymbol{(m \le n)}$ to form a group is called a combination__.


### $\textcolor{#1E3A5F}{\fbox{2}}\:$Number of combinations
- __The total number of combinations obtained by choosing $\boldsymbol{m}$ items $\boldsymbol{(m \le n)}$ from $\boldsymbol{n}$ distinct items is denoted by $\boldsymbol{C_n^m}$__.

### $\textcolor{#1E3A5F}{\fbox{3}}\:$Combination formula
::: wrap
- $\boldsymbol{C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1}=\frac{n!}{m!(n-m)!}=\boldsymbol{\frac{P_n^m}{m!}}}$
  - $\boldsymbol{n}$: __total items__
  - $\boldsymbol{m}$: __number of items chosen (order does not matter)__
- __example__  
  $
  \begin{array}{ll}
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} \\
  C_7^3=\frac{7\times6\times5}{3\times2\times1}=\frac{210}{6}=35 \\
  C_7^4=\frac{7\times6\times5\times4}{4\times3\times2\times1}=\frac{840}{24}=35 \\
  \end{array}
  $  
:::  

### $\textcolor{#1E3A5F}{\fbox{4}}\:$Properties of combinations
- $\boldsymbol{C_n^m=C_n^{n-m}}$
- $\boldsymbol{C_n^0=C_n^n=1}$
- $\boldsymbol{C_n^1=C_n^{n-1}=n}$
- $\boldsymbol{C_n^2=C_n^{n-2}=\frac{n(n-1)}{2}}$
  - __Property derivation__  
    $
    \begin{array}{ll}
    C_n^{n-2}=\frac{n!}{(n-2)!\times2!}=\frac{n(n-1)(n-2)!}{(n-2)!\times2!} \\
    \frac{n(n-1)\bcancel{(n-2)!}}{\bcancel{(n-2)!}\times2!}=\frac{n(n-1)}{2} \\
    C_n^2=C_n^{n-2}=\frac{n(n-1)}{2} \\
    \end{array}
    $
- Common combination values
  - $C_3^2=C_3^1=3$
  - $C_4^2=6$
  - $C_5^2=C_5^3=10$
  - $C_6^2=C_6^4=15$
  - $C_6^3=20$


## 9.Focus 4
__The calculations of permutations and combinations__  
- Using __the definitions and formulas of permutations and combinations__.

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
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#combination-formula}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{6}\:$Given $\small C_{m-1}^{m-2}=\frac{3}{n-1}C_{n+1}^{n-2}$, find $\small m$.
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
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the method of assigning specific values (may involve letting specific values again)    
  ::: wrap  
  $
  \begin{array}{ll}
  C_{m-1}^{m-2}=C_{m-1}^{(m-1)-(m-2)}=C_{m-1}^{1}=\frac{m-1}{1}=m-1 \\
  \textsf{let }n=2 \\
  m-1=\frac{3}{1}C_3^0=\frac{3}{1}\times1=3 & \textsf{substitute }n=2 \\
  m-1=3 \\
  m=4 \\
  \textsf{(A)} \: m=2-2=0 \,❌\;\\
  \textsf{(B)} \: m=2+2=4 \,✅\;\\
  \textsf{(C)} \: m=\sum_{k=1}^{n}k=\frac{2(2+1)}{2}=3 \,❌\;\\
  \textsf{(D)} \: m=1+\sum_{k=1}^{n} k=1+\frac{2(2+1)}{2}=4 \,✅\;\\
  \textsf{two correct options found, let}\ldots \\
  \textsf{let }n=4 \\   
  m-1=\frac{3}{3}C_5^2=1\times\frac{5\times4}{2\times1}=10 & \textsf{substitute }n=4 \\
  m-1=10 \\
  m=11 \\  
  \textsf{(B)} \: m=4+2=6 \,❌\;\\   
  \textsf{(D)} \: m=1+\sum_{k=1}^{n} k=1+\frac{4(4+1)}{2}=11 \,✅\;\\  
  \end{array}
  $   
  :::  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the symmetry of combinations  
  ::: wrap  
  $
  \begin{array}{ll}
  C_{m-1}^{m-2}=C_{m-1}^{(m-1)-(m-2)}=C_{m-1}^{1}=\frac{m-1}{1}=m-1 \\
  C_{n+1}^{n-2}=C_{n+1}^{(n+1)-(n-2)}=C_{n+1}^3 \\
  m-1=\frac{3}{n-1}C_{n+1}^3=\frac{\bcancel{3}}{\bcancel{n-1}}\times\frac{(n+1)\times n \times \bcancel{(n-1)}}{\bcancel{3}\times2\times1}=\frac{n(n+1)}{2} \\
  m=1+\frac{n(n+1)}{2} \\
  \frac{n(n+1)}{2}=\sum_{k=1}^{n}k \\
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
  C_n^m=C_n^{n-m} & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#properties-of-combinations}{\textsf{property of combinations}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#combination-formula}{\textsf{combination formula}} \\
  \frac{n(n+1)}{2} & \href{https://letstalkscience.ca/educational-resources/backgrounders/gauss-summation}{\textsf{gauss summation}} \\
  \end{array}
  >$

  :::
---

## 10.Focus 5
__The applications of permutations and combinations__   
- Using __the definitions and formulas of permutations and combinations__.


### $\fbox{7}\:$From four distinct items $\small A, B, C$, and $\small D$, how many permutations are there when choosing two items $\small \mathpunct{?}$.
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
  P_n^m=C_n^m\times m! & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#permutation-formula}{\textsf{permutation formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#combination-formula}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{8}\:$From four distinct items $\small A, B, C$, and $\small D$, how many combinations are there when choosing two items $\small \mathpunct{?}$.
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
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#combination-formula}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{9}\:$There are nine numbered balls labeled from $\small 1$ to $\small 9$. How many groups of three balls can be formed $\small \mathpunct{?}$. 
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
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#combination-formula}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{10}\:$There are nine numbered balls labeled from $\small 1$ to $\small 9$. Three are chosen at random. How many three-digit numbers can be formed $\small \mathpunct{?}$.
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
Р_9^3=C_9^3 \times 3!=\frac{9\times8\times7}{3\times2\times1}\times(3\times2\times1)=84\times6=504 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $Р_9^3=504$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  P_n^m=C_n^m\times m! & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#permutation-formula}{\textsf{permutation formula}} \\
  \end{array}
  >$

  :::
---

| Platform    | Lesson                                                                                                               | Materials                                                                                      |
|-------------|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=BKL0JLJVS5U&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)                         | [Core courseware](../../public/math/core%20course/pdf/core%20courseware.pdf)                   |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuac?playlist=x9h6d2)                                                   | [Core courseware answers](../../public/math/core%20course/pdf/core%20courseware%20answers.pdf) |
| Rumble      | [Watch](https://rumble.com/v6s95i3-31-chapter9-permutations-and-combinations-module1-basic-theoretical-knowled.html) |                                                                                                |
