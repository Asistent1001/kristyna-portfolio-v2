import emailjs from "emailjs-com";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import SocialMediaItemsList from "../utils/SocialMediaItemsList";

export default function Contact() {
  const { t } = useTranslation("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fm2oork",
        "template_69jwgc9",
        e.target,
        "Wq6dWkl78q_XzKndi",
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);

          // Очищаем все поля формы после успешной отправки
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          alert("An error occurred. Please try again later.");
          console.log(error.text);
        },
      );
  };

  return (
    <article className="flex flex-col gap-3 md:flex-row rounded-2xl overflow-hidden shadow-2xl my-4 mg:py-6 mx-4 sm:mx-6 md:mx-9 lg:mx-12">
      <section className="bg-overlay-bg ">
        <div
          className={
            "text-overlay-text text-lg flex flex-col gap-8 p-8 items-start"
          }
        >
          <div>
            <h1 className={"text-3xl pb-3"}>{t("heading")}</h1>
            <h4 className={"text-stone-400 border-none text-sm"}>
              {t("location")}
            </h4>
          </div>
          <div className="flex flex-col">
            <a href="tel:+420601373536">{t("phone")}</a>
            <a href="mailto:kristyna04@post.cz">{t("email")}</a>
          </div>
          <p className={"text-sm text-stone-400 max-w-96"}>{t("text")}</p>

          <SocialMediaItemsList />
        </div>
      </section>
      <section className={"flex flex-col rounded-2xl p-5 md:w-2/3"}>
        <h2 className={"text-xl pb-3 md:text-2xl"}>{t("form.heading")}</h2>
        <form className={"flex flex-col gap-5"} onSubmit={handleSubmit}>
          <label className={"flex flex-col gap-2 text-lg md:text-xl"}>
            {t("form.sender")}
            <input
              className={"bg-stone-200 rounded-md p-2 text-lg"}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className={"flex flex-col gap-2 text-lg md:text-xl"}>
            {t("form.email")}
            <input
              className={"bg-stone-200 rounded-md p-2 text-lg"}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className={"flex flex-col gap-2 text-lg md:text-xl"}>
            {t("form.subject")}
            <select
              className={"bg-stone-200 rounded-md p-2 text-lg"}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>
                {t("form.options.selectSubject")}
              </option>
              <option value="Fotografie">
                {t("form.options.photography")}
              </option>
              <option value="Kalendář">{t("form.options.calendar")}</option>
              <option value="Zakázková výroba">
                {t("form.options.customProduction")}
              </option>
              <option value="Jiný">{t("form.options.other")}</option>
            </select>
          </label>

          <label className={"flex flex-col gap-2 text-lg md:text-xl"}>
            {t("form.message")}
            <textarea
              className={"bg-stone-200 rounded-md p-2 text-lg resize-none h-32"}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button
            className="bg-stone-950 text-amber-50 rounded-md py-2 px-6 text-2xl my-8 
             transition duration-300 ease-in-out 
             hover:bg-amber-50 hover:text-stone-950 hover:shadow-lg hover:scale-101"
            type="submit"
          >
            {t("form.submit")}
          </button>
        </form>
      </section>
    </article>
  );
}
