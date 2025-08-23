import { useTranslation } from "react-i18next";

export default function LocalizedDate({ dateString }) {
  const { i18n } = useTranslation();
  const localeMap = {
    cs: "cs-CZ",
    en: "en-US",
  };

  const date = new Date(dateString);
  const locale = localeMap[i18n.language] || "en-US";
  const formatted = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return <div className="text-sm">{formatted}</div>;
}
