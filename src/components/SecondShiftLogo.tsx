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
    {/* Head */}
    <ellipse cx="12" cy="3.5" rx="2.2" ry="2.8" />
    {/* Shoulders/torso */}
    <path d="M6 10.5C6 8.5 8.5 7 12 7s6 1.5 6 3.5v2c0 .4-.2.7-.5.9L12 16.5l-5.5-3.1c-.3-.2-.5-.5-.5-.9v-2z" />
    {/* Left arm */}
    <path d="M6 11c-1.2.8-2 1.8-2 3s.8 1.5 1.5 1L9 13" strokeWidth={2} />
    {/* Right arm */}
    <path d="M18 11c1.2.8 2 1.8 2 3s-.8 1.5-1.5 1L15 13" strokeWidth={2} />
    {/* Heart held in hands */}
    <path
      d="M12 21.5l-3.5-3.5c-1.5-1.5-1.8-3-.8-4.2 1-1.2 2.5-1 3.3 0l1 1.2 1-1.2c.8-1 2.3-1.2 3.3 0 1 1.2.7 2.7-.8 4.2L12 21.5z"
      fill="currentColor"
      strokeWidth={1.2}
    />
    {/* Legs */}
    <line x1="10" y1="16.5" x2="10" y2="20" strokeWidth={2} strokeLinecap="round" />
    <line x1="14" y1="16.5" x2="14" y2="20" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

export default SecondShiftLogo;
