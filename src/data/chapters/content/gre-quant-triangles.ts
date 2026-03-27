export const content = `
# Lines, Angles & Triangles

Geometry accounts for a significant portion of GRE Quant questions. Lines, angles, and triangles form the foundation of every geometry problem you will encounter. Memorize the key relationships and special triangle ratios, and most GRE geometry problems become fast exercises in pattern recognition.

---

## Angle Relationships

### Vertical Angles

When two lines intersect, they form two pairs of **vertical angles**. Vertical angles are always equal:

$$\\angle A = \\angle C, \\quad \\angle B = \\angle D$$

### Supplementary and Complementary Angles

- **Supplementary angles** add up to $180°$: $\\quad \\alpha + \\beta = 180°$
- **Complementary angles** add up to $90°$: $\\quad \\alpha + \\beta = 90°$

**Angles on a straight line** are supplementary. If three angles sit on a line:

$$\\alpha + \\beta + \\gamma = 180°$$

**Angles around a point** sum to $360°$.

> **Common Trap:** When a figure shows angles along a straight line, do not assume angles are equal just because they look similar. Use the $180°$ rule and given values to calculate unknown angles. GRE figures are "not necessarily drawn to scale" unless stated otherwise.

---

## Parallel Lines and Transversals

When a transversal crosses two parallel lines, it creates 8 angles with special relationships:

- **Corresponding angles** are equal (same position at each intersection).
- **Alternate interior angles** are equal (opposite sides of the transversal, between the parallel lines).
- **Co-interior (same-side interior) angles** are supplementary (they add to $180°$).

If lines $l_1 \\parallel l_2$ and a transversal cuts them, every acute angle formed is equal to every other acute angle, and every obtuse angle is equal to every other obtuse angle. Any acute angle plus any obtuse angle equals $180°$.

> **Strategy:** When you see parallel lines on the GRE, immediately identify which angles are equal and which are supplementary. This often unlocks the entire problem in one step.

---

## Triangle Fundamentals

### Angle Sum Property

The three interior angles of any triangle sum to $180°$:

$$\\alpha + \\beta + \\gamma = 180°$$

### Exterior Angle Theorem

An **exterior angle** of a triangle equals the sum of the two non-adjacent interior angles:

$$\\theta_{\\text{ext}} = \\alpha + \\beta$$

This is a powerful shortcut that avoids needing to find the third interior angle first.

### Triangle Classification

**By sides:**
- **Equilateral:** all sides equal, all angles $= 60°$
- **Isosceles:** two sides equal, base angles equal
- **Scalene:** no sides equal

**By angles:**
- **Acute:** all angles $< 90°$
- **Right:** one angle $= 90°$
- **Obtuse:** one angle $> 90°$

---

## Triangle Area

The standard area formula is:

$$A = \\frac{1}{2} \\times b \\times h$$

where $b$ is any side (the base) and $h$ is the **perpendicular** height to that base.

For an **equilateral triangle** with side length $s$:

$$A = \\frac{s^2\\sqrt{3}}{4}$$

> **Common Trap:** The height must be perpendicular to the base. In an obtuse triangle, the height may fall outside the triangle. Do not use a slanted side as the height.

---

## The Pythagorean Theorem

For a right triangle with legs $a$ and $b$ and hypotenuse $c$:

$$a^2 + b^2 = c^2$$

The hypotenuse is always the longest side and is opposite the right angle.

### Common Pythagorean Triples

Memorize these and their multiples:

| Triple | Common Multiples |
|---|---|
| $3, 4, 5$ | $6, 8, 10$ and $9, 12, 15$ and $15, 20, 25$ |
| $5, 12, 13$ | $10, 24, 26$ |
| $8, 15, 17$ | $16, 30, 34$ |
| $7, 24, 25$ | |

> **Strategy:** When a GRE problem gives you two sides of a right triangle, check for a Pythagorean triple before computing. If you see legs of 6 and 8, the hypotenuse is 10 (a $3\\text{-}4\\text{-}5$ triple scaled by 2). This saves valuable time.

### Converse of the Pythagorean Theorem

Given sides $a \\le b \\le c$:
- If $a^2 + b^2 = c^2$: the triangle is **right**.
- If $a^2 + b^2 > c^2$: the triangle is **acute**.
- If $a^2 + b^2 < c^2$: the triangle is **obtuse**.

---

## Special Right Triangles

### 45-45-90 Triangle

Side ratio: $1 : 1 : \\sqrt{2}$

If each leg has length $x$, the hypotenuse is $x\\sqrt{2}$.

$$\\text{Leg} = x, \\quad \\text{Leg} = x, \\quad \\text{Hypotenuse} = x\\sqrt{2}$$

This triangle is half of a square cut along the diagonal. If a square has side $s$, its diagonal is $s\\sqrt{2}$.

### 30-60-90 Triangle

Side ratio: $1 : \\sqrt{3} : 2$

$$\\text{Short leg (opposite 30°)} = x$$
$$\\text{Long leg (opposite 60°)} = x\\sqrt{3}$$
$$\\text{Hypotenuse (opposite 90°)} = 2x$$

This triangle is half of an equilateral triangle. If an equilateral triangle has side $s$, its height is $\\frac{s\\sqrt{3}}{2}$.

### Worked Example

**Problem:** The hypotenuse of a 30-60-90 triangle is 10. What is the area of the triangle?

**Solution:**

The hypotenuse $= 2x = 10$, so $x = 5$.

- Short leg $= 5$
- Long leg $= 5\\sqrt{3}$

$$A = \\frac{1}{2}(5)(5\\sqrt{3}) = \\frac{25\\sqrt{3}}{2} \\approx \\textbf{21.65}$$

> **Common Trap:** Do not mix up which leg is opposite which angle. The short leg is always opposite the $30°$ angle, and the long leg is always opposite the $60°$ angle. Swapping them gives wrong answers.

---

## Similar Triangles

Two triangles are **similar** if their corresponding angles are equal (AA similarity is sufficient on the GRE). Similar triangles have proportional sides:

$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} = k$$

If the ratio of corresponding sides is $k$, then:
- Ratio of perimeters $= k$
- Ratio of areas $= k^2$

### Worked Example

**Problem:** Triangle $ABC$ is similar to triangle $DEF$. If $AB = 6$, $DE = 9$, and the area of triangle $ABC$ is 20, what is the area of triangle $DEF$?

**Solution:**

The scale factor is $k = \\frac{9}{6} = \\frac{3}{2}$.

$$\\text{Area of } DEF = 20 \\times k^2 = 20 \\times \\frac{9}{4} = \\textbf{45}$$

> **Strategy:** On the GRE, similar triangles often appear when a line is drawn parallel to one side of a triangle, or when two triangles share an angle. Look for the AA pattern.

---

## Triangle Inequality

For any triangle with sides $a$, $b$, and $c$:

$$|a - b| < c < a + b$$

The sum of any two sides must be **greater than** the third side.

### Worked Example

**Problem:** Two sides of a triangle have lengths 5 and 9. If the third side has integer length, how many possible values are there?

**Solution:**

$$|9 - 5| < c < 9 + 5$$
$$4 < c < 14$$

Integer values of $c$: $5, 6, 7, 8, 9, 10, 11, 12, 13$

That is $\\textbf{9}$ possible values.

> **Common Trap:** The inequality is strict: the third side must be **greater than** the difference and **less than** the sum. It cannot equal either endpoint. So $c = 4$ and $c = 14$ are not valid.

---

## GRE Question Type Tips

**Quantitative Comparison (QC):** Geometry QC problems often test whether you can determine a relationship from limited information. Remember: knowing two sides of a triangle does not determine the third side (it could be any value satisfying the triangle inequality). If the relationship depends on unknown values, the answer may be "cannot be determined."

**Problem Solving (PS):** Multi-step problems often combine concepts: parallel lines give you angles, which reveal special triangles, which give you side lengths. Chain the relationships. Draw and label the figure carefully.

**Numeric Entry (NE):** These often involve computing an exact area or length. Be precise with special triangle ratios. If the answer involves $\\sqrt{3}$ or $\\sqrt{2}$, the GRE may ask for a decimal approximation, so know that $\\sqrt{2} \\approx 1.414$ and $\\sqrt{3} \\approx 1.732$.

---

## Key Formulas

$$\\boxed{\\alpha + \\beta + \\gamma = 180° \\text{ (triangle angle sum)}}$$

$$\\boxed{a^2 + b^2 = c^2 \\text{ (Pythagorean theorem)}}$$

$$\\boxed{A = \\frac{1}{2}bh}$$

$$\\boxed{45\\text{-}45\\text{-}90: \\quad 1 : 1 : \\sqrt{2}}$$

$$\\boxed{30\\text{-}60\\text{-}90: \\quad 1 : \\sqrt{3} : 2}$$

$$\\boxed{\\text{Similar triangles: area ratio} = k^2}$$
`;
