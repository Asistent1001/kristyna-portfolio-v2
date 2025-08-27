import React from "react";

export default function FrameOrPrintListShown({ listToShow }) {
  return (
    <ul className="flex justify-between items-center">
      {Object.entries(listToShow).map(([key, value], index) => (
        <React.Fragment key={key + value + index}>
          <li className="flex flex-row gap-3 items-center text-sm xl:text-base">
            <span className="font-semibold">{key}</span>
            <span>{value} cm</span>
          </li>
          {index !== Object.entries(listToShow).length - 1 && (
            <div className="w-[2px] h-6 xl:h-7 bg-stone-300"></div>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}
