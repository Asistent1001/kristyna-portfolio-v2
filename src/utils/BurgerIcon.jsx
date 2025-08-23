export default function BurgerIcon({ isOpen }) {
  return (
    <button className={"relative w-full h-full "}>
      <span
        className={`w-full bg-stone-50 h-0.5 block absolute top-0 transition-all duration-400 ease-in-out ${isOpen ? "transform -rotate-45 top-1/2" : ""}`}
      ></span>
      <span
        className={`w-full bg-stone-50 h-0.5 block absolute top-1/2 transform -translate-y-1/2 transition-all duration-400 ease-in-out ${isOpen ? "hidden" : "visible"}`}
      ></span>
      <span
        className={`w-full bg-stone-50 h-0.5 block absolute bottom-0 transition-all duration-400 ease-in-out ${isOpen ? "transform rotate-45 top-1/2" : ""}`}
      ></span>
    </button>
  );
}
