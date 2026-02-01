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

> **Common Trap:** Students sometimes flip the inequality when **subtracting** a negative number. For example, from $x + 3 > 5$, subtracting 3 gives $x > 2$---no flip needed. You only flip when you **multiply or divide** both sides by a negative. Adding or subtracting never flips the sign, regardless of the sign of the number.

**Example:** Solve $5 - 3x > 14$.

**Solution:**

$$-3x > 9$$

Divide by $-3$ and **flip**:

$$x < -3$$

> **Quick Method:** Instead of dividing by a negative (and remembering to flip), you can move the variable term to the other side to keep it positive. From $5 - 3x > 14$, add $3x$ to both sides: $5 > 14 + 3x$, then $-9 > 3x$, then $x < -3$. Same result, but you divided by positive 3 (no flip needed).

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

> **Quick Method:** When working with compound inequalities, you can add them together if the inequality signs point in the same direction. If $a < x < b$ and $c < y < d$, then $a + c < x + y < b + d$. This is useful for finding the range of an expression involving multiple variables.

**Example:** If $1 < a < 4$ and $2 < b < 5$, what is the range of $a + b$?

**Solution:**

Add the inequalities:

$$1 + 2 < a + b < 4 + 5$$
$$3 < a + b < 9$$

**Example:** If $-2 \\leq x \\leq 5$ and $1 \\leq y \\leq 3$, what is the range of $x - y$?

**Solution:**

To find the range of $x - y$, we need to maximize and minimize separately.

- Maximum of $x - y$: maximize $x$ and minimize $y$: $5 - 1 = 4$
- Minimum of $x - y$: minimize $x$ and maximize $y$: $-2 - 3 = -5$

$$-5 \\leq x - y \\leq 4$$

> **Common Trap:** You **cannot** simply subtract compound inequalities the way you add them. For $x - y$, you must consider the extreme cases separately (maximize $x$ while minimizing $y$, and vice versa). Subtracting inequalities "reverses" one of them, so you need: max of $x - y$ = max($x$) $-$ min($y$), and min of $x - y$ = min($x$) $-$ max($y$).

---

## 3. Absolute Value Equations

The **absolute value** of $x$, written $|x|$, represents the distance of $x$ from zero on the number line. By definition:

$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

### Solving $|ax + b| = c$

If $c > 0$, split into two cases:

$$ax + b = c \\quad \\text{or} \\quad ax + b = -c$$

If $c = 0$, then $ax + b = 0$ (one solution).

If $c < 0$, there is **no solution** (absolute value cannot be negative).

> **Common Trap:** Forgetting to check whether $c \\geq 0$ before splitting into cases. If a problem says $|x - 3| = -2$, students sometimes still write $x - 3 = -2$ and $x - 3 = 2$, getting "solutions" $x = 1$ and $x = 5$. But these are **wrong**---an absolute value can never equal a negative number. The answer is "no solution."

**Example:** Solve $|2x - 5| = 7$.

- Case 1: $2x - 5 = 7 \\implies 2x = 12 \\implies x = 6$
- Case 2: $2x - 5 = -7 \\implies 2x = -2 \\implies x = -1$

Solutions: $x = 6$ or $x = -1$.

**Example:** Solve $|4x + 3| = 2x + 9$.

**Solution:**

Since the right side must be non-negative (as it equals an absolute value), we need $2x + 9 \\geq 0$, i.e., $x \\geq -\\frac{9}{2}$.

Case 1: $4x + 3 = 2x + 9$

$$2x = 6 \\implies x = 3$$

Check: $|4(3) + 3| = |15| = 15$ and $2(3) + 9 = 15$. ✓

Case 2: $4x + 3 = -(2x + 9)$

$$4x + 3 = -2x - 9$$
$$6x = -12 \\implies x = -2$$

Check: $|4(-2) + 3| = |-5| = 5$ and $2(-2) + 9 = 5$. ✓

Solutions: $x = 3$ or $x = -2$.

> **Quick Method:** When one side of an absolute value equation is an expression (not a constant), always **verify your solutions** by plugging them back in. The case-splitting process can produce extraneous solutions that do not satisfy the original equation.

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

> **Quick Method:** Remember the mnemonic: "Less thAND, GreatOR."
> - $|x| < a$ gives an AND condition (single interval): $-a < x < a$
> - $|x| > a$ gives an OR condition (two rays): $x < -a$ OR $x > a$

