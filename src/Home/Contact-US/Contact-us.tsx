import React from "react";
import "./Contact-us.css";
import { Button } from "react-bootstrap";
import PageWrapper from "../../PageWrapper";
const ContactUs = () => {
  return (
    <PageWrapper>
      <div className="text-center contact-Us">
        <div className="container">
          <div className="row">
            <h1 className="mt-5 contact-h1">ارتباط با ما</h1>
            <p className="mt-3 contact-p">
              همیشه برای شما بر خط هستیم چطور میتونیم کمکتون کنیم؟
            </p>
            <form action="">
              <input
                type="text"
                className="form-control mt-4"
                placeholder="نام و نام خانوادگی"
                required
              />
              <input
                type="text"
                className="form-control mt-4"
                placeholder="شماره تماس"
                required
              />
              <input
                type="email"
                className="form-control mt-4"
                placeholder="پست الکترونیکی"
                required
              />
              <textarea
                className="form-control mt-4"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="پیام خود را وارد کنید..."
                required
              ></textarea>
              <Button className="nav-buttons mt-5 mb-5" type="submit">
                ارسال پیام{" "}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactUs;
