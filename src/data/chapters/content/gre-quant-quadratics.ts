export const content = `
# Quadratics & Functions

Quadratic equations and functions appear regularly on the GRE, from straightforward factoring to interpreting parabolas and function notation. The GRE tests not just your ability to solve quadratics, but also your understanding of when equations have zero, one, or two solutions, and how the algebraic form connects to graphical properties.

---

## Expanding and Factoring

### FOIL Method

To multiply two binomials, use **F**irst, **O**uter, **I**nner, **L**ast:

$$(a + b)(c + d) = ac + ad + bc + bd$$

**Example:**

$$(2x + 3)(x - 5) = 2x^2 - 10x + 3x - 15 = 2x^2 - 7x - 15$$

### Special Products

Memorize these — the GRE tests them constantly:

$$(a + b)^2 = a^2 + 2ab + b^2$$

$$(a - b)^2 = a^2 - 2ab + b^2$$

$$(a + b)(a - b) = a^2 - b^2$$

> **Common Trap:** $(a + b)^2 \\neq a^2 + b^2$. The middle term $2ab$ is critical. This is one of the most common algebraic errors on the GRE. Similarly, $\\sqrt{a^2 + b^2} \\neq a + b$.

### Factoring Quadratics

To factor $ax^2 + bx + c$:

**When $a = 1$:** Find two numbers that multiply to $c$ and add to $b$.

**Example:** Factor $x^2 + 5x + 6$.

Find numbers that multiply to 6 and add to 5: $2$ and $3$.

$$x^2 + 5x + 6 = (x + 2)(x + 3)$$

**When $a \\neq 1$:** Use the AC method or trial and error.

**Example:** Factor $2x^2 + 7x + 3$.

Find numbers that multiply to $2 \\times 3 = 6$ and add to $7$: $6$ and $1$.

$$2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)$$

### Factoring Techniques Summary

| Pattern | Factored Form |
|---------|--------------|
| $a^2 - b^2$ | $(a + b)(a - b)$ |
| $a^2 + 2ab + b^2$ | $(a + b)^2$ |
| $a^2 - 2ab + b^2$ | $(a - b)^2$ |
| $x^2 + (p+q)x + pq$ | $(x + p)(x + q)$ |

> **Strategy:** On the GRE, always check whether a quadratic expression can be factored before using the quadratic formula. Factoring is faster, and most GRE quadratics are designed to factor neatly.

---

## Solving Quadratic Equations

### Setting Equal to Zero

Every quadratic equation can be written in the form:

$$ax^2 + bx + c = 0$$

### Solving by Factoring

**Example:** Solve $x^2 - 7x + 12 = 0$.

$$x^2 - 7x + 12 = (x - 3)(x - 4) = 0$$

$$x = 3 \\quad \\text{or} \\quad x = 4$$

> **Common Trap:** Never divide both sides of an equation by a variable — you might lose a solution. For example, in $x^2 = 5x$, do NOT divide by $x$. Instead, rearrange: $x^2 - 5x = 0 \\implies x(x - 5) = 0$, giving $x = 0$ or $x = 5$. Dividing by $x$ would lose the solution $x = 0$.

### The Quadratic Formula

When factoring is difficult or impossible, use:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

**Example:** Solve $2x^2 + 3x - 5 = 0$.

$$x = \\frac{-3 \\pm \\sqrt{9 + 40}}{4} = \\frac{-3 \\pm \\sqrt{49}}{4} = \\frac{-3 \\pm 7}{4}$$

$$x = \\frac{4}{4} = 1 \\quad \\text{or} \\quad x = \\frac{-10}{4} = -\\frac{5}{2}$$

---

## The Discriminant

The expression under the square root in the quadratic formula, $\\Delta = b^2 - 4ac$, is called the **discriminant**. It tells you the number of real solutions:

| Discriminant | Number of Real Solutions |
|-------------|------------------------|
| $b^2 - 4ac > 0$ | Two distinct real solutions |
| $b^2 - 4ac = 0$ | Exactly one real solution (repeated root) |
| $b^2 - 4ac < 0$ | No real solutions |

**Example:** How many real solutions does $x^2 + 4x + 5 = 0$ have?

$$\\Delta = 16 - 20 = -4 < 0$$

**No real solutions.**

> **Strategy:** On QC problems, you can use the discriminant to answer questions about the number of solutions without actually solving. If the question asks "how many values of $x$ satisfy the equation," compute $\\Delta$ and use the table above.

---

## Completing the Square

Rewrite $ax^2 + bx + c$ in the form $a(x - h)^2 + k$.

**Steps for $x^2 + bx + c$:**
1. Take half the coefficient of $x$: $\\frac{b}{2}$.
2. Square it: $\\left(\\frac{b}{2}\\right)^2$.
3. Add and subtract this value.

**Example:** Complete the square for $x^2 + 6x + 2$.

$$x^2 + 6x + 9 - 9 + 2 = (x + 3)^2 - 7$$

This tells us the minimum value of $x^2 + 6x + 2$ is $-7$, occurring at $x = -3$.

---

## Vieta's Formulas

For $ax^2 + bx + c = 0$ with roots $r$ and $s$:

$$r + s = -\\frac{b}{a} \\qquad \\text{(sum of roots)}$$

$$r \\cdot s = \\frac{c}{a} \\qquad \\text{(product of roots)}$$

**Example:** If $x^2 - 5x + 6 = 0$ has roots $r$ and $s$, find $r + s$ and $rs$.

$$r + s = 5, \\quad rs = 6$$

(Indeed, the roots are 2 and 3: $2 + 3 = 5$, $2 \\times 3 = 6$.)

> **Strategy:** Vieta's formulas let you find the sum or product of roots without solving the equation. The GRE sometimes asks for these quantities directly.

---

## Function Notation

A **function** $f(x)$ assigns each input $x$ exactly one output.

**Example:** If $f(x) = 3x^2 - 2x + 1$, find $f(-2)$.

$$f(-2) = 3(-2)^2 - 2(-2) + 1 = 3(4) + 4 + 1 = 12 + 4 + 1 = \\textbf{17}$$

### Composite Functions

$$(f \\circ g)(x) = f(g(x))$$

Evaluate the inner function first, then substitute into the outer function.

**Example:** If $f(x) = x + 3$ and $g(x) = x^2$, find $f(g(2))$.

$$g(2) = 4, \\quad f(4) = 7$$

> **Common Trap:** $f(g(x)) \\neq g(f(x))$ in general. Order matters for composition. $f(g(2)) = 7$ but $g(f(2)) = g(5) = 25$.

### Domain and Range

- **Domain:** the set of all valid input values ($x$-values).
- **Range:** the set of all possible output values ($y$-values).

**Key restrictions on domain:**
- Cannot divide by zero: if $f(x) = \\frac{1}{x-3}$, then $x \\neq 3$.
- Cannot take the square root of a negative: if $f(x) = \\sqrt{x - 2}$, then $x \\ge 2$.

---

## Graphs of Quadratic Functions (Parabolas)

The graph of $f(x) = ax^2 + bx + c$ is a **parabola**.

### Standard Form vs. Vertex Form

- **Standard form:** $f(x) = ax^2 + bx + c$
- **Vertex form:** $f(x) = a(x - h)^2 + k$, where $(h, k)$ is the vertex.

### Key Properties

| Property | Formula/Rule |
|----------|-------------|
| Opens upward/downward | $a > 0$: up (minimum) ∕ $a < 0$: down (maximum) |
| Vertex (from standard form) | $h = -\\frac{b}{2a}$, $k = f(h)$ |
| Axis of symmetry | $x = -\\frac{b}{2a}$ |
| $y$-intercept | $(0, c)$ |
| $x$-intercepts | Set $f(x) = 0$ and solve |

**Example:** For $f(x) = 2x^2 - 8x + 3$:

$$h = -\\frac{-8}{2(2)} = 2, \\quad k = 2(4) - 8(2) + 3 = 8 - 16 + 3 = -5$$

Vertex: $(2, -5)$. Opens upward ($a = 2 > 0$). Minimum value is $-5$.

> **Strategy:** The vertex formula $x = -\\frac{b}{2a}$ is essential for finding maximum/minimum values. On the GRE, if a word problem involves optimizing a quantity described by a quadratic, find the vertex.

---

## Worked Examples

### Example 1: Factoring for Solutions

**Problem:** If $x^2 - 9x + 20 = 0$, what is the sum of all solutions?

By Vieta's: sum of roots $= -\\frac{-9}{1} = \\textbf{9}$.

(Or factor: $(x-4)(x-5) = 0$, roots are 4 and 5, sum is 9.)

### Example 2: Discriminant Analysis

**Problem:** For what value of $k$ does $x^2 + kx + 9 = 0$ have exactly one solution?

$$\\Delta = k^2 - 4(1)(9) = k^2 - 36 = 0 \\implies k^2 = 36 \\implies k = \\pm 6$$

### Example 3: QC with Quadratics

**Column A:** $x^2$
**Column B:** $x$, given that $0 < x < 1$

For $0 < x < 1$: $x^2 < x$ (e.g., $(0.5)^2 = 0.25 < 0.5$).

Answer: **Column B is greater.**

### Example 4: Function Composition

**Problem:** If $f(x) = 2x + 1$ and $f(f(x)) = 19$, what is $x$?

$$f(f(x)) = f(2x + 1) = 2(2x + 1) + 1 = 4x + 3 = 19$$

$$4x = 16 \\implies x = \\textbf{4}$$

---

## Key Formulas

$$\\boxed{x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}}$$

$$\\boxed{(a+b)^2 = a^2 + 2ab + b^2}$$

$$\\boxed{(a-b)^2 = a^2 - 2ab + b^2}$$

$$\\boxed{a^2 - b^2 = (a+b)(a-b)}$$

$$\\boxed{\\text{Vertex: } x = -\\frac{b}{2a}}$$

---

## GRE Question Type Tips

1. **Quantitative Comparison:** QC problems with quadratics often hinge on the sign of the leading coefficient or whether $x$ is between 0 and 1 vs. greater than 1. Remember: for $0 < x < 1$, $x^2 < x$; for $x > 1$, $x^2 > x$; for $x < 0$, $x^2 > 0 > x$. Test cases from different intervals.

2. **Problem Solving:** Most GRE quadratics are designed to factor cleanly. If factoring does not work after 30 seconds, switch to the quadratic formula. Always check for the difference of squares pattern — it appears in disguised forms.

3. **Numeric Entry:** When asked for the sum or product of solutions, use Vieta's formulas instead of solving. For function evaluation, substitute carefully and watch signs.

4. **Data Interpretation:** Quadratic models sometimes appear in chart-based problems. The vertex gives the maximum or minimum, and the $x$-intercepts show where the quantity equals zero.
`;
