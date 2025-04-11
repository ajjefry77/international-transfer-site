import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import PageWrapper from "../../PageWrapper";
import { Helmet } from "react-helmet-async";
import { t } from "i18next";
import { LangContext } from "../../contexts/langContext";
import Swal from "sweetalert2";
const ReqConditions = () => {
    const { lang, setLang } = useContext(LangContext);

    return (
        <PageWrapper>
            <Helmet>
                <title>شرایط ثبت درخواست</title>
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
                            <h1 className="mt-5 contact-h1">شرایط ثبت درخواست</h1>
                            <p className="mt-3 text-end">
                                **شرایط ثبت سفارش و ایجاد حساب کاربری در کالا ناوگان ابریشم**
                                <br/>
                                **🔹 نحوه ثبت سفارش و ایجاد حساب:**
                                <br/>
                                1. با ثبت درخواست در سایت، **به‌صورت خودکار یک حساب کاربری** برای شما ایجاد می‌شود.
                                <br/>
                                2. **رمز عبور موقت** به آدرس ایمیل شما ارسال خواهد شد.
                                <br/>
                                3. پس از ورود به حساب، می‌توانید **رمز عبور خود را تغییر دهید**.
                                <br/>

                                **🔹 توجه مهم (مطابق با قوانین حریم خصوصی و GDPR):**
                                <br/>
                                - ایجاد حساب خودکار **صرفاًه برای تسهیل فرآیند پیگیری سفارش** است.
                                <br/>
                                - شما می‌توانید در صورت تمایل، **از طریق پنل کاربری خود حساب را غیرفعال کنید**.
                                <br/>
                                - اطلاعات شما **محرمانه باقی می‌ماند** و فقط برای امور مرتبط با سفارش استفاده می‌شود.
                                <br/>

                                **🔹 گزینه‌های جایگزین برای کاربرانی که تمایلی به حساب خودکار ندارند:**
                                <br/>
                                ✅ ارسال درخواست بدون ساخت حساب (از طریق واتساپ/تلگرام)
                                <br/>

                                ✅ تماس با پشتیبانی برای ثبت دستی سفارش
                                <br/>
                                **📌 ما احترام به حریم شخصی شما را جدی می‌گیریم!**
                                <br/>
                                در صورت هرگونه نگرانی، با پشتیبانی فنی ما تماس بگیرید.
                                <br/>

                                ---
                                <br/>
                                **📞 راه‌های ارتباطی:**
                                <br/>
                                پشتیبانی 24/7: [شماره تماس]
                                <br/>
                                واتساپ: [لینک چت]
                                <br/>
                                ایمیل: support@sillkfleet.com
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default ReqConditions;
