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

> **Quick Method:** Whenever you see the word "average" in a GMAT problem, immediately write down the equation Sum = Mean $\\times$ Count. Translate every piece of information into one of these three quantities. This single habit will solve 80% of average problems.

### Combining Groups

When two groups with known averages are combined, the overall average is **not** simply the average of the two group averages (unless the groups are the same size).

If Group 1 has $n_1$ values with mean $\\bar{x}_1$ and Group 2 has $n_2$ values with mean $\\bar{x}_2$:

$$\\text{Combined Mean} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$$

**Example:** Class A has 20 students with an average score of 80. Class B has 30 students with an average score of 90. What is the overall average?

$$\\text{Combined Mean} = \\frac{(20)(80) + (30)(90)}{20 + 30} = \\frac{1{,}600 + 2{,}700}{50} = \\frac{4{,}300}{50} = 86$$

Notice this is **not** 85 (the simple average of 80 and 90). The larger group (Class B) "pulls" the overall average closer to its mean.

> **Common Trap:** When two groups are combined, the overall average is NOT the simple average of the two group averages (unless the groups are equal in size). A group of 10 people with average age 30 and a group of 90 people with average age 40 yields an overall average of $\\frac{300 + 3600}{100} = 39$, not 35. The bigger group dominates.

### Weighted Average

The combined-groups formula above is actually a special case of the **weighted average**:

$$\\text{Weighted Average} = \\frac{w_1 x_1 + w_2 x_2 + \\cdots + w_n x_n}{w_1 + w_2 + \\cdots + w_n}$$

where $w_i$ are the weights (often frequencies or group sizes) and $x_i$ are the values.

**Key insight:** A weighted average always lies **between** the smallest and largest values, and it is **closer** to the value with the greater weight.

> **Quick Method:** Use the "teeter-totter" (lever) approach for two-group weighted averages. If the combined average is closer to Group A's average, then Group A has more members. The distances from the combined average to each group average are in the **inverse ratio** of the group sizes. For example, if the combined average is 86 (distance 6 from 80, distance 4 from 90), the group sizes are in ratio $4:6 = 2:3$.

### How Adding or Removing Values Affects the Mean

This is a favorite GMAT topic. The logic is always the same -- use the Sum formula:

**Adding a value:** If a set has $n$ values with mean $\\bar{x}$, and you add a new value $v$:

$$\\text{New Mean} = \\frac{n\\bar{x} + v}{n + 1}$$

- If $v > \\bar{x}$, the mean **increases**.
- If $v < \\bar{x}$, the mean **decreases**.
- If $v = \\bar{x}$, the mean **stays the same**.

**Removing a value:** If you remove value $v$ from a set of $n$ values with mean $\\bar{x}$:

$$\\text{New Mean} = \\frac{n\\bar{x} - v}{n - 1}$$

**Example:** The average of 8 numbers is 15. When a ninth number is added, the average becomes 17. What is the ninth number?

**Solution:**
- Original sum: $8 \\times 15 = 120$
- New sum: $9 \\times 17 = 153$
- Ninth number: $153 - 120 = \\textbf{33}$

> **Common Trap:** When a value equal to the mean is added, students sometimes think the mean increases. It does not. If the average of 10 numbers is 50 and you add an 11th number that is also 50, the new average is still $\\frac{500 + 50}{11} = \\frac{550}{11} = 50$. Only a value **above** the current mean raises it.

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

> **Quick Method:** For a set of $n$ values, the median is at position $\\frac{n+1}{2}$. For $n = 7$, the median is the 4th value. For $n = 12$, the median is the average of the 6th and 7th values. Memorize the formula once and finding the median position becomes instant.

**Example:** In the set $\\{2, 5, x, 11, 14, 20\\}$ (sorted in ascending order), the median is 9. What is the value of $x$?

**Solution:** With 6 values, the median is the average of the 3rd and 4th values:

$$\\frac{x + 11}{2} = 9$$

$$x + 11 = 18$$

$$x = \\textbf{7}$$

Verify the sorted order: $\\{2, 5, 7, 11, 14, 20\\}$ and median = $\\frac{7 + 11}{2} = 9$. ✓

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

> **Common Trap:** A problem asks: "If the number 10 is added to set $\\{3, 7, 9, 12, 15\\}$, what is the new range?" Students sometimes recompute everything. Since 10 falls between the min (3) and max (15), the range is unchanged: still 12. Only a new min or new max would change the range.

---

## Standard Deviation

The GMAT tests standard deviation **conceptually** -- you will never need to calculate it from a formula. Here is what you need to understand:

**Standard deviation** measures how spread out the data values are from the mean. It is a measure of **dispersion**.

- A **small** standard deviation means the values are clustered close to the mean.
- A **large** standard deviation means the values are spread widely from the mean.
- If **all values are the same**, the standard deviation is **0**.

### Key Conceptual Rules

1. **Adding or subtracting a constant from every value:** The standard deviation **does not change**. (Shifting all data points does not affect their spread.)

2. **Multiplying or dividing every value by a constant $k$:** The standard deviation is **multiplied by $|k|$**. (Scaling the data scales the spread.)

3. **Adding a value equal to the mean:** The standard deviation **decreases** (slightly), because you are adding a point with zero deviation from the mean, which reduces the overall average deviation.

4. **Comparing two data sets:** If asked which data set has a larger standard deviation, look at how far the values are from their respective means. The set with values more spread out from its mean has the larger standard deviation.

**Example for comparison:** Set A: $\\{5, 5, 5, 5, 5\\}$ -- SD = 0
Set B: $\\{1, 3, 5, 7, 9\\}$ -- SD > 0 (values are spread around the mean of 5)
Set C: $\\{-10, 0, 5, 10, 20\\}$ -- SD > SD of Set B (even more spread out)

> **Quick Method:** To compare standard deviations without computing them, look at how far each set's values are from the mean. You can estimate by finding the "average distance from the mean." For Set B above (mean = 5): distances are 4, 2, 0, 2, 4, averaging about 2.4. For Set A: all distances are 0. No calculation needed to see Set B has a larger SD.

> **Common Trap:** Students assume that a set with a larger range must have a larger standard deviation. This is usually true but not always. Consider $\\{1, 5, 5, 5, 9\\}$ (range = 8) vs. $\\{2, 3, 5, 7, 8\\}$ (range = 6). The first set has a larger range, but check the spread: most values in the first set are clustered at 5, while the second set's values are more evenly spread. The comparison is not automatic.

**Example:** Set P = $\\{3, 3, 3, 3, 3\\}$. Set Q is formed by multiplying each element of P by 4, then adding 10. What is the standard deviation of Set Q?

**Solution:**

Step 1: Multiplying each element by 4. The SD of P is 0 (all values are the same). Multiplying by 4: new SD $= 4 \\times 0 = 0$.

Step 2: Adding 10 to each element does not change the SD.

The SD of Set Q is **0**.

(Note: Set Q = $\\{22, 22, 22, 22, 22\\}$ -- all values are still equal.)

**Example:** Set M = $\\{10, 20, 30, 40, 50\\}$ has standard deviation $s$. A new set N is formed by multiplying each element by 3 and subtracting 5. What is the standard deviation of Set N in terms of $s$?

**Solution:**
- Multiplying by 3 multiplies the SD by 3: new SD $= 3s$
- Subtracting 5 from every value does not change the SD

The standard deviation of Set N is $\\textbf{3s}$.

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

### Example 5: Removing a Value and Finding the New Mean

**Problem:** A set of 10 numbers has a mean of 24. When the largest number is removed, the mean of the remaining 9 numbers is 20. What was the largest number?

**Solution:**

$$\\text{Original sum} = 10 \\times 24 = 240$$

$$\\text{Sum of remaining 9} = 9 \\times 20 = 180$$

$$\\text{Largest number} = 240 - 180 = \\textbf{60}$$

> **Quick Method:** The removed value always equals: (original sum) minus (new sum). This works for adding values too: the added value equals (new sum) minus (old sum).

### Example 6: Weighted Average with Three Groups

**Problem:** On a test, Section A (worth 20% of the grade) has an average score of 70, Section B (worth 30%) has an average score of 80, and Section C (worth 50%) has an average score of 90. What is the overall weighted average?

**Solution:**

$$\\text{Weighted Avg} = (0.20)(70) + (0.30)(80) + (0.50)(90)$$

$$= 14 + 24 + 45 = \\textbf{83}$$

Note: the unweighted average of 70, 80, and 90 is 80. Because Section C (with the highest score) carries the most weight, the weighted average is pulled above 80.

### Example 7: Mean, Median, and Range Together

**Problem:** Set T consists of 7 consecutive even integers. If the mean of Set T is 24, what are the range and median?

**Solution:** In any set of consecutive even integers (or any evenly spaced set), the **mean equals the median**, and both equal the middle value.

So the median is **24**.

The 7 consecutive even integers centered at 24 are:

$$\\{18, 20, 22, 24, 26, 28, 30\\}$$

$$\\text{Range} = 30 - 18 = \\textbf{12}$$

> **Quick Method:** For $n$ consecutive even integers (common difference = 2), the range is always $2(n - 1)$. For 7 consecutive even integers: $2(7-1) = 12$. For $n$ consecutive integers (common difference = 1), the range is $n - 1$. These formulas save you from listing out all the values.

> **Common Trap:** Students sometimes confuse "consecutive integers" with "consecutive even integers." Consecutive integers differ by 1 (e.g., 5, 6, 7, 8). Consecutive even integers differ by 2 (e.g., 10, 12, 14, 16). The spacing matters for range calculations and for determining specific values.

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
