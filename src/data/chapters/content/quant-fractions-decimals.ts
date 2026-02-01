export const content = `
# Fractions & Decimals

Fractions and decimals are fundamental to nearly every GMAT Quantitative topic. While these concepts may seem elementary, the GMAT tests them in surprisingly nuanced ways. A strong command of fraction arithmetic and decimal conversions will not only help you solve fraction-specific problems but will also speed up your work on percents, ratios, algebra, and word problems.

---

## Fraction Basics

A **fraction** represents a part of a whole. It is written as $\\frac{a}{b}$, where:

- $a$ is the **numerator** (the number of parts you have)
- $b$ is the **denominator** (the number of equal parts the whole is divided into)
- The denominator can **never** be zero.

### Types of Fractions

- **Proper fraction:** The numerator is less than the denominator. Example: $\\frac{3}{7}$ (value is between 0 and 1)
- **Improper fraction:** The numerator is greater than or equal to the denominator. Example: $\\frac{9}{4}$ (value is 1 or greater)
- **Mixed number:** A whole number combined with a proper fraction. Example: $2\\frac{1}{4}$

**Converting between improper fractions and mixed numbers:**

$$\\frac{9}{4} = 2\\frac{1}{4} \\quad \\text{because } 9 \\div 4 = 2 \\text{ remainder } 1$$

$$2\\frac{1}{4} = \\frac{(2 \\times 4) + 1}{4} = \\frac{9}{4}$$

**GMAT tip:** On the GMAT, always work with improper fractions rather than mixed numbers. Improper fractions are easier to manipulate in calculations.

---

## Simplifying Fractions

A fraction is in **simplest form** (or **lowest terms**) when the numerator and denominator share no common factor other than 1.

**Method:** Divide both the numerator and denominator by their Greatest Common Divisor (GCD).

$$\\frac{36}{48} = \\frac{36 \\div 12}{48 \\div 12} = \\frac{3}{4}$$

The GCD of 36 and 48 is 12.

**Quick simplification technique:** Look for common small factors and cancel step by step:

$$\\frac{36}{48} = \\frac{18}{24} = \\frac{9}{12} = \\frac{3}{4}$$

---

## Adding and Subtracting Fractions

To add or subtract fractions, you need a **common denominator**.

### Same Denominator

Simply add or subtract the numerators:

$$\\frac{2}{7} + \\frac{3}{7} = \\frac{2 + 3}{7} = \\frac{5}{7}$$

### Different Denominators

Find the **Least Common Denominator (LCD)**, which is the LCM of the denominators.

**Example:** $\\frac{2}{3} + \\frac{3}{5}$

- LCD of 3 and 5 is 15.
- Convert: $\\frac{2}{3} = \\frac{10}{15}$ and $\\frac{3}{5} = \\frac{9}{15}$
- Add: $\\frac{10}{15} + \\frac{9}{15} = \\frac{19}{15}$

**The "bowtie" shortcut** for adding two fractions quickly:

$$\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$$

**Example:** $\\frac{2}{3} + \\frac{3}{5} = \\frac{(2)(5) + (3)(3)}{(3)(5)} = \\frac{10 + 9}{15} = \\frac{19}{15}$

This method always works but may not produce the simplest form, so simplify afterward if needed.

---

## Multiplying Fractions

Multiply the numerators together and the denominators together:

$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$

**Example:** $\\frac{3}{4} \\times \\frac{5}{7} = \\frac{15}{28}$

**Cross-cancellation (simplify before multiplying):** Before multiplying, cancel any common factors between a numerator and a denominator.

$$\\frac{8}{15} \\times \\frac{5}{12}$$

- 8 and 12 share a factor of 4: replace with 2 and 3.
- 5 and 15 share a factor of 5: replace with 1 and 3.

$$= \\frac{2}{3} \\times \\frac{1}{3} = \\frac{2}{9}$$

This technique keeps numbers small and reduces the chance of arithmetic errors.

---

## Dividing Fractions

To divide by a fraction, **multiply by its reciprocal** (flip the second fraction):

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$

**Example:** $\\frac{3}{4} \\div \\frac{2}{5} = \\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8}$

**Important:** The reciprocal of a whole number $n$ is $\\frac{1}{n}$. So dividing by 3 is the same as multiplying by $\\frac{1}{3}$.

---

## Converting Fractions to Decimals

To convert a fraction to a decimal, **divide the numerator by the denominator**.

$$\\frac{3}{8} = 3 \\div 8 = 0.375$$

### Terminating vs. Repeating Decimals

- A fraction in lowest terms produces a **terminating decimal** if and only if the denominator's only prime factors are 2 and/or 5.
- Otherwise, the decimal **repeats**.

**Examples:**
- $\\frac{7}{8} = \\frac{7}{2^3}$ — terminates: $0.875$
- $\\frac{7}{20} = \\frac{7}{2^2 \\times 5}$ — terminates: $0.35$
- $\\frac{1}{3}$ — repeats: $0.333\\ldots = 0.\\overline{3}$
- $\\frac{1}{6} = \\frac{1}{2 \\times 3}$ — repeats: $0.1\\overline{6}$

### Converting Decimals to Fractions

Write the decimal as a fraction with a power of 10 in the denominator, then simplify.

$$0.375 = \\frac{375}{1000} = \\frac{3}{8}$$

For repeating decimals:
- $0.\\overline{3} = \\frac{1}{3}$
- $0.\\overline{12} = \\frac{12}{99} = \\frac{4}{33}$

**General rule:** For a repeating block of $n$ digits, the fraction is $\\frac{\\text{repeating block}}{\\underbrace{99\\ldots9}_{n \\text{ nines}}}$.

---

## Common Fraction-Decimal-Percent Equivalencies

Memorizing these will save you valuable time on the GMAT:

| Fraction | Decimal | Percent |
|----------|---------|---------|
| $\\frac{1}{2}$ | $0.5$ | $50\\%$ |
| $\\frac{1}{3}$ | $0.\\overline{3}$ | $33.\\overline{3}\\%$ |
| $\\frac{2}{3}$ | $0.\\overline{6}$ | $66.\\overline{6}\\%$ |
| $\\frac{1}{4}$ | $0.25$ | $25\\%$ |
| $\\frac{3}{4}$ | $0.75$ | $75\\%$ |
| $\\frac{1}{5}$ | $0.2$ | $20\\%$ |
| $\\frac{2}{5}$ | $0.4$ | $40\\%$ |
| $\\frac{3}{5}$ | $0.6$ | $60\\%$ |
| $\\frac{4}{5}$ | $0.8$ | $80\\%$ |
| $\\frac{1}{6}$ | $0.1\\overline{6}$ | $16.\\overline{6}\\%$ |
| $\\frac{5}{6}$ | $0.8\\overline{3}$ | $83.\\overline{3}\\%$ |
| $\\frac{1}{8}$ | $0.125$ | $12.5\\%$ |
| $\\frac{3}{8}$ | $0.375$ | $37.5\\%$ |
| $\\frac{5}{8}$ | $0.625$ | $62.5\\%$ |
| $\\frac{7}{8}$ | $0.875$ | $87.5\\%$ |
| $\\frac{1}{9}$ | $0.\\overline{1}$ | $11.\\overline{1}\\%$ |
| $\\frac{1}{10}$ | $0.1$ | $10\\%$ |

---

## Comparing Fractions

When you need to determine which of two fractions is larger, use one of these strategies:

### Method 1: Cross-Multiplication

To compare $\\frac{a}{b}$ and $\\frac{c}{d}$ (assuming positive denominators), cross-multiply:

- If $ad > bc$, then $\\frac{a}{b} > \\frac{c}{d}$
- If $ad < bc$, then $\\frac{a}{b} < \\frac{c}{d}$

**Example:** Compare $\\frac{5}{7}$ and $\\frac{7}{10}$.

$5 \\times 10 = 50$ vs. $7 \\times 7 = 49$. Since $50 > 49$, we have $\\frac{5}{7} > \\frac{7}{10}$.

### Method 2: Common Denominator

Convert to the same denominator, then compare numerators.

### Method 3: Benchmark Values

Compare each fraction to a known benchmark like $\\frac{1}{2}$, $1$, or another convenient value.

**Example:** Compare $\\frac{3}{7}$ and $\\frac{5}{9}$.

- $\\frac{3}{7}$ is less than $\\frac{1}{2}$ (since $3 < 3.5$)
- $\\frac{5}{9}$ is greater than $\\frac{1}{2}$ (since $5 > 4.5$)

Therefore $\\frac{3}{7} < \\frac{5}{9}$.

### Method 4: Convert to Decimals

When other methods are cumbersome, divide to get decimal approximations.

---

## Key Formulas

- **Adding fractions (bowtie):** $\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$
- **Multiplying fractions:** $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$
- **Dividing fractions:** $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$
- **Terminating decimal test:** Denominator (in lowest terms) has only factors of 2 and 5.
- **Repeating decimal to fraction:** $0.\\overline{d_1 d_2 \\ldots d_n} = \\frac{d_1 d_2 \\ldots d_n}{\\underbrace{99\\ldots9}_{n}}$

---

## Worked Examples

### Example 1: Fraction Arithmetic

**Problem:** What is the value of $\\frac{2}{3} + \\frac{5}{6} - \\frac{1}{4}$?

**Solution:** Find the LCD of 3, 6, and 4. The LCM is 12.

$$\\frac{2}{3} = \\frac{8}{12}, \\quad \\frac{5}{6} = \\frac{10}{12}, \\quad \\frac{1}{4} = \\frac{3}{12}$$

$$\\frac{8}{12} + \\frac{10}{12} - \\frac{3}{12} = \\frac{8 + 10 - 3}{12} = \\frac{15}{12} = \\frac{5}{4} = \\textbf{1.25}$$

### Example 2: Fraction Division in a Word Problem

**Problem:** A recipe calls for $\\frac{3}{4}$ cup of sugar. If you only have a $\\frac{1}{8}$-cup measuring scoop, how many scoops do you need?

**Solution:** Divide the total amount by the scoop size:

$$\\frac{3}{4} \\div \\frac{1}{8} = \\frac{3}{4} \\times \\frac{8}{1} = \\frac{24}{4} = \\textbf{6 scoops}$$

### Example 3: Terminating vs. Repeating Decimal

**Problem:** Which of the following fractions, when converted to a decimal, produces a terminating decimal?

(A) $\\frac{1}{6}$ (B) $\\frac{7}{12}$ (C) $\\frac{3}{15}$ (D) $\\frac{5}{14}$ (E) $\\frac{11}{30}$

**Solution:** A fraction in lowest terms terminates if and only if the denominator's prime factors are limited to 2 and 5.

- (A) $\\frac{1}{6}$: denominator $6 = 2 \\times 3$. Contains 3, so **repeats**.
- (B) $\\frac{7}{12}$: denominator $12 = 2^2 \\times 3$. Contains 3, so **repeats**.
- (C) $\\frac{3}{15} = \\frac{1}{5}$: denominator $5$. Only factor is 5, so **terminates**. ✓
- (D) $\\frac{5}{14}$: denominator $14 = 2 \\times 7$. Contains 7, so **repeats**.
- (E) $\\frac{11}{30}$: denominator $30 = 2 \\times 3 \\times 5$. Contains 3, so **repeats**.

The answer is **(C)**.

### Example 4: Comparing Fractions

**Problem:** Which is greater: $\\frac{17}{31}$ or $\\frac{19}{35}$?

**Solution:** Use cross-multiplication:

$17 \\times 35 = 595$ vs. $31 \\times 19 = 589$

Since $595 > 589$, we have $\\frac{17}{31} > \\frac{19}{35}$.

---

## GMAT Tips

1. **Always simplify early.** When multiplying fractions, use cross-cancellation before multiplying to keep numbers manageable. When adding or subtracting, simplify the result at the end.

2. **Convert mixed numbers immediately.** If a problem presents mixed numbers like $3\\frac{2}{5}$, convert to $\\frac{17}{5}$ before doing any calculations.

3. **Use the "bowtie" for quick addition.** The cross-multiplication method $\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$ is fast and reliable, especially under time pressure.

4. **Know your common equivalencies cold.** Being able to instantly recognize that $0.375 = \\frac{3}{8}$ or that $\\frac{5}{6} \\approx 0.833$ saves critical seconds across the exam.

5. **When comparing fractions, choose the fastest method.** Cross-multiplication is usually the quickest for two fractions. The benchmark method is best when fractions are close to a familiar value (like $\\frac{1}{2}$ or 1).

6. **Fractions are often easier than decimals.** On the GMAT, working with fractions is usually faster and more accurate than converting everything to decimals, especially when values like $\\frac{1}{3}$ or $\\frac{1}{7}$ are involved (since they produce non-terminating decimals).

7. **Watch for the "which is greater" trap with negatives.** When comparing negative fractions, the rules flip. $-\\frac{1}{3} > -\\frac{1}{2}$ because $-\\frac{1}{3}$ is closer to zero. Always think about position on the number line.

8. **On Data Sufficiency,** remember that knowing a fraction's value is not the same as knowing the individual numerator and denominator. $\\frac{2}{3}$ and $\\frac{4}{6}$ are the same value but have different numerators and denominators.
`;
