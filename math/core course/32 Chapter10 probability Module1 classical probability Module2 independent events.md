---
title: Chapter10 Probability – Module1 Classical Probability, Module2 Independent Events
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Taex9rTMDq8?si=1wHJ1IRZzN2rICsf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Module 10–01 Classical Probability

## 1.Random Experiment
- __The experiment can be repeated under the same conditions__.
- __The experiment has many possible outcomes__.
- __The outcome of the experiment cannot be determined in advance__;
  __only all possible outcomes can be determined__.
- If __the conditions are satisfied__, __the random event is denoted by $\boldsymbol{E}$__.


## 2.Random Event
- __An event that may or may not occur under given conditions is called a random event__, __denoted by $\boldsymbol{A, B, C},\cdots$__
::: wrap  
- $\boldsymbol{\textsf{event}=\textsf{experiment}+\textsf{specified outcomes}}$  
  - $\boldsymbol{=\textsf{specified outcome}}$: __occurrence (success)__
  - $\boldsymbol{\ne\textsf{specified outcome}}$: __non-occurrence (failure)__
  - $\boldsymbol{\lt\lor\gt\textsf{specified outcome}}$: __non-occurrence (failure)__
:::  


## 3.Basic Event, Certain Event, Impossible Event
- __Basic event__: __a single sample point in the sample space__.
  __Each possible outcome in a single experiment is called a basic event__.
  In a dice experiment $\boldsymbol{E=\left\{1,2,3,4,5,6\right\}}$, there are six basic events
- ###### __Certain event__: __an event that occurs in every trial__
- ###### __Impossible event__: __an event that never occurs in any trial__, __denoted by $\boldsymbol{\varnothing}$__

## 4.Definition of Probability
- __The likelihood of a random event $\boldsymbol{A}$ occurring is called the probability of event $\boldsymbol{A}$__, __denoted by $\boldsymbol{P(A)}$__.


## 5.Properties of Probability
- __If $\boldsymbol{A_1,A_2,\cdots,A_n}$ are mutually exclusive__,
  __their union is given by $\boldsymbol{P(\bigcup_{i=1}^{n}A_i)=\sum_{i=1}^{n}P(A_i)}$__.
- __If $\boldsymbol{\overline{A}}$ is the complement of $\boldsymbol{A}$__,
  __the probability of $\boldsymbol{\overline{A}}$ is denoted by $\boldsymbol{P(\overline{A})=1-P(A)}$__.

## 6.Classical Probability Experiment
- __The sample space consists of a finite number of outcomes (basic events)__.
- __Each basic event has an equal chance of occurring ($\boldsymbol{P(A)+P(\overline{A})=1}$)__.
- If __the conditions are satisfied__,
  __the random event $\boldsymbol{E}$ is called a classical probability experiment__.

## 7.Formula
::: wrap  
- $P(A)=\frac{k}{n}=\frac{\textsf{number of basic events in event }A}{\textsf{total number of basic events in sample space}}$
:::  

## 8.Explanation
- In classical probability,
  __one needs to use permutations and combinations to calculate the number of cases for both the numerator and the denominator__.
  __The denominator__, __representing the total number of cases__, __is relatively simple__,
  __while calculating the numerator is more complex__.


## 9.Focus 1
__The basic concepts__
- Analyze based on __the definition of events__,
  especially __the certain event and the impossible event are two special cases__.


### $\fbox{1}\:$Which of the following events is a certain event $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \textsf{turning on the tv, and it is broadcasting an advertisement} & \\
\textsf{(B)} \: \textsf{opening the math book, and landing exactly on page }50 & \\
\textsf{(C)} \: \textsf{tossing a coin, and it is landing heads up} & \\
\textsf{(D)} \: \textsf{a day has }24\textsf{ hours} & \\
\textsf{(E)} \: \textsf{winning the lottery} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{(A)} \: \textsf{random event} & ❌\;\\
\textsf{(B)} \: \textsf{random event} & ❌\;\\
\textsf{(C)} \: \textsf{random event} & ❌\;\\
\textsf{(D)} \: \textsf{certain event} & ✅\;\\
\textsf{(E)} \: \textsf{random event} & ❌\;\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $\textsf{(D)}$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#certain-event-an-event-that-occurs-in-every-trial}{\textsf{certain event}} \\
  & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_2-random-event}{\textsf{random event}} \\
  \end{array}
  >$

  :::
---

### $\fbox{2}\:$Which of the following events is an impossible event $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \textsf{tossing a coin twice, and getting at least one tails} & \\
\textsf{(B)} \: \textsf{it will snow in cupertino this winter} & \\
\textsf{(C)} \: \textsf{tossing two dice, and the sum of the numbers on top being }1 & \\
\textsf{(D)} \: \textsf{a spinner is divided into }6\textsf{ sections, arranged as red, white, white, red, red, white.} \\
                \hspace{0.8cm}\textsf{the pointer stops on the red section} & \\
\textsf{(E)} \: \textsf{a flight from sonoma to cupertino will be delayed} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{(A)} \: \textsf{random event} & ❌\;\\
\textsf{(B)} \: \textsf{random event} & ❌\;\\
\textsf{(C)} \: \textsf{impossible event} & ✅\;\\
\textsf{(D)} \: \textsf{random event} & ❌\;\\
\textsf{(E)} \: \textsf{random event} & ❌\;\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\textsf{(C)}$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#impossible-event-an-event-that-never-occurs-in-any-trial-denoted-by-boldsymbol-varnothing}{\textsf{impossible event}} \\
  & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_2-random-event}{\textsf{random event}} \\
  \end{array}
  >$

  :::
---

## 10.Sampling Methods
- __Sequential sampling (by default, one item is taken each time)__  
  - __With replacement__: __the sample remains unchanged__  
  - __Without replacement__: __the sample decreases progressively__ 
- __Single sampling__: __the order of the chosen items does not matter__


## 11.Sampling with Numbered Samples
- __When numbering operations are involved__,
  __use the listing method for analysis__.


## 12.Focus 2
__The sampling methods__  
- The sampling methods are divided into __sequential sampling (with replacement, without replacement)__ and __single sampling__.
  __In sequential sampling__, __the order matters__, __while in single sampling__, __the order does not__.
  __The probability of sequential sampling without replacement is equal to the probability of single sampling__.


### $\fbox{3}\:$A bag contains $\small 8$ balls of the same size and shape, $\small 5$ black balls and $\small 3$ white balls.
::: wrap  
$
\begin{array}{lllll}
\textsf{(1)} \: \textsf{if two balls are randomly drawn from the bag,} & \\
                \hspace{0.7cm}\textsf{find the probability that both drawn balls are black} \\
\textsf{(2)} \: \textsf{if two balls are drawn without replacement, one ball at a time,} & \\
                \hspace{0.7cm}\textsf{find the probability that both drawn balls are black} \\
\textsf{(3)} \: \textsf{if two balls are drawn with replacement, one ball at a time,} & \\
                \hspace{0.7cm}\textsf{find the probability that at least one of the drawn balls is black} \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{(1)} \: P_1=\frac{C_5^2}{C_8^2}=\frac{\frac{5\times\bcancel{4}}{\bcancel{2}\times1}}{\frac{\bcancel{8}\times7}{\bcancel{2}\times1}}=\frac{5\times\bcancel{2}}{\bcancel{4}\times7}=\frac{5}{2\times7}=\frac{5}{14} \\
