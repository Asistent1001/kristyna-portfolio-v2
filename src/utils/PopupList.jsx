import { useTranslation } from "react-i18next";

// @ts-ignore
import ArrowIcon from "./ArrowIcon";

export default function PopupList({ text, isOpen, setIsOpen, listToShow }) {
  const { t } = useTranslation("forSale");

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen();
      }}
      className="relative select-none"
    >
      <div className="flex flex-row items-center justify-between gap-2 border border-stone-400 p-2">
        <span className="mr-2">{t(text)}</span>
        <div
          className={`h-4 w-4 transition-transform duration-300  ${isOpen ? "rotate-x-180" : ""}`}
        >
          <ArrowIcon className="text-stone-500" />
        </div>
      </div>
      <ul
        className={`absolute w-full bg-stone-50 shadow-2xl left-0 top-full transition-all duration-200 z-20 ease-out ${isOpen ? "opacity-100 translate-y-0" : " opacity-0 -translate-y-3 pointer-events-none"}`}
      >
        {Object.entries(listToShow).map(([item, value], index) => {
          return (
            <li
              className="border-b flex border-stone-400 flex-row justify-between p-2"
              key={index}
            >
              <span className="font-semibold">{item}</span>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
