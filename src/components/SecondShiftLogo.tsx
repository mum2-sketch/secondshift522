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
    <ellipse cx="12" cy="4.5" rx="2.5" ry="3" />
    {/* Body/shoulders */}
    <path d="M5 11c0-3 3-4.5 7-4.5s7 1.5 7 4.5v1.5c0 .5-.3.8-.7.8L12 16l-6.3-2.7c-.4-.2-.7-.5-.7-.8V11z" />
    {/* Arms hugging heart */}
    <path d="M5 11.5c-1 .5-1.5 1.5-1.5 2.5s1 1.5 1.5 1L8 13" />
    <path d="M19 11.5c1 .5 1.5 1.5 1.5 2.5s-1 1.5-1.5 1L16 13" />
    {/* Heart */}
    <path
      d="M12 20l-3-3c-1.2-1.2-1.5-2.5-.8-3.5.7-1 2-1 2.8-.2l1 1 1-1c.8-.8 2.1-.8 2.8.2.7 1 .4 2.3-.8 3.5L12 20z"
      fill="currentColor"
      strokeWidth={1.5}
    />
  </svg>
);

export default SecondShiftLogo;
