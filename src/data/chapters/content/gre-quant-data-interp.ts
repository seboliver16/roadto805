export const content = `
# Data Interpretation

Data Interpretation (DI) questions on the GRE present information in charts, graphs, and tables, then ask you to extract, calculate, and draw conclusions from the data. These problems test reading comprehension as much as math. The data is usually straightforward, but the GRE hides traps in labels, scales, and multi-step calculations.

---

## Types of Data Displays

### Bar Charts

Bar charts use horizontal or vertical bars to represent quantities. Each bar corresponds to a category, and the bar's length or height corresponds to a value.

**How to read them:**
- Check the axis labels and units (thousands? millions? percentages?)
- Read values by aligning the top of each bar with the scale
- For grouped bars, identify which group each color or pattern represents

### Line Graphs

Line graphs show trends over time. The horizontal axis typically represents time, and the vertical axis represents a measured quantity.

**How to read them:**
- Look at the overall trend (increasing, decreasing, flat)
- Identify peaks, valleys, and turning points
- Compare slopes to assess rates of change

### Pie Charts

Pie charts show parts of a whole. Each slice represents a percentage or fraction of the total.

**How to read them:**
- Each slice is a percentage of the total (all slices sum to 100%)
- To find the actual value of a slice, multiply its percentage by the total
- To compare slices, compare their percentages

### Tables

Tables present numerical data organized in rows and columns. They can contain exact values that charts only approximate.

**How to read them:**
- Identify what each row and column represents
- Pay attention to column headers, especially units
- Look for totals or summary rows

> **Common Trap:** Always check the units on every axis and in every column header. A bar chart labeled "Revenue (in thousands of dollars)" means a bar reaching 50 represents \\$50,000, not \\$50. Misreading units is the single most common DI error.

---

## Percent Calculations from Data

Many DI questions require you to compute percentages, percent changes, or fractions from data.

### Percent of Total

$$\\text{Percent of total} = \\frac{\\text{Part}}{\\text{Total}} \\times 100$$

### Percent Change

$$\\text{Percent change} = \\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100$$

### Worked Example

**Problem:** A company's revenue was \\$200,000 in 2020 and \\$250,000 in 2021. What was the percent increase?

**Solution:**

$$\\text{Percent increase} = \\frac{250{,}000 - 200{,}000}{200{,}000} \\times 100 = \\frac{50{,}000}{200{,}000} \\times 100 = \\textbf{25\\%}$$

> **Common Trap:** Percent change is always calculated relative to the **original** (old) value, not the new value. A change from 200 to 250 is a 25% increase, but a change from 250 to 200 is a 20% decrease (because the base is different). This asymmetry is frequently tested.

---

## Estimation Strategies

The GRE allows a calculator on the Quant section, but DI problems are designed so that estimation is often faster and sufficient.

### Strategy 1: Round to Friendly Numbers

If a bar reaches approximately 47,300, round to 47,000 or even 47. Work with simpler numbers, then check if your estimate is close enough to distinguish between answer choices.

### Strategy 2: Use Benchmarks

Know these common fraction-percent equivalents:

| Fraction | Percent |
|---|---|
| $\\frac{1}{2}$ | 50% |
| $\\frac{1}{3}$ | 33.3% |
| $\\frac{1}{4}$ | 25% |
| $\\frac{1}{5}$ | 20% |
| $\\frac{1}{8}$ | 12.5% |
| $\\frac{2}{3}$ | 66.7% |
| $\\frac{3}{4}$ | 75% |

### Strategy 3: Compare Before Computing

When asked "which category had the greatest percent increase," you can often eyeball the relative changes rather than computing each one precisely. Only calculate when two options are close.

> **Strategy:** Before diving into calculations, scan the answer choices. If they are far apart (e.g., 15%, 25%, 40%, 60%), rough estimation will suffice. If they are close together (e.g., 22%, 24%, 26%, 28%), you need more precision.

---

## Multi-Step Data Problems

Many DI questions require combining information from multiple parts of a chart or from multiple charts.

### Worked Example

**Problem:** The pie chart shows the distribution of a company's \\$800,000 budget. Marketing is 20% and R&D is 35%. How much more money is allocated to R&D than to Marketing?

**Solution:**

Marketing: $0.20 \\times 800{,}000 = \\$160{,}000$

R&D: $0.35 \\times 800{,}000 = \\$280{,}000$

Difference: $280{,}000 - 160{,}000 = \\textbf{\\$120{,}000}$

**Shortcut:** The difference in percentages is $35\\% - 20\\% = 15\\%$. So: $0.15 \\times 800{,}000 = \\$120{,}000$.

### Worked Example: Combining Two Charts

**Problem:** A bar chart shows total employees at a company from 2018-2022. A pie chart shows that in 2022, 30% of employees are in Engineering. The bar chart shows 500 total employees in 2022. How many engineers are there in 2022?

**Solution:**

$$\\text{Engineers in 2022} = 0.30 \\times 500 = \\textbf{150}$$

> **Strategy:** For multi-chart problems, identify which chart provides each piece of information. Typically, one chart gives a total and the other gives a breakdown or percentage. Combine them systematically.

---

## Comparing Data Across Sources

Some DI problem sets present two or three charts that share a common variable (such as year or category). You must cross-reference them.

**Approach:**
1. Read each chart independently first. Understand what each one shows.
2. Identify the common link (shared time period, shared category).
3. Extract the needed values from each chart.
4. Combine with arithmetic (addition, subtraction, division for ratios, etc.).

### Worked Example

**Problem:** Chart 1 shows total revenue by year. Chart 2 shows the number of units sold by year. In 2021, revenue was \\$600,000 and units sold were 1,200. What was the average revenue per unit in 2021?

**Solution:**

$$\\text{Revenue per unit} = \\frac{600{,}000}{1{,}200} = \\textbf{\\$500}$$

---

## Common DI Traps

### Trap 1: Reading the Wrong Row or Column

Tables with many rows and columns make it easy to read the wrong cell. Use your finger or a piece of scratch paper to track across the row.

### Trap 2: Misinterpreting the Scale

A graph might show values in "millions" but an answer choice might be in "thousands." Always convert to the same unit before comparing.

### Trap 3: Confusing Percent of Total with Percent Change

"What percent of total revenue came from Product A?" is a different question from "By what percent did Product A's revenue change?" The first is a part-to-whole ratio; the second is a change-over-time ratio.

### Trap 4: Assuming Missing Data

If a chart does not show a value, do not assume it. Some problems are deliberately designed so that you cannot determine the answer without certain information. In QC, this may make the answer "cannot be determined."

### Trap 5: Overlooking "Approximately"

Many DI problems say "approximately." This signals that you should estimate rather than compute an exact value. Reading the graph precisely is usually not possible (or necessary).

> **Common Trap:** When a problem asks "approximately what percent," the answer choices are typically spread out enough that estimation works. But make sure your estimate is reasonable. Being off by 1-2% is fine; being off by 10% means you misread the data.

---

## GRE Question Type Tips

**Quantitative Comparison (QC):** DI-based QC problems may ask you to compare values from two different parts of a chart. Extract each value carefully, then compare. If the data is ambiguous (you cannot read the exact value from the graph), and the comparison is close, the answer may be "cannot be determined."

**Problem Solving (PS):** These are the most common DI question type. They typically involve 2-3 arithmetic steps. Work methodically: extract data, set up the calculation, execute, and check units.

**Numeric Entry (NE):** DI numeric entry problems often ask for a percent or a dollar amount. Pay attention to whether the answer should be entered as a percent (e.g., 25) or a decimal (e.g., 0.25). Also check if the answer should be in the same units as the chart or converted.

> **Strategy:** On DI problem sets, spend 30-60 seconds studying all the charts before answering any questions. Understand what data is available, the units, the time periods, and the relationships between charts. This upfront investment saves time on every question in the set.

---

## Key Formulas

$$\\boxed{\\text{Percent of total} = \\frac{\\text{Part}}{\\text{Total}} \\times 100}$$

$$\\boxed{\\text{Percent change} = \\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100}$$

$$\\boxed{\\text{Average per unit} = \\frac{\\text{Total value}}{\\text{Number of units}}}$$

$$\\boxed{\\text{Value of a pie slice} = \\text{Percent} \\times \\text{Total}}$$
`;
