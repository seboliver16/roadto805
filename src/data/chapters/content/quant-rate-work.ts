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

> **Common Trap:** A frequent GMAT mistake is adding *times* instead of *rates*. If Machine A takes 6 hours and Machine B takes 4 hours, the combined time is **not** $6 + 4 = 10$ hours. You must add the rates ($\\frac{1}{6} + \\frac{1}{4}$), then take the reciprocal. Adding times gives a nonsensical answer---always convert to rates first.

> **Quick Method:** When a problem says "Worker X finishes a job in $n$ hours," immediately write $\\frac{1}{n}$ as the rate. This reflex prevents the add-times trap and sets up every equation correctly.

---

## 2. Combined Work Rate Problems

When two or more workers (or machines, or pipes) work **together**, their individual rates **add up**.

$$R_{\\text{combined}} = R_1 + R_2 + \\cdots + R_n$$

### Standard Setup

If Worker A can complete a job in $a$ hours and Worker B can complete it in $b$ hours, then:

- $R_A = \\frac{1}{a}$, $R_B = \\frac{1}{b}$
- Combined rate: $R_{\\text{combined}} = \\frac{1}{a} + \\frac{1}{b} = \\frac{a + b}{ab}$
- Time to complete the job together:

$$T = \\frac{1}{R_{\\text{combined}}} = \\frac{ab}{a + b}$$

**The combined time is always less than either individual time.** This is a useful sanity check.

> **Quick Method:** For two workers with individual times $a$ and $b$, memorize the shortcut:
> $$T_{\\text{together}} = \\frac{ab}{a + b}$$
> For example, if $a = 6$ and $b = 10$: $T = \\frac{60}{16} = 3.75$ hours. No need to find a common denominator for the rates.

**Example:** Printer A prints a batch of reports in 4 hours. Printer B prints the same batch in 6 hours. A third printer, C, can do it in 12 hours. How long will it take all three working together?

**Solution:**

$$R_A = \\frac{1}{4}, \\quad R_B = \\frac{1}{6}, \\quad R_C = \\frac{1}{12}$$

$$R_{\\text{combined}} = \\frac{1}{4} + \\frac{1}{6} + \\frac{1}{12} = \\frac{3}{12} + \\frac{2}{12} + \\frac{1}{12} = \\frac{6}{12} = \\frac{1}{2}$$

$$T = \\frac{1}{1/2} = 2 \\text{ hours}$$

### When Workers Oppose Each Other

If a pipe fills a tank while another drains it, **subtract** the rates:

$$R_{\\text{net}} = R_{\\text{fill}} - R_{\\text{drain}}$$

If the drain rate exceeds the fill rate, the tank will never fill.

**Example:** Pipe A fills a pool in 8 hours. Pipe B drains the same pool in 12 hours. If both are open, how long to fill the pool?

**Solution:**

$$R_{\\text{net}} = \\frac{1}{8} - \\frac{1}{12} = \\frac{3}{24} - \\frac{2}{24} = \\frac{1}{24}$$

$$T = \\frac{1}{1/24} = 24 \\text{ hours}$$

> **Common Trap:** When a drain pipe is involved, some test-takers accidentally *add* the drain rate instead of subtracting it. Always ask: "Is this pipe working *toward* or *against* the goal?" Fill pipes add; drain pipes subtract.

### Partial Work

Sometimes workers do not work for the entire duration. In these cases, calculate the fraction of work each contributes:

$$\\text{Work done} = \\text{Rate} \\times \\text{Time worked}$$

Add the individual contributions to get total work, which must equal 1 (one complete job).

**Example:** Maria can paint a fence in 10 hours. She paints alone for 3 hours, then her friend Luis, who can paint the fence in 15 hours, joins her. How much longer do they work together to finish?

**Solution:**

Maria's work in 3 hours: $\\frac{3}{10}$

Remaining work: $1 - \\frac{3}{10} = \\frac{7}{10}$

Combined rate (Maria + Luis): $\\frac{1}{10} + \\frac{1}{15} = \\frac{3}{30} + \\frac{2}{30} = \\frac{5}{30} = \\frac{1}{6}$

Time for remaining work:

$$T = \\frac{7/10}{1/6} = \\frac{7}{10} \\times 6 = \\frac{42}{10} = 4.2 \\text{ hours}$$

They work together for **4 hours and 12 minutes**.

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

> **Quick Method:** For "when do they meet?" problems, just divide the initial distance by the sum of speeds (toward each other) or the difference (same direction). There is no need to set up separate distance equations for each traveler.

### Round Trips and Laps

For circular tracks or round trips, the relative speed concept is essential:

- Two runners going in **opposite directions** on a circular track will meet after the track length is covered at their combined speed.
- Two runners going in the **same direction** will meet again after the faster one has lapped the slower one---the gap of one full lap closes at the difference of their speeds.

