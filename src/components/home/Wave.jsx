import React from 'react';

const Wave = () => {
  return (
    <div className="hidden md:block relative w-full overflow-hidden">
      <svg
        viewBox="0 0 2370 270"
        style={{ width: '100vw', height: 'auto' }}
        preserveAspectRatio="none"
      >
        {/* Background Wave Path */}
        <path
          d="M-110 224C-110 224 323.232 86.0886 622.897 75.4828C961.553 63.497 1170.36 166.366 1509.21 169.747C1854.85 173.196 2358 47 2358 47"
          stroke="#C7D9E5"
          strokeOpacity="1"
          strokeWidth="80"
          strokeLinecap="round"
          fill="none"
        />

        {/* Moving Text with margin above */}
        <text fontSize="24" fill="#181F39" fontWeight="600" dy="8">
          {' '}
          {/* Added dy="8" */}
          <textPath href="#textCurve" startOffset="100%">
            <animate
              attributeName="startOffset"
              from="100%"
              to="-100%"
              dur="35s"
              repeatCount="indefinite"
            />
            <tspan dx="5">☀︎</tspan>
            <tspan dx="20">BE THE DIFFERENCE THAT MATTERS</tspan>
            <tspan dx="30">☀︎</tspan>
            <tspan dx="20">BE THE DIFFERENCE THAT MATTERS</tspan>
            <tspan dx="30">☀︎</tspan>
            <tspan dx="20">BE THE DIFFERENCE THAT MATTERS</tspan>
            <tspan dx="5">☀︎</tspan>
            <tspan dx="20">BE THE DIFFERENCE THAT MATTERS</tspan>
            <tspan dx="30">☀︎</tspan>
            <tspan dx="20">BE THE DIFFERENCE THAT MATTERS</tspan>
            <tspan dx="30">☀︎</tspan>
            <tspan dx="20">BE THE DIFFERENCE THAT MATTERS</tspan>
            <tspan dx="5">☀︎</tspan>
            <tspan dx="20">BE THE DIFFERENCE THAT MATTERS</tspan>
            <tspan dx="30">☀︎</tspan>
            <tspan dx="20">BE THE DIFFERENCE THAT MATTERS</tspan>
            <tspan dx="30">☀︎</tspan>
            <tspan dx="20">BE THE DIFFERENCE THAT MATTERS</tspan>
            <tspan dx="5">☀︎</tspan>
            <tspan dx="20">BE THE DIFFERENCE THAT MATTERS</tspan>
            <tspan dx="30">☀︎</tspan>
            <tspan dx="20">BE THE DIFFERENCE THAT MATTERS</tspan>
            <tspan dx="30">☀︎</tspan>
            <tspan dx="20">BE THE DIFFERENCE THAT MATTERS</tspan>
          </textPath>
        </text>

        {/* Define the Text Path */}
        <defs>
          <path
            id="textCurve"
            d="M-110 224C-110 224 323.232 86.0886 622.897 75.4828C961.553 63.497 1170.36 166.366 1509.21 169.747C1854.85 173.196 2358 47 2358 47"
            fill="none"
          />
        </defs>
      </svg>
    </div>
  );
};

export default Wave;
