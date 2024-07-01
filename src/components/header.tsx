import React from 'react'

const Header = () => {
  return (
   <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">Branding</a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900" href="/#service">Services</a>
          <a className="mr-5 hover:text-gray-900" href="/#about">About</a>
          <a className="mr-5 hover:text-gray-900" href="/#contact">Contact</a>
        </nav>
      </div>
    </header> 
  );
}

export default Header;
