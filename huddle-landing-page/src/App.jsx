import React from 'react';
import logo from "/images/logo.svg";
import illustration from "/images/illustration-mockups.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';


export default function App() {
  
  return (
    <main className="min-h-screen sm:bg-bgDesktop bg-bgMobile bg-Violet">
      <section className="flex flex-col p-8 gap-8">
        <img src={logo} alt="Logo" className="w-32 mb-8" />
        <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
          <div className="sm:w-1/2">
            <img src={illustration} alt="Illustration" />
          </div>
          <div className="sm:w-1/2 text-center sm:text-justify">
            <h1 className="text-4xl font-medium text-white mb-4">Build The Community Your Fans Will Love</h1>
            <p className="text-white">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
            <button className="px-8 py-2 bg-white text-Violet rounded-full mt-4 hover:bg-SoftMagenta hover:text-white">Register</button>
          </div>
        </div>
        <div className='flex sm:justify-between justify-center'>
          <span></span>
          <span>
            {[faFacebookF,faTwitter,faPinterest].map((icon, index) =>(
              <FontAwesomeIcon icon={icon} color='white' className='w-8 py-2 border-2 border-white rounded-full transition-colors duration-300 ease-in-out cursor-pointer hover:border-SoftMagenta m-2 hover:text-SoftMagenta' />
            ))}
            
          </span>

        </div>
      </section>
    </main>
  );
}
