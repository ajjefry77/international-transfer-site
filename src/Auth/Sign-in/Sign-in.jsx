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

  const renderMessage = () => {   
    if(message == 4){
      // return <p>شماره صحیح نیست</p>;
      console.log(message)
    }else if(message == 3){
      
      console.log(message)
    }else if(message == 2){
      console.log(message)
    }else{
      Cookies.set('token', message, { expires: 7, path: '' });
      setTimeout(
        function() {
          window.location.href = "/userPanel";
         
        }, 1500);

        console.log(message)
    }
  };

  const handleSetTelCode = async(event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://silkfleet.com/php/SignIn.php", {fullName , phone , email , password});
      setMessage(()=>{
        const newValue = response.data.message
        return newValue
      }); // نمایش پیام برگشتی از سرور
    } catch (error) {
      console.error("Error:", error);
      setMessage("خطا ارسال درخواست");
    }

    if (fullName != '' && phone != '' && email != '' && password != '') {
      renderMessage()
    } else {
      Swal.fire({
        icon: "error",
        title: "لطفا تمام فیلد ها پر کنید",
        confirmButtonText: "متوجه شدم",
      });
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
