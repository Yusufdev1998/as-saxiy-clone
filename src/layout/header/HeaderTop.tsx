import BasicLink from "../../components/BasicLink";

const HeaderTop = () => {
  return (
    <div className="header__top position-relative">
      <div className="container">
        <div className="header__top-group">
          <a href="logo" className="header__logo">
            <img
              src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
              alt="brand"
              className="img-fluid"
            />
          </a>

          <div className="header__search">
            <form
              id="searchForm"
              className="position-relative form-search"
              action="/product"
            >
              <input
                id="key"
                name="key"
                autoComplete="off"
                type="text"
                className="search-input"
                placeholder="Поиск..."
              />
              <button
                type="submit"
                className="btn btn-primary header__search__btn shadow-none"
              >
                <img src="https://asaxiy.uz/custom-assets/images/search-icon.svg" />
                Искать
              </button>
              <div
                className="instant__results"
                style={{ display: "block", height: "auto" }}
              ></div>
            </form>
          </div>
          <div className="header__top-list">
            <noindex>
              <a
                href="/order-pay"
                className="header__top__link"
                title="Оплатить"
                rel="nofollow"
              >
                <img
                  className="header__top__link--img"
                  src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg"
                  alt=""
                />
                <span>Оплатить</span>
              </a>
            </noindex>
            <noindex>
              <a
                href="/order-status"
                className="header__top__link"
                title="Отследить заказ"
                rel="nofollow"
              >
                <img
                  className="header__top__link--img"
                  src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg"
                  alt=""
                />
                <span>Отследить</span>
              </a>
            </noindex>
            <div className="dropdown lang-dropdown">
              <button
                type="button"
                className="header__top__link header__top__link--lang  dropdown-toggle btn h-lang"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="header__top__link--img"
                  src="https://asaxiy.uz/custom-assets/images/icons/header/language.svg"
                />
                <span>Русский</span>
              </button>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="/?language=uz">O'zbekcha</a>
                </li>
                <li className="dropdown-item">
                  <a href="/?language=ru">Русский</a>
                </li>
              </ul>
            </div>

            <div className="dropdown cart_dropdown">
              <button
                type="button"
                className="header__top__link header__top__link--cart btn h-cart"
              >
                <img
                  className="header__top__link--img"
                  src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg"
                />
                <span>Корзинка</span>
                <span id="cart-count" className="cart_count">
                  0
                </span>
              </button>
              <div className="dropdown-menu cart__modal dropdown-menu-right">
                <div className="cart-wrapper">
                  <div
                    id="test-cart"
                    data-pjax-container=""
                    data-pjax-push-state=""
                    data-pjax-timeout="1000"
                  >
                    {" "}
                    <div className="cart__modal-top">
                      <ul className="cart__product-list" id="cart-content"></ul>
                    </div>
                  </div>{" "}
                  <div className="cart__modal-footer">
                    <div className="cart__modal-total">
                      <span>Сумма</span>
                      <span className="total-count">0 сум</span>
                    </div>
                  </div>
                  <div className="cart__modal-footer">
                    <div className="cart__modal-total-buttons">
                      <noindex>
                        <BasicLink
                          href="/cart/checkout"
                          classNames={["default-btn", "btn-primary-custom"]}
                          title="ОФОРМИТЬ ПОКУПКУ"
                        ></BasicLink>
                        <BasicLink
                          href="/cart/index"
                          title="ПЕРЕЙТИ В КОРЗИНКУ"
                          classNames={["btn-simple"]}
                        ></BasicLink>
                      </noindex>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <noindex>
              <a
                href="/site/favourites"
                className="header__top__link position-relative"
                rel="nofollow"
              >
                <img src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg" />
                <span>Избранное</span>
                <span
                  id="favourite-count"
                  className="cart_count"
                  style={{ right: "24px" }}
                >
                  0
                </span>
              </a>
            </noindex>
            <noindex>
              <a
                href="#"
                className="header__top__link h-avatar"
                data-toggle="modal"
                data-target="#profile-modal"
                title="Кабинет"
                rel="nofollow"
              >
                <img src="https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg" />
                <span>Кабинет</span>
              </a>
            </noindex>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
