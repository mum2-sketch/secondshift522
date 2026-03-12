import { useEffect, useRef } from "react";

interface ActivityRingProps {
  size?: number;
  strokeWidth?: number;
  rings: {
    progress: number; // 0-100
    color: string;
    label: string;
    value: string;
  }[];
}

const ActivityRing = ({ size = 200, strokeWidth = 12, rings }: ActivityRingProps) => {
  const center = size / 2;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        {rings.map((ring, i) => {
          const radius = center - strokeWidth * (i + 1) - i * 6;
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (ring.progress / 100) * circumference;

          return (
            <g key={i}>
              {/* Background ring */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke="hsl(220 14% 14%)"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
              {/* Progress ring */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={ring.color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className="animate-ring-draw"
                style={{
                  "--ring-circumference": circumference,
                  "--ring-offset": offset,
                  filter: `drop-shadow(0 0 6px ${ring.color}40)`,
                  animationDelay: `${i * 0.3}s`,
                } as React.CSSProperties}
              />
            </g>
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-display font-bold text-foreground">87</span>
        <span className="text-xs text-muted-foreground">Health Score</span>
      </div>
    </div>
  );
};

export default ActivityRing;
