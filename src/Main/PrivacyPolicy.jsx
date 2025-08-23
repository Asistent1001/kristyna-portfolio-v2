import { useTranslation } from "react-i18next";
import BackButton from "../utils/BackButton.jsx";

export default function PrivacyPolicy() {
  const { t } = useTranslation("privacyPolicy");

  return (
    <article className="flex flex-col gap-3 px-4 sm:px-6 md:px-9 py-4 lg:px-12">
      <section className="flex flex-col gap-5">
        <h1 className={"text-2xl"}>{t("heading")}</h1>
        <p className={"pl-3"}>{t("text")}</p>
      </section>
      <section>
        <h2 className={"text-xl mb-3"}>{t("toSave.heading")}</h2>
        <ul className={"pl-7 list-disc pr-4"}>
          <li>{t("toSave.name")}</li>
          <li>{t("toSave.email")}</li>
          <li>{t("toSave.message")}</li>
        </ul>
      </section>
      <section>
        <h2 className={"text-xl mb-3"}>{t("usage.heading")}</h2>
        <p className={"pl-3 pb-3"}>{t("usage.text")}</p>
        <a className={"pl-3"} href="mailto:kristyna04@post.cz">
          <span className={" border-b"}>{t("email")}</span>
        </a>
      </section>
      <section>
        <h2 className={"text-xl mb-3"}>{t("retention.heading")}</h2>
        <p className={"pl-3"}>
          {t("retention.text")}
          <a
            className={"border-b"}
            href="https://www.emailjs.com/legal/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.emailjs.com/legal/privacy-policy/.
          </a>
        </p>
      </section>
      <section>
        <h2 className={"text-xl mb-3"}>{t("sharing.heading")}</h2>
        <p className={"pl-3"}>
          {t("sharing.text")}
          <a
            className={"border-b"}
            href="https://www.emailjs.com/legal/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.emailjs.com/legal/privacy-policy/.
          </a>
        </p>
      </section>
      <section>
        <h2 className={"text-xl mb-3"}>{t("rights.heading")}</h2>
        <ul className={"pl-7 pb-3 list-disc pr-4"}>
          <li>{t("rights.access")}</li>
          <li>{t("rights.correction")}</li>
          <li>{t("rights.restriction")}</li>
          <li>{t("rights.portability")}</li>
          <li>{t("rights.objection")}</li>
          <li>{t("rights.complaint")}</li>
        </ul>
        <p className={"pl-3 pb-3"}>{t("rights.contact")}</p>
        <a className={"pl-3"} href="mailto:kristyna04@post.cz">
          <span className={" border-b"}>{t("email")}</span>
        </a>
      </section>
      <section>
        <h2 className={"text-xl mb-3"}>{t("security.heading")}</h2>
        <p className={"pl-3"}>{t("security.text")}</p>
      </section>
      <section>
        <h2 className={"text-xl mb-3"}>{t("changes.heading")}</h2>
        <p className={"pl-3"}>{t("changes.text")}</p>
      </section>
      <section>
        <h2 className={"text-xl mb-3"}>{t("contact.heading")}</h2>
        <p className={"pl-3 pb-3"}>{t("contact.text")}</p>
        <a className={"pl-3"} href="mailto:kristyna04@post.cz">
          <span className={" border-b"}>{t("email")}</span>
        </a>
      </section>
      <section>
        <BackButton backPath={""} />
      </section>
    </article>
  );
}
