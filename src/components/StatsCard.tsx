interface StatsCardProps {
  value: string;
  label: string;
  sublabel?: string;
  colorClass?: string;
  delay?: number;
}

const StatsCard = ({ value, label, sublabel, colorClass = "text-primary", delay = 0 }: StatsCardProps) => (
  <div
    className="bg-gradient-card rounded-xl border border-border p-6 animate-float-up"
    style={{ animationDelay: `${delay}s` }}
  >
    <p className={`text-4xl font-display font-bold ${colorClass}`}>{value}</p>
    <p className="text-sm text-foreground mt-1 font-medium">{label}</p>
    {sublabel && <p className="text-xs text-muted-foreground mt-1">{sublabel}</p>}
  </div>
);

export default StatsCard;
