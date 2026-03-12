interface SecondShiftLogoProps {
  className?: string;
  size?: number;
}

const SecondShiftLogo = ({ className = "", size = 24 }: SecondShiftLogoProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Person silhouette */}
    <circle cx="8" cy="4" r="2.5" />
    <path d="M8 8c-2.5 0-4.5 2-4.5 4.5V16h3l.5 5h2l.5-5h3v-3.5C12.5 10 10.5 8 8 8z" />
    {/* Heartbeat pulse */}
    <path
      d="M14 13h2l1.5-3 2 6 1.5-3H23"
      strokeWidth={2.2}
      className="animate-pulse"
    />
  </svg>
);

export default SecondShiftLogo;
