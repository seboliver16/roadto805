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

> **Quick Method:** When finding a percent of a number, use fraction equivalents for common percents to speed up mental math. For example, 25% = $\\frac{1}{4}$, so 25% of 360 is $360 \\div 4 = 90$. Similarly, 33.3% $\\approx \\frac{1}{3}$, 12.5% = $\\frac{1}{8}$, and 20% = $\\frac{1}{5}$. These are much faster than multiplying by decimals.

**Example:** What is 12.5% of 640?

**Solution:** Since $12.5\\% = \\frac{1}{8}$:

$$\\frac{640}{8} = \\textbf{80}$$

No decimal multiplication needed.

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

> **Common Trap:** A GMAT problem states: "The price dropped from \\$80 to \\$60. What is the percent decrease?" Many students compute $\\frac{20}{60} \\times 100 = 33.3\\%$ -- using the NEW value as the denominator. The correct calculation uses the ORIGINAL value: $\\frac{80 - 60}{80} \\times 100 = 25\\%$. Always divide by the **starting** value.

### Using Multipliers

A faster way to handle percentage changes is to use **multipliers**:

- A **20% increase** means the new value is $100\\% + 20\\% = 120\\%$ of the original, so multiply by $1.20$.
- A **15% decrease** means the new value is $100\\% - 15\\% = 85\\%$ of the original, so multiply by $0.85$.

**General formula:**

$$\\text{New Value} = \\text{Original Value} \\times (1 + r)$$

where $r$ is the rate of change expressed as a decimal (positive for increase, negative for decrease).

**Example:** A \\$250 item is marked up by 30%. What is the new price?

$$250 \\times 1.30 = \\$325$$

> **Quick Method:** To reverse a percentage change (find the original from the new value), divide by the multiplier instead of multiplying. If an item costs \\$460 after a 15% increase, the original price is $\\frac{460}{1.15} = \\$400$. Students who subtract 15% of \\$460 get \\$391, which is wrong.

**Example:** After a 20% discount, a jacket costs \\$96. What was the original price?

**Solution:** The multiplier for a 20% decrease is $0.80$.

$$\\text{Original Price} = \\frac{96}{0.80} = \\textbf{\\$120}$$

> **Common Trap:** Many students incorrectly compute $96 \\times 1.20 = \\$115.20$, thinking that a 20% increase of \\$96 "reverses" a 20% decrease. It does not. Increasing by 20% and decreasing by 20% are NOT inverse operations. To undo a 20% decrease, you must divide by 0.80.

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

> **Quick Method:** For equal and opposite percentage changes, the result is always a **net loss**. If a value goes up $x\\%$ then down $x\\%$ (or vice versa), the net change is $-\\frac{x^2}{100}\\%$. So 10% up then 10% down = $-\\frac{100}{100} = -1\\%$ net. 30% up then 30% down = $-\\frac{900}{100} = -9\\%$ net. Memorize the shortcut: the net loss is always $\\frac{x^2}{100}\\%$.

### Multiple Successive Changes

For three or more successive changes, simply multiply all the multipliers together:

$$\\text{Overall Multiplier} = (1 + r_1)(1 + r_2)(1 + r_3) \\cdots$$

**Example:** A stock goes up 10%, then down 20%, then up 50%. What is the overall percentage change?

**Solution:**

$$1.10 \\times 0.80 \\times 1.50 = 0.88 \\times 1.50 = 1.32$$

Overall change: $(1.32 - 1) \\times 100 = \\textbf{32\\% increase}$

> **Common Trap:** Students who add the changes get $10 - 20 + 50 = 40\\%$. The actual answer is 32%. Successive changes must always be multiplied, never added.

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

> **Common Trap:** Profit percent is ALWAYS calculated relative to **cost price**, not selling price. If you buy for \\$80 and sell for \\$100, the profit is \\$20 and the profit percent is $\\frac{20}{80} \\times 100 = 25\\%$, NOT $\\frac{20}{100} \\times 100 = 20\\%$.

### Markup and Discount Together

A common GMAT scenario: a seller marks up an item by $m\\%$ and then offers a discount of $d\\%$. What is the net profit or loss percent?

$$SP = CP \\times (1 + \\frac{m}{100}) \\times (1 - \\frac{d}{100})$$

$$\\text{Net Profit \\%} = \\left[(1 + \\frac{m}{100})(1 - \\frac{d}{100}) - 1\\right] \\times 100$$

**Example:** A retailer marks up goods by 50% and then gives a 20% discount. What is the profit percent?

$$\\text{Multiplier} = 1.50 \\times 0.80 = 1.20$$

Profit percent $= (1.20 - 1) \\times 100 = 20\\%$ profit.

**Example:** A merchant marks up goods by 40% but then needs to offer a 40% discount. What is the result?

**Solution:**

$$\\text{Multiplier} = 1.40 \\times 0.60 = 0.84$$

Net result $= (0.84 - 1) \\times 100 = \\textbf{-16\\% (a 16\\% loss)}$

Even though the markup and discount percentages are the same, the merchant loses money. This is the successive-change trap at work.

> **Quick Method:** For markup then discount problems, use the formula directly: Net % $= m - d - \\frac{md}{100}$. For 40% markup and 40% discount: $40 - 40 - \\frac{(40)(40)}{100} = 0 - 16 = -16\\%$.

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

