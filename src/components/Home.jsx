import React from 'react'
// import Typed from 'react-typed';
import Link from 'next/link'
import Button from './Button';

const Home = () => {
  return (
    <section name='home'
      className="w-full bg-home bg-cover bg-left md:bg-center bg-no-repeat md:py-20"
    >
      <div className="max-w-[1200px] mx-auto px-1 flex items-center min-h-screen">
        <div className="md:w-2/4 text-center md:text-left">
          <h2
            className="font-semibold text-3xl md:text-5xl leading-10 text-black uppercase"
          >
            let us brighten your smile
          </h2>
          <p className="py-5 leading-8 text-light-color">
            A local, family-run, Independent Dental Hygiene Practice in the heart of Slough Trading Estate.
          </p>
          <Link href="https://www.picktime.com/SloughDentalHygiene">
            <Button text='Make Appointment' />
          </Link>
        </div>
      </div>
    </section >
  )
}

export default Home