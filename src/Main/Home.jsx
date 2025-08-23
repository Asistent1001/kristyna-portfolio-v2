import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// @ts-ignore
import mainPhoto from "../assets/Home/home_1.jpg";

export default function Home() {
  const { t } = useTranslation("home");
  const countries = ["cz", "pt", "es", "lv", "gr", "is", "it"];
  return (
    <>
      <section className="relative h-56 md:h-72 overflow-hidden">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-[5%] z-150">
          <p className={"font-semibold text-overlay-text text-xl md:text-2xl"}>
            {t("greet")}
          </p>
          <Link
            to={"/distribution"}
            className={"text-stone-200 text-sm md:text-base border-b pb-1"}
          >
            {t("forSale")}
          </Link>
        </div>
        <div className="h-full relative before:absolute before:content-[''] before:bg-overlay-bg/20 before:z-50 before:inset-0">
          <img
            className="h-full w-full object-cover object-center "
            src={mainPhoto}
            alt="Photographer photo"
          />
        </div>
      </section>
      <section>
        <div
          className={
            "flex flex-col justify-center items-center gap-4 py-5 text-center bg-overlay-bg text-overlay-text"
          }
        >
          <h1 className={"text-2xl font-bold"}>{t("specialisation")}</h1>
          <p className={"text-xs sm:text-sm md:text-base p-3"}>{t("info")}</p>

          <Link
            className={"bg-stone-50 text-stone-950 rounded-md text-sm p-4"}
            to={"/portfolio"}
          >
            {t("creationLink")}
          </Link>
        </div>
      </section>
      <section
        className={
          "py-10 relative text-overlay-text flex flex-col justify-center bg-fixed bg-cover items-center bg-[url('/src/assets/Home/home_2.jpg')]"
        }
      >
        <div className={"absolute inset-0 bg-overlay-bg/60 z-10"}></div>
        <h1 className={"text-2xl font-bold z-50"}>{t("locationHeading")}</h1>
        <h2 className={"text-base font-semibold z-50 pb-8"}>{t("location")}</h2>
        <ul
          className={
            "text-base font-normal z-50 text-center flex flex-col gap-1"
          }
        >
          {countries.map((item, index) => {
            return <li key={index}>{t(item)}</li>;
          })}
        </ul>
      </section>
    </>
  );
}
