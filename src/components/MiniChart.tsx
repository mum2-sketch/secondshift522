import { AreaChart, Area, ResponsiveContainer } from "recharts";

interface MiniChartProps {
  data: { value: number }[];
  color: string;
  height?: number;
}

const MiniChart = ({ data, color, height = 60 }: MiniChartProps) => (
  <ResponsiveContainer width="100%" height={height}>
    <AreaChart data={data}>
      <defs>
        <linearGradient id={`grad-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.3} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="value"
        stroke={color}
        strokeWidth={2}
        fill={`url(#grad-${color.replace('#','')})`}
        dot={false}
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default MiniChart;
