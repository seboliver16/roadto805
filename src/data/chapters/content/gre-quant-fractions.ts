export const content = `
# Fractions, Decimals & Percents

Fractions, decimals, and percents are three different representations of the same idea — parts of a whole. The GRE tests your ability to convert fluently between these forms and to apply them in problem-solving contexts. Many GRE Quantitative questions are designed so that choosing the right representation (fraction vs. decimal vs. percent) makes the difference between a 30-second solution and a 3-minute struggle.

---

## Fraction Fundamentals

A fraction $\\frac{a}{b}$ represents $a$ parts out of $b$ equal parts, where $b \\neq 0$.

- **Numerator:** the top number ($a$)
- **Denominator:** the bottom number ($b$)

### Simplifying Fractions

Divide both numerator and denominator by their GCF.

$$\\frac{36}{48} = \\frac{36 \\div 12}{48 \\div 12} = \\frac{3}{4}$$

### Equivalent Fractions

Multiply or divide both numerator and denominator by the same nonzero number:

$$\\frac{2}{5} = \\frac{2 \\times 3}{5 \\times 3} = \\frac{6}{15}$$

---

## Fraction Operations

### Addition & Subtraction

Fractions must have a **common denominator** before adding or subtracting:

$$\\frac{a}{b} \\pm \\frac{c}{d} = \\frac{ad \\pm bc}{bd}$$

**Example:**

$$\\frac{2}{3} + \\frac{3}{5} = \\frac{2 \\times 5 + 3 \\times 3}{3 \\times 5} = \\frac{10 + 9}{15} = \\frac{19}{15}$$

### Multiplication

Multiply straight across:

$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$$

> **Strategy:** Cross-cancel before multiplying to keep numbers small. In $\\frac{4}{9} \\times \\frac{3}{8}$, cancel the 4 and 8 (common factor 4) and the 3 and 9 (common factor 3) to get $\\frac{1}{3} \\times \\frac{1}{2} = \\frac{1}{6}$.

### Division

Multiply by the reciprocal:

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$$

**Example:**

$$\\frac{5}{6} \\div \\frac{2}{3} = \\frac{5}{6} \\times \\frac{3}{2} = \\frac{15}{12} = \\frac{5}{4}$$

---

## Comparing Fractions

### Cross-Multiplication Method

To compare $\\frac{a}{b}$ and $\\frac{c}{d}$ (with $b, d > 0$): cross-multiply and compare $ad$ vs. $bc$.

$$\\frac{3}{7} \\;\\text{vs.}\\; \\frac{5}{11}: \\quad 3 \\times 11 = 33, \\quad 7 \\times 5 = 35$$

Since $33 < 35$, we have $\\frac{3}{7} < \\frac{5}{11}$.

### Benchmark Method

Compare each fraction to a benchmark like $\\frac{1}{2}$, $0$, or $1$.

**Example:** Compare $\\frac{7}{13}$ and $\\frac{5}{11}$.

$\\frac{7}{13} > \\frac{1}{2}$ (since $7 > 6.5$) and $\\frac{5}{11} < \\frac{1}{2}$ (since $5 < 5.5$). Therefore $\\frac{7}{13} > \\frac{5}{11}$.

> **Strategy:** On QC problems comparing fractions, the cross-multiplication method is the fastest approach. Always make sure denominators are positive before cross-multiplying.

---

## Converting Between Forms

### Fraction → Decimal

Divide the numerator by the denominator: $\\frac{3}{8} = 0.375$.

### Decimal → Fraction

Place the decimal over the appropriate power of 10 and simplify: $0.45 = \\frac{45}{100} = \\frac{9}{20}$.

### Fraction ↔ Percent

$$\\text{Fraction} \\to \\text{Percent: Multiply by 100}$$
$$\\text{Percent} \\to \\text{Fraction: Divide by 100}$$

**Example:** $\\frac{3}{5} = \\frac{3}{5} \\times 100\\% = 60\\%$

### Key Equivalences to Memorize

| Fraction | Decimal | Percent |
|----------|---------|---------|
| $\\frac{1}{2}$ | 0.5 | 50% |
| $\\frac{1}{3}$ | $0.\\overline{3}$ | 33.3% |
| $\\frac{1}{4}$ | 0.25 | 25% |
| $\\frac{1}{5}$ | 0.2 | 20% |
| $\\frac{1}{6}$ | $0.1\\overline{6}$ | 16.7% |
| $\\frac{1}{8}$ | 0.125 | 12.5% |
| $\\frac{2}{3}$ | $0.\\overline{6}$ | 66.7% |
| $\\frac{3}{4}$ | 0.75 | 75% |
| $\\frac{3}{8}$ | 0.375 | 37.5% |
| $\\frac{5}{8}$ | 0.625 | 62.5% |

---

## Repeating Decimals

A fraction with a denominator whose prime factors include anything other than 2 and 5 will produce a repeating decimal.

$$\\frac{1}{3} = 0.\\overline{3} = 0.333\\ldots$$

$$\\frac{1}{7} = 0.\\overline{142857}$$

$$\\frac{5}{6} = 0.8\\overline{3} = 0.8333\\ldots$$

### Converting a Repeating Decimal to a Fraction

**Example:** Convert $0.\\overline{36}$ to a fraction.

Let $x = 0.\\overline{36} = 0.363636\\ldots$

$$100x = 36.363636\\ldots$$

$$100x - x = 36$$

$$99x = 36 \\implies x = \\frac{36}{99} = \\frac{4}{11}$$

> **Common Trap:** $0.\\overline{9} = 1$. This is mathematically exact, not an approximation. Let $x = 0.\\overline{9}$, then $10x = 9.\\overline{9}$, so $9x = 9$, giving $x = 1$. The GRE may test this indirectly.

---

## Percents

A percent means "per hundred": $p\\% = \\frac{p}{100}$.

### Percent Of

$$p\\% \\text{ of } x = \\frac{p}{100} \\times x$$

**Example:** What is 35% of 200?

$$\\frac{35}{100} \\times 200 = 70$$

### Percent Increase & Decrease

$$\\text{Percent change} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100\\%$$

**Percent increase:** New $=$ Original $\\times (1 + r)$ where $r$ is the rate as a decimal.

**Percent decrease:** New $=$ Original $\\times (1 - r)$.

**Example:** A price increases from \\$80 to \\$100. What is the percent increase?

$$\\frac{100 - 80}{80} \\times 100\\% = \\frac{20}{80} \\times 100\\% = 25\\%$$

> **Common Trap:** Percent increase and percent decrease between the same two values are **not** the same. Going from 80 to 100 is a 25% increase, but going from 100 to 80 is a 20% decrease. The denominator changes because the "original" value changes.

### "Percent Of" vs. "Percent Change"

- "What percent of 80 is 20?" → $\\frac{20}{80} = 25\\%$
- "20 is what percent more than 80?" → This is asking for percent change, but note 20 < 80, so 20 is actually less. "20 is what percent less than 80?" → $\\frac{80 - 20}{80} = 75\\%$

> **Strategy:** Read GRE percent questions very carefully. "What percent of A is B" and "B is what percent greater than A" are fundamentally different questions with different denominators and setups.

---

## Compound Percent Change

When a quantity changes by $r_1\\%$ and then by $r_2\\%$, you **cannot** simply add the percentages. You must apply them sequentially.

$$\\text{Final} = \\text{Original} \\times (1 + r_1) \\times (1 + r_2)$$

**Example:** A stock increases 20% then decreases 20%. Is the net change 0%?

$$\\text{Final} = 100 \\times 1.20 \\times 0.80 = 100 \\times 0.96 = 96$$

The net change is a **4% decrease**, not 0%.

> **Common Trap:** An $x\\%$ increase followed by an $x\\%$ decrease (or vice versa) always results in a **net decrease**. The final value equals the original multiplied by $(1 + r)(1 - r) = 1 - r^2$, which is always less than 1 for $r \\neq 0$. This is one of the GRE's favorite tricks.

### Successive Percent Increases

A quantity that increases by $r\\%$ for $n$ periods:

$$\\text{Final} = \\text{Original} \\times (1 + r)^n$$

**Example:** A population grows 10% per year for 3 years from an initial population of 1,000.

$$1{,}000 \\times (1.10)^3 = 1{,}000 \\times 1.331 = 1{,}331$$

---

## Worked Examples

### Example 1: Fraction Computation

**Problem:** What is $\\frac{3}{4} - \\frac{2}{3} + \\frac{1}{6}$?

**Solution:** The LCD of 4, 3, and 6 is 12.

$$\\frac{3}{4} = \\frac{9}{12}, \\quad \\frac{2}{3} = \\frac{8}{12}, \\quad \\frac{1}{6} = \\frac{2}{12}$$

$$\\frac{9}{12} - \\frac{8}{12} + \\frac{2}{12} = \\frac{9 - 8 + 2}{12} = \\frac{3}{12} = \\textbf{\\frac{1}{4}}$$

### Example 2: Compound Percent Change

**Problem:** A shirt is marked up 50% from its wholesale cost, then sold at a 40% discount off the marked price. The selling price is what percent of the wholesale cost?

**Solution:**

Let wholesale cost $= 100$.

Marked price $= 100 \\times 1.50 = 150$.

Selling price $= 150 \\times 0.60 = 90$.

The selling price is $\\textbf{90\\%}$ of the wholesale cost — a 10% loss.

### Example 3: QC Fraction Comparison

**Column A:** $\\frac{7}{12}$
**Column B:** $\\frac{11}{18}$

**Solution:** Cross-multiply: $7 \\times 18 = 126$ and $12 \\times 11 = 132$. Since $126 < 132$, Column A $<$ Column B. Answer: **Column B is greater.**

---

## GRE Question Type Tips

1. **Quantitative Comparison:** Fraction comparison is a QC staple. Use cross-multiplication for speed. When fractions contain variables, test extreme values (0, 1, large numbers, negatives).

2. **Problem Solving:** Percent change word problems dominate PS. Set up the multiplier approach: "increased by 30%" means "multiply by 1.3." Chain multipliers for successive changes.

3. **Numeric Entry:** Fraction and decimal conversion questions often appear as NE. Remember that NE answers can be entered as fractions — you do not need to convert to decimals if the fraction form is simpler.

4. **Estimation:** When answer choices are spread apart, estimate. $\\frac{7}{13} \\approx \\frac{1}{2}$ and $49\\% \\approx \\frac{1}{2}$ — quick benchmarks can eliminate 3-4 answer choices instantly.
`;
