export const content = `
# Ratios, Rates & Proportions

Ratios, rates, and proportions are among the most frequently tested topics on the GRE. They appear in word problems across every question format and connect naturally to percents, fractions, and algebra. The key to these problems is disciplined setup — if you translate the words into a clean equation, the math is usually straightforward.

---

## Ratios

A **ratio** compares two or more quantities. The ratio of $a$ to $b$ can be written as $a : b$ or $\\frac{a}{b}$.

### The Multiplier Method

If the ratio of boys to girls is $3 : 5$, the actual counts are $3k$ and $5k$ for some positive multiplier $k$. The total is $3k + 5k = 8k$.

**Example:** The ratio of red to blue marbles in a bag is $2 : 7$. If there are 36 marbles total, how many are red?

$$2k + 7k = 36 \\implies 9k = 36 \\implies k = 4$$

Red marbles $= 2k = 2(4) = \\textbf{8}$.

> **Strategy:** Always introduce a multiplier $k$ when working with ratios. This converts the ratio into actual quantities you can add, subtract, and set equal. It is the single most reliable technique for GRE ratio problems.

### Part-to-Whole from a Ratio

If the ratio of $A : B : C = 2 : 3 : 5$, then:

$$\\text{Part } A = \\frac{2}{2 + 3 + 5} = \\frac{2}{10} = \\frac{1}{5} \\text{ of the whole}$$

### Changing Ratios

When quantities change, set up the ratio before and after.

**Example:** The ratio of cats to dogs is $4 : 3$. After 5 more cats arrive, the ratio becomes $3 : 2$. How many dogs are there?

Before: cats $= 4k$, dogs $= 3k$.
After: cats $= 4k + 5$, dogs $= 3k$.

$$\\frac{4k + 5}{3k} = \\frac{3}{2}$$

Cross-multiply: $2(4k + 5) = 3(3k) \\implies 8k + 10 = 9k \\implies k = 10$.

Dogs $= 3k = \\textbf{30}$.

---

## Proportions

A **proportion** is an equation stating that two ratios are equal:

$$\\frac{a}{b} = \\frac{c}{d}$$

**Cross-multiplication** gives $ad = bc$.

**Example:** If 3 widgets cost \\$7.50, how much do 8 widgets cost?

$$\\frac{3}{7.50} = \\frac{8}{x} \\implies 3x = 60 \\implies x = \\textbf{\\$20}$$

> **Common Trap:** Proportions assume a **linear** (constant rate) relationship. If the problem says "the first 100 items cost \\$5 each but additional items cost \\$4 each," you cannot set up a simple proportion. Read carefully for tiered or changing rates.

---

## Direct & Inverse Variation

### Direct Variation (Direct Proportion)

$y$ varies directly with $x$: $y = kx$ for some constant $k$.

If $x$ doubles, $y$ doubles. The ratio $\\frac{y}{x} = k$ remains constant.

**Example:** If $y$ varies directly with $x$, and $y = 15$ when $x = 3$, find $y$ when $x = 7$.

$$k = \\frac{15}{3} = 5, \\quad y = 5 \\times 7 = \\textbf{35}$$

### Inverse Variation (Inverse Proportion)

$y$ varies inversely with $x$: $y = \\frac{k}{x}$, or equivalently $xy = k$.

If $x$ doubles, $y$ is halved. The product $xy$ remains constant.

**Example:** If $y$ varies inversely with $x$, and $y = 6$ when $x = 4$, find $y$ when $x = 8$.

$$k = xy = 6 \\times 4 = 24, \\quad y = \\frac{24}{8} = \\textbf{3}$$

> **Strategy:** For variation problems, immediately identify whether the relationship is direct ($\\frac{y}{x} = k$) or inverse ($xy = k$). Use the given pair to find $k$, then solve for the unknown.

---

## Rates

A **rate** is a ratio with different units: distance per time, cost per item, output per hour, etc.

### Distance, Rate, Time

$$d = r \\times t, \\quad r = \\frac{d}{t}, \\quad t = \\frac{d}{r}$$

**Example:** A car travels 150 miles in 2.5 hours. What is its average speed?

$$r = \\frac{150}{2.5} = \\textbf{60 \\text{ mph}}$$

### Average Speed

Average speed for an entire trip is **not** the average of the individual speeds. It is:

$$\\text{Average speed} = \\frac{\\text{Total distance}}{\\text{Total time}}$$

**Example:** A driver goes 60 mph for 100 miles, then 40 mph for 100 miles. What is the average speed?

$$t_1 = \\frac{100}{60} = \\frac{5}{3} \\text{ hours}, \\quad t_2 = \\frac{100}{40} = \\frac{5}{2} \\text{ hours}$$

$$\\text{Average speed} = \\frac{200}{\\frac{5}{3} + \\frac{5}{2}} = \\frac{200}{\\frac{25}{6}} = 200 \\times \\frac{6}{25} = \\textbf{48 \\text{ mph}}$$

> **Common Trap:** The average speed for equal distances at two different speeds is the **harmonic mean**, not the arithmetic mean. For speeds $a$ and $b$ over equal distances: Average speed $= \\frac{2ab}{a + b}$. Here: $\\frac{2(60)(40)}{60 + 40} = \\frac{4800}{100} = 48$, confirming our result. The answer is always less than the arithmetic mean.

---

## Combined Rate Problems

When two entities work on the same task simultaneously, their **rates add**.

$$r_{\\text{combined}} = r_1 + r_2$$

### Work Problems

If worker A can complete a job in $a$ hours and worker B in $b$ hours:

$$\\frac{1}{a} + \\frac{1}{b} = \\frac{1}{t}$$

where $t$ is the time to complete the job together.

**Example:** Pipe A fills a tank in 6 hours. Pipe B fills it in 4 hours. How long to fill it together?

$$\\frac{1}{6} + \\frac{1}{4} = \\frac{2}{12} + \\frac{3}{12} = \\frac{5}{12}$$

$$t = \\frac{12}{5} = \\textbf{2.4 \\text{ hours}}$$

> **Strategy:** The combined time is always **less** than the shorter individual time. Use this as a quick sanity check. If one pipe fills the tank in 4 hours, together they must take less than 4 hours. If your answer is greater, you made an error.

### Relative Speed

- Objects moving toward each other: relative speed $= r_1 + r_2$.
- Objects moving in the same direction: relative speed $= |r_1 - r_2|$.

**Example:** Two trains are 300 miles apart and move toward each other at 70 mph and 80 mph. When do they meet?

$$t = \\frac{300}{70 + 80} = \\frac{300}{150} = \\textbf{2 \\text{ hours}}$$

---

## Mixture Problems

Mixture problems combine two or more solutions/items at different concentrations or prices.

### Weighted Average Approach

$$\\text{Total value} = \\text{Amount}_1 \\times \\text{Concentration}_1 + \\text{Amount}_2 \\times \\text{Concentration}_2$$

**Example:** How many liters of a 20% salt solution must be mixed with 5 liters of a 50% salt solution to produce a 30% salt solution?

Let $x$ = liters of 20% solution.

$$0.20x + 0.50(5) = 0.30(x + 5)$$

$$0.20x + 2.5 = 0.30x + 1.5$$

$$1 = 0.10x \\implies x = \\textbf{10 \\text{ liters}}$$

> **Common Trap:** In mixture problems, make sure your equation accounts for the total amount of the mixture, not just one component. The final concentration applies to the **combined** volume.

---

## Unit Conversions

Set up conversion factors as fractions that cancel unwanted units.

**Example:** Convert 45 miles per hour to feet per second.

$$45 \\;\\frac{\\text{miles}}{\\text{hour}} \\times \\frac{5{,}280 \\;\\text{feet}}{1 \\;\\text{mile}} \\times \\frac{1 \\;\\text{hour}}{3{,}600 \\;\\text{seconds}} = 45 \\times \\frac{5{,}280}{3{,}600} = 45 \\times \\frac{22}{15} = \\textbf{66 \\;\\text{ft/s}}$$

> **Strategy:** For mph to ft/s on the GRE, multiply by $\\frac{22}{15}$. For ft/s to mph, multiply by $\\frac{15}{22}$. Memorizing this shortcut can save valuable time.

---

## Worked Examples

### Example 1: Ratio Word Problem

**Problem:** In a class, the ratio of students who passed to those who failed is $7 : 3$. If 12 more students had passed, the ratio would have been $9 : 1$. How many students are in the class?

Let passed $= 7k$, failed $= 3k$, total $= 10k$.

New scenario: passed $= 7k + 12$, failed $= 3k - 12$ (the 12 who "would have passed" come from the failed group — but actually the problem says "if 12 more students had passed," meaning total stays the same with 12 shifting from fail to pass).

$$\\frac{7k + 12}{3k - 12} = \\frac{9}{1}$$

$$7k + 12 = 9(3k - 12) = 27k - 108$$

$$120 = 20k \\implies k = 6$$

Total $= 10k = \\textbf{60}$ students.

### Example 2: Combined Work

**Problem:** Machine A produces 100 parts in 5 hours. Machine B produces 100 parts in 4 hours. Working together, how long to produce 100 parts?

Rate A $= \\frac{100}{5} = 20$ parts/hour. Rate B $= \\frac{100}{4} = 25$ parts/hour.

Combined rate $= 45$ parts/hour.

$$t = \\frac{100}{45} = \\frac{20}{9} \\approx \\textbf{2.22 \\text{ hours}}$$

---

## GRE Question Type Tips

1. **Quantitative Comparison:** QC ratio problems often give you a ratio and ask you to compare a part to a specific number. Remember that without knowing the actual quantities (the multiplier $k$), you may not be able to determine the comparison — answer **(D)**.

2. **Problem Solving:** Rate and work problems are PS staples. Set up the $d = rt$ framework or the $\\frac{1}{a} + \\frac{1}{b} = \\frac{1}{t}$ formula immediately. Most errors come from sloppy setup, not from the algebra.

3. **Numeric Entry:** Mixture problems and unit conversion frequently appear as NE. Show all your work and double-check units — there are no answer choices to sanity-check against.

4. **Multiple-answer PS:** Some ratio problems will ask "which of the following COULD be the total number of items?" The total must be a multiple of the sum of the ratio parts (e.g., if the ratio is $2:3:5$, the total must be a multiple of 10). Select all qualifying answers.
`;
