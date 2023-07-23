"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay,Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TeamCard from './TeamCard'
const teams=[{image:'/images/team/Jyoti-Sir.png',name:'Jyoti Das',desg:'Founder & CEO'},
{image:'/images/team/Ritu-Da.png',name:'Rituraj Dasgupta',desg:'Head Of Sales'},
{image:'/images/team/Pitam.png',name:'Pritam Sen',desg:'Revenue Manager'},
{image:'/images/team/Indranil-Da.png',name:'Indranil Kanjilal',desg:'Digital Marketing Specialist'},
{image:'/images/team/Indradeep-Da.png',name:'Indradeep Dasgupta',desg:'Reservation Manager'}
];
export default function Team() {
  return (
    <div>
      <section class=" pb-10 lg:pt-[20px] lg:pb-10 px-4">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[510px] text-center">
            <h1 className='text-center text-4xl text-blue-700 font-extrabold pb-6'>Our Team </h1>
            </div>
          </div>
        </div>

        <div class="-mx-4 flex flex-wrap justify-center">
        <Swiper
                         
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
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
                                  slidesPerView: 4,
                                  spaceBetween: 50,
                                },
                              }}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                          {
                            teams.map((item)=>{
                              return  <SwiperSlide> <TeamCard image={item.image} name={item.name} desg={item.desg}/></SwiperSlide>

                            })
                          }
                           
                        </Swiper>
        </div>
      </div>
    </section>
    </div>
  )
}
