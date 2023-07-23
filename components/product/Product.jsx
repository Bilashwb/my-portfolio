"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import useWOW from '../useWOW';
import { Autoplay,Pagination,Scrollbar } from 'swiper/modules';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';

const servies=[
    {
        image:'/images/product/Revenue Management.png',
        title:'Revenue Management',
        subtitle:'Dynamically manage rates with competition analysis',
        url:'/revenue'
    },
    {
        image:'/images/product/ota.png',
        title:'OTA Management',
        subtitle:'Managing OTA pricing to get more bookings.',
        url:'/ota'
    },
    {
        image:'/images/product/Reservation-Management.png',
        title:'Reservation Management',
        subtitle:'Managing OTA pricing to get more bookings.',
        url:'/reservation'
    },
    {
        image:'/images/product/Reputation Management.png',
        title:'Reputation Management',
        subtitle:'Dynamically manage rates with competition analysis.',
        url:'/reputation'
    },
    {
        image:'/images/product/booking-engine.png',
        title:'Booking Engine',
        subtitle:'Managing rates on website to get more direct bookings.',
        url:'/booking'
    },
    {
        image:'/images/product/digital-marketing.png',
        title:'Digital Marketing',
        subtitle:'Help your guests to find your hotel.',
        url:'/digital'
    },
    {
        image:'/images/product/google-my-business.png',
        title:'Google Business',
        subtitle:'Creating digital marketing plan defining the digital channel strategy.',
        url:'/google'
    },
    {
        image:'/images/product/website-design-development.png',
        title:'Website Design & Development',
        subtitle:'An intuitive and easy-to-navigate website to get more bookings.',
        url:'/website'
    },
    {
        image:'/images/product/photography.png',
        title:'Photography & Promotion',
        subtitle:'To elevate your hotel, check out our suggestions for hotel photography.',
        url:'/photography'
    }
];
const Product = () => {
    useWOW();
    return (
        <div>
            <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto wow bounceInUp"  data-wow-duration="1s">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="07690130-d013-42bc-83f4-90de7ac68f76"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{' '}
            Our Offered Services
          </h2>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap wow slideInRight"  data-wow-duration="3s">
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            
                            slidesPerView={3}
                            breakpoints={{
                                '@0.00': {
                                  slidesPerView: 1,
                                  spaceBetween: 10,
                                },
                                '@0.75': {
                                  slidesPerView: 1.3,
                                  spaceBetween: 20,
                                },
                                '@1.00': {
                                  slidesPerView: 3,
                                  spaceBetween: 40,
                                },
                                '@1.50': {
                                  slidesPerView: 3.5,
                                  spaceBetween: 50,
                                },
                              }}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination,Autoplay]}
                            className="mySwiper"
                            loop={true}
                        >

                            {
                                servies.map((item)=>{
                                    return <SwiperSlide><ProductCard image={item.image} title={item.title} subtitle={item.subtitle} url={item.url} /></SwiperSlide>
                                })
                            }
                            
            
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;
