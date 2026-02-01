export const content = `
# Two-Part Analysis

Two-Part Analysis (TPA) is a question type unique to the GMAT Data Insights section. It tests your ability to solve problems that require **two interconnected answers** --- whether algebraic, logical, or verbal. The format forces you to consider how two components of a problem relate to each other, making it ideal for testing systems of equations, logical dependencies, and constraint satisfaction.

---

## The TPA Format

A Two-Part Analysis question presents:

1. **A question stem** describing a scenario, problem, or argument.
2. **A table with two columns** (labeled with what each column represents, such as "Value of $x$" and "Value of $y$," or "Strengthens" and "Weakens") and **six answer rows**.
3. You must select **one answer in each column** (the same row may be selected for both columns in some cases, but usually the two selections are different).

The table looks like this:

| Column A | Column B | Answer Choices |
|----------|----------|----------------|
| $\\circ$ | $\\circ$ | Option 1 |
| $\\circ$ | $\\circ$ | Option 2 |
| $\\circ$ | $\\circ$ | Option 3 |
| $\\circ$ | $\\circ$ | Option 4 |
| $\\circ$ | $\\circ$ | Option 5 |
| $\\circ$ | $\\circ$ | Option 6 |

You click one radio button in Column A and one in Column B. Both must be correct to receive credit --- there is **no partial credit**.

---

## Types of Two-Part Analysis

TPA questions fall into three broad categories:

### 1. Algebraic TPA (Find Two Values)

The most common type. The question stem describes a scenario with two unknowns, and you must determine the value of each.

**Example stem:** "A store sells widgets for \\$8 each and gadgets for \\$12 each. A customer buys a total of 15 items and spends \\$148. How many widgets and how many gadgets did the customer buy?"

The columns would be labeled "Number of Widgets" and "Number of Gadgets," with six numerical options.

### 2. Logical TPA (Identify Two Statements)

The question stem presents an argument or scenario, and you must identify two elements --- such as one statement that strengthens and one that weakens the argument, or one assumption and one conclusion.

**Example columns:** "Supports the Plan" and "Undermines the Plan," with six statements as options.

### 3. Verbal TPA (Two Conclusions or Roles)

The question describes a complex situation, and you must identify two conclusions, two roles, or two relationships. This type overlaps with Critical Reasoning skills.

**Example columns:** "Must Be True" and "Could Be False," with six statements derived from a passage.

---

## Setting Up Equations from Word Problems

For algebraic TPA, translating the word problem into equations is the critical first step.

### The Standard System of Two Equations

Most algebraic TPA questions reduce to a system of two linear equations with two unknowns:

$$\\text{Equation 1: } ax + by = c$$
$$\\text{Equation 2: } dx + ey = f$$

**Common scenarios that produce systems of equations:**

- **Mixing problems:** Two ingredients with different properties (cost, concentration, weight) are combined. You get one equation from the total quantity and another from the total value/concentration.
- **Rate problems:** Two workers or machines operate at different rates. You get one equation from total work done and another from a time or output constraint.
- **Purchase problems:** Two types of items at different prices. You get one equation from total items and another from total cost.
- **Investment problems:** Money split between two accounts at different interest rates. You get one equation from total invested and another from total interest earned.

### Solving the System

For GMAT purposes, **substitution** and **elimination** are the two standard methods:

**Substitution:** Solve one equation for one variable, then substitute into the other.

From $x + y = 15$: $y = 15 - x$

Substitute into $8x + 12y = 148$:
$$8x + 12(15 - x) = 148$$
$$8x + 180 - 12x = 148$$
$$-4x = -32$$
$$x = 8, \\quad y = 7$$

**Elimination:** Multiply equations by constants so that adding or subtracting eliminates one variable.

$$x + y = 15 \\quad \\Rightarrow \\quad 8x + 8y = 120 \\quad (\\text{multiply by } 8)$$
$$8x + 12y = 148$$

Subtract: $4y = 28 \\Rightarrow y = 7 \\Rightarrow x = 8$

Both methods work; choose the one that feels faster for the specific numbers.

---

## The Constraint Satisfaction Approach

Not all TPA questions require solving equations. Some are better approached through **constraint satisfaction** --- systematically checking which answer choices meet all stated conditions.

### How It Works

1. **List all constraints** from the question stem.
2. **Test each answer choice** against the constraints.
3. **Eliminate choices** that violate any constraint.
4. **Cross-reference the two columns** --- the correct pair must satisfy all constraints simultaneously.

This approach is particularly effective for:

- Problems with **integer constraints** (you cannot buy half an item)
- Problems with **inequality constraints** ("at least 5 but no more than 10")
- Logical and verbal TPA where algebraic methods do not apply

---

## Process of Elimination with the Two-Column Format

The two-column format gives you a powerful advantage: **if you can determine one column's answer, it often constrains the other.**

### Strategy

1. **Start with the column you find easier.** If the question asks for "Value of $x$" and "Value of $y$," and you can quickly determine $x$, select it first.
2. **Use that answer to constrain the second column.** Once you know $x = 8$, you can substitute back into any equation to find $y$.
3. **Alternatively, eliminate from both columns simultaneously.** If an answer choice is clearly too large for Column A, cross it out for that column. If it is also impossible for Column B, cross it out entirely.

### Working with the Answer Choices

Because there are only six options, you can often test them directly:

- **Plug each option into the equations** and see which pair works.
- **Check boundary conditions** --- the smallest and largest options often reveal which range the answer must fall in.
- **Look for answers that appear in both columns** --- sometimes the same value works for both, and sometimes this signals a trap.

---

## Worked Examples

### Example 1: Classic Algebraic TPA

**Question:** A small business produces two products: Product A, which costs \\$15 to make and sells for \\$40, and Product B, which costs \\$25 to make and sells for \\$55. Last month, the business produced a total of 200 units and spent \\$4,200 on production costs. How many units of each product were produced?

| Product A | Product B | Options |
|-----------|-----------|---------|
| $\\circ$ | $\\circ$ | 50 |
| $\\circ$ | $\\circ$ | 80 |
| $\\circ$ | $\\circ$ | 100 |
| $\\circ$ | $\\circ$ | 120 |
| $\\circ$ | $\\circ$ | 140 |
| $\\circ$ | $\\circ$ | 170 |

**Solution:**

Set up the equations. Let $a$ = units of Product A, $b$ = units of Product B.

Equation 1 (total units): $a + b = 200$

Equation 2 (total cost): $15a + 25b = 4{,}200$

From Equation 1: $a = 200 - b$

Substitute into Equation 2:
$$15(200 - b) + 25b = 4{,}200$$
$$3{,}000 - 15b + 25b = 4{,}200$$
$$10b = 1{,}200$$
$$b = 120$$
$$a = 200 - 120 = 80$$

**Answer:** Product A = 80, Product B = 120.

### Example 2: Rate/Work TPA

**Question:** Machine X can fill an order in 6 hours. Machine Y can fill the same order in 10 hours. If the company wants to fill exactly 2 orders in a workday, and Machine X works on the first order alone while Machine Y works on the second order alone, what is the total time each machine spends working?

| Machine X Time | Machine Y Time | Options |
|---------------|---------------|---------|
| $\\circ$ | $\\circ$ | 3 hours |
| $\\circ$ | $\\circ$ | 5 hours |
| $\\circ$ | $\\circ$ | 6 hours |
| $\\circ$ | $\\circ$ | 8 hours |
| $\\circ$ | $\\circ$ | 10 hours |
| $\\circ$ | $\\circ$ | 16 hours |

**Solution:**

This one is more straightforward than it appears:

- Machine X fills one order alone: rate = $\\frac{1}{6}$ order/hour, so time = **6 hours**.
- Machine Y fills one order alone: rate = $\\frac{1}{10}$ order/hour, so time = **10 hours**.

**Answer:** Machine X = 6 hours, Machine Y = 10 hours.

**Key insight:** Not every TPA requires complex algebra. Read carefully --- the question may be simpler than you expect. Many students overcomplicate TPA by assuming a system of equations is always needed.

### Example 3: Logical TPA

**Question:** A company is deciding whether to open a new branch office. Consider the following statements. Identify one statement that supports opening the new branch and one statement that argues against it.

| Supports | Opposes | Statements |
|----------|---------|------------|
| $\\circ$ | $\\circ$ | The local unemployment rate is 8%, suggesting available talent. |
| $\\circ$ | $\\circ$ | The company's existing office is at 95% capacity. |
| $\\circ$ | $\\circ$ | Commercial rent in the area has increased 20% in the past year. |
| $\\circ$ | $\\circ$ | A competitor recently closed its branch in the same city. |
| $\\circ$ | $\\circ$ | The company's revenue grew 3% last quarter, below the industry average of 7%. |
| $\\circ$ | $\\circ$ | The target city has a growing population of 25--40 year-olds. |

**Solution:**

Evaluate each statement:

- **Unemployment at 8%:** Supports --- available workforce makes hiring easier.
- **Office at 95% capacity:** Supports --- the company needs more space, justifying expansion.
- **Rent increased 20%:** Opposes --- higher costs make the new branch more expensive.
- **Competitor closed its branch:** Ambiguous --- could suggest a bad market (opposes) or reduced competition (supports). Too ambiguous for a clear answer.
- **Revenue grew 3%, below industry average:** Opposes --- weak financial performance suggests the company may not be in a position to expand.
- **Growing population of 25--40 year-olds:** Supports --- expanding customer/talent base.

The **strongest** support is "Office at 95% capacity" (a direct operational need). The **strongest** opposition is "Revenue grew 3%, below industry average" (a direct financial concern).

**Answer:** Supports = Office at 95% capacity; Opposes = Revenue grew 3%, below industry average.

**Key insight:** For logical TPA, look for the **strongest and most direct** connection to the question. Avoid ambiguous options that could go either way.

### Example 4: Constraint-Based TPA

**Question:** A teacher is assigning students to two project teams. Team Alpha needs a student with math skills and Team Beta needs a student with writing skills. Each student can only be on one team. Based on the skill assessments, which student should be assigned to which team?

Additional constraints from the stem: "The student assigned to Team Alpha must have scored above 80 in mathematics. The student assigned to Team Beta must have scored above 85 in writing. No student can be assigned to both teams."

| Team Alpha | Team Beta | Students |
|-----------|----------|----------|
| $\\circ$ | $\\circ$ | Jordan (Math: 92, Writing: 88) |
| $\\circ$ | $\\circ$ | Kim (Math: 78, Writing: 91) |
| $\\circ$ | $\\circ$ | Lee (Math: 85, Writing: 74) |
| $\\circ$ | $\\circ$ | Morgan (Math: 70, Writing: 95) |
| $\\circ$ | $\\circ$ | Patel (Math: 88, Writing: 82) |
| $\\circ$ | $\\circ$ | Rivera (Math: 65, Writing: 89) |

**Solution:**

Apply constraints:

**Team Alpha (Math > 80):** Jordan (92), Lee (85), Patel (88) qualify. Kim (78), Morgan (70), Rivera (65) are eliminated.

**Team Beta (Writing > 85):** Jordan (88), Kim (91), Morgan (95), Rivera (89) qualify. Lee (74), Patel (82) are eliminated.

Now, the student must be different for each team. Jordan qualifies for both, so if Jordan is on Alpha, Beta could be Kim, Morgan, or Rivera. If Jordan is on Beta, Alpha could be Lee or Patel.

The constraint is that both slots must be filled. The unique solution is determined by finding a pairing where each assignment is valid and the students are different. Multiple valid pairings exist, but looking at the choices:

- Patel to Alpha (Math 88 > 80) and Morgan to Beta (Writing 95 > 85) works.
- Lee to Alpha (Math 85 > 80) and Kim to Beta (Writing 91 > 85) also works.

The question would typically have additional constraints to make the answer unique --- perhaps "maximize the combined score" or another tiebreaker. In this case, let us say the question asks for the pairing that **maximizes the sum of relevant scores**: Patel (88) + Morgan (95) = 183, while Lee (85) + Kim (91) = 176.

**Answer:** Team Alpha = Patel, Team Beta = Morgan.

---

## Time Management Tips

1. **Budget 2 to 3 minutes per TPA question.** These are single questions (not sets), so you should be efficient.

2. **Set up equations immediately** for algebraic TPA. Do not re-read the problem multiple times. Translate to math on first read.

3. **Use the answer choices.** With only six options, backsolving (plugging in answer choices) is often faster than solving algebraically. Start with the middle values.

4. **For logical TPA, eliminate the weakest options first.** Cross out ambiguous or irrelevant statements, then focus on the strongest candidates for each column.

5. **Do not overthink.** If you have identified a clear answer for both columns and it satisfies all constraints, select it and move on.

---

## Common TPA Traps

1. **Selecting the same row for both columns when the question requires different values.** Read carefully whether the two answers can or cannot be the same.

2. **Partial credit does not exist.** Getting one column right and one wrong scores zero. Verify both answers before confirming.

3. **Overlooking constraints.** The question stem may include conditions like "positive integers only" or "the total must not exceed 100." Missing a constraint leads to wrong answers.

4. **Confusing the column labels.** Double-check which column is "Value of $x$" and which is "Value of $y$." Under time pressure, students sometimes put the right answers in the wrong columns.

5. **Overcomplicating the problem.** Some TPA questions look complex but reduce to simple arithmetic once you read carefully. Do not assume every TPA requires a system of equations.

6. **Ignoring negative solutions.** If the equations yield a negative value for one variable but the context requires positive values (e.g., number of items), check whether another answer choice works, or whether you set up the equations incorrectly.

---

## GMAT Tips

1. **Read the column headers before the answer choices.** Understanding what each column asks for focuses your thinking.

2. **Write the equations on your scratch paper.** Do not try to hold a system of equations in your head. Neat scratch work prevents errors.

3. **Backsolve when algebra is messy.** If the coefficients are awkward or the system is nonlinear, plug answer choices into your equations to find the pair that works.

4. **For verbal/logical TPA, identify the conclusion first.** Understand the argument or scenario before evaluating the answer choices. Ask yourself: "What is the main claim? What would support it? What would weaken it?"

5. **Expect about 2 to 4 TPA questions on your GMAT.** They are a moderate portion of the Data Insights section. Practice enough to be comfortable with the format, but do not over-index on this question type at the expense of others.

6. **When stuck, try process of elimination.** Even if you cannot solve the problem directly, eliminating two or three options from each column gives you much better odds than random guessing.

7. **Check your answer by substituting back.** After selecting values for both columns, verify they satisfy all the equations and constraints in the question stem. This 10-second check can catch careless errors.
`;
