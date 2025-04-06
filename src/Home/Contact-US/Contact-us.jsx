import React, { useContext } from "react";
import "./Contact-us.css";
import { Button } from "react-bootstrap";
import PageWrapper from "../../PageWrapper";
import { Helmet } from "react-helmet-async";
import { t } from "i18next";
import { LangContext } from "../../contexts/langContext";
import Swal from "sweetalert2";
const ContactUs = () => {
   const { lang, setLang } = useContext(LangContext);

   const handleContact = (e) => {
    e.preventDefault()
    {lang == 'fa' ? (
      Swal.fire({
        icon: "success",
        title: "پیام شما با موفقیت دریافت شد",
        text: "کارشناسان ما در اسرع وقت به درخواست شما رسیدگی می کنند با تشکر "
      })
    ) : (
      Swal.fire({
        icon: "success",
        title: "Your Message Has Been Successfully Received",
        text: "Our experts will handle your request as soon as possible. Thank You"
      })
    )}
   }
  return (
    <PageWrapper>
      <Helmet>
        <title>تماس با ما</title>
        <meta
          name="description"
          content="کالا ناوگان ابریشم،تماس با ما ، آمار حمل و نقل ، پشتیبانی ، سوالات "
        />
        <meta
          name="keywords"
          content="حمل بار، حمل و نقل، باربری، سفارش کالا ، بازرگانی ، کالا ناوگان ابریشم ، تماس با ما ، پشتیبانی"
        />
        <meta property="og:title" content="درباره ما" />
        <meta
          property="og:description"
          content="بهترین خدمات حمل و نقل با قیمت مناسب"
        />
        <meta property="og:image" content="logo.ico" />
        <meta property="og:url" content="https://silkfleet.com/" />
      </Helmet>
      <div className="d-flex justify-content-center " dir={`${lang === "fa" ? "rtl" : lang === "en" && "ltr"}`}>
        <div className="text-center contact-Us">
          <div className="container">
            <div className="row">
              <h1 className="mt-5 contact-h1">{t('contactUs-title')}</h1>
              <p className="mt-3 contact-p">
              {t('contactUs-text')}
              </p>
              <form action="">
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder={t('contactUs-name')}
                  required
                />
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder={t('contactUs-phone')}
                  required
                />
                <input
                  type="email"
                  className="form-control mt-4"
                  placeholder={t('contactUs-email')}
                  required
                />
                <textarea
                  className="form-control mt-4"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder={t('contactUs-message')}
                  required
                ></textarea>
                <Button className="contact-buttons mt-5 mb-5" type="submit" onClick={handleContact}>
                  {t('contactUs-send')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactUs;
