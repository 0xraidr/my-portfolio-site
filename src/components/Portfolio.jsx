import React from 'react'
import bankSite from '../assets/portfolio/modernbanksite.png'
import candyCrush from '../assets/candycrush.png'
import solanaSurfers from '../assets/solanasurfers.png';
import Fade from 'react-reveal/Fade';



const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: bankSite,
            demo: 'https://modsite-taupe.vercel.app/',
            code: 'https://github.com/0xraidr/modsite',

        },
        {
            id: 2,
            src: solanaSurfers,
            demo: 'https://solana-surfers.vercel.app/',
            code: 'https://github.com/0xraidr/solana-surfers',

        },
        {
            id: 3,
            src: candyCrush,
            demo: 'https://candy-crush-omega.vercel.app/',
            code: 'https://github.com/0xraidr/candy_crush',

        }
    ]


  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to to-slate-800
     w-full text-white md:h-screen'>
        
    <div className='max-w-screen-lg p-4 mx-auto
     flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
        <Fade right>
            <h2 className='text-4xl font-bold inline
             border-b-4 border-slate-800'>Portfolio</h2>
            <p className='py-6'>Check out some of my work right here.</p>
        </Fade>
         </div>



        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
         px-12 sm:px-0'>

{
            portfolios.map(({id, src, demo, code}) => (

                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <Fade bottom>
                <img src={src} alt='modsite' className='rounded-md
                 duration-200 hover:scale-105' />
                    </Fade>
                <a className='flex items-center justify-center' href={demo}>
                    <button target='_blank' className='w-1/2 px-6 py-3 m-4 duration-200
                    hover:scale-105'>Demo</button>
                
                </a>
                <a className='flex items-center justify-center' href={code}>
                <button target='_blank' className='w-1/2 px-6 py-3 m-4 duration-200
                    hover:scale-105'>Code</button>
                </a>
            </div>
            ))
        }
        </div>
    </div>

    </div>
  )
}

export default Portfolio