\textsf{(2)} \: P_2=\frac{C_5^1C_4^1}{C_8^1C_7^1}=\frac{5\times\bcancel{4}}{\bcancel{8}\times7}=\frac{5}{2\times7}=\frac{5}{14} \\
\textsf{use the complement (no black balls) for simpler calculation} \\
\textsf{(3)} \: P_3=1-\frac{C_3^1C_2^1}{C_8^1C_8^1}=1-\frac{3\times\bcancel{2}}{\bcancel{8}\times8}=1-\frac{3}{4\times8}=\frac{32}{32}-\frac{3}{32}=\frac{29}{32}  \\
\end{array}
$  
:::  
#### Conclusion
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_10-sampling-methods}{\textsf{single sampling method}} \\
  & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_10-sampling-methods}{\textsf{sequential sampling method}} \\
  P(A) = \frac{k}{n} & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_7-formula}{\textsf{classical probability formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#textcolor-1e3a5f-fbox-3-combination-formula}{\textsf{combination formula}} \\
  P(\overline{A})=1-P(A) & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_5-properties-of-probability}{\textsf{complementary probability}} \\
  P(A)+P(\overline{A})=1 & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_6-classical-probability-experiment}{\textsf{classical probability experiment}} \\
  \end{array}
  >$

  :::
- __In probability, samples are different by default__
---

## 13.Focus 3
__The ball drawing score__  
- __Analyze the sampling cases based on the scores__.

