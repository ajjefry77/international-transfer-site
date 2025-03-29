import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { MainContext } from "../../Content";
import PageWrapper from "../../PageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import axios from "axios";
import Cookies from 'js-cookie';

function Login() {
  const navigate = useNavigate();
  const { signedIn, setSignedIn } = useContext(MainContext);
  const [message, setMessage] = useState();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  

  

  const handleCheck = async(e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://silkfleet.com/php/login.php", {phone , password});
      setMessage(() => {
        const newValue = response.data.message
        console.log(newValue)
        return newValue
      }); // نمایش پیام برگشتی از سرور


    } catch (error) {
      console.error("Error:", error);
      setMessage("خطا ارسال درخواست");
    }


  };

  const renderMessage = () => {

    if (message == false)

      return <p>اطلاعات صحیح نمی باشد</p>;

    else if (message == undefined){
        // nothing
    }else {
      Cookies.set('token', message, { expires: 7, path: '' });
        setTimeout(
          function() {
            message == 'svLlm6snZu9t' ? (navigate('/adminPanel')) : (navigate('/userPanel'))
           
          }, 1500);


          return (
          <p>با موفقیت وارد شدید</p>

        )
    }
  };

  


  return (
    <PageWrapper>
      <div>
        <div className="text-center">
          <h3>ورود به حساب</h3>
          <p className="mt-3">اگه حساب داری از اینجا میتونی وارد بشی</p>
          <form>
            <div className="mb-3 text-end">
              <p>
                <img src={require("../../icons/Phone.png")} alt="" />
                شماره همراه:
              </p>
              <input
                type="text"
                className="form-control mt-3"
                id="exampleFormControlInput1"
                placeholder=""
                required
                onChange={(e) => setPhone(e.target.value)}
                value = {phone}
                name = "phone"
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

            <Button type="submit" id="sign-button" onClick={handleCheck}>
              ورود
            </Button>
            <br></br>
            <br></br>
            <span>
              {renderMessage()}
            </span>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Login;
