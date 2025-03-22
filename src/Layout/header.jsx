import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Layout.css";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import * as Router from "react-router-dom";
import Cookies from "js-cookie";

function Header() {
  const navigate = useNavigate();
  const location = Router.useLocation();
  const cookie = Cookies.get('token')

  const hideHeaderFooter = location.pathname == "/auth";
  const handleSendReq = () => {
    if(cookie){
      navigate("/userPanel")
    }else{
      navigate("/auth")
    }
  };
  return (
    <>
      {!hideHeaderFooter && (
        <div className="container-fluid">
          <div className="row">
            <Navbar expand="xl" className="navBar">
              <Container fluid>
                <Navbar.Brand href="/">
                  <img
                    src={require("../images/Logo.jpg")}
                    alt=""
                    width={"50px"}
                    style={{ borderRadius: "1000px" }}
                  />
                  شرکت کالا ناوگان ابریشم{" "}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-xl`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                  placement="end"
                >
                  <Offcanvas.Header>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                      خدمات شرکت
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                      <NavDropdown
                        title="حمل و نقل"
                        id={`offcanvasNavbarDropdown-expand-xl`}
                        className="nav-links"
                      >
                        <NavDropdown.Item className="dropDown-items">
                          جاده ای
                        </NavDropdown.Item>
                        <NavDropdown.Item className="dropDown-items">
                          دریایی
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="dropDown-items">
                          <Link to={"/map"} className="drop-Links rubik">
                            درخواست حمل و نقل
                          </Link>
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown
                        title="محصولات"
                        id={`offcanvasNavbarDropdown-expand-xl`}
                        className="nav-links"
                      >
                        <NavDropdown.Item
                          href="#action3"
                          className="dropDown-items text-end"
                        >
                          پتروشیمی
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="#action4"
                          className="dropDown-items text-end"
                        >
                          مواد غذایی
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="dropDown-items">
                          <Link to={"/Products"} className="drop-Links rubik">
                            {" "}
                            مشاهده تمامی محصولات
                          </Link>
                        </NavDropdown.Item>
                      </NavDropdown>

                      
                        <Link to={""} className="head-Links nav-links">
                          وبلاگ
                        </Link>
                      

                      
                        <Link to={"/aboutUs"} className="head-Links nav-links">
                          درباره ما
                        </Link>
                      

                      
                        <Link to={"/contactUs"} className="head-Links nav-links">
                          ارتباط با ما
                        </Link>
                     

                    </Nav>

                    <Button className="nav-buttons" onClick={handleSendReq}>
                      ثبت درخواست
                    </Button>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
