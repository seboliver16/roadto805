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

### Equations with Fractions

When fractions appear, **clear them first**. If you see:

$$\\frac{x}{3} + \\frac{x - 1}{4} = 5$$

Multiply every term by 12 (the LCD of 3 and 4):

$$4x + 3(x - 1) = 60$$
$$4x + 3x - 3 = 60$$
$$7x = 63$$
$$x = 9$$

This is much faster than working with fractions throughout.

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

**Common traps:**
- "5 less than $x$" is $x - 5$, **not** $5 - x$.
- "A is 3 more than twice B" becomes $A = 2B + 3$.

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

---

## 5. Key Formulas & Identities

- **Standard form:** $ax + b = c \\implies x = \\frac{c - b}{a}$
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

### Example 3: Data Sufficiency Style

**Problem:** What is the value of $x + y$?

(1) $2x + 2y = 18$

(2) $x - y = 3$

**Solution:**

Statement (1): $2x + 2y = 18 \\implies x + y = 9$. **Sufficient.** We do not need to find $x$ and $y$ individually.

Statement (2): $x - y = 3$ gives us the difference, not the sum. **Not sufficient.**

Answer: **(A)** --- Statement (1) alone is sufficient.

**Key insight:** The GMAT often asks for the value of an *expression* (like $x + y$ or $3x - 2y$), not individual variables. Always check whether you can get the target expression directly without fully solving the system.

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
