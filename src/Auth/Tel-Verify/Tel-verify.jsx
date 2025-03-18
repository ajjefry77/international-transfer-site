import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Tel-verify.css";
import { Link, useNavigate } from "react-router-dom";
import { MainContext } from "../../Content";
import PageWrapper from "../../PageWrapper";

const TelVerify = () => {
  const [counter, setCounter] = useState(60);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const { signedIn, setSignedIn } = useContext(MainContext);

  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
    } else {
      setDisabled(false);
    }

    return () => clearInterval(timer);
  }, [counter]);

  const handleResend = () => {
    setCounter(60);
    setDisabled(true);
  };

  const handleVerified = (e) => {
    e.preventDefault();
    setSignedIn((prev) => {
      const newValue = !prev;
      localStorage.setItem("signedIn", JSON.stringify(newValue));
      return newValue;
    });
    navigate("/");
  };
  return (
    <PageWrapper>
      <div>
        <div className="text-center">
          <img src={require("../../icons/tel.png")} alt="" />
          <h3 className="mt-5">تایید شماره همراه</h3>
          <p className="mt-3">
            لطفا کد تایید ارسال شده به 09207008636 را وارد نمایید
          </p>
          <hr id="tel-hr" />

          <form>
            <div className="mb-3 text-center  ">
              <Link to={"/Auth"} id="tel-link">
                <img src={require("../../icons/Phone.png")} alt="" />
                ویرایش شماره همراه
              </Link>
              <input
                type="text"
                className="form-control text-center mt-3"
                id="exampleFormControlInput1"
                placeholder="*****"
                required
              />
            </div>

            <div className="text-center mt-3">
              <button
                id="resend-code"
                onClick={handleResend}
                disabled={disabled}
              >
                ارسال مجدد کد تا {counter} ثانیه دیگر
              </button>
            </div>
            <Button type="submit" id="sign-button" onClick={handleVerified}>
              ثبت نام
            </Button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TelVerify;
