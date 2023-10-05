import MaskGroup from './Mask group.svg'
import { Link } from 'react-router-dom';
function Home () {
    return (
        <div className='bg-primaryPurple h-screen flex flex-col justify-center items-center font-barlow'>
        <div className="flex items-center justify-center">
          <img src={MaskGroup} className="w-80 h-80" alt="logo" />
          <div className='flex flex-col text-center font-barlow italic mt-4'>
            <h1 className='text-9xl ml-10'>OSEA</h1>
            <label className='ml-10'>All for learning and learning for All</label>
          </div>
        </div>
        <Link to="/login">
        <button className="block m-4 text-md rounded-2xl bg-ctaGreen mt-10 h-[36px] lg:w-48 md:w-40 sm:w-24 px-3 font-barlow">
          Start today!
        </button>
        </Link>
      </div>
      
    )
}

export default Home;
