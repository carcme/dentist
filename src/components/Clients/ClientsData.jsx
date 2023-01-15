import ImgOne from '../../assets/pic-1.png'
import ImgTwo from '../../assets/pic-2.png'
import ImgThree from '../../assets/pic-3.png'
import ImgFour from '../../assets/pic-4.png'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
// import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// StarIcons
import StarIcons from './StarIcons';
const ClientsData = () => {

  const ClientCards = [
    {
      img: ImgOne,
      name: 'Jane',
      desc: 'I am very happy with the result of my treatment, Clare was very professional, skilful and gentle, I felt safe and comfortable.  My teeth have never felt so clean and I swear they are whiter, I was not exactly that! Thank you so much and I would recommend a visit',
      title: 'October 2020'
    },
    {
      img: ImgTwo,
      name: 'Aleksandra',
      desc: 'Amazing service by Clare and Meg yesterday!! Would definitely recommend! Very professional, quick and very kind!',
      title: 'February 2020'
    },
    {
      img: ImgThree,
      name: 'Mason',
      desc: 'I am a nervous dental patient but however I felt so comfortable and welcome at Slough Dental Hygiene the staff are so friendly and brilliant at their job. Would highly recommend',
      title: 'June 2019'
    },
    {
      img: ImgFour,
      name: 'Scott',
      desc: 'Very professional with perfect service. Would highly recommend',
      title: 'November 2020'
    },
  ]

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      grabCursor={true}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}

    >
      {
        ClientCards.map((client, index) => (
          <SwiperSlide key={index}>
            <div
              className=" bg-white rounded h-[460px] p-4 text-center shadow-lg">
              <img
                src={client.img}
                className="rounded-full h-24 w-24 mx-auto"
                alt=''
              />
              <p className="leading-8 text-light-color py-5">{client.desc}</p>
              {/* <div className="bg-light-bg inline-block px-4 py-1 space-x-1 rounded mb-4">
                <StarIcons type={faStar} />
                <StarIcons type={faStar} />
                <StarIcons type={faStar} />
                <StarIcons type={faStar} />
                <StarIcons type={faStar} />
              </div> */}
              <h3 className="capitalize text-black font-medium md:text-xl mb-1">{client.name}</h3>
              <span className="capitalize text-light-color">{client.title}</span
              >
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default ClientsData