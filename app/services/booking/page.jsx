
"use client"
import ServiceModal from '@/components/ServiceModal';
import BenefitsBlock from '@/components/service/BenefitsBlock';
import FeaturesBlock from '@/components/service/FeaturesBlock';
import useWOW from '../../../components/useWOW';
export default function Page() {
    useWOW();
    const features = ["User-Friendly Interface", "Real-Time Availability", "Pricing and Promotions",
        "Multiple Room Types and Upgrades", "Integrated Payment Gateway", "Mobile Responsive",
        "Multi-Language and Currency Support", "Guest Reviews and Ratings", "Personalization",
        "Reservation Email Notifications", "Channel Manager Integration"
    ];
    const benefits = [
        "Increased Direct Bookings", "Cost Efficiency", "Improved Guest Experience",
        "Data and Analytics", "Brand Loyalty"
    ];
    return (
        <div className=" bg-white">
            <h1 className='text-center text-4xl font-extrabold mb-3'>Booking Engine</h1>
            <hr className="border-t-2 border-blue-500 w-100 max-w-xs mx-auto my-4" />
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div >
                <FeaturesBlock image="/images/product/booking-engine.png" features={features} title="Key Features of  Hotel Booking Engine"/>
                </div>
            <div>
            <BenefitsBlock image="/images/product/booking-engine.png" benefits={benefits} title="Benefits of Hotel Booking Engine"/>
            </div>
              
            </div>
            <ServiceModal cat="Booking Engine"/>
        </div>
    );
}
