import { useTranslation } from "react-i18next";
import ArrowIcon from "./ArrowIcon";

export default function PopupFilter({
  text,
  isOpen,
  setIsOpen,
  listToShow,
  setFilter,
  currentFilter,
  toPageOne,
  toPageOneLastIndex,
}) {
  const { t } = useTranslation("forSale");
  const setFilters = (filter) => {
    toPageOne[0]([0, toPageOneLastIndex()]);
    toPageOne[1](0);
    if (filter === "nonSelected" || filter === "recommend") {
      setFilter(null);
    } else setFilter(filter);
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen();
      }}
      className="w-fit border relative select-none text-overlay-bg cursor-pointer"
    >
      <div className="bg-spreadsheets-bg/50 p-2 flex flex-row justify-between items-end gap-1.5 text-sm sm:text-base">
        <div className="">{t(text + "Heading")}</div>
        <div
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-x-180" : ""}`}
        >
          <ArrowIcon className="text-stone-400" />
        </div>
      </div>
      <div className="text-xs sm:text-sm p-2">
        {t(
          !currentFilter
            ? text === "color"
              ? "recommend"
              : "nonSelected"
            : currentFilter,
        )}
      </div>
      <ul
        className={`absolute w-full overflow-hidden left-0 top-full transition-all duration-200 z-20 ease-out ${isOpen ? "opacity-100 translate-y-0" : " opacity-0 -translate-y-3 pointer-events-none"}`}
      >
        {listToShow.map((item, index) => {
          return (
            <li
              onClick={() => setFilters(item)}
              className={`p-2 sm:p-3 flex flex-row justify-between shadow-2xl overflow-hidden hover:scale-101 hover:bg-overlay-text ${
                !currentFilter &&
                (item === "recommend" || item === "nonSelected")
                  ? "bg-overlay-text "
                  : currentFilter === item
                    ? "bg-overlay-text"
                    : " bg-spreadsheets-bg"
              }`}
              key={index}
            >
              <span className="text-sm sm:text-base">{t(item)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
