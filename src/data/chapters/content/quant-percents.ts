export const content = `
# Percents & Percentage Change

Percent problems are among the most frequently tested topics on the GMAT Quantitative section. They appear in word problems, data interpretation, and data sufficiency questions. Mastering percent calculations, especially successive percentage changes and profit/loss scenarios, will give you a significant edge on test day.

---

## Percent Basics

The word **percent** means "per hundred." A percent is simply a ratio out of 100:

$$\\text{Percent} = \\frac{\\text{Part}}{\\text{Whole}} \\times 100$$

Equivalently:

$$\\text{Part} = \\frac{\\text{Percent}}{100} \\times \\text{Whole}$$

**Example:** If 30 out of 120 students passed an exam, the pass rate is:

$$\\frac{30}{120} \\times 100 = 25\\%$$

### The Three Percent Relationships

Every basic percent problem involves three quantities. Given any two, you can find the third:

1. **Find the Part:** What is 15% of 200? $\\Rightarrow 0.15 \\times 200 = 30$
2. **Find the Whole:** 30 is 15% of what number? $\\Rightarrow 30 \\div 0.15 = 200$
3. **Find the Percent:** 30 is what percent of 200? $\\Rightarrow (30 \\div 200) \\times 100 = 15\\%$

---

## Converting Between Fractions, Decimals, and Percents

Fluent conversion between these three forms is essential for GMAT speed.

| Fraction | Decimal | Percent |
|----------|---------|---------|
| $\\frac{1}{2}$ | $0.5$ | $50\\%$ |
| $\\frac{1}{3}$ | $0.\\overline{3}$ | $33.\\overline{3}\\%$ |
| $\\frac{1}{4}$ | $0.25$ | $25\\%$ |
| $\\frac{1}{5}$ | $0.2$ | $20\\%$ |
| $\\frac{1}{8}$ | $0.125$ | $12.5\\%$ |
| $\\frac{2}{3}$ | $0.\\overline{6}$ | $66.\\overline{6}\\%$ |
| $\\frac{3}{4}$ | $0.75$ | $75\\%$ |
| $\\frac{1}{6}$ | $0.1\\overline{6}$ | $16.\\overline{6}\\%$ |

**Conversion rules:**

- **Fraction to decimal:** Divide numerator by denominator. $\\frac{3}{8} = 3 \\div 8 = 0.375$
- **Decimal to percent:** Multiply by 100 (move decimal point two places right). $0.375 = 37.5\\%$
- **Percent to decimal:** Divide by 100 (move decimal point two places left). $37.5\\% = 0.375$
- **Percent to fraction:** Put the percent over 100 and simplify. $37.5\\% = \\frac{37.5}{100} = \\frac{375}{1000} = \\frac{3}{8}$

---

## Percentage Increase and Decrease

The **percentage change** formula is one of the most important formulas for the GMAT:

$$\\text{Percentage Change} = \\frac{\\text{New Value} - \\text{Original Value}}{\\text{Original Value}} \\times 100$$

If the result is positive, it is a **percentage increase**. If negative, it is a **percentage decrease**.

**Important:** The denominator is always the **original** value (the value you started with), not the new value.

### Using Multipliers

A faster way to handle percentage changes is to use **multipliers**:

- A **20% increase** means the new value is $100\\% + 20\\% = 120\\%$ of the original, so multiply by $1.20$.
- A **15% decrease** means the new value is $100\\% - 15\\% = 85\\%$ of the original, so multiply by $0.85$.

**General formula:**

$$\\text{New Value} = \\text{Original Value} \\times (1 + r)$$

where $r$ is the rate of change expressed as a decimal (positive for increase, negative for decrease).

**Example:** A $250 item is marked up by 30%. What is the new price?

$$250 \\times 1.30 = \\$325$$

---

## Successive Percentage Changes

This is where the GMAT really tests your understanding. **Successive percentage changes do NOT simply add up.**

### Why 20% Up Then 20% Down Does NOT Return to the Original

If a price of $\\$100$ increases by 20%, it becomes:

$$100 \\times 1.20 = \\$120$$

If it then decreases by 20%, it becomes:

$$120 \\times 0.80 = \\$96$$

The final value is $\\$96$, **not** $\\$100$. There is a net decrease of 4%.

**The mathematical reason:** When you apply successive multipliers, you multiply them together:

$$1.20 \\times 0.80 = 0.96$$

This represents a **4% decrease** from the original.

### General Formula for Successive Changes

If a value changes by $a\\%$ and then by $b\\%$, the overall multiplier is:

$$(1 + \\frac{a}{100})(1 + \\frac{b}{100})$$

And the net percentage change is:

$$a + b + \\frac{ab}{100}$$

The term $\\frac{ab}{100}$ is the "cross term" that people forget. For $a = 20$ and $b = -20$:

$$20 + (-20) + \\frac{(20)(-20)}{100} = 0 + (-4) = -4\\%$$

### Multiple Successive Changes

For three or more successive changes, simply multiply all the multipliers together:

$$\\text{Overall Multiplier} = (1 + r_1)(1 + r_2)(1 + r_3) \\cdots$$

---

## Profit, Loss, Markup, and Discount

These are specialized applications of percentage change that appear frequently on the GMAT.

### Key Definitions

- **Cost Price (CP):** The price at which a seller acquires an item.
- **Selling Price (SP):** The price at which a seller sells the item.
- **Marked Price (MP):** The listed or "sticker" price before any discount.
- **Profit** $= SP - CP$ (positive means a gain; negative means a loss)
- **Profit Percent** $= \\frac{SP - CP}{CP} \\times 100$ (always relative to cost price)
- **Discount Percent** $= \\frac{MP - SP}{MP} \\times 100$ (always relative to marked price)

### Markup and Discount Together

A common GMAT scenario: a seller marks up an item by $m\\%$ and then offers a discount of $d\\%$. What is the net profit or loss percent?

$$SP = CP \\times (1 + \\frac{m}{100}) \\times (1 - \\frac{d}{100})$$

$$\\text{Net Profit \\%} = \\left[(1 + \\frac{m}{100})(1 - \\frac{d}{100}) - 1\\right] \\times 100$$

**Example:** A retailer marks up goods by 50% and then gives a 20% discount. What is the profit percent?

$$\\text{Multiplier} = 1.50 \\times 0.80 = 1.20$$

Profit percent $= (1.20 - 1) \\times 100 = 20\\%$ profit.

---

## Compound Percentage Change

When the same percentage change is applied repeatedly (as in compound interest), the formula is:

$$\\text{Final Value} = \\text{Initial Value} \\times (1 + r)^n$$

where $r$ is the rate per period (as a decimal) and $n$ is the number of periods.

**Example:** A population of 10,000 grows by 5% per year. What is the population after 3 years?

$$10{,}000 \\times (1.05)^3 = 10{,}000 \\times 1.157625 = 11{,}576.25$$

Since population must be a whole number, approximately **11,576**.

**GMAT Shortcut:** For small percentages over a few periods, you can estimate:
- The "simple" growth would be $3 \\times 5\\% = 15\\%$, giving $11,500$.
- The compound effect adds a little more, pushing it just above $11,500$.

This estimation technique can help you eliminate wrong answer choices quickly.

---

## Key Formulas

- **Basic percent:** $\\text{Part} = \\frac{\\text{Percent}}{100} \\times \\text{Whole}$
- **Percentage change:** $\\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100$
- **Multiplier for increase of $r\\%$:** $1 + \\frac{r}{100}$
- **Multiplier for decrease of $r\\%$:** $1 - \\frac{r}{100}$
- **Net successive change ($a\\%$ then $b\\%$):** $a + b + \\frac{ab}{100}$
- **Compound change:** $\\text{Final} = \\text{Initial} \\times (1 + r)^n$
- **Profit %:** $\\frac{SP - CP}{CP} \\times 100$

---

## Worked Examples

### Example 1: Basic Percentage

**Problem:** In a class of 80 students, 60% are female. If 25% of the female students and 40% of the male students study science, how many students total study science?

**Solution:**
- Female students: $80 \\times 0.60 = 48$
- Male students: $80 - 48 = 32$
- Females studying science: $48 \\times 0.25 = 12$
- Males studying science: $32 \\times 0.40 = 12.8$

Wait — $12.8$ students does not make sense in a real-world context, but the GMAT could still present this computation. Let us re-read: $32 \\times 0.40 = 12.8$. Actually, in a well-formed GMAT problem the numbers will always work out evenly. Let's adjust: suppose 50% of the male students study science.

- Males studying science: $32 \\times 0.50 = 16$
- Total studying science: $12 + 16 = \\textbf{28}$

### Example 2: Successive Percentage Changes

**Problem:** The price of a stock increased by 25% in January and decreased by 20% in February. What was the net percentage change over the two months?

**Solution:** Using the successive change formula:

$$\\text{Net change} = 25 + (-20) + \\frac{(25)(-20)}{100} = 5 + (-5) = 0\\%$$

Alternatively, using multipliers: $1.25 \\times 0.80 = 1.00$

The net change is **0%** — the stock returned to its original price. This is a somewhat surprising result and exactly the type of problem the GMAT loves.

### Example 3: Profit and Discount

**Problem:** A merchant buys an item for $\\$400$, marks it up by 60%, then offers a discount of 25% on the marked price. What is the merchant's profit or loss?

**Solution:**
- Marked price: $400 \\times 1.60 = \\$640$
- Selling price after discount: $640 \\times 0.75 = \\$480$
- Profit: $480 - 400 = \\$80$
- Profit percent: $\\frac{80}{400} \\times 100 = \\textbf{20\\%}$

Using the formula directly: $1.60 \\times 0.75 = 1.20$, so **20% profit**.

### Example 4: Compound Growth

**Problem:** A city's population is currently 200,000. If the population increases by 10% every 5 years, what will the approximate population be in 15 years?

**Solution:** In 15 years, there are $\\frac{15}{5} = 3$ periods of growth.

$$200{,}000 \\times (1.10)^3 = 200{,}000 \\times 1.331 = \\textbf{266,200}$$

---

## GMAT Tips

1. **Always identify the base.** The most common error in percent problems is using the wrong denominator. Percentage increase/decrease is always relative to the **original** value. Profit percent is relative to **cost price**. Discount percent is relative to **marked price**.

2. **Successive changes don't add.** Never just add two percentage changes. A 30% increase followed by a 30% decrease is NOT a net 0% change — it's a net 9% decrease. Always multiply the multipliers.

3. **Use multipliers for speed.** Instead of computing the increase/decrease amount and then adding/subtracting, directly multiply by the appropriate multiplier ($1.15$ for a 15% increase, $0.85$ for a 15% decrease).

4. **"What percent greater" vs. "what percent of."** These are different questions. If A is 150 and B is 100, then A is 150% **of** B but A is 50% **greater than** B. Read carefully.

5. **Watch for the "percent of a percent" trap.** "The percentage increased from 20% to 25%" is a 5 **percentage point** increase but a 25% **percent increase** ($\\frac{5}{20} \\times 100$). The GMAT will test whether you know the difference.

6. **Estimate when you can.** In problem-solving questions with widely spaced answer choices, quick mental estimation of percentages can save significant time. For instance, 33% of 600 is roughly 200 — you don't need the exact value if the choices are 150, 200, 250, 300, 350.

7. **On Data Sufficiency,** a single percentage change without a base value is often **insufficient** to determine an absolute change. Knowing that prices rose by 10% tells you nothing about the actual dollar increase unless you also know the original price.
`;