### $\fbox{4}\:$A bag contains $\small 6$ red balls and $\small 4$ black balls. Four balls are randomly drawn from the bag. If drawing a red ball scores $\small 2$ points and drawing a black ball scores $\small 1$ point, what is the probability that the total score is no more than $\small 6$ points $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{23}{42} &
\textsf{(B)} \: \frac{4}{7} &
\textsf{(C)} \: \frac{25}{42} &
\textsf{(D)} \: \frac{13}{21} &
\textsf{(E)} \: \frac{11}{21} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{no more than }6\Longleftrightarrow\le6 \\
4\textsf{ black balls}=4\textsf{ points} \\
3\textsf{ black}+1\textsf{ red ball}=5\textsf{ points} \\
2\textsf{ black}+2\textsf{ red balls}=6\textsf{ points} \\
P=\frac{C_4^4+C_4^3C_6^1+C_4^2C_6^2}{C_{10}^{4}} \\
\frac{1+\frac{4\times\bcancel{3}\times\bcancel{2}}{\bcancel{3}\times\bcancel{2}\times1}\times6+\frac{\bcancel{4}\times3}{\bcancel{2}\times1}\times\frac{\bcancel{6}\times5}{\bcancel{2}\times1}}{\frac{10\times\bcancel{9}\times\bcancel{8}\times7}{\bcancel{4}\times\bcancel{3}\times\bcancel{2}\times1}}=\frac{1+4\times6+\frac{2\times3}{1}\times\frac{3\times5}{1}}{\frac{10\times3\times7}{1}}=\frac{115}{210}=\frac{23}{42} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $P=\frac{23}{42}$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  P(\bigcup_{i=1}^{n}A_i)=\sum_{i=1}^{n}P(A_i) & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_5-properties-of-probability}{\textsf{union probability of mutually exclusive events}} \\
  P(A) = \frac{k}{n} & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_7-formula}{\textsf{classical probability formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#textcolor-1e3a5f-fbox-3-combination-formula}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---

## 14.Focus 4
__The sampling with numbers__   
- When __the samples are numbered and involve operations on the numbers__,
  __use the listing method for analysis__.


### $\fbox{5}\:$A bag contains eight balls labeled $\small 1,2,3,4,5,6,7,8$, One ball is drawn at a time with replacement, and the drawing is performed twice. Find the probability that the sum of the two numbers drawn is not less than $\small 15$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{32} &
\textsf{(B)} \: \frac{1}{64} &
\textsf{(C)} \: \frac{2}{32} &
\textsf{(D)} \: \frac{3}{64} &
\textsf{(E)} \: \frac{5}{64} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
?+?\ge15 & \textsf{with replacement} \\
7+8=15 \\
8+7=15 \\
8+8=16 \\
P=\frac{3}{C_8^1C_8^1}=\frac{3}{8\times8}=\frac{3}{64} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $P=\frac{3}{64}$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_11-sampling-with-numbered-samples}{\textsf{sampling with numbers listing method}} \\
  & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_10-sampling-methods}{\textsf{sequential sampling method}} \\
  P(A) = \frac{k}{n} & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_7-formula}{\textsf{classical probability formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#textcolor-1e3a5f-fbox-3-combination-formula}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
- Additionally, if the problem is sequential sampling without replacement or single sampling     
  ::: wrap  
  >$
  \begin{array}{ll}
  ?+?\ge15 & \textsf{without replacement} \\
  7+8=15 \\
  8+7=15 \\
  P=\frac{2}{C_8^1C_7^1}=\frac{2}{8\times7}=\frac{2}{56}=\frac{1}{28} \\
  ?+?\ge15 & \textsf{single sampling} \\
  7+8=15 \\
  8+7=15 \\
  P=\frac{1}{C_8^2}=\frac{1}{\frac{\bcancel{8}\times7}{\bcancel{2}\times1}}=\frac{1}{4\times7}=\frac{1}{28} \\
  \end{array}
  >$

  :::  
---


### $\fbox{6}\:$Ten balls are labeled from $\small 1$ to $\small 10$. Four balls are drawn. Find the probability that the largest number among the four drawn balls is $\small 6$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{84} &
\textsf{(B)} \: \frac{3}{5} &
\textsf{(C)} \: \frac{2}{5} &
\textsf{(D)} \: \frac{1}{21} &
\textsf{(E)} \: \frac{1}{20} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{largest number is }6
\begin{cases}
6 \\
1\sim5 \\
\end{cases} \\
4\textsf{ balls} - 1\textsf{ ball numbered 6} = 3\textsf{ balls} \\
P=\frac{C_5^3}{C_{10}^4}=\frac{\frac{5\times\bcancel{4}\times\bcancel{3}}{\bcancel{3}\times\bcancel{2}\times1}}{\frac{10\times\bcancel{9}\times\bcancel{8}\times7}{\bcancel{4}\times\bcancel{3}\times\bcancel{2}\times1}}\frac{\bcancel{5}\times\bcancel{2}}{\bcancel{10}\times3\times7}=\frac{1}{21} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $P=\frac{1}{21}$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap  
  >$
  \begin{array}{ll}
  & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_11-sampling-with-numbered-samples}{\textsf{sampling with numbers listing method}} \\
  P(A) = \frac{k}{n} & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_7-formula}{\textsf{classical probability formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\times2\times1} & \href{/math/core%20course/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#textcolor-1e3a5f-fbox-3-combination-formula}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
- Rules for when the largest or smallest number is $k$  
  ::: wrap  
  >$
  \begin{array}{ll}
  \textsf{largest number is }k
  \begin{cases}
  k\textsf{ must be included} \\
  \textsf{all others are less than }k \\
  \end{cases} \\
  \textsf{smallest number is }k
  \begin{cases}
  k\textsf{ must be included} \\
  \textsf{all others are greater than }k \\
  \end{cases} \\
  \end{array}
  >$

  :::  
---

# Module 10–02 Independent Events

## 1.Definition
- $P(\bigcap_{i=1}^{n}A_i)=\prod_{i=1}^{n}P(A_i)$
- __If the occurrence of one event does not affect the probability of the other event__,
  __the two events are called mutually independent__.


## 2.Usage
- __The probability that mutually independent events $\boldsymbol{A_1, A_2, \cdots, A_n}$ occur simultaneously__  
  $P(\bigcap_{i=1}^{n}A_i)=\prod_{i=1}^{n}P(A_i)$
- __The probability that mutually independent events $\boldsymbol{A_1, A_2, \cdots, A_n}$ all do not occur__  
  $P(\bigcap_{i=1}^{n}\overline{A_i})=\prod_{i=1}^{n}P(\overline{A_i})$
- __The probability that at least one of the mutually independent events $\boldsymbol{A_1, A_2, \cdots, A_n}$ occurs__  
  $P(\bigcup_{i=1}^{n}A_i)=1-\prod_{i=1}^{n}P(\overline{A_i})$


## 3.Focus 1
__The templates for two independent events__  
- The probability that $A$ and $B$ occur simultaneously is $\boldsymbol{P_1\times P_2}$
- The probability that $A$ and $B$ both do not occur is $\boldsymbol{(1-P_1)\times(1-P_2)}$
- The probability that at least one of $A$ or $B$ occurs is $\boldsymbol{1-(1-P_1)\times(1-P_2)}$
- The probability that exactly one of $A$ or $B$ occurs is $\boldsymbol{P_1\times(1-P_2)+P_2\times(1-P_1)}$


### $\fbox{7}\:$Players $\small A$ and $\small B$ each take one shot. The probabilities of making the shot are $\small 0.6$ for $\small A$ and $\small 0.75$ for $\small B$. Find the probability that at least one of them makes the shot.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 0.4 &
\textsf{(B)} \: 0.45 &
\textsf{(C)} \: 0.5 &
\textsf{(D)} \: 0.55 &
\textsf{(E)} \: 0.65 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
P=0.6\times(1-0.75)+(1-0.6)\times0.75 \\
0.6\times0.25+0.4\times0.75=0.15+0.30=0.45 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $P=0.45$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  P_1\times(1-P_2)+P_2\times(1-P_1) & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_3-focus-1}{\textsf{union probability of mutually exclusive events}} \\
  \end{array}
  >$

  :::
---

## 4.Focus 2
__The templates for three independent events__  
::: wrap  
- The probability that $A, B$, and $C$ occur simultaneously is $\boldsymbol{P_1\times P_2\times P_3}$
- The probability that $A, B$, and $C$ all do not occur is $\boldsymbol{(1-P_1)\times(1-P_2)\times(1-P_3)}$
- The probability that at least one of $A, B$, or $C$ occurs is $\boldsymbol{1-(1-P_1)\times(1-P_2)\times(1-P_3)}$
- The probability that exactly two of $A, B$, and $C$ occur is $\boldsymbol{P_1\times P_2\times(1-P_3)+P_1\times P_3\times(1-P_2)+P_2\times P_3\times(1-P_1)}$
- The probability that at most two of $A, B$, and $C$ occur is $\boldsymbol{1-P_1\times P_2\times P_3}$
:::  


### $\fbox{8}\:$Players $\small A, B$, and $\small C$ each take one shot. The probabilities of making the shot are $\small 0.9$ for $\small A$, $\small 0.8$ for $\small B$, and $\small 0.7$ for $\small C$, Find the probability that at most two of them make the shot.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 0.456 &
\textsf{(B)} \: 0.496 &
\textsf{(C)} \: 0.516 &
\textsf{(D)} \: 0.528 &
\textsf{(E)} \: 0.542 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
P=1-0.9\times0.8\times0.7=1-0.504=0.496 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $P=0.496$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  1-P_1\times P_2\times P_3 & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_4-focus-2}{\textsf{probability of at most two independent event}} \\
  \end{array}
  >$

  :::
