import { useState } from "react";
import Burger from "../../components/Burger";
import MegaMenu from "./MegaMenu";


const HeaderBottom = () => {
    const [open, setOpen] = useState<boolean>(false)
  const toggleMenu = () => {
    setOpen(!open)
  };
  return (
    <div className="header__bottom position-relative">
      <div className="container">
        <nav className="header__nav">
          <a
            className="open__menu header__nav__link"
            href="javascript:void(0)"
            onClick={toggleMenu}
          >
           <Burger open={open}></Burger>
            <span> Все категории</span>
          </a>
          <a className="header__nav__link" href="/news">
            Новости
          </a>
          <a className="header__nav__link" href="/product?new=1">
            Новинки
          </a>
          <a className="header__nav__link" href="/product?discount=1">
            Скидки
          </a>
          <a className="header__nav__link" href="/product/knigi">
            Книги
          </a>
          <a className="header__nav__link" href="/product/mebel">
            Мебель
          </a>
          <a className="header__nav__link" href="/product/telefony-i-gadzhety">
            Телефоны и гаджеты
          </a>
          <a className="header__nav__link" href="/product/kondicionery">
            Кондиционеры
          </a>
          <a
            className="header__nav__link"
            href="/product/kompyutery-i-orgtehnika"
          >
            Компьютеры и оргтехника
          </a>
        </nav>
      </div>
      <MegaMenu open={open}></MegaMenu>
    </div>
  );
};

export default HeaderBottom;
