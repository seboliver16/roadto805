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

---

## 3. Midpoint Formula

The midpoint of the segment connecting $(x_1, y_1)$ and $(x_2, y_2)$ is:

$$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$

Simply average the $x$-coordinates and average the $y$-coordinates.

**Example:** Midpoint of $(2, 8)$ and $(6, -4)$:

$$M = \\left(\\frac{2 + 6}{2}, \\frac{8 + (-4)}{2}\\right) = (4, 2)$$

### Reverse Application

If you know the midpoint $M$ and one endpoint, you can find the other endpoint. If $A = (1, 5)$ and $M = (4, 3)$, then endpoint $B = (2 \\times 4 - 1, 2 \\times 3 - 5) = (7, 1)$.

---

## 4. Slope

The **slope** of a line measures its steepness and direction:

$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$$

### Interpreting Slope

- **Positive slope ($m > 0$):** Line rises from left to right.
- **Negative slope ($m < 0$):** Line falls from left to right.
- **Zero slope ($m = 0$):** Horizontal line.
- **Undefined slope:** Vertical line (run $= 0$).

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

### Rectangle

If a rectangle has sides parallel to the axes, the area is simply $\\text{width} \\times \\text{height}$, where width and height are the differences in $x$-coordinates and $y$-coordinates, respectively.

### Trapezoid

$$\\text{Area} = \\frac{1}{2}(b_1 + b_2) \\times h$$

where $b_1$ and $b_2$ are the lengths of the parallel sides and $h$ is the perpendicular distance between them.

---

## 8. Equation of a Circle

The standard equation of a circle with center $(h, k)$ and radius $r$ is:

$$(x - h)^2 + (y - k)^2 = r^2$$

For a circle centered at the origin: $x^2 + y^2 = r^2$.

**Example:** The circle $(x - 3)^2 + (y + 2)^2 = 25$ has center $(3, -2)$ and radius $\\sqrt{25} = 5$.

### General Form

Sometimes the equation is given in expanded form:

$$x^2 + y^2 + Dx + Ey + F = 0$$

To find the center and radius, **complete the square** for both $x$ and $y$.

**Example:** $x^2 + y^2 - 6x + 4y - 12 = 0$.

Group and complete the square:

$$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$$
$$(x - 3)^2 + (y + 2)^2 = 25$$

Center: $(3, -2)$, radius: 5.

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
`;
