import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import { Card, Divider, List, Text } from '@shopify/polaris';

export default function Services() {
    const services = [
        {
            logo: '',
            title: 'Shopify App Development',
            content: [
                'Public & private apps for custom store functionality',
                'Embedded apps using Shopify App Bridge + Polaris',
                'Secure OAuth authentication, webhook handling',
                'Real-time sync with external APIs and databases'
            ]
        },
        {
            logo: '',
            title: 'Shopify Theme Customization',
            content: [
                'Custom theme builds and full redesigns',
                'Upgrade to Online Store 2.0 (sections everywhere)',
                'UX-focused enhancements, speed optimization, and accessibility improvements',
                'Bug fixing, conversion rate optimization, and ongoing support'
            ]
        },
        {
            logo: '',
            title: 'Headless Shopify with Remix & React',
            content: [
                'Blazing-fast storefronts using Remix or Next.js',
                'Full control via Storefront API integration',
                'Improved Core Web Vitals, SEO, and Lighthouse scores',
                'Optimized for content-heavy, mobile-first, and PWA experiences'
            ]
        },
        {
            logo: '',
            title: 'Backend Solutions with Laravel',
            content: [
                'Custom admin panels and reporting dashboards',
                'Laravel APIs connected to Shopify or third-party services',
                'Inventory, order, and customer sync logic',
                'Background jobs, scheduled tasks, and secure API endpoints'
            ]
        }
    ];

    return (
        <Swiper
            effect="cube"
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                services.map((s) => {
                    return <SwiperSlide> <Card>
                        <Text fontWeight='bold'>{s.title}</Text>
                        <Divider />
                        <List>

                            {
                                s.content.map((c) => {
                                    return <List.Item>{c}</List.Item>
                                })
                            }
                        </List>
                    </Card></SwiperSlide>
                })
            }
        </Swiper>
    );
}
