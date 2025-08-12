import React from 'react';

interface ResponsiveGridProps {
  children: React.ReactNode;
  defaultCols?: number;
  rows?: number; // Fixed number of rows
  maxWidth?: string; // Optional max-width for the grid container
  className?: string;
  gridClassName?: string;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  defaultCols = 1,
  rows = 1,
  maxWidth,
  className = "mx-auto",
  gridClassName = "grid gap-4 grid-cols-8 sm:grid-cols-12 md:grid-cols-16 xl:gap-x-8 2xl:gap-x-12 xl:gap-y-8"
}) => {
  // Calculate the total number of items
  const totalItems = React.Children.count(children);

  // If the number of rows is fixed, ensure total items is a multiple of cols
  // This logic is simplified for fixed rows and columns.
  // In a real-world scenario, you might want more robust handling for item overflow
  // or dynamically adjusting rows based on total items and columns.
  if (totalItems > defaultCols * rows) {
    console.warn(
      'More items provided than can fit in the specified grid (columns * rows). ' +
      'Some items may not be displayed or layout might be unexpected.'
    );
  }



  // Apply max-width if provided
  const containerStyle = maxWidth ? { maxWidth: maxWidth } : {};

  return (
    <div className={className} style={containerStyle}>
      <div className={gridClassName}>
        {React.Children.map(children, (child) => (
          // Make sure each item takes full width/height of its cell
          <div className="w-full h-full flex items-center justify-center">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveGrid;