import React from 'react'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocation, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const FooterData = () => {

  const FooterCards = [
    {
      icon: faPhone,
      title: 'Phone Number',
      Firstsubtitle: '+44 7942 264890',
    },
    {
      icon: faLocation,
      title: 'Our Address',
      Firstsubtitle: 'Bradford Road SL1 4PG Berks',

    },
    {
      icon: faClock,
      title: 'Opening Hours',
      Firstsubtitle: 'Mo, Th, Fr: 10:00 - 20:00',
      Forthsubtitle: 'Sa:10:30 - 15:00',
    },
    {
      icon: faEnvelope,
      title: 'Email Address',
      Firstsubtitle: 'clare@sloughdentalhygiene.co.uk',
    },
  ]

  return (
    <>
      {
        FooterCards.map((card, index) => (
          <div className="text-center" key={index}>
            <FontAwesomeIcon icon={card.icon} className='text-white bg-blue rounded-full text-3xl p-3'></FontAwesomeIcon>
            <h3 className="text-black capitalize font-medium mt-3">{card.title}</h3>
            <p className="text-light-color align-left">{card.Firstsubtitle}</p>
            {
              card.Secondsubtitle &&
              <p className="text-light-color">{card.Secondsubtitle}</p>
            }
            {
              card.Thirdsubtitle &&
              <p className="text-light-color">{card.Thirdsubtitle}</p>
            }
            {
              card.Forthsubtitle &&
              <p className="text-light-color">{card.Forthsubtitle}</p>
            }
          </div>
        ))
      }
    </>
  )
}

export default FooterData