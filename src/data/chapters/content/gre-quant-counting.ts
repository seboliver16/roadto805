export const content = `
# Counting & Combinatorics

Counting problems on the GRE require systematic methods for determining the number of ways something can occur. The two main tools are **permutations** (order matters) and **combinations** (order does not matter). The key challenge is recognizing which tool applies to a given problem.

---

## The Fundamental Counting Principle

If Task 1 can be done in $m$ ways and Task 2 can be done in $n$ ways, then the two tasks together can be done in $m \\times n$ ways.

This extends to any number of tasks: multiply the number of choices at each stage.

### Worked Example

**Problem:** A restaurant offers 3 appetizers, 5 entrees, and 4 desserts. How many different three-course meals are possible?

**Solution:**

$$3 \\times 5 \\times 4 = \\textbf{60}$$

### Worked Example

**Problem:** How many 3-digit numbers can be formed using the digits 1-9 if no digit may be repeated?

**Solution:**

- First digit: 9 choices
- Second digit: 8 choices (one digit used)
- Third digit: 7 choices

$$9 \\times 8 \\times 7 = \\textbf{504}$$

> **Strategy:** The Fundamental Counting Principle is the backbone of all counting. When a problem involves a sequence of decisions, multiply the number of options at each step. Always ask: "Does the choice at each stage depend on previous choices?"

---

## Factorials

The factorial of a positive integer $n$ is:

$$n! = n \\times (n-1) \\times (n-2) \\times \\cdots \\times 2 \\times 1$$

**Important values:**

| $n$ | $n!$ |
|---|---|
| $0$ | $1$ (by definition) |
| $1$ | $1$ |
| $2$ | $2$ |
| $3$ | $6$ |
| $4$ | $24$ |
| $5$ | $120$ |
| $6$ | $720$ |
| $7$ | $5{,}040$ |
| $8$ | $40{,}320$ |

> **Common Trap:** Remember that $0! = 1$. This is not intuitive but is essential for the counting formulas to work correctly. There is exactly 1 way to arrange 0 objects: do nothing.

---

## Permutations (Order Matters)

A **permutation** is an arrangement where **order matters**. The number of ways to arrange $r$ objects chosen from $n$ distinct objects is:

$$P(n, r) = \\frac{n!}{(n-r)!}$$

If you are arranging **all** $n$ objects, the number of permutations is simply $n!$.

### Worked Example

**Problem:** In how many ways can a president, vice president, and treasurer be chosen from a group of 10 people?

**Solution:**

Order matters (different positions), so this is a permutation:

$$P(10, 3) = \\frac{10!}{7!} = 10 \\times 9 \\times 8 = \\textbf{720}$$

### When to Use Permutations

Use permutations when:
- Assigning people to **different positions** (1st place, 2nd place, etc.)
- Creating **sequences** (passwords, codes, arrangements in a row)
- The problem implies **order matters** ("arrange," "line up," "rank")

---

## Combinations (Order Does Not Matter)

A **combination** is a selection where **order does not matter**. The number of ways to choose $r$ objects from $n$ distinct objects is:

$$C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$

### Worked Example

**Problem:** A committee of 3 people is to be chosen from a group of 10. How many different committees are possible?

**Solution:**

Order does not matter (a committee of Alice, Bob, Carol is the same as Carol, Alice, Bob):

$$C(10, 3) = \\frac{10!}{3! \\cdot 7!} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = \\frac{720}{6} = \\textbf{120}$$

### When to Use Combinations

Use combinations when:
- Selecting a **group** or **committee** (no positions)
- Choosing **items** from a collection
- The problem implies **order does not matter** ("choose," "select," "pick")

> **Strategy:** The critical question is: **"Does switching the order of the selected items create a different outcome?"** If yes, use permutations. If no, use combinations. When in doubt, think about whether swapping two people in the selection changes anything.

---

## Permutations vs. Combinations: Side-by-Side

| | Permutation | Combination |
|---|---|---|
| Order | Matters | Does not matter |
| Formula | $\\frac{n!}{(n-r)!}$ | $\\frac{n!}{r!(n-r)!}$ |
| Example | Ranking 3 winners | Choosing a team of 3 |
| Keywords | arrange, rank, order, sequence | choose, select, group, committee |

Note: $P(n, r) = C(n, r) \\times r!$. Combinations are always smaller than (or equal to) the corresponding permutation because combinations do not distinguish order.

---

## Permutations with Restrictions

### Arranging with Repeated Elements

If $n$ objects include duplicates ($n_1$ of type 1, $n_2$ of type 2, etc.), the number of distinct arrangements is:

$$\\frac{n!}{n_1! \\cdot n_2! \\cdot \\cdots \\cdot n_k!}$$

### Worked Example

**Problem:** How many distinct arrangements can be made of the letters in MISSISSIPPI?

**Solution:**

Total letters: 11. Frequencies: M = 1, I = 4, S = 4, P = 2.

$$\\frac{11!}{1! \\cdot 4! \\cdot 4! \\cdot 2!} = \\frac{39916800}{1 \\cdot 24 \\cdot 24 \\cdot 2} = \\frac{39916800}{1152} = \\textbf{34{,}650}$$

### Items That Must Be Together

Treat the group that must stay together as a **single unit**, then arrange. Multiply by the arrangements within the group.

**Example:** 5 people sit in a row, but persons A and B must sit together.

- Treat AB as one unit: arrange 4 units in $4!$ ways.
- A and B can swap within their unit: $2!$ ways.
- Total: $4! \\times 2! = 24 \\times 2 = \\textbf{48}$.

---

## Combinations with Restrictions

### Choosing with Constraints

When there are restrictions on who must or must not be included:

**"At least one" problems:** Use complementary counting.

$$\\text{At least one} = \\text{Total} - \\text{None}$$

### Worked Example

**Problem:** From 8 men and 5 women, a committee of 4 is to be formed that includes at least one woman. How many ways?

**Solution:**

Total committees with no restriction: $C(13, 4) = 715$

Committees with **no women** (all men): $C(8, 4) = 70$

Committees with at least one woman: $715 - 70 = \\textbf{645}$

> **Strategy:** "At least one" problems are almost always easier to solve using complements. Direct counting (exactly 1, exactly 2, exactly 3, etc.) works but takes much longer.

### Worked Example: Specific Constraints

**Problem:** A committee of 5 is chosen from 6 men and 4 women and must include exactly 2 women. How many ways?

**Solution:**

Choose 2 women from 4: $C(4, 2) = 6$

Choose 3 men from 6: $C(6, 3) = 20$

Total: $6 \\times 20 = \\textbf{120}$

---

## Probability Using Counting

Many GRE probability problems combine counting with the probability formula:

$$P(\\text{event}) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$$

### Worked Example

**Problem:** From a group of 5 men and 3 women, 2 people are selected at random. What is the probability that both are women?

**Solution:**

Total ways to choose 2 from 8: $C(8, 2) = 28$

Ways to choose 2 women from 3: $C(3, 2) = 3$

$$P(\\text{both women}) = \\frac{3}{28}$$

> **Common Trap:** Do not multiply individual probabilities ($\\frac{3}{8} \\times \\frac{2}{7} = \\frac{6}{56} = \\frac{3}{28}$) and get confused about replacement. Both methods give the same answer, but using combinations is often cleaner and less error-prone.

---

## Circular Permutations

The number of ways to arrange $n$ distinct objects in a circle is:

$$(n - 1)!$$

We fix one object and arrange the rest, since rotations of the same arrangement are identical.

**Example:** Seating 6 people around a circular table: $(6 - 1)! = 5! = 120$ arrangements.

---

## GRE Question Type Tips

**Quantitative Comparison (QC):** You may need to compare $C(n, r)$ with another expression. Use the formula or compute directly. Remember $C(n, r) = C(n, n-r)$, which can simplify comparisons (e.g., $C(10, 3) = C(10, 7)$).

**Problem Solving (PS):** Read carefully to determine if the problem involves permutations or combinations. The GRE often uses subtle wording to signal this. "In how many ways can 3 people be **selected** for a team?" (combination) vs. "In how many ways can 3 people be **assigned** to president, VP, and secretary?" (permutation).

**Numeric Entry (NE):** Counting answers are always positive integers. If you get a non-integer or negative number, you have made an error. Double-check your formula choice.

---

## Key Formulas

$$\\boxed{P(n, r) = \\frac{n!}{(n-r)!}}$$

$$\\boxed{C(n, r) = \\frac{n!}{r!(n-r)!}}$$

$$\\boxed{\\text{Repeated elements: } \\frac{n!}{n_1! \\cdot n_2! \\cdots n_k!}}$$

$$\\boxed{\\text{Circular permutations: } (n-1)!}$$

$$\\boxed{C(n, r) = C(n, n-r)}$$
`;
