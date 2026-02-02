"use client";

import { ChartData } from "@/types";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  ZAxis,
} from "recharts";

const COLORS = [
  "#374151",
  "#6b7280",
  "#9ca3af",
  "#4b5563",
  "#d1d5db",
  "#0d0d0d",
];

const PIE_COLORS = [
  "#374151",
  "#6b7280",
  "#9ca3af",
  "#4b5563",
  "#d1d5db",
  "#1f2937",
];

const tooltipStyle = {
  backgroundColor: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  fontSize: 12,
};

interface Props {
  chartData: ChartData;
}

export function ChartRenderer({ chartData }: Props) {
  switch (chartData.type) {
    case "bar":
    case "grouped-bar":
      return <BarChartRenderer chartData={chartData} />;
    case "horizontal-bar":
      return <HorizontalBarRenderer chartData={chartData} />;
    case "stacked-bar":
    case "stacked-bar-100":
      return <StackedBarRenderer chartData={chartData} />;
    case "line":
    case "multi-line":
      return <LineChartRenderer chartData={chartData} />;
    case "dual-axis":
      return <DualAxisRenderer chartData={chartData} />;
    case "pie":
      return <PieChartRenderer chartData={chartData} />;
    case "scatter":
      return <ScatterChartRenderer chartData={chartData} />;
    case "scatter-trend":
      return <ScatterTrendRenderer chartData={chartData} />;
    case "histogram":
      return <HistogramRenderer chartData={chartData} />;
    case "bubble":
      return <BubbleChartRenderer chartData={chartData} />;
    case "box-plot":
      return <BoxPlotRenderer chartData={chartData} />;
    default:
      return null;
  }
}

