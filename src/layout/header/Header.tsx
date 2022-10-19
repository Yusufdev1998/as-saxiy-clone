import HeaderTop from "./HeaderTop"
import "./header.css"
import HeaderBottom from "./HeaderBottom"

const Header = () => {
  return (
    <header className="header">
        <HeaderTop></HeaderTop>
       <HeaderBottom></HeaderBottom>
    </header>
  )
}

export default Header