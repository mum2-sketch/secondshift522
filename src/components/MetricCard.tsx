import MiniChart from "./MiniChart";

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  trend: string;
  trendUp?: boolean;
  color: string;
  data: { value: number }[];
  delay?: number;
}

const MetricCard = ({ title, value, unit, trend, trendUp, color, data, delay = 0 }: MetricCardProps) => (
  <div
    className="bg-gradient-card rounded-xl border border-border p-5 animate-float-up"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs text-muted-foreground uppercase tracking-wider">{title}</span>
      <span className={`text-xs font-medium ${trendUp ? "text-glow-success" : "text-accent"}`}>{trend}</span>
    </div>
    <div className="flex items-baseline gap-1 mb-3">
      <span className="text-2xl font-display font-bold text-foreground">{value}</span>
      <span className="text-xs text-muted-foreground">{unit}</span>
    </div>
    <MiniChart data={data} color={color} />
  </div>
);

export default MetricCard;
