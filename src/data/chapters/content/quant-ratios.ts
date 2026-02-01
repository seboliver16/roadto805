export const content = `
# Ratios & Proportions

Ratio and proportion problems are a GMAT staple. They appear in word problems, data sufficiency questions, and mixed-topic problems involving percents, algebra, or geometry. The key to mastering these questions is understanding how ratios represent relationships, how to set up proportions correctly, and how to scale ratios to find actual values.

---

## Ratio Basics

A **ratio** is a comparison of two or more quantities by division. The ratio of $a$ to $b$ can be written as:

$$a : b \\quad \\text{or} \\quad \\frac{a}{b}$$

**Important:** A ratio expresses a **relative** relationship, not absolute values. If the ratio of boys to girls in a class is $3:2$, that does **not** mean there are exactly 3 boys and 2 girls. It means for every 3 boys, there are 2 girls. The actual numbers could be 6 and 4, or 15 and 10, or 300 and 200.

### Simplifying Ratios

Ratios should be expressed in their simplest form, just like fractions. Divide all parts by the GCD.

$$12 : 8 = 3 : 2 \\quad (\\text{divide both by 4})$$

$$15 : 25 : 10 = 3 : 5 : 2 \\quad (\\text{divide all by 5})$$

### The Multiplier Concept

This is the single most important concept for solving GMAT ratio problems.

If the ratio of $A$ to $B$ is $3:5$, then we can write:

$$A = 3x \\quad \\text{and} \\quad B = 5x$$

where $x$ is a **positive multiplier** (an unknown constant). The total $A + B = 8x$.

Once you know any one of the actual values or the total, you can solve for $x$ and find everything else.

**Example:** The ratio of red to blue marbles in a bag is $3:5$. If there are 40 marbles total, how many are red?

$$3x + 5x = 40 \\Rightarrow 8x = 40 \\Rightarrow x = 5$$

Red marbles $= 3(5) = \\textbf{15}$

---

## Setting Up Ratios from Word Problems

The GMAT often describes ratios indirectly. Here's how to translate common phrasings:

| Phrasing | Ratio |
|----------|-------|
| "For every 3 cats, there are 2 dogs" | cats : dogs $= 3 : 2$ |
| "The number of men is twice the number of women" | men : women $= 2 : 1$ |
| "Mixture is 40% acid" | acid : total $= 40 : 100 = 2 : 5$ |
| "Three times as many apples as oranges" | apples : oranges $= 3 : 1$ |
| "For every $\\$2$ Alice earns, Bob earns $\\$5$" | Alice : Bob $= 2 : 5$ |

### Three-Part Ratios

When a problem involves three or more quantities, set up a three-part ratio:

**Example:** "The ratio of milk to sugar to flour is 2:3:5."

$$\\text{milk} = 2x, \\quad \\text{sugar} = 3x, \\quad \\text{flour} = 5x, \\quad \\text{total} = 10x$$

---

## Part-to-Whole Ratios

A ratio can express the relationship of a **part to the whole**.

If the ratio of boys to girls is $3:2$, then the total parts $= 3 + 2 = 5$.

- Boys are $\\frac{3}{5}$ of the total.
- Girls are $\\frac{2}{5}$ of the total.

**Example:** In a mixture of water and juice in the ratio $7:3$, what fraction of the mixture is juice?

$$\\text{Juice fraction} = \\frac{3}{7 + 3} = \\frac{3}{10}$$

**GMAT trap:** Be careful about whether a problem gives you a part-to-part ratio (like boys:girls = 3:2) or a part-to-whole ratio (like boys:total = 3:5). Confusing these is a common error.

---

## Direct Proportion

Two quantities are **directly proportional** if they increase or decrease together at the same rate. If $y$ is directly proportional to $x$:

$$y = kx$$

where $k$ is a constant. Equivalently, the ratio $\\frac{y}{x}$ is constant.

**Setting up the proportion:**

$$\\frac{y_1}{x_1} = \\frac{y_2}{x_2}$$

**Example:** If 5 machines can produce 200 widgets in a day, how many widgets can 8 machines produce in a day (assuming the same production rate)?

$$\\frac{200}{5} = \\frac{w}{8} \\Rightarrow w = \\frac{200 \\times 8}{5} = \\textbf{320 widgets}$$

---

## Inverse Proportion

Two quantities are **inversely proportional** if one increases while the other decreases such that their product remains constant. If $y$ is inversely proportional to $x$:

$$xy = k$$

where $k$ is a constant. Equivalently:

$$x_1 \\times y_1 = x_2 \\times y_2$$

**Example:** If 6 workers can complete a job in 10 days, how many days would it take 15 workers to complete the same job?

$$6 \\times 10 = 15 \\times d \\Rightarrow 60 = 15d \\Rightarrow d = \\textbf{4 days}$$

**Key distinction:** More workers means fewer days (inverse relationship). More machines means more output (direct relationship). Always identify which type of proportion applies before setting up your equation.

---

## Cross-Multiplication

**Cross-multiplication** is the standard technique for solving a proportion (an equation with two equal ratios):

$$\\frac{a}{b} = \\frac{c}{d} \\quad \\Rightarrow \\quad ad = bc$$

**Example:** Solve $\\frac{x}{12} = \\frac{5}{8}$.

$$8x = 12 \\times 5 = 60 \\Rightarrow x = \\frac{60}{8} = \\textbf{7.5}$$

### When to Use Cross-Multiplication

- When you have two equivalent fractions and need to find an unknown.
- When checking if two ratios are equal (if $ad = bc$, the ratios are equal).
- When comparing two fractions (see the Fractions & Decimals chapter).

---

## Scaling Ratios

Sometimes you need to combine two separate ratios that share a common quantity.

**Example:** If $A:B = 2:3$ and $B:C = 4:5$, find $A:B:C$.

**Method:** Make the shared quantity ($B$) the same in both ratios.

- In the first ratio, $B = 3$. In the second ratio, $B = 4$.
- LCM of 3 and 4 is 12.
- Scale the first ratio by 4: $A:B = 8:12$
- Scale the second ratio by 3: $B:C = 12:15$

$$A : B : C = 8 : 12 : 15$$

### Changing Ratios

Some GMAT problems describe how a ratio changes when quantities are added or removed.

**Example:** The ratio of men to women at a party is $3:5$. If 6 more men arrive, the ratio becomes $3:4$. How many women are at the party?

Let the original numbers be $3x$ men and $5x$ women.

After 6 men arrive: $\\frac{3x + 6}{5x} = \\frac{3}{4}$

Cross-multiply: $4(3x + 6) = 3(5x)$

$$12x + 24 = 15x \\Rightarrow 24 = 3x \\Rightarrow x = 8$$

Women $= 5(8) = \\textbf{40}$

---

## Key Formulas

- **Ratio multiplier:** If $A:B = m:n$, then $A = mx$ and $B = nx$ for some constant $x$.
- **Part to whole:** If $A:B = m:n$, then $A$ is $\\frac{m}{m+n}$ of the total and $B$ is $\\frac{n}{m+n}$ of the total.
- **Direct proportion:** $\\frac{y_1}{x_1} = \\frac{y_2}{x_2}$
- **Inverse proportion:** $x_1 y_1 = x_2 y_2$
- **Cross-multiplication:** $\\frac{a}{b} = \\frac{c}{d} \\Rightarrow ad = bc$

---

## Worked Examples

### Example 1: Basic Ratio Problem

**Problem:** The ratio of apples to oranges to bananas at a fruit stand is $5:3:2$. If there are 60 pieces of fruit in total, how many oranges are there?

**Solution:**

$$5x + 3x + 2x = 60 \\Rightarrow 10x = 60 \\Rightarrow x = 6$$

Oranges $= 3(6) = \\textbf{18}$

### Example 2: Combining Ratios

**Problem:** In a class, the ratio of boys to girls is $4:3$, and the ratio of girls to teachers is $6:1$. What is the ratio of boys to teachers?

**Solution:** The shared quantity is "girls."

- Boys : Girls $= 4 : 3$. Scale by 2: $\\Rightarrow 8 : 6$
- Girls : Teachers $= 6 : 1$

Now Girls $= 6$ in both ratios:

$$\\text{Boys : Girls : Teachers} = 8 : 6 : 1$$

Therefore, Boys : Teachers $= \\textbf{8 : 1}$

### Example 3: Inverse Proportion

**Problem:** A car traveling at 60 km/h completes a journey in 4 hours. How long would the same journey take at 80 km/h?

**Solution:** Speed and time are inversely proportional (for a fixed distance).

$$60 \\times 4 = 80 \\times t \\Rightarrow 240 = 80t \\Rightarrow t = \\textbf{3 hours}$$

Alternatively, the distance is $60 \\times 4 = 240$ km, so at 80 km/h: $240 \\div 80 = 3$ hours.

### Example 4: Changing Ratios

**Problem:** A solution contains water and alcohol in the ratio $5:1$. If 10 liters of alcohol are added to 30 liters of the solution, what is the new ratio of water to alcohol?

**Solution:** In the original 30 liters:

- Water $= \\frac{5}{6} \\times 30 = 25$ liters
- Alcohol $= \\frac{1}{6} \\times 30 = 5$ liters

After adding 10 liters of alcohol:
- Water $= 25$ liters (unchanged)
- Alcohol $= 5 + 10 = 15$ liters

New ratio $= 25 : 15 = \\textbf{5 : 3}$

---

## GMAT Tips

1. **Use the multiplier $x$ immediately.** As soon as you see a ratio, set up expressions using $x$. If $A:B = 3:7$, write $A = 3x$ and $B = 7x$. This makes every subsequent calculation straightforward.

2. **Read carefully for part-to-part vs. part-to-whole.** "The ratio of boys to the class is 3:5" means boys are $\\frac{3}{5}$ of the total. "The ratio of boys to girls is 3:5" means the total has $3 + 5 = 8$ parts.

3. **In Data Sufficiency, a ratio alone is insufficient to find actual values.** Knowing that $A:B = 2:3$ tells you nothing about the actual values of $A$ and $B$ unless you also know their sum, difference, or one of their actual values.

4. **Distinguish direct from inverse proportion.** Ask yourself: if one quantity goes up, does the other go up (direct) or down (inverse)? This quick check prevents setup errors.

5. **When combining two ratios, make the common element match.** Find the LCM of the shared quantity's values in the two ratios, then scale both ratios accordingly.

6. **Unit rates are proportions in disguise.** If a problem says "12 widgets per hour," that's a ratio of 12:1 (widgets to hours). Unit rates are one of the most common real-world ratio applications tested on the GMAT.

7. **Percent-ratio connection.** A ratio of $3:7$ means the first quantity is $\\frac{3}{10} = 30\\%$ of the total. Converting between ratios and percents is a frequently needed skill.

8. **Watch for ratio problems disguised as algebra.** If a problem says "John is 3 years older than twice Mary's age," this is not a ratio problem but an algebra problem. But if it says "John's age is to Mary's age as 3 is to 2," this is a ratio problem. The phrasing matters.

9. **For complex ratio problems, use a table.** When mixtures are combined or quantities change, organizing the information in a table (with columns for each component and rows for before/after) prevents mistakes.
`;
