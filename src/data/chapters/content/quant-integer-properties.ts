export const content = `
# Properties of Integers

Integers form one of the most heavily tested foundations on the GMAT Quantitative section. Understanding divisibility rules, prime numbers, and remainder patterns will save you significant time and help you avoid common traps. This chapter covers everything you need to master integer properties for test day.

---

## What Are Integers?

**Integers** are whole numbers that include positive numbers, negative numbers, and zero:

$$\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$$

Key facts to internalize:

- **Zero is an integer.** It is neither positive nor negative.
- Integers do **not** include fractions or decimals. So $\\frac{1}{2}$, $0.75$, and $\\sqrt{2}$ are **not** integers.
- The GMAT loves to test the boundary between "positive integers" and "non-negative integers." The phrase **"positive integer"** excludes zero; **"non-negative integer"** includes zero.

### Even and Odd Integers

An **even** integer is any integer divisible by 2: $\\ldots, -4, -2, 0, 2, 4, \\ldots$

An **odd** integer is any integer **not** divisible by 2: $\\ldots, -3, -1, 1, 3, 5, \\ldots$

**Critical fact: 0 is even.** This is one of the most common GMAT traps.

**Arithmetic rules for even and odd:**

| Operation | Rule | Example |
|-----------|------|---------|
| Even + Even | Even | $4 + 6 = 10$ |
| Odd + Odd | Even | $3 + 5 = 8$ |
| Even + Odd | Odd | $4 + 3 = 7$ |
| Even $\\times$ Even | Even | $4 \\times 6 = 24$ |
| Odd $\\times$ Odd | Odd | $3 \\times 5 = 15$ |
| Even $\\times$ Odd | Even | $4 \\times 3 = 12$ |

**Key takeaway for multiplication:** If **any** factor in a product is even, the entire product is even. A product is odd **only** when every factor is odd.

### Positive and Negative Rules

For multiplication and division:

- **Positive $\\times$ Positive = Positive**
- **Negative $\\times$ Negative = Positive**
- **Positive $\\times$ Negative = Negative**

The sign of a product (or quotient) depends on the **count** of negative factors:

- **Even number** of negative factors $\\Rightarrow$ **positive** result
- **Odd number** of negative factors $\\Rightarrow$ **negative** result

---

## Divisibility Rules

Divisibility rules let you quickly determine whether one integer divides evenly into another without performing long division. These are essential time-savers on the GMAT.

| Divisor | Rule | Example |
|---------|------|---------|
| **2** | Last digit is even (0, 2, 4, 6, 8) | $174$ is divisible by 2 (ends in 4) |
| **3** | Sum of digits is divisible by 3 | $231$: $2+3+1=6$, divisible by 3 |
| **4** | Last two digits form a number divisible by 4 | $1{,}316$: $16 \\div 4 = 4$ ✓ |
| **5** | Last digit is 0 or 5 | $985$ ends in 5 ✓ |
| **6** | Divisible by **both** 2 and 3 | $312$: even, and $3+1+2=6$ ✓ |
| **8** | Last three digits form a number divisible by 8 | $5{,}120$: $120 \\div 8 = 15$ ✓ |
| **9** | Sum of digits is divisible by 9 | $729$: $7+2+9=18$, and $18 \\div 9 = 2$ ✓ |

**Tip:** The divisibility rule for 6 combines the rules for 2 and 3. Similarly, any composite divisor can be checked by testing its co-prime factor pairs. For instance, divisibility by 12 requires divisibility by both 4 and 3.

---

## Prime Numbers

A **prime number** is a positive integer greater than 1 that has exactly two distinct positive divisors: 1 and itself.

The first several primes: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 \\ldots$

**Critical facts:**

- **1 is NOT prime.** It has only one positive divisor (itself), not two. This is a classic GMAT trap.
- **2 is the only even prime.** Every other even number is divisible by 2, so it has at least three divisors.
- **There are infinitely many primes.** The GMAT won't test this proof, but knowing it helps with reasoning.

### Prime Factorization

Every positive integer greater than 1 can be expressed as a unique product of prime factors. This is called the **Fundamental Theorem of Arithmetic**.

**Method:** Divide by the smallest prime possible, then repeat.

$$360 = 2 \\times 180 = 2 \\times 2 \\times 90 = 2 \\times 2 \\times 2 \\times 45 = 2^3 \\times 45$$
$$45 = 3 \\times 15 = 3 \\times 3 \\times 5$$

So: $360 = 2^3 \\times 3^2 \\times 5^1$

### Counting Divisors

If a number has the prime factorization $n = p_1^{a_1} \\times p_2^{a_2} \\times \\cdots \\times p_k^{a_k}$, then the **total number of positive divisors** is:

$$(a_1 + 1)(a_2 + 1) \\cdots (a_k + 1)$$

For $360 = 2^3 \\times 3^2 \\times 5^1$:

$$(3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24 \\text{ divisors}$$

---

## GCD and LCM

### Greatest Common Divisor (GCD)

The **GCD** (also called the Greatest Common Factor or Highest Common Factor) of two integers is the largest positive integer that divides both of them.

**Prime factorization method:** Take the **minimum** exponent of each shared prime factor.

$$\\text{GCD}(360, 450)$$

- $360 = 2^3 \\times 3^2 \\times 5^1$
- $450 = 2^1 \\times 3^2 \\times 5^2$
- GCD $= 2^{\\min(3,1)} \\times 3^{\\min(2,2)} \\times 5^{\\min(1,2)} = 2^1 \\times 3^2 \\times 5^1 = 90$

### Least Common Multiple (LCM)

The **LCM** of two integers is the smallest positive integer that is divisible by both of them.

**Prime factorization method:** Take the **maximum** exponent of each prime factor that appears in either number.

$$\\text{LCM}(360, 450) = 2^{\\max(3,1)} \\times 3^{\\max(2,2)} \\times 5^{\\max(1,2)} = 2^3 \\times 3^2 \\times 5^2 = 1{,}800$$

### The GCD-LCM Relationship

For any two positive integers $a$ and $b$:

$$a \\times b = \\text{GCD}(a, b) \\times \\text{LCM}(a, b)$$

**Verification:** $360 \\times 450 = 162{,}000$ and $90 \\times 1{,}800 = 162{,}000$ ✓

This formula is a powerful shortcut when you know one of GCD or LCM and need the other.

---

## Remainders and Modular Arithmetic

When integer $a$ is divided by positive integer $d$, we can write:

$$a = d \\times q + r$$

where $q$ is the **quotient** (an integer) and $r$ is the **remainder** with $0 \\le r < d$.

For example: $17 = 5 \\times 3 + 2$, so $17$ divided by $5$ leaves a remainder of $2$.

### Remainder Patterns

Remainders follow **cyclical patterns**, which is extremely useful for GMAT problems involving large exponents.

**Example:** What is the remainder when $2^{100}$ is divided by 3?

The powers of 2 mod 3 cycle with period 2:
- $2^1 = 2 \\Rightarrow$ remainder $2$
- $2^2 = 4 \\Rightarrow$ remainder $1$
- $2^3 = 8 \\Rightarrow$ remainder $2$
- $2^4 = 16 \\Rightarrow$ remainder $1$

The pattern is: $2, 1, 2, 1, \\ldots$ (cycle length 2). Since $100$ is even, $2^{100}$ has the same remainder as $2^2$, which is **1**.

### Remainder Arithmetic

You can add, subtract, and multiply remainders:

- If $a$ has remainder $r_1$ and $b$ has remainder $r_2$ when divided by $d$, then:
  - $a + b$ has remainder $(r_1 + r_2) \\mod d$
  - $a \\times b$ has remainder $(r_1 \\times r_2) \\mod d$

This lets you break complex problems into simpler pieces.

---

## Key Formulas

- **Even/Odd product rule:** Product is even if any factor is even; odd only if all factors are odd.
- **Number of divisors:** For $n = p_1^{a_1} \\times p_2^{a_2} \\times \\cdots$, divisor count $= (a_1+1)(a_2+1) \\cdots$
- **GCD:** Use minimum exponents of shared primes.
- **LCM:** Use maximum exponents across all primes.
- **GCD-LCM identity:** $a \\times b = \\text{GCD}(a,b) \\times \\text{LCM}(a,b)$
- **Division equation:** $a = dq + r$ where $0 \\le r < d$

---

## Worked Examples

### Example 1: Even/Odd Reasoning

**Problem:** If $m$ and $n$ are positive integers and $m + n$ is odd, which of the following must be even?

(A) $mn + m$  (B) $mn + n$  (C) $mn + m + n$  (D) $mn$  (E) $m^2 + n^2$

**Solution:** Since $m + n$ is odd, one of $m, n$ is even and the other is odd. Without loss of generality, say $m$ is even and $n$ is odd.

- $mn$: even $\\times$ odd $=$ even
- $mn + m + n$: even + even + odd $=$ odd ✗

Check each:
- (A) $mn + m = $ even + even $=$ even ✓
- (B) $mn + n = $ even + odd $=$ odd ✗
- (C) $mn + m + n = $ even + even + odd $=$ odd ✗
- (D) $mn = $ even ✓
- (E) $m^2 + n^2 = $ even + odd $=$ odd ✗

But wait — we assumed $m$ is even. If $n$ is even and $m$ is odd instead:
- (A) $mn + m = $ even + odd $=$ odd ✗
- (D) $mn = $ even ✓

Only **(D)** is **always** even regardless of which variable is even. The answer is **(D)**.

### Example 2: Prime Factorization and Divisor Counting

**Problem:** How many positive divisors does 1,200 have?

**Solution:** Find the prime factorization:

$1{,}200 = 12 \\times 100 = (4 \\times 3)(4 \\times 25) = 2^4 \\times 3^1 \\times 5^2 \\times 2^0$

More carefully: $1{,}200 = 2^4 \\times 3^1 \\times 5^2$

Number of divisors $= (4+1)(1+1)(2+1) = 5 \\times 2 \\times 3 = \\textbf{30}$

### Example 3: GCD/LCM Application

**Problem:** Two runners start at the same point on a circular track. Runner A completes a lap every 12 minutes, and Runner B completes a lap every 18 minutes. After how many minutes will they first meet again at the starting point?

**Solution:** We need the **LCM** of 12 and 18.

- $12 = 2^2 \\times 3$
- $18 = 2 \\times 3^2$
- $\\text{LCM} = 2^2 \\times 3^2 = 4 \\times 9 = \\textbf{36 minutes}$

### Example 4: Remainder Problem

**Problem:** What is the remainder when $3^{75}$ is divided by 5?

**Solution:** Find the cycle of remainders when powers of 3 are divided by 5:

- $3^1 = 3 \\Rightarrow$ remainder $3$
- $3^2 = 9 \\Rightarrow$ remainder $4$
- $3^3 = 27 \\Rightarrow$ remainder $2$
- $3^4 = 81 \\Rightarrow$ remainder $1$
- $3^5 = 243 \\Rightarrow$ remainder $3$ (cycle repeats)

Cycle length is $4$: the pattern is $3, 4, 2, 1$.

$75 \\div 4 = 18$ remainder $3$

So $3^{75}$ has the same remainder as $3^3$, which is **2**.

---

## GMAT Tips

1. **0 is even.** The GMAT tests this repeatedly. Zero is an even integer, but it is neither positive nor negative.

2. **1 is not prime.** A prime must have exactly two distinct positive divisors. The number 1 has only one divisor (itself).

3. **Negative integers are still integers.** When a problem says "integer," remember that negatives are included. If the problem says "positive integer," then negatives and zero are excluded.

4. **Test boundary cases.** When a Data Sufficiency problem involves integers, always check: What happens with 0? With 1? With negative numbers? These are the values that most often break assumptions.

5. **Consecutive integer patterns.** Among any $n$ consecutive integers, exactly one is divisible by $n$. This fact is useful for problems about products of consecutive integers (the product of any $k$ consecutive integers is always divisible by $k!$).

6. **Perfect squares have an odd number of divisors.** This is because one of the "factor pairs" is the square root paired with itself. If a problem asks for a number with an odd number of positive divisors, it must be a perfect square.

7. **On Data Sufficiency remainder problems,** be careful about whether the variable could be 0 or negative. The remainder when 0 is divided by any positive integer is 0, and remainder conventions for negative numbers can be tricky.
`;
