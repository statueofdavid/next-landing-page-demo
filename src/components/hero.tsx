import React from 'react'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Your Service is the Most Trusted in Your Area</h1>
          <p className="mb-8 leading-relaxed">Is your website feeling a little stale?  Are you looking for a way to grab attention and engage visitors from the very first moment?  Look no further than your hero section! This prime real estate is your chance to make a powerful first impression.  Use clear, concise language to highlight your unique value proposition and entice visitors to explore further.</p>
          <div className="flex justify-center">
            <a className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg" href="/#contact">Get A Quote</a>
            <a className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" href="/#service">Learn More</a>
          </div>
        </div>
      </div>
    </section> 
  );
}

export default Hero;
