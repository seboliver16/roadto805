export const content = `
# Linear Equations & Systems

Linear equations are the backbone of GMAT algebra. Nearly every Quantitative Reasoning section includes questions that require you to set up and solve linear equations---sometimes individually, sometimes as part of a system. Mastering this topic is non-negotiable for a high quant score.

---

## 1. Solving Single-Variable Linear Equations

A **linear equation** in one variable has the general form:

$$ax + b = c$$

where $a$, $b$, and $c$ are constants and $a \\neq 0$. Solving means isolating $x$.

**Core principle:** Whatever you do to one side, you must do to the other.

**Steps:**
1. Eliminate fractions by multiplying every term by the LCD (least common denominator).
2. Distribute any parentheses.
3. Combine like terms on each side.
4. Move all variable terms to one side and constants to the other.
5. Divide both sides by the coefficient of $x$.

**Quick example:**

Solve $3(x - 2) + 4 = 2x + 7$.

- Distribute: $3x - 6 + 4 = 2x + 7$
- Combine: $3x - 2 = 2x + 7$
- Subtract $2x$: $x - 2 = 7$
- Add 2: $x = 9$

> **Quick Method:** After solving, always plug your answer back into the original equation to verify. Here: $3(9-2) + 4 = 3(7) + 4 = 25$, and $2(9) + 7 = 25$. It checks out. This 5-second check catches most arithmetic errors.

### Equations with Fractions

When fractions appear, **clear them first**. If you see:

$$\\frac{x}{3} + \\frac{x - 1}{4} = 5$$

Multiply every term by 12 (the LCD of 3 and 4):

$$4x + 3(x - 1) = 60$$
$$4x + 3x - 3 = 60$$
$$7x = 63$$
$$x = 9$$

This is much faster than working with fractions throughout.

> **Common Trap:** When clearing fractions, you must multiply **every** term by the LCD, including any standalone constants. A common error is multiplying only the fraction terms. For example, in $\\frac{x}{3} + 2 = 5$, multiplying by 3 gives $x + 6 = 15$, NOT $x + 2 = 15$.

**Example:** Solve $\\frac{2x + 1}{5} - \\frac{x - 3}{2} = 1$.

**Solution:**

LCD of 5 and 2 is 10. Multiply every term by 10:

$$2(2x + 1) - 5(x - 3) = 10$$
$$4x + 2 - 5x + 15 = 10$$
$$-x + 17 = 10$$
$$-x = -7$$
$$x = \\textbf{7}$$

Verify: $\\frac{2(7)+1}{5} - \\frac{7-3}{2} = \\frac{15}{5} - \\frac{4}{2} = 3 - 2 = 1$ ✓

---

## 2. Translating Word Problems into Equations

The GMAT loves to test whether you can convert English into algebra. Here is a reliable process:

1. **Assign variables** to the unknowns. Use letters that remind you of what they represent ($a$ for Alice's age, $p$ for price, etc.).
2. **Identify relationships** described in the sentence. Words like "is," "equals," "was," and "will be" signal an equals sign.
3. **Translate phrase by phrase:**
   - "more than" $\\rightarrow$ addition
   - "less than" $\\rightarrow$ subtraction
   - "times" or "of" $\\rightarrow$ multiplication
   - "per" or "divided by" $\\rightarrow$ division
   - "twice" $\\rightarrow$ $2 \\times$
   - "the sum of A and B" $\\rightarrow$ $A + B$
   - "the difference between A and B" $\\rightarrow$ $A - B$
4. **Set up** and **solve** the equation.

> **Common Trap:** "5 less than $x$" is $x - 5$, **not** $5 - x$. The order matters with subtraction. Similarly, "A is 3 more than twice B" becomes $A = 2B + 3$, NOT $A + 3 = 2B$. The word "is" marks the equals sign; everything before "is" goes on the left.

**Example:** "The sum of three consecutive integers is 72. What is the largest integer?"

**Solution:**

Let the integers be $n$, $n+1$, and $n+2$.

$$n + (n+1) + (n+2) = 72$$
$$3n + 3 = 72$$
$$3n = 69$$
$$n = 23$$

The largest integer is $n + 2 = \\textbf{25}$.

> **Quick Method:** For consecutive integers summing to $S$, the middle value is always $\\frac{S}{\\text{count}}$. Here, $\\frac{72}{3} = 24$ is the middle integer, so the three integers are 23, 24, 25. This works for any count of consecutive integers.

**Example:** "Maria is 4 years older than twice her son's age. If the sum of their ages is 49, how old is Maria?"

**Solution:**

Let the son's age be $s$. Then Maria's age is $2s + 4$.

$$s + (2s + 4) = 49$$
$$3s + 4 = 49$$
$$3s = 45$$
$$s = 15$$

Maria's age $= 2(15) + 4 = \\textbf{34}$

---

## 3. Systems of Two Linear Equations

A **system of two linear equations** involves two equations with two unknowns, typically $x$ and $y$:

$$a_1 x + b_1 y = c_1$$
$$a_2 x + b_2 y = c_2$$

A solution is an ordered pair $(x, y)$ that satisfies **both** equations simultaneously. On the GMAT, you will need two primary methods: **substitution** and **elimination**.

### 3a. Substitution Method

**When to use:** One equation already has a variable isolated, or can be easily rearranged.

**Steps:**
1. Solve one equation for one variable in terms of the other.
2. Substitute that expression into the second equation.
3. Solve the resulting single-variable equation.
4. Back-substitute to find the other variable.

**Example:**

$$y = 2x + 1$$
$$3x + 2y = 16$$

Substitute the first equation into the second:

$$3x + 2(2x + 1) = 16$$
$$3x + 4x + 2 = 16$$
$$7x = 14$$
$$x = 2$$

Then $y = 2(2) + 1 = 5$. The solution is $(2, 5)$.

> **Quick Method:** Choose substitution when one variable has a coefficient of 1 or -1 (easy to isolate). Choose elimination when both variables have larger coefficients or when coefficients are set up for easy cancellation.

### 3b. Elimination Method

**When to use:** Neither variable is easily isolated, or you can quickly match coefficients.

**Steps:**
1. Multiply one or both equations so that the coefficients of one variable are equal (or opposite).
2. Add or subtract the equations to eliminate that variable.
3. Solve for the remaining variable.
4. Back-substitute.

**Example:**

$$2x + 3y = 12$$
$$4x - 3y = 6$$

The $y$-coefficients are already opposites ($+3y$ and $-3y$), so add the equations:

$$6x = 18 \\implies x = 3$$

Substitute back: $2(3) + 3y = 12 \\implies 3y = 6 \\implies y = 2$.

Solution: $(3, 2)$.

**Example:** Solve the system:

$$3x + 2y = 19$$
$$5x + 3y = 30$$

**Solution:**

Multiply the first equation by 3 and the second by 2 so the $y$-coefficients match:

$$9x + 6y = 57$$
$$10x + 6y = 60$$

Subtract the first from the second:

$$x = 3$$

Back-substitute: $3(3) + 2y = 19 \\implies 2y = 10 \\implies y = 5$.

Solution: $(3, 5)$.

> **Common Trap:** When subtracting equations, students often make sign errors. If you are subtracting $9x + 6y = 57$ from $10x + 6y = 60$, that means $(10x - 9x) + (6y - 6y) = (60 - 57)$, giving $x = 3$. Be careful with every sign. If in doubt, multiply one equation by $-1$ first and then **add** instead of subtracting.

---

## 4. Special Cases: No Solution or Infinite Solutions

Not every system has a unique solution.

### No Solution (Inconsistent System)

If the two equations describe **parallel lines** (same slope, different intercepts), there is no point of intersection.

$$2x + 4y = 10$$
$$x + 2y = 8$$

Multiply the second equation by 2: $2x + 4y = 16$. But the first equation says $2x + 4y = 10$. Since $10 \\neq 16$, the system has **no solution**.

**Algebraic signal:** When you eliminate variables and arrive at a false statement like $0 = 6$, the system is inconsistent.

### Infinite Solutions (Dependent System)

If the two equations are **multiples of each other**, they represent the same line.

$$3x - 6y = 9$$
$$x - 2y = 3$$

Multiply the second by 3: $3x - 6y = 9$, which is identical to the first equation. Every point on the line is a solution---there are **infinitely many solutions**.

**Algebraic signal:** When you eliminate variables and arrive at a true identity like $0 = 0$, the system is dependent.

### Quick Test (Ratio Method)

For the system $a_1 x + b_1 y = c_1$ and $a_2 x + b_2 y = c_2$:

| Condition | Result |
|---|---|
| $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$ | Unique solution |
| $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$ | No solution |
| $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$ | Infinite solutions |

This ratio check can save valuable time on Data Sufficiency questions.

> **Quick Method:** On Data Sufficiency, when you see two linear equations, immediately compare their coefficient ratios before solving. If the ratios match (equations are proportional), the second equation adds no new information, and the answer is "not sufficient." This 10-second check can save you from 2 minutes of unnecessary algebra.

**Example:** Does the system $4x + 6y = 20$ and $6x + 9y = 30$ have a unique solution?

**Solution:**

Check ratios: $\\frac{4}{6} = \\frac{2}{3}$, $\\frac{6}{9} = \\frac{2}{3}$, $\\frac{20}{30} = \\frac{2}{3}$.

All three ratios are equal, so the system has **infinitely many solutions** (the equations are proportional).

> **Common Trap:** Students often assume that two equations with two unknowns always give a unique solution. This is only true when the equations are **independent** (not proportional). Always check before assuming sufficiency in Data Sufficiency questions.

---

## 5. Key Formulas & Identities

$$\\boxed{ax + b = c \\implies x = \\frac{c - b}{a}}$$

- **Two-variable system (Cramer's Rule shortcut):** For $a_1 x + b_1 y = c_1$ and $a_2 x + b_2 y = c_2$:

$$x = \\frac{c_1 b_2 - c_2 b_1}{a_1 b_2 - a_2 b_1}, \\quad y = \\frac{a_1 c_2 - a_2 c_1}{a_1 b_2 - a_2 b_1}$$

(Rarely needed on the GMAT, but useful to know.)

- **Number of solutions:** A system of $n$ linear equations with $n$ unknowns generally has a unique solution if the equations are independent. On the GMAT, two distinct linear equations with two unknowns almost always yield a unique solution unless the equations are proportional.

---

## 6. Worked Examples

### Example 1: Word Problem Translation

**Problem:** A store sells pens and notebooks. Each pen costs \\$2 and each notebook costs \\$5. Maria buys a total of 12 items and spends \\$39. How many pens did she buy?

**Solution:**

Let $p$ = number of pens and $n$ = number of notebooks.

- Total items: $p + n = 12$
- Total cost: $2p + 5n = 39$

From the first equation: $n = 12 - p$. Substitute:

$$2p + 5(12 - p) = 39$$
$$2p + 60 - 5p = 39$$
$$-3p = -21$$
$$p = 7$$

Maria bought **7 pens**.

### Example 2: Elimination with Multiplication

**Problem:** Solve the system:

$$3x + 4y = 26$$
$$5x - 2y = 12$$

**Solution:**

Multiply the second equation by 2 so the $y$-coefficients become opposites:

$$3x + 4y = 26$$
$$10x - 4y = 24$$

Add:

$$13x = 50 \\implies x = \\frac{50}{13}$$

This is not a "nice" number, which is unusual for GMAT problems. On the actual test, if you get an ugly answer, double-check your setup. For this exercise, we continue:

$3\\left(\\frac{50}{13}\\right) + 4y = 26 \\implies \\frac{150}{13} + 4y = 26 \\implies 4y = 26 - \\frac{150}{13} = \\frac{338 - 150}{13} = \\frac{188}{13}$

$y = \\frac{47}{13}$

> **Common Trap:** Getting a "messy" fraction on a GMAT problem-solving question is a strong signal that you made an error somewhere. GMAT answers are almost always clean integers or simple fractions. If you get $\\frac{50}{13}$, re-read the problem and re-check your arithmetic before moving on.

### Example 3: Data Sufficiency Style

**Problem:** What is the value of $x + y$?

(1) $2x + 2y = 18$

(2) $x - y = 3$

**Solution:**

Statement (1): $2x + 2y = 18 \\implies x + y = 9$. **Sufficient.** We do not need to find $x$ and $y$ individually.

Statement (2): $x - y = 3$ gives us the difference, not the sum. **Not sufficient.**

Answer: **(A)** --- Statement (1) alone is sufficient.

**Key insight:** The GMAT often asks for the value of an *expression* (like $x + y$ or $3x - 2y$), not individual variables. Always check whether you can get the target expression directly without fully solving the system.

> **Quick Method:** When the question asks for an expression like $x + y$ or $2x - y$, try to manipulate the given equation(s) to produce that exact expression. Add the equations, subtract them, multiply by a constant---whatever gets you to the target. Do NOT default to solving for individual variables.

### Example 4: No-Solution System

**Problem:** For what value of $k$ does the following system have no solution?

$$3x - 6y = 12$$
$$kx - 4y = 5$$

**Solution:**

For no solution, the lines must be parallel: same slope, different intercepts.

Rewrite in slope-intercept form:
- First: $y = \\frac{1}{2}x - 2$ (slope $= \\frac{1}{2}$)
- Second: $y = \\frac{k}{4}x - \\frac{5}{4}$ (slope $= \\frac{k}{4}$)

Set slopes equal: $\\frac{k}{4} = \\frac{1}{2} \\implies k = 2$.

Check intercepts: $-2 \\neq -\\frac{5}{4}$, so the lines are indeed parallel. $k = 2$.

### Example 5: Back-Solving (Plugging In Answer Choices)

**Problem:** If $4x - 7 = 2x + 11$, what is $x$?

(A) 2  (B) 5  (C) 7  (D) 9  (E) 12

**Solution (algebraic):**

$$4x - 7 = 2x + 11$$
$$2x = 18$$
$$x = 9$$

Answer: **(D)**

**Solution (back-solving):** Start with choice (C): $x = 7$.

Left side: $4(7) - 7 = 21$. Right side: $2(7) + 11 = 25$. $21 \\neq 25$, and left is too small, so we need a larger $x$.

Try (D): $x = 9$. Left: $4(9) - 7 = 29$. Right: $2(9) + 11 = 29$. ✓ Answer: **(D)**.

> **Quick Method:** Back-solving (plugging in answer choices) is a powerful alternative on Problem Solving questions. Start with choice (C), the middle value. If it is too small, move to (D) or (E); if too large, move to (A) or (B). This process takes at most 3 tries.

### Example 6: Age Word Problem

**Problem:** Five years ago, a father was 3 times as old as his son. In 10 years, the father will be twice as old as his son. How old is the father now?

**Solution:**

Let $f$ = father's current age, $s$ = son's current age.

Five years ago: $f - 5 = 3(s - 5)$

$$f - 5 = 3s - 15 \\implies f = 3s - 10 \\quad \\text{...(1)}$$

In 10 years: $f + 10 = 2(s + 10)$

$$f + 10 = 2s + 20 \\implies f = 2s + 10 \\quad \\text{...(2)}$$

Set (1) equal to (2):

$$3s - 10 = 2s + 10$$
$$s = 20$$

From (2): $f = 2(20) + 10 = \\textbf{50}$

Verify: Five years ago: father was 45, son was 15. $45 = 3 \\times 15$ ✓

In 10 years: father will be 60, son will be 30. $60 = 2 \\times 30$ ✓

### Example 7: System with Three Variables (Hidden Constraint)

**Problem:** At a bakery, 2 muffins and 1 scone cost \\$7. One muffin and 2 scones cost \\$8. How much do 3 muffins and 3 scones cost?

**Solution:**

Let $m$ = price of a muffin, $s$ = price of a scone.

$$2m + s = 7 \\quad \\text{...(1)}$$
$$m + 2s = 8 \\quad \\text{...(2)}$$

The question asks for $3m + 3s$. Add equations (1) and (2):

$$3m + 3s = 15$$

Answer: $\\textbf{\\$15}$.

> **Quick Method:** We never needed to find $m$ and $s$ individually. The GMAT loves this: the target expression can be obtained directly by adding, subtracting, or scaling the given equations. Before solving for individual variables, always check if you can get the target expression in one step.

> **Common Trap:** Solving for $m$ and $s$ individually wastes time here. From equation (1), $s = 7 - 2m$; substituting into (2): $m + 2(7-2m) = 8$, so $m + 14 - 4m = 8$, giving $m = 2$ and $s = 3$. Then $3(2) + 3(3) = 15$. Same answer, but took much longer. The GMAT rewards recognizing the shortcut.

---

## 7. GMAT Tips for Linear Equations

**1. Don't always solve for individual variables.** Many questions ask for a combined expression like $2x + 3y$ or $\\frac{x}{y}$. Manipulate the equations to produce that expression directly.

**2. On Data Sufficiency, count equations vs. unknowns.** In general, to solve for $n$ unknowns you need $n$ independent equations. But if the question asks for an expression rather than individual values, one equation may suffice.

**3. Clear fractions early.** Multiply through by the LCD to avoid arithmetic errors.

**4. Check for special cases.** Before grinding through algebra, see if the equations are multiples of each other (infinite solutions) or contradictory (no solution).

**5. Use estimation and back-solving.** On Problem Solving, plug answer choices into the equation. Start with choice (C) (the middle value) to efficiently narrow down.

**6. Watch for disguised linear equations.** An equation like $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{6}$ is not linear in $x$ and $y$, but substituting $a = \\frac{1}{x}$ and $b = \\frac{1}{y}$ makes it linear in $a$ and $b$.

**7. Practice mental math.** The GMAT does not allow a calculator. Build your ability to add, subtract, multiply, and divide quickly in your head.

**8. Time management.** Linear equation problems should take 1.5--2 minutes at most. If you are spending more time, consider back-solving or re-reading the problem for a shortcut.
`;
