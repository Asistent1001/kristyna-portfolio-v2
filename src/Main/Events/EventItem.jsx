import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LocalizedDate from "../../utils/LocalizedDate.jsx";

export default function EventItem({ event, date }) {
  const { t } = useTranslation("events");
  return (
    <div className="border-b py-4 flex flex-col gap-2">
      <h1 className={"text-xl"}>{t(`${event}.heading`)}</h1>
      <LocalizedDate dateString={date} />
      <Link className="w-fit" to={`/events/${event}`}>
        <div
          className={
            "text-xl bg-overlay-bg text-overlay-text px-3 py-1 rounded-xl"
          }
        >
          {t("readMore")}
        </div>
      </Link>
    </div>
  );
}
