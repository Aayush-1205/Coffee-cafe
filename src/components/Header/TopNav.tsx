import shopping from "assets/shopping.svg";
import logo from "assets/logo.png";
import bean from "assets/bean.svg";
import menu from "assets/menu.svg";

const TopNav = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={shopping} alt="shopping-btn" className="cursor-pointer" />

        <button className="border border-primary cursor-pointer rounded-full outline-none shadow-none font-medium px-3 py-2 lg:block hidden">
          Login/Signup
        </button>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="cursor-pointer" />

          <span className="text-primary font-bold text-[20px] playfair">
            Coffee Cafe
          </span>
        </div>

        <span className="text-sm text-primary">Coffee & Equipments</span>
      </div>

      <div className="flex items-center gap-3">
        <img src={bean} alt="bean" className="cursor-pointer lg:block hidden" />
        <img
          src={menu}
          alt="menu"
          className="cursor-pointer lg:hidden block w-[53px]"
        />

        <div className="lg:flex hidden flex-col">
          <span className="font-semibold text-secondary">+1</span>
          <span className="font-semibold text-primary">2345678910</span>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
