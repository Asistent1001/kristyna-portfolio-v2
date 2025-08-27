// @ts-nocheck
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { imagesForSaleImport } from "../utils/imagesData";

import ArrowIcon from "../utils/ArrowIcon";
import FrameOrPrintListShown from "../utils/FrameOrPrintListShown.jsx";
import PopupFilter from "../utils/PopupFilter";
import PopupList from "../utils/PopupList";

import FrameExample from "../assets/forSale/InfoPhotos/frame.jpg";
import Carousel from "./Carousel";
import Pagination from "./Pagination.jsx";
import { useWindowWidth } from "../utils/useWindowWidth.jsx";
import Spreadsheets from "./Spreadsheets.jsx";

const printList = {
  A6: "10×15",
  A5: "13×18",
  A4: "21×30",
  A3: "30×40",
  A2: "40×50",
  A1: "50×70",
};

const frameList = {
  A5: "13×18",
  A4: "21×30",
  A3: "30×40",
  A2: "40×50",
  A1: "50×70",
  A0: "61×91",
};

const priceList = ["nonSelected", "lowToHigh", "highToLow"];
const colorList = [
  "recommend",
  "color",
  "blackAndWhite",
  "portrait",
  "landscape",
];

export default function ForSale() {
  const { t } = useTranslation("forSale");

  const [showExample, setShowExample] = useState(false);

  const [isOpenFilter, setIsOpenFilter] = useState({
    color: false,
    price: false,
  });

  const [isOpenPopup, setIsOpenPopup] = useState({
    frame: false,
    print: false,
  });

  const togglePopup = (popupName) => {
    setIsOpenPopup((prev) => ({
      print: popupName === "print" ? !prev.print : false,
      frame: popupName === "frame" ? !prev.frame : false,
    }));
    setIsOpenFilter((prev) => ({
      color: popupName === "color" ? !prev.color : false,
      price: popupName === "price" ? !prev.price : false,
    }));
  };

  const closeAllPopup = () => {
    setIsOpenPopup({
      frame: false,
      print: false,
    });
  };

  const [filterColorForImages, setFilterColorForImages] = useState(null);
  const [filterPriceForImages, setFilterPriceForImages] = useState(null);

  const howToSortImages = () => {
    let result = [...imagesForSaleImport];

    if (!filterColorForImages) {
      result = result.sort((a, b) => a.importance - b.importance);
    }
    if (filterColorForImages === "color") {
      result = result.filter((item) => item.color === "c");
    } else if (filterColorForImages === "blackAndWhite") {
      result = result.filter((item) => item.color === "bw");
    }

    if (filterColorForImages === "landscape") {
      result = result.filter((item) => item.orientation === "l");
    } else if (filterColorForImages === "portrait") {
      result = result.filter((item) => item.orientation === "p");
    }

    if (filterPriceForImages === "lowToHigh") {
      result.sort((a, b) => a.price - b.price);
    } else if (filterPriceForImages === "highToLow") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  };
  const sortedImages = howToSortImages();

  const [isHiddenCarousel, setIsHiddenCarousel] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const currentChoose = (photoId) => {
    setIsHiddenCarousel((prev) => !prev);
    setSelectedPhoto(photoId);
  };

  const currentWidth = useWindowWidth();

  const maxPhotosWithResponsiveCount = () => {
    if (currentWidth < 640) return 8;
    else if (currentWidth < 1280) return 12;
    else return 18;
  };

  const [maxPhotos, setMaxPhotos] = useState([
    0,
    maxPhotosWithResponsiveCount(),
  ]);

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section
      className="gap-3 flex flex-col items-center py-4 lg:py-6 px-4 sm:px-6 md:px-9 lg:px-12"
      onClick={() => closeAllPopup()}
    >
      <div className="flex flex-col items-center justify-center text-center gap-5 lg:pb-6">
        <h1 className="text-xl font-semibold lg:text-2xl">{t("heading")}</h1>
        <h3 className="text-sm lg:text-base">{t("catchword")}</h3>
      </div>
      <div className="flex flex-col lg:grid grid-cols-10 xl:grid-cols-7 w-full gap-6 ">
        <div className="flex flex-col gap-5 col-span-7 xl:col-span-5">
          <h1 className="text-lg lg:text-2xl font-semibold">
            {t("printAndFraming")}
          </h1>
          <div className="flex flex-col gap-5 pb-3">
            <div className="flex flex-row items-center justify-between gap-8">
              <div>
                <h1 className="text-base lg:text-lg font-semibold">
                  {t("printHeading")}
                </h1>
                <div>
                  <p className="text-sm lg:text-base">{t("printText")}</p>
                  <p className="text-xs lg:text-sm mr-16 mt-2 text-stone-500">
                    {t("printTextCorrections")}
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex flex-col self-end w-fit text-end text-sm shrink-0">
                <p className="text-lg">16 – 549 Kč</p>
                <p className="text-xs lg:text-sm text-stone-500">
                  {t("printFormatsCorrections")}
                </p>
              </div>
            </div>
            <div className="h-[0.063rem] w-full bg-stone-300"></div>
            <div className="lg:hidden flex justify-between">
              <PopupList
                listToShow={printList}
                text="printFormatsHeading"
                isOpen={isOpenPopup.print}
                setIsOpen={() => togglePopup("print")}
              />
              <div className="flex flex-col justify-end text-end text-sm">
                <p>16 – 549 Kč</p>
                <p className="text-xs text-stone-500">
                  {t("printFormatsCorrections")}
                </p>
              </div>
            </div>
            <div className="hidden lg:block">
              <FrameOrPrintListShown listToShow={printList} />
            </div>
          </div>
          <div className="flex flex-col gap-5 pb-3 mt-8">
            <div className="flex flex-row items-center justify-between gap-8">
              <div>
                <h1 className="text-base font-semibold lg:text-lg">
                  {t("frameHeading")}
                </h1>
                <p className="text-sm lg:text-base">
                  {t("frameTextPartOne")}
                  <a
                    className="font-semibold border-b"
                    href="https://www.ikea.com/cz/cs/p/knoppaeng-ram-bila-80427268/#content"
                  >
                    KNOPPÄNG
                  </a>
                  {t("frameTextPartTwo")}
                </p>
              </div>
              <div className="hidden lg:flex flex-col self-end w-fit text-end text-sm shrink-0">
                <p className="text-lg">79 – 399 Kč</p>
                <p className="text-xs lg:text-sm text-stone-500">
                  {t("frameFormatsCorrections")}
                </p>
              </div>
            </div>
            <div className="h-[0.063rem] w-full bg-stone-300"></div>
            <div className="lg:hidden flex justify-between">
              <PopupList
                listToShow={frameList}
                text="frameFormatsHeading"
                isOpen={isOpenPopup.frame}
                setIsOpen={() => togglePopup("frame")}
              />
              <div className="flex flex-col justify-end text-end text-sm">
                <p>79 – 399 Kč</p>
                <p className="text-xs text-stone-500">
                  {t("frameFormatsCorrections")}
                </p>
              </div>
            </div>
            <div className="hidden lg:block">
              <FrameOrPrintListShown listToShow={frameList} />
            </div>
          </div>
        </div>
        <div className="lg:hidden flex flex-col items-center max-w-[30rem] self-center">
          <button
            onClick={() => setShowExample(!showExample)}
            className="flex flex-col items-center gap-2 text-lg"
          >
            <p className="border-b border-stone-500 w-fit">
              {t("illustrationPhotoHeading")}
            </p>
            <div
              className={`w-5 text-center transition-transform duration-300 ${showExample ? "rotate-x-180" : ""}`}
            >
              <ArrowIcon className={"text-stone-500"} />
            </div>
          </button>
          <div
            className={`flex flex-col items-center relative overflow-hidden transition-all duration-500 ease-in-out ${showExample ? "max-h-150" : "max-h-0"}`}
          >
            <img
              src={FrameExample}
              alt="Exemple"
              className={`w-full transition-all duration-1000 ease-in-out ${showExample ? "translate-y-0" : "-translate-y-full"}`}
            />
            <p className="text-sm text-stone-500">
              {t("illustrationPhotoSubtitle")}
            </p>
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-center gap-3 col-span-3 xl:col-span-2">
          <p className="">{t("illustrationPhotoHeading")}</p>
          <img src={FrameExample} alt="Exemple" className="" />
          <p className="text-sm lg:text-base text-stone-500">
            {t("illustrationPhotoSubtitleBig")}
          </p>
        </div>
      </div>
      <Spreadsheets/>
      <div className="flex flex-row justify-between w-full md:justify-end mt-6 gap-2 md:gap-6">
        <PopupFilter
          currentFilter={filterColorForImages}
          listToShow={colorList}
          setFilter={setFilterColorForImages}
          text="color"
          isOpen={isOpenFilter.color}
          setIsOpen={() => togglePopup("color")}
          toPageOne={[setMaxPhotos, setCurrentPage]}
          toPageOneLastIndex={maxPhotosWithResponsiveCount}
        />
        <PopupFilter
          currentFilter={filterPriceForImages}
          listToShow={priceList}
          setFilter={setFilterPriceForImages}
          text="price"
          isOpen={isOpenFilter.price}
          setIsOpen={() => togglePopup("price")}
          toPageOne={[setMaxPhotos, setCurrentPage]}
          toPageOneLastIndex={maxPhotosWithResponsiveCount}
        />
      </div>
      <Carousel
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
        images={sortedImages}
        hidden={isHiddenCarousel}
        setHidden={setIsHiddenCarousel}
      />
      <Pagination
        maxPhotosPerPage={maxPhotosWithResponsiveCount()}
        photosTotal={sortedImages.length}
        setPage={setMaxPhotos}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="grid auto-rows-auto grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {sortedImages.map((currentObject, index) => {
          if (index >= maxPhotos[0] && index < maxPhotos[1])
            return (
              <div
                className={`flex flex-col gap-4 items-center ${currentObject.orientation === "p" ? "row-span-2" : ""}`}
                key={index + currentObject.price + currentObject.name}
              >
                <span className="text-base md:text-lg">
                  {currentObject.name}
                </span>
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
                <span className="text-base md:text-lg">
                  {currentObject.price} Kč
                </span>
              </div>
            );
        })}
      </div>
    </section>
  );
}
