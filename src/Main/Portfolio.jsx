import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  buttonImagesKeysToRender,
  categoryListToExport,
} from "../utils/imagesData";

import Category from "./Category";

export default function Portfolio() {
  const { t } = useTranslation("portfolio");
  const [chosenCategory, setChosenCategory] = useState(null);

  return (
    <section className="flex flex-col">
      {!chosenCategory ? (
        categoryListToExport.map((item, index) => {
          return (
            <button
              className="relative"
              onClick={() => setChosenCategory(item)}
              key={index}
            >
              <span className="absolute top-1/2 -translate-y-1/2 left-1/48 font-semibold text-2xl bg-amber-500">
                {t(item)}
              </span>
              <div className="h-80">
                <img
                  className="w-full h-full object-cover"
                  src={buttonImagesKeysToRender[item]}
                  alt={item}
                />
              </div>
            </button>
          );
        })
      ) : (
        <Category
          categoryName={chosenCategory}
          setChosenCategory={setChosenCategory}
        />
      )}
    </section>
  );
}
