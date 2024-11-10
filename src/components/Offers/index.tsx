import leaf from "assets/Leaf.svg";
import rightLeaf from "assets/LeafRight.svg";
import offers from "assets/offers.png";
import OfferNav from "./OfferNav";
import OffersProduct from "./OffersProduct";

const Offers = () => {
  return (
    <div className="w-full lg:px-[100px] px-5 my-[80px] relative">
      <img
        src={leaf}
        alt="leaf"
        className="rotate-[20deg] absolute bottom-[-180px] left-0"
      />

      <img
        src={rightLeaf}
        alt="right-leaf"
        className="absolute top-[-180px] right-0"
      />

      <div className="w-full bg-primary rounded-[30px] h-[570px] flex justify-center py-8 relative">
        <img src={offers} alt="offers" className="absolute top-[50px] left-0" />

        <img
          src={offers}
          alt="offers"
          className="absolute top-[50px] right-0 rotate-180"
        />

        <span className="text-white font-semibold text-[35px] text-center">
          Special Offers
        </span>
        <div className="bg-white w-[85%] rounded-[20px] absolute top-[130px] lg:h-[570px] shadow-xl lg:px-[100px] px-5 lg:py-[50px] py-5 flex flex-col lg:gap-[60px] gap-5">
            <OfferNav />
            <OffersProduct />
        </div>
      </div>
    </div>
  );
};

export default Offers;
