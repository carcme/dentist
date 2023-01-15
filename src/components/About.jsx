import React from 'react'
import Button from './Button'
import AboutImg from '../assets/working.jpg'
import Link from 'next/link'

const About = () => {
  return (
    <section name='about' className="py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <img
              src={AboutImg}
              className="w-full"
              alt="about us"
            />
          </div>
          <div className="text-center md:text-left">
            <span className="text-base text-lg"> About Us</span>
            <h2 className="text-3xl md:text-4xl leading-10 text-black pt-2">
              True Healthcare For Your Family
            </h2>
            <p className="py-5 leading-8 text-light-color">
              Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
              Laboriosam Cupiditate Vero In Provident Ducimus. Totam Quas
              Labore Mollitia Cum Nisi, Sint, Expedita Rem Error Ipsa,
              Nesciunt Ab Provident. Aperiam, Officiis!
            </p>
            <Link href="https://www.picktime.com/SloughDentalHygiene">
              <Button text='Make Appointment' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About