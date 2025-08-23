import { useSwipeable } from "react-swipeable";
import ArrowIcon from "../utils/ArrowIcon";

export default function Carousel({
  hidden,
  images,
  selectedPhoto,
  setHidden,
  setSelectedPhoto,
}) {
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setSelectedPhoto((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    },
    onSwipedRight: () => {
      setSelectedPhoto((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    },
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  if (hidden) return null;

  return (
    <div
      className="z-1000 fixed inset-0 bg-black flex items-center justify-center px-4 sm:px-6 md:px-9 lg:px-12"
      style={{ touchAction: "none" }}
      onClick={() => setHidden(true)}
    >
      <h1 className="fixed top-[5%] sm:top-[3%] text-overlay-text text-lg md:text-xl xl:text-2xl">
        {images[selectedPhoto].name}
      </h1>
      <img
        {...handlers}
        onClick={(e) => e.stopPropagation()} // клик по картинке не закрывает
        src={images[selectedPhoto ?? 0].path}
        alt={images[selectedPhoto].name}
        className="max-w-full max-h-[80vh] object-contain"
        loading="lazy"
      />

      <div className="fixed bottom-[8%] left-0 w-full flex justify-center gap-8 md:hidden px-4 sm:px-6">
        <div className="w-full flex justify-around">
          <button
            className="w-12 h-12"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              );
            }}
          >
            <ArrowIcon className="rotate-90 left-0 text-stone-50" />
          </button>
          <button
            className="w-12 h-12"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
              );
            }}
          >
            <ArrowIcon className="-rotate-90 text-stone-50" />
          </button>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setSelectedPhoto((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
          );
        }}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:left-6 lg:left-8 w-12 h-12"
      >
        <ArrowIcon className="rotate-90 text-stone-50" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setSelectedPhoto((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
          );
        }}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:right-6 lg:right-8 w-12 h-12"
      >
        <ArrowIcon className="-rotate-90 text-stone-50" />
      </button>
    </div>
  );
}
