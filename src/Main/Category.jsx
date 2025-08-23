import { useState } from "react";
import { useTranslation } from "react-i18next";
import { buttonImagesKeysToRender, imagesToRender } from "../utils/imagesData";
import Subcategory from "./Subcategory";
buttonImagesKeysToRender;

export default function Category({ categoryName, setChosenCategory }) {
  const { t } = useTranslation("portfolio");

  const subCategoriesList = Object.keys(imagesToRender[categoryName]);

  const [chosenSubcategory, setChosenSubcategory] = useState(null);

  const clearSelections = () => {
    if (chosenSubcategory) return setChosenSubcategory(null);
    setChosenCategory(null);
  };

  return (
    <section className="flex flex-col py-4 lg:py-6 px-4 sm:px-6 md:px-9 lg:px-12">
      <button
        onClick={clearSelections}
        className="flex items-center w-fit gap-2 px-4 py-2 mb-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium shadow-sm hover:shadow-md transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        {t("backButton")}
      </button>
      {!chosenSubcategory ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subCategoriesList.map((item, index) => (
            <button
              onClick={() => setChosenSubcategory(item)}
              key={index}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                className="object-cover h-80 w-full transform group-hover:scale-105 transition-transform duration-300"
                src={buttonImagesKeysToRender[item]}
                alt={item}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-white text-lg font-semibold group-hover:text-yellow-400 transition-colors">
                  {t(item)}
                </span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <Subcategory
          categoryName={categoryName}
          subcategoryName={chosenSubcategory}
        />
      )}
    </section>
  );
}
