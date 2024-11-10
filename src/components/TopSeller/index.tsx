import { initialTopSellers } from "@/data";
import goldenBean from "assets/goldBean.png";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import dp3 from "assets/dp3.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingBag } from "react-icons/cg";

const TopSeller = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const items = isMobile ? [...Array(2)] : [...Array(8)];
  const [cats, setCats] = useState(initialTopSellers);

  const activeCat = (title: string) => {
    setCats((prevCats) =>
      prevCats.map((item) => ({ ...item, active: item.title === title }))
    );
  };

  return (
    <div className="w-full lg:px-[100px] px-5 py-4 flex flex-col gap-12 mt-[120px]">
      <div className="flex lg:flex-row lg:items-center items-start justify-between w-full gap-8">
        <div className="flex items-center gap-2">
          <img src={goldenBean} alt="gold Bean" />

          <div className="flex flex-col gap-1">
            <span className="text-[20px] text-primary font-semibold">
              Top Seller
            </span>
            <span className="text-primary font-medium text-sm">
              Be Quick! These ones run out fast.
            </span>
          </div>
        </div>

        <div className="w-full lg:w-[75%] flex items-center justify-between bg-catBorder lg:rounded-t-[20px] rounded-t-[8px] lg:h-[70px] lg:py-0 py-4 lg:px-8 px-5 overflow-x-auto lg:gap-0 gap-5">
          {cats.map((cat) => (
            <div
              key={cat.title}
              onClick={() => activeCat(cat.title)}
              className={`cursor-pointer text-primary font-medium p-2 text-sm rounded-[12px] whitespace-nowrap ${
                cat.active ? "bg-white" : "bg-transparent"
              }`}
            >
              {cat.title}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-y-4 flex-wrap">
        {items.map((index: number) => (
          <div
            key={index}
            className="lg:w-[280px] w-[80%] rounded-[20px] border-[1.5px] border-catBorder flex flex-col px-8 pt-8 pb-4 relative cursor-pointer"
          >
            <div className="absolute text-[15px] font-medium top-4 left-4 text-white rounded-[30px] py-[2px] px-3 items-center justify-center bg-primary">
              20%
            </div>
            <div className="absolute text-[20px] font-medium top-4 right-4 cursor-pointer">
              <FaRegHeart />
            </div>

            <img
              src={dp3}
              alt={`product`}
              className="w-[47%] my-0 mx-auto cursor-pointer"
            />
            <div className="w-full mt-8 text-center">
              <p className="text-disabledText text-[12px] w-fit mx-auto border rounded-full border-catBorder px-4 py-1 mb-2">
              Coffee beans
              </p>
              <span className="text-primary font-extrabold playfair">
              Boxilian Beans
              </span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-secondary font-semibold text-sm">
                  $280
                </span>
                <span className="bg-secondary text-white p-1.5 rounded-full font-semibold cursor-pointer ">
                  <CgShoppingBag />
                </span>
              </div>
            </div>
            
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="px-4 py-3 bg-secondary flex items-center gap-2 rounded-full cursor-pointer z-50">
          <span className="text-white font-medium text-[15px]">View More</span>
          <FaArrowRight className={"!text-white"} />
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
