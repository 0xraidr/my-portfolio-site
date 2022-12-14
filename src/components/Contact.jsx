import React from 'react'
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen
     bg-gradient-to-b from-black to-slate-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center
         max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
              <Fade right>
                <h2 className='text-4xl font-bold inline border-b-4
                 border-slate-800'>Contact</h2>
                <p className='py-6'>Submit the form below to get in touch with me.</p>
              </Fade>
            </div>
            <div className='flex justify-center items-center'>
              <Fade>
                <form action='https://getform.io/f/34fecda7-12a1-465c-97e7-b90c69aff0ae' 
                method='POST' className='flex flex-col w-full
                 md:w-1/2'>
                    <input type='text' name='name' 
                    placeholder='Enter your name'
                     className='p-2 bg-transparent border-2
                      rounded-md text-white focus:outline-none'
                      />
                      <input type='text' name='email' 
                    placeholder='Enter your email'
                     className='my-4 p-2 bg-transparent border-2
                      rounded-md text-white focus:outline-none' 
                      />
                      <textarea name='message'
                      placeholder='Enter your message' rows='10' className='p-2
                       bg-transparent border-2 rounded-md text-white
                        focus:outline-none'
                         ></textarea>

                         <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500
                          px-6 py-3 my-8 mx-auto flex items-center rounded-md
                           hover:scale-110 duration-300'>Let's Chat!</button>
                </form>
                </Fade>
            </div>
        </div>
    </div>
  )
}

export default Contact