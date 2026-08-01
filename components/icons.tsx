// Assuming your Icon component is defined in a file like this:
// d:\Projects\NEXT_PROJECT\viztore\components\Icon\Icon.tsx

import React from 'react';

// Define an interface for the Icon component's props
// It extends React.SVGProps<SVGSVGElement> to allow all standard SVG attributes,
// and adds 'size' and 'strokeWidth'.
interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

// Update the Icon component to accept CustomIconProps
// and use 'size' for width/height and 'strokeWidth' for the SVG stroke.
const Icon: React.FC<CustomIconProps> = ({
  size = 24, // Default size if not provided
  strokeWidth = 2, // Default strokeWidth if not provided
  children, // If your icon uses children for paths
  ...props // Capture any other standard SVG props
}) => {
  return (
    <svg
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      // You might want to set other default SVG attributes here,
      // such as 'fill', 'stroke', 'viewBox', etc.
      fill="none" // Common for line icons
      stroke="currentColor" // Common to inherit color
      viewBox="0 0 24 24" // Common viewBox for 24x24 icons
      {...props} // Spread any other SVG props passed to the component
    >
      {children} {/* Render children, typically <path> elements */}
      {/* Alternatively, if your Icon component directly contains SVG path data,
          it would look like this:
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      */}
    </svg>
  );
};

export default Icon;
