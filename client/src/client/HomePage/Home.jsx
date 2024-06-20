import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import { FaBeer } from "react-icons/fa";
import { MdSecurity, MdEventAvailable } from "react-icons/md";

import Img from "../images/values-1.png";
import Img4 from "../images/arrow-310633_960_720.png";
import BidImg from "../images/values-3.png";
import Auction1 from "../images/auction1.png";

import "./homestyle.scss";
import MetaData from "../MetaData/MetaData";
import Product from "./Product";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  // console.log(productCount);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="AUCTION"></MetaData>
          <section id="header" className="d-flex align-items-center homepg">
            <div className="container-fluid nav_bg">
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div
                      className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <h1>
                        {" "}
                        Робіть ставки та продавайте товари за допомогою{" "}
                        <strong className="brand-name">
                          <br />
                          Online Auction
                        </strong>
                      </h1>

                      <h2 className="my-3">
                        Онлайн-аукціон – це аукціон, який проводиться через
                        Інтернет, що дозволяє користувачам продавати або
                        купувати товари та послуги онлайн.
                      </h2>
                      <div className="mt-3">
                        <NavLink to="/signup" className="btn-get-started">
                          Get Started
                        </NavLink>
                      </div>
                    </div>

                    <div
                      className="col-lg-6 order-1 order-lg-2 header-img "
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <img
                        src={Auction1}
                        className="img-fluid animated hedrimg"
                        alt="auction img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Home Section 2 */}

          <div className="container-fluid nav_bg sectiontwocls">
            <div className="row">
              <div className="col-10 mx-auto">
                <section className="section">
                  <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                      <div className="col-md-5" data-aos="fade-up">
                        <h2 className="section-heading">
                          Зручний для користувача веб-сайт
                        </h2>
                      </div>
                    </div>

                    <div className="row">
                      <div
                        className="col-md-4"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <div className="feature-1 text-center">
                          <div className="wrap-icon icon-1">
                            <div className="hmicn">
                              <MdSecurity />
                            </div>
                          </div>
                          <h3 className="mb-3">Безпека</h3>
                          <p>
                            Всі продавці повинні бути перевірені через нашу
                            систему. Дані вашого облікового запису захищені.
                            Пароль користувача буде зашифрований. Ви можете
                            безпечно робити ставки без втручання третіх осіб.
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-md-4"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        <div className="feature-1 text-center">
                          <div className="wrap-icon icon-1">
                            <div className="hmicn">
                              <MdEventAvailable />
                            </div>
                          </div>
                          <h3 className="mb-3">Доступність</h3>
                          <p>
                            Веб-додаток доступний 24*7. Користувач може увійти
                            та зареєструватися на сайті в будь-який час. Деякі
                            лоти будуть доступні лише протягом певного часу,
                            визначеного продавцем.
                          </p>
                        </div>
                      </div>

                      <div
                        className="col-md-4"
                        data-aos="fade-up"
                        data-aos-delay="500"
                      >
                        <div className="feature-1 text-center">
                          <div className="wrap-icon icon-1">
                            <div className="hmicn">
                              <FaBeer />
                            </div>
                          </div>
                          <h3 className="mb-3">Гнучкість</h3>
                          <p>
                            Продавець може миттєво оновлювати/додавати/видаляти
                            дані про товар. Прості кроки, щоб продати свій товар
                            на аукціоні. Користувач може легко оновити свій
                            профіль.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Home Section 2-3 */}

                {/* <div className='arrowimg'>
<img src={Img4} alt="Auction Image" className="img-fluid"/>
           
           <h1> Follow This Path </h1>
</div>
 */}

                {/* Home Section 3 */}

                <section className="section secthreecls">
                  <div className="container">
                    <div
                      className="row justify-content-center text-center mb-5 homeimgcls"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <div className="col-md-6 mb-5 flwpthcls">
                        <img
                          src={Img4}
                          alt="Auction Image"
                          className="img-fluid"
                        />
                        <h1> Follow This Path </h1>
                        {/* <strong className='brand-name'><br/>Follow This Path</strong> */}
                        {/* <strong className='brand-name'><br/> Follow This Path</strong> */}
                      </div>
                    </div>

                    {/* 
        <div className="row justify-content-center text-center mb-5 homeimgcls" data-aos="zoom-in" data-aos-delay="200">
          
          <div className="col-md-6 mb-5">
            <img src={Img} alt="Auction Image" className="img-fluid"/>
          </div>
        </div> */}

                    <div className="row">
                      <div className="col-md-4">
                        <div
                          className="step"
                          data-aos="fade-up"
                          data-aos-delay="300"
                        >
                          <span className="number">01</span>
                          <h3>Створити профіль</h3>
                          <p>
                            Зареєструйтеся на нашому сайті та створіть свій
                            профіль користувача.{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div
                          className="step"
                          data-aos="fade-up"
                          data-aos-delay="400"
                        >
                          <span className="number">02</span>
                          <h3>Sign In</h3>
                          <p>
                            Вкажіть правильний ідентифікатор користувача, пароль
                            та логін
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div
                          className="step"
                          data-aos="fade-up"
                          data-aos-delay="500"
                        >
                          <span className="number">03</span>
                          <h3>Насолоджуйтесь додатком</h3>
                          <p>Продавайте та купуйте товари за найкращою ціною</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="section secfourcls">
                  <div className="container">
                    <div className="row align-items-center crtlot">
                      <div
                        className="col-md-4 me-auto"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        <h2 className="mb-4">Створіть лот</h2>
                        <p className="mb-4">
                          Всю дійсну інформацію, пов'язану з товаром, що
                          виставляється на торги, тобто назву лоту, опис товару,
                          категорію товару, дату торгів, мінімальну ціну, час
                          закінчення торгів, спосіб оплати, зображення товару.
                        </p>
                        <p>
                          <a href="#" className="btn btn-primary">
                            Get Started
                          </a>
                        </p>
                      </div>
                      <div
                        className="col-md-6"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                      >
                        <img
                          src={Img}
                          alt="Auction Image"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <section className="section">
                  <div className="container">
                    <div className="row align-items-center">
                      <div
                        className="col-md-4 ms-auto order-2"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        <h2 className="mb-4">Зробити ставку</h2>
                        <p className="mb-4">
                          Клієнт побачить детальну інформацію про товар, і якщо
                          він зацікавлений у ньому, то зробить ставку на цей
                          товар, підтвердивши свою особу дійсним документом, що
                          посвідчує особу
                        </p>
                        <p>
                          <a href="#" className="btn btn-primary">
                            Get Started
                          </a>
                        </p>
                      </div>
                      <div
                        className="col-md-6"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                      >
                        <img
                          src={BidImg}
                          alt="Auction Image"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* PRODUCT COMPONENT */}

          {/* FEATURED PRODUCT */}

          <section className="product_section layout_padding">
            <div className="container">
              <div className="heading_container heading_center">
                <div className="section-title" data-aos="fade-up">
                  <h2>Featured Auctions</h2>
                  <p>Почніть торги зараз!</p>
                </div>
              </div>
              <div className="row">
                {products &&
                  products.map((product) => <Product product={product} />)}
              </div>
              <div className="btn_box">
                <NavLink excat to={"/lot"} className="view_more-link">
                  View More
                </NavLink>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
