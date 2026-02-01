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

---

## Exponent Rules

These seven rules are the foundation for nearly every exponent problem on the GMAT. Memorize them thoroughly.

### 1. Product Rule (Same Base)

When multiplying powers with the same base, **add** the exponents:

$$a^m \\times a^n = a^{m+n}$$

**Example:** $2^3 \\times 2^5 = 2^{3+5} = 2^8 = 256$

### 2. Quotient Rule (Same Base)

When dividing powers with the same base, **subtract** the exponents:

$$\\frac{a^m}{a^n} = a^{m-n}$$

**Example:** $\\frac{5^7}{5^4} = 5^{7-4} = 5^3 = 125$

### 3. Power Rule (Power of a Power)

When raising a power to another power, **multiply** the exponents:

$$(a^m)^n = a^{mn}$$

**Example:** $(3^2)^4 = 3^{2 \\times 4} = 3^8 = 6{,}561$

### 4. Power of a Product

$$({ab})^n = a^n \\times b^n$$

**Example:** $(2 \\times 5)^3 = 2^3 \\times 5^3 = 8 \\times 125 = 1{,}000$

### 5. Power of a Quotient

$$(\\frac{a}{b})^n = \\frac{a^n}{b^n}$$

**Example:** $(\\frac{3}{4})^2 = \\frac{3^2}{4^2} = \\frac{9}{16}$

### 6. Zero Exponent

Any nonzero base raised to the power of zero equals 1:

$$a^0 = 1 \\quad (a \\neq 0)$$

**Examples:** $5^0 = 1$, $(-7)^0 = 1$, $(\\frac{3}{4})^0 = 1$

**Note:** $0^0$ is undefined on the GMAT (and in most mathematical contexts the GMAT cares about).

### 7. Negative Exponent

A negative exponent means "take the reciprocal":

$$a^{-n} = \\frac{1}{a^n}$$

**Examples:**
- $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$
- $\\frac{1}{5^{-2}} = 5^2 = 25$
- $(\\frac{2}{3})^{-2} = (\\frac{3}{2})^2 = \\frac{9}{4}$

---

## Fractional Exponents and Roots

Fractional exponents connect exponents to roots:

$$a^{1/n} = \\sqrt[n]{a}$$

$$a^{m/n} = (\\sqrt[n]{a})^m = \\sqrt[n]{a^m}$$

**Examples:**
- $27^{1/3} = \\sqrt[3]{27} = 3$
- $8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$
- $16^{3/4} = (\\sqrt[4]{16})^3 = 2^3 = 8$

### Square Roots

The **square root** $\\sqrt{a} = a^{1/2}$ is the most common root on the GMAT.

**Key properties:**
- $\\sqrt{a}$ is defined for $a \\ge 0$ (in real numbers).
- $\\sqrt{a}$ always refers to the **non-negative** root. So $\\sqrt{25} = 5$, not $\\pm 5$.
- However, the equation $x^2 = 25$ has two solutions: $x = 5$ or $x = -5$. The GMAT tests this distinction.

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

### Multiplying and Dividing Radicals

$$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$$

$$\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$$

**Example:** $\\sqrt{3} \\times \\sqrt{12} = \\sqrt{36} = 6$

### Adding and Subtracting Radicals

You can only add or subtract radicals with the **same radicand** (the number under the radical):

$$3\\sqrt{5} + 7\\sqrt{5} = 10\\sqrt{5}$$

$$4\\sqrt{3} - \\sqrt{3} = 3\\sqrt{3}$$

You **cannot** simplify $\\sqrt{2} + \\sqrt{3}$ into a single term.

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

- **Product rule:** $a^m \\times a^n = a^{m+n}$
- **Quotient rule:** $\\frac{a^m}{a^n} = a^{m-n}$
- **Power rule:** $(a^m)^n = a^{mn}$
- **Zero exponent:** $a^0 = 1$ (for $a \\neq 0$)
- **Negative exponent:** $a^{-n} = \\frac{1}{a^n}$
- **Fractional exponent:** $a^{m/n} = \\sqrt[n]{a^m}$
- **Radical multiplication:** $\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$

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
