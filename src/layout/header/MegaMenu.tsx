const MegaMenu:React.FC<{open:boolean}> = ({open}) => {
  return (
    <div className={`mega__menu ${open && "active"}`}>
      <div className="mega__menu-inner">
        <div className="mega__menu-left">
          <ul className="mega__menu-list">
            <li>
              <a
                href="/product/knigi"
                className="tab-open opened"
                data-id="knigi"
              >
                <img
                  src="https://assets.asaxiy.uz/category//5e0158017e038.png"
                  alt="Книги"
                />
                Книги{" "}
              </a>
            </li>
          </ul>
        </div>

        <div className="mega__menu-right">
          <div className="tab-content tab-active" data-id="knigi">
            <div className="mega__menu-right-inner">
              <div className="mega__menu-content">
                <div className="mega__menu-item">
                  <a
                    className="menu__item-title"
                    href="/product/knigi/asaxiybooks-kitoblari"
                  >
                    Asaxiy Books китоблари
                  </a>
                  <div className="mega__menu-item-inner">
                    <a href="/product/knigi/asaxiybooks-kitoblari">
                      Все товары
                    </a>
                  </div>
                </div>
                <div className="mega__menu-item">
                  <a
                    className="menu__item-title"
                    href="/product/knigi/badiy-adabiyot"
                  >
                    Художественная литература
                  </a>
                  <div className="mega__menu-item-inner">
                    <a href="/product/knigi/badiy-adabiyot">Все товары</a>
                    <a href="/product/knigi/badiy-adabiyot/zhahon-adabiyoti">
                      Мировая литература
                    </a>
                    <a href="/product/knigi/badiy-adabiyot/uzbek-adabiyoti">
                      Узбекская литература
                    </a>
                    <a href="/product/knigi/badiy-adabiyot/zamonavij-uzbek-adabiyoti">
                      Современная узбекская литература
                    </a>
                  </div>
                </div>
                <div className="mega__menu-item">
                  <a
                    className="menu__item-title"
                    href="/product/knigi/psixologiya"
                  >
                    Психология и саморазвитие
                  </a>
                  <div className="mega__menu-item-inner">
                    <a href="/product/knigi/psixologiya">Все товары</a>
                  </div>
                </div>
                <div className="mega__menu-item">
                  <a className="menu__item-title" href="/product/knigi/biznes">
                    Книги про бизнес
                  </a>
                  <div className="mega__menu-item-inner">
                    <a href="/product/knigi/biznes">Все товары</a>
                  </div>
                </div>
                <div className="mega__menu-item">
                  <a
                    className="menu__item-title"
                    href="/product/knigi/bolalar-adabiyoti"
                  >
                    Детская литература
                  </a>
                  <div className="mega__menu-item-inner">
                    <a href="/product/knigi/bolalar-adabiyoti">Все товары</a>
                  </div>
                </div>
                <div className="mega__menu-item">
                  <a
                    className="menu__item-title"
                    href="/product/knigi/dinij-adabiyot"
                  >
                    Религиозная литература
                  </a>
                  <div className="mega__menu-item-inner">
                    <a href="/product/knigi/dinij-adabiyot">Все товары</a>
                  </div>
                </div>
                <div className="mega__menu-item">
                  <a
                    className="menu__item-title"
                    href="/product/knigi/na-russkom"
                  >
                    Книги на русском
                  </a>
                  <div className="mega__menu-item-inner">
                    <a href="/product/knigi/na-russkom">Все товары</a>
                  </div>
                </div>
                <div className="mega__menu-item">
                  <a
                    className="menu__item-title"
                    href="/product/knigi/ilm-fan-va-darsliklar"
                  >
                    Наука и учебники
                  </a>
                  <div className="mega__menu-item-inner">
                    <a href="/product/knigi/ilm-fan-va-darsliklar">
                      Все товары
                    </a>
                  </div>
                </div>
                <div className="mega__menu-item">
                  <a
                    className="menu__item-title"
                    href="/product/knigi/abiturient"
                  >
                    Для абитуриентов
                  </a>
                  <div className="mega__menu-item-inner">
                    <a href="/product/knigi/abiturient">Все товары</a>
                  </div>
                </div>
                <div className="mega__menu-item">
                  <a
                    className="menu__item-title"
                    href="/product/knigi/bestseller"
                  >
                    ТОП-100 бестселлер
                  </a>
                  <div className="mega__menu-item-inner">
                    <a href="/product/knigi/bestseller">Все товары</a>
                  </div>
                </div>
                <div className="mega__menu-item">
                  <a className="menu__item-title" href="/product/knigi/toplam">
                    Сборники бестселлеров
                  </a>
                  <div className="mega__menu-item-inner">
                    <a href="/product/knigi/toplam">Все товары</a>
                  </div>
                </div>
                <div className="mega__menu-item">
                  <a className="menu__item-title" href="/product/knigi/siyosat">
                    Политика
                  </a>
                  <div className="mega__menu-item-inner">
                    <a href="/product/knigi/siyosat">Все товары</a>
                  </div>
                </div>
                <div className="mega__menu-item">
                  <a className="menu__item-title" href="/product/knigi/kit-da">
                    Детективы и фантастика
                  </a>
                  <div className="mega__menu-item-inner">
                    <a href="/product/knigi/kit-da">Все товары</a>
                  </div>
                </div>
                <div className="mega__menu-item">
                  <a
                    className="menu__item-title"
                    href="/product/knigi/biography"
                  >
                    Биография
                  </a>
                  <div className="mega__menu-item-inner">
                    <a href="/product/knigi/biography">Все товары</a>
                  </div>
                </div>
                <div className="mega__menu-item">
                  <a
                    className="menu__item-title"
                    href="/product/knigi/kanstovar"
                  >
                    Канцтовары
                  </a>
                  <div className="mega__menu-item-inner">
                    <a href="/product/knigi/kanstovar">Все товары</a>
                  </div>
                </div>
                <div className="mega__menu-item">
                  <a
                    className="menu__item-title"
                    href="/product/knigi/tureckaya-literatura"
                  >
                    Турецкая литература
                  </a>
                  <div className="mega__menu-item-inner">
                    <a href="/product/knigi/tureckaya-literatura">Все товары</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
