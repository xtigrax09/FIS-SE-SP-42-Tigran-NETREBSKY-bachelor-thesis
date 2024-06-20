import React from "react";
import "./servicestyle.scss";
import MetaData from "../MetaData/MetaData";

import Img from "../images/values-1.png";
import Team from "../images/team.png";

import { NavLink } from "react-router-dom";
import { MdSell, MdLocalShipping } from "react-icons/md";
import { AiFillUpCircle } from "react-icons/ai";

const Service = () => {
  return (
    <>
      <MetaData title="SERVICES"></MetaData>
      {/* Component 1 */}

      <section id="header1" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row firstele">
            <div className="col-10 mx-auto">
              <div className="row srvccls">
                <div
                  className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <h1>
                    {" "}
                    <strong className="brand-name">Our Team</strong>
                  </h1>
                  <h2 className="my-3">
                    Команда сайту придумала створити платформу для продавців,
                    які хочуть продати свій товар на аукціоні і отримати
                    найкращу ціну. Наша команда перевіряє всіх користувачів.
                    Команда намагається зробити цю платформу на 100% безпечною
                    та надійною.
                  </h2>
                </div>

                <div
                  className="col-lg-6 order-1 order-lg-2 header-img imgabtcls"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <img
                    src={Team}
                    className="img-fluid animated imgabt"
                    alt="auction img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conponent 2 */}

      <section id="header1" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row srvccls">
                <div
                  className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h1>
                    {" "}
                    <strong className="brand-name">Our Vision</strong>
                  </h1>

                  <h2 className="my-3">
                    Аукціон у фізичному режимі не викликає особливих труднощів.
                    Крім того, продавці не можуть виставити свій товар на продаж
                    в глобальному масштабі. Тому команда сайту прийшла з
                    баченням, щоб виставити свій товар на глобальний
                    онлайн-аукціон і отримати найкращу ціну
                  </h2>
                </div>

                <div
                  className="col-lg-6 order-1 order-lg-1 header-img2 "
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <img
                    src={Img}
                    className="img-fluid animated"
                    alt="auction img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Service Section */}

      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <section id="services" className="services">
              <div className="container">
                <div className="section-title" data-aos="fade-up">
                  <h2>Services</h2>
                  <p>
                    Мета системи - створити систему онлайн-аукціонів з належною
                    безпекою
                  </p>
                </div>

                <div className="row">
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="icon">
                        {" "}
                        <div className="fabrsicn">
                          <MdSell />
                        </div>
                      </div>
                      <h4 className="title">
                        <NavLink to="">Availability</NavLink>
                      </h4>
                      <p className="description">
                        Веб-додаток доступний 24*7. Користувач може увійти та
                        зареєструватися на сайті в будь-який час. Лоти товару
                        будуть доступні лише протягом визначеного часу за
                        рішенням продавця
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="icon">
                        <div className="fabrsicn">
                          <MdLocalShipping />
                        </div>
                      </div>
                      <h4 className="title">
                        <NavLink to="">Flexibility</NavLink>
                      </h4>
                      <p className="description">
                        Продавець може миттєво оновлювати/додавати/видаляти дані
                        про товар. Як тільки продавець зробить будь-яке
                        оновлення, база даних буде оновлена
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <div className="icon">
                        <div className="fabrsicn">
                          <AiFillUpCircle />
                        </div>
                      </div>
                      <h4 className="title">
                        <NavLink to="">Reliability</NavLink>
                      </h4>
                      <p className="description">
                        Зручний веб-сайт. Через розділ «help/contact» користувач
                        може отримати будь-яку допомогу в разі потреби.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div
                      className="icon-box"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <div className="icon">
                        <div className="fabrsicn">
                          <MdSell />
                        </div>
                      </div>
                      <h4 className="title">
                        <NavLink to="">Security</NavLink>
                      </h4>
                      <p className="description">
                        Всі продавці повинні бути перевірені через нашу систему.
                        Дані вашого облікового запису захищені. Пароль
                        користувача буде зашифрований. Ви можете безпечно робити
                        ставки без втручання третіх осіб.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
