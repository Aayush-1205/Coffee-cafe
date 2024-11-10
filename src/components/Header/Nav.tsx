import { navItems } from "@/data";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className="w-full lg:flex hidden items-center justify-between pl-6 pr-3 bg-primary rounded-full h-[60px] mt-4">
      <div className="flex items-center gap-10">
        {navItems.map((item) => {
          return (
            <Link
              to={item.path}
              key={item.title}
              className="text-navlinks text-[14px]"
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      {/* <img src={Instagram} alt="insta-coffee-cafe" className="cursor-pointer" /> */}

      <Link to={"/"} className="cursor-pointer text-white flex items-center gap-2 bg-white/20 rounded-full py-1.5 px-4">
        <FaInstagram className="text-2xl" /> Coffee Cafe
      </Link>
    </div>
  );
};

export default Nav;
