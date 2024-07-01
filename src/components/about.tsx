import React from 'react';

const About = () => {
  return (
    <section id="about" className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Your Company</h1>
          <p className="mb-8 leading-relaxed">In the digital age, first impressions are crucial, and your landing page is often the first interaction potential customers have with your brand.  While calls to action and product information are important, including a well-crafted "About Us" section can be a powerful tool for building trust and establishing credibility.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
