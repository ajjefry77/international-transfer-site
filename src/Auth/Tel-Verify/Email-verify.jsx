import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Tel-verify.css";
import { Link, useNavigate } from "react-router-dom";
import { MainContext } from "../../Content";
import PageWrapper from "../../PageWrapper";

const EmailVerify = () => {
  const navigate = useNavigate();

  const handleVerified = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <PageWrapper>

      <div>

        <div className="d-flex justify-content-center">
          <div className="form d-flex justify-content-center">

            <h1></h1>

            <Button type="submit" id="sign-button" onClick={handleVerified}>
              متوجه شدم
            </Button>
          </div>
        </div>
      </div>



    </PageWrapper>
  );
};

export default EmailVerify;
