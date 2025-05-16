import React from 'react';
import {
    Page,
    Card,
    Layout,
    Text,
    Button,
    TextContainer,
    Thumbnail,
} from '@shopify/polaris';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const mockBrands = [
    {
        id: '1',
        name: 'Brand Alpha',
        logo: 'https://via.placeholder.com/80',
        description: 'Eco-friendly skincare products',
    },
    {
        id: '2',
        name: 'Brand Beta',
        logo: 'https://via.placeholder.com/80',
        description: 'Luxury fashion accessories',
    },
    {
        id: '3',
        name: 'Brand Gamma',
        logo: 'https://via.placeholder.com/80',
        description: 'Premium home decor',
    },
    {
        id: '4',
        name: 'Brand Delta',
        logo: 'https://via.placeholder.com/80',
        description: 'Tech wearables for lifestyle',
    },
];

export function WorkWithBrands() {
    return (

        <>
            {/* <Card sectioned>
                <TextContainer>
                    <Text as="h2" variant="headingMd">
                        Partnered Brands
                    </Text>
                    <p>Swipe through the brands you currently work with or explore new ones.</p>
                    <Button primary>Explore New Brands</Button>
                </TextContainer>
            </Card> */}

            <Card title="Your Brands">
                <div style={{marginBottom:'2%'}}>
                    <Text as="h2" variant="headingMd">
                        Partnered Brands
                    </Text>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={16}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={3}

                >
                    {mockBrands.map((brand) => (
                        <SwiperSlide key={brand.id}>
                            <div style={{ padding: '12px' }}>
                                <Card sectioned>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <Thumbnail source={brand.logo} alt={brand.name} size="medium" />
                                        <div>
                                            <Text variant="bodyMd" fontWeight="bold">{brand.name}</Text>
                                            <Text as="span" color="subdued">{brand.description}</Text>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Card>
        </>

    );
}