### The Number Line Approach

The expression $|x - k|$ represents the **distance** between $x$ and $k$ on the number line. This geometric interpretation is extremely powerful:

- $|x - 3| < 5$ means "$x$ is less than 5 units from 3" $\\rightarrow$ the interval $(3-5, 3+5) = (-2, 8)$.
- $|x - 3| > 5$ means "$x$ is more than 5 units from 3" $\\rightarrow$ $x < -2$ or $x > 8$.

This approach lets you solve many GMAT absolute value problems **without algebra** by simply visualizing the number line.

**Example:** What values of $x$ satisfy $|x + 4| \\leq 3$?

**Solution:**

Rewrite as $|x - (-4)| \\leq 3$. This means $x$ is at most 3 units from $-4$.

$$-4 - 3 \\leq x \\leq -4 + 3$$
$$-7 \\leq x \\leq -1$$

> **Common Trap:** Students sometimes misidentify the "center point" in $|x + 4| \\leq 3$. Remember that $|x + 4| = |x - (-4)|$, so the center is $-4$, not $4$. The expression $|x - k|$ has center $k$, and if written as $|x + c|$, the center is $-c$.

**Example:** If $|x - 2| + |x - 8| = 6$, what are the possible values of $x$?

**Solution:**

Note that $|2 - 8| = 6$, so the distance between the two "centers" is 6. The equation asks for points where the sum of distances to 2 and 8 equals exactly 6 (the distance between them). This is only possible when $x$ is between 2 and 8 (inclusive).

$$2 \\leq x \\leq 8$$

> **Quick Method:** For $|x - a| + |x - b| = |a - b|$, the solution is always $a \\leq x \\leq b$ (or $b \\leq x \\leq a$). The sum of distances equals the distance between the two points only when $x$ is on the segment connecting them.

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

> **Quick Method:** For quadratic inequalities, remember: the parabola $y = (x-a)(x-b)$ is a "U" shape (opens upward) when the leading coefficient is positive. It is **negative** (below the x-axis) **between** the roots and **positive** (above) **outside** the roots. So:
> - $(x-a)(x-b) > 0$: outside the roots ($x < a$ or $x > b$)
> - $(x-a)(x-b) < 0$: between the roots ($a < x < b$)

**Example:** Solve $2x^2 + x - 6 \\leq 0$.

**Solution:**

Factor: $2x^2 + x - 6 = (2x - 3)(x + 2) = 0$

Roots: $x = \\frac{3}{2}$ and $x = -2$.

Since the coefficient of $x^2$ is positive (opens upward), the expression is $\\leq 0$ **between** the roots:

$$-2 \\leq x \\leq \\frac{3}{2}$$

**Example:** For which values of $x$ is $\\frac{x-1}{x+3} > 0$?

**Solution:**

A fraction is positive when numerator and denominator have the **same sign**.

Critical points: $x = 1$ (numerator = 0) and $x = -3$ (denominator = 0, undefined).

Test intervals:
- $x = -4$: $\\frac{-5}{-1} = 5 > 0$ ✓
- $x = 0$: $\\frac{-1}{3} < 0$ ✗
- $x = 2$: $\\frac{1}{5} > 0$ ✓

Solution: $x < -3$ or $x > 1$.

> **Common Trap:** Do not include $x = -3$ in the solution even though the expression is "positive" on either side of it. At $x = -3$, the expression is **undefined** (division by zero). Always exclude points where the denominator is zero.

---

## 6. Multiplying and Dividing Inequalities

### Multiplying Two Inequalities

You can multiply two inequalities **only if both sides of both inequalities are positive** (or you carefully track the signs).

If $a < b$ and $c < d$ where $a, b, c, d > 0$, then $ac < bd$.

### Dividing by a Variable

**Never divide by a variable unless you know its sign.** If $x$ could be positive or negative, you must consider both cases.

This is one of the most common GMAT inequality traps. For instance, from $xy > 5y$, you **cannot** simply divide by $y$ to get $x > 5$ unless you know $y > 0$. If $y < 0$, dividing flips the sign: $x < 5$.

> **Common Trap:** From $x^2 > 4x$, students often divide both sides by $x$ to get $x > 4$. But this misses the case when $x < 0$. The correct approach: $x^2 - 4x > 0 \\implies x(x-4) > 0$, which gives $x < 0$ or $x > 4$. Dividing by $x$ without knowing its sign loses half the solution.

