import { useState } from "react";
import { imagesToRender } from "../utils/imagesData";
import Carousel from "./Carousel";

export default function Subcategory({ categoryName, subcategoryName }) {
  const imagesData = imagesToRender[categoryName][subcategoryName];
  const [isHiddenCarousel, setIsHiddenCarousel] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const currentChoose = (photoId) => {
    setIsHiddenCarousel(false);
    setSelectedPhoto(photoId);
  };

  return (
    <section className="py-4 lg:py-6 px-4 sm:px-6 md:px-9 lg:px-12">
      <Carousel
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
        images={imagesData}
        hidden={isHiddenCarousel}
        setHidden={setIsHiddenCarousel}
      />
      <div className="grid auto-rows-auto grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {imagesData.map((currentObject, index) => {
          return (
            <div
              className={`flex flex-col gap-4 items-center ${currentObject.orientation === "p" ? "row-span-2" : ""}`}
              key={index + currentObject.name}
            >
              <span className="text-base md:text-lg">{currentObject.name}</span>
              <div
                onClick={() => currentChoose(index)}
                className="flex border p-3 md:p-4 w-full h-full shadow-2xl/40 select-none transition-transform duration-500 ease-out hover:scale-104 cursor-pointer"
              >
                <img
                  className="object-cover w-full h-ful"
                  src={currentObject.path}
                  alt={currentObject.name}
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
