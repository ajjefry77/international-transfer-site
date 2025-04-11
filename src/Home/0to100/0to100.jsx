import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import PageWrapper from "../../PageWrapper";
import { Helmet } from "react-helmet-async";
import { t } from "i18next";
import { LangContext } from "../../contexts/langContext";
import Swal from "sweetalert2";
const ZeroToHundred = () => {
    const { lang, setLang } = useContext(LangContext);

    return (
        <PageWrapper>
            <Helmet>
                <title>0 تا 100</title>
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
                            <h1 className="mt-5 contact-h1"> 0 تا 100</h1>
                            <p className="mt-3 text-end">
                                شرکت کالا ناوگان ابریشم
                                <br />
                                پلتفرم جامع صفر تا صد تجارت و لجستیک بین‌المللی
                                <br />
                                ### ما هر کالایی را، از هر نقطۀ دنیا تهیه کرده و به هر مقصدی می‌فرستیم!
                                <br />
                                کامل‌ترین سرویس یکپارچه بازرگانی و حملونقل بین‌المللی
                                <br />

                                ---
                                <br />

                                خدمات صفر تا صد ما:
                                <br />

                                ۱. تأمین کالا از تمام جهان
                                <br />
                                - هر کالایی، از هر کشوری: از چین و دبی تا اروپا و آمریکا
                                <br />
                                - مواد اولیه، ماشین‌آلات، کالای مصرفی، محصولات صنعتی و...
                                <br />
                                - خرید امن با تضمین کیفیت: بازرسی کالا قبل از خرید (QC)
                                <br />
                                - تیم محلی در کشورهای کلیدی: چین، ترکیه، هند، روسیه و...
                                <br />

                                ۲. حمل ونقل چندوجهی به تمام نقاط دنیا
                                <br />
                                - دریایی: ارزان‌ترین نرخ‌ها از بنادر معتبر
                                <br />
                                - زمینی و ریلی: ویژه خاورمیانه، آسیای میانه و اروپا
                                <br />
                                - ترانزیت هوشمند: ترکیب روش‌ها برای بهینه‌سازی هزینه و زمان
                                <br />

                                ۳. مدیریت کامل گمرک و ترخیص
                                <br />
                                - ترخیص در مبدأ و مقصد: چین، امارات، ایران، ترکیه و...
                                <br />
                                - اخذ تمام مجوزها: استاندارد، بهداشت، سیب و...
                                <br />
                                - کاهش قانونی هزینه‌های گمرکی: با استفاده از تسهیلات ویژه
                                <br />

                                ۴. خدمات تکمیلی اختصاصی
                                <br />
                                <br />
                                - بسته‌بندی حرفه‌ای: مطابق استانداردهای بین‌المللی
                                <br />
                                - انبارداری در نقاط استراتژیک: دبی، چین، ایران
                                <br />
                                - پشتیبانی مالی: افتتاح اعتبارات اسنادی (LC)، پرداخت به تأمین‌کنندگان
                                <br />

<br />
                                ---

<br />
                                چرا مشتریان به ما اعتماد می‌کنند؟
                                <br />
                                ✅ یک تیم برای تمام فرآیندها: از استعلام قیمت تا تحویل نهایی
                                <br />
                                ✅ حل چالش‌های پیچیده گمرکی: حتی برای کالاهای با شرایط خاص
                                <br />
                                ✅ شفافیت کامل: گزارش لحظه‌به‌لحظه از وضعیت محموله
                                <br />
                                ✅ پشتیبانی ۲۴ ساعته: حتی در تعطیلات رسمی
                                <br />

<br />
                                ---
                                <br />

<br />

                                کالا ناوگان ابریشم؛ از "صفر" تأمین تا "صد" تحویل!
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default ZeroToHundred;
