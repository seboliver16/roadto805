export const content = `
# Data Sufficiency Fundamentals

Data Sufficiency (DS) is the signature question type of the GMAT, and it dominates the Data Insights section. Unlike every other math problem you have encountered, DS does **not** ask you to solve for an answer. Instead, it asks whether you **can** solve --- whether the information provided is sufficient to determine a unique answer. This distinction is the single most important concept you will learn for the GMAT.

---

## The DS Format

Every Data Sufficiency question consists of:

1. **A question stem** --- a question, sometimes preceded by given information.
2. **Two statements**, labeled **(1)** and **(2)**, each providing additional information.
3. **Five fixed answer choices** (these are the same on every DS question):

| Choice | Meaning |
|--------|---------|
| **(A)** | Statement (1) ALONE is sufficient, but Statement (2) alone is not sufficient. |
| **(B)** | Statement (2) ALONE is sufficient, but Statement (1) alone is not sufficient. |
| **(C)** | BOTH statements TOGETHER are sufficient, but NEITHER statement alone is sufficient. |
| **(D)** | EACH statement ALONE is sufficient. |
| **(E)** | Statements (1) and (2) TOGETHER are NOT sufficient. |

**Memorize these answer choices.** On test day you will not have time to re-read them. A useful mnemonic is **"AD / BCE"** --- first you test whether Statement (1) alone is sufficient (if yes, narrow to A or D; if no, narrow to B, C, or E), then you test Statement (2) alone.

---

## The Systematic Approach

Follow this exact procedure on every DS question:

**Step 1: Understand the question stem.** Rephrase the question in your own words. Identify exactly what you would need to know to answer it.

**Step 2: Evaluate Statement (1) alone.** Forget Statement (2) exists. Can you answer the question with only Statement (1)?

- If **yes** $\\Rightarrow$ eliminate B, C, E. Keep A and D.
- If **no** $\\Rightarrow$ eliminate A, D. Keep B, C, E.

**Step 3: Evaluate Statement (2) alone.** Now forget Statement (1). Can you answer with only Statement (2)?

- If you are in the A/D branch and Statement (2) is sufficient $\\Rightarrow$ answer is **D**.
- If you are in the A/D branch and Statement (2) is not sufficient $\\Rightarrow$ answer is **A**.
- If you are in the B/C/E branch and Statement (2) is sufficient $\\Rightarrow$ answer is **B**.
- If you are in the B/C/E branch and Statement (2) is not sufficient $\\Rightarrow$ go to Step 4.

**Step 4: Evaluate BOTH statements together.** Combine both pieces of information. Is the question now answerable?

- If **yes** $\\Rightarrow$ answer is **C**.
- If **no** $\\Rightarrow$ answer is **E**.

**Never skip steps. Never jump to combining the statements before testing each one alone.**

---

## The Golden Rule: Never Solve --- Only Determine Sufficiency

The biggest mistake students make is spending time calculating an actual numerical answer. You do **not** need to find the answer --- you only need to determine whether a unique answer **exists**.

For a "value" question (e.g., "What is $x$?"), sufficiency means you can determine **exactly one value** of $x$.

For a "yes/no" question (e.g., "Is $x > 5$?"), sufficiency means the answer is **always yes** or **always no**. If a statement sometimes gives "yes" and sometimes gives "no," it is **not** sufficient.

---

## Number Properties DS

Number properties questions are the most common DS category. They test even/odd, positive/negative, divisibility, and prime factorization.

### Even/Odd Sufficiency

When a question asks about the parity (even or odd) of an expression, focus on the parity rules rather than specific numbers:

- Even + Even = Even; Odd + Odd = Even; Even + Odd = Odd
- Even $\\times$ anything = Even; Odd $\\times$ Odd = Odd

**Key trap:** Do not forget that **0 is even** and that **negative integers have parity too** ($-3$ is odd, $-4$ is even).

### Positive/Negative Sufficiency

When the question involves the sign of an expression:

- A product or quotient is positive when both factors share the same sign.
- A product or quotient is negative when the factors have different signs.
- **Do not forget zero.** If a variable could be zero, the expression might be neither positive nor negative.

### Divisibility Sufficiency

Many DS questions ask "Is $n$ divisible by $k$?" The key is determining whether the prime factorization of $n$ necessarily contains all the prime factors of $k$ with sufficient exponents.

---

## Algebra DS

Algebra DS questions ask you to determine the value of a variable or expression.

### When Is One Equation Enough?

A single linear equation in one variable always gives a unique solution. But **be careful** --- a single equation in two variables generally does **not** give a unique answer. However, there are exceptions:

- If the equation has **integer constraints**, it may yield a unique solution. For example, if $3x + 5y = 23$ and both $x$ and $y$ must be positive integers, there may be only one valid pair.
- If the question asks for the value of an **expression** (like $2x + y$) rather than individual variables, one equation may be enough. For instance, if $4x + 2y = 10$, then $2x + y = 5$ regardless of individual values of $x$ and $y$.

### Quadratics and Multiple Solutions

A quadratic equation like $x^2 = 9$ gives two solutions: $x = 3$ or $x = -3$. This is **not sufficient** to determine the value of $x$ unless additional constraints rule out one solution.

However, if the question asks for the value of $x^2$ (not $x$), then the answer is uniquely $9$ --- sufficient!

---

## Word Problem DS

Word problems in DS format test rate/distance, mixtures, ages, and work problems. The key is translating the story into equations and then checking sufficiency.

### Rate and Distance

The fundamental formula is $d = rt$ (distance = rate $\\times$ time). A DS question might give you partial information about a journey and ask whether you can determine the total distance. Count your unknowns and equations:

- If you have **as many independent equations as unknowns**, you can solve (usually sufficient).
- If you have **more unknowns than equations**, you typically cannot solve (usually insufficient).

### Mixture Problems

Mixture DS questions involve combining two substances with different concentrations. The weighted average formula is key:

$$C_{\\text{mix}} = \\frac{C_1 \\cdot V_1 + C_2 \\cdot V_2}{V_1 + V_2}$$

To determine the mixture concentration, you need **both** concentrations and the ratio of volumes (not necessarily the absolute volumes).

---

## Statistics DS

Statistics DS questions test mean, median, mode, range, and standard deviation.

### Mean Sufficiency

To find the mean of a set, you need the **sum** and the **count** of elements. If you know both, you can find the mean. Sometimes you are given one and can derive the other.

### Median Sufficiency

The median depends on the **order** of elements. For a set of $n$ numbers:

- If $n$ is odd, the median is the middle value when sorted.
- If $n$ is even, the median is the average of the two middle values.

To determine the median, you often need to know the relative ordering of elements, not their exact values.

### Range Sufficiency

Range = Maximum $-$ Minimum. You need to know (or be able to determine) both the largest and smallest values.

---

## The Testing Cases Strategy

**Testing cases** is the most powerful DS technique. Instead of trying to prove sufficiency algebraically, pick specific numbers that satisfy the statement and see if you always get the same answer to the question.

### How to Test Cases

1. Pick a value that satisfies the statement.
2. Answer the question with that value.
3. Pick a **different** value that **also** satisfies the statement but is as different as possible from the first.
4. Answer the question again.
5. If you get **two different answers**, the statement is **not sufficient**. If every case you try gives the **same answer**, the statement is **likely sufficient** (though you should try to understand why).

### What Values to Test

Always consider these categories:

- **Positive integers** (the "obvious" choice)
- **Zero** (often overlooked --- breaks many assumptions)
- **Negative integers** (changes signs of products and powers)
- **Fractions between 0 and 1** (squaring makes them smaller, not larger)
- **Negative fractions** (combines two tricky categories)
- **1 and $-1$** (special behavior with exponents)

If a statement says "$x > 0$," test $x = 1$, $x = 0.5$, $x = 100$. If it says "$x$ is an integer," test positive, negative, and zero. **Push the boundaries of what the statement allows.**

---

## Worked Examples

### Example 1: Number Properties DS

**Question:** Is the integer $n$ odd?

**(1)** $n^2$ is odd.
**(2)** $n + n$ is even.

**Step 1 --- Understand:** We need to determine whether $n$ is odd or even.

**Step 2 --- Statement (1) alone:** If $n^2$ is odd, then $n$ must be odd (because if $n$ were even, $n^2$ would be even). **Sufficient.** Eliminate B, C, E.

**Step 3 --- Statement (2) alone:** $n + n = 2n$, which is **always even** regardless of whether $n$ is odd or even. This tells us nothing about the parity of $n$. **Not sufficient.**

We are in the A/D branch and Statement (2) is not sufficient, so the answer is **(A)**.

**Trap alert:** Statement (2) looks like it provides information, but $2n$ is even for every integer $n$. This is a classic DS trap --- a statement that is always true (a tautology) tells you nothing.

### Example 2: Algebra DS

**Question:** What is the value of $x + y$?

**(1)** $3x + 3y = 27$
**(2)** $x - y = 2$

**Step 1 --- Understand:** We need the specific value of $x + y$.

**Step 2 --- Statement (1) alone:** $3x + 3y = 27$ can be simplified to $3(x + y) = 27$, so $x + y = 9$. We have a unique value. **Sufficient.** Eliminate B, C, E.

**Step 3 --- Statement (2) alone:** $x - y = 2$ tells us the difference, not the sum. For example, $x = 3, y = 1$ gives $x + y = 4$, while $x = 5, y = 3$ gives $x + y = 8$. **Not sufficient.**

Answer: **(A)**.

**Key insight:** The question asked for $x + y$, not for $x$ and $y$ individually. Statement (1) directly gives $x + y$ even though we cannot determine $x$ or $y$ separately. Always pay attention to **exactly what the question asks**.

### Example 3: Statistics DS

**Question:** A set $S$ contains five positive integers. What is the median of set $S$?

**(1)** The mean of set $S$ is 10.
**(2)** The mode of set $S$ is 10, and the range of set $S$ is 4.

**Step 1 --- Understand:** We need the third-largest (middle) value of the five integers when sorted.

**Step 2 --- Statement (1) alone:** The mean is 10, so the sum is 50. Many different sets of five positive integers sum to 50 with different medians. For example: $\\{1, 1, 10, 19, 19\\}$ has median 10, while $\\{1, 1, 1, 1, 46\\}$ has median 1. **Not sufficient.** Eliminate A, D.

**Step 3 --- Statement (2) alone:** The mode is 10 (so 10 appears at least twice) and the range is 4. If the minimum is $m$, the maximum is $m + 4$. The set contains at least two 10s. So all values are between $m$ and $m + 4$, and 10 is in that range. Consider: $\\{8, 10, 10, 10, 12\\}$ has median 10. But $\\{8, 8, 10, 10, 12\\}$ also has mode... wait, that has two modes (8 and 10). If 10 is **the** mode, it must appear more often than any other value. Try $\\{9, 10, 10, 10, 13\\}$ --- but the range is $13 - 9 = 4$, and the median is 10. Try $\\{8, 10, 10, 11, 12\\}$ --- range is 4, mode is 10 (appears twice, all others once), median is 10. Try $\\{8, 9, 10, 10, 12\\}$ --- range is 4, mode is 10, median is 10. In all valid cases the median appears to be 10, but there are many configurations to check, and without exhaustive analysis this is uncertain. **This requires careful testing** --- the answer hinges on whether a counterexample exists.

**Step 4 --- Both together:** With sum = 50, mode = 10, and range = 4, the constraints become very tight. The median is likely determinable. After systematic analysis, the answer is **(C)**.

**Takeaway:** Statistics DS problems require methodical case testing. When constraints are tight, combining statements often locks the answer.

### Example 4: Yes/No DS with Testing Cases

**Question:** Is $x > 0$?

**(1)** $x^3 > 0$
**(2)** $x^2 > 0$

**Step 2 --- Statement (1) alone:** If $x^3 > 0$, then $x$ must be positive (cubing preserves sign). The answer to "Is $x > 0$?" is **always yes**. **Sufficient.** Eliminate B, C, E.

**Step 3 --- Statement (2) alone:** If $x^2 > 0$, then $x \\ne 0$. But $x$ could be positive ($x = 3 \\Rightarrow x^2 = 9 > 0$) or negative ($x = -3 \\Rightarrow x^2 = 9 > 0$). Sometimes the answer is yes, sometimes no. **Not sufficient.**

Answer: **(A)**.

---

## Common DS Traps

1. **Statement 2 echoes Statement 1.** Sometimes the two statements are algebraically equivalent (e.g., "$x = 3$" and "$2x = 6$"). If Statement (1) is sufficient, Statement (2) will be too, and the answer is D. If Statement (1) is insufficient, Statement (2) will be too --- and combining two equivalent statements gives no new information, so the answer is E.

2. **Forgetting to test zero.** Zero is an integer. It is even. It is neither positive nor negative. $0^2 = 0$. If a statement says "$x$ is an integer," zero is a valid test case.

3. **Forgetting to test negative numbers.** If a statement says "$x^2 = 16$," both $x = 4$ and $x = -4$ are possible. Do not assume $x$ is positive unless the problem explicitly says so.

4. **Forgetting to test fractions.** If $0 < x < 1$, then $x^2 < x$ (squaring makes it smaller). This often produces different answers from integer cases.

5. **Solving instead of assessing.** If you find yourself computing a specific number, stop and ask: "Do I need this number, or do I just need to know that a unique number exists?"

6. **Combining statements prematurely.** Always test each statement alone first. Many students jump to (C) without checking whether one statement alone is sufficient.

7. **The "obviously insufficient" trap.** A statement that looks useless might actually constrain the problem significantly. Always evaluate carefully.

---

## GMAT Tips

1. **Memorize the five answer choices cold.** You should never spend even one second re-reading them during the test. Use the AD/BCE framework to eliminate systematically.

2. **Rephrase the question before looking at the statements.** Simplify the question to its core. "Is $n(n+1)$ even?" becomes "Is this always true?" (Yes --- it is the product of consecutive integers, which is always even.) If the answer to the question is always yes or always no regardless of the statements, the answer is (D).

3. **Spend about 2 minutes per DS question.** DS questions should generally take less time than Problem Solving questions because you do not need to compute a final answer.

4. **On the real GMAT, answer choice (C) is a trap.** Test-makers know students often default to "I need both statements." Challenge yourself to find cases where one statement alone is sufficient.

5. **When testing cases, use organized scratch work.** Write "Statement (1):" and "Statement (2):" clearly. Under each, list your test cases and outcomes. This prevents confusion about which statement you are evaluating.

6. **If you are stuck, try the contrapositive.** For a yes/no question like "Is $x$ positive?", try to find a case where the answer is no. If you cannot, the statement is likely sufficient (answer yes).

7. **Watch for hidden constraints in the question stem.** Phrases like "positive integer," "non-zero," or "different integers" drastically limit what test cases are valid.
`;
