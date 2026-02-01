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

**GMAT tip:** Whenever you see "at least one," strongly consider using the complementary approach.

---

## 3. Independent vs. Dependent Events

### Independent Events

Two events are **independent** if the outcome of one does not affect the other.

- Flipping a coin twice: the first flip has no effect on the second.
- Rolling two dice: each die is independent of the other.

For independent events: $P(A \\text{ and } B) = P(A) \\times P(B)$

### Dependent Events

Two events are **dependent** if the outcome of one affects the probability of the other.

- Drawing two cards from a deck **without replacement**: the first draw changes the remaining deck.

For dependent events: $P(A \\text{ and } B) = P(A) \\times P(B | A)$

where $P(B|A)$ is the probability of $B$ **given that** $A$ has occurred.

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

**Example:** Probability of rolling a 2 or a 5 on a single die?

These are mutually exclusive: $P = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3}$

**Example:** Probability of drawing a heart or a king from a standard deck?

These are NOT mutually exclusive (king of hearts exists):

$$P = \\frac{13}{52} + \\frac{4}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$$

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

### Circular Permutations

Arranging $n$ objects in a circle: $(n - 1)!$

For 6 people around a round table: $(6 - 1)! = 5! = 120$.

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
`;
