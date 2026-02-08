export default function AnimatedHeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          {/* Strong center glow but soft edges */}
          <radialGradient id="chipGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="40%" stopColor="#7fd0ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0b3a66" stopOpacity="0" />
          </radialGradient>

          <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" />
          </filter>

          {/* Clip the glow to a rounded square (chip shape) */}
          <clipPath id="chipClip">
            <rect x="-105" y="-105" width="210" height="210" rx="18" ry="18" />
          </clipPath>
        </defs>

        <g transform="translate(800 450)">
          {/* Pulsing group */}
          <g className="animate-pulse">
            {/* Subtle chip outline only (no filled rectangle) */}
            <rect
              x="-105"
              y="-105"
              width="210"
              height="210"
              rx="18"
              ry="18"
              fill="none"
              stroke="rgba(160,220,255,0.45)"
              strokeWidth="2"
            />

            {/* Glow is clipped to the rounded-square chip so no rectangle edge can appear */}
            <g clipPath="url(#chipClip)">
              <circle
                r="95"
                fill="url(#chipGlow)"
                filter="url(#softBlur)"
                opacity="0.85"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
