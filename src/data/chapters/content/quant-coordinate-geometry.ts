export const content = `
# Coordinate Geometry

Coordinate geometry bridges algebra and geometry by placing geometric figures on a number plane. On the GMAT, these questions test your ability to work with lines, distances, and areas using algebraic tools. The concepts are straightforward, but precision matters---a small error in signs or fractions can lead to a wrong answer.

---

## 1. The Coordinate Plane

The **coordinate plane** (also called the Cartesian plane) consists of two perpendicular number lines:

- The **$x$-axis** (horizontal)
- The **$y$-axis** (vertical)

They intersect at the **origin** $(0, 0)$.

Every point on the plane is identified by an ordered pair $(x, y)$:
- $x$ = horizontal distance from the $y$-axis (positive to the right, negative to the left)
- $y$ = vertical distance from the $x$-axis (positive upward, negative downward)

### The Four Quadrants

| Quadrant | $x$ | $y$ |
|---|---|---|
| I (upper right) | $+$ | $+$ |
| II (upper left) | $-$ | $+$ |
| III (lower left) | $-$ | $-$ |
| IV (lower right) | $+$ | $-$ |

Points on the axes do not belong to any quadrant.

### GMAT Relevance

Many Data Sufficiency questions ask "In which quadrant does point $(a, b)$ lie?" You need to determine the signs of $a$ and $b$---nothing more.

> **Quick Method:** For quadrant questions, you only need two pieces of information: the sign of $x$ and the sign of $y$. Any statement that tells you both signs is sufficient. If you know $xy > 0$, then $x$ and $y$ have the same sign (Quadrant I or III). If $xy < 0$, they have opposite signs (Quadrant II or IV). This eliminates half the quadrants instantly.

---

## 2. Distance Formula

The distance between two points $(x_1, y_1)$ and $(x_2, y_2)$ is:

$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

This comes directly from the Pythagorean theorem: the horizontal difference and vertical difference form the legs of a right triangle, and the distance is the hypotenuse.

**Example:** Find the distance between $(-1, 3)$ and $(4, -9)$.

$$d = \\sqrt{(4 - (-1))^2 + (-9 - 3)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$$

### Common Pythagorean Triples

Recognizing these saves time:

- $3, 4, 5$ (and multiples: $6, 8, 10$; $9, 12, 15$; etc.)
- $5, 12, 13$
- $8, 15, 17$
- $7, 24, 25$

In the example above, the legs were 5 and 12, so the distance is 13---a classic $5, 12, 13$ triple.

> **Quick Method:** Before grinding through the distance formula, check whether the horizontal and vertical differences form a Pythagorean triple. If the differences are 6 and 8, the distance is 10 (since $6, 8, 10$ is a multiple of $3, 4, 5$). This check takes 3 seconds and avoids the square root entirely.

> **Common Trap:** Sign errors in the distance formula are the number-one mistake. When subtracting a negative coordinate, remember: $4 - (-1) = 5$, not $3$. Always write out the subtraction carefully before squaring.

**Example:** What is the distance from the point $(7, -3)$ to the origin?

**Solution:**

$$d = \\sqrt{(7 - 0)^2 + (-3 - 0)^2} = \\sqrt{49 + 9} = \\sqrt{58}$$

Since 58 is not a perfect square and does not correspond to a Pythagorean triple, $\\sqrt{58}$ is the exact answer. On the GMAT, leave it in this form unless the answer choices are decimals.

---

## 3. Midpoint Formula

The midpoint of the segment connecting $(x_1, y_1)$ and $(x_2, y_2)$ is:

$$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$

Simply average the $x$-coordinates and average the $y$-coordinates.

**Example:** Midpoint of $(2, 8)$ and $(6, -4)$:

$$M = \\left(\\frac{2 + 6}{2}, \\frac{8 + (-4)}{2}\\right) = (4, 2)$$

### Reverse Application

If you know the midpoint $M$ and one endpoint, you can find the other endpoint. If $A = (1, 5)$ and $M = (4, 3)$, then endpoint $B = (2 \\times 4 - 1, 2 \\times 3 - 5) = (7, 1)$.

**Example:** The midpoint of segment $PQ$ is $(3, -1)$. If $P = (-2, 4)$, what are the coordinates of $Q$?

**Solution:**

$$Q_x = 2 \\times 3 - (-2) = 6 + 2 = 8$$
$$Q_y = 2 \\times (-1) - 4 = -2 - 4 = -6$$

$$Q = (8, -6)$$

**Verification:** Midpoint $= \\left(\\frac{-2 + 8}{2}, \\frac{4 + (-6)}{2}\\right) = \\left(\\frac{6}{2}, \\frac{-2}{2}\\right) = (3, -1)$. Correct.

> **Quick Method:** To find the missing endpoint when you know the midpoint and one endpoint, use: "double the midpoint and subtract the known endpoint." This is $B = 2M - A$, applied coordinate-wise. No need to set up equations.

---

## 4. Slope

The **slope** of a line measures its steepness and direction:

$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$$

### Interpreting Slope

- **Positive slope ($m > 0$):** Line rises from left to right.
- **Negative slope ($m < 0$):** Line falls from left to right.
- **Zero slope ($m = 0$):** Horizontal line.
- **Undefined slope:** Vertical line (run $= 0$).

> **Common Trap:** Students frequently mix up "zero slope" and "undefined slope." A horizontal line (like $y = 5$) has slope **zero**. A vertical line (like $x = 3$) has **undefined** slope. On DS questions, "the slope of line $L$ is 0" is a definite piece of information (the line is horizontal); "the slope of line $L$ is undefined" means it is vertical.

### Slope-Intercept Form

$$y = mx + b$$

where $m$ is the slope and $b$ is the **$y$-intercept** (the point where the line crosses the $y$-axis).

**Example:** A line passes through $(1, 4)$ and $(3, 10)$.

$$m = \\frac{10 - 4}{3 - 1} = \\frac{6}{2} = 3$$

Using point-slope form with $(1, 4)$:

$$y - 4 = 3(x - 1) \\implies y = 3x + 1$$

The slope is 3 and the $y$-intercept is 1.

### Other Forms of a Line

- **Standard form:** $Ax + By = C$ (useful for intercepts and for systems of equations).
- **Point-slope form:** $y - y_1 = m(x - x_1)$ (useful when you have a point and the slope).

**Example:** Write the equation of the line with slope $-\\frac{2}{3}$ that passes through $(6, 1)$.

**Solution:**

Using point-slope form:

$$y - 1 = -\\frac{2}{3}(x - 6)$$

$$y - 1 = -\\frac{2}{3}x + 4$$

$$y = -\\frac{2}{3}x + 5$$

The $y$-intercept is 5. In standard form: $2x + 3y = 15$.

---

## 5. Parallel and Perpendicular Lines

### Parallel Lines

Two lines are **parallel** if and only if they have the **same slope**:

$$m_1 = m_2$$

Parallel lines never intersect (assuming they are distinct).

**Example:** $y = 3x + 5$ and $y = 3x - 2$ are parallel (both have slope 3).

### Perpendicular Lines

Two lines are **perpendicular** if and only if their slopes are **negative reciprocals**:

$$m_1 \\times m_2 = -1 \\quad \\text{or equivalently} \\quad m_2 = -\\frac{1}{m_1}$$

**Example:** A line has slope $\\frac{2}{3}$. A perpendicular line has slope $-\\frac{3}{2}$.

**Special cases:**
- A horizontal line ($m = 0$) is perpendicular to a vertical line (undefined slope).
- This pair does not satisfy $m_1 \\times m_2 = -1$ numerically, but geometrically they are perpendicular.

> **Common Trap:** When finding the perpendicular slope, students often just negate the slope without also taking the reciprocal (or vice versa). If $m_1 = \\frac{2}{3}$, the perpendicular slope is NOT $-\\frac{2}{3}$ (just negated) and NOT $\\frac{3}{2}$ (just reciprocal). It must be **both**: $m_2 = -\\frac{3}{2}$.

> **Quick Method:** To find the perpendicular slope, flip the fraction and change the sign. That is the full procedure: $\\frac{2}{3} \\rightarrow -\\frac{3}{2}$, $-4 \\rightarrow \\frac{1}{4}$, $\\frac{1}{5} \\rightarrow -5$. Practice this until it is instantaneous.

**Example:** Line $L_1$ has equation $3x - 4y = 12$. Line $L_2$ passes through the origin and is perpendicular to $L_1$. What is the equation of $L_2$?

**Solution:**

Rewrite $L_1$ in slope-intercept form: $y = \\frac{3}{4}x - 3$. So $m_1 = \\frac{3}{4}$.

Perpendicular slope: $m_2 = -\\frac{4}{3}$.

$L_2$ passes through the origin, so $b = 0$:

$$y = -\\frac{4}{3}x$$

---

## 6. Finding $x$- and $y$-Intercepts

### $x$-Intercept

Set $y = 0$ and solve for $x$. The $x$-intercept is the point $(x, 0)$.

### $y$-Intercept

Set $x = 0$ and solve for $y$. The $y$-intercept is the point $(0, y)$.

**Example:** For the line $3x + 4y = 24$:

- $x$-intercept: $3x + 0 = 24 \\implies x = 8$. Point: $(8, 0)$.
- $y$-intercept: $0 + 4y = 24 \\implies y = 6$. Point: $(0, 6)$.

These intercepts are extremely useful for sketching lines quickly and for computing areas of triangles formed by lines and the coordinate axes.

> **Quick Method:** For a line in the form $\\frac{x}{a} + \\frac{y}{b} = 1$, the $x$-intercept is $(a, 0)$ and the $y$-intercept is $(0, b)$. To use this, rewrite $3x + 4y = 24$ as $\\frac{x}{8} + \\frac{y}{6} = 1$. Intercepts: $(8, 0)$ and $(0, 6)$. This form is called the **intercept form** and is the fastest way to read off both intercepts.

**Example:** The line $5x - 2y = 20$ crosses the axes at what points?

**Solution:**

- $x$-intercept: set $y = 0$: $5x = 20 \\implies x = 4$. Point: $(4, 0)$.
- $y$-intercept: set $x = 0$: $-2y = 20 \\implies y = -10$. Point: $(0, -10)$.

---

## 7. Area of Geometric Figures on the Coordinate Plane

### Triangle

If a triangle has vertices at known coordinates, you have several approaches:

**Method 1: Base $\\times$ Height**

If one side is horizontal or vertical, use it as the base and measure the perpendicular height.

**Example:** A triangle has vertices $A(0, 0)$, $B(6, 0)$, $C(2, 5)$.

Base $AB$ lies on the $x$-axis with length 6. The height is the vertical distance from $C$ to the $x$-axis, which is 5.

$$\\text{Area} = \\frac{1}{2} \\times 6 \\times 5 = 15$$

**Method 2: The Shoelace Formula**

For vertices $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$:

$$\\text{Area} = \\frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$$

This works for any triangle, regardless of orientation.

**Example:** Vertices at $(1, 2)$, $(4, 6)$, $(7, 1)$.

$$\\text{Area} = \\frac{1}{2} |1(6 - 1) + 4(1 - 2) + 7(2 - 6)|$$
$$= \\frac{1}{2} |5 + (-4) + (-28)|$$
$$= \\frac{1}{2} \\times |-27| = \\frac{27}{2} = 13.5$$

> **Quick Method:** For triangles formed by a line and the coordinate axes (a very common GMAT setup), find both intercepts and use:
>
> $$\\text{Area} = \\frac{1}{2} \\times |x\\text{-intercept}| \\times |y\\text{-intercept}|$$
>
> For example, the line $3x + 4y = 24$ has intercepts at $(8, 0)$ and $(0, 6)$. Area $= \\frac{1}{2} \\times 8 \\times 6 = 24$. No need for the shoelace formula.

### Rectangle

If a rectangle has sides parallel to the axes, the area is simply $\\text{width} \\times \\text{height}$, where width and height are the differences in $x$-coordinates and $y$-coordinates, respectively.

### Trapezoid

$$\\text{Area} = \\frac{1}{2}(b_1 + b_2) \\times h$$

where $b_1$ and $b_2$ are the lengths of the parallel sides and $h$ is the perpendicular distance between them.

> **Common Trap:** When computing areas with coordinates, always use absolute values for lengths. If the $x$-intercept is $-4$ and the $y$-intercept is $3$, the triangle area is $\\frac{1}{2} \\times 4 \\times 3 = 6$, not $\\frac{1}{2} \\times (-4) \\times 3 = -6$. Negative areas do not exist.

---

## 8. Equation of a Circle

The standard equation of a circle with center $(h, k)$ and radius $r$ is:

$$(x - h)^2 + (y - k)^2 = r^2$$

For a circle centered at the origin: $x^2 + y^2 = r^2$.

**Example:** The circle $(x - 3)^2 + (y + 2)^2 = 25$ has center $(3, -2)$ and radius $\\sqrt{25} = 5$.

> **Common Trap:** In $(x - h)^2 + (y - k)^2 = r^2$, the center is $(h, k)$. If the equation is $(x + 1)^2 + (y - 4)^2 = 9$, the center is $(-1, 4)$, **not** $(1, 4)$. Remember: $(x + 1) = (x - (-1))$, so $h = -1$. Students frequently get the sign of the center wrong.

### General Form

Sometimes the equation is given in expanded form:

$$x^2 + y^2 + Dx + Ey + F = 0$$

To find the center and radius, **complete the square** for both $x$ and $y$.

**Example:** $x^2 + y^2 - 6x + 4y - 12 = 0$.

Group and complete the square:

$$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$$
$$(x - 3)^2 + (y + 2)^2 = 25$$

Center: $(3, -2)$, radius: 5.

**Example:** Find the center and radius of the circle $x^2 + y^2 + 8x - 2y - 8 = 0$.

**Solution:**

Group by variable:

$$(x^2 + 8x) + (y^2 - 2y) = 8$$

Complete the square for $x$: half of 8 is 4, $4^2 = 16$.

Complete the square for $y$: half of $-2$ is $-1$, $(-1)^2 = 1$.

$$(x^2 + 8x + 16) + (y^2 - 2y + 1) = 8 + 16 + 1$$

$$(x + 4)^2 + (y - 1)^2 = 25$$

Center: $(-4, 1)$, radius: 5.

> **Quick Method:** For the general form $x^2 + y^2 + Dx + Ey + F = 0$, the center is $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$ and the radius is $\\sqrt{\\frac{D^2}{4} + \\frac{E^2}{4} - F}$. This saves the completing-the-square steps if you memorize it.

**GMAT note:** The GMAT Focus edition rarely tests the equation of a circle directly, but it may appear in Data Sufficiency or as part of a problem involving distance from a point to the origin.

---

## 9. Worked Examples

### Example 1: Distance and Pythagorean Triples

**Problem:** What is the perimeter of the triangle with vertices $A(0, 0)$, $B(3, 4)$, and $C(3, 0)$?

**Solution:**

- $AC$: from $(0,0)$ to $(3,0)$ = 3 (horizontal distance).
- $CB$: from $(3,0)$ to $(3,4)$ = 4 (vertical distance).
- $AB$: from $(0,0)$ to $(3,4)$ = $\\sqrt{9 + 16} = \\sqrt{25} = 5$ (recognize the $3, 4, 5$ triple).

Perimeter $= 3 + 4 + 5 = 12$.

### Example 2: Equation of a Perpendicular Line

**Problem:** Line $L$ passes through $(2, 5)$ and is perpendicular to the line $y = -\\frac{1}{3}x + 4$. What is the equation of line $L$?

**Solution:**

The given line has slope $m_1 = -\\frac{1}{3}$.

The perpendicular slope is $m_2 = -\\frac{1}{m_1} = 3$ (negative reciprocal, noting $-\\frac{1}{-1/3} = 3$).

Using point-slope form with $(2, 5)$:

$$y - 5 = 3(x - 2) \\implies y = 3x - 1$$

### Example 3: Area of a Triangle Formed by Intercepts

**Problem:** The line $2x + 3y = 12$ forms a triangle with the coordinate axes. What is the area of this triangle?

**Solution:**

Find the intercepts:
- $x$-intercept: $2x = 12 \\implies x = 6$. Point: $(6, 0)$.
- $y$-intercept: $3y = 12 \\implies y = 4$. Point: $(0, 4)$.

The triangle has vertices at $(0, 0)$, $(6, 0)$, and $(0, 4)$.

This is a right triangle with legs 6 and 4:

$$\\text{Area} = \\frac{1}{2} \\times 6 \\times 4 = 12$$

### Example 4: Data Sufficiency with Slope

**Problem:** What is the slope of line $L$?

(1) Line $L$ passes through the point $(3, 7)$.

(2) Line $L$ is parallel to the line $4x - 2y = 10$.

**Solution:**

**Statement (1):** A single point does not determine a line. Infinitely many lines pass through $(3, 7)$. **Not sufficient.**

**Statement (2):** Rewrite $4x - 2y = 10$ as $y = 2x - 5$. The slope is 2. Since $L$ is parallel, $L$ also has slope 2. **Sufficient.**

Answer: **(B)** --- Statement (2) alone is sufficient.

### Example 5: Line Through Two Intercepts

**Problem:** A line passes through $(4, 0)$ and $(0, -3)$. What is the equation of this line, and at what point does it intersect the line $y = x$?

**Solution:**

Step 1: Find the slope.

$$m = \\frac{-3 - 0}{0 - 4} = \\frac{-3}{-4} = \\frac{3}{4}$$

Step 2: Use the $y$-intercept (which is $-3$).

$$y = \\frac{3}{4}x - 3$$

Step 3: Find the intersection with $y = x$.

Set $x = \\frac{3}{4}x - 3$:

$$x - \\frac{3}{4}x = -3$$

$$\\frac{1}{4}x = -3$$

$$x = -12$$

So $y = -12$.

The lines intersect at $(-12, -12)$.

**Verification:** $y = \\frac{3}{4}(-12) - 3 = -9 - 3 = -12$. Correct.

### Example 6: Reflection Across an Axis

**Problem:** Point $P$ has coordinates $(5, -3)$. What are the coordinates of $P$ after it is reflected across the $x$-axis? Across the $y$-axis? Across the origin?

**Solution:**

- **Reflected across the $x$-axis:** Negate the $y$-coordinate: $(5, 3)$.
- **Reflected across the $y$-axis:** Negate the $x$-coordinate: $(-5, -3)$.
- **Reflected across the origin:** Negate both coordinates: $(-5, 3)$.

> **Quick Method:** Reflection rules to memorize:
> - Across $x$-axis: $(x, y) \\rightarrow (x, -y)$
> - Across $y$-axis: $(x, y) \\rightarrow (-x, y)$
> - Across origin: $(x, y) \\rightarrow (-x, -y)$
> - Across line $y = x$: $(x, y) \\rightarrow (y, x)$

### Example 7: Distance Between Parallel Lines

**Problem:** What is the shortest distance between the parallel lines $y = 2x + 3$ and $y = 2x - 7$?

**Solution:**

For two parallel lines $y = mx + b_1$ and $y = mx + b_2$, the perpendicular distance between them is:

$$d = \\frac{|b_1 - b_2|}{\\sqrt{1 + m^2}}$$

$$d = \\frac{|3 - (-7)|}{\\sqrt{1 + 4}} = \\frac{10}{\\sqrt{5}} = \\frac{10\\sqrt{5}}{5} = 2\\sqrt{5}$$

> **Common Trap:** The distance between parallel lines is NOT simply $|b_1 - b_2|$. That only works when the lines are horizontal ($m = 0$). For non-horizontal parallel lines, you must divide by $\\sqrt{1 + m^2}$. Using $|3 - (-7)| = 10$ as the answer would be incorrect.

---

## 10. Key Formulas

| Formula | Description |
|---|---|
| $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ | Distance between two points |
| $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$ | Midpoint |
| $m = \\frac{y_2 - y_1}{x_2 - x_1}$ | Slope |
| $y = mx + b$ | Slope-intercept form |
| $y - y_1 = m(x - x_1)$ | Point-slope form |
| Parallel: $m_1 = m_2$ | Same slope |
| Perpendicular: $m_1 \\cdot m_2 = -1$ | Negative reciprocal slopes |
| $(x - h)^2 + (y - k)^2 = r^2$ | Circle with center $(h, k)$, radius $r$ |
| $\\text{Area} = \\frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$ | Shoelace formula |

---

## 11. GMAT Tips for Coordinate Geometry

**1. Sketch a quick diagram.** Even a rough sketch helps you visualize the problem and avoid sign errors. Plot the given points, draw the lines, and mark what you need to find.

**2. Memorize Pythagorean triples.** The GMAT frequently uses $3, 4, 5$ and $5, 12, 13$ in distance problems. Recognizing them instantly saves time over computing square roots.

**3. Use intercepts to sketch lines quickly.** Finding where a line crosses the axes gives you two points, which is enough to draw the line accurately.

**4. For Data Sufficiency, remember what defines a line.** A line is uniquely determined by:
   - Two distinct points, OR
   - One point and a slope, OR
   - A slope and a $y$-intercept.

If you have less information than this, the line is not determined and the statement is likely insufficient.

**5. Slope of zero vs. undefined slope.** A horizontal line has slope $0$; a vertical line has an undefined slope. Do not confuse them. If $x_1 = x_2$, the slope formula produces division by zero---the line is vertical.

**6. Be careful with negative signs in the distance and midpoint formulas.** Subtracting a negative number is a common source of errors.

**7. For area problems, look for right angles.** If one side of a triangle or quadrilateral is horizontal or vertical, the area calculation simplifies dramatically.

**8. Parallel and perpendicular lines are tested often in Data Sufficiency.** A common question: "Is line $L$ perpendicular to line $M$?" You need both slopes to answer definitively.

> **Common Trap:** On DS, "Line $L$ has a positive slope and Line $M$ has a negative slope" does NOT mean they are perpendicular. For perpendicularity, you need $m_1 \\times m_2 = -1$ exactly. A positive slope and a negative slope could have a product of $-2$, $-0.5$, or any other negative number. Do not assume perpendicularity from sign information alone.
`;
