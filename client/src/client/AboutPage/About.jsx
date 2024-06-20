import React from "react";
import Img from "../images/values-1.png";
import Img2 from "../images/values-3.png";
import Img3 from "../images/features.png";
import About3 from "../images/about3.jpg";

import About1 from "../images/about1.jpg";

import About4 from "../images/about4.png";
import Team from "../images/team.png";
import Loader from "../Loader/Loader";
import { FcNext } from "react-icons/fc";
import MetaData from "../MetaData/MetaData";

import "./aboutstyle.scss";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <MetaData title="ABOUT US"></MetaData>
      {/* <h1>Welcome About Page</h1> */}

      <div className="container-fluid nav_bg abtcls">
        <div className="row">
          <div className="col-10 mx-auto">
            <section id="values" className="values">
              <div className="container" data-aos="fade-up">
                {/* <header className="section-header">
                  <h2>About Us</h2>
                  <p>Nonprofit Auction Software</p>
                </header> */}

                <div className="section-title" data-aos="fade-up">
                  <h2>About Us</h2>
                  <p></p>
                </div>

                <div className="row abtclssection">
                  <div
                    className="col-lg-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="box">
                      <img src={About4} className="img-fluid" alt="" />
                      <h3>Mission</h3>
                      <p>
                        Аукціон у фізичному режимі - це якась складна річ. Люди
                        не можуть продавати продукт глобально. Треба їхати на
                        місце проведення аукціону. За допомогою цього додатку
                        людина з хорошим інтернетом може легко продати свій
                        товар через торги.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 mt-4 mt-lg-0"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="box">
                      <img src={About3} className="img-fluid" alt="" />
                      <h3>Ease of Use</h3>
                      <p>
                        Результат може бути отриманий дуже легко через веб-сайт,
                        без втручання третіх осіб. Всі продавці та учасники
                        торгів перевіряються нашою системою.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 mt-4 mt-lg-0"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className="box">
                      <img src={About1} className="img-fluid" alt="" />
                      <h3>Mordern Web</h3>
                      <p>
                        Наш веб-додаток має функцію фільтрації: клієнт або
                        учасник торгів може відфільтрувати його за власним
                        вибором
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* WHY-US */}

            <section id="why-us" className="why-us section-bg">
              <div className="container-fluid" data-aos="fade-up">
                <div className="section-title" data-aos="fade-up">
                  <h2>FAQ'S</h2>
                  <p></p>
                </div>

                <div className="row">
                  <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                    <div className="content">
                      <h3>
                        <strong>
                          {" "}
                          Ми створили список поширених запитань, які ми отримали
                          від учасників
                        </strong>
                      </h3>
                      <p>
                        Якщо ви не знайшли свою відповідь на цій сторінці, будь
                        ласка, зв'яжіться з нами, і ми вирішимо ваші питання.
                      </p>
                    </div>

                    <div className="accordion-list">
                      <ul>
                        <li>
                          <a
                            data-bs-toggle="collapse"
                            className="collapse"
                            data-bs-target="#accordion-list-1"
                          >
                            <span>01</span>
                            Інформація про аукціон та ставки{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="accordion-list-1"
                            className="collapse show"
                            data-bs-parent=".accordion-list"
                          >
                            <p>
                              Команда Аукціону придумала створити платформу для
                              продавців, які хочуть продати свій товар на
                              аукціоні і отримати найкращу ціну. Наша команда
                              перевіряє всіх користувачів. Команда сайту
                              намагається зробити цю платформу на 100% безпечною
                              та надійною.
                            </p>
                          </div>
                        </li>

                        <li>
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-list-2"
                            className="collapsed"
                          >
                            <span>02</span> Через кого можна виставити майно на
                            аукціон{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="accordion-list-2"
                            className="collapse"
                            data-bs-parent=".accordion-list"
                          >
                            <p>
                              Будь-яка фізична особа, установи, банки та
                              державні установи можуть брати участь в аукціоні.
                              Фізичні особи повинні надати всю інформацію, яку
                              може вимагати RBS, у спосіб, який вимагається.
                              Банки та установи можуть виставляти майно на
                              аукціони згідно з відповідними законами та
                              правилами. Унікальний ідентифікатор користувача та
                              пароль будуть надані Уповноваженому співробітнику
                              Банку/Установи лише з метою забезпечення безпеки.
                              Між ДБО та Установами буде укладено Угоду про
                              рівень обслуговування (SLA).
                            </p>
                          </div>
                        </li>

                        <li>
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-list-3"
                            className="collapsed"
                          >
                            <span>03</span>
                            Як отримати контактну інформацію?
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="accordion-list-3"
                            className="collapse"
                            data-bs-parent=".accordion-list"
                          >
                            <p>
                              Зареєструвавши продавця з його реквізитами, ми
                              отримали його дані, і після перевірки дані
                              продавця будуть доступні на його аукціоні, коли
                              аукціон закінчиться, продавець отримає інформацію
                              про учасника торгів, а також історію ставок, і
                              користувач зможе зв'язатися з продавцем.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className="col-lg-5 align-items-stretch order-1 order-lg-2 img bgimgctrl"
                    style={{ backgroundImage: `url(${Img2})` }}
                    data-aos="zoom-in"
                    data-aos-delay="150"
                  >
                    &nbsp;
                  </div>
                </div>
                {/* <img src={Img2} className="img-fluid" alt="" /> */}
              </div>
            </section>

            {/* END WHY US */}

            {/*  About Writtern */}
            <section id="about" className="about">
              <div className="container sectionfivecls" data-aos="fade-up">
                <div className="section-title">
                  <h2>Our Values</h2>
                  <p></p>
                </div>

                <div className="row content ourvaluescls">
                  <div className="col-lg-6">
                    <p>
                      <FcNext />
                      Щодня люди будують бізнес на електронних аукціонах.
                      Неприбуткові організації збирають життєво необхідні кошти.
                      Підприємці отримують нові навички та доступ до нових
                      ринків, де вони можуть перетворити свої мрії та ідеї на
                      бізнес-успіх.
                    </p>
                    <p>
                      <FcNext /> eAuction створює надихаючий досвід електронної
                      комерції для наших покупців, продавців та розробників.
                    </p>
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0">
                    <p>{/*<FcNext />*/}</p>
                    <NavLink to="/" className="btn-learn-more">
                      Learn More
                    </NavLink>
                  </div>
                </div>
              </div>
            </section>
            {/*  End About Section */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
