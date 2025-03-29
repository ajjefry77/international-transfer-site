import "./Sign-in.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import PageWrapper from "../../PageWrapper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function SignIn(props) {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  

  const handleSetTelCode = async(event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://silkfleet.com/php/SignIn.php", {fullName , phone , email , password});
      setMessage(()=>{
        const newValue = response.data.message
        Cookies.set('token', newValue, { expires: 7, path: '' });
        return newValue
      })
    } catch (error) {
      console.error("Error:", error);
      setMessage("خطا ارسال درخواست");
    }

    if (fullName !== '' && phone !== '' && email !== '' && password !== '') {
      renderMessage()
    } else {
      Swal.fire({
        icon: "error",
        title: "لطفا تمام فیلد ها پر کنید",
        confirmButtonText: "متوجه شدم",
      });
    }
  };

  const renderMessage = () => {   
    if(message == 4){
      Swal.fire({
        icon: "error",
        title: " شماره همراه اشتباه است ",
        confirmButtonText: "متوجه شدم",
      });
    }else if(message == 3){
      Swal.fire({
        icon: "error",
        title: " این شماره در سیستم موجود است ",
        confirmButtonText: "متوجه شدم",
      });
    }else if(message == 2){
      Swal.fire({
        icon: "error",
        title: " این ایمیل در سیستم موجود است ",
        confirmButtonText: "متوجه شدم",
      });
    }else{ 

      Swal.fire({
        icon: "success",
        title: " با موفقیت وارد شدید ",
        confirmButtonText: "متوجه شدم",
      });
      
      setTimeout(
        function() {
          // navigate('/userPanel')
         
        }, 1500);
    }
  };


  

  return (
    <PageWrapper>
      <div>
        <div className="text-center">
          <h3>ثبت نام</h3>
          <p>خوش آمدید برای ثبت نام فیلد های زیر را پر کنید</p>

          <form>
            <div className="mb-3 text-end">
              <label className="form-label">نام و نام خانوادگی:</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="fullName"
                placeholder=""
                required
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
            </div>

            <div className="mb-3 text-end  ">
              <label className="form-label">شماره همراه:</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=""
                required
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                name = "phone"
              />
            </div>

            <div className="mb-3 text-end  ">
              <label className="form-label">پست الکترونیکی:</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=""
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name = "email"
              />
            </div>

            <div className="mb-3 text-end position-relative">
              <label className="form-label">رمز عبور:</label>
              <div className="password">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control text-end pass-inp"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=""
                  required
                  name = "password"
                />
                <button
                  className="btn pass-btn"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>

            <Button type="submit" id="sign-button" onClick={handleSetTelCode}>
              ثبت نام
            </Button>
            <br></br>
            <br></br>
            <span>{}</span>
            {/* <span>{}</span> */}
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}

export default SignIn;
