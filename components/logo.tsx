import Image from "next/image";
import { cn } from "../lib/utils";

export const Logo = ({
  className,
  uniColor,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  const textFill = uniColor ? "currentColor" : "#90a1b9";
  return (
    <div
      className={cn("flex items-center text-foreground h-12 w-full", className)}
    >
      <Image src="/logo.png" alt="HTNexus" width={80} height={80} />

      {/* Brand name - clean, modern, tech typography on the right */}
      <text
        x="145"
        y="71"
        textAnchor="start"
        dominantBaseline="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="73.5"
        fontWeight="700"
        letterSpacing="-1.1px"
        fill={textFill}
      >
        HTNexus
      </text>
    </div>
  );
};

export const LogoIcon = ({
  className,
  uniColor,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  const gemFill = uniColor ? "currentColor" : "url(#treasureGradient)";
  const nexusStroke = uniColor ? "currentColor" : "#0A84FF";
  const circuitStroke = uniColor ? "currentColor" : "#0A2540";
  return (
    <svg
      className={cn("size-6", className)}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="treasureGradient"
          x1="65"
          y1="55"
          x2="135"
          y2="145"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E5FF" />
          <stop offset="1" stopColor="#FFBF00" />
        </linearGradient>
      </defs>

      {/* Nexus - clean outer ring */}
      <circle
        cx="100"
        cy="100"
        r="82"
        fill="transparent"
        stroke={nexusStroke}
        strokeWidth="7"
        strokeLinejoin="round"
      />

      {/* Hidden Treasure - central crystal gem */}
      <polygon
        points="100,55 140,100 100,145 60,100"
        fill={gemFill}
        stroke="#0A2540"
        strokeWidth="8"
        strokeLinejoin="round"
      />

      {/* Subtle inner facet for gem depth */}
      <polygon
        points="100,62 133,100 100,138 67,100"
        fill="transparent"
        stroke="#112233"
        strokeWidth="3"
        strokeLinejoin="round"
        opacity="0.35"
      />

      {/* Technology circuits inside the gem */}
      {/* Vertical main trace */}
      <path
        d="M100 68 L100 132"
        stroke={circuitStroke}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Upper horizontal trace */}
      <path
        d="M73 80 L127 80"
        stroke={circuitStroke}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Lower horizontal trace */}
      <path
        d="M73 120 L127 120"
        stroke={circuitStroke}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
};
