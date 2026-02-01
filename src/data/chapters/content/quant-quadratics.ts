export const content = `
# Quadratics & Algebraic Expressions

Quadratics appear throughout GMAT Quantitative Reasoning---in algebra, geometry, number properties, and word problems. You must be fluent in factoring, using the quadratic formula, and recognizing algebraic identities. This chapter also covers functions and sequences, which round out the algebra toolkit.

---

## 1. Factoring Quadratics

A **quadratic expression** has the form $ax^2 + bx + c$ where $a \\neq 0$.

### Standard Factoring ($a = 1$)

To factor $x^2 + bx + c$, find two numbers $p$ and $q$ such that:

$$p + q = b \\quad \\text{and} \\quad p \\times q = c$$

Then: $x^2 + bx + c = (x + p)(x + q)$.

**Example:** Factor $x^2 + 7x + 12$.

Find two numbers that multiply to 12 and add to 7: $3$ and $4$.

$$x^2 + 7x + 12 = (x + 3)(x + 4)$$

### Factoring When $a \\neq 1$

For $ax^2 + bx + c$ with $a \\neq 1$, use the **AC method**:

1. Compute the product $a \\times c$.
2. Find two numbers that multiply to $ac$ and add to $b$.
3. Rewrite the middle term using those two numbers.
4. Factor by grouping.

**Example:** Factor $2x^2 + 7x + 3$.

$a \\times c = 2 \\times 3 = 6$. Find two numbers that multiply to 6 and add to 7: $1$ and $6$.

$$2x^2 + x + 6x + 3 = x(2x + 1) + 3(2x + 1) = (x + 3)(2x + 1)$$

### Setting Quadratics Equal to Zero

To solve $ax^2 + bx + c = 0$, factor and set each factor to zero:

$$x^2 + 7x + 12 = 0 \\implies (x + 3)(x + 4) = 0 \\implies x = -3 \\text{ or } x = -4$$

---

## 2. Special Algebraic Identities

These identities appear constantly on the GMAT. Memorize them cold.

### Difference of Squares

$$a^2 - b^2 = (a + b)(a - b)$$

**Applications:**
- Factor $x^2 - 49 = (x + 7)(x - 7)$.
- Compute $97 \\times 103 = (100 - 3)(100 + 3) = 100^2 - 9 = 9991$.
- Simplify $\\frac{x^2 - 25}{x - 5} = \\frac{(x+5)(x-5)}{x-5} = x + 5$ (for $x \\neq 5$).

### Perfect Square Trinomials

$$(a + b)^2 = a^2 + 2ab + b^2$$
$$(a - b)^2 = a^2 - 2ab + b^2$$

If you see $x^2 + 10x + 25$, recognize it as $(x + 5)^2$.

### Sum and Difference of Cubes (Less Common on GMAT)

$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

---

## 3. The Quadratic Formula

When factoring is difficult or the roots are not integers, use:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

### The Discriminant

The expression under the square root, $\\Delta = b^2 - 4ac$, is the **discriminant**. It tells you the nature of the roots:

| Discriminant | Roots |
|---|---|
| $\\Delta > 0$ | Two distinct real roots |
| $\\Delta = 0$ | One repeated real root (perfect square trinomial) |
| $\\Delta < 0$ | No real roots (complex roots --- rare on GMAT) |

**Example:** Solve $x^2 - 6x + 2 = 0$.

$$x = \\frac{6 \\pm \\sqrt{36 - 8}}{2} = \\frac{6 \\pm \\sqrt{28}}{2} = \\frac{6 \\pm 2\\sqrt{7}}{2} = 3 \\pm \\sqrt{7}$$

On the GMAT, if the discriminant is not a perfect square, the problem is likely testing whether the roots exist rather than asking you to compute them exactly.

---

## 4. Sum and Product of Roots (Vieta's Formulas)

For $ax^2 + bx + c = 0$ with roots $r_1$ and $r_2$:

$$r_1 + r_2 = -\\frac{b}{a} \\quad \\text{(sum of roots)}$$

$$r_1 \\times r_2 = \\frac{c}{a} \\quad \\text{(product of roots)}$$

These formulas let you answer questions about roots **without actually finding them**.

**Example:** If the roots of $x^2 - 8x + k = 0$ differ by 2, find $k$.

Let the roots be $r$ and $r + 2$.

- Sum: $r + (r + 2) = 2r + 2 = 8 \\implies r = 3$
- So the roots are 3 and 5.
- Product: $3 \\times 5 = 15 = k$

Alternatively, using Vieta's directly: sum $= 8$, and if the roots differ by 2, they are $3$ and $5$, so product $= k = 15$.

### Constructing a Quadratic from Its Roots

If the roots are $r_1$ and $r_2$, the quadratic equation is:

$$x^2 - (r_1 + r_2)x + r_1 r_2 = 0$$

**Example:** Construct a quadratic with roots $-2$ and $7$.

Sum $= 5$, product $= -14$.

$$x^2 - 5x - 14 = 0$$

---

## 5. Functions

A **function** $f(x)$ assigns exactly one output to each input $x$ in its domain.

### Function Notation

$f(x) = 2x^2 - 3x + 1$ means: substitute the input for every $x$ and compute.

- $f(3) = 2(9) - 9 + 1 = 10$
- $f(-1) = 2(1) + 3 + 1 = 6$
- $f(a + 1) = 2(a+1)^2 - 3(a+1) + 1$

### Composition of Functions

$(f \\circ g)(x) = f(g(x))$: apply $g$ first, then $f$ to the result.

**Example:** If $f(x) = x^2$ and $g(x) = x + 3$, find $f(g(2))$.

$g(2) = 5$, so $f(g(2)) = f(5) = 25$.

Note: $f(g(x)) \\neq g(f(x))$ in general. Order matters.

### Domain

The **domain** is the set of all valid inputs. Restrictions arise from:
- **Division by zero:** $f(x) = \\frac{1}{x-3}$ excludes $x = 3$.
- **Square roots of negatives:** $f(x) = \\sqrt{x - 2}$ requires $x \\geq 2$.

### GMAT-Specific Function Problems

The GMAT sometimes defines custom operations using symbols like $\\#$, $*$, or $\\triangle$. For example: "For all positive integers $x$ and $y$, define $x \\# y = x^2 + 2xy$. What is $3 \\# 4$?"

Simply substitute: $3 \\# 4 = 9 + 24 = 33$. These problems test your ability to follow a rule precisely.

---

## 6. Sequences

### Arithmetic Sequences

Each term increases by a constant **common difference** $d$:

$$a_n = a_1 + (n - 1)d$$

The sum of the first $n$ terms:

$$S_n = \\frac{n}{2}(a_1 + a_n) = \\frac{n}{2}(2a_1 + (n-1)d)$$

**Example:** In an arithmetic sequence, $a_1 = 5$ and $d = 3$. Find the 20th term and the sum of the first 20 terms.

$$a_{20} = 5 + 19(3) = 62$$
$$S_{20} = \\frac{20}{2}(5 + 62) = 10 \\times 67 = 670$$

### Geometric Sequences

Each term is multiplied by a constant **common ratio** $r$:

$$a_n = a_1 \\cdot r^{n-1}$$

The sum of the first $n$ terms (for $r \\neq 1$):

$$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$$

**Example:** A geometric sequence has $a_1 = 2$ and $r = 3$. The first five terms are: $2, 6, 18, 54, 162$.

$$S_5 = 2 \\cdot \\frac{1 - 3^5}{1 - 3} = 2 \\cdot \\frac{1 - 243}{-2} = 2 \\cdot \\frac{-242}{-2} = 242$$

### Recognizing Sequences on the GMAT

The GMAT may describe a sequence recursively (e.g., "each term is 3 more than the previous term") or give you a formula. Determine whether the sequence is arithmetic, geometric, or neither, and apply the appropriate formulas.

---

## 7. Worked Examples

### Example 1: Factoring and Solving

**Problem:** Solve $x^2 - 3x - 28 = 0$.

**Solution:**

Find two numbers that multiply to $-28$ and add to $-3$: $4$ and $-7$.

$$x^2 - 3x - 28 = (x + 4)(x - 7) = 0$$

$$x = -4 \\text{ or } x = 7$$

### Example 2: Difference of Squares Application

**Problem:** If $x^2 - y^2 = 48$ and $x + y = 12$, what is $x - y$?

**Solution:**

$$x^2 - y^2 = (x + y)(x - y) = 48$$
$$12(x - y) = 48$$
$$x - y = 4$$

Note how we never needed to find $x$ and $y$ individually. This is a classic GMAT shortcut.

### Example 3: Vieta's Formulas

**Problem:** The sum of the roots of $2x^2 + 8x - 5 = 0$ is:

**Solution:**

Using Vieta's: sum of roots $= -\\frac{b}{a} = -\\frac{8}{2} = -4$.

No need to use the quadratic formula.

### Example 4: Sequence Problem

**Problem:** In an arithmetic sequence, the 5th term is 23 and the 12th term is 58. What is the first term?

**Solution:**

$$a_5 = a_1 + 4d = 23$$
$$a_{12} = a_1 + 11d = 58$$

Subtract the first equation from the second:

$$7d = 35 \\implies d = 5$$

Substitute back: $a_1 + 20 = 23 \\implies a_1 = 3$.

---

## 8. Key Formulas

| Formula | Description |
|---|---|
| $a^2 - b^2 = (a+b)(a-b)$ | Difference of squares |
| $(a \\pm b)^2 = a^2 \\pm 2ab + b^2$ | Perfect square trinomials |
| $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ | Quadratic formula |
| $r_1 + r_2 = -b/a$ | Sum of roots |
| $r_1 \\cdot r_2 = c/a$ | Product of roots |
| $a_n = a_1 + (n-1)d$ | Arithmetic sequence, $n$th term |
| $S_n = \\frac{n}{2}(a_1 + a_n)$ | Arithmetic series sum |
| $a_n = a_1 \\cdot r^{n-1}$ | Geometric sequence, $n$th term |
| $S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$ | Geometric series sum |

---

## 9. GMAT Tips for Quadratics & Algebra

**1. Know the special identities cold.** The difference of squares, in particular, appears on almost every GMAT. Recognizing it instantly saves precious time.

**2. On Data Sufficiency, remember that $x^2 = 25$ gives $x = 5$ or $x = -5$.** A quadratic equation generally has two solutions. Make sure additional constraints (e.g., "$x$ is positive") pin down a unique answer before declaring sufficiency.

**3. Use Vieta's formulas to avoid unnecessary computation.** If a question asks only for the sum or product of roots, go directly to $-b/a$ or $c/a$.

**4. Factor before simplifying.** When algebraic expressions appear in fractions, factor numerator and denominator first to cancel common factors.

**5. Substitute strategically.** If a problem contains $x^2 + \\frac{1}{x^2}$ and you know $x + \\frac{1}{x} = 5$, square the known expression:

$$\\left(x + \\frac{1}{x}\\right)^2 = x^2 + 2 + \\frac{1}{x^2} = 25 \\implies x^2 + \\frac{1}{x^2} = 23$$

**6. Check your factoring.** After factoring, multiply back out (FOIL) to verify. This 10-second check prevents costly errors.

**7. For functions with custom symbols, follow the definition exactly.** Do not overthink these---just substitute and compute.

**8. On sequence problems, determine the type first.** Check whether consecutive terms have a common difference (arithmetic) or a common ratio (geometric). This determines which formulas to use.
`;
