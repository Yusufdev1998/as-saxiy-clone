const Footer = () => {
  return (
    <footer className="footer">
      <section className="features mb-40">
        <div className="container">
          <div className="features__list">
            <a href="/page/about" className="feature__item">
              <div className="feature__img">
                <img
                  className="img-fluid lazyload"
                  data-src="https://asaxiy.uz/custom-assets/images/icons/market.svg"
                  alt="market"
                  loading="lazy"
                  src="https://asaxiy.uz/custom-assets/images/icons/market.svg"
                />
              </div>
              <div className="feature__text">
                <h5>Больше не нужно ходить на базар</h5>
                <p>У нас выгодные цены и доставка до дома</p>
              </div>
            </a>
            <a href="/page/privacy" className="feature__item">
              <div className="feature__img">
                <img
                  className="img-fluid lazyload"
                  data-src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg"
                  alt="delivery"
                  loading="lazy"
                  src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg"
                />
              </div>
              <div className="feature__text">
                <h5>Быстрая доставка</h5>
                <p>Наш сервис удивит вас</p>
              </div>
            </a>
            <a href="/page/rules" className="feature__item">
              <div className="feature__img">
                <img
                  className="img-fluid lazyload"
                  data-src="https://asaxiy.uz/custom-assets/images/icons/return.svg"
                  alt="return"
                  loading="lazy"
                  style={{ maxWidth: "none" }}
                  src="https://asaxiy.uz/custom-assets/images/icons/return.svg"
                />
              </div>
              <div className="feature__text">
                <h5>Удобства для вас</h5>
                <p>
                  Быстрое оформление и гарантия на возврат в случае
                  неисправности
                </p>
              </div>
            </a>
            <a href="/page/usloviya-rassrochki" className="feature__item">
              <div className="feature__img">
                <img
                  className="img-fluid lazyload"
                  data-src="https://asaxiy.uz/custom-assets/images/icons/card.svg"
                  alt="card"
                  loading="lazy"
                  src="https://asaxiy.uz/custom-assets/images/icons/card.svg"
                />
              </div>
              <div className="feature__text">
                <h5>Рассрочка</h5>
                <p>Без предоплаты на 3, 6, 9 и 12 месяцев</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="footer__links">
                      <strong>Информация</strong>
                      <a href="/page/rules">
                        Публичная оферта (Пользовательское соглашение)
                      </a>
                      <a href="/page/oferta-rassrochka">
                        Оферта для покупок в рассрочку
                      </a>
                      <a href="/page/usloviya-rassrochki">Условия рассрочки</a>
                      <a href="/page/delivery">Оплата и доставка товара</a>
                      <a href="/page/refund">Отмена заказа и возврат товара</a>
                      <a href="/page/about">О нас</a>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="footer__links">
                      <strong>Для связи</strong>
                      <a className="address__link" href="tel:+998 71 200 01 05">
                        <img
                          data-src="https://asaxiy.uz/custom-assets/images/phone.svg"
                          className="lazyload"
                          loading="lazy"
                          alt="+998 71 200 01 05"
                          src="https://asaxiy.uz/custom-assets/images/phone.svg"
                        />
                        +998 71 200 01 05{" "}
                      </a>
                      <a className="address__link" href="mailto:info@asaxiy.uz">
                        <img
                          data-src="https://asaxiy.uz/custom-assets/images/mail.svg"
                          className="lazyload"
                          loading="lazy"
                          alt="info@asaxiy.uz"
                          src="https://asaxiy.uz/custom-assets/images/mail.svg"
                        />
                        info@asaxiy.uz{" "}
                      </a>
                      <a className="address__link" href="">
                        <img
                          data-src="https://asaxiy.uz/custom-assets/images/location.svg"
                          className="lazyload"
                          loading="lazy"
                          alt="Чиланзар 3, Ташкент"
                          src="https://asaxiy.uz/custom-assets/images/location.svg"
                        />
                        Чиланзар 3, Ташкент{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="footer__links">
                  <strong>Наш Facebook</strong>
                  <div className="widget-body">
                    <div
                      className="fb-page fb_iframe_widget"
                      data-href="https://www.facebook.com/asaxiyuz/"
                      data-tabs=""
                      data-width=""
                      data-height="180"
                      data-small-header="false"
                      data-adapt-container-width="true"
                      data-hide-cover="false"
                      data-show-facepile="true"
                      fb-xfbml-state="rendered"
                      fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=434&amp;height=180&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fasaxiyuz%2F&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=&amp;width="
                    >
                      <span
                        style={{
                          verticalAlign: "bottom",
                          width: "340px",
                          height: "130px",
                        }}
                      >
                        <iframe
                          name="f3451fd2573d81"
                          width="1000px"
                          height="180px"
                          data-testid="fb:page Facebook Social Plugin"
                          title="fb:page Facebook Social Plugin"
                          frameBorder="0"
                          allowTransparency={true}
                          allowFullScreen={true}
                          scrolling="no"
                          allow="encrypted-media"
                          src="https://www.facebook.com/v5.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2c56d27c4503e8%26domain%3Dasaxiy.uz%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fasaxiy.uz%252Ff1b97895f2a9218%26relation%3Dparent.parent&amp;container_width=434&amp;height=180&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fasaxiyuz%2F&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=&amp;width="
                          style={{border: "none", visibility: "visible", width: "340px", height: "130px"}}
                          className=""
                        ></iframe>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 d-767-none">
            <div className="footer__bottom">
              <div className="row">
                <div className="col-lg-7 col-md-12 mb-3 mb-md-0">
                  <div className="footer__social__list footer__pay__list justify-content-lg-end justify-content-md-center">
                    <strong>Виды оплаты :</strong>
                    <noindex>
                      <a href="/page/rules" rel="nofollow">
                        <img
                          data-src="https://asaxiy.uz/custom-assets/images/click-logo.svg"
                          className="lazyload"
                          loading="lazy"
                          alt="click logo"
                          src="https://asaxiy.uz/custom-assets/images/click-logo.svg"
                        />
                      </a>
                      <a href="/page/rules" rel="nofollow">
                        <img
                          data-src="https://asaxiy.uz/custom-assets/images/payme.svg"
                          className="lazyload"
                          loading="lazy"
                          alt="payme logo"
                          src="https://asaxiy.uz/custom-assets/images/payme.svg"
                        />
                      </a>
                      <a href="/page/rules" rel="nofollow">
                        <img
                          data-src="https://asaxiy.uz/custom-assets/images/visa.svg"
                          className="lazyload"
                          loading="lazy"
                          alt="visa logo"
                          src="https://asaxiy.uz/custom-assets/images/visa.svg"
                        />
                      </a>
                      <a href="/page/rules" rel="nofollow">
                        <img
                          data-src="https://asaxiy.uz/custom-assets/images/mastercard.svg"
                          className="lazyload"
                          loading="lazy"
                          alt="mastercard logo"
                          src="https://asaxiy.uz/custom-assets/images/mastercard.svg"
                        />
                      </a>
                      <a href="/page/rules" rel="nofollow">
                        <img
                          data-src="https://asaxiy.uz/custom-assets/images/humo.svg"
                          className="lazyload"
                          loading="lazy"
                          alt="humo logo"
                          src="https://asaxiy.uz/custom-assets/images/humo.svg"
                        />
                      </a>
                      <a href="/page/rules" rel="nofollow">
                        <img
                          data-src="https://asaxiy.uz/custom-assets/images/uzcard.svg"
                          className="lazyload"
                          loading="lazy"
                          alt="uzcard logo"
                          src="https://asaxiy.uz/custom-assets/images/uzcard.svg"
                        />
                      </a>
                    </noindex>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="footer__social__list justify-content-lg-start justify-content-md-center">
                    <strong>Мы в соц. сетях :</strong>
                    <noindex>
                      <a
                        href="https://www.facebook.com/asaxiy/"
                        target="_blank"
                        rel="nofollow"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href="https://t.me/asaxiyuz"
                        target="_blank"
                        rel="nofollow"
                      >
                        <i className="fab fa-telegram-plane"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/asaxiyshop/"
                        target="_blank"
                        rel="nofollow"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UC0UaPm4AlSkAU7U88H8jhhQ"
                        target="_blank"
                        rel="nofollow"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </noindex>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 text-center d-none d-md-block">
              <p className="site__creator mb-0">
                2015-2022 Интернет-магазин asaxiy.uz: Бытовая техника и др.
                Доставка товаров осуществляется во все регионы. Все права
                защищены.
              </p>
            </div>
          </div>
        </div>
        <div className="responsive__footer">
          <div className="footer__social__list">
            <strong>Мы в соц. сетях:</strong>
            <a href="https://facebook.com/asaxiyuz/" rel="nofollow">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://t.me/asaxiyuz" rel="nofollow">
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a href="https://instagram.com/asaxiy.uz/" rel="nofollow">
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UC0UaPm4AlSkAU7U88H8jhhQ"
              rel="nofollow"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="footer__social__list footer__pay__list">
            <a href="/page/rules">
              <img
                data-src="/custom-assets/images/click-logo.svg"
                className="lazyload"
                loading="lazy"
                alt="click logo"
              />
            </a>
            <a href="/page/rules">
              <img
                data-src="/custom-assets/images/payme.svg"
                className="lazyload"
                loading="lazy"
                alt="payme logo"
              />
            </a>
            <a href="/page/rules">
              <img
                data-src="/custom-assets/images/visa.svg"
                className="lazyload"
                loading="lazy"
                alt="visa logo"
              />
            </a>
            <a href="/page/rules">
              <img
                data-src="/custom-assets/images/humo.svg"
                className="lazyload"
                loading="lazy"
                alt="humo logo"
              />
            </a>
            <a href="/page/rules">
              <img
                data-src="/custom-assets/images/uzcard.svg"
                className="lazyload"
                loading="lazy"
                alt="uzcard logo"
              />
            </a>
          </div>
          <p className="site__creator">
            2015-2022 Интернет-магазин asaxiy.uz: Бытовая техника и др. Доставка
            товаров осуществляется во все регионы. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
