
const Burger:React.FC<{open:boolean}> = ({open}) => {
 
  return (
    <div className={`hamburger ${open && 'open'}`}>
      <div className="hamburger__item burger-1"></div>
      <div className="hamburger__item burger-2"></div>
      <div className="hamburger__item burger-3"></div>
    </div>
  );
};

export default Burger;
