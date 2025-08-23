import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import { filteredItems } from "../../utils/EventsList.jsx";

import { useTranslation } from "react-i18next";
import LocalizedDate from "../../utils/LocalizedDate.jsx";

export default function EventPage() {
  const { t } = useTranslation(["events", "utils"]);
  const { eventId } = useParams();

  const currentKey = useMemo(
    () => filteredItems.findIndex((item) => item.eventName === eventId),
    [eventId],
  );

  const { eventName, date, imgUrl, externalLink } = filteredItems[currentKey];
  const textParts = t(`events:${eventId}.textParts`, {
    returnObjects: true,
  });

  const hasContent = imgUrl || externalLink;

  return (
    <section className={"flex flex-col p-3 gap-3 lg:gap-5 md:p-5 px-4 sm:px-6 md:px-9 lg:px-12"}>
      <h1 className={"text-base md:text-lg lg:text-xl pr-2"}>
        {t(`events:${eventName}.heading`)}
      </h1>
      <Link className="w-fit" to={`/events`}>
        <div
          className={
            "text-sm md:text-base lg:text-lg bg-overlay-bg text-overlay-text px-3 py-1 rounded-xl"
          }
        >
          {t("utils:backButton")}
        </div>
      </Link>
      {textParts.map((text, index) => (
        <p className={"text-sm md:text-base lg:text-lg"} key={index+text}>
          {text}
        </p>
      ))}
      <div className={"flex flex-col text-sm sm:text-base md:text-lg"}>
        <LocalizedDate dateString={date} />
        <p>
          {t(`${eventName}.creatorName`)}
          <span>{t(`${eventName}.creator`)}</span>
        </p>
      </div>
      {hasContent && (
        <div className="flex flex-col gap-2 md:gap-3 border md:p-3 w-fit  rounded-2xl p-2 transition-shadow shadow-sm hover:shadow-2xl">
          {externalLink && (
            <div>
              <a
                className={
                  "text-sm md:text-base lg:text-lg bg-overlay-bg text-overlay-text inline-block p-1.5 rounded-xl"
                }
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(`${eventName}.externalLink`)}
              </a>
            </div>
          )}
          {imgUrl && (
            <div className={"max-w-3xl border rounded-xl"}>
              <img
                className={"rounded-xl"}
                src={imgUrl}
                alt={t(`${eventName}.imgAlt`)}
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
