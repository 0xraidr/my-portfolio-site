import React from 'react'
import heroPic from '../assets/heropic.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b
     from-black via-black to-gray-600'>
        <div className='max-w-screen-lg max-auto flex
         flex-col items-center justify-center h-full px-4 
         md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl 
                font-bold text-white'>I'm a Full Stack Developer.</h2>
                <p className='text-gray-400 py-4 max-w-md'>
                    I have just about 6 months of experience building & designing
                    software. Currently, I love to work on web applications
                    using technologies like React and Tailwind. I am also
                    very interested in the Web3 space and have been active within
                    the community on the Solana blockchain for about a year and a half.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 
                    flex items-center rounded-md bg-gradient-to-br from-black via-gray-800 to-gray-600 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='
                            ml-1' />
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={heroPic} alt="my profile" className='
                rounded-full mx-auto w-2/3 md:w-full'/>
            </div>

        </div>
    </div>
  )
}

export default Home