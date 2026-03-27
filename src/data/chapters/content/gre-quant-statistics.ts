export const content = `
# Statistics & Probability

Statistics and probability are high-frequency GRE Quant topics. The GRE tests your conceptual understanding of these ideas more than your ability to crunch large computations. Know the definitions, understand what shifts in data do to measures of central tendency and spread, and be comfortable with basic probability rules.

---

## Mean (Average)

The **arithmetic mean** is the sum of all values divided by the number of values:

$$\\text{Mean} = \\bar{x} = \\frac{\\sum x_i}{n}$$

This can be rearranged to a powerful formula:

$$\\text{Sum} = \\text{Mean} \\times \\text{Count}$$

### Worked Example

**Problem:** The average of 5 numbers is 20. A sixth number is added, and the new average is 25. What is the sixth number?

**Solution:**

Original sum $= 20 \\times 5 = 100$

New sum $= 25 \\times 6 = 150$

Sixth number $= 150 - 100 = \\textbf{50}$

> **Strategy:** The formula Sum $=$ Mean $\\times$ Count is one of the most useful tools on the GRE. It lets you move between averages and totals effortlessly.

---

## Weighted Mean

When groups have different sizes, use the **weighted average**:

$$\\text{Weighted Mean} = \\frac{w_1 x_1 + w_2 x_2 + \\cdots + w_k x_k}{w_1 + w_2 + \\cdots + w_k}$$

### Worked Example

**Problem:** In a class, 30 students scored an average of 80 and 20 students scored an average of 90. What is the overall class average?

**Solution:**

$$\\text{Weighted Mean} = \\frac{30(80) + 20(90)}{30 + 20} = \\frac{2400 + 1800}{50} = \\frac{4200}{50} = \\textbf{84}$$

> **Common Trap:** The simple average of 80 and 90 is 85, but the weighted average is 84 because the larger group (30 students) has the lower score. The weighted average is always pulled toward the group with more weight.

---

## Median

The **median** is the middle value when data is arranged in order.

- **Odd number of values:** the median is the middle value.
- **Even number of values:** the median is the average of the two middle values.

For $n$ values in order, the median is at position $\\frac{n+1}{2}$.

**Example:** For the set $\\{3, 7, 9, 15, 22\\}$, the median is $9$ (the 3rd value).

**Example:** For the set $\\{4, 8, 12, 20\\}$, the median is $\\frac{8 + 12}{2} = 10$.

> **Strategy:** The median is resistant to outliers. Adding an extremely large or small value to a data set changes the mean dramatically but may not change the median at all. The GRE often tests this distinction.

---

## Mode

The **mode** is the value that appears most frequently. A data set can have no mode (all values unique), one mode, or multiple modes.

---

## Range

$$\\text{Range} = \\text{Maximum} - \\text{Minimum}$$

The range measures the total spread of the data but is sensitive to outliers.

---

## Standard Deviation (Conceptual)

The GRE does **not** require you to calculate standard deviation by formula, but you must understand the concept.

**Standard deviation** measures how spread out the data is from the mean. A larger standard deviation means data points are more spread out; a smaller one means they are clustered near the mean.

**Key properties:**
- Adding a constant to every value: mean changes, **standard deviation stays the same**.
- Multiplying every value by a constant $k$: mean is multiplied by $k$, **standard deviation is multiplied by $|k|$**.
- A set where all values are equal has standard deviation $= 0$.

### Worked Example

**Problem:** Set A = $\\{10, 10, 10, 10, 10\\}$. Set B = $\\{6, 8, 10, 12, 14\\}$. Compare their standard deviations.

**Solution:**

Both sets have mean $= 10$. Set A has all identical values, so its standard deviation is $0$. Set B has values spread out from the mean, so its standard deviation is positive.

$$\\text{SD of A} < \\text{SD of B}$$

> **Common Trap:** Two data sets can have the same mean and the same range but different standard deviations. Standard deviation depends on how each individual value deviates from the mean, not just the extremes.

---

## Quartiles and Box Plots

**Quartiles** divide ordered data into four equal parts:
- $Q_1$ (25th percentile): median of the lower half
- $Q_2$ (50th percentile): the median
- $Q_3$ (75th percentile): median of the upper half

**Interquartile Range (IQR):**

$$\\text{IQR} = Q_3 - Q_1$$

The IQR measures the spread of the middle 50% of the data and is resistant to outliers.

A **box plot** displays the five-number summary: minimum, $Q_1$, median, $Q_3$, maximum.

---

## Normal Distribution

The **normal distribution** is a symmetric, bell-shaped curve. The GRE expects you to know the **68-95-99.7 rule** (the empirical rule):

- About **68%** of data falls within **1 standard deviation** of the mean: $\\mu \\pm \\sigma$
- About **95%** of data falls within **2 standard deviations**: $\\mu \\pm 2\\sigma$
- About **99.7%** of data falls within **3 standard deviations**: $\\mu \\pm 3\\sigma$

### Worked Example

**Problem:** Scores on a test are normally distributed with mean $\\mu = 500$ and standard deviation $\\sigma = 100$. What percent of scores fall between 300 and 700?

**Solution:**

$300 = 500 - 200 = \\mu - 2\\sigma$ and $700 = 500 + 200 = \\mu + 2\\sigma$.

By the empirical rule, about **95%** of scores fall within 2 standard deviations of the mean.

> **Strategy:** For normal distribution problems, convert the given values to "how many standard deviations from the mean" and apply the 68-95-99.7 rule. By symmetry, about 34% of data falls between $\\mu$ and $\\mu + \\sigma$, and about 47.5% falls between $\\mu$ and $\\mu + 2\\sigma$.

---

## Basic Probability

$$P(A) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of outcomes}}$$

Probability always satisfies $0 \\le P(A) \\le 1$.

### Complementary Probability

$$P(\\text{not } A) = 1 - P(A)$$

This is often the fastest approach when the event is complex but its complement is simple.

**Example:** The probability of rolling at least one 6 in three rolls of a die.

Direct calculation is complicated. Instead:

$$P(\\text{no sixes}) = \\left(\\frac{5}{6}\\right)^3 = \\frac{125}{216}$$

$$P(\\text{at least one 6}) = 1 - \\frac{125}{216} = \\frac{91}{216} \\approx 0.421$$

> **Strategy:** Whenever a problem says "at least one," strongly consider using complementary probability. It is almost always simpler than computing all the individual cases.

---

## Independent vs. Dependent Events

**Independent events:** The outcome of one does not affect the other.

$$P(A \\text{ and } B) = P(A) \\times P(B)$$

**Example:** Flipping a coin twice. $P(\\text{heads then heads}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.

**Dependent events:** The outcome of the first event affects the second.

$$P(A \\text{ and } B) = P(A) \\times P(B \\mid A)$$

**Example:** Drawing two cards from a deck without replacement. $P(\\text{two aces}) = \\frac{4}{52} \\times \\frac{3}{51} = \\frac{12}{2652} = \\frac{1}{221}$.

> **Common Trap:** On the GRE, pay close attention to whether selection is done "with replacement" (independent) or "without replacement" (dependent). This distinction changes the answer significantly.

---

## Mutually Exclusive Events

Events are **mutually exclusive** if they cannot occur at the same time: $P(A \\text{ and } B) = 0$.

$$P(A \\text{ or } B) = P(A) + P(B) \\quad \\text{(mutually exclusive)}$$

For events that are **not** mutually exclusive:

$$P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$$

---

## Expected Value

The **expected value** is the long-run average outcome:

$$E(X) = \\sum x_i \\cdot P(x_i)$$

### Worked Example

**Problem:** A game costs \\$5 to play. You roll a die: if you roll a 6, you win \\$20; otherwise, you win nothing. What is the expected net gain?

**Solution:**

$$E(\\text{net gain}) = \\frac{1}{6}(20 - 5) + \\frac{5}{6}(0 - 5) = \\frac{1}{6}(15) + \\frac{5}{6}(-5) = \\frac{15}{6} - \\frac{25}{6} = -\\frac{10}{6} \\approx \\textbf{-\\$1.67}$$

On average, you lose about \\$1.67 per game.

---

## GRE Question Type Tips

**Quantitative Comparison (QC):** Statistics QC problems often ask you to compare mean vs. median, or compare standard deviations of two sets. Remember: in a right-skewed distribution, mean > median; in a left-skewed distribution, mean < median.

**Problem Solving (PS):** Multi-step probability problems are common. Break them into stages and apply the multiplication rule (for "and") or addition rule (for "or").

**Numeric Entry (NE):** Probability answers should be expressed as fractions or decimals. Reduce fractions fully. If the problem asks for a percent, do not forget to multiply by 100.

---

## Key Formulas

$$\\boxed{\\text{Mean} = \\frac{\\text{Sum}}{\\text{Count}}, \\quad \\text{Sum} = \\text{Mean} \\times \\text{Count}}$$

$$\\boxed{P(A) = \\frac{\\text{favorable}}{\\text{total}}, \\quad P(\\text{not } A) = 1 - P(A)}$$

$$\\boxed{P(A \\text{ and } B) = P(A) \\times P(B) \\quad \\text{(independent)}}$$

$$\\boxed{P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)}$$

$$\\boxed{E(X) = \\sum x_i \\cdot P(x_i)}$$

$$\\boxed{68\\text{-}95\\text{-}99.7 \\text{ rule for normal distributions}}$$
`;