**Example:** A certain investment earns 8% annual compound interest. If \\$5,000 is invested, what is the value after 2 years?

**Solution:**

$$5{,}000 \\times (1.08)^2 = 5{,}000 \\times 1.1664 = \\textbf{\\$5,832}$$

> **Quick Method:** To approximate $(1 + r)^2$ quickly, use the expansion $(1 + r)^2 = 1 + 2r + r^2$. For $r = 0.08$: $1 + 0.16 + 0.0064 = 1.1664$. The $r^2$ term is often small enough to estimate, making this faster than multiplying $1.08 \\times 1.08$ directly.

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

**Problem:** In a class of 80 students, 60% are female. If 25% of the female students and 50% of the male students study science, how many students total study science?

**Solution:**
- Female students: $80 \\times 0.60 = 48$
- Male students: $80 - 48 = 32$
- Females studying science: $48 \\times 0.25 = 12$
- Males studying science: $32 \\times 0.50 = 16$
- Total studying science: $12 + 16 = \\textbf{28}$

### Example 2: Successive Percentage Changes

**Problem:** The price of a stock increased by 25% in January and decreased by 20% in February. What was the net percentage change over the two months?

**Solution:** Using the successive change formula:

$$\\text{Net change} = 25 + (-20) + \\frac{(25)(-20)}{100} = 5 + (-5) = 0\\%$$

Alternatively, using multipliers: $1.25 \\times 0.80 = 1.00$

The net change is **0%** -- the stock returned to its original price. This is a somewhat surprising result and exactly the type of problem the GMAT loves.

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

### Example 5: Percent Decrease then Percent Increase

**Problem:** A store reduces all prices by 30% during a sale. After the sale, all prices are increased by 20%. What is the overall percentage change from the original prices?

**Solution:** Multiply the multipliers:

$$0.70 \\times 1.20 = 0.84$$

Overall change: $(0.84 - 1) \\times 100 = -16\\%$

The prices are **16% lower** than the original.

Using the formula: $-30 + 20 + \\frac{(-30)(20)}{100} = -10 + (-6) = -16\\%$

> **Common Trap:** If you just add $-30 + 20 = -10\\%$, you miss the cross-term of $-6\\%$. The actual decrease (16%) is worse than you would naively expect.

### Example 6: Finding the Original Value

**Problem:** After receiving a 15% raise, Maria's salary is \\$69,000. What was her salary before the raise?

**Solution:** The multiplier for a 15% increase is $1.15$.

$$\\text{Original Salary} = \\frac{69{,}000}{1.15} = \\textbf{\\$60,000}$$

Verify: $60{,}000 \\times 1.15 = 69{,}000$ ✓

> **Common Trap:** Students often compute $69{,}000 \\times 0.85 = \\$58{,}650$, thinking that subtracting 15% of the new value reverses the increase. This is wrong because 15% of \\$69,000 is different from 15% of the original \\$60,000. To reverse a percentage increase, always divide by the multiplier.

### Example 7: Data Sufficiency -- Percentage of a Percentage

**Problem:** In a school, what percent of the students are left-handed girls?

(1) 40% of the students are girls.
(2) 10% of the girls are left-handed.

**Solution:**

**Statement (1) alone:** We know 40% are girls, but we do not know how many girls are left-handed. **Insufficient.**

**Statement (2) alone:** We know 10% of the girls are left-handed, but we do not know what fraction of the school is girls. **Insufficient.**

**Statements (1) and (2) together:**
- 40% of students are girls
- 10% of those girls are left-handed
- Left-handed girls = $40\\% \\times 10\\% = 0.40 \\times 0.10 = 0.04 = 4\\%$ of all students

The answer is **(C): Both statements together are sufficient**.

> **Quick Method:** When you need "percent of a percent," simply multiply the two percentages (as decimals). 40% of 10% = $0.40 \\times 0.10 = 0.04 = 4\\%$. This works because percentages chain multiplicatively, not additively.

---

## GMAT Tips

1. **Always identify the base.** The most common error in percent problems is using the wrong denominator. Percentage increase/decrease is always relative to the **original** value. Profit percent is relative to **cost price**. Discount percent is relative to **marked price**.

2. **Successive changes don't add.** Never just add two percentage changes. A 30% increase followed by a 30% decrease is NOT a net 0% change -- it's a net 9% decrease. Always multiply the multipliers.

3. **Use multipliers for speed.** Instead of computing the increase/decrease amount and then adding/subtracting, directly multiply by the appropriate multiplier ($1.15$ for a 15% increase, $0.85$ for a 15% decrease).

4. **"What percent greater" vs. "what percent of."** These are different questions. If A is 150 and B is 100, then A is 150% **of** B but A is 50% **greater than** B. Read carefully.

5. **Watch for the "percent of a percent" trap.** "The percentage increased from 20% to 25%" is a 5 **percentage point** increase but a 25% **percent increase** ($\\frac{5}{20} \\times 100$). The GMAT will test whether you know the difference.

6. **Estimate when you can.** In problem-solving questions with widely spaced answer choices, quick mental estimation of percentages can save significant time. For instance, 33% of 600 is roughly 200 -- you don't need the exact value if the choices are 150, 200, 250, 300, 350.

7. **On Data Sufficiency,** a single percentage change without a base value is often **insufficient** to determine an absolute change. Knowing that prices rose by 10% tells you nothing about the actual dollar increase unless you also know the original price.
`;