---

### $\fbox{9}\:\small A$ and $\small B$ attempt to crack a password. Their attempts are independent. The probabilities that $\small A$ and $\small B$ crack the password are $\small \frac{1}{3}$ and $\small \frac{1}{4}$, respectively.
#### (1) Find the probability that exactly one of them cracks the password.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{6} &
\textsf{(B)} \: \frac{1}{4} &
\textsf{(C)} \: \frac{1}{5} &
\textsf{(D)} \: \frac{5}{12} &
\textsf{(E)} \: \frac{7}{12} & \\
\end{array}
$  
:::
#### (2) Find the probability that at least one of them cracks the password.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{4} &
\textsf{(B)} \: \frac{1}{3} &
\textsf{(C)} \: \frac{1}{2} &
\textsf{(D)} \: \frac{3}{5} &
\textsf{(E)} \: \frac{2}{3} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textcolor{#228B22}{\textsf{(1)}}\;P_1=\frac{1}{3}\times(1-\frac{1}{4})+(1-\frac{1}{3})\times\frac{1}{4} \\
\hspace{0.7cm} \frac{1}{3}\times\frac{3}{4}+\frac{2}{3}\times\frac{1}{4}=\frac{3}{12}+\frac{2}{12}=\frac{5}{12} \\
\textcolor{#228B22}{\textsf{(2)}}\;P_2=1-(1-\frac{1}{3})\times(1-\frac{1}{4}) \\
\hspace{0.7cm} 1-\frac{2}{3}\times\frac{3}{4}=1-\frac{6}{12}=\frac{6}{12}=\frac{1}{2} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $P_1=\frac{5}{12},P_2=\frac{1}{2}$, so choose $(1)\rightarrow D,(2)\rightarrow C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  P_1\times(1-P_2)+P_2\times(1-P_1) & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_3-focus-1}{\textsf{union probability of mutually exclusive events}} \\
  1-(1-P_1)\times(1-P_2) & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_3-focus-1}{\textsf{probability of at least one independent event}} \\
  \end{array}
  >$

  :::
