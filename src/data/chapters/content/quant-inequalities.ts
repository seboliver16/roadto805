export const content = `
# Inequalities & Absolute Value

Inequalities appear frequently on the GMAT, particularly in Data Sufficiency. Unlike equations, inequalities describe ranges of values rather than specific solutions, which makes them trickier to handle. Absolute value problems add another layer of complexity. This chapter covers everything you need to master both topics.

---

## 1. Solving Linear Inequalities

A **linear inequality** looks like an equation but uses $<$, $>$, $\\leq$, or $\\geq$ instead of $=$.

$$3x - 7 > 5$$

**Solving** works exactly like solving an equation, with one critical exception:

> **When you multiply or divide both sides by a negative number, you must flip the inequality sign.**

**Example:**

Solve $-2x + 6 \\leq 14$.

$$-2x \\leq 8$$

Divide by $-2$ and **flip** the sign:

$$x \\geq -4$$

The solution set is all real numbers greater than or equal to $-4$.

### Why Does the Sign Flip?

Consider $3 < 5$. Multiply both sides by $-1$: $-3$ and $-5$. On the number line, $-3$ is to the **right** of $-5$, so $-3 > -5$. Multiplying by a negative reverses the order.

### Common Mistakes

- Forgetting to flip when dividing by a negative.
- Flipping when you should not (e.g., dividing by a positive number).
- Flipping when adding or subtracting a negative (you should **not** flip in this case---flipping only applies to multiplication and division).

---

## 2. Compound Inequalities

A **compound inequality** chains two inequalities together:

$$-3 < 2x + 1 \\leq 9$$

This means $2x + 1$ is simultaneously greater than $-3$ and less than or equal to $9$.

**Solving:** Perform the same operations on all three parts.

$$-3 < 2x + 1 \\leq 9$$
$$-4 < 2x \\leq 8$$
$$-2 < x \\leq 4$$

So $x$ lies in the interval $(-2, 4]$.

### "AND" vs "OR" Inequalities

- **AND (intersection):** $x > 1$ AND $x < 5$ means $1 < x < 5$.
- **OR (union):** $x < -2$ OR $x > 3$ means $x \\in (-\\infty, -2) \\cup (3, \\infty)$.

On the GMAT, compound inequalities are common in Data Sufficiency. Combining two statements often produces a compound inequality that narrows the range of a variable.

---

## 3. Absolute Value Equations

The **absolute value** of $x$, written $|x|$, represents the distance of $x$ from zero on the number line. By definition:

$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

### Solving $|ax + b| = c$

If $c > 0$, split into two cases:

$$ax + b = c \\quad \\text{or} \\quad ax + b = -c$$

If $c = 0$, then $ax + b = 0$ (one solution).

If $c < 0$, there is **no solution** (absolute value cannot be negative).

**Example:** Solve $|2x - 5| = 7$.

- Case 1: $2x - 5 = 7 \\implies 2x = 12 \\implies x = 6$
- Case 2: $2x - 5 = -7 \\implies 2x = -2 \\implies x = -1$

Solutions: $x = 6$ or $x = -1$.

### Solving $|ax + b| = |cx + d|$

Square both sides (since both sides are non-negative):

$$(ax + b)^2 = (cx + d)^2$$

Or equivalently: $(ax + b)^2 - (cx + d)^2 = 0$, then factor as a difference of squares.

Alternatively, consider two cases: $ax + b = cx + d$ or $ax + b = -(cx + d)$.

---

## 4. Absolute Value Inequalities

These come in two flavors:

### "Less Than" Type: $|x| < a$ (where $a > 0$)

$$|x| < a \\iff -a < x < a$$

The solution is a single interval centered at zero. Think: "$x$ is **closer** to zero than $a$ is."

**Example:** $|x - 3| < 5$

$$-5 < x - 3 < 5$$
$$-2 < x < 8$$

### "Greater Than" Type: $|x| > a$ (where $a > 0$)

$$|x| > a \\iff x < -a \\quad \\text{or} \\quad x > a$$

The solution is two separate rays. Think: "$x$ is **farther** from zero than $a$ is."

**Example:** $|2x + 1| \\geq 7$

$$2x + 1 \\leq -7 \\quad \\text{or} \\quad 2x + 1 \\geq 7$$
$$x \\leq -4 \\quad \\text{or} \\quad x \\geq 3$$

### The Number Line Approach

The expression $|x - k|$ represents the **distance** between $x$ and $k$ on the number line. This geometric interpretation is extremely powerful:

- $|x - 3| < 5$ means "$x$ is less than 5 units from 3" $\\rightarrow$ the interval $(3-5, 3+5) = (-2, 8)$.
- $|x - 3| > 5$ means "$x$ is more than 5 units from 3" $\\rightarrow$ $x < -2$ or $x > 8$.

This approach lets you solve many GMAT absolute value problems **without algebra** by simply visualizing the number line.

---

## 5. Quadratic Inequalities (Sign Analysis)

A **quadratic inequality** has the form $ax^2 + bx + c > 0$ (or $<, \\leq, \\geq$).

### Method: Critical Points and Sign Chart

1. **Solve the equation** $ax^2 + bx + c = 0$ to find the critical points (roots).
2. **Plot the roots** on a number line, dividing it into intervals.
3. **Test a value** in each interval to determine the sign of the expression.
4. **Select the intervals** that satisfy the inequality.

**Example:** Solve $x^2 - 5x + 6 > 0$.

Step 1: Factor: $(x - 2)(x - 3) = 0 \\implies x = 2$ or $x = 3$.

Step 2: The number line is divided into three intervals: $(-\\infty, 2)$, $(2, 3)$, $(3, \\infty)$.

Step 3: Test values:
- $x = 0$: $(0-2)(0-3) = 6 > 0$ --- positive
- $x = 2.5$: $(0.5)(-0.5) = -0.25 < 0$ --- negative
- $x = 4$: $(2)(1) = 2 > 0$ --- positive

Step 4: We want $> 0$, so the solution is $x < 2$ or $x > 3$, i.e., $(-\\infty, 2) \\cup (3, \\infty)$.

### Shortcut for Factored Quadratics

For a product $(x - a)(x - b) > 0$ (with $a < b$):
- **Positive** when $x < a$ or $x > b$ (both factors same sign).
- **Negative** when $a < x < b$ (factors have opposite signs).

For $(x - a)(x - b) < 0$: the solution is $a < x < b$.

This pattern---a "W" shape versus a "U" shape---is worth memorizing.

---

## 6. Multiplying and Dividing Inequalities

### Multiplying Two Inequalities

You can multiply two inequalities **only if both sides of both inequalities are positive** (or you carefully track the signs).

If $a < b$ and $c < d$ where $a, b, c, d > 0$, then $ac < bd$.

### Dividing by a Variable

**Never divide by a variable unless you know its sign.** If $x$ could be positive or negative, you must consider both cases.

This is one of the most common GMAT inequality traps. For instance, from $xy > 5y$, you **cannot** simply divide by $y$ to get $x > 5$ unless you know $y > 0$. If $y < 0$, dividing flips the sign: $x < 5$.

---

## 7. Worked Examples

### Example 1: Compound Inequality

**Problem:** If $-4 \\leq 3 - 2x \\leq 9$, what is the range of $x$?

**Solution:**

$$-4 \\leq 3 - 2x \\leq 9$$

Subtract 3 from all parts:

$$-7 \\leq -2x \\leq 6$$

Divide by $-2$ and **flip both signs**:

$$\\frac{7}{2} \\geq x \\geq -3$$

Rewrite in standard order: $-3 \\leq x \\leq \\frac{7}{2}$.

### Example 2: Absolute Value Inequality

**Problem:** How many integers satisfy $|3x - 4| \\leq 8$?

**Solution:**

$$-8 \\leq 3x - 4 \\leq 8$$
$$-4 \\leq 3x \\leq 12$$
$$-\\frac{4}{3} \\leq x \\leq 4$$

Since $-\\frac{4}{3} \\approx -1.33$, the integers in this range are $-1, 0, 1, 2, 3, 4$.

That is **6 integers**.

### Example 3: Quadratic Inequality

**Problem:** For which values of $x$ is $x^2 - 4x - 5 < 0$?

**Solution:**

Factor: $(x - 5)(x + 1) < 0$.

Critical points: $x = -1$ and $x = 5$.

Using the shortcut for $(x - a)(x - b) < 0$ with $a < b$: the solution is $a < x < b$.

$$-1 < x < 5$$

### Example 4: Data Sufficiency with Inequalities

**Problem:** Is $x > 0$?

(1) $x^2 - x > 0$

(2) $|x| = x$

**Solution:**

**Statement (1):** $x^2 - x > 0 \\implies x(x - 1) > 0$.

Sign analysis: roots at $x = 0$ and $x = 1$.
- $x < 0$: both factors negative $\\rightarrow$ product positive. Works.
- $0 < x < 1$: $x$ positive, $(x-1)$ negative $\\rightarrow$ product negative. Does not work.
- $x > 1$: both positive $\\rightarrow$ product positive. Works.

So $x < 0$ or $x > 1$. We cannot determine whether $x > 0$. **Not sufficient.**

**Statement (2):** $|x| = x$ means $x \\geq 0$. But $x$ could be $0$, so we cannot conclude $x > 0$ strictly. **Not sufficient.**

**Combined:** From (1), $x < 0$ or $x > 1$. From (2), $x \\geq 0$. Together: $x > 1$, which means $x > 0$. **Sufficient.**

Answer: **(C)** --- Both statements together are sufficient.

---

## 8. GMAT Tips for Inequalities

**1. Never divide by a variable of unknown sign.** This is the single most common error. If you must divide, split into cases based on whether the variable is positive or negative.

**2. Test boundary values.** When a question asks "which of the following must be true," plug in extreme or boundary values to eliminate choices.

**3. Use the number line for absolute value.** Interpret $|x - a|$ as the distance from $x$ to $a$. This geometric view often makes problems trivial.

**4. Be careful with "must be true" vs. "could be true."** If a question says "must be true," you need every possible value of the variable to satisfy the condition. If it says "could be true," just one valid case is enough.

**5. Know the sign of a product.** A product of factors is positive when an **even** number of factors are negative. This extends to quotients as well.

**6. Square both sides carefully.** Squaring is valid when both sides are non-negative. If either side could be negative, squaring can introduce extraneous solutions.

**7. For Data Sufficiency, think about ranges, not specific values.** Inequalities define ranges. Two statements are sufficient together if their combined range answers the question definitively.

**8. Memorize these key facts:**
- $x^2 \\geq 0$ for all real $x$.
- $|x| \\geq 0$ for all real $x$.
- If $x^2 < x$, then $0 < x < 1$.
- If $x^2 > x$, then $x < 0$ or $x > 1$.
`;
