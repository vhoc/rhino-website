import React from "react";

const brightredSwatches = [
  { name: "brightred-25", class: "bg-brightred-25", text: "text-black" },
  { name: "brightred-50", class: "bg-brightred-50", text: "text-black" },
  { name: "brightred-100", class: "bg-brightred-100", text: "text-black" },
  { name: "brightred-200", class: "bg-brightred-200", text: "text-black" },
  { name: "brightred-300", class: "bg-brightred-300", text: "text-black" },
  { name: "brightred-400", class: "bg-brightred-400", text: "text-white" },
  { name: "brightred-500", class: "bg-brightred-500", text: "text-white" },
  { name: "brightred-600", class: "bg-brightred-600", text: "text-white" },
  { name: "brightred-700", class: "bg-brightred-700", text: "text-white" },
  { name: "brightred-800", class: "bg-brightred-800", text: "text-white" },
  { name: "brightred-900", class: "bg-brightred-900", text: "text-white" },
];

const coolgraySwatches = [
  { name: "coolgray-25", class: "bg-coolgray-25", text: "text-black" },
  { name: "coolgray-50", class: "bg-coolgray-50", text: "text-black" },
  { name: "coolgray-100", class: "bg-coolgray-100", text: "text-black" },
  { name: "coolgray-200", class: "bg-coolgray-200", text: "text-black" },
  { name: "coolgray-300", class: "bg-coolgray-300", text: "text-black" },
  { name: "coolgray-400", class: "bg-coolgray-400", text: "text-white" },
  { name: "coolgray-500", class: "bg-coolgray-500", text: "text-white" },
  { name: "coolgray-600", class: "bg-coolgray-600", text: "text-white" },
  { name: "coolgray-700", class: "bg-coolgray-700", text: "text-white" },
  { name: "coolgray-800", class: "bg-coolgray-800", text: "text-white" },
  { name: "coolgray-900", class: "bg-coolgray-900", text: "text-white" },
];

const primarySecondarySwatches = [
  { name: "primary-red", class: "bg-primary-red", text: "text-white" },
  {
    name: "primary-gray-900",
    class: "bg-primary-gray-900",
    text: "text-white",
  },
  {
    name: "primary-gray-500",
    class: "bg-primary-gray-500",
    text: "text-white",
  },
  {
    name: "secondary-gray-400",
    class: "bg-secondary-gray-400",
    text: "text-white",
  },
  {
    name: "secondary-gray-100",
    class: "bg-secondary-gray-100",
    text: "text-black",
  },
];

const gradientSwatches = [
  { name: "gradient-01", class: "bg-gradient-01" },
  { name: "gradient-02", class: "bg-gradient-02" },
  { name: "gradient-03", class: "bg-gradient-03" },
  { name: "gradient-04", class: "bg-gradient-04" },
  { name: "gradient-05", class: "bg-gradient-05" },
];

export default function ThemePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="mb-8 text-4xl font-bold text-black">
        Theme Colors Showcase
      </h1>
      <div className="space-y-12">
        {/* Bright Red Swatches */}
        <section>
          <h2 className="mb-2 text-xl font-semibold text-black">Bright Red</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {brightredSwatches.map(({ name, class: bgClass, text }) => (
              <div
                key={name}
                className={`flex h-24 min-w-[96px] flex-col items-center justify-center rounded-lg border shadow ${bgClass}`}
              >
                <span className={`mb-1 text-xs font-semibold ${text}`}>
                  {name}
                </span>
                <span className={`text-xs ${text}`}>{bgClass}</span>
              </div>
            ))}
          </div>
        </section>
        {/* Cool Gray Swatches */}
        <section>
          <h2 className="mb-2 text-xl font-semibold text-black">Cool Gray</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {coolgraySwatches.map(({ name, class: bgClass, text }) => (
              <div
                key={name}
                className={`flex h-24 min-w-[96px] flex-col items-center justify-center rounded-lg border shadow ${bgClass}`}
              >
                <span className={`mb-1 text-xs font-semibold ${text}`}>
                  {name}
                </span>
                <span className={`text-xs ${text}`}>{bgClass}</span>
              </div>
            ))}
          </div>
        </section>
        {/* Primary & Secondary Swatches */}
        <section>
          <h2 className="mb-2 text-xl font-semibold text-black">
            Primary & Secondary
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {primarySecondarySwatches.map(({ name, class: bgClass, text }) => (
              <div
                key={name}
                className={`flex h-24 flex-col items-center justify-center rounded-lg border shadow ${bgClass}`}
              >
                <span className={`mb-1 text-xs font-semibold ${text}`}>
                  {name}
                </span>
                <span className={`text-xs ${text}`}>{bgClass}</span>
              </div>
            ))}
          </div>
        </section>
        {/* Gradient Swatches */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-black">Gradients</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {gradientSwatches.map(({ name, class: bgClass }) => (
              <div
                key={name}
                className={`flex h-24 flex-col items-center justify-center rounded-lg border text-white shadow ${bgClass}`}
              >
                <span className="mb-1 text-xs font-semibold">{name}</span>
                <span className="text-xs">{bgClass}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