**Example:** Two runners start at the same point on a 400-meter circular track. Runner A runs at 5 m/s and Runner B runs at 3 m/s. If they run in the same direction, how long until A first laps B?

**Solution:**

Relative speed $= 5 - 3 = 2$ m/s

A must gain exactly one full lap (400 m) on B:

$$T = \\frac{400}{2} = 200 \\text{ seconds} = 3 \\text{ minutes and } 20 \\text{ seconds}$$

> **Common Trap:** For circular track problems, do not confuse "meeting while running in opposite directions" with "lapping while running in the same direction." Opposite-direction meetings require covering one track length at *combined* speed; same-direction lapping requires covering one track length at the *difference* in speed. Using the wrong formula gives a dramatically wrong answer.

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

> **Common Trap:** The GMAT *always* includes the arithmetic mean (simple average) as an answer choice. If you drive at 20 mph and 60 mph over the same distance, the wrong answer 40 mph will be there. The correct answer is $\\frac{2 \\times 20 \\times 60}{80} = 30$ mph. Train yourself: **same distance, different speeds = harmonic mean**.

> **Quick Method:** A quick mental check---the harmonic mean is always closer to the *slower* speed. If your two speeds are 20 and 60, the average must be between 20 and 40 (the midpoint), and closer to 20. This eliminates wrong answers fast.

**Example:** A delivery truck drives from Warehouse A to Store B at 40 mph. Due to traffic, it returns at 24 mph. What is the average speed for the round trip?

**Solution:**

Same distance each way, so use the harmonic mean:

$$\\text{Avg speed} = \\frac{2 \\times 40 \\times 24}{40 + 24} = \\frac{1920}{64} = 30 \\text{ mph}$$

Sanity check: 30 is between 24 and 40, and closer to 24 (the slower speed). Correct.

### When Distances Differ

If the distances are not equal, you must compute total distance and total time separately. The harmonic mean shortcut only applies when the same distance is traveled at each speed.

**Example:** Sam drives 120 miles at 60 mph and then 80 miles at 40 mph. What is his average speed?

**Solution:**

Total distance $= 120 + 80 = 200$ miles

Time for first leg: $\\frac{120}{60} = 2$ hours

Time for second leg: $\\frac{80}{40} = 2$ hours

Total time $= 4$ hours

$$\\text{Avg speed} = \\frac{200}{4} = 50 \\text{ mph}$$

Note: the harmonic mean formula does **not** apply here because the distances differ. You must compute from first principles.

---

## 5. Mixture Problems (Weighted Average Approach)

Mixture problems ask you to combine two or more substances with different concentrations (or prices, or qualities) and find the resulting concentration (or price, or quality).

### The Alligation Framework

If you mix $m_1$ units of substance at concentration $c_1$ with $m_2$ units at concentration $c_2$, the resulting concentration is:

$$c_{\\text{mix}} = \\frac{m_1 \\cdot c_1 + m_2 \\cdot c_2}{m_1 + m_2}$$

This is simply the **weighted average** of the concentrations, weighted by the amounts.

> **Quick Method:** The "alligation cross" gives you the ratio directly. Write the two concentrations and the desired mixture concentration. Cross-subtract to get the ratio of quantities:
>
> $$\\frac{m_1}{m_2} = \\frac{|c_2 - c_{\\text{mix}}|}{|c_{\\text{mix}} - c_1|}$$
>
> This avoids setting up equations entirely.

### The "Balance" Method

Think of a balance beam. The mixture concentration sits between $c_1$ and $c_2$. The distances from the mixture concentration to each original concentration are inversely proportional to the amounts:

$$\\frac{m_1}{m_2} = \\frac{c_2 - c_{\\text{mix}}}{c_{\\text{mix}} - c_1}$$

This ratio technique is fast for GMAT problems that give the final concentration and ask for the ratio of the two components.

**Example:** A chemist mixes a 20% acid solution with a 50% acid solution to create 60 liters of a 30% acid solution. How many liters of each solution are used?

**Solution:**

Using the balance method:

$$\\frac{m_1}{m_2} = \\frac{50 - 30}{30 - 20} = \\frac{20}{10} = \\frac{2}{1}$$

So the ratio of 20% solution to 50% solution is 2 : 1.

Total $= 60$ liters, so: $m_1 = 40$ liters (20% solution) and $m_2 = 20$ liters (50% solution).

**Verification:** $40 \\times 0.20 + 20 \\times 0.50 = 8 + 10 = 18$ liters of acid. $\\frac{18}{60} = 30\\%$. Correct.

### Replacing Part of a Mixture

A common variation: you remove some amount of a mixture and replace it with pure substance.

