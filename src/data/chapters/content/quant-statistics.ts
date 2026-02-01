export const content = `
# Statistics

Statistics questions appear regularly on the GMAT, both in Problem Solving and Data Sufficiency formats. The good news is that the GMAT tests a relatively narrow set of statistical concepts. You will never need to calculate a standard deviation from scratch; instead, you need to understand what these measures **mean** and how they behave when data changes. This chapter covers every statistics concept the GMAT expects you to know.

---

## Mean (Arithmetic Average)

The **arithmetic mean** (commonly called the **average**) is the most frequently tested statistical measure on the GMAT.

$$\\text{Mean} = \\frac{\\text{Sum of all values}}{\\text{Number of values}}$$

This formula gives rise to a powerful relationship that the GMAT constantly exploits:

$$\\text{Sum} = \\text{Mean} \\times \\text{Number of values}$$

**Example:** The average of 5 numbers is 20. What is their sum?

$$\\text{Sum} = 20 \\times 5 = 100$$

This "Sum = Mean $\\times$ Count" identity is the single most useful formula for GMAT average problems. Most questions are essentially asking you to manipulate this relationship.

### Combining Groups

When two groups with known averages are combined, the overall average is **not** simply the average of the two group averages (unless the groups are the same size).

If Group 1 has $n_1$ values with mean $\\bar{x}_1$ and Group 2 has $n_2$ values with mean $\\bar{x}_2$:

$$\\text{Combined Mean} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$$

**Example:** Class A has 20 students with an average score of 80. Class B has 30 students with an average score of 90. What is the overall average?

$$\\text{Combined Mean} = \\frac{(20)(80) + (30)(90)}{20 + 30} = \\frac{1{,}600 + 2{,}700}{50} = \\frac{4{,}300}{50} = 86$$

Notice this is **not** 85 (the simple average of 80 and 90). The larger group (Class B) "pulls" the overall average closer to its mean.

### Weighted Average

The combined-groups formula above is actually a special case of the **weighted average**:

$$\\text{Weighted Average} = \\frac{w_1 x_1 + w_2 x_2 + \\cdots + w_n x_n}{w_1 + w_2 + \\cdots + w_n}$$

where $w_i$ are the weights (often frequencies or group sizes) and $x_i$ are the values.

**Key insight:** A weighted average always lies **between** the smallest and largest values, and it is **closer** to the value with the greater weight.

### How Adding or Removing Values Affects the Mean

This is a favorite GMAT topic. The logic is always the same — use the Sum formula:

**Adding a value:** If a set has $n$ values with mean $\\bar{x}$, and you add a new value $v$:

$$\\text{New Mean} = \\frac{n\\bar{x} + v}{n + 1}$$

- If $v > \\bar{x}$, the mean **increases**.
- If $v < \\bar{x}$, the mean **decreases**.
- If $v = \\bar{x}$, the mean **stays the same**.

**Removing a value:** If you remove value $v$ from a set of $n$ values with mean $\\bar{x}$:

$$\\text{New Mean} = \\frac{n\\bar{x} - v}{n - 1}$$

---

## Median

The **median** is the middle value when all values are arranged in ascending (or descending) order.

- If the number of values $n$ is **odd**, the median is the single middle value, located at position $\\frac{n+1}{2}$.
- If the number of values $n$ is **even**, the median is the **average of the two middle values**, located at positions $\\frac{n}{2}$ and $\\frac{n}{2} + 1$.

**Example with odd count:** Data: $\\{3, 7, 9, 12, 15\\}$ (5 values)
Median is the 3rd value: **9**

**Example with even count:** Data: $\\{3, 7, 9, 12, 15, 18\\}$ (6 values)
Median is the average of the 3rd and 4th values: $\\frac{9 + 12}{2} = \\textbf{10.5}$

### Important Median Properties

- The median is **resistant to outliers.** Changing an extreme value in the data set may not affect the median at all. This is different from the mean, which is sensitive to every value.
- You **do not** need to know every value in a set to determine the median. You only need to know the middle value(s) and that the others are correctly ordered around them.

---

## Mode

The **mode** is the value that appears most frequently in a data set. A data set can have:

- **No mode** (all values appear equally often)
- **One mode** (unimodal)
- **Multiple modes** (bimodal, trimodal, etc.)

The GMAT rarely asks about mode directly, but it may appear in questions that ask you to compare the mean, median, and mode or identify which measure best describes a data set.

**Example:** Data: $\\{2, 3, 3, 5, 7, 7, 7, 9\\}$

Mode = **7** (appears 3 times, more than any other value)

---

## Range

The **range** is the simplest measure of spread:

$$\\text{Range} = \\text{Maximum Value} - \\text{Minimum Value}$$

**Example:** Data: $\\{3, 7, 9, 12, 15\\}$

Range = $15 - 3 = \\textbf{12}$

### Properties of Range

- Adding a value **between** the current min and max does not change the range.
- The range is extremely sensitive to outliers.
- Range uses only two data points and ignores all others.

---

## Standard Deviation

The GMAT tests standard deviation **conceptually** — you will never need to calculate it from a formula. Here is what you need to understand:

**Standard deviation** measures how spread out the data values are from the mean. It is a measure of **dispersion**.

- A **small** standard deviation means the values are clustered close to the mean.
- A **large** standard deviation means the values are spread widely from the mean.
- If **all values are the same**, the standard deviation is **0**.

### Key Conceptual Rules

1. **Adding or subtracting a constant from every value:** The standard deviation **does not change**. (Shifting all data points does not affect their spread.)

2. **Multiplying or dividing every value by a constant $k$:** The standard deviation is **multiplied by $|k|$**. (Scaling the data scales the spread.)

3. **Adding a value equal to the mean:** The standard deviation **decreases** (slightly), because you are adding a point with zero deviation from the mean, which reduces the overall average deviation.

4. **Comparing two data sets:** If asked which data set has a larger standard deviation, look at how far the values are from their respective means. The set with values more spread out from its mean has the larger standard deviation.

**Example for comparison:** Set A: $\\{5, 5, 5, 5, 5\\}$ — SD = 0
Set B: $\\{1, 3, 5, 7, 9\\}$ — SD > 0 (values are spread around the mean of 5)
Set C: $\\{-10, 0, 5, 10, 20\\}$ — SD > SD of Set B (even more spread out)

---

## Key Formulas

- **Mean:** $\\bar{x} = \\frac{\\text{Sum}}{n}$, equivalently $\\text{Sum} = n \\cdot \\bar{x}$
- **Combined Mean:** $\\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$
- **New mean after adding value $v$:** $\\frac{n\\bar{x} + v}{n + 1}$
- **Median (odd $n$):** Value at position $\\frac{n+1}{2}$
- **Median (even $n$):** Average of values at positions $\\frac{n}{2}$ and $\\frac{n}{2}+1$
- **Range:** Max $-$ Min

---

## Worked Examples

### Example 1: Finding a Missing Value from the Average

**Problem:** The average of six numbers is 8. Five of the numbers are 3, 5, 7, 10, and 13. What is the sixth number?

**Solution:** Use the sum relationship.

$$\\text{Sum of all six} = 6 \\times 8 = 48$$

$$\\text{Sum of known five} = 3 + 5 + 7 + 10 + 13 = 38$$

$$\\text{Sixth number} = 48 - 38 = \\textbf{10}$$

### Example 2: Combining Two Groups

**Problem:** In a company, the 40 employees in Department A have an average salary of $\\$50{,}000$, and the 60 employees in Department B have an average salary of $\\$70{,}000$. What is the average salary for the entire company?

**Solution:**

$$\\text{Overall Average} = \\frac{(40)(50{,}000) + (60)(70{,}000)}{40 + 60}$$

$$= \\frac{2{,}000{,}000 + 4{,}200{,}000}{100} = \\frac{6{,}200{,}000}{100} = \\$62{,}000$$

Note: the answer is not $\\$60{,}000$. The overall average is pulled toward $\\$70{,}000$ because Department B has more employees.

### Example 3: Median with an Added Value

**Problem:** Set S = $\\{2, 5, 8, 11, 14\\}$. If the value 6 is added to Set S, what is the new median?

**Solution:** The new set in order is $\\{2, 5, 6, 8, 11, 14\\}$ (6 values).

Median = average of 3rd and 4th values = $\\frac{6 + 8}{2} = \\textbf{7}$

### Example 4: Standard Deviation Comparison

**Problem:** Set A = $\\{10, 20, 30, 40, 50\\}$ and Set B = $\\{110, 120, 130, 140, 150\\}$. Which set has a greater standard deviation?

**Solution:** Set B is simply Set A with 100 added to every value. Adding a constant to every value **does not change** the standard deviation.

Therefore, both sets have the **same standard deviation**.

---

## GMAT Tips

1. **"Sum = Mean $\\times$ Count" is your best friend.** Almost every GMAT average problem can be solved by converting between sums, means, and counts. When you see the word "average," immediately think of this relationship.

2. **Mean vs. Median in skewed data.** In a set with a few very high outliers (right-skewed), the mean is typically **greater** than the median. In a set with a few very low outliers (left-skewed), the mean is typically **less** than the median. If the data is symmetric, the mean and median are equal.

3. **For evenly spaced sets,** the mean equals the median, and both equal the average of the first and last terms:

$$\\text{Mean} = \\text{Median} = \\frac{\\text{First} + \\text{Last}}{2}$$

4. **Standard deviation is always non-negative.** It is zero if and only if all data values are identical. The GMAT will never expect you to compute SD numerically; it will ask comparative or conceptual questions.

5. **On Data Sufficiency,** knowing the mean and the number of data points is equivalent to knowing the sum. If a statement gives you the average, you essentially know the total, which is often the key to solving the problem.

6. **When a value is added to or removed from a set,** think about whether the new value is above, below, or equal to the current mean. This immediately tells you the direction of change (increase, decrease, or no change) without requiring a full computation.

7. **Watch for problems that give the median and ask about the mean (or vice versa).** These are usually Data Sufficiency questions where the answer is that you **cannot** determine one from the other without more information, unless the set is symmetric or evenly spaced.

8. **Range is fragile.** If a GMAT problem asks whether adding or removing a value changes the range, check only whether the new value is a new maximum, a new minimum, or falls between the existing extremes.
`;
