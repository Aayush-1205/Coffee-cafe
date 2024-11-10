import leaf from 'assets/Leaf.svg'
import Nav from './Nav'
import TopNav from './TopNav'
import Hero from './Hero'
const Header = () => {
  return (
    <div className="w-full bg-headerBg lg:px-[100px] px-5 pt-6 pb-12 relative">
      <TopNav />
      <Nav />
      <Hero />
      <img src={leaf} alt="leaf" className='absolute top-0 left-0 z-10' />
    </div>
  )
}

export default Header