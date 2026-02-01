export const content = `
# Table Analysis

Table Analysis (TA) is one of the five question types in the GMAT Data Insights section. It presents you with a **sortable data table** and a set of **Yes/No (or True/False) statements** that you must evaluate based on the data. The key differentiator of TA is the sorting functionality --- you can click column headers to sort the table, which is essential for efficiently finding the information you need.

---

## The TA Format

Each Table Analysis question presents:

1. **A data table** with multiple columns and rows (typically 8--15 rows and 4--7 columns). The table includes a brief description or context paragraph above it.
2. **Three statements** to evaluate, each with a **Yes/No** (or **True/False**) selection.
3. **A sort function** --- you can click any column header to sort the entire table by that column in ascending order. Clicking again sorts in descending order.

You must evaluate **all three statements correctly** to receive credit. There is **no partial credit** --- getting two out of three right still scores zero.

**Example format:**

*"Based on the data in the table, indicate whether each of the following statements is True or False."*

| True | False | Statement |
|------|-------|-----------|
| $\\circ$ | $\\circ$ | The median salary of employees in the Marketing department is greater than \\$65,000. |
| $\\circ$ | $\\circ$ | More than 40% of employees have been with the company for at least 5 years. |
| $\\circ$ | $\\circ$ | The range of sales figures for the Eastern region is less than \\$50,000. |

---

## How to Read and Sort Tables Effectively

### Initial Scan (30 seconds)

Before reading the statements, scan the table to understand:

1. **What each column represents.** Read every column header. Common columns include names, categories, dates, numerical values, and percentages.
2. **What the rows represent.** Each row might be an employee, a product, a city, a month, or some other entity.
3. **The approximate size of the data.** How many rows? This affects how long calculations will take.
4. **The context paragraph.** It often defines terms or provides additional information not in the table itself.

### The Sorting Strategy

**Sort the table for each statement individually.** This is the most important TA technique:

- When a statement asks about a **median**, sort by the relevant column and find the middle value.
- When a statement asks about a **maximum** or **minimum**, sort by the relevant column and look at the first or last row.
- When a statement asks about a **range**, sort by the relevant column; the range is the last value minus the first value (or vice versa).
- When a statement asks about **how many rows meet a condition**, sort by the relevant column to group qualifying rows together, making them easy to count.
- When a statement involves a **percentage of total**, sort is less critical --- you may need to add up values.

**Do not try to answer all three statements with one sort order.** Each statement likely requires a different sort. Re-sort the table for each statement.

---

## Types of Calculations

### Averages (Mean)

To find the mean of a column (or a subset of the column):

$$\\text{Mean} = \\frac{\\text{Sum of values}}{\\text{Number of values}}$$

**Shortcut for TA:** If the statement asks whether the mean is "greater than $X$" or "less than $X$," you can sometimes avoid computing the exact mean. Instead, check whether the sum of values is greater or less than $X \\times n$ (where $n$ is the count).

**Example:** Is the average salary of 10 employees greater than \\$60,000? Instead of dividing, check: Is the total salary greater than $\\$60{,}000 \\times 10 = \\$600{,}000$? This is faster.

### Medians

The **median** is the middle value when data is sorted in order.

- For an **odd** number of values $n$: the median is the value at position $\\frac{n+1}{2}$.
- For an **even** number of values $n$: the median is the average of the values at positions $\\frac{n}{2}$ and $\\frac{n}{2} + 1$.

**TA approach:** Sort by the relevant column. Count to the middle row. Read the value. If the statement involves a subset (e.g., "the median for the Sales department"), you need to mentally filter to only those rows before finding the middle.

### Percentages

Common percentage questions:

- **What percentage of rows meet a condition?** Count the qualifying rows and divide by total rows, then multiply by 100.
- **What is the percentage change between two values?** $\\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100$
- **What percentage of the total does one row represent?** $\\frac{\\text{Row value}}{\\text{Sum of all values}} \\times 100$

### Ratios

A ratio compares two quantities:

$$\\text{Ratio of A to B} = \\frac{A}{B}$$

TA questions may ask whether a ratio exceeds a threshold. For example: "Is the ratio of domestic sales to international sales greater than 3:1?" Check if domestic sales $> 3 \\times$ international sales.

### Ranges

$$\\text{Range} = \\text{Maximum value} - \\text{Minimum value}$$

Sort the column to find the max and min instantly. The range may be asked for the entire table or a subset.

---

## Identifying Patterns in Data

Some TA statements ask you to identify patterns rather than compute specific values:

- **"Every employee in Department X has a salary above $Y$."** Sort by department to group Department X rows, then check if all salaries in that group exceed $Y$.
- **"The company with the highest revenue also has the highest profit margin."** Sort by revenue to find the highest, then check its profit margin against all others.
- **"No product in Category A has a defect rate above 5%."** Sort by category, isolate Category A rows, then check each defect rate.

These pattern questions require **systematic verification** --- you must check every relevant row, not just a few.

---

## True/False Statement Evaluation

For each statement, follow this process:

1. **Identify the claim.** What exactly is the statement asserting?
2. **Identify the relevant column(s).** Which column(s) contain the data you need?
3. **Sort appropriately.** Click the column header to sort by the most relevant column.
4. **Extract the data.** Read or calculate the specific values needed.
5. **Evaluate.** Does the data support or contradict the statement?

### "At Least" vs. "More Than" vs. "Exactly"

Pay close attention to precise wording:

- **"At least 5"** means 5 or more ($\\ge 5$).
- **"More than 5"** means strictly greater than 5 ($> 5$), so 5 itself does not count.
- **"Exactly 5"** means precisely 5, no more and no fewer.
- **"At most 5"** means 5 or fewer ($\\le 5$).
- **"Fewer than 5"** means strictly less than 5 ($< 5$).

Getting one of these wrong can flip your answer from True to False.

---

## Sorting Strategy Deep Dive

### When to Sort by Each Column

| Statement Type | Sort By |
|---------------|---------|
| Find the median of column X | Column X |
| Find the range of column X | Column X |
| Find the top/bottom $n$ values in column X | Column X |
| Count rows where column X meets a condition | Column X |
| Compare values across two columns for specific rows | Either column (to locate the rows), then read across |
| Calculate the sum of column X | Any order (you must add all values regardless) |
| Check if a relationship holds for all rows | The column that defines the group or condition |

### Multi-Column Statements

Some statements require data from **two or more columns**. For these:

1. **Sort by the column that defines the subset** (e.g., sort by Department to isolate Marketing employees).
2. **Then read across the relevant column** for the calculation (e.g., read the Salary column for Marketing rows).

You cannot sort by two columns simultaneously, so you must use the sort strategically.

---

## Example Tables with Analysis

### Example 1: Employee Data

**Context:** The table below shows data for 10 employees at a consulting firm.

| Employee | Department | Years | Salary (\\$K) | Rating |
|----------|-----------|-------|-------------|--------|
| Adams | Sales | 3 | 58 | B+ |
| Blake | Marketing | 7 | 72 | A- |
| Carter | Sales | 12 | 88 | A |
| Diaz | Engineering | 2 | 65 | B |
| Evans | Marketing | 5 | 68 | B+ |
| Foster | Engineering | 8 | 95 | A |
| Green | Sales | 1 | 52 | B- |
| Hayes | Engineering | 6 | 78 | A- |
| Irving | Marketing | 4 | 61 | B |
| Jones | Sales | 9 | 82 | A- |

**Statement 1:** "The median salary of all employees is greater than \\$70,000."

**Analysis:** Sort by Salary: 52, 58, 61, 65, 68, 72, 78, 82, 88, 95. With 10 values, the median is the average of the 5th and 6th values: $(68 + 72) / 2 = 70$. The median is exactly \\$70K, which is NOT greater than \\$70K. **False.**

**Statement 2:** "More than half the employees in the Sales department have been with the company for at least 5 years."

**Analysis:** Sales employees: Adams (3 years), Carter (12), Green (1), Jones (9). That is 4 employees. Those with at least 5 years: Carter (12) and Jones (9) --- that is 2 out of 4, which is exactly half, not more than half. **False.**

**Statement 3:** "The range of salaries in the Engineering department is greater than the range of salaries in the Marketing department."

**Analysis:**
- Engineering salaries: 65, 78, 95. Range = 95 - 65 = 30.
- Marketing salaries: 61, 68, 72. Range = 72 - 61 = 11.
- 30 > 11. **True.**

### Example 2: Product Sales Data

**Context:** The table shows quarterly sales data for five products.

| Product | Q1 (\\$K) | Q2 (\\$K) | Q3 (\\$K) | Q4 (\\$K) | Category |
|---------|---------|---------|---------|---------|----------|
| Alpha | 120 | 135 | 142 | 155 | Premium |
| Beta | 88 | 92 | 85 | 91 | Standard |
| Gamma | 200 | 188 | 195 | 210 | Premium |
| Delta | 55 | 60 | 58 | 62 | Budget |
| Epsilon | 145 | 150 | 160 | 148 | Standard |

**Statement 1:** "Every Premium product had higher Q4 sales than Q1 sales."

**Analysis:** Premium products: Alpha (Q1 = 120, Q4 = 155, increase) and Gamma (Q1 = 200, Q4 = 210, increase). Both increased. **True.**

**Statement 2:** "The product with the highest total annual sales is in the Premium category."

**Analysis:** Calculate totals:
- Alpha: $120 + 135 + 142 + 155 = 552$
- Beta: $88 + 92 + 85 + 91 = 356$
- Gamma: $200 + 188 + 195 + 210 = 793$
- Delta: $55 + 60 + 58 + 62 = 235$
- Epsilon: $145 + 150 + 160 + 148 = 603$

Highest total: Gamma (793), which is Premium. **True.**

**Statement 3:** "The percent increase in Q4 sales over Q1 sales was greatest for Delta."

**Analysis:** Calculate percent increase for each:
- Alpha: $(155 - 120)/120 \\times 100 \\approx 29.2\\%$
- Beta: $(91 - 88)/88 \\times 100 \\approx 3.4\\%$
- Gamma: $(210 - 200)/200 \\times 100 = 5\\%$
- Delta: $(62 - 55)/55 \\times 100 \\approx 12.7\\%$
- Epsilon: $(148 - 145)/145 \\times 100 \\approx 2.1\\%$

Greatest percent increase: Alpha at 29.2%, not Delta. **False.**

### Example 3: City Demographics

**Context:** The table shows data for 8 cities.

| City | Population (K) | Median Income (\\$K) | Unemployment (%) | Region |
|------|---------------|--------------------|--------------------|--------|
| Ashton | 150 | 52 | 6.2 | North |
| Bedford | 320 | 68 | 4.1 | South |
| Canton | 85 | 45 | 8.5 | North |
| Dover | 410 | 75 | 3.8 | South |
| Easton | 200 | 58 | 5.5 | East |
| Franklin | 175 | 62 | 4.9 | East |
| Grafton | 95 | 41 | 9.1 | West |
| Hampton | 260 | 71 | 4.3 | South |

**Statement 1:** "The city with the lowest unemployment rate also has the highest median income."

**Analysis:** Sort by unemployment: Dover (3.8%), Bedford (4.1%), Hampton (4.3%), Franklin (4.9%), Easton (5.5%), Ashton (6.2%), Canton (8.5%), Grafton (9.1%). Lowest unemployment: Dover at 3.8%. Sort by median income: Dover has \\$75K. Is this the highest? Yes, Dover has the highest median income. **True.**

**Statement 2:** "The median population of North region cities is greater than 120,000."

**Analysis:** North region cities: Ashton (150K) and Canton (85K). Median of two values: $(150 + 85)/2 = 117.5$K. Is $117.5$K > $120$K? No. **False.**

**Statement 3:** "At least 75% of cities have an unemployment rate below 6%."

**Analysis:** Cities with unemployment below 6%: Bedford (4.1%), Dover (3.8%), Franklin (4.9%), Hampton (4.3%), Easton (5.5%) --- that is 5 out of 8. $5/8 = 62.5\\%$. Is $62.5\\% \\ge 75\\%$? No. **False.**

---

## Common TA Traps

1. **Not sorting before answering.** Trying to scan an unsorted table for the median or maximum is error-prone. Always sort by the relevant column first.

2. **Forgetting to filter mentally for subsets.** If the statement says "among employees in the Marketing department," you need to consider only those rows, not the entire table. Sort helps you group them, but you must still focus on the correct subset.

3. **Calculation errors with sums.** Adding 8--15 numbers by hand is error-prone. Double-check your arithmetic, especially for mean and total calculations. Use estimation to verify --- if most values are around 60 and there are 10 of them, the total should be around 600.

4. **Confusing "at least" with "more than."** As described above, these have different meanings. "At least 5" includes 5; "more than 5" excludes 5.

5. **Assuming the table is already sorted.** The default order may be alphabetical by the first column, not sorted by any numerical value. Always sort by the column relevant to the current statement.

6. **Ignoring the context paragraph.** The paragraph above the table may define terms, specify time periods, or clarify what the data represents. Missing this information can lead to misinterpretation.

7. **Reading the wrong row after sorting.** After sorting, the rows rearrange. Make sure you are reading the correct row --- verify by checking a known value (like the name in the first column).

8. **Rushing through all three statements.** Each statement is independent and may require a different sort and different calculations. Treat each one as a separate mini-problem.

---

## GMAT Tips

1. **Sort for every statement.** This bears repeating because it is the most impactful habit. Click the column header before answering each statement. It takes one second and prevents minutes of wasted effort scanning unsorted data.

2. **Write intermediate values on your scratch paper.** When calculating means or totals, write each number down as you add. This prevents the common mistake of forgetting where you are in the sum.

3. **Estimate before calculating.** Before adding up 10 salary figures, estimate the total by averaging a "typical" value and multiplying by the count. If your detailed calculation differs wildly from the estimate, you probably made an arithmetic error.

4. **For median questions, count the rows carefully.** If there are 10 rows, the median is the average of the 5th and 6th values. If there are 11, it is the 6th value. An off-by-one error here gives the wrong answer.

5. **All three statements must be correct for credit.** Do not rush. A careless error on one statement wastes all the time you spent on the other two.

6. **Budget about 3 to 4 minutes per TA question.** This is longer than GI but shorter than MSR. If one statement is taking too long, move to the others and come back.

7. **Look for statements that are quick to verify first.** If one statement asks "Does the city with the highest population have the lowest unemployment?" --- that requires just two sorts and two lookups, very fast. If another asks for a complex percentage calculation, do the easy ones first.

8. **Pay attention to column units.** If a column header says "Revenue (in thousands)," a value of 250 means \\$250,000. Do not confuse this when the statement uses full dollar amounts.

9. **On test day, the sort feature works instantly** --- use it liberally. There is no penalty for sorting multiple times. Develop the habit during practice so it becomes automatic.
`;
