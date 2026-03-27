export const content = `
# Circles, Polygons & Coordinate Geometry

This chapter covers three essential GRE geometry topics: circles (arcs, sectors, inscribed angles), polygons (quadrilaterals and regular polygons), and coordinate geometry (slopes, distances, and equations of lines). Together, these account for a large share of GRE geometry questions. Know the formulas cold, and most problems become plug-and-solve.

---

## Circle Fundamentals

A circle is defined by its center and radius $r$. The **diameter** is $d = 2r$.

### Area and Circumference

$$A = \\pi r^2$$

$$C = 2\\pi r = \\pi d$$

### Arc Length

An **arc** is a portion of the circumference. If the central angle is $\\theta$ degrees:

$$\\text{Arc length} = \\frac{\\theta}{360} \\times 2\\pi r$$

### Sector Area

A **sector** is a "pie slice" of the circle. If the central angle is $\\theta$ degrees:

$$\\text{Sector area} = \\frac{\\theta}{360} \\times \\pi r^2$$

> **Strategy:** The fraction $\\frac{\\theta}{360}$ is the "fraction of the circle" and applies to both arc length and sector area. Once you find this fraction, multiply it by the full circumference or full area.

### Worked Example

**Problem:** A circle has radius 6. What is the area of a sector with a central angle of $120°$?

**Solution:**

$$\\text{Sector area} = \\frac{120}{360} \\times \\pi(6)^2 = \\frac{1}{3} \\times 36\\pi = \\textbf{12}\\pi$$

---

## Inscribed Angle Theorem

An **inscribed angle** is formed by two chords that meet at a point on the circle. The key relationship:

$$\\text{Inscribed angle} = \\frac{1}{2} \\times \\text{Central angle (same arc)}$$

**Important consequences:**

- An inscribed angle that intercepts a **semicircle** (a diameter) is always $90°$.
- Inscribed angles that intercept the **same arc** are equal.

### Worked Example

**Problem:** In a circle, a central angle measures $100°$. What is the measure of an inscribed angle that intercepts the same arc?

**Solution:**

$$\\text{Inscribed angle} = \\frac{100°}{2} = \\textbf{50°}$$

> **Common Trap:** Make sure you distinguish central angles from inscribed angles. A central angle has its vertex at the center; an inscribed angle has its vertex on the circle. An inscribed angle is always half the central angle for the same arc.

---

## Tangent Lines

A tangent to a circle is **perpendicular** to the radius at the point of tangency. This creates a right angle that often unlocks Pythagorean theorem applications.

Two tangent segments drawn from the same external point are **equal in length**.

---

## Quadrilaterals

### Parallelogram
- Opposite sides parallel and equal
- Opposite angles equal
- Diagonals bisect each other
- Area $= b \\times h$ (base times perpendicular height)

### Rectangle
- All angles $= 90°$
- Diagonals equal in length
- Area $= l \\times w$
- Diagonal $= \\sqrt{l^2 + w^2}$

### Rhombus
- All sides equal
- Diagonals bisect each other at right angles
- Area $= \\frac{1}{2} d_1 \\times d_2$ (where $d_1, d_2$ are the diagonals)

### Square
- All sides equal, all angles $= 90°$
- Diagonal $= s\\sqrt{2}$
- Area $= s^2$

### Trapezoid
- Exactly one pair of parallel sides (called bases)
- Area $= \\frac{1}{2}(b_1 + b_2) \\times h$

> **Strategy:** On the GRE, if a quadrilateral problem seems complex, try dividing it into triangles. Any quadrilateral can be split into two triangles by drawing a diagonal.

---

## Regular Polygons

A **regular polygon** has all sides equal and all angles equal.

### Interior Angle Sum

For a polygon with $n$ sides:

$$\\text{Sum of interior angles} = (n - 2) \\times 180°$$

### Each Interior Angle (Regular Polygon)

$$\\text{Each interior angle} = \\frac{(n - 2) \\times 180°}{n}$$

### Each Exterior Angle (Regular Polygon)

$$\\text{Each exterior angle} = \\frac{360°}{n}$$

**Quick reference:**

| Polygon | Sides | Interior Angle |
|---|---|---|
| Equilateral Triangle | 3 | $60°$ |
| Square | 4 | $90°$ |
| Regular Pentagon | 5 | $108°$ |
| Regular Hexagon | 6 | $120°$ |
| Regular Octagon | 8 | $135°$ |

> **Common Trap:** Exterior angles of any convex polygon always sum to $360°$, regardless of the number of sides. Do not confuse this with the interior angle sum.

---

## Coordinate Geometry

### Distance Formula

The distance between two points $(x_1, y_1)$ and $(x_2, y_2)$:

$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

This is simply the Pythagorean theorem applied to the horizontal and vertical distances.

### Midpoint Formula

The midpoint of the segment connecting $(x_1, y_1)$ and $(x_2, y_2)$:

$$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$

### Slope

$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$$

**Slope interpretations:**
- Positive slope: line rises left to right
- Negative slope: line falls left to right
- Zero slope: horizontal line
- Undefined slope: vertical line

### Equation of a Line

**Slope-intercept form:** $y = mx + b$ (where $b$ is the $y$-intercept)

**Point-slope form:** $y - y_1 = m(x - x_1)$

### Worked Example

**Problem:** Find the equation of the line passing through $(2, 5)$ and $(6, 13)$.

**Solution:**

$$m = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$$

Using point-slope form with $(2, 5)$:

$$y - 5 = 2(x - 2)$$
$$y = 2x + 1$$

The equation is $\\textbf{y = 2x + 1}$.

---

## Parallel and Perpendicular Lines

- **Parallel lines** have the **same slope**: $m_1 = m_2$
- **Perpendicular lines** have slopes that are **negative reciprocals**: $m_1 \\times m_2 = -1$

If one line has slope $\\frac{3}{4}$, a perpendicular line has slope $-\\frac{4}{3}$.

### Worked Example

**Problem:** Line $l$ passes through $(1, 3)$ and $(4, 9)$. What is the slope of any line perpendicular to $l$?

**Solution:**

$$m_l = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$$

$$m_{\\perp} = -\\frac{1}{2}$$

The perpendicular slope is $\\textbf{-\\frac{1}{2}}$.

> **Common Trap:** A horizontal line (slope $= 0$) is perpendicular to a vertical line (undefined slope). The negative reciprocal rule does not apply to these special cases since you cannot take the reciprocal of 0 in the usual sense.

---

## Coordinate Geometry and Circles

The equation of a circle centered at $(h, k)$ with radius $r$ is:

$$(x - h)^2 + (y - k)^2 = r^2$$

A circle centered at the origin: $x^2 + y^2 = r^2$.

### Worked Example

**Problem:** A circle has the equation $(x - 3)^2 + (y + 2)^2 = 25$. What are the center and radius?

**Solution:**

Center $= (3, -2)$, radius $= \\sqrt{25} = \\textbf{5}$.

Note: the $y + 2$ means $y - (-2)$, so $k = -2$.

---

## Transformations (Quick Reference)

| Transformation | Effect on $(x, y)$ |
|---|---|
| Reflect over $x$-axis | $(x, -y)$ |
| Reflect over $y$-axis | $(-x, y)$ |
| Reflect over $y = x$ | $(y, x)$ |
| Reflect over origin | $(-x, -y)$ |
| Translate by $(a, b)$ | $(x + a, y + b)$ |

---

## GRE Question Type Tips

**Quantitative Comparison (QC):** Coordinate geometry QC problems may ask you to compare a slope, distance, or intercept to a given value. Compute the exact value rather than estimating.

**Problem Solving (PS):** Multi-concept problems may combine circles with triangles (e.g., a right triangle inscribed in a circle where the hypotenuse is the diameter) or coordinate geometry with area (using the distance formula to find side lengths, then computing area).

**Numeric Entry (NE):** Circle problems with $\\pi$ may ask for an exact numerical value (e.g., "the area is $12\\pi$; enter $12$") or a decimal approximation. Read the instructions carefully.

---

## Key Formulas

$$\\boxed{A_{\\text{circle}} = \\pi r^2, \\quad C = 2\\pi r}$$

$$\\boxed{\\text{Arc length} = \\frac{\\theta}{360} \\times 2\\pi r}$$

$$\\boxed{\\text{Sector area} = \\frac{\\theta}{360} \\times \\pi r^2}$$

$$\\boxed{\\text{Interior angle sum} = (n-2) \\times 180°}$$

$$\\boxed{d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}}$$

$$\\boxed{m = \\frac{y_2-y_1}{x_2-x_1}, \\quad m_1 \\cdot m_2 = -1 \\text{ (perpendicular)}}$$
`;
