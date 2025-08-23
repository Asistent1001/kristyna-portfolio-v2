import i18n from "i18next";

export default function ChangeLanguageButton() {
  const currentLanguage = i18n.language;
  const nextLanguage = currentLanguage === "en" ? "cs" : "en";
  const label = currentLanguage === "en" ? "Cz" : "Eng";

  const changeLanguage = () => {
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <button
      className={"p-3 pr-0 text-sm sm:text-base md:text-lg"}
      onClick={changeLanguage}
    >
      <div>{label}</div>
    </button>
  );
}
