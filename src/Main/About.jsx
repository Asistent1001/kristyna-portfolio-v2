import { useTranslation } from "react-i18next";

// @ts-ignore
import aboutPortrait from "../assets/About/about_1.png";

import { nominations } from "../utils/Nominations.jsx";
import { NominationItem } from "./NominationItem.jsx";

import { courses } from "../utils/Courses.jsx";
import { CourseItem } from "./CourseItem.jsx";

export default function About() {
  const { t } = useTranslation("about");
  return (
    <div className="bg-overlay-bg px-4 sm:px-6 md:px-9 py-4 lg:px-12">
      <section
        className={
          "flex flex-col bg-overlay-bg text-overlay-text gap-8 lg:flex-row"
        }
      >
        <div className={"flex flex-col gap-3 "}>
          <div className={"flex flex-col gap-5"}>
            <h1 className={"text-[1.625rem] font-semibold"}>
              {t("about.heading")}
            </h1>
            <p className={"pl-3 pr-8"}>
              <span className={"text-lg text-stone-400"}>
                {t("about.partText")}
              </span>
              {t("about.text")}
            </p>
          </div>
          <div className={"flex flex-col gap-2 pt-4"}>
            <h1 className={"text-xl font-semibold"}>{t("skills.heading")}</h1>
            <div className={"pl-3 pr-8"}>
              <p>{t("skills.text")}</p>
              <p className={"pt-3"}>{t("skills.partText")}</p>
            </div>
          </div>
          <div className={"flex flex-col gap-2 pt-4"}>
            <h1 className={"text-xl font-semibold"}>{t("goals.heading")}</h1>
            <p className={"pl-3 pr-8"}>{t("goals.text")}</p>
          </div>
        </div>
        <div
          className={"flex flex-col items-center justify-center lg:min-w-80 "}
        >
          <img
            className={"rounded-2xl"}
            src={aboutPortrait}
            alt="aboutPortrait"
          />
        </div>
      </section>
      <section className={"flex flex-col lg:flex-row"}>
        <div
          className={
            "flex flex-col bg-overlay-bg text-overlay-text p-5 gap-8 lg:w-1/2"
          }
        >
          <h1 className={"text-[1.625rem] font-semibold"}>
            {t("awards.heading")}
          </h1>
          <ul className={"flex flex-col gap-3"}>
            {nominations.map((nom, index) => {
              return <NominationItem key={index} {...nom} />;
            })}
          </ul>
        </div>
        <div
          className={
            "flex flex-col bg-overlay-bg text-overlay-text p-5 gap-8 lg:w-1/2"
          }
        >
          <h1 className={"text-[1.625rem] font-semibold"}>
            {t("courses.heading")}
          </h1>
          <ul className={"flex flex-col gap-3"}>
            {courses.map((cour, index) => {
              return <CourseItem key={index} {...cour} />;
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
