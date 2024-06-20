import React, { useEffect, useState } from "react";
import "./footer.scss";
import { NavLink, useHistory } from "react-router-dom";

import { AiOutlineRight, AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import { FiTwitter, FiFacebook, FiInstagram, FiMail } from "react-icons/fi";
// import {BsFacebook} from 'react-icons/bs';
// import {FaInstagramSquare} from 'react-icons/fa';
// import {CgMail} from 'react-icons/cg';

import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showButton, setShowButton] = useState(true);
  const history = useHistory();
  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // console.log(data);
      setUserData({ ...userData, name: data.name, email: data.email });
      // console.log(`data send to backend`);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  /*  USEEFFECT HOOK -> RUN ONLY ONE TIME WHEN FUNCTION IS CALLED -> ARRAY DENOTES -> NO OF TYMS USEEFFECT CALLLS -> callProfilePage is async function -> so we can not use it inside useEffect */

  useEffect(() => {
    userContact();
  }, []);

  const newsLetterSubmitHandler = () => {
    console.log("Handler called");
    history.push("/");
    setShowButton(false);
  };

  return (
    <>
      <div className="footercls">
        <footer id="footer">
          {showButton && (
            <div className="footer-newsletter">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <h4>Приєднуйтесь до нашої розсилки</h4>
                    <p>
                      Дізнавайтеся першими про нові цікаві аукціони, спеціальні
                      події та багато іншого
                    </p>
                    <form onSubmit={newsLetterSubmitHandler}>
                      <input type="email" name="email" value={userData.email} />
                      <input type="submit" value="Subscribe" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>Auction</h3>
                  <p>
                    University
                    <br />
                    Oleg
                    <br />
                    Kiev <br />
                    <br />
                    <strong>Phone:</strong>+380 111111111
                    <br />
                    <strong>Email:</strong> auction@gmail.com
                    <br />
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    {/* <li><NavLink to="/addlot" excat className="nav-link">Add Lot</NavLink></li> */}
                    <li>
                      <AiOutlineRight />{" "}
                      <NavLink to="/" excat className="nav-link">
                        About us
                      </NavLink>
                    </li>
                    <li>
                      <AiOutlineRight />{" "}
                      <NavLink to="/service" excat className="nav-link">
                        Services
                      </NavLink>
                    </li>
                    <li>
                      <AiOutlineRight />{" "}
                      <NavLink to="/contact" excat className="nav-link">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <AiOutlineRight />{" "}
                      <NavLink to="/signin" excat className="nav-link">
                        Sign In
                      </NavLink>
                    </li>
                    <li>
                      <AiOutlineRight />{" "}
                      <NavLink to="/signin" excat className="nav-link">
                        Register
                      </NavLink>
                    </li>
                    <li>
                      <AiOutlineRight />{" "}
                      <NavLink to="/lot" excat className="nav-link">
                        Active Auctions
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Stay Connected</h4>
                  <p>Auction Blogs</p>
                  <div className="social-links mt-3">
                    {}

                    <a
                      href="https://twitter.com/?lang=en"
                      className="nav-link twitter"
                    >
                      <FiTwitter />
                    </a>
                    <a
                      href="https://ua.linkedin.com/"
                      className="nav-link twitter"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      className="nav-link twitter"
                    >
                      <FiInstagram />
                    </a>
                    <a
                      href="https://www.google.com/intl/en/gmail/about/"
                      className="nav-link twitter"
                    >
                      <FiMail />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-4">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Auction</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
