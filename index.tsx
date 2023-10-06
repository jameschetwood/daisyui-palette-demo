import React from "react";

function Group({ items }: { items: string[] }) {
  return (
    <div className={"my-5 flex flex-col gap-2 whitespace-nowrap p-2"}>
      {items.map((child) => {
        return (
          <div key={child} className={"flex items-center"}>
            <div
              className={`${child} mr-2 h-8 w-8 shrink-0 rounded-full`}
            ></div>
            <div className={"break-words text-xs [text-wrap:wrap]"}>
              {child.replace("bg-", "")}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function DaisyuiPalette() {
  const items: string[][] = [
    ["bg-primary", "bg-primary-focus", "bg-primary-content"],
    ["bg-secondary", "bg-secondary-focus", "bg-secondary-content"],
    ["bg-accent", "bg-accent-focus", "bg-accent-content"],
    ["bg-neutral", "bg-neutral-focus", "bg-neutral-content"],
    ["bg-base-100", "bg-base-200", "bg-base-300", "bg-base-content"],
    ["bg-info", "bg-info-content"],
    ["bg-success", "bg-success-content"],
    ["bg-warning", "bg-warning-content"],
    ["bg-error", "bg-error-content"],
  ];
  return (
    <div className={"grid grid-cols-9 border border-gray-300 bg-white"}>
      {items.map((i) => {
        return <Group key={i[0]} items={i} />;
      })}
    </div>
  );
}
