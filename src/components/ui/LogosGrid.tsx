"use client"
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface LogosGridProps {
  className?: string
  iconSizes?: string
  items: string[]
}

const LogosGrid = ({
  items,
  className = "grid gap-3 grid-cols-10 lg:grid-cols-14",
  iconSizes = "w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
}: LogosGridProps) => {
  const containerRef = useRef(null);
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (containerRef.current) {
        const grid = getComputedStyle(containerRef.current);
        const colCount = grid.gridTemplateColumns.split(' ').length;
        setColumns(colCount);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const fullRows = Math.floor(items.length / columns);
  const remainder = items.length % columns;

  return (
    <div
      ref={containerRef}
      // className="grid gap-2 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-11 w-full"
      className={clsx(
        "w-full max-w-[1035px] justify-center place-items-center",
        className,
      )}
    >
      {items.slice(0, fullRows * columns).map((item, i) => (
        <div
          key={i}
          className={clsx(
            "object-contain",
            iconSizes,
          )}
          style={{
            maskImage: `url('${item}')`,
            WebkitMaskImage: `url('${item}')`, // for Safari
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            backgroundColor: '#466883',
            display: 'inline-block'
          }}
        />
        // <div key={i} className="bg-gray-100 p-2">
        //   {item}
        // </div>
      ))}

      {remainder > 0 && (
        <div
          className="col-span-full grid gap-3"
          style={{
            gridTemplateColumns: `repeat(${remainder}, minmax(0, 1fr))`,
          }}
        >
          {items.slice(-remainder).map((item, i) => (
            <div
              key={fullRows * columns + i}
              className={clsx(
                "object-contain",
                iconSizes,
              )}
              style={{
                maskImage: `url('${item}')`,
                WebkitMaskImage: `url('${item}')`, // for Safari
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
                backgroundColor: '#466883',
                display: 'inline-block'
              }}
            />
            // <div key={fullRows * columns + i} className="bg-gray-100 p-2">
            //   {item}
            // </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LogosGrid;