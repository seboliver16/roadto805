export const content = `
# Graphics Interpretation

Graphics Interpretation (GI) questions on the GMAT Data Insights section test your ability to read, interpret, and analyze data presented in graphical form. You will encounter a variety of chart types --- from standard bar charts and line graphs to more complex scatter plots, bubble charts, and Venn diagrams. The format uses **fill-in-the-blank statements with dropdown menus**, making it distinct from standard multiple-choice questions.

---

## The GI Format

Each GI question presents:

1. **A graph, chart, or diagram** on the left side of the screen.
2. **One or two fill-in-the-blank statements** on the right side, each containing a **dropdown menu** with options.

You must select the correct option from each dropdown to complete the statement accurately based on the data in the graph. Each statement is independent --- your answer to one does not affect the other.

**Example statement format:**
"The median sales value for Region B is closest to **[dropdown: \\$150,000 / \\$175,000 / \\$200,000 / \\$225,000]**."

---

## Types of Graphs

### Bar Charts

Bar charts use rectangular bars to compare quantities across categories. They can be:

- **Vertical (column chart):** Categories on the x-axis, values on the y-axis. Most common.
- **Horizontal:** Categories on the y-axis, values on the x-axis. Used when category names are long.
- **Stacked:** Each bar is divided into segments showing the composition of the total. Useful for part-to-whole comparisons.
- **Grouped (clustered):** Multiple bars per category, showing comparisons within each category.

Here is an example of a vertical bar chart showing quarterly sales:

\`\`\`chart
{"type":"bar","title":"Quarterly Sales ($K)","data":[{"quarter":"Q1","sales":85},{"quarter":"Q2","sales":120},{"quarter":"Q3","sales":95},{"quarter":"Q4","sales":145}],"series":[{"name":"Sales ($K)","dataKey":"sales"}],"xAxisKey":"quarter","yAxis":{"label":"Sales ($K)"}}
\`\`\`

And a grouped bar chart comparing two product lines:

\`\`\`chart
{"type":"grouped-bar","title":"Revenue by Product Line ($K)","data":[{"quarter":"Q1","productA":50,"productB":35},{"quarter":"Q2","productA":65,"productB":55},{"quarter":"Q3","productA":55,"productB":40},{"quarter":"Q4","productA":80,"productB":65}],"series":[{"name":"Product A","dataKey":"productA"},{"name":"Product B","dataKey":"productB"}],"xAxisKey":"quarter","yAxis":{"label":"Revenue ($K)"}}
\`\`\`

**What to watch for:** The scale of the y-axis. Does it start at zero? If not, the visual difference between bars may be misleading. Always read the actual numbers, not just the visual heights.

### Line Graphs

Line graphs show data points connected by lines, typically displaying **change over time** (trends).

- The x-axis usually represents time (months, years, quarters).
- The y-axis represents the measured value.
- Multiple lines on the same graph compare trends across groups.

\`\`\`chart
{"type":"multi-line","title":"Monthly Revenue Trends ($M)","data":[{"month":"Jan","online":1.2,"retail":2.1},{"month":"Feb","online":1.5,"retail":2.0},{"month":"Mar","online":1.8,"retail":1.9},{"month":"Apr","online":2.2,"retail":1.8},{"month":"May","online":2.6,"retail":1.7},{"month":"Jun","online":3.0,"retail":1.6}],"series":[{"name":"Online","dataKey":"online"},{"name":"Retail","dataKey":"retail"}],"xAxisKey":"month","yAxis":{"label":"Revenue ($M)"}}
\`\`\`

Notice how the two lines cross between March and April --- this is an **intersection point** where online revenue overtakes retail revenue.

**What to watch for:**
- **Slope = rate of change.** A steeper line means faster growth or decline.
- **Intersections** where two lines cross indicate the moment when the two groups have equal values.
- **Inflection points** where the line changes direction (from increasing to decreasing, or vice versa).

### Scatter Plots

Scatter plots display individual data points on a two-dimensional plane, showing the **relationship between two variables**.

- Each dot represents one data point (one observation).
- The x-axis represents one variable; the y-axis represents the other.
- A **trend line** (line of best fit) may be drawn through the data to show the overall direction of the relationship.

\`\`\`chart
{"type":"scatter","title":"Study Hours vs. Exam Score","data":[{"hours":2,"score":52},{"hours":3,"score":58},{"hours":4,"score":63},{"hours":5,"score":70},{"hours":5,"score":66},{"hours":6,"score":74},{"hours":7,"score":79},{"hours":8,"score":85},{"hours":9,"score":88},{"hours":10,"score":93}],"series":[{"name":"Students","dataKey":"score"}],"xAxisKey":"hours","xAxis":{"label":"Study Hours"},"yAxis":{"label":"Exam Score"}}
\`\`\`

This scatter plot shows a **strong positive correlation** --- as study hours increase, exam scores tend to increase as well.

**Key concepts:**
- **Positive correlation:** As $x$ increases, $y$ tends to increase. Dots trend upward from left to right.
- **Negative correlation:** As $x$ increases, $y$ tends to decrease. Dots trend downward from left to right.
- **No correlation:** Dots are scattered randomly with no discernible pattern.
- **Outliers:** Data points that fall far from the general pattern. The GMAT may ask you to identify them or consider their effect on averages and correlations.

### Pie Charts

Pie charts show **parts of a whole** as slices of a circle. Each slice's angle is proportional to its share of the total.

- The entire circle represents 100% of the data.
- Each slice is typically labeled with a percentage or value.

\`\`\`chart
{"type":"pie","title":"Company Revenue by Region","data":[{"region":"North America","share":40},{"region":"Europe","share":28},{"region":"Asia-Pacific","share":20},{"region":"Other","share":12}],"series":[{"name":"Share","dataKey":"share"}],"xAxisKey":"region"}
\`\`\`

**What to watch for:** Pie charts make it easy to compare proportions visually, but exact values require calculation. If a slice represents 25% and the total is \\$400,000, the slice's value is $0.25 \\times 400{,}000 = \\$100{,}000$.

### Bubble Charts

Bubble charts are an extension of scatter plots where each data point is represented by a **circle (bubble)** rather than a dot. The **size of the bubble** encodes a third variable.

- x-axis: Variable 1
- y-axis: Variable 2
- Bubble size: Variable 3

\`\`\`chart
{"type":"bubble","title":"Countries: GDP Growth vs. Unemployment","data":[{"name":"US","growth":2.5,"unemployment":3.8,"population":330},{"name":"UK","growth":1.8,"unemployment":4.2,"population":67},{"name":"DE","growth":1.2,"unemployment":3.1,"population":83},{"name":"JP","growth":0.9,"unemployment":2.6,"population":125}],"series":[{"name":"Country","dataKey":"unemployment"}],"xAxisKey":"growth","xAxis":{"label":"GDP Growth (%)"},"yAxis":{"label":"Unemployment (%)"},"sizeKey":"population","sizeLabel":"Population (M)"}
\`\`\`

**What to watch for:** Bubble size represents area, not diameter. A bubble that looks twice as wide actually represents about four times the value (since area $= \\pi r^2$). Always refer to the legend or scale for bubble sizes.

### Venn Diagrams

Venn diagrams use overlapping circles to show **set relationships**: how many elements belong to one group, another group, both, or neither.

- **Each circle** represents a set.
- **The overlap** (intersection) represents elements in both sets.
- **Regions outside all circles** (but inside the rectangle) represent elements in neither set.

**Key formula for two sets:**

$$|A \\cup B| = |A| + |B| - |A \\cap B|$$

where $|A|$ is the number of elements in set A, $|B|$ in set B, and $|A \\cap B|$ in the overlap.

For three sets:

$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$

---

## Reading Axes and Legends Carefully

This is the **single most important skill** for GI questions. Many errors come from misreading the graph, not from faulty reasoning.

### Axis Checklist

Before answering any question, verify:

1. **What does each axis represent?** Read the axis labels.
2. **What are the units?** Dollars? Thousands of dollars? Percentages? Millions of units?
3. **What is the scale?** Are gridlines spaced at intervals of 10, 50, 100, or some other value?
4. **Does the axis start at zero?** A "broken axis" (starting at a value other than zero) can exaggerate visual differences.
5. **Is the scale linear or logarithmic?** A logarithmic scale compresses large values, making exponential growth look linear.

### Legend Checklist

1. **What does each color, line style, or symbol represent?**
2. **Are there multiple data series?** Make sure you are reading the correct one.
3. **Are there any footnotes or annotations?** These often contain critical information.

---

## Estimating Values from Graphs

GI questions often require you to **estimate** a value from the graph rather than read it exactly. Effective estimation techniques:

- **Use gridlines as reference points.** If the gridlines are at 0, 50, 100, 150, and a data point appears halfway between 100 and 150, estimate it as approximately 125.
- **Compare to neighboring data points** with known values to calibrate your estimate.
- **Round to the nearest option.** Since the dropdown provides options, you do not need a perfect estimate --- just enough precision to identify the closest option.
- **For stacked bars,** estimate the height of a specific segment by subtracting the bottom boundary from the top boundary of that segment, not by reading the total bar height.

---

## Understanding Trends, Correlations, and Outliers

### Trends

A **trend** describes the general direction of data over time or across categories:

- **Upward trend (increasing):** Values generally rise from left to right.
- **Downward trend (decreasing):** Values generally fall.
- **Flat trend (stable):** Values remain roughly constant.
- **Cyclical trend:** Values rise and fall in a repeating pattern.

Questions may ask: "Over the period shown, the trend in sales is most accurately described as **[increasing / decreasing / stable / fluctuating]**."

### Correlations

A **correlation** describes the relationship between two variables in a scatter plot:

- **Strong positive correlation:** Points cluster tightly along an upward-sloping line. As one variable increases, the other reliably increases too.
- **Weak positive correlation:** There is a general upward trend, but points are more spread out.
- **Strong negative correlation:** Points cluster tightly along a downward-sloping line.
- **No correlation:** No discernible pattern.

**Critical distinction:** Correlation does NOT imply causation. A GI question might ask whether a correlation implies that one variable *causes* changes in the other. The answer is almost always **no** --- correlation only shows that two variables move together, not that one drives the other.

### Outliers

An **outlier** is a data point that deviates significantly from the overall pattern. Outliers can:

- **Skew the mean** (pull the average toward the outlier's value)
- **Have minimal effect on the median** (the median is resistant to outliers)
- **Weaken a correlation** if they fall far from the trend line
- **Strengthen a perceived correlation** if they happen to align with the trend (but this is misleading)

---

## Percent Calculations from Graph Data

Many GI questions require percentage calculations based on values read from the graph. The key formulas:

**Percentage of a total:**
$$\\text{Percentage} = \\frac{\\text{Part}}{\\text{Total}} \\times 100$$

**Percent change:**
$$\\text{Percent change} = \\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100$$

**Percent difference:**
$$\\text{Percent difference} = \\frac{|A - B|}{\\text{Reference value}} \\times 100$$

**Example:** A bar chart shows revenue of \\$300,000 in 2022 and \\$360,000 in 2023. The percent increase is:
$$\\frac{360{,}000 - 300{,}000}{300{,}000} \\times 100 = \\frac{60{,}000}{300{,}000} \\times 100 = 20\\%$$

---

## Example Descriptions with Analysis

### Example 1: Line Graph --- Revenue Trends

A line graph shows quarterly revenue for two products over eight quarters:

\`\`\`chart
{"type":"multi-line","title":"Quarterly Revenue: Product X vs. Product Y ($M)","data":[{"quarter":"Q1 '22","productX":2.0,"productY":3.0},{"quarter":"Q2 '22","productX":2.2,"productY":2.9},{"quarter":"Q3 '22","productX":2.4,"productY":2.8},{"quarter":"Q4 '22","productX":2.6,"productY":2.7},{"quarter":"Q1 '23","productX":2.8,"productY":2.7},{"quarter":"Q2 '23","productX":3.0,"productY":3.0},{"quarter":"Q3 '23","productX":3.2,"productY":2.6},{"quarter":"Q4 '23","productX":3.5,"productY":2.5}],"series":[{"name":"Product X","dataKey":"productX"},{"name":"Product Y","dataKey":"productY"}],"xAxisKey":"quarter","yAxis":{"label":"Revenue ($M)"}}
\`\`\`

**Statement:** "Product X's revenue first exceeded Product Y's revenue in **[Q1 2023 / Q2 2023 / Q3 2023 / Q4 2023]**."

**Analysis:** The two lines intersect in Q2 2023, meaning they were equal at that point. Before Q2 2023, Product Y was higher; after Q2 2023, Product X was higher. So Product X first exceeded Product Y in **Q3 2023** (the first full quarter after the intersection).

**Trap:** Students might select Q2 2023 because that is when the lines cross. But "exceeded" means "was greater than," not "became equal to." If the lines cross mid-quarter, the first quarter where X > Y throughout is the following quarter.

### Example 2: Scatter Plot --- Correlation

A scatter plot shows advertising spending vs. monthly sales for several stores, with one clear outlier (Store #14):

\`\`\`chart
{"type":"scatter","title":"Ad Spending vs. Monthly Sales ($K)","data":[{"adSpend":10,"sales":25},{"adSpend":15,"sales":35},{"adSpend":20,"sales":42},{"adSpend":22,"sales":48},{"adSpend":25,"sales":52},{"adSpend":28,"sales":55},{"adSpend":30,"sales":62},{"adSpend":32,"sales":60},{"adSpend":35,"sales":68},{"adSpend":38,"sales":72},{"adSpend":40,"sales":70},{"adSpend":42,"sales":75},{"adSpend":45,"sales":78},{"adSpend":48,"sales":76},{"adSpend":50,"sales":30}],"series":[{"name":"Stores","dataKey":"sales"}],"xAxisKey":"adSpend","xAxis":{"label":"Ad Spending ($K)"},"yAxis":{"label":"Monthly Sales ($K)"}}
\`\`\`

Notice the outlier at the far right --- a store that spent \\$50K on advertising but only achieved \\$30K in sales, far below the upward trend.

**Statement 1:** "The relationship between advertising spending and monthly sales is best described as a **[strong positive / weak positive / strong negative / no]** correlation."

**Analysis:** Most points follow an upward trend, so the correlation is positive. The clustering is fairly tight (with one exception), suggesting a **strong positive** correlation.

**Statement 2:** "If Store #14 were removed from the data set, the correlation coefficient would most likely **[increase / decrease / remain the same]**."

**Analysis:** Store #14 is an outlier that falls far below the trend line. Removing it would make the remaining data points cluster more tightly around the trend, which would **increase** the correlation coefficient.

### Example 3: Stacked Bar Chart --- Composition

A stacked bar chart shows employee headcount by department over time:

\`\`\`chart
{"type":"stacked-bar","title":"Employee Headcount by Department","data":[{"year":"2019","engineering":80,"sales":70,"operations":50},{"year":"2020","engineering":95,"sales":72,"operations":63},{"year":"2021","engineering":115,"sales":68,"operations":82},{"year":"2022","engineering":140,"sales":70,"operations":100},{"year":"2023","engineering":160,"sales":70,"operations":120}],"series":[{"name":"Engineering","dataKey":"engineering"},{"name":"Sales","dataKey":"sales"},{"name":"Operations","dataKey":"operations"}],"xAxisKey":"year","yAxis":{"label":"Employees"}}
\`\`\`

**Statement:** "From 2019 to 2023, the department whose share of total employees decreased is **[Engineering / Sales / Operations]**."

**Analysis:** Calculate each department's percentage of the total:

| Year | Engineering | Sales | Operations | Total |
|------|-----------|-------|-----------|-------|
| 2019 | 80/200 = 40% | 70/200 = 35% | 50/200 = 25% | 100% |
| 2023 | 160/350 $\\approx$ 46% | 70/350 = 20% | 120/350 $\\approx$ 34% | 100% |

Engineering's share increased (40% to 46%). Sales' share decreased (35% to 20%). Operations' share increased (25% to 34%). The answer is **Sales**.

**Trap:** Students might think Operations decreased because its segment appears smaller relative to the growing bar. But its absolute number and percentage both increased. Only Sales lost share.

### Example 4: Histogram --- Distribution Analysis

A histogram shows the distribution of employee commute times:

\`\`\`chart
{"type":"histogram","title":"Commute Time Distribution (200 employees)","data":[{"bin":"0-10","count":12},{"bin":"10-20","count":28},{"bin":"20-30","count":55},{"bin":"30-40","count":48},{"bin":"40-50","count":35},{"bin":"50-60","count":22}],"series":[{"name":"Employees","dataKey":"count"}],"xAxisKey":"bin","xAxis":{"label":"Commute Time (min)"},"yAxis":{"label":"Employees"}}
\`\`\`

**Statement:** "The percentage of employees with a commute time of 30 minutes or more is closest to **[40% / 45% / 50% / 53%]**."

**Analysis:** Employees with commute ≥ 30 min: 48 + 35 + 22 = 105. Total = 200. Percentage = 105/200 = **52.5%**, closest to **53%**.

**Key technique:** For histograms, sum the frequencies of all bins that meet the criterion, then divide by total count. Pay close attention to whether the boundary value is included (≥ 30 includes the 30-40 bin).

### Example 5: Venn Diagram --- Set Relationships

**Graph description:** A Venn diagram shows students enrolled in three elective courses: Art, Music, and Drama. Art circle: 45 students. Music circle: 38 students. Drama circle: 30 students. Art-Music overlap: 12. Art-Drama overlap: 8. Music-Drama overlap: 10. All three overlap: 5. Total students in the school: 120.

**Statement:** "The number of students not enrolled in any of the three courses is **[dropdown: 22 / 27 / 32 / 37]**."

**Analysis:** Using inclusion-exclusion:

$$|A \\cup M \\cup D| = 45 + 38 + 30 - 12 - 8 - 10 + 5 = 88$$

Students not enrolled in any course: $120 - 88 = 32$.

**Answer:** **32**.

---

## Common GI Traps

1. **Reading the wrong axis.** On a scatter plot, confusing which variable is on the x-axis vs. the y-axis leads to inverted conclusions.

2. **Ignoring units.** If the y-axis is labeled "Revenue (in thousands)" and a bar reaches 250, the actual revenue is \\$250,000, not \\$250. This matters enormously for percentage calculations.

3. **Confusing correlation with causation.** The GMAT will test this distinction. A strong correlation between two variables does NOT mean one causes the other. There may be confounding factors, reverse causation, or coincidence.

4. **Misreading stacked charts.** In a stacked bar chart, the height of a segment is the difference between its top and bottom edges --- not the value at its top edge. Reading the top edge gives you the cumulative total up to that segment, not the segment's individual value.

5. **Overlooking the trend line vs. individual points.** A scatter plot may show an overall positive trend, but individual data points can deviate. Questions about "the trend" refer to the overall pattern; questions about specific data points require reading individual dots.

6. **Assuming linear interpolation is exact.** When a line graph connects two quarterly data points, the line between them is an approximation. The actual value at a point between quarters might not fall exactly on the line.

7. **Ignoring the scale break.** If the y-axis has a break (a zigzag symbol near the bottom indicating it does not start at zero), the visual difference between bars or points is exaggerated. Always use the numerical values.

---

## GMAT Tips

1. **Spend 15--20 seconds studying the graph before reading the statements.** Identify the type of graph, read all axis labels and legends, and note the scale. This upfront investment prevents misreading errors.

2. **Use your scratch paper for calculations.** Do not try to do percent changes or set calculations in your head. Write down the numbers you read from the graph and compute systematically.

3. **When estimating, bracket the value.** If a bar appears to be between 40 and 50, note that range. Then check which dropdown options fall in that range. You usually only need to distinguish between options that are 10--25 units apart.

4. **For Venn diagram questions, draw the diagram on your scratch paper** and fill in each region systematically. Start with the innermost overlap (all sets) and work outward.

5. **Read each statement independently.** Your answer to one dropdown does not constrain your answer to the other. Treat each as a separate mini-question.

6. **Watch for the word "approximately."** When a statement says "approximately," you are expected to estimate, and the exact value may not be one of the options. Choose the closest one.

7. **GI questions are typically faster than other DI question types.** Budget about 1.5 to 2 minutes per question. If a calculation is taking too long, you may be overcomplicating it --- re-read the question and graph labels.

8. **In scatter plots, if asked about a correlation, look at the overall cloud of points,** not individual outliers. The correlation describes the general tendency of the data, and one or two outliers do not define the trend.

9. **For pie charts, remember that the total must equal 100%.** If you are given percentages for all but one slice, the missing slice is $100\\%$ minus the sum of the given slices. This is a common fill-in-the-blank question.
`;
