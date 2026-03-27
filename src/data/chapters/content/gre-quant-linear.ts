export const content = `
# Linear Equations & Inequalities

Linear equations and inequalities are the algebraic workhorses of the GRE. Nearly every Quantitative section includes problems that require setting up and solving equations, working with systems, or interpreting inequalities. The concepts are straightforward, but the GRE tests your ability to translate words into algebra and to recognize special cases — no solution, infinite solutions, or sign-dependent behavior.

---

## Solving Single-Variable Equations

A **linear equation** in one variable has the form $ax + b = c$.

**Strategy:** Isolate the variable by performing the same operation on both sides.

**Example:** Solve $3(2x - 5) = 4x + 7$.

$$6x - 15 = 4x + 7$$

$$2x = 22$$

$$x = \\textbf{11}$$

**Verification:** $3(2(11) - 5) = 3(17) = 51$ and $4(11) + 7 = 51$. ✓

### Equations with Fractions

Multiply every term by the LCD to clear fractions.

**Example:** Solve $\\frac{x}{3} + \\frac{x}{4} = 7$.

LCD is 12: $4x + 3x = 84 \\implies 7x = 84 \\implies x = \\textbf{12}$

> **Strategy:** Clearing fractions first makes the arithmetic cleaner and reduces the chance of errors. Always multiply **every** term by the LCD, including standalone constants.

---

## Translating Words to Algebra

The GRE loves word problems that require you to set up equations. Here are key translations:

| Words | Algebra |
|-------|---------|
| "is," "equals," "results in" | $=$ |
| "more than," "greater than," "increased by" | $+$ |
| "less than," "decreased by," "fewer than" | $-$ |
| "times," "of," "product of" | $\\times$ |
| "per," "quotient of," "divided by" | $\\div$ |
| "$n$ less than $x$" | $x - n$ (not $n - x$) |

> **Common Trap:** "5 less than $x$" is $x - 5$, not $5 - x$. "Less than" reverses the order. Similarly, "the ratio of $a$ to $b$" is $\\frac{a}{b}$, not $\\frac{b}{a}$. Read carefully.

**Example:** "Three times a number, decreased by 7, is 20."

$$3x - 7 = 20 \\implies 3x = 27 \\implies x = 9$$

---

## Systems of Equations

### Substitution Method

Solve one equation for one variable and substitute into the other.

**Example:** Solve the system:
$$x + 2y = 10$$
$$3x - y = 5$$

From the first equation: $x = 10 - 2y$.

Substitute: $3(10 - 2y) - y = 5 \\implies 30 - 6y - y = 5 \\implies -7y = -25 \\implies y = \\frac{25}{7}$

Then $x = 10 - 2\\left(\\frac{25}{7}\\right) = \\frac{70 - 50}{7} = \\frac{20}{7}$

### Elimination Method

Add or subtract equations to eliminate one variable.

**Example:** Solve the system:
$$2x + 3y = 12$$
$$4x - 3y = 6$$

Add the equations: $6x = 18 \\implies x = 3$.

Substitute back: $2(3) + 3y = 12 \\implies 3y = 6 \\implies y = 2$.

Solution: $(3, 2)$.

> **Strategy:** On the GRE, you often do not need to find individual values of $x$ and $y$. The question might ask for $x + y$ or $2x - y$. Before solving completely, check whether you can combine the given equations directly to get the expression you need. This saves significant time.

**Example:** If $3x + 4y = 17$ and $x + 2y = 7$, what is $2x + 2y$?

Subtract the second from the first: $(3x + 4y) - (x + 2y) = 17 - 7 \\implies 2x + 2y = \\textbf{10}$.

No need to find $x$ or $y$ individually.

### Number of Solutions

For a system of two linear equations in two variables:

- **One solution:** The lines intersect at exactly one point (different slopes).
- **No solution:** The lines are parallel (same slope, different intercepts). Example: $2x + 3y = 6$ and $2x + 3y = 10$.
- **Infinitely many solutions:** The lines are identical (one equation is a multiple of the other). Example: $2x + 3y = 6$ and $4x + 6y = 12$.

> **Common Trap:** If the GRE asks "how many solutions does this system have?" and the equations are proportional but with different constants, the answer is zero — no solution, not infinite.

---

## Inequalities

### Basic Rules

Inequalities follow the same manipulation rules as equations, with one critical exception:

> **Multiplying or dividing both sides by a negative number REVERSES the inequality sign.**

$$-3x > 12 \\implies x < -4$$

### Compound Inequalities

**Example:** Solve $-5 < 2x + 3 \\le 11$.

$$-5 - 3 < 2x \\le 11 - 3$$

$$-8 < 2x \\le 8$$

$$-4 < x \\le 4$$

### Adding and Subtracting Inequalities

You can add inequalities that point in the **same direction**:

If $a < b$ and $c < d$, then $a + c < b + d$.

> **Common Trap:** You **cannot** subtract inequalities that point in the same direction and preserve the direction. If $a < b$ and $c < d$, it does **not** follow that $a - c < b - d$. To subtract, you must flip one inequality first: if $c < d$ then $-d < -c$, and then $a - d < b - c$.

### Multiplying Inequalities

You can multiply inequalities only if you know the signs of all terms. If all quantities are positive and both inequalities point the same way, the product inequality holds.

---

## Absolute Value

### Definition

$$|x| = \\begin{cases} x & \\text{if } x \\ge 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

Geometrically, $|x|$ is the distance from $x$ to 0 on the number line.

### Absolute Value Equations

To solve $|ax + b| = c$ where $c \\ge 0$:

$$ax + b = c \\quad \\text{or} \\quad ax + b = -c$$

**Example:** Solve $|2x - 3| = 7$.

$$2x - 3 = 7 \\implies x = 5 \\quad \\text{or} \\quad 2x - 3 = -7 \\implies x = -2$$

> **Common Trap:** If $|\\text{expression}| = \\text{negative number}$, there is **no solution**. Absolute value is always non-negative. For example, $|x + 1| = -3$ has no solution.

### Absolute Value Inequalities

**Less than** (creates a "sandwich"):

$$|ax + b| < c \\implies -c < ax + b < c$$

**Greater than** (creates a "split"):

$$|ax + b| > c \\implies ax + b > c \\;\\text{ or }\\; ax + b < -c$$

**Example:** Solve $|x - 4| \\le 3$.

$$-3 \\le x - 4 \\le 3 \\implies 1 \\le x \\le 7$$

**Example:** Solve $|2x + 1| > 5$.

$$2x + 1 > 5 \\implies x > 2 \\quad \\text{or} \\quad 2x + 1 < -5 \\implies x < -3$$

> **Strategy:** Remember the mnemonic: "less than" means "and" (between two values), "greater than" means "or" (outside two values). Visualize these on a number line.

---

## Worked Examples

### Example 1: System Shortcut

**Problem:** If $5a + 3b = 23$ and $3a + 5b = 17$, what is $a + b$?

Add both equations: $8a + 8b = 40 \\implies a + b = \\textbf{5}$.

### Example 2: Inequality with Variable Sign

**Problem:** If $x \\neq 0$ and $\\frac{x}{|x|} = -1$, what must be true about $x$?

$\\frac{x}{|x|} = -1$ means $x$ is the negative of $|x|$. This happens only when $x < 0$.

Answer: $x$ is **negative**.

### Example 3: Absolute Value on a Number Line

**Problem:** How many integers satisfy $|x - 3| < 5$?

$$-5 < x - 3 < 5 \\implies -2 < x < 8$$

Integers: $-1, 0, 1, 2, 3, 4, 5, 6, 7$ → **9 integers**.

### Example 4: Word Problem Translation

**Problem:** The sum of three consecutive even integers is 78. What is the largest?

Let the integers be $n$, $n + 2$, $n + 4$.

$$n + (n + 2) + (n + 4) = 78 \\implies 3n + 6 = 78 \\implies 3n = 72 \\implies n = 24$$

Largest $= 24 + 4 = \\textbf{28}$.

---

## Key Formulas

$$\\boxed{|x| < c \\iff -c < x < c}$$

$$\\boxed{|x| > c \\iff x > c \\text{ or } x < -c}$$

$$\\boxed{\\text{Flip the inequality sign when multiplying/dividing by a negative.}}$$

---

## GRE Question Type Tips

1. **Quantitative Comparison:** QC problems with variables in inequalities are common. If told $x > 0$ and asked to compare expressions, test boundary values ($x$ just above 0, $x = 1$, $x$ very large). If the comparison changes, answer **(D)**.

2. **Problem Solving:** Systems of equations in PS questions often have an elegant shortcut — add or subtract the equations to directly produce what the question asks. Always look for this before solving for individual variables.

3. **Numeric Entry:** Absolute value equations and word-to-algebra translation are frequent NE topics. Remember to check for extraneous solutions: plug your answers back into the original equation.

4. **Multiple answers:** "Which of the following values of $x$ satisfy the inequality?" — test each answer choice in the original inequality. This is often faster than solving algebraically, especially for absolute value inequalities.
`;
