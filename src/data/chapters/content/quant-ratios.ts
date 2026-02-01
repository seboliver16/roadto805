export const content = `
# Ratios & Proportions

Ratio and proportion problems are a GMAT staple. They appear in word problems, data sufficiency questions, and mixed-topic problems involving percents, algebra, or geometry. The key to mastering these questions is understanding how ratios represent relationships, how to set up proportions correctly, and how to scale ratios to find actual values.

---

## Ratio Basics

A **ratio** is a comparison of two or more quantities by division. The ratio of $a$ to $b$ can be written as:

$$a : b \\quad \\text{or} \\quad \\frac{a}{b}$$

**Important:** A ratio expresses a **relative** relationship, not absolute values. If the ratio of boys to girls in a class is $3:2$, that does **not** mean there are exactly 3 boys and 2 girls. It means for every 3 boys, there are 2 girls. The actual numbers could be 6 and 4, or 15 and 10, or 300 and 200.

> **Common Trap:** Seeing a ratio of $3:2$ and assuming there are exactly 3 and 2 of something. The GMAT exploits this by offering 3 or 2 as wrong answer choices. Always remember: the actual quantities are $3x$ and $2x$ for some unknown multiplier $x$.

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

> **Quick Method:** As soon as you see a ratio in a problem, immediately write the multiplier expressions. Ratio is $m:n$? Write $mx$ and $nx$. This converts every ratio problem into a simple algebra problem.

**Example:** The ratio of red to blue marbles in a bag is $3:5$. If there are 40 marbles total, how many are red?

$$3x + 5x = 40 \\Rightarrow 8x = 40 \\Rightarrow x = 5$$

Red marbles $= 3(5) = \\textbf{15}$

**Example:** The ratio of cats to dogs to birds in a pet store is $2:5:3$. If there are 25 dogs, how many total animals are there?

**Solution:**

Using the multiplier: cats $= 2x$, dogs $= 5x$, birds $= 3x$.

$$5x = 25 \\Rightarrow x = 5$$

$$\\text{Total} = 2(5) + 5(5) + 3(5) = 10 + 25 + 15 = \\textbf{50}$$

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

> **Common Trap:** "Three times as many apples as oranges" means apples $= 3 \\times$ oranges, so the ratio is $3:1$, NOT $1:3$. Students often reverse the order. The phrase "A is three times B" always means $A = 3B$.

### Three-Part Ratios

When a problem involves three or more quantities, set up a three-part ratio:

**Example:** "The ratio of milk to sugar to flour is 2:3:5."

$$\\text{milk} = 2x, \\quad \\text{sugar} = 3x, \\quad \\text{flour} = 5x, \\quad \\text{total} = 10x$$

**Example:** A paint mixture uses red, blue, and yellow paint in the ratio $4:2:1$. If the painter needs 21 liters of paint in total, how many liters of blue paint are needed?

**Solution:**

Total parts $= 4 + 2 + 1 = 7$. So $7x = 21$, meaning $x = 3$.

$$\\text{Blue} = 2(3) = \\textbf{6 liters}$$

> **Quick Method:** For "how much of one part" questions with three-part ratios, use the fraction shortcut directly. Blue paint is $\\frac{2}{7}$ of the total, so blue $= \\frac{2}{7} \\times 21 = 6$. No need to solve for $x$ at all.

---

## Part-to-Whole Ratios

A ratio can express the relationship of a **part to the whole**.

If the ratio of boys to girls is $3:2$, then the total parts $= 3 + 2 = 5$.

- Boys are $\\frac{3}{5}$ of the total.
- Girls are $\\frac{2}{5}$ of the total.

**Example:** In a mixture of water and juice in the ratio $7:3$, what fraction of the mixture is juice?

$$\\text{Juice fraction} = \\frac{3}{7 + 3} = \\frac{3}{10}$$

> **Common Trap:** Confusing part-to-part ratios with part-to-whole ratios is one of the most frequent GMAT errors. If a problem says "the ratio of boys to girls is 3:2," boys are $\\frac{3}{5}$ of the total (not $\\frac{3}{2}$). But if it says "the ratio of boys to the class is 3:5," boys are $\\frac{3}{5}$ of the total directly. Read carefully: **who is being compared to whom?**

**Example:** In a bag, the ratio of red marbles to total marbles is $3:8$. If there are 40 marbles in the bag, how many are NOT red?

**Solution:**

Red marbles $= \\frac{3}{8} \\times 40 = 15$.

Non-red marbles $= 40 - 15 = \\textbf{25}$.

Alternatively, non-red fraction $= \\frac{5}{8}$, so non-red $= \\frac{5}{8} \\times 40 = 25$.

---

## Direct Proportion

Two quantities are **directly proportional** if they increase or decrease together at the same rate. If $y$ is directly proportional to $x$:

$$y = kx$$

where $k$ is a constant. Equivalently, the ratio $\\frac{y}{x}$ is constant.

**Setting up the proportion:**

$$\\frac{y_1}{x_1} = \\frac{y_2}{x_2}$$

**Example:** If 5 machines can produce 200 widgets in a day, how many widgets can 8 machines produce in a day (assuming the same production rate)?

$$\\frac{200}{5} = \\frac{w}{8} \\Rightarrow w = \\frac{200 \\times 8}{5} = \\textbf{320 widgets}$$

> **Quick Method:** In direct proportion problems, find the **unit rate** first. Here, each machine produces $200 \\div 5 = 40$ widgets/day. Then multiply: $40 \\times 8 = 320$. Unit rates make these problems almost instant.

**Example:** A recipe calls for 2 cups of flour to make 24 cookies. How many cups of flour are needed to make 60 cookies?

**Solution:**

Flour and cookies are directly proportional.

$$\\frac{2}{24} = \\frac{f}{60}$$

$$f = \\frac{2 \\times 60}{24} = \\frac{120}{24} = \\textbf{5 cups}$$

---

## Inverse Proportion

Two quantities are **inversely proportional** if one increases while the other decreases such that their product remains constant. If $y$ is inversely proportional to $x$:

$$xy = k$$

where $k$ is a constant. Equivalently:

$$x_1 \\times y_1 = x_2 \\times y_2$$

**Example:** If 6 workers can complete a job in 10 days, how many days would it take 15 workers to complete the same job?

$$6 \\times 10 = 15 \\times d \\Rightarrow 60 = 15d \\Rightarrow d = \\textbf{4 days}$$

**Key distinction:** More workers means fewer days (inverse relationship). More machines means more output (direct relationship). Always identify which type of proportion applies before setting up your equation.

> **Common Trap:** Applying direct proportion when the relationship is actually inverse (or vice versa). A classic wrong answer: "If 6 workers take 10 days, then 15 workers take 25 days" (incorrectly scaling up instead of down). Ask yourself: "If I increase one quantity, does the other go UP or DOWN?" If down, it is inverse.

**Example:** A pipe fills a tank in 12 hours. If a second identical pipe is added, how long will it take both pipes together to fill the tank?

**Solution:**

One pipe fills $\\frac{1}{12}$ of the tank per hour. Two identical pipes fill $\\frac{2}{12} = \\frac{1}{6}$ of the tank per hour.

$$\\text{Time} = \\frac{1}{1/6} = \\textbf{6 hours}$$

> **Quick Method:** For identical workers/pipes/machines, just divide the time by the number of units. One pipe takes 12 hours, two identical pipes take $12 \\div 2 = 6$ hours.

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

> **Quick Method:** Before cross-multiplying, check if you can simplify. In $\\frac{x}{12} = \\frac{5}{8}$, you could simplify the right side relationship: $12 = 8 \\times 1.5$, so $x = 5 \\times 1.5 = 7.5$. Spotting the scaling factor avoids extra arithmetic.

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

> **Quick Method:** To combine $A:B = m:n$ and $B:C = p:q$, multiply the first ratio by $p$ and the second by $n$. So $A:B = mp:np$ and $B:C = np:nq$, giving $A:B:C = mp:np:nq$. For the example above: $A:B:C = 2 \\cdot 4 : 3 \\cdot 4 : 3 \\cdot 5 = 8:12:15$.

**Example:** If $X:Y = 5:2$ and $Y:Z = 3:7$, find $X:Y:Z$.

**Solution:**

Using the shortcut: multiply first ratio by 3 (value of $Y$ in second ratio) and second ratio by 2 (value of $Y$ in first ratio):

$$X:Y:Z = 5 \\times 3 : 2 \\times 3 : 2 \\times 7 = 15 : 6 : 14$$

### Changing Ratios

Some GMAT problems describe how a ratio changes when quantities are added or removed.

**Example:** The ratio of men to women at a party is $3:5$. If 6 more men arrive, the ratio becomes $3:4$. How many women are at the party?

Let the original numbers be $3x$ men and $5x$ women.

After 6 men arrive: $\\frac{3x + 6}{5x} = \\frac{3}{4}$

Cross-multiply: $4(3x + 6) = 3(5x)$

$$12x + 24 = 15x \\Rightarrow 24 = 3x \\Rightarrow x = 8$$

Women $= 5(8) = \\textbf{40}$

> **Common Trap:** In changing-ratio problems, students sometimes set up the wrong "after" expression. Only the quantity that changed should be modified. Here, women stayed at $5x$ while men became $3x + 6$. A common error is writing $5x + 6$ or changing both quantities.

**Example:** A jar contains red and blue marbles in the ratio $4:7$. After 18 red marbles are added, the ratio becomes $2:1$. How many blue marbles are in the jar?

**Solution:**

Let red $= 4x$, blue $= 7x$.

After adding 18 red marbles:

$$\\frac{4x + 18}{7x} = \\frac{2}{1}$$

Cross-multiply: $4x + 18 = 14x$

$$18 = 10x \\Rightarrow x = 1.8$$

Blue marbles $= 7(1.8) = \\textbf{12.6}$

Wait --- marbles must be whole numbers. Let us recheck. Since $x = 1.8$ is not an integer, let us re-examine. Actually, $x$ does not need to be an integer, but the final counts must be integers. Here $7(1.8) = 12.6$ is not an integer, so the problem as stated would be flawed. On the actual GMAT, the numbers always work out cleanly. This illustrates an important check:

> **Quick Method:** After solving a ratio word problem, verify that your answer makes sense. Marble counts must be positive integers. Prices must be positive. Ages must be non-negative. If your answer violates these constraints, recheck your setup.

Let us fix the example: A jar contains red and blue marbles in the ratio $4:7$. After 15 red marbles are added, the ratio becomes $1:1$. How many blue marbles are in the jar?

**Solution:**

Let red $= 4x$, blue $= 7x$.

$$\\frac{4x + 15}{7x} = \\frac{1}{1} \\Rightarrow 4x + 15 = 7x \\Rightarrow 15 = 3x \\Rightarrow x = 5$$

Blue marbles $= 7(5) = \\textbf{35}$

---

## Key Formulas

$$\\boxed{\\text{Ratio multiplier: If } A:B = m:n, \\text{ then } A = mx \\text{ and } B = nx}$$

$$\\boxed{\\text{Part to whole: } A \\text{ is } \\frac{m}{m+n} \\text{ of the total}}$$

$$\\boxed{\\text{Direct proportion: } \\frac{y_1}{x_1} = \\frac{y_2}{x_2}}$$

$$\\boxed{\\text{Inverse proportion: } x_1 y_1 = x_2 y_2}$$

$$\\boxed{\\text{Cross-multiplication: } \\frac{a}{b} = \\frac{c}{d} \\Rightarrow ad = bc}$$

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

### Example 5: Percent-to-Ratio Conversion

**Problem:** In a class of 80 students, 45% are female. The ratio of female students who passed the exam to female students who failed is $5:4$. How many female students passed the exam?

**Solution:**

Step 1: Find the number of female students.

$$\\text{Female students} = 0.45 \\times 80 = 36$$

Step 2: Use the ratio to find how many passed.

Pass : Fail $= 5:4$, total parts $= 9$.

$$\\text{Passed} = \\frac{5}{9} \\times 36 = \\textbf{20}$$

### Example 6: Data Sufficiency Ratio Problem

**Problem:** What is the number of women in a room?

(1) The ratio of men to women is $3:4$.

(2) There are 56 people in the room.

**Solution:**

**Statement (1):** Men $= 3x$, Women $= 4x$. Without knowing $x$ or the total, we cannot find the actual count. **Not sufficient.**

**Statement (2):** Tells us the total, but not how it splits between men and women. **Not sufficient.**

**Combined:** $3x + 4x = 56 \\Rightarrow 7x = 56 \\Rightarrow x = 8$. Women $= 4(8) = 32$. **Sufficient.**

Answer: **(C)** --- Both statements together are sufficient.

> **Common Trap:** On Data Sufficiency, a ratio alone **never** tells you actual values. You always need one additional piece of information (a total, a difference, or one actual value) to pin down the multiplier.

### Example 7: Multi-Step Ratio with Algebra

**Problem:** The ratio of Tom's money to Jerry's money is $7:3$. If Tom gives Jerry $\\$20$, the ratio becomes $3:2$. How much money does Tom have originally?

**Solution:**

Let Tom $= 7x$, Jerry $= 3x$.

After the transfer: Tom has $7x - 20$, Jerry has $3x + 20$.

$$\\frac{7x - 20}{3x + 20} = \\frac{3}{2}$$

Cross-multiply:

$$2(7x - 20) = 3(3x + 20)$$
$$14x - 40 = 9x + 60$$
$$5x = 100$$
$$x = 20$$

Tom originally has $7(20) = \\textbf{\\$140}$.

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