---

### $\fbox{10}\:$Three smoke detectors have alarm probabilities of $\small 0.9, 0.8$, and $\small 0.7$, respectively. Given that smoke occurs, find the probability that at least one alarm is triggered.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 0.996 &
\textsf{(B)} \: 0.995 &
\textsf{(C)} \: 0.994 &
\textsf{(D)} \: 0.96 &
\textsf{(E)} \: 0.94 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
P=1-(1-0.9)\times(1-0.8)\times(1-0.7) \\
1-0.1\times0.2\times0.3=1-0.006=0.994 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $P=0.994$, so choose $C$.  

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  1-(1-P_1)\times(1-P_2)\times(1-P_3) & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_4-focus-2}{\textsf{probability of at least one independent event}} \\
  \end{array}
  >$

  :::
---


### $\fbox{11}\:$Two anti-aircraft guns, each with a hit probability of $\small 0.6$.
#### (1) Find the probability that at least one anti-aircraft gun hits the target.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 0.64 &
\textsf{(B)} \: 0.72 &
\textsf{(C)} \: 0.82 &
\textsf{(D)} \: 0.84 &
\textsf{(E)} \: 0.86 & \\
\end{array}
$
:::  
#### (2) An enemy aircraft intrudes. If a $\small 99\%$ probability of hitting it is required, find the minimum number of anti-aircraft guns needed $\small (2^{10}=1024)$.
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
\textcolor{#228B22}{\textsf{(1)}}\;P_1=1-(1-0.6)\times(1-0.6) \\
\hspace{0.7cm} 1-0.4\times0.4=1-0.16=0.84 \\
\textcolor{#228B22}{\textsf{(2)}}\;P_2=1-(1-0.6)^n \ge 0.99 \\
\hspace{0.7cm} 1-0.4^n \ge 0.99 \\
\hspace{0.7cm} -0.4^n \ge -0.01 \\
\hspace{0.7cm} 0.4^n \le 0.01 \\
\hspace{0.7cm} 2^{10}=4^5=1024 \\
\hspace{0.7cm} 0.4^5=0.01024 \gt 0.01 \Longrightarrow n\ge6
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $P_1=0.84,n\ge6$, so choose $(1)\rightarrow D,(2)\rightarrow C$.

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  1-(1-P_1)\times(1-P_2) & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_3-focus-1}{\textsf{probability of at least one independent event}} \\
  \end{array}
  >$

  :::
---

## 5.Focus 3
__The competition template__  
- For __competition problems__,
  __first draw the result diagram for each round of the competition__,
  __and then analyze the probabilities__.


### $\fbox{12}\:$In a guessing game with $\small 5$ rounds, if a player passes $\small 2$ consecutive rounds, they are considered to have successfully completed the challenge. The probability of Mike passing each round is $\small \frac{1}{2}$. What is the probability that he successfully completes the challenge $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{8} &
\textsf{(B)} \: \frac{1}{4} &
\textsf{(C)} \: \frac{3}{8} &
\textsf{(D)} \: \frac{1}{2} &
\textsf{(E)} \: \frac{19}{32} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
1\quad2\quad3\quad4\quad5 \\
✅\quad✅ \\
❌\quad✅\quad✅ \\
❌\quad❌\quad✅\quad✅ \\
✅\quad❌\quad✅\quad✅ \\
❌\quad✅\quad❌\quad✅\quad✅ \\
✅\quad❌\quad❌\quad✅\quad✅ \\
❌\quad❌\quad❌\quad✅\quad✅ \\
P=(\frac{1}{2})^2+(\frac{1}{2})^3+(\frac{1}{2})^4\times2+(\frac{1}{2})^5\times3 \\
\frac{1}{4}+\frac{1}{8}+\frac{1}{16}\times2+\frac{1}{32}\times3 \\
\frac{1}{4}+\frac{1}{8}+\frac{2}{16}+\frac{3}{32} \\
\frac{8}{32}+\frac{4}{32}+\frac{4}{32}+\frac{3}{32}=\frac{19}{32} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $P=\frac{19}{32}$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  P(\bigcup_{i=1}^{n}A_i)=\sum_{i=1}^{n}P(A_i) & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_5-properties-of-probability}{\textsf{union probability of mutually exclusive events}} \\
  \end{array}
  >$

  :::
