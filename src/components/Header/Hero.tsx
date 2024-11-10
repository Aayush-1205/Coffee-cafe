import { Link } from "react-router-dom";
import hero from "assets/hero.png";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[70vh] pt-8 grid grid-cols-2 items-center gap-6 z-20"
    >
      <div className="home-text">
        <h1 className="playfair font-extrabold text-6xl">
          Enjoy a new blend <br /> of coffee beans
        </h1>
        <p className="max-w-80 mt-4 mb-6">
          Brew or order a Perfect Coffee based on your mood Anywhere Anytime
        </p>

        <Link to={"/"} className="max-w-40 z-50 p-2 flex items-center justify-center gap-2 bg-primary rounded-full text-white group">
          Shop Now <FaArrowRight className="text-3xl bg-[#54372a] p-1.5 rounded-full group-hover:-rotate-45" />
        </Link>
      </div>

      <div className="w-full max-w-xl">
        <img src={hero} alt="Hero-img" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Hero;