**Example:** If $xy < 0$ and $x > 0$, what can you conclude about $y$?

**Solution:**

Since $x > 0$ and $xy < 0$, divide both sides by $x$ (positive, so no flip):

$$y < 0$$

> **Quick Method:** $xy < 0$ means $x$ and $y$ have **opposite signs**. If you already know $x > 0$, then $y < 0$ immediately. No algebra needed---just apply the sign rule for products.

**Example:** Is $\\frac{a}{b} > \\frac{a}{c}$?

(1) $a > 0$

(2) $b < c$ and both are positive

**Solution:**

From statement (2), since $b < c$ and both positive, $\\frac{1}{b} > \\frac{1}{c}$.

From statement (1), $a > 0$, so multiplying by $a$ preserves the inequality:

$$\\frac{a}{b} > \\frac{a}{c}$$

Both statements together are **sufficient**.

Answer: **(C)**

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

### Example 5: Absolute Value with Two Variables

**Problem:** If $|a - 3| < 1$ and $|b - 5| < 2$, what is the range of $a + b$?

**Solution:**

From $|a - 3| < 1$: $2 < a < 4$.

From $|b - 5| < 2$: $3 < b < 7$.

Add the inequalities (valid since all parts are in the same direction):

$$2 + 3 < a + b < 4 + 7$$
$$5 < a + b < 11$$

> **Quick Method:** The number line approach makes this instant. $a$ is within 1 unit of 3 (so between 2 and 4), and $b$ is within 2 units of 5 (so between 3 and 7). Add the ranges: $a + b$ is between $2+3 = 5$ and $4+7 = 11$.

### Example 6: "Must Be True" Problem

**Problem:** If $-3 < x < -1$ and $2 < y < 4$, which of the following **must be true**?

(A) $xy > 0$
(B) $x + y > 0$
(C) $xy < -2$
(D) $x + y < 3$
(E) $\\frac{x}{y} > -1$

**Solution:**

Test the ranges:

**$xy$:** $x$ is negative, $y$ is positive, so $xy$ is always negative. (A) is false.

**$x + y$:** Range is $(-3 + 2, -1 + 4) = (-1, 3)$. Since $x + y$ could be negative (e.g., $-2.5 + 2.1 = -0.4$) or positive, (B) is not always true. But $x + y < 3$ is always true since the maximum of $x + y$ is less than 3. **(D) must be true.**

Let us verify (C) and (E):

**$xy$:** Range: most negative is $(-3)(4) = -12$, least negative is $(-1)(2) = -2$. So $-12 < xy < -2$. Thus $xy < -2$ is true. Wait---but $xy$ approaches $-2$ without reaching it ($x$ approaches $-1$ and $y$ approaches $2$, but neither equals those boundary values). So $xy < -2$ is indeed always true.

Both (C) and (D) must be true. But on a real GMAT question, only one answer would be correct. Let us recheck (C): if $x = -1.01$ and $y = 2.01$, then $xy = -2.03 < -2$. If $x = -1.001$ and $y = 2.001$, then $xy = -2.003 < -2$. Yes, $xy$ is always strictly less than $-2$.

> **Common Trap:** In "must be true" problems with ranges, test the **boundary values** (endpoints). If the statement holds at both extremes, it is likely true throughout. If it fails at any point in the range, it is not "must be true."

### Example 7: Inequality with Absolute Value in Data Sufficiency

**Problem:** Is $|x - 5| < 4$?

(1) $x > 2$

(2) $x < 7$

**Solution:**

$|x - 5| < 4$ means $1 < x < 9$.

**Statement (1):** $x > 2$. This includes values like $x = 10$, which is outside $(1, 9)$. **Not sufficient.**

**Statement (2):** $x < 7$. This includes values like $x = -5$, which is outside $(1, 9)$. **Not sufficient.**

**Combined:** $2 < x < 7$. Is this a subset of $(1, 9)$? Yes --- every $x$ with $2 < x < 7$ satisfies $1 < x < 9$. So $|x - 5| < 4$ is always true. **Sufficient.**

Answer: **(C)**

> **Quick Method:** On the number line, $|x - 5| < 4$ describes the interval $(1, 9)$. Statement (1) gives $x > 2$ (a ray). Statement (2) gives $x < 7$ (a ray). Their intersection is $(2, 7)$, which fits entirely inside $(1, 9)$. Visualizing intervals on a number line makes these problems much faster than algebraic case-splitting.

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
