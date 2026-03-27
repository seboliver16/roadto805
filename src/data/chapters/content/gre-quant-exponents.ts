export const content = `
# Exponents & Roots

Exponents and roots are foundational to GRE Quantitative Reasoning. They appear in algebra, number properties, and geometry. The GRE frequently tests exponent rules in disguised forms — comparing columns with different bases, simplifying complex expressions, or embedding exponent logic inside word problems. Once you internalize the seven core rules, most exponent questions become fast and mechanical.

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

**Sign rules:**
- Positive base → always positive.
- Negative base, even exponent → positive.
- Negative base, odd exponent → negative.

> **Common Trap:** $(-3)^4 = 81$ but $-3^4 = -(3^4) = -81$. Without parentheses, the exponent applies only to $3$, and the negative sign is applied afterward. The GRE tests this distinction.

---

## The Seven Exponent Rules

### 1. Product Rule (Same Base)

$$a^m \\times a^n = a^{m+n}$$

**Example:** $2^3 \\times 2^5 = 2^{3+5} = 2^8 = 256$

> **Common Trap:** This rule requires the **same base**. You cannot simplify $2^3 \\times 3^5$ by adding exponents. If bases differ, you must find a common base or compute directly.

### 2. Quotient Rule (Same Base)

$$\\frac{a^m}{a^n} = a^{m-n}$$

**Example:** $\\frac{5^7}{5^4} = 5^{7-4} = 5^3 = 125$

### 3. Power Rule (Power of a Power)

$$(a^m)^n = a^{mn}$$

**Example:** $(3^2)^4 = 3^{2 \\times 4} = 3^8 = 6{,}561$

> **Common Trap:** $(a^m)^n \\neq a^{m^n}$. Compare: $(2^3)^2 = 2^6 = 64$ versus $2^{3^2} = 2^9 = 512$. The first multiplies exponents; the second evaluates the exponent tower from the top down.

### 4. Power of a Product

$$(ab)^n = a^n \\times b^n$$

**Example:** $(2 \\times 5)^3 = 2^3 \\times 5^3 = 8 \\times 125 = 1{,}000$

### 5. Power of a Quotient

$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$

**Example:** $\\left(\\frac{3}{4}\\right)^2 = \\frac{9}{16}$

### 6. Zero Exponent

$$a^0 = 1 \\quad (a \\neq 0)$$

**Note:** $0^0$ is undefined on the GRE.

### 7. Negative Exponent

$$a^{-n} = \\frac{1}{a^n}$$

**Examples:**
- $2^{-3} = \\frac{1}{8}$
- $\\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$

> **Strategy:** To handle a negative exponent on a fraction, flip the fraction and make the exponent positive: $\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$.

---

## Fractional Exponents and Roots

$$a^{1/n} = \\sqrt[n]{a}$$

$$a^{m/n} = (\\sqrt[n]{a})^m = \\sqrt[n]{a^m}$$

**Examples:**
- $27^{1/3} = \\sqrt[3]{27} = 3$
- $8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$
- $16^{3/4} = (\\sqrt[4]{16})^3 = 2^3 = 8$

> **Strategy:** When evaluating $a^{m/n}$, always take the root first, then raise to the power. This keeps numbers small. For $64^{2/3}$: cube root of 64 is 4, then $4^2 = 16$.

### Square Roots

- $\\sqrt{a}$ is defined for $a \\ge 0$.
- $\\sqrt{a}$ denotes the **non-negative** root: $\\sqrt{25} = 5$, not $\\pm 5$.
- But the equation $x^2 = 25$ has **two** solutions: $x = \\pm 5$.

> **Common Trap:** The symbol $\\sqrt{25} = 5$ (positive only), but solving $x^2 = 25$ gives $x = \\pm 5$ (two solutions). The GRE exploits this distinction, especially in QC problems.

### Cube Roots

Cube roots are defined for all real numbers: $\\sqrt[3]{-8} = -2$.

---

## Simplifying Radicals

Factor out perfect squares:

$$\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$$

**More examples:**
- $\\sqrt{50} = 5\\sqrt{2}$
- $\\sqrt{48} = 4\\sqrt{3}$
- $\\sqrt{200} = 10\\sqrt{2}$

### Operations with Radicals

$$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}, \\qquad \\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$$

You can only add/subtract radicals with the **same radicand**:

$$3\\sqrt{5} + 7\\sqrt{5} = 10\\sqrt{5}$$

> **Common Trap:** $\\sqrt{2} + \\sqrt{3} \\neq \\sqrt{5}$. You cannot add numbers under separate radicals. Similarly, $\\sqrt{9 + 16} = 5$ but $\\sqrt{9} + \\sqrt{16} = 7$.

---

## Rationalizing Denominators

### Simple Denominator

$$\\frac{5}{\\sqrt{3}} = \\frac{5\\sqrt{3}}{3}$$

### Conjugate Method

$$\\frac{1}{3 + \\sqrt{2}} \\times \\frac{3 - \\sqrt{2}}{3 - \\sqrt{2}} = \\frac{3 - \\sqrt{2}}{9 - 2} = \\frac{3 - \\sqrt{2}}{7}$$

Use the conjugate ($a + \\sqrt{b} \\to a - \\sqrt{b}$) to eliminate the radical via the difference of squares: $(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b$.

---

## Common Bases Strategy

When you see powers of 4, 8, 16, 32, or 64, rewrite them as powers of 2. When you see 9, 27, or 81, rewrite as powers of 3.

**Example:** If $4^x = 8^{y+1}$, express $x$ in terms of $y$.

$$(2^2)^x = (2^3)^{y+1} \\implies 2^{2x} = 2^{3(y+1)}$$

$$2x = 3y + 3 \\implies x = \\frac{3y + 3}{2}$$

> **Strategy:** Getting everything to a common base is the single most powerful technique for GRE exponent problems. Whenever you see multiple bases that are powers of the same number, convert immediately.

---

## Comparing Expressions with Different Bases

**Example:** Which is greater: $2^{50}$ or $3^{30}$?

Rewrite with a common exponent:

$$2^{50} = (2^5)^{10} = 32^{10}, \\qquad 3^{30} = (3^3)^{10} = 27^{10}$$

Since $32 > 27$, we have $32^{10} > 27^{10}$, so $\\textbf{2^{50} > 3^{30}}$.

### Behavior Between 0 and 1

For $0 < x < 1$: $x^2 < x < \\sqrt{x}$.

Higher powers make the number **smaller**; roots make it **larger**. This is the **opposite** of behavior for bases greater than 1.

**Example:** If $0 < x < 1$, rank $x$, $x^2$, $\\sqrt{x}$ from least to greatest.

Pick $x = \\frac{1}{4}$: $x^2 = \\frac{1}{16}$, $\\sqrt{x} = \\frac{1}{2}$.

Order: $x^2 < x < \\sqrt{x}$, i.e., $\\frac{1}{16} < \\frac{1}{4} < \\frac{1}{2}$.

---

## Worked Examples

### Example 1: Factoring Out Common Bases

**Problem:** What is $\\frac{2^{20} + 2^{18}}{2^{18}}$?

Factor $2^{18}$ from the numerator:

$$\\frac{2^{18}(2^2 + 1)}{2^{18}} = 4 + 1 = \\textbf{5}$$

> **Common Trap:** You must divide **every** term in the numerator by the denominator. Do not cancel $2^{18}$ from only one term.

### Example 2: Adding Like Bases

**Problem:** If $3^{-2} + 3^{-2} + 3^{-2} = 3^x$, what is $x$?

$$3 \\cdot 3^{-2} = 3^1 \\cdot 3^{-2} = 3^{-1}$$

So $x = \\textbf{-1}$.

### Example 3: QC with Variable Exponents

**Column A:** $(-1)^{n}$ where $n$ is a positive integer
**Column B:** $(-1)^{n+1}$

If $n$ is even: Column A $= 1$, Column B $= -1$. A > B.
If $n$ is odd: Column A $= -1$, Column B $= 1$. B > A.

The relationship changes depending on $n$, so the answer is **(D) — the relationship cannot be determined.**

### Example 4: Radical Simplification

**Problem:** Simplify $\\frac{6}{\\sqrt{5} - \\sqrt{3}}$.

Multiply by the conjugate:

$$\\frac{6(\\sqrt{5} + \\sqrt{3})}{(\\sqrt{5})^2 - (\\sqrt{3})^2} = \\frac{6(\\sqrt{5} + \\sqrt{3})}{2} = \\textbf{3\\sqrt{5} + 3\\sqrt{3}}$$

---

## Key Formulas

$$\\boxed{a^m \\times a^n = a^{m+n}} \\qquad \\boxed{\\frac{a^m}{a^n} = a^{m-n}} \\qquad \\boxed{(a^m)^n = a^{mn}}$$

$$\\boxed{a^0 = 1} \\qquad \\boxed{a^{-n} = \\frac{1}{a^n}} \\qquad \\boxed{a^{m/n} = \\sqrt[n]{a^m}}$$

$$\\boxed{\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}} \\qquad \\boxed{\\sqrt{x^2} = |x|}$$

---

## GRE Question Type Tips

1. **Quantitative Comparison:** QC exponent problems love ambiguity around sign and magnitude. If a base could be between 0 and 1 or greater than 1, test both cases. If the base could be negative, test even and odd exponents. When results differ, the answer is **(D)**.

2. **Problem Solving:** Look for opportunities to convert all terms to the same base. Factor out common powers in addition/subtraction expressions. Cross off answer choices using estimation.

3. **Numeric Entry:** Fractional exponent calculations and radical simplification appear frequently. Remember $\\sqrt{x^2} = |x|$, not $x$. Double-check your arithmetic since there are no choices to guide you.

4. **Key values to memorize:** Powers of 2 through $2^{10} = 1{,}024$, powers of 3 through $3^5 = 243$, powers of 5 through $5^4 = 625$, and perfect squares through $15^2 = 225$.
`;
