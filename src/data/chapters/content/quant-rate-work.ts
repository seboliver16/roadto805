export const content = `
# Rate, Work & Distance

Rate problems are among the most common word problems on the GMAT. They appear in various disguises---distance traveled, work completed, pipes filling tanks, mixtures blended---but they all rest on the same fundamental relationship. Once you master the core framework, you can handle every variation.

---

## 1. The Fundamental Formula

$$\\text{Rate} \\times \\text{Time} = \\text{Work (or Distance)}$$

This single equation underlies every problem in this chapter:

- **Distance problems:** Rate is speed, work is distance. A car traveling at 60 mph for 3 hours covers $60 \\times 3 = 180$ miles.
- **Work problems:** Rate is the fraction of a job completed per unit of time. A painter who finishes a room in 5 hours has a rate of $\\frac{1}{5}$ rooms per hour.
- **Flow problems:** Rate is volume per unit of time. A pipe that fills 10 gallons per minute working for 6 minutes delivers 60 gallons.

**Key rearrangements:**

$$\\text{Rate} = \\frac{\\text{Work}}{\\text{Time}}, \\quad \\text{Time} = \\frac{\\text{Work}}{\\text{Rate}}$$

---

## 2. Combined Work Rate Problems

When two or more workers (or machines, or pipes) work **together**, their individual rates **add up**.

$$R_{\\text{combined}} = R_1 + R_2 + \\cdots + R_n$$

### Standard Setup

If Worker A can complete a job in $a$ hours and Worker B can complete it in $b$ hours, then:

- $R_A = \\frac{1}{a}$, $R_B = \\frac{1}{b}$
- Combined rate: $R_{\\text{combined}} = \\frac{1}{a} + \\frac{1}{b} = \\frac{a + b}{ab}$
- Time to complete the job together: $T = \\frac{1}{R_{\\text{combined}}} = \\frac{ab}{a + b}$

**The combined time is always less than either individual time.** This is a useful sanity check.

### When Workers Oppose Each Other

If a pipe fills a tank while another drains it, **subtract** the rates:

$$R_{\\text{net}} = R_{\\text{fill}} - R_{\\text{drain}}$$

If the drain rate exceeds the fill rate, the tank will never fill.

### Partial Work

Sometimes workers do not work for the entire duration. In these cases, calculate the fraction of work each contributes:

$$\\text{Work done} = \\text{Rate} \\times \\text{Time worked}$$

Add the individual contributions to get total work, which must equal 1 (one complete job).

---

## 3. Relative Speed

### Same Direction

When two objects move in the **same direction**, the gap between them closes (or opens) at the **difference** of their speeds.

$$\\text{Relative speed} = |v_1 - v_2|$$

**Example:** Car A travels at 70 mph and Car B at 50 mph. If Car A starts 40 miles behind Car B, how long until Car A catches up?

Relative speed $= 70 - 50 = 20$ mph. Time $= \\frac{40}{20} = 2$ hours.

### Opposite Directions

When two objects move **toward** each other (or **away** from each other), their speeds **add**.

$$\\text{Relative speed} = v_1 + v_2$$

**Example:** Two trains are 300 miles apart, heading toward each other at 80 mph and 70 mph. When do they meet?

Combined speed $= 80 + 70 = 150$ mph. Time $= \\frac{300}{150} = 2$ hours.

### Round Trips and Laps

For circular tracks or round trips, the relative speed concept is essential:

- Two runners going in **opposite directions** on a circular track will meet after the track length is covered at their combined speed.
- Two runners going in the **same direction** will meet again after the faster one has lapped the slower one---the gap of one full lap closes at the difference of their speeds.

---

## 4. Average Speed

**Average speed is NOT the simple average of two speeds.** This is one of the most common GMAT traps.

$$\\text{Average speed} = \\frac{\\text{Total distance}}{\\text{Total time}}$$

### The Harmonic Mean Formula

If you travel a distance $d$ at speed $v_1$ and return the same distance at speed $v_2$, the average speed for the round trip is:

$$\\text{Average speed} = \\frac{2 v_1 v_2}{v_1 + v_2}$$

This is the **harmonic mean** of the two speeds, and it is always less than or equal to the arithmetic mean $\\frac{v_1 + v_2}{2}$.

**Example:** You drive to work at 30 mph and return at 60 mph. Your average speed is:

$$\\frac{2 \\times 30 \\times 60}{30 + 60} = \\frac{3600}{90} = 40 \\text{ mph}$$

Notice this is **not** 45 mph (the simple average). You spend more time at the slower speed, which pulls the average down.

### When Distances Differ

If the distances are not equal, you must compute total distance and total time separately. The harmonic mean shortcut only applies when the same distance is traveled at each speed.

---

## 5. Mixture Problems (Weighted Average Approach)

Mixture problems ask you to combine two or more substances with different concentrations (or prices, or qualities) and find the resulting concentration (or price, or quality).

### The Alligation Framework

If you mix $m_1$ units of substance at concentration $c_1$ with $m_2$ units at concentration $c_2$, the resulting concentration is:

$$c_{\\text{mix}} = \\frac{m_1 \\cdot c_1 + m_2 \\cdot c_2}{m_1 + m_2}$$

This is simply the **weighted average** of the concentrations, weighted by the amounts.

### The "Balance" Method

Think of a balance beam. The mixture concentration sits between $c_1$ and $c_2$. The distances from the mixture concentration to each original concentration are inversely proportional to the amounts:

$$\\frac{m_1}{m_2} = \\frac{c_2 - c_{\\text{mix}}}{c_{\\text{mix}} - c_1}$$

This ratio technique is fast for GMAT problems that give the final concentration and ask for the ratio of the two components.

### Replacing Part of a Mixture

A common variation: you remove some amount of a mixture and replace it with pure substance.

**Example:** A 10-liter tank has a 30% salt solution. You remove 2 liters and replace with pure water. What is the new concentration?

After removing 2 liters: 8 liters remain, still at 30%, so salt = $8 \\times 0.30 = 2.4$ liters.

Add 2 liters of water: total volume is 10 liters again, with 2.4 liters of salt.

New concentration: $\\frac{2.4}{10} = 24\\%$.

---

## 6. Key Formulas

| Formula | Meaning |
|---|---|
| $R \\times T = W$ (or $D$) | Fundamental rate equation |
| $R_{\\text{combined}} = R_1 + R_2$ | Combined work rate |
| $T_{\\text{together}} = \\frac{ab}{a + b}$ | Time for two workers (jobs in $a$ and $b$ hours) |
| Relative speed (same dir.) $= |v_1 - v_2|$ | Closing/opening a gap |
| Relative speed (opp. dir.) $= v_1 + v_2$ | Approaching/separating |
| $\\text{Avg speed} = \\frac{\\text{Total dist}}{\\text{Total time}}$ | True average speed |
| $\\text{Avg speed (equal dist)} = \\frac{2v_1 v_2}{v_1 + v_2}$ | Harmonic mean for round trips |
| $c_{\\text{mix}} = \\frac{m_1 c_1 + m_2 c_2}{m_1 + m_2}$ | Mixture concentration |

---

## 7. Worked Examples

### Example 1: Combined Work

**Problem:** Machine A can complete a production lot in 6 hours. Machine B can complete the same lot in 10 hours. If both machines start simultaneously, how long will it take them to complete one lot?

**Solution:**

$$R_A = \\frac{1}{6}, \\quad R_B = \\frac{1}{10}$$

$$R_{\\text{combined}} = \\frac{1}{6} + \\frac{1}{10} = \\frac{5}{30} + \\frac{3}{30} = \\frac{8}{30} = \\frac{4}{15}$$

$$T = \\frac{1}{\\frac{4}{15}} = \\frac{15}{4} = 3.75 \\text{ hours} = 3 \\text{ hours and } 45 \\text{ minutes}$$

**Sanity check:** $3.75 < 6$ and $3.75 < 10$. The combined time is less than either individual time.

### Example 2: Relative Speed

**Problem:** Alice leaves City X at 9:00 AM heading toward City Y at 50 mph. Bob leaves City Y at 9:00 AM heading toward City X at 70 mph. If the cities are 360 miles apart, at what time do they meet?

**Solution:**

They travel toward each other, so combined speed $= 50 + 70 = 120$ mph.

$$T = \\frac{360}{120} = 3 \\text{ hours}$$

They meet at **12:00 PM (noon)**.

### Example 3: Average Speed Trap

**Problem:** A cyclist rides uphill at 8 km/h and returns downhill along the same route at 24 km/h. What is the cyclist's average speed for the entire trip?

**Solution:**

Since the distance is the same each way, use the harmonic mean:

$$\\text{Avg speed} = \\frac{2 \\times 8 \\times 24}{8 + 24} = \\frac{384}{32} = 12 \\text{ km/h}$$

Note: the simple average would be $\\frac{8 + 24}{2} = 16$ km/h, which is **wrong**. The correct answer of 12 km/h is lower because the cyclist spends much more time at the slower speed.

### Example 4: Work with Partial Contributions

**Problem:** Pump A fills a pool in 8 hours. Pump B fills the same pool in 12 hours. Pump A works alone for the first 2 hours, then both pumps work together. How long does it take in total to fill the pool?

**Solution:**

In the first 2 hours, Pump A fills $\\frac{2}{8} = \\frac{1}{4}$ of the pool.

Remaining work: $1 - \\frac{1}{4} = \\frac{3}{4}$.

Combined rate of A and B: $\\frac{1}{8} + \\frac{1}{12} = \\frac{3}{24} + \\frac{2}{24} = \\frac{5}{24}$ pools per hour.

Time for remaining work: $\\frac{3/4}{5/24} = \\frac{3}{4} \\times \\frac{24}{5} = \\frac{72}{20} = \\frac{18}{5} = 3.6$ hours.

Total time: $2 + 3.6 = 5.6$ hours $= 5$ hours and $36$ minutes.

---

## 8. GMAT Tips for Rate & Work Problems

**1. Always express rates as fractions.** "Finishes a job in 6 hours" means a rate of $\\frac{1}{6}$ per hour. This prevents the common error of adding times instead of rates.

**2. Use the combined-time shortcut.** For two workers with times $a$ and $b$: $T = \\frac{ab}{a + b}$. This is faster than computing individual rates and adding.

**3. Watch for the average speed trap.** Whenever you see different speeds for equal distances, use the harmonic mean formula. The GMAT loves to put the arithmetic mean as a wrong answer choice.

**4. Draw timelines for complex problems.** When workers start at different times or switch tasks, a timeline helps you track who is working during which interval.

**5. Set up rate tables.** Organize information using a Rate $\\times$ Time $=$ Work (or Distance) table. This is especially helpful when multiple entities are involved.

**6. For mixture problems, write out the "stuff" equation.** Track the actual amount of the substance (salt, juice, etc.) before and after mixing. Concentration is just the ratio of substance to total.

**7. Check units.** If speed is in miles per hour, make sure time is in hours and distance is in miles. Unit mismatches are a frequent source of errors.

**8. Back-solve when possible.** On Problem Solving, plug answer choices into the rate framework. This can be faster than setting up equations from scratch.
`;
