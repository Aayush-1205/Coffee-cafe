import { initialOffersNav } from "@/data";
import { useState } from "react";

const OfferNav = () => {
  const [cate, setCate] = useState(initialOffersNav);

  const handleClick = (title: string) => {
    setCate((prevCate) =>
      prevCate.map((item) => ({ ...item, active: item.title === title }))
    );
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex lg:flex-row flex-col items-center lg:gap-0 gap-3 justify-between">
        <span className="text-primary font-semibold text-[22px]">
          Categories
        </span>
        {cate.map((cat) => (
          <span
            key={cat.title}
            onClick={() => handleClick(cat.title)}
            className={`font-medium cursor-pointer text-sm ${
              cat.active ? "text-secondary" : "text-disabledText"
            }`}
          >
            {cat.title}
          </span>
        ))}
      </div>
      <div className="w-full bg-catBorder h-[1px] lg:block hidden"></div>
    </div>
  );
};

export default OfferNav;
