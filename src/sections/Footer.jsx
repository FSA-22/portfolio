import React from 'react'

const Footer = () => {
  return (
    <section className="sm:px-10 px-5 pt-10 xl:pt-50 pb-3  flex justify-between flex-wrap items-center gap-5">
      <div className="text-neutral-400 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-2">
        <div className="w-10 h-10 rounded-full flex justify-center items-center ">
            <a href='https://github.com/FSA-22?tab=repositories' target='_blank'> 
              <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2'/>
            </a>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-10 h-10 rounded-full flex justify-center items-center">
          <a href='https://www.linkedin.com/in/simeon-fowotade-29a2531b8/' target='_blank' > 
            <img src="/assets/linkedln.png" alt="linkdln" className='w-1/2 h-1/2'/>
          </a>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-10 h-10 rounded-full flex justify-center items-center ">
          <a href='https://x.com/FowotadeSimeon?t=jW55aE72DZVfBkLxXct0VQ&s=03' target='_blank'>
            <img src="/assets/twitter.svg" alt="twitter-X" className='w-1/2 h-1/2'/>
          </a>
        </div>
      </div>

      <p className='text-neutral-400'>&copy; 2025 FSA. All Right Reserved</p>
      
    </section>
  );
}

export default Footer