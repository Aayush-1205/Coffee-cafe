// you can also remove the "@" sign cuz of configuration
import Categories from "@/components/Categories"
import Header from "@/components/Header"
import Offers from "@/components/Offers"
import TopSeller from "@/components/TopSeller"
import Tutorial from "@/components/Tutorial"

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Categories />
      <Offers />
      <TopSeller />
      <Tutorial />
    </div>
  )
}

export default Home