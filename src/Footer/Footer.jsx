import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import SocialMediaItemsList from "../utils/SocialMediaItemsList";

const year = new Date().getFullYear();

export default function Footer() {
  const { t } = useTranslation("footer");
  return (
    <footer
      className={
        "bg-overlay-bg flex flex-col justify-center px-4 py-4 lg:py-6 sm:px-6 md:px-9 lg:px-12 gap-10 sm:gap-8"
      }
    >
      <section
        className={
          "text-lg flex flex-row justify-between items-center text-overlay-text"
        }
      >
        <Link
          className={
            "text-base transition-all duration-400 border-b border-b-transparent hover:text-link-hover-color hover:border-b-link-hover-color active:text-link-hover-color active:border-b-link-hover-color"
          }
          to={"/contact"}
        >
          {t("contact")}
        </Link>
        <SocialMediaItemsList />
      </section>
      <section className={"text-overlay-text flex flex-col gap-3 items-center"}>
        <Link
          className={
            "text-xs sm:text-sm hover:text-link-hover-color transition-all duration-400 border-b border-b-transparent hover:border-b-link-hover-color active:text-link-hover-color active:border-b-link-hover-color"
          }
          to={"/privacyPolicy"}
        >
          {t("gdpr")}
        </Link>
        <p className={"text-xs sm:text-sm"}>
          © {year} {t("owner")}
        </p>
      </section>
    </footer>
  );
}
