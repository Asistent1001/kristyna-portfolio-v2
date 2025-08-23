import { useTranslation } from "react-i18next";
import { filteredItems } from "../../utils/EventsList.jsx";
import EventItem from "./EventItem.jsx";

export default function Events() {
  const { t } = useTranslation("events");
  return (
    <div className={"text-overlay-bg px-4 sm:px-6 md:px-9 lg:px-12"}>
      <h1 className={"text-2xl py-6 text-center"}>{t("heading")}</h1>
      <ul className={"flex flex-col gap-5"}>
        {filteredItems.map((item, index) => {
          return (
            <li className={"flex flex-col gap-2"} key={index}>
              <EventItem event={item.eventName} date={item.date} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
