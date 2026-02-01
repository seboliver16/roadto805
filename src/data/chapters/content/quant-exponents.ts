export const content = `
# Exponents & Roots

Exponents and roots appear throughout the GMAT Quantitative section, from straightforward simplification problems to more complex algebra and number properties questions. Mastering the rules of exponents and understanding how roots work will give you a powerful toolkit for efficient problem-solving. Many GMAT exponent problems can be solved in under a minute once you know the rules cold.

---

## Exponent Basics

An **exponent** indicates repeated multiplication:

$$a^n = \\underbrace{a \\times a \\times a \\times \\cdots \\times a}_{n \\text{ times}}$$

- $a$ is the **base**
- $n$ is the **exponent** (or **power**)

**Examples:**
- $2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32$
- $(-3)^4 = (-3)(-3)(-3)(-3) = 81$
- $(-3)^3 = (-3)(-3)(-3) = -27$

**Important sign rules:**
- A **positive** base raised to any power is **positive**.
- A **negative** base raised to an **even** power is **positive**.
- A **negative** base raised to an **odd** power is **negative**.

> **Common Trap:** $(-3)^4 = 81$ but $-3^4 = -(3^4) = -81$. The parentheses make all the difference. Without parentheses, the exponent applies only to $3$, and the negative sign is applied afterward. The GMAT tests this distinction frequently.

---

## Exponent Rules

These seven rules are the foundation for nearly every exponent problem on the GMAT. Memorize them thoroughly.

### 1. Product Rule (Same Base)

When multiplying powers with the same base, **add** the exponents:

$$a^m \\times a^n = a^{m+n}$$

**Example:** $2^3 \\times 2^5 = 2^{3+5} = 2^8 = 256$

> **Common Trap:** The Product Rule only works when the **bases are the same**. You cannot simplify $2^3 \\times 3^5$ by adding exponents. Students sometimes try $6^8$, which is completely wrong. If bases differ, you must find a common base or compute directly.

### 2. Quotient Rule (Same Base)

When dividing powers with the same base, **subtract** the exponents:

$$\\frac{a^m}{a^n} = a^{m-n}$$

**Example:** $\\frac{5^7}{5^4} = 5^{7-4} = 5^3 = 125$

### 3. Power Rule (Power of a Power)

When raising a power to another power, **multiply** the exponents:

$$(a^m)^n = a^{mn}$$

**Example:** $(3^2)^4 = 3^{2 \\times 4} = 3^8 = 6{,}561$

> **Common Trap:** Do not confuse $(a^m)^n$ with $a^{m^n}$. These are very different:
> - $(2^3)^2 = 2^6 = 64$
> - $2^{3^2} = 2^9 = 512$
>
> The first multiplies exponents; the second raises the exponent to a power first (exponentiation is right-associative).

### 4. Power of a Product

$$(ab)^n = a^n \\times b^n$$

**Example:** $(2 \\times 5)^3 = 2^3 \\times 5^3 = 8 \\times 125 = 1{,}000$

### 5. Power of a Quotient

$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$

**Example:** $\\left(\\frac{3}{4}\\right)^2 = \\frac{3^2}{4^2} = \\frac{9}{16}$

### 6. Zero Exponent

Any nonzero base raised to the power of zero equals 1:

$$a^0 = 1 \\quad (a \\neq 0)$$

**Examples:** $5^0 = 1$, $(-7)^0 = 1$, $\\left(\\frac{3}{4}\\right)^0 = 1$

**Note:** $0^0$ is undefined on the GMAT (and in most mathematical contexts the GMAT cares about).

### 7. Negative Exponent

A negative exponent means "take the reciprocal":

$$a^{-n} = \\frac{1}{a^n}$$

**Examples:**
- $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$
- $\\frac{1}{5^{-2}} = 5^2 = 25$
- $\\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$

> **Quick Method:** To handle a negative exponent on a fraction, just flip the fraction and make the exponent positive: $\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$. This saves a step.

---

## Fractional Exponents and Roots

Fractional exponents connect exponents to roots:

$$a^{1/n} = \\sqrt[n]{a}$$

$$a^{m/n} = (\\sqrt[n]{a})^m = \\sqrt[n]{a^m}$$

**Examples:**
- $27^{1/3} = \\sqrt[3]{27} = 3$
- $8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$
- $16^{3/4} = (\\sqrt[4]{16})^3 = 2^3 = 8$

> **Quick Method:** When evaluating $a^{m/n}$, always take the root first, then raise to the power. Taking the root first keeps the numbers small. For $64^{2/3}$: cube root of 64 is 4, then $4^2 = 16$. Much easier than computing $64^2 = 4096$ first and then taking the cube root.

### Square Roots

The **square root** $\\sqrt{a} = a^{1/2}$ is the most common root on the GMAT.

**Key properties:**
- $\\sqrt{a}$ is defined for $a \\ge 0$ (in real numbers).
- $\\sqrt{a}$ always refers to the **non-negative** root. So $\\sqrt{25} = 5$, not $\\pm 5$.
- However, the equation $x^2 = 25$ has two solutions: $x = 5$ or $x = -5$. The GMAT tests this distinction.

> **Common Trap:** $\\sqrt{25} = 5$ (always positive), but solving $x^2 = 25$ gives $x = \\pm 5$ (two solutions). Many students confuse these. The square root *symbol* denotes only the positive root. The *equation* $x^2 = k$ has two roots. Wrong answer choices on the GMAT exploit this distinction.

### Cube Roots

The **cube root** $\\sqrt[3]{a} = a^{1/3}$ is defined for all real numbers, including negatives:

- $\\sqrt[3]{27} = 3$
- $\\sqrt[3]{-8} = -2$

---

## Simplifying Radical Expressions

To simplify a square root, factor out perfect squares:

$$\\sqrt{72} = \\sqrt{36 \\times 2} = \\sqrt{36} \\times \\sqrt{2} = 6\\sqrt{2}$$

**General approach:**
1. Find the largest perfect square factor of the number under the radical.
2. Take its square root outside the radical.
3. Leave the remaining factor under the radical.

**More examples:**
- $\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$
- $\\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2}$
- $\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$

> **Quick Method:** To quickly find the largest perfect square factor, do prime factorization and pair up factors. $72 = 2^3 \\times 3^2$. Pair: one pair of 2s ($2^2 = 4$) and one pair of 3s ($3^2 = 9$). Outside: $2 \\times 3 = 6$. Remaining inside: one extra 2. Result: $6\\sqrt{2}$.

### Multiplying and Dividing Radicals

$$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$$

$$\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$$

**Example:** $\\sqrt{3} \\times \\sqrt{12} = \\sqrt{36} = 6$

### Adding and Subtracting Radicals

You can only add or subtract radicals with the **same radicand** (the number under the radical):

$$3\\sqrt{5} + 7\\sqrt{5} = 10\\sqrt{5}$$

$$4\\sqrt{3} - \\sqrt{3} = 3\\sqrt{3}$$

You **cannot** simplify $\\sqrt{2} + \\sqrt{3}$ into a single term.

> **Common Trap:** Students sometimes write $\\sqrt{2} + \\sqrt{3} = \\sqrt{5}$. This is **wrong**. You cannot add numbers under separate radicals. Similarly, $\\sqrt{9 + 16} = \\sqrt{25} = 5$, but $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$. These are not equal.

---

## Rationalizing Denominators

To eliminate a radical from a denominator, multiply numerator and denominator by the appropriate radical.

### Simple Denominator

$$\\frac{5}{\\sqrt{3}} = \\frac{5}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{5\\sqrt{3}}{3}$$

### Conjugate Method (Binomial Denominator)

When the denominator is of the form $a + \\sqrt{b}$ or $a - \\sqrt{b}$, multiply by the **conjugate**:

$$\\frac{1}{3 + \\sqrt{2}} = \\frac{1}{3 + \\sqrt{2}} \\times \\frac{3 - \\sqrt{2}}{3 - \\sqrt{2}} = \\frac{3 - \\sqrt{2}}{9 - 2} = \\frac{3 - \\sqrt{2}}{7}$$

The conjugate of $a + \\sqrt{b}$ is $a - \\sqrt{b}$. Their product uses the difference of squares pattern: $(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b$.

---

## Common Powers to Memorize

Knowing these values by heart will save you time on the GMAT:

**Powers of 2:**

| $2^1$ | $2^2$ | $2^3$ | $2^4$ | $2^5$ | $2^6$ | $2^7$ | $2^8$ | $2^9$ | $2^{10}$ |
|-------|-------|-------|-------|-------|-------|-------|-------|-------|----------|
| 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1,024 |

**Powers of 3:**

| $3^1$ | $3^2$ | $3^3$ | $3^4$ | $3^5$ |
|-------|-------|-------|-------|-------|
| 3 | 9 | 27 | 81 | 243 |

**Powers of 5:**

| $5^1$ | $5^2$ | $5^3$ | $5^4$ |
|-------|-------|-------|-------|
| 5 | 25 | 125 | 625 |

**Perfect squares (1-15):**

$$1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225$$

**Perfect cubes (1-6):**

$$1, 8, 27, 64, 125, 216$$

---

## Key Formulas

$$\\boxed{a^m \\times a^n = a^{m+n}}$$

$$\\boxed{\\frac{a^m}{a^n} = a^{m-n}}$$

$$\\boxed{(a^m)^n = a^{mn}}$$

$$\\boxed{a^0 = 1 \\text{ (for } a \\neq 0\\text{)}}$$

$$\\boxed{a^{-n} = \\frac{1}{a^n}}$$

$$\\boxed{a^{m/n} = \\sqrt[n]{a^m}}$$

$$\\boxed{\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}}$$

---

## Worked Examples

### Example 1: Simplifying Exponential Expressions

**Problem:** Simplify $\\frac{2^8 \\times 3^5}{2^5 \\times 3^3}$.

**Solution:** Apply the quotient rule to each base separately:

$$\\frac{2^8}{2^5} \\times \\frac{3^5}{3^3} = 2^{8-5} \\times 3^{5-3} = 2^3 \\times 3^2 = 8 \\times 9 = \\textbf{72}$$

### Example 2: Comparing Exponential Expressions

**Problem:** Which is greater: $2^{50}$ or $3^{30}$?

**Solution:** Find a way to compare them by expressing both with comparable exponents.

$2^{50} = (2^5)^{10} = 32^{10}$

$3^{30} = (3^3)^{10} = 27^{10}$

Since $32 > 27$, we have $32^{10} > 27^{10}$, so $\\textbf{2^{50} > 3^{30}}$.

> **Quick Method:** When comparing exponential expressions with different bases, try to rewrite them with the **same exponent**. Find a common factor of the exponents (here, 10) and express both as something raised to that power. The comparison then becomes trivial.

### Example 3: Fractional Exponents

**Problem:** What is the value of $64^{2/3}$?

**Solution:**

$$64^{2/3} = (\\sqrt[3]{64})^2 = 4^2 = \\textbf{16}$$

(Since $4^3 = 64$, the cube root of 64 is 4.)

### Example 4: Radicals and Rationalization

**Problem:** Simplify $\\frac{6}{\\sqrt{5} - \\sqrt{3}}$.

**Solution:** Multiply by the conjugate:

$$\\frac{6}{\\sqrt{5} - \\sqrt{3}} \\times \\frac{\\sqrt{5} + \\sqrt{3}}{\\sqrt{5} + \\sqrt{3}} = \\frac{6(\\sqrt{5} + \\sqrt{3})}{(\\sqrt{5})^2 - (\\sqrt{3})^2} = \\frac{6(\\sqrt{5} + \\sqrt{3})}{5 - 3} = \\frac{6(\\sqrt{5} + \\sqrt{3})}{2}$$

$$= \\textbf{3(\\sqrt{5} + \\sqrt{3})} = 3\\sqrt{5} + 3\\sqrt{3}$$

### Example 5: Converting to a Common Base

**Problem:** If $4^a \\times 8^b = 2^{10}$, and $a + b = 4$, what is the value of $a$?

**Solution:**

Rewrite everything in base 2:

$$4^a = (2^2)^a = 2^{2a}$$
$$8^b = (2^3)^b = 2^{3b}$$

So: $2^{2a} \\times 2^{3b} = 2^{10}$

Using the product rule: $2^{2a + 3b} = 2^{10}$

$$2a + 3b = 10$$

We also know $a + b = 4$, so $b = 4 - a$. Substitute:

$$2a + 3(4 - a) = 10$$
$$2a + 12 - 3a = 10$$
$$-a = -2$$
$$a = \\textbf{2}$$

> **Quick Method:** Always rewrite $4$, $8$, $16$, $32$, and $64$ as powers of 2 when they appear together. Similarly, rewrite $9$, $27$, and $81$ as powers of 3. Getting everything to a common base is the single most powerful technique for GMAT exponent problems.

### Example 6: Factoring Out Common Bases

**Problem:** What is the value of $\\frac{2^{20} + 2^{18}}{2^{18}}$?

**Solution:**

Factor $2^{18}$ out of the numerator:

$$\\frac{2^{18}(2^2 + 1)}{2^{18}} = 2^2 + 1 = 4 + 1 = \\textbf{5}$$

> **Common Trap:** Students sometimes try to cancel the $2^{18}$ directly from only one term in the numerator, writing $\\frac{2^{20} + 2^{18}}{2^{18}} = 2^2 + 2^{18}$. This is wrong because you must divide **every** term in the numerator by the denominator. Always factor first, then cancel.

### Example 7: Exponents Between 0 and 1

**Problem:** If $0 < x < 1$, which of the following lists the expressions in order from least to greatest?

(A) $x, x^2, \\sqrt{x}$
(B) $x^2, x, \\sqrt{x}$
(C) $\\sqrt{x}, x, x^2$
(D) $x^2, \\sqrt{x}, x$
(E) $\\sqrt{x}, x^2, x$

**Solution:**

Pick a test value. Let $x = \\frac{1}{4}$:

- $x = \\frac{1}{4} = 0.25$
- $x^2 = \\frac{1}{16} = 0.0625$
- $\\sqrt{x} = \\frac{1}{2} = 0.5$

Order from least to greatest: $x^2 < x < \\sqrt{x}$, i.e., $0.0625 < 0.25 < 0.5$.

Answer: **(B)**

> **Common Trap:** For bases between 0 and 1, exponent behavior is the **reverse** of what you expect. Higher powers make the number **smaller** (not bigger), and roots make the number **larger** (not smaller). This is the opposite of what happens for bases greater than 1. The GMAT exploits this reversal frequently.

### Example 8: Negative Exponent in an Expression

**Problem:** If $3^{-2} + 3^{-2} + 3^{-2} = 3^x$, what is $x$?

**Solution:**

$$3^{-2} + 3^{-2} + 3^{-2} = 3 \\cdot 3^{-2} = 3^1 \\cdot 3^{-2} = 3^{1 + (-2)} = 3^{-1}$$

So $x = \\textbf{-1}$.

> **Quick Method:** Adding $n$ copies of $a^k$ gives $n \\cdot a^k$. If $n$ itself is a power of $a$, you can combine: $a^m$ copies of $a^k$ equals $a^{m+k}$. Here, 3 copies of $3^{-2}$ equals $3^1 \\cdot 3^{-2} = 3^{-1}$.

---

## GMAT Tips

1. **Get all terms to the same base.** The most common GMAT exponent strategy is to express every term as a power of the same base. If you see $4^x$ and $8^y$, rewrite as $2^{2x}$ and $2^{3y}$. If you see $9^a$ and $27^b$, rewrite as $3^{2a}$ and $3^{3b}$.

2. **Do not confuse $(a^m)^n$ with $a^{m^n}$.** These are different:
   - $(2^3)^2 = 2^6 = 64$
   - $2^{3^2} = 2^9 = 512$

   The first multiplies the exponents; the second raises the exponent to a power first (exponentiation is right-associative).

3. **Be careful with negative bases.** $(-2)^4 = 16$ but $-2^4 = -(2^4) = -16$. The parentheses matter. On the GMAT, read carefully to determine whether the negative sign is part of the base.

4. **Know the behavior of exponents between 0 and 1.** For $0 < x < 1$:
   - $x^2 < x$ (squaring makes it smaller)
   - $\\sqrt{x} > x$ (taking a root makes it larger)
   - $x^n$ gets **smaller** as $n$ increases

   This is the opposite of what happens for bases greater than 1 and is a frequent GMAT trap.

5. **$\\sqrt{x^2} = |x|$, not $x$.** The square root function always returns a non-negative value. If $x$ could be negative, then $\\sqrt{x^2} = |x|$. For example, $\\sqrt{(-5)^2} = \\sqrt{25} = 5 = |-5|$.

6. **You cannot distribute exponents over addition or subtraction.**
   - $(a + b)^2 \\neq a^2 + b^2$ (you must FOIL or expand)
   - $\\sqrt{a^2 + b^2} \\neq a + b$

   These are among the most common algebraic errors tested on the GMAT.

7. **Factor out common bases in addition/subtraction.** When adding or subtracting terms with the same base, factor out the smaller power:
   - $2^{10} + 2^{10} = 2 \\cdot 2^{10} = 2^{11}$
   - $3^8 - 3^7 = 3^7(3 - 1) = 2 \\cdot 3^7$

   This technique comes up frequently in GMAT problem-solving questions.

8. **For Data Sufficiency,** remember that if $x^2 = 16$, then $x = 4$ or $x = -4$ (two possible values). But if $x^3 = 27$, then $x = 3$ (only one value, since cube roots are unique for real numbers). Even powers hide the sign; odd powers preserve it.

9. **Memorize key powers.** Knowing that $2^{10} = 1{,}024 \\approx 10^3$ is surprisingly useful for estimation. Similarly, knowing perfect squares up to $15^2 = 225$ and perfect cubes up to $6^3 = 216$ will speed up your calculations significantly.
`;
