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
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Head */}
    <ellipse cx="12" cy="4" rx="2.5" ry="3" />
    {/* Shoulders/body — wide rounded trapezoid */}
    <path d="M5.5 16 C5.5 11, 7 8.5, 12 8.5 C17 8.5, 18.5 11, 18.5 16" />
    {/* Left arm curving inward to hold heart */}
    <path d="M5.5 13 C3.5 13.5, 3 15, 4.5 16 L8 14.5" />
    {/* Right arm curving inward to hold heart */}
    <path d="M18.5 13 C20.5 13.5, 21 15, 19.5 16 L16 14.5" />
    {/* Heart — centered below chest */}
    <path
      d="M12 19.5 L9 16.5 C7.5 15, 7.8 13.5, 9 13 C10 12.6, 11.2 13, 12 14 C12.8 13, 14 12.6, 15 13 C16.2 13.5, 16.5 15, 15 16.5 Z"
      fill="currentColor"
      strokeWidth={1.5}
    />
    {/* Legs */}
    <line x1="10" y1="16" x2="10" y2="21" />
    <line x1="14" y1="16" x2="14" y2="21" />
  </svg>
);

export default SecondShiftLogo;
