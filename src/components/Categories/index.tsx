import { categories } from "@/data";
import goldenBean from "assets/goldBean.png";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="w-full lg:px-[100px] px-5 flex flex-col gap-8 mt-[80px]">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <img src={goldenBean} alt="goldenBean" />

          <div className="flex flex-col gap-1">
            <span className="text-[20px] text-primary font-semibold">
              Categories
            </span>
            <span className="font-medium text-primary">
              We choosed the best from the best!
            </span>
          </div>
        </div>

        <Link to={"/"} className="text-primary text-[15px] lg:block hidden">
          View All
        </Link>
      </div>

      <div className="flex w-full items-center justify-between gap-8 overflow-x-auto pb-6 z-50">
        {categories.map((cat) => {
          return (
            <div
              key={cat.title}
              className="flex flex-col items-center gap-3 cursor-pointer z-50"
            >
              <div className="flex flex-col items-center gap-3 cursor-pointer z-50">
                <div className="flex flex-col items-center justify-center border border-catBorder rounded-[10px] w-[85px] h-[105px]">
                  <img src={cat.image} alt={cat.title} />
                </div>
                <span className="text-[15px] text-primary font-medium text-center">
                  {cat.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
