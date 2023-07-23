import React from 'react'
import ServiceCard from './ServiceCard'

export default function page() {
    const servies = [
        {
            image: '/images/product/Revenue Management.png',
            title: 'Revenue Management',
            subtitle: 'Dynamically manage rates with competition analysis',
            url: '/services/revenue'
        },
        {
            image: '/images/product/ota.png',
            title: 'OTA Management',
            subtitle: 'Managing OTA pricing to get more bookings.',
            url: '/services/ota'
        },
        {
            image: '/images/product/Reservation-Management.png',
            title: 'Reservation Management',
            subtitle: 'Managing OTA pricing to get more bookings.',
            url: '/services/reservation'
        },
        {
            image: '/images/product/Reputation Management.png',
            title: 'Reputation Management',
            subtitle: 'Dynamically manage rates with competition analysis.',
            url: '/services/reputation'
        },
        {
            image: '/images/product/booking-engine.png',
            title: 'Booking Engine',
            subtitle: 'Managing rates on website to get more direct bookings.',
            url: '/services/booking'
        },
        {
            image: '/images/product/digital-marketing.png',
            title: 'Digital Marketing',
            subtitle: 'Help your guests to find your hotel.',
            url: '/services/digital'
        },
        {
            image: '/images/product/google-my-business.png',
            title: 'Google Business',
            subtitle: 'Creating digital marketing plan defining the digital channel strategy.',
            url: '/services/google'
        },
        {
            image: '/images/product/website-design-development.png',
            title: 'Website Design & Development',
            subtitle: 'An intuitive and easy-to-navigate website to get more bookings.',
            url: '/services/website'
        },
        {
            image: '/images/product/photography.png',
            title: 'Photography & Promotion',
            subtitle: 'To elevate your hotel, check out our suggestions for hotel photography.',
            url: '/services/photography'
        }
    ];
    return (
        <div>
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10">



                    {
                        servies.map((item) => {
                            return <ServiceCard image={item.image} title={item.title} desc={item.subtitle} url={item.url} />
                        })
                    }


                </div>
            </div>
        </div>
    )
}
