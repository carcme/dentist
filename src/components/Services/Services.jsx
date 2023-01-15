import React from 'react'
import Heading from '../Heading'
import ServicesData from './ServicesData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = () => {
  return (
    <section name='services' className="py-20 bg-light-bg scroll-pt-24 ">
      <div className="max-w-[1200px] mx-auto px-4">
        <Heading title=' our services' />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            ServicesData.map((data, index) => (
              <div key={index} className='text-center bg-white p-5 rounded'>
                {/* <FontAwesomeIcon icon="fa-solid fa-comment-medical" className='text-white bg-base rounded-full h-6 w-6 p-2 hover:bg-black'></FontAwesomeIcon> */}
                <FontAwesomeIcon icon={data.icon} className='text-white bg-base rounded-full h-6 w-6 p-2 hover:bg-black'></FontAwesomeIcon>

                <h3 className="text-xl font-medium leading-10 text-black py-2">
                  {data.title}
                </h3>
                <p className="leading-8 text-light-color">
                  {data.desc}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services