---


### $\fbox{13}\:\small A, B$, and $\small C$ are participating in a competition where two players compete in each round with no draws; the probability of $\small A$ defeating $\small B$ is $\small \frac{3}{5}$, $\small A$ defeating $\small C$ is $\small \frac{4}{5}$, and $\small B$ defeating $\small C$ is $\small \frac{3}{5}$, with the rule that the first round is between $\small A$ and $\small B$, and the winner of each round competes with the player who did not participate in that round in the next round, and the competition ends when one player wins two rounds.
#### (1) What is the probability that $\small A$ wins the competition after only two rounds $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{7}{25} &
\textsf{(B)} \: \frac{9}{25} &
\textsf{(C)} \: \frac{12}{25} &
\textsf{(D)} \: \frac{18}{25} &
\textsf{(E)} \: \frac{19}{25} & \\
\end{array}
$
:::  
#### (2) What is the probability that the competition ends after only two rounds $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{7}{25} &
\textsf{(B)} \: \frac{9}{25} &
\textsf{(C)} \: \frac{12}{25} &
\textsf{(D)} \: \frac{18}{25} &
\textsf{(E)} \: \frac{19}{25} & \\
\end{array}
$
:::  
#### (3) What is the probability that $\small A$ wins the entire competition $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{8} &
\textsf{(B)} \: \frac{1}{4} &
\textsf{(C)} \: \frac{3}{8} &
\textsf{(D)} \: \frac{4}{8} &
\textsf{(E)} \: \frac{3}{5} & \\
\end{array}
$
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve problem __(1)__ by drawing a competition tree diagram  
  ![Question independent events figure Q-13 solve-1.svg](../../public/math/core%20course/Question%20independent%20events%20figure%20Q-13%20solve-1.svg)  
  ::: wrap   
  $
  \begin{array}{ll}
  P=\frac{3}{5} & A\textsf{ defeats }B \\
  P=\frac{4}{5} & A\textsf{ defeats }C \\
  P_1=\frac{3}{5}\times\frac{4}{5}=\frac{12}{25} \\
  \end{array}
  $  
  :::
