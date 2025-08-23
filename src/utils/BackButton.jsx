import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BackButton({ backPath, home, onClick }) {
  const { t } = useTranslation("utils");
  return (
    <Link
      className={"group"}
      to={`/${backPath}`}
      onClick={() => onClick()}
    >
      <button
        className={
          "rounded-xl bg-stone-50 py-1.5 px-4 border-2 text-lg transition-all duration-400 cursor-pointer"
        }
      >
        <span
          className={
            "transition-all duration-300 border-b border-b-transparent group-hover:border-b-overlay-bg w-full h-full block"
          }
        >
          {home ? t("homeButton") : t("backButton")}
        </span>
      </button>
    </Link>
  );
}
