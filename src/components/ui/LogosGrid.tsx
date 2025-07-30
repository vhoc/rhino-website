"use client"
import React, { useEffect, useRef, useState } from 'react';
// import clsx from 'clsx';

const LogosGrid = ({ items }: { items: string[] }) => {
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
      className={`
        w-full max-w-[1035px] 
        grid grid-cols-10 gap-3 
        lg:grid-cols-14
        justify-center place-items-center
      `}
    >
      {items.slice(0, fullRows * columns).map((item, i) => (
        <div
          key={i}
          className="w-4 h-4 object-contain"
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
              className="w-4 h-4 object-contain"
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