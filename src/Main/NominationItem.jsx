import { useTranslation } from "react-i18next";

export const NominationItem = ({
  contest,
  category,
  year,
  position,
  photo,
}) => {
  const { t } = useTranslation("about");
  return (
    <li>
      <details className="group border border-overlay-text rounded-2xl p-5 transition-shadow shadow-sm hover:shadow-xl">
        <summary className="cursor-pointer list-none flex justify-between items-center text-xl font-semibold">
          {contest}
          <span className="transition-transform duration-200 group-open:rotate-x-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </summary>
        <div className="mt-3 flex flex-col gap-2">
          <p>{t(category)}</p>
          <p className="text-sm font-light">{year}</p>
          <p>{t(position)}</p>
          {photo && (
            <img
              className="rounded-2xl max-w-96"
              src={photo}
              alt={t("awards.awardedPhoto", { contest })}
              loading="lazy"
            />
          )}
        </div>
      </details>
    </li>
  );
};