**Example:** A 10-liter tank has a 30% salt solution. You remove 2 liters and replace with pure water. What is the new concentration?

After removing 2 liters: 8 liters remain, still at 30%, so salt = $8 \\times 0.30 = 2.4$ liters.

Add 2 liters of water: total volume is 10 liters again, with 2.4 liters of salt.

New concentration: $\\frac{2.4}{10} = 24\\%$.

> **Common Trap:** When you remove part of a mixture, you are removing *mixture* (not just one component). A common error is to subtract pure salt from the tank. If you remove 2 liters of a 30% mixture, you remove $2 \\times 0.30 = 0.6$ liters of salt *and* $2 \\times 0.70 = 1.4$ liters of water.

**Example:** A radiator holds 20 liters of a 40% antifreeze solution. A mechanic drains 5 liters and replaces it with pure antifreeze. What is the new antifreeze concentration?

**Solution:**

Step 1: After draining 5 liters, 15 liters remain at 40%.

Antifreeze remaining: $15 \\times 0.40 = 6$ liters

Step 2: Add 5 liters of pure antifreeze (100%).

New antifreeze total: $6 + 5 = 11$ liters

New total volume: $15 + 5 = 20$ liters

$$\\text{New concentration} = \\frac{11}{20} = 55\\%$$

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

### Example 5: Three Workers with Different Start Times

**Problem:** Alex can build a wall in 12 hours. Ben can build the same wall in 8 hours. Charlie can build it in 6 hours. Alex starts alone. After 2 hours, Ben joins. After 2 more hours, Charlie also joins. How much total time does it take from when Alex started?

**Solution:**

Phase 1 (hours 0--2): Alex works alone.

Work done: $2 \\times \\frac{1}{12} = \\frac{1}{6}$

Phase 2 (hours 2--4): Alex + Ben work together.

Rate: $\\frac{1}{12} + \\frac{1}{8} = \\frac{2}{24} + \\frac{3}{24} = \\frac{5}{24}$

Work done: $2 \\times \\frac{5}{24} = \\frac{10}{24} = \\frac{5}{12}$

Total work after 4 hours: $\\frac{1}{6} + \\frac{5}{12} = \\frac{2}{12} + \\frac{5}{12} = \\frac{7}{12}$

Phase 3 (hours 4+): Alex + Ben + Charlie work together.

Rate: $\\frac{1}{12} + \\frac{1}{8} + \\frac{1}{6} = \\frac{2}{24} + \\frac{3}{24} + \\frac{4}{24} = \\frac{9}{24} = \\frac{3}{8}$

Remaining work: $1 - \\frac{7}{12} = \\frac{5}{12}$

Time: $\\frac{5/12}{3/8} = \\frac{5}{12} \\times \\frac{8}{3} = \\frac{40}{36} = \\frac{10}{9} \\approx 1.11$ hours

Total time: $4 + \\frac{10}{9} = \\frac{46}{9} \\approx 5.11$ hours $\\approx$ **5 hours and 7 minutes**.

### Example 6: Catch-Up Problem with Head Start

**Problem:** A freight train leaves a station at 6:00 AM traveling at 40 mph. A passenger train leaves the same station at 8:00 AM on a parallel track at 60 mph. At what time does the passenger train catch the freight train?

**Solution:**

By 8:00 AM, the freight train has a 2-hour head start:

$$\\text{Head start distance} = 40 \\times 2 = 80 \\text{ miles}$$

Relative speed (same direction): $60 - 40 = 20$ mph

Time to close the gap:

$$T = \\frac{80}{20} = 4 \\text{ hours after 8:00 AM}$$

The passenger train catches the freight train at **12:00 PM (noon)**.

**Verification:** By noon, freight train has traveled $6 \\times 40 = 240$ miles. Passenger train has traveled $4 \\times 60 = 240$ miles. They are at the same point.

### Example 7: Mixture Ratio Problem

**Problem:** Coffee blend A costs \\$12 per pound and blend B costs \\$8 per pound. In what ratio should they be mixed to produce a blend that costs \\$9.50 per pound?

**Solution:**

Using the balance (alligation) method:

$$\\frac{m_A}{m_B} = \\frac{|8 - 9.50|}{|9.50 - 12|} = \\frac{1.50}{2.50} = \\frac{3}{5}$$

The ratio of blend A to blend B is **3 : 5**.

**Verification:** $\\frac{3(12) + 5(8)}{3 + 5} = \\frac{36 + 40}{8} = \\frac{76}{8} = 9.50$. Correct.

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

> **Quick Method:** For any "working together" problem with exactly two workers, you can skip the LCM/fraction work entirely. Just use $T = \\frac{ab}{a+b}$ where $a$ and $b$ are the individual times. For three workers, there is no similar shortcut---you must add the three rates as fractions.
`;
