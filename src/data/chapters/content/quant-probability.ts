export const content = `
# Probability & Combinatorics

Probability and combinatorics (counting) questions test your ability to think systematically about outcomes. These topics can feel intimidating, but the GMAT tests a limited set of concepts. Master the fundamentals covered here, and you will be well-prepared for any probability or counting question the test throws at you.

---

## 1. Basic Probability

**Probability** measures the likelihood of an event occurring:

$$P(\\text{event}) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}}$$

Probability always lies between 0 and 1, inclusive:
- $P = 0$ means the event is **impossible**.
- $P = 1$ means the event is **certain**.

**Example:** A standard die is rolled. What is the probability of rolling a number greater than 4?

Favorable outcomes: 5, 6 (that is 2 outcomes). Total outcomes: 6.

$$P = \\frac{2}{6} = \\frac{1}{3}$$

> **Common Trap:** When a problem says "at least," "at most," or "no more than," be very precise about which outcomes to count. "Greater than 4" means 5 and 6 only---it does **not** include 4. "At least 4" would include 4, 5, and 6. Misreading one word changes the answer.

---

## 2. Complementary Probability

The **complement** of an event $A$ is "event $A$ does not occur," written $A'$ or $\\overline{A}$.

$$P(A') = 1 - P(A)$$

**When to use it:** Whenever computing the probability directly is harder than computing the probability of the opposite.

**Example:** What is the probability that at least one head appears when flipping a coin 3 times?

Direct calculation requires counting: exactly 1 head, exactly 2 heads, exactly 3 heads.

Complementary approach: "at least one head" is the complement of "no heads."

$$P(\\text{no heads}) = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$$

$$P(\\text{at least one head}) = 1 - \\frac{1}{8} = \\frac{7}{8}$$

> **Quick Method:** Any time you see the phrase **"at least one"** in a probability problem, immediately think: $P(\\text{at least one}) = 1 - P(\\text{none})$. This converts a multi-case problem into a single calculation. It works for coins, dice, cards, defective items---any scenario.

**Example:** A factory produces widgets with a 5% defect rate. If 3 widgets are selected at random (with replacement), what is the probability that at least one is defective?

**Solution:**

$$P(\\text{not defective}) = 0.95$$

$$P(\\text{none defective in 3 picks}) = (0.95)^3 = 0.857375$$

$$P(\\text{at least one defective}) = 1 - 0.857375 = 0.142625 \\approx 14.3\\%$$

---

## 3. Independent vs. Dependent Events

### Independent Events

Two events are **independent** if the outcome of one does not affect the other.

- Flipping a coin twice: the first flip has no effect on the second.
- Rolling two dice: each die is independent of the other.

For independent events:

$$P(A \\text{ and } B) = P(A) \\times P(B)$$

### Dependent Events

Two events are **dependent** if the outcome of one affects the probability of the other.

- Drawing two cards from a deck **without replacement**: the first draw changes the remaining deck.

For dependent events:

$$P(A \\text{ and } B) = P(A) \\times P(B | A)$$

where $P(B|A)$ is the probability of $B$ **given that** $A$ has occurred.

> **Common Trap:** On the GMAT, the most frequent mistake with dependent events is forgetting to update the denominator. If you draw one card from a 52-card deck and then draw another without replacement, the second draw is from 51 cards, not 52. Similarly, if a bag has 10 marbles and you remove one, the next draw is from 9. Always track the shrinking pool.

**Example:** A jar contains 4 red, 3 blue, and 5 green marbles. Two marbles are drawn without replacement. What is the probability that both are red?

**Solution:**

$$P(\\text{1st red}) = \\frac{4}{12} = \\frac{1}{3}$$

$$P(\\text{2nd red} | \\text{1st red}) = \\frac{3}{11}$$

$$P(\\text{both red}) = \\frac{1}{3} \\times \\frac{3}{11} = \\frac{3}{33} = \\frac{1}{11}$$

---

## 4. The AND Rule and the OR Rule

### AND Rule (Multiplication)

For events that must **both** (or all) occur:

$$P(A \\text{ and } B) = P(A) \\times P(B)$$

(if independent)

$$P(A \\text{ and } B) = P(A) \\times P(B|A)$$

(if dependent)

**Example:** Two fair coins are flipped. Probability both are heads?

$$P = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$

### OR Rule (Addition)

For events where **at least one** occurs:

$$P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$$

If events are **mutually exclusive** (cannot both happen), then $P(A \\text{ and } B) = 0$:

$$P(A \\text{ or } B) = P(A) + P(B)$$

> **Quick Method:** Before computing, ask: "Can both events happen simultaneously?" If **no**, they are mutually exclusive, and you simply add. If **yes**, you must subtract the overlap. On the GMAT, forgetting to subtract the overlap is one of the most heavily tested errors.

**Example:** Probability of rolling a 2 or a 5 on a single die?

These are mutually exclusive: $P = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3}$

**Example:** Probability of drawing a heart or a king from a standard deck?

These are NOT mutually exclusive (king of hearts exists):

$$P = \\frac{13}{52} + \\frac{4}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$$

> **Common Trap:** When asked for $P(A \\text{ or } B)$, many students forget to subtract the overlap, getting $\\frac{17}{52}$ instead of $\\frac{16}{52}$ in the heart-or-king example. Any time two categories can overlap (e.g., "red or face card," "multiple of 3 or even number"), you **must** subtract the intersection.

**Example:** A number is chosen at random from 1 to 30. What is the probability that it is a multiple of 3 or a multiple of 5?

**Solution:**

- Multiples of 3 from 1--30: $\\{3, 6, 9, 12, 15, 18, 21, 24, 27, 30\\}$ $\\rightarrow$ 10 numbers
- Multiples of 5 from 1--30: $\\{5, 10, 15, 20, 25, 30\\}$ $\\rightarrow$ 6 numbers
- Multiples of both (i.e., multiples of 15): $\\{15, 30\\}$ $\\rightarrow$ 2 numbers

$$P = \\frac{10}{30} + \\frac{6}{30} - \\frac{2}{30} = \\frac{14}{30} = \\frac{7}{15}$$

---

## 5. Permutations (Order Matters)

A **permutation** is an arrangement of objects where the **order matters**.

### Permutations of $r$ objects chosen from $n$

$$P(n, r) = \\frac{n!}{(n - r)!}$$

**Example:** In how many ways can you arrange 3 books out of 7 on a shelf?

$$P(7, 3) = \\frac{7!}{4!} = 7 \\times 6 \\times 5 = 210$$

### Permutations of All $n$ Objects

$$P(n, n) = n!$$

The number of ways to arrange 5 people in a line is $5! = 120$.

### Permutations with Repetition

If some objects are identical, divide by the factorials of the counts of each repeated element.

The number of distinct arrangements of the letters in "MISSISSIPPI":

$$\\frac{11!}{1! \\cdot 4! \\cdot 4! \\cdot 2!} = \\frac{39916800}{1 \\cdot 24 \\cdot 24 \\cdot 2} = 34650$$

(1 M, 4 I's, 4 S's, 2 P's)

> **Quick Method:** When arranging letters of a word with repeats, write out the total letters on top, then put each repeated letter's count as a factorial on the bottom. For "BANANA": $\\frac{6!}{3! \\cdot 2!} = \\frac{720}{12} = 60$.

### Circular Permutations

Arranging $n$ objects in a circle: $(n - 1)!$

For 6 people around a round table: $(6 - 1)! = 5! = 120$.

> **Common Trap:** Circular arrangements vs. line arrangements---students often use $n!$ for round-table problems. In a circle, there is no "first" position, so you fix one person and arrange the rest: $(n-1)!$. Using $n!$ overcounts by a factor of $n$.

**Example:** In how many ways can 5 diplomats be seated around a circular table if two specific diplomats must sit next to each other?

**Solution:**

Treat the two diplomats who must sit together as a single unit. Now we have 4 "units" to arrange in a circle:

$$(4 - 1)! = 3! = 6$$

The two diplomats within their unit can swap positions: $2! = 2$ ways.

$$\\text{Total} = 6 \\times 2 = 12$$

---

## 6. Combinations (Order Does Not Matter)

A **combination** is a selection of objects where **order does not matter**.

$$C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n - r)!}$$

**Example:** How many ways can you choose a committee of 3 people from a group of 8?

$$\\binom{8}{3} = \\frac{8!}{3! \\cdot 5!} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$$

### Key Relationship

$$\\binom{n}{r} = \\binom{n}{n-r}$$

Choosing 3 from 8 is the same as choosing which 5 to leave out. This can simplify calculations: $\\binom{10}{8} = \\binom{10}{2} = 45$.

### When to Use Permutations vs. Combinations

Ask yourself: **Does the order of selection matter?**

- **Permutation:** Assigning positions (president, VP, secretary), arranging in a line, creating passwords.
- **Combination:** Choosing a team, selecting items from a menu, picking cards.

**Mnemonic:** Think of a **combination lock**---ironically, a combination lock should be called a "permutation lock" because the order of the numbers matters!

> **Common Trap:** Using permutations when you should use combinations (or vice versa) is the single most costly error in counting problems. If you are choosing a committee of 3, the answer is $\\binom{n}{3}$. If you are choosing a president, VP, and secretary, the answer is $P(n, 3)$. The permutation answer is exactly $3! = 6$ times larger than the combination answer. If your answer seems too large (or too small) by a factor of $r!$, check your order assumption.

**Example:** From a group of 10 employees, a manager must select 2 for a project and then assign one as lead and the other as assistant. How many ways can this be done?

**Solution:**

Order matters here (lead vs. assistant are distinct roles):

$$P(10, 2) = 10 \\times 9 = 90$$

Alternatively: choose 2 (combination) $\\times$ assign roles (permutation within the pair):

$$\\binom{10}{2} \\times 2! = 45 \\times 2 = 90$$

---

## 7. With and Without Replacement

### With Replacement

After each selection, the chosen item is returned to the pool. The probabilities remain constant across draws.

**Example:** A bag has 3 red and 5 blue marbles. You draw one marble, note its color, put it back, and draw again. Probability of drawing red both times?

$$P = \\frac{3}{8} \\times \\frac{3}{8} = \\frac{9}{64}$$

### Without Replacement

After each selection, the chosen item is not returned. The total number of items decreases, and the composition of the pool changes.

**Example:** Same bag (3 red, 5 blue). You draw two marbles without replacement. Probability both are red?

$$P = \\frac{3}{8} \\times \\frac{2}{7} = \\frac{6}{56} = \\frac{3}{28}$$

Note how the second probability changed because the pool shrank by one marble.

> **Quick Method:** For "without replacement" problems, you can often use the combinations approach instead of sequential probability. The probability of drawing 2 red from 3 red and 5 blue:
>
> $$P = \\frac{\\binom{3}{2}}{\\binom{8}{2}} = \\frac{3}{28}$$
>
> This is often faster and less error-prone than multiplying conditional probabilities.

**Example:** A box contains 6 white balls and 4 black balls. Three balls are drawn without replacement. What is the probability that exactly 2 are white?

**Solution (Combinations approach):**

$$P = \\frac{\\binom{6}{2} \\times \\binom{4}{1}}{\\binom{10}{3}} = \\frac{15 \\times 4}{120} = \\frac{60}{120} = \\frac{1}{2}$$

**Solution (Sequential approach):**

The 2 white and 1 black can be drawn in the orders: WWB, WBW, BWW.

$$P(WWB) = \\frac{6}{10} \\times \\frac{5}{9} \\times \\frac{4}{8} = \\frac{120}{720} = \\frac{1}{6}$$

By symmetry, each arrangement has the same probability. There are $\\frac{3!}{2!1!} = 3$ arrangements.

$$P(\\text{exactly 2 white}) = 3 \\times \\frac{1}{6} = \\frac{1}{2}$$

Both methods confirm the answer.

---

## 8. Worked Examples

### Example 1: Complementary Probability

**Problem:** A bag contains 5 red balls and 3 green balls. If 3 balls are drawn at random without replacement, what is the probability that at least one ball is green?

**Solution:**

Complementary approach: $P(\\text{at least 1 green}) = 1 - P(\\text{no green})$.

$P(\\text{no green})$ means all 3 drawn balls are red.

$$P(\\text{all red}) = \\frac{\\binom{5}{3}}{\\binom{8}{3}} = \\frac{10}{56} = \\frac{5}{28}$$

$$P(\\text{at least 1 green}) = 1 - \\frac{5}{28} = \\frac{23}{28}$$

### Example 2: Counting with Constraints

**Problem:** A 4-digit code is formed using the digits 0--9, with no repetition. The first digit cannot be 0. How many such codes are possible?

**Solution:**

- First digit: 9 choices (1--9, since 0 is excluded).
- Second digit: 9 choices (0--9 minus the first digit).
- Third digit: 8 choices.
- Fourth digit: 7 choices.

$$\\text{Total} = 9 \\times 9 \\times 8 \\times 7 = 4536$$

> **Common Trap:** A common error is to say 10 choices for the second digit. But one digit has already been used for the first position, so only 9 remain---which *happens* to include 0. Do not double-count or under-count the zero.

### Example 3: Probability with the OR Rule

**Problem:** A card is drawn from a standard 52-card deck. What is the probability that it is a face card (J, Q, K) or a spade?

**Solution:**

- Face cards: 12 (4 jacks + 4 queens + 4 kings)
- Spades: 13
- Face card spades (overlap): 3 (J, Q, K of spades)

$$P = \\frac{12}{52} + \\frac{13}{52} - \\frac{3}{52} = \\frac{22}{52} = \\frac{11}{26}$$

### Example 4: Committee Selection

**Problem:** A committee of 5 is to be formed from 6 men and 4 women. If the committee must include at least 2 women, how many different committees are possible?

**Solution:**

"At least 2 women" means 2, 3, or 4 women.

**Case 1: 2 women, 3 men:**
$$\\binom{4}{2} \\times \\binom{6}{3} = 6 \\times 20 = 120$$

**Case 2: 3 women, 2 men:**
$$\\binom{4}{3} \\times \\binom{6}{2} = 4 \\times 15 = 60$$

**Case 3: 4 women, 1 man:**
$$\\binom{4}{4} \\times \\binom{6}{1} = 1 \\times 6 = 6$$

$$\\text{Total} = 120 + 60 + 6 = 186$$

**Alternative (complementary):** Total committees $- $ committees with 0 or 1 woman:

$$\\binom{10}{5} - \\binom{6}{5}\\binom{4}{0} - \\binom{6}{4}\\binom{4}{1} = 252 - 6 - 60 = 186$$

Both methods give the same answer. Choose whichever feels faster.

> **Quick Method:** For "at least $k$" committee problems, the complementary approach (total minus unwanted cases) is usually faster when $k$ is close to the maximum. For "at least 2 women out of 4," you only subtract 2 cases (0 women, 1 woman) instead of adding 3 cases.

### Example 5: Probability of Consecutive Draws

**Problem:** A deck of 10 cards is numbered 1 through 10. Two cards are drawn at random without replacement. What is the probability that the two numbers drawn are consecutive?

**Solution:**

Total ways to choose 2 cards from 10:

$$\\binom{10}{2} = 45$$

Consecutive pairs: (1,2), (2,3), (3,4), (4,5), (5,6), (6,7), (7,8), (8,9), (9,10) $\\rightarrow$ 9 pairs

$$P = \\frac{9}{45} = \\frac{1}{5}$$

### Example 6: Arrangements with Restrictions

**Problem:** Five friends---A, B, C, D, E---stand in a line. How many arrangements are there if A and B must NOT stand next to each other?

**Solution:**

Total arrangements (no restrictions): $5! = 120$

Arrangements where A and B ARE next to each other: treat AB as a single unit $\\rightarrow$ 4 units to arrange $= 4! = 24$. But A and B can swap within the unit: $24 \\times 2 = 48$.

Arrangements where A and B are NOT next to each other:

$$120 - 48 = 72$$

> **Quick Method:** For "must NOT be adjacent" problems, always use the complement: Total $-$ Adjacent. Counting the adjacent arrangements (glue the restricted items together) is much easier than directly counting all valid non-adjacent arrangements.

### Example 7: Dice Probability

**Problem:** Two fair six-sided dice are rolled. What is the probability that the sum is 8?

**Solution:**

Total outcomes: $6 \\times 6 = 36$

Outcomes that sum to 8: (2,6), (3,5), (4,4), (5,3), (6,2) $\\rightarrow$ 5 outcomes

$$P = \\frac{5}{36}$$

> **Common Trap:** When counting dice outcomes, remember that (2,6) and (6,2) are *different* outcomes (die 1 shows 2, die 2 shows 6 vs. die 1 shows 6, die 2 shows 2). The only "single" outcome is the double: (4,4). Failing to count both orderings is a classic error.

---

## 9. Key Formulas

| Formula | Description |
|---|---|
| $P(A) = \\frac{\\text{favorable}}{\\text{total}}$ | Basic probability |
| $P(A') = 1 - P(A)$ | Complementary probability |
| $P(A \\text{ and } B) = P(A) \\cdot P(B)$ | Independent events |
| $P(A \\text{ and } B) = P(A) \\cdot P(B|A)$ | Dependent events |
| $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$ | Addition rule |
| $P(n, r) = \\frac{n!}{(n-r)!}$ | Permutations |
| $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$ | Combinations |

---

## 10. GMAT Tips for Probability & Counting

**1. Use complementary probability for "at least one" problems.** Computing $1 - P(\\text{none})$ is almost always faster than adding up multiple cases.

**2. Decide early: permutation or combination?** Before calculating, ask "Does order matter?" Getting this wrong will give you an answer off by a factor of $r!$.

**3. For probability involving "and," multiply. For "or," add (then subtract overlap).** This is the most fundamental rule.

**4. Watch for "with replacement" vs. "without replacement."** The problem will usually state this. If it does not, assume without replacement for physical objects (cards, marbles) and with replacement if the scenario implies it (e.g., repeated die rolls).

**5. Break complex problems into cases.** If the direct approach seems overwhelming, split into mutually exclusive cases and add the results.

**6. Simplify large factorials by canceling.** $\\frac{10!}{8!} = 10 \\times 9 = 90$. Never try to compute $10!$ fully.

**7. Use symmetry.** If a problem asks "probability that A beats B," and both are equally likely to win, the answer is $\\frac{1}{2}$. The GMAT rewards recognizing symmetry.

**8. For Data Sufficiency, focus on whether you *can* solve, not on actually solving.** If you can determine that you have enough information to compute the probability, mark it sufficient and move on.

> **Quick Method:** When the GMAT asks for "exactly $k$ successes in $n$ trials," use the pattern:
>
> $$P = \\binom{n}{k} \\times p^k \\times (1-p)^{n-k}$$
>
> where $p$ is the probability of success on each trial. For example, the probability of getting exactly 2 heads in 5 fair coin flips is $\\binom{5}{2} \\times \\left(\\frac{1}{2}\\right)^5 = 10 \\times \\frac{1}{32} = \\frac{10}{32} = \\frac{5}{16}$.
`;
