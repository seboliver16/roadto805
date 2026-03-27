export const content = `
# Word Problems

Word problems are the bridge between English and algebra on the GRE. The key skill is **translation**: converting sentences into equations you can solve. Once you set up the equation correctly, the math is usually straightforward. The GRE tests whether you can identify what the question is really asking and avoid the traps hidden in the wording.

---

## Translating Words to Algebra

The first step in any word problem is converting the English into mathematical expressions.

**Key translations:**

| English Phrase | Math Symbol |
|---|---|
| "is," "was," "will be," "equals" | $=$ |
| "more than," "greater than," "increased by" | $+$ |
| "less than," "fewer than," "decreased by" | $-$ |
| "times," "of," "product" | $\\times$ |
| "divided by," "per," "ratio of" | $\\div$ |
| "what," "a number," "some number" | $x$ (variable) |

**Example:** "Five more than three times a number is 23."

$$3x + 5 = 23 \\implies 3x = 18 \\implies x = 6$$

> **Common Trap:** "Less than" reverses the order. "5 less than $x$" is $x - 5$, **not** $5 - x$. Similarly, "10 less than twice a number" is $2x - 10$, not $10 - 2x$. Read carefully.

---

## Age Problems

Age problems involve setting up relationships between ages at different points in time.

**Strategy:** Define one variable and express all other ages in terms of it. Use a time-shift to relate ages across different years.

### Worked Example

**Problem:** Maria is 4 times as old as her daughter. In 6 years, Maria will be 3 times as old as her daughter. How old is Maria now?

**Solution:**

Let the daughter's current age be $d$.

- Maria's current age: $4d$
- In 6 years: daughter is $d + 6$, Maria is $4d + 6$

Set up the equation for "in 6 years":

$$4d + 6 = 3(d + 6)$$
$$4d + 6 = 3d + 18$$
$$d = 12$$

Maria's current age: $4(12) = \\textbf{48}$.

> **Strategy:** Always check your answer by plugging back in. Maria is 48, daughter is 12. In 6 years: Maria is 54, daughter is 18. Is $54 = 3 \\times 18$? Yes.

---

## Distance, Rate, and Time

The fundamental relationship is:

$$d = r \\times t$$

which rearranges to $r = \\frac{d}{t}$ and $t = \\frac{d}{r}$.

### Worked Example: Meeting from Opposite Directions

**Problem:** Two trains leave cities A and B (300 miles apart) at the same time, heading toward each other. Train A travels at 60 mph and Train B at 40 mph. How long until they meet?

**Solution:**

When two objects move toward each other, their combined rate is the sum of their individual rates:

$$r_{\\text{combined}} = 60 + 40 = 100 \\text{ mph}$$

$$t = \\frac{d}{r} = \\frac{300}{100} = \\textbf{3 \\text{ hours}}$$

### Worked Example: Average Speed

**Problem:** A car drives 120 miles at 40 mph, then returns the same 120 miles at 60 mph. What is the average speed for the entire trip?

**Solution:**

Average speed is **total distance** divided by **total time**, not the average of the two speeds.

$$t_1 = \\frac{120}{40} = 3 \\text{ hours}, \\quad t_2 = \\frac{120}{60} = 2 \\text{ hours}$$

$$\\text{Average speed} = \\frac{240}{5} = \\textbf{48 \\text{ mph}}$$

> **Common Trap:** The average of 40 and 60 is 50, but the correct answer is 48. Average speed is never the simple average of speeds unless the times are equal. Since more time is spent at the slower speed, the average is pulled toward 40.

---

## Work Rate Problems

If a worker can complete a job in $t$ hours, their rate is $\\frac{1}{t}$ of the job per hour. Combined rates add:

$$\\frac{1}{t_A} + \\frac{1}{t_B} = \\frac{1}{t_{\\text{together}}}$$

### Worked Example

**Problem:** Machine A can fill an order in 6 hours. Machine B can fill the same order in 4 hours. Working together, how long will it take to fill the order?

**Solution:**

$$\\frac{1}{6} + \\frac{1}{4} = \\frac{2}{12} + \\frac{3}{12} = \\frac{5}{12}$$

$$t_{\\text{together}} = \\frac{12}{5} = \\textbf{2.4 \\text{ hours}}$$

> **Strategy:** For two workers with times $a$ and $b$, the combined time is always $\\frac{ab}{a+b}$. Here: $\\frac{6 \\times 4}{6 + 4} = \\frac{24}{10} = 2.4$. This shortcut saves time on the GRE.

---

## Mixture Problems

Mixture problems involve combining two or more quantities with different properties (concentrations, prices, etc.).

**Core equation:** Amount of "stuff" before = Amount of "stuff" after.

### Worked Example

**Problem:** A chemist has 10 liters of a 30% acid solution. How many liters of a 70% acid solution must be added to create a 40% acid solution?

**Solution:**

Let $x$ = liters of 70% solution to add.

Acid before mixing = Acid after mixing:

$$0.30(10) + 0.70(x) = 0.40(10 + x)$$
$$3 + 0.70x = 4 + 0.40x$$
$$0.30x = 1$$
$$x = \\frac{10}{3} \\approx \\textbf{3.33 \\text{ liters}}$$

> **Strategy:** In mixture problems, always track the quantity of the "pure substance" (acid, salt, cost, etc.), not percentages. Set up: (amount in part 1) + (amount in part 2) = (amount in mixture).

---

## Profit and Loss

**Key formulas:**

$$\\text{Profit} = \\text{Revenue} - \\text{Cost}$$

$$\\text{Percent Profit} = \\frac{\\text{Profit}}{\\text{Cost}} \\times 100$$

$$\\text{Selling Price} = \\text{Cost} \\times (1 + \\text{markup rate})$$

### Worked Example

**Problem:** A merchant buys an item for \\$80 and marks it up by 50%. During a sale, the item is discounted by 20%. What is the merchant's profit?

**Solution:**

Marked-up price: $80 \\times 1.50 = \\$120$

Sale price after 20% discount: $120 \\times 0.80 = \\$96$

Profit: $96 - 80 = \\textbf{\\$16}$

> **Common Trap:** A 50% markup followed by a 20% discount does **not** yield a 30% net markup. The discount is taken on the marked-up price, not the original cost. Percent changes on different bases do not simply add or subtract.

---

## Overlapping Sets (Venn Diagrams)

For two overlapping groups, use:

$$|A \\cup B| = |A| + |B| - |A \\cap B|$$

Or equivalently, the four-part formula:

$$\\text{Total} = \\text{Only A} + \\text{Only B} + \\text{Both} + \\text{Neither}$$

### Worked Example

**Problem:** In a class of 50 students, 30 study French, 25 study Spanish, and 10 study both. How many study neither language?

**Solution:**

$$\\text{Neither} = \\text{Total} - |A \\cup B| = 50 - (30 + 25 - 10) = 50 - 45 = \\textbf{5}$$

> **Strategy:** For GRE overlapping-set problems, draw a Venn diagram and fill in from the inside out. Start with "Both," then compute "Only A" and "Only B," then "Neither." This systematic approach prevents errors.

---

## GRE Question Type Tips

**Quantitative Comparison (QC):** Word problems in QC often give partial information. Before calculating, check whether you can determine the relationship without solving completely. For instance, if a rate problem asks you to compare travel times, you may only need to compare rates.

**Problem Solving (PS):** Set up your equation carefully, solve, and verify. Wrong answers often correspond to common misreadings (e.g., confusing "less than" order, using average of speeds instead of total distance / total time).

**Numeric Entry (NE):** There are no answer choices to guide you, so precision in setup is critical. Double-check units (hours vs. minutes, dollars vs. cents) and re-read the question to confirm you are answering what was asked.

---

## Key Formulas

$$\\boxed{d = r \\times t}$$

$$\\boxed{\\frac{1}{t_A} + \\frac{1}{t_B} = \\frac{1}{t_{\\text{together}}}}$$

$$\\boxed{|A \\cup B| = |A| + |B| - |A \\cap B|}$$

$$\\boxed{\\text{Average Speed} = \\frac{\\text{Total Distance}}{\\text{Total Time}}}$$
`;
