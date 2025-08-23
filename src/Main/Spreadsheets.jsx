import { useTranslation } from "react-i18next";
import { useState } from "react";
import ArrowIcon from "../utils/ArrowIcon.jsx";

export default function Spreadsheets() {
  const { t } = useTranslation("spreadsheets");
  const [isOpenSpreadsheet, setIsOpenSpreadsheet] = useState({
    size: false,
    delivery: false,
  });

  const tableStyles = {
    container: "overflow-x-auto text-xs md:text-sm lg:text-base",
    table: "border-collapse border border-gray-300",
    headerRow: "bg-gray-100",
    headerCell: "border border-gray-300 px-3 py-2 font-semibold text-center",
    cell: "border border-gray-300 text-center px-3 py-2",
    alternateRow: "bg-gray-50",
  };

  const toggleModal = (type) => {
    setIsOpenSpreadsheet((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div
      className={
        "py-4 md:py-6 lg:py-8 flex flex-col w-[100vw] text-sm sm:text-base md:text-lg lg:text-xl gap-3 md:gap-5 lg:gap-8 bg-spreadsheets-bg/50 px-4 sm:px-6 md:px-9 lg:px-12"
      }
    >
      <div>
        <div
          className="flex flex-row items-center justify-between w-full cursor-pointer"
          onClick={() => toggleModal("size")}
        >
          <p className="font-semibold">{t("sizeTitle")}</p>
          <div
            className={`transition-transform duration-300 w-6 h-6 ${isOpenSpreadsheet.size ? "rotate-180" : ""}`}
          >
            <ArrowIcon className="w-full h-full text-stone-500" />
          </div>
        </div>

        <div
          className={`flex flex-col gap-4 transition-all duration-400 overflow-hidden ease-in-out ${isOpenSpreadsheet.size ? "max-h-[600px] opacity-100 pt-6" : "max-h-0 opacity-0"}`}
        >
          <p className="text-sm lg:text-base ">{t("sizeInfo")}</p>

          <div className={`${tableStyles.container}`}>
            <table className={`${tableStyles.table} w-full md:w-fit`}>
              <thead>
                <tr className={tableStyles.headerRow}>
                  <th className={tableStyles.headerCell}>{t("sizeHeader")}</th>
                  <th className={tableStyles.headerCell}>
                    {t("sizeSubheader")}
                  </th>
                  <th className={tableStyles.headerCell}>
                    {t("photoSubheader")}
                  </th>
                  <th className={tableStyles.headerCell}>
                    {t("printSubheader")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tableStyles.cell}>A5</td>
                  <td className={tableStyles.cell}>13×18 cm</td>
                  <td className={tableStyles.cell}>10×15 cm</td>
                  <td className={tableStyles.cell}>A6</td>
                </tr>
                <tr className={tableStyles.alternateRow}>
                  <td className={tableStyles.cell}>A4</td>
                  <td className={tableStyles.cell}>21×30 cm</td>
                  <td className={tableStyles.cell}>13×18 cm</td>
                  <td className={tableStyles.cell}>A5</td>
                </tr>
                <tr>
                  <td className={tableStyles.cell}>A3</td>
                  <td className={tableStyles.cell}>30×40 cm</td>
                  <td className={tableStyles.cell}>21×30 cm</td>
                  <td className={tableStyles.cell}>A4</td>
                </tr>
                <tr className={tableStyles.alternateRow}>
                  <td className={tableStyles.cell}>A2</td>
                  <td className={tableStyles.cell}>40×50 cm</td>
                  <td className={tableStyles.cell}>30×40 cm</td>
                  <td className={tableStyles.cell}>A3</td>
                </tr>
                <tr>
                  <td className={tableStyles.cell}>A1</td>
                  <td className={tableStyles.cell}>50×70 cm</td>
                  <td className={tableStyles.cell}>40×50 cm</td>
                  <td className={tableStyles.cell}>A2</td>
                </tr>
                <tr className={tableStyles.alternateRow}>
                  <td className={tableStyles.cell}>A0</td>
                  <td className={tableStyles.cell}>61×91 cm</td>
                  <td className={tableStyles.cell}>50×70 cm</td>
                  <td className={tableStyles.cell}>A1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <div
          className="flex flex-row items-center justify-between w-full cursor-pointer"
          onClick={() => toggleModal("delivery")}
        >
          <p className="font-semibold">{t("deliveryTitle")}</p>
          <div
            className={`transition-transform duration-300 w-6 h-6 ${isOpenSpreadsheet.delivery ? "rotate-180" : ""}`}
          >
            <ArrowIcon className="w-full h-full text-stone-500" />
          </div>
        </div>

        <div
          className={`text-xs sm:text-sm md:text-base lg:text-lg flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 transition-all duration-400 overflow-hidden ease-in-out ${isOpenSpreadsheet.delivery ? "max-h-100 opacity-100 pt-6" : "max-h-0 opacity-0"}`}
        >
          <p className="font-semibold">{t("deliveryInfoSpan")}</p>
          <p className="text-xs md:text-sm lg:text-base">
            {t("deliveryInfoMain")}
          </p>
          <div className="text-xs md:text-sm lg:text-base">
            <p>
              <span className="font-semibold">
                {t("deliveryPersonalPickupSpan")}
              </span>
              {t("deliveryPersonalPickup")}
            </p>
            <p>
              <span className="font-semibold">{t("deliveryPostSpan")}</span>
              {t("deliveryPost")}
            </p>
          </div>
          <div>
            <p className="font-semibold">{t("paymentInfoSpan")}</p>
            <p className="text-xs md:text-sm lg:text-base">
              {t("paymentInfoMain")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