- $\textcolor{#228B22}{\fbox{2}}\:$Solve problem __(2)__ by drawing competition tree diagrams  
  ![Question independent events figure Q-13 solve-2.svg](../../public/math/core%20course/Question%20independent%20events%20figure%20Q-13%20solve-2.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  P=\frac{3}{5} & A\textsf{ defeats }B \\
  P=\frac{4}{5} & A\textsf{ defeats }C \\
  P=\frac{3}{5} & B\textsf{ defeats }C \\
  P_2=\frac{3}{5}\times\frac{4}{5}+\frac{2}{5}\times\frac{3}{5}=\frac{12}{25}+\frac{6}{25}=\frac{18}{25} \\
  \end{array}
  $  
  :::   
- $\textcolor{#228B22}{\fbox{3}}\:$Solve problem __(3)__ by drawing competition tree diagrams  
  ![Question independent events figure Q-13 solve-3.svg](../../public/math/core%20course/Question%20independent%20events%20figure%20Q-13%20solve-3.svg)  
  ::: wrap   
  $
  \begin{array}{ll}
  P=\frac{3}{5} & A\textsf{ defeats }B \\
  P=\frac{4}{5} & A\textsf{ defeats }C \\
  P=\frac{3}{5} & B\textsf{ defeats }C \\
  P_3=\frac{3}{5}\times\frac{4}{5}+\frac{3}{5}\times\frac{1}{5}\times\frac{3}{5}\times\frac{3}{5}+\frac{2}{5}\times\frac{2}{5}\times\frac{4}{5}\times\frac{3}{5} \\
  \frac{12}{25}+\frac{27}{625}+\frac{48}{625} \\
  \frac{300}{625}+\frac{27}{625}+\frac{48}{625}=\frac{375}{625}=\frac{3}{5} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > $\boldsymbol{(D)}$  
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $P_1=\frac{12}{25},P_2=\frac{18}{25},P_3=\frac{3}{5}$,
  > so choose $(1)\rightarrow C,(2)\rightarrow D,(3)\rightarrow E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  P(\bigcap_{i=1}^{n}A_i)=\prod_{i=1}^{n}P(A_i) & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_2-usage}{\textsf{simultaneous probability of independent events}} \\
  P(\bigcup_{i=1}^{n}A_i)=\sum_{i=1}^{n}P(A_i) & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_5-properties-of-probability}{\textsf{union probability of mutually exclusive events}} \\
  \end{array}
  >$

  :::
- Competition format templates  
  ::: wrap  
  > - __Fixed number of rounds__, __fixed players (easy)__
  > - __Fixed number of rounds__, __variable players (medium)__
  > - __Variable number of rounds__, __fixed players (hard)__

  :::  
---

## 6.Focus 4
__The circuit template__  
- __Series circuit__:
  __The probability that the system operates successfully__ equals
  __the product of the probabilities that each component operates successfully__.  
  All components operate successfully: $\boldsymbol{P_1\times P_2\times P_3}$   
  ![Circuit series system probability.svg](../../public/math/core%20course/Circuit%20series%20system%20probability.svg)

::: wrap
- __Parallel circuit__:
  __The probability that the system operates successfully__ equals
  $\boldsymbol{1-\textsf{the product of the probabilities that each component fails to operate}}$.  
  At least one component operates successfully: $\boldsymbol{1-(1-P_1)(1-P_2)(1-P_3)}$  
  ![Circuit parallel system probability.svg](../../public/math/core%20course/Circuit%20parallel%20system%20probability.svg)  
:::


### $\fbox{14}\:$Figure 10–1, the letters represent types of components; identical letters indicate the same type of component. Given that the probabilities of successful operation for component types $\small A, B, C$, and $\small D$ are $\small p,q,r$, and $s$, respectively, and that all components operate independently, find the probability that the system operates successfully.
![Question independent events figure 10-1.svg](../../public/math/core%20course/Question%20independent%20events%20figure%2010-1.svg)  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: s^2pqr &
\textsf{(B)} \: s^2(p+q+r) &
\textsf{(C)} \: s^2(1-pqr) & \\
\textsf{(D)} \: 1-(1-pqr)(1-s)^2 &
\textsf{(E)} \: s^2[1-(1-p)(1-q)(1-r)] & \\
\end{array}
$  
:::  
#### Solution
- Show known conditions  
  ![Question independent events figure 10-1 solve-1.svg](../../public/math/core%20course/Question%20independent%20events%20figure%2010-1%20solve-1.svg)  
  ::: wrap   
  $
  \begin{array}{ll}
  P=s^2\times[1-(1-p)(1-q)(1-r)] \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $P=s^2\times[1-(1-p)(1-q)(1-r)]$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  P(\bigcap_{i=1}^{n}A_i)=\prod_{i=1}^{n}P(A_i) & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_2-usage}{\textsf{simultaneous probability of independent events}} \\
  1-(1-P_1)\times(1-P_2)\times(1-P_3) & \href{/math/core%20course/32%20Chapter10%20probability%20Module1%20classical%20probability%20Module2%20independent%20events.html#_4-focus-2}{\textsf{probability of at least one independent event}} \\
  \end{array}
  >$

  :::
---