function BarChartRenderer({ chartData }: Props) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={chartData.data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey={chartData.xAxisKey} tick={{ fontSize: 12 }} stroke="#9ca3af" />
        <YAxis
          tick={{ fontSize: 12 }}
          stroke="#9ca3af"
          label={
            chartData.yAxis?.label
              ? { value: chartData.yAxis.label, angle: -90, position: "insideLeft", style: { fontSize: 11, fill: "#6b7280" }, dx: -5 }
              : undefined
          }
        />
        <Tooltip contentStyle={tooltipStyle} />
        {chartData.series.length > 1 && <Legend wrapperStyle={{ fontSize: 12 }} />}
        {chartData.series.map((s, i) => (
          <Bar
            key={s.dataKey}
            dataKey={s.dataKey}
            name={s.name}
            fill={s.color ?? COLORS[i % COLORS.length]}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

function HorizontalBarRenderer({ chartData }: Props) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={chartData.data} layout="vertical" margin={{ top: 5, right: 20, left: 40, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis type="number" tick={{ fontSize: 12 }} stroke="#9ca3af" />
        <YAxis
          type="category"
          dataKey={chartData.xAxisKey}
          tick={{ fontSize: 12 }}
          stroke="#9ca3af"
          width={60}
        />
        <Tooltip contentStyle={tooltipStyle} />
        {chartData.series.map((s, i) => (
          <Bar
            key={s.dataKey}
            dataKey={s.dataKey}
            name={s.name}
            fill={s.color ?? COLORS[i % COLORS.length]}
            radius={[0, 4, 4, 0]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

function StackedBarRenderer({ chartData }: Props) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={chartData.data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey={chartData.xAxisKey} tick={{ fontSize: 12 }} stroke="#9ca3af" />
        <YAxis
          tick={{ fontSize: 12 }}
          stroke="#9ca3af"
          domain={chartData.yAxis?.domain}
          label={
            chartData.yAxis?.label
              ? { value: chartData.yAxis.label, angle: -90, position: "insideLeft", style: { fontSize: 11, fill: "#6b7280" }, dx: -5 }
              : undefined
          }
        />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        {chartData.series.map((s, i) => (
          <Bar
            key={s.dataKey}
            dataKey={s.dataKey}
            name={s.name}
            stackId="stack"
            fill={s.color ?? COLORS[i % COLORS.length]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

function LineChartRenderer({ chartData }: Props) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={chartData.data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey={chartData.xAxisKey} tick={{ fontSize: 12 }} stroke="#9ca3af" />
        <YAxis
          tick={{ fontSize: 12 }}
          stroke="#9ca3af"
          label={
            chartData.yAxis?.label
              ? { value: chartData.yAxis.label, angle: -90, position: "insideLeft", style: { fontSize: 11, fill: "#6b7280" }, dx: -5 }
              : undefined
          }
        />
        <Tooltip contentStyle={tooltipStyle} />
        {chartData.series.length > 1 && <Legend wrapperStyle={{ fontSize: 12 }} />}
        {chartData.series.map((s, i) => (
          <Line
            key={s.dataKey}
            type="monotone"
            dataKey={s.dataKey}
            name={s.name}
            stroke={s.color ?? COLORS[i % COLORS.length]}
            strokeWidth={2}
            dot={{ r: 4, fill: s.color ?? COLORS[i % COLORS.length] }}
            activeDot={{ r: 6 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

function DualAxisRenderer({ chartData }: Props) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={chartData.data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey={chartData.xAxisKey} tick={{ fontSize: 12 }} stroke="#9ca3af" />
        <YAxis
          yAxisId="left"
          tick={{ fontSize: 12 }}
          stroke="#374151"
          label={
            chartData.yAxis?.label
              ? { value: chartData.yAxis.label, angle: -90, position: "insideLeft", style: { fontSize: 11, fill: "#374151" }, dx: -5 }
              : undefined
          }
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={{ fontSize: 12 }}
          stroke="#9ca3af"
          label={
            chartData.yAxisRight?.label
              ? { value: chartData.yAxisRight.label, angle: 90, position: "insideRight", style: { fontSize: 11, fill: "#9ca3af" }, dx: 5 }
              : undefined
          }
        />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        {chartData.series.map((s, i) => (
          <Line
            key={s.dataKey}
            type="monotone"
            dataKey={s.dataKey}
            name={s.name}
            yAxisId={s.yAxisId ?? "left"}
            stroke={s.color ?? COLORS[i % COLORS.length]}
            strokeWidth={2}
            strokeDasharray={s.yAxisId === "right" ? "5 5" : undefined}
            dot={{ r: 4, fill: s.color ?? COLORS[i % COLORS.length] }}
            activeDot={{ r: 6 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

function PieChartRenderer({ chartData }: Props) {
  const s = chartData.series[0];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={chartData.data}
          dataKey={s.dataKey}
          nameKey={chartData.xAxisKey}
          cx="50%"
          cy="50%"
          outerRadius={90}
          label={({ name, value }) => `${name}: ${value}%`}
          labelLine={{ stroke: "#9ca3af" }}
          strokeWidth={2}
          stroke="#fff"
        >
          {chartData.data.map((_, i) => (
            <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} />
      </PieChart>
    </ResponsiveContainer>
  );
}

function ScatterChartRenderer({ chartData }: Props) {
  const s = chartData.series[0];
  return (
    <ResponsiveContainer width="100%" height={280}>
      <ScatterChart margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis
          dataKey={chartData.xAxisKey}
          type="number"
          name={chartData.xAxis?.label ?? chartData.xAxisKey}
          tick={{ fontSize: 12 }}
          stroke="#9ca3af"
          label={
            chartData.xAxis?.label
              ? { value: chartData.xAxis.label, position: "insideBottom", offset: -2, style: { fontSize: 11, fill: "#6b7280" } }
              : undefined
          }
        />
        <YAxis
          dataKey={s.dataKey}
          type="number"
          name={s.name}
          tick={{ fontSize: 12 }}
          stroke="#9ca3af"
          label={
            chartData.yAxis?.label
              ? { value: chartData.yAxis.label, angle: -90, position: "insideLeft", style: { fontSize: 11, fill: "#6b7280" }, dx: -5 }
              : undefined
          }
        />
        <Tooltip contentStyle={tooltipStyle} cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name={s.name} data={chartData.data} fill="#374151">
          {chartData.data.map((_, i) => (
            <Cell key={i} fill="#374151" />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
}

function ScatterTrendRenderer({ chartData }: Props) {
  const s = chartData.series[0];
  const slope = chartData.trendLineSlope ?? 0;
  const intercept = chartData.trendLineIntercept ?? 0;

  const xVals = chartData.data.map((d) => d[chartData.xAxisKey] as number);
  const xMin = Math.min(...xVals);
  const xMax = Math.max(...xVals) + 4;
  const trendData = [
    { [chartData.xAxisKey]: xMin, trend: slope * xMin + intercept },
    { [chartData.xAxisKey]: xMax, trend: slope * xMax + intercept },
  ];

  return (
    <ResponsiveContainer width="100%" height={280}>
      <ComposedChart margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis
          dataKey={chartData.xAxisKey}
          type="number"
          tick={{ fontSize: 12 }}
          stroke="#9ca3af"
          label={
            chartData.xAxis?.label
              ? { value: chartData.xAxis.label, position: "insideBottom", offset: -2, style: { fontSize: 11, fill: "#6b7280" } }
              : undefined
          }
        />
        <YAxis
          tick={{ fontSize: 12 }}
          stroke="#9ca3af"
          label={
            chartData.yAxis?.label
              ? { value: chartData.yAxis.label, angle: -90, position: "insideLeft", style: { fontSize: 11, fill: "#6b7280" }, dx: -5 }
              : undefined
          }
        />
        <Tooltip contentStyle={tooltipStyle} />
        <Scatter name={s.name} data={chartData.data} fill="#374151" />
        <Line
          data={trendData}
          dataKey="trend"
          type="linear"
          stroke="#9ca3af"
          strokeWidth={2}
          strokeDasharray="6 4"
          dot={false}
          name="Trend Line"
          legendType="line"
        />
        <Legend wrapperStyle={{ fontSize: 12 }} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

function HistogramRenderer({ chartData }: Props) {
  const s = chartData.series[0];
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={chartData.data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }} barCategoryGap={0}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis
          dataKey={chartData.xAxisKey}
          tick={{ fontSize: 12 }}
          stroke="#9ca3af"
          label={
            chartData.xAxis?.label
              ? { value: chartData.xAxis.label, position: "insideBottom", offset: -2, style: { fontSize: 11, fill: "#6b7280" } }
              : undefined
          }
        />
        <YAxis
          tick={{ fontSize: 12 }}
          stroke="#9ca3af"
          label={
            chartData.yAxis?.label
              ? { value: chartData.yAxis.label, angle: -90, position: "insideLeft", style: { fontSize: 11, fill: "#6b7280" }, dx: -5 }
              : undefined
          }
        />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey={s.dataKey} name={s.name} fill="#374151" radius={0} />
      </BarChart>
    </ResponsiveContainer>
  );
}

function BubbleChartRenderer({ chartData }: Props) {
  const s = chartData.series[0];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart margin={{ top: 20, right: 20, left: 10, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis
          dataKey={chartData.xAxisKey}
          type="number"
          name={chartData.xAxis?.label ?? chartData.xAxisKey}
          tick={{ fontSize: 12 }}
          stroke="#9ca3af"
          label={
            chartData.xAxis?.label
              ? { value: chartData.xAxis.label, position: "insideBottom", offset: -2, style: { fontSize: 11, fill: "#6b7280" } }
              : undefined
          }
        />
        <YAxis
          dataKey={s.dataKey}
          type="number"
          name={chartData.yAxis?.label ?? s.dataKey}
          tick={{ fontSize: 12 }}
          stroke="#9ca3af"
          label={
            chartData.yAxis?.label
              ? { value: chartData.yAxis.label, angle: -90, position: "insideLeft", style: { fontSize: 11, fill: "#6b7280" }, dx: -5 }
              : undefined
          }
        />
        <ZAxis
          dataKey={chartData.sizeKey}
          type="number"
          range={[200, 1200]}
          name={chartData.sizeLabel}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          cursor={{ strokeDasharray: "3 3" }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          formatter={(value: any, name: any) => {
            if (name === chartData.sizeLabel) return [`$${value}M`, name];
            return [`${value}%`, name];
          }}
        />
        <Scatter name={s.name} data={chartData.data} fillOpacity={0.7}>
          {chartData.data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
}

function BoxPlotRenderer({ chartData }: Props) {
  const data = chartData.boxPlotData;
  if (!data || data.length === 0) return null;

  const allVals = data.flatMap((d) => [d.min, d.max]);
  const yMin = Math.min(...allVals) - 5;
  const yMax = Math.max(...allVals) + 5;

  const colWidth = 120;
  const chartWidth = data.length * colWidth;
  const chartHeight = 260;
  const padTop = 20;
  const padBottom = 30;
  const plotHeight = chartHeight - padTop - padBottom;

  const scale = (v: number) => padTop + plotHeight - ((v - yMin) / (yMax - yMin)) * plotHeight;
  const boxWidth = 44;

  // Generate Y-axis ticks
  const step = Math.ceil((yMax - yMin) / 6 / 5) * 5;
  const ticks: number[] = [];
  for (let v = Math.floor(yMin / step) * step; v <= yMax; v += step) {
    ticks.push(v);
  }

  return (
    <div className="flex justify-center overflow-x-auto">
      <svg width={chartWidth + 40} height={chartHeight + 10} className="text-[#6b7280]">
        {/* Y-axis ticks and grid */}
        {ticks.map((t) => (
          <g key={t}>
            <line x1={38} y1={scale(t)} x2={chartWidth + 40} y2={scale(t)} stroke="#e5e7eb" strokeWidth={1} />
            <text x={34} y={scale(t) + 4} textAnchor="end" fontSize={11} fill="#9ca3af">
              {t}
            </text>
          </g>
        ))}

        {data.map((d, i) => {
          const cx = 40 + i * colWidth + colWidth / 2;
          return (
            <g key={d.name}>
              {/* Whisker line */}
              <line x1={cx} y1={scale(d.min)} x2={cx} y2={scale(d.max)} stroke="#374151" strokeWidth={1.5} />
              {/* Min cap */}
              <line x1={cx - 12} y1={scale(d.min)} x2={cx + 12} y2={scale(d.min)} stroke="#374151" strokeWidth={1.5} />
              {/* Max cap */}
              <line x1={cx - 12} y1={scale(d.max)} x2={cx + 12} y2={scale(d.max)} stroke="#374151" strokeWidth={1.5} />
              {/* Box */}
              <rect
                x={cx - boxWidth / 2}
                y={scale(d.q3)}
                width={boxWidth}
                height={scale(d.q1) - scale(d.q3)}
                fill="#f3f4f6"
                stroke="#374151"
                strokeWidth={1.5}
                rx={3}
              />
              {/* Median */}
              <line
                x1={cx - boxWidth / 2}
                y1={scale(d.median)}
                x2={cx + boxWidth / 2}
                y2={scale(d.median)}
                stroke="#0d0d0d"
                strokeWidth={2.5}
              />
              {/* Label */}
              <text x={cx} y={chartHeight} textAnchor="middle" fontSize={12} fill="#6b7280">
                {d.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
