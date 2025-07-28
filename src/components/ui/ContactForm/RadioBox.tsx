"use state"
import { type HTMLAttributes } from "react";
import clsx from "clsx";

interface RadioBoxProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  description?: string;
}
export default function RadioBox({
  name,
  value,
  checked = false,
  onChange,
  title,
  description,
  ...props
}: RadioBoxProps) {


  return (
    <label
      className={clsx(
        "w-full px-6 py-4 flex flex-row gap-4 justify-between items-center",
        "border border-solid border-coolgray-50",
        "transition-colors duration-300 ease-in-out",
        "cursor-pointer",
        checked ? "bg-coolgray-800" : "bg-white",
      )}
    >

      <div className="flex flex-col gap-1 max-w-4/5">
        <p
          className={clsx(
            "font-bold",
            checked ? "text-white" : "text-coolgray-900",
          )}
        >
          {title}
        </p>

        <p
          className={clsx(
            "text-sm",
            checked ? "text-coolgray-50" : "text-coolgray-700",
          )}
        >
          {description}
        </p>
      </div>

      <div className="relative w-6 h-6">
        <input
          name={name}
          value={value}
          type="radio"
          checked={checked}
          onChange={onChange}
          className={clsx(
            "appearance-none w-6 h-6 cursor-pointer",
            "bg-no-repeat bg-center bg-contain",
            checked
              ? "bg-[url('/img/circle-check.svg')]"
              : "bg-[url('/img/circle.svg')]"
          )}
          {...props}
        />
      </div>
    </label>
  )

}