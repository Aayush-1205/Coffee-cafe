import { offerProducts } from "@/data";
import { CgShoppingBag } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";

const OffersProduct = () => {
  return (
    <div className="w-full flex items-center justify-between gap-[30px]">
      {offerProducts.map((product, index: number) => {
        return (
          <div
            key={index}
            className={`w-full rounded-[20px] border-[1.5px] border-catBorder flex flex-col px-8 pt-8 pb-4 relative ${
              index !== 0 ? "hidden lg:flex" : "flex"
            }`}
          >
            <div className="absolute text-[15px] font-medium top-4 left-4 text-white rounded-[30px] py-[2px] px-3 items-center justify-center bg-primary">
              {product.discount}
            </div>
            <div className="absolute text-[20px] font-medium top-4 right-4 cursor-pointer">
              <FaRegHeart />
            </div>

            <img
              src={product.image}
              alt={product.title}
              className="w-[47%] my-0 mx-auto cursor-pointer"
            />
            <div className="w-full mt-8 text-center">
              <p className="text-disabledText text-[12px] w-fit mx-auto border rounded-full border-catBorder px-4 py-1 mb-2">
                {product.cat}
              </p>
              <span className="text-primary font-extrabold playfair">
                {product.title}
              </span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-secondary font-semibold text-sm">
                  {product.price}
                </span>
                <span className="bg-secondary text-white p-1.5 rounded-full font-semibold cursor-pointer ">
                  <CgShoppingBag />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OffersProduct;
