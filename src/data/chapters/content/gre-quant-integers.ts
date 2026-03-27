export const content = `
# Integers & Number Properties

Integer and number properties form the backbone of GRE Quantitative Reasoning. These concepts appear in every question format — Quantitative Comparison (QC), Problem Solving (PS), and Numeric Entry (NE). Mastering even/odd rules, divisibility, primes, and remainders will let you eliminate wrong answers quickly and avoid the traps the GRE loves to set, especially in QC questions where the answer depends on whether a variable is even or odd, positive or negative.

---

## Even & Odd Rules

An **even** integer is divisible by 2: $\\{\\ldots, -4, -2, 0, 2, 4, \\ldots\\}$. An **odd** integer is not: $\\{\\ldots, -3, -1, 1, 3, 5, \\ldots\\}$.

> **Common Trap:** Zero is **even**. The GRE tests this. $0 = 2 \\times 0$, so it satisfies the definition of an even number.

### Addition & Subtraction

$$\\text{Even} \\pm \\text{Even} = \\text{Even}$$
$$\\text{Odd} \\pm \\text{Odd} = \\text{Even}$$
$$\\text{Even} \\pm \\text{Odd} = \\text{Odd}$$

**Memory aid:** Same parity sums to even; different parity sums to odd.

### Multiplication

$$\\text{Even} \\times \\text{anything} = \\text{Even}$$
$$\\text{Odd} \\times \\text{Odd} = \\text{Odd}$$

The product of integers is odd **only** when every factor is odd. A single even factor makes the entire product even.

> **Strategy:** In QC problems, if the problem says "$n$ is an integer," test both even and odd values. If the two columns give different comparison results depending on parity, the answer is **(D) — cannot be determined**.

---

## Positive & Negative Rules

### Multiplication & Division

$$\\text{Positive} \\times \\text{Positive} = \\text{Positive}$$
$$\\text{Negative} \\times \\text{Negative} = \\text{Positive}$$
$$\\text{Positive} \\times \\text{Negative} = \\text{Negative}$$

An even number of negative factors gives a positive product; an odd number gives a negative product.

### Powers

- If $x > 0$, then $x^n > 0$ for all $n$.
- If $x < 0$ and $n$ is even, then $x^n > 0$.
- If $x < 0$ and $n$ is odd, then $x^n < 0$.

> **Common Trap:** On QC questions, if you are told "$x$ is a non-zero integer" without specifying sign, you **must** test both positive and negative values. The GRE designs QC problems so that forgetting to test negatives leads to the wrong answer.

---

## Prime Numbers

A **prime number** is an integer greater than 1 whose only positive factors are 1 and itself.

**First 10 primes:** $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$

Key facts:
- **2 is the only even prime.** Every other even number is divisible by 2.
- **1 is NOT prime.** The GRE tests this.
- There are infinitely many primes.

### Prime Factorization

Every integer greater than 1 can be written uniquely as a product of prime factors.

**Example:** Find the prime factorization of 360.

$$360 = 2 \\times 180 = 2 \\times 2 \\times 90 = 2^2 \\times 2 \\times 45 = 2^3 \\times 45 = 2^3 \\times 9 \\times 5 = 2^3 \\times 3^2 \\times 5$$

> **Strategy:** Prime factorization is the master key for GRE number properties. Use it to find GCF, LCM, number of factors, and to simplify fraction problems.

### Counting Factors

If $n = p_1^{a_1} \\times p_2^{a_2} \\times \\cdots \\times p_k^{a_k}$, the total number of positive factors is:

$$(a_1 + 1)(a_2 + 1) \\cdots (a_k + 1)$$

**Example:** $360 = 2^3 \\times 3^2 \\times 5^1$ has $(3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24$ positive factors.

---

## Divisibility Rules

These shortcuts let you test divisibility without long division — invaluable on a timed exam.

| Divisor | Rule |
|---------|------|
| **2** | Last digit is even (0, 2, 4, 6, 8) |
| **3** | Sum of digits is divisible by 3 |
| **4** | Last two digits form a number divisible by 4 |
| **5** | Last digit is 0 or 5 |
| **6** | Divisible by both 2 and 3 |
| **8** | Last three digits form a number divisible by 8 |
| **9** | Sum of digits is divisible by 9 |

**Example:** Is 7,344 divisible by 6?

- Last digit is 4 (even), so divisible by 2. ✓
- Sum of digits: $7 + 3 + 4 + 4 = 18$, divisible by 3. ✓
- Divisible by both 2 and 3, so divisible by 6. ✓

---

## GCF and LCM

### Greatest Common Factor (GCF)

The GCF of two numbers is the largest number that divides both. To find it, take the **lowest** power of each **shared** prime factor.

**Example:** GCF of 36 and 48.

$$36 = 2^2 \\times 3^2, \\quad 48 = 2^4 \\times 3$$

Shared primes: 2 and 3. Take the lower power of each: $2^2 \\times 3^1 = 12$.

$$\\text{GCF}(36, 48) = 12$$

### Least Common Multiple (LCM)

The LCM is the smallest positive number divisible by both. Take the **highest** power of each prime that appears in either factorization.

$$\\text{LCM}(36, 48) = 2^4 \\times 3^2 = 16 \\times 9 = 144$$

### Key Relationship

$$\\text{GCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b$$

> **Strategy:** This formula is a huge time-saver on the GRE. If you know any three of the four values (GCF, LCM, $a$, $b$), you can find the fourth instantly.

---

## Remainders

When integer $a$ is divided by positive integer $d$:

$$a = d \\times q + r, \\quad 0 \\le r < d$$

where $q$ is the quotient and $r$ is the remainder.

**Example:** $17 = 5 \\times 3 + 2$, so 17 divided by 5 has quotient 3 and remainder 2.

### Remainder Arithmetic

- $(a + b) \\mod d = (a \\mod d + b \\mod d) \\mod d$
- $(a \\times b) \\mod d = (a \\mod d \\times b \\mod d) \\mod d$

**Example:** What is the remainder when $23 \\times 17$ is divided by 5?

$23 \\mod 5 = 3$ and $17 \\mod 5 = 2$. So the remainder is $(3 \\times 2) \\mod 5 = 6 \\mod 5 = 1$.

> **Common Trap:** Remainders must be non-negative on the GRE. When $-17$ is divided by 5, the remainder is **not** $-2$; it is $3$ (since $-17 = 5 \\times (-4) + 3$).

---

## Consecutive Integers

Consecutive integers are integers that follow each other in order: $n, n+1, n+2, \\ldots$

Key properties:
- The sum of $k$ consecutive integers $= k \\times \\text{median}$.
- Among any $n$ consecutive integers, exactly one is divisible by $n$.
- The product of any $k$ consecutive integers is divisible by $k!$.

**Example:** The product of 3 consecutive integers is always divisible by $3! = 6$.

$$4 \\times 5 \\times 6 = 120 \\quad (120 / 6 = 20) \\; ✓$$

> **Strategy:** For consecutive integer problems, use algebraic representation. Let the integers be $n, n+1, n+2, \\ldots$ and translate the word problem into an equation.

---

## Worked Examples

### Example 1: QC — Even/Odd Properties

**Column A:** The remainder when an even integer is divided by 2
**Column B:** The remainder when an odd integer is divided by 2

**Solution:** Any even integer divided by 2 gives remainder 0. Any odd integer divided by 2 gives remainder 1. Column A = 0, Column B = 1. Answer: **Column B is greater.**

### Example 2: Number of Factors

**Problem:** How many positive factors does 720 have?

$$720 = 2^4 \\times 3^2 \\times 5^1$$

Number of factors: $(4+1)(2+1)(1+1) = 5 \\times 3 \\times 2 = \\textbf{30}$

### Example 3: LCM Application

**Problem:** What is the least positive integer divisible by both 12 and 18?

$$12 = 2^2 \\times 3, \\quad 18 = 2 \\times 3^2$$

$$\\text{LCM} = 2^2 \\times 3^2 = 4 \\times 9 = \\textbf{36}$$

---

## GRE Question Type Tips

1. **Quantitative Comparison:** Number properties QC problems thrive on ambiguity. If a variable is described only as "an integer," always test even vs. odd, positive vs. negative, and 0 vs. 1. If different test cases give different comparison results, the answer is **(D)**.

2. **Problem Solving:** Factor-counting and LCM/GCF problems frequently appear as PS. Write out the prime factorization — it makes every step mechanical.

3. **Numeric Entry:** Remainder and consecutive-integer problems are common NE questions. Double-check by plugging your answer back in, since there are no answer choices to guide you.

4. **Know your special cases:** The integers $0$, $1$, $-1$, and $2$ are the most important test values on the GRE. Zero is even but neither positive nor negative. One is odd but not prime. Two is the only even prime. Negative one raised to even powers is 1, to odd powers is $-1$.
`;
