"use client"
import ServiceModal from '@/components/ServiceModal';
import BenefitsBlock from '@/components/service/BenefitsBlock';
import FeaturesBlock from '@/components/service/FeaturesBlock';
import useWOW from '../../../components/useWOW';
export default function Page() {
    useWOW();
    const features = [ "Centralized Inventory Management",
    "Real-Time Availability Updates",
    "Automated Rate and Inventory Distribution",
    "Channel Management",
    "Booking Engine Integration",
    "Reservation Management",
    "Pricing and Yield Management",
    "Dynamic Packaging",
    "Multi-Language and Currency Support",
    "Reporting and Analytics",
    "Payment Gateway Integration",
    "Customer Relationship Management (CRM)"
    ];
    const benefits = [
        "Increased Online Visibility",
    "Wider Market Reach",
    "Maximized Bookings and Revenue",
    "Efficient Inventory Control",
    "Time-Saving Automation",
    "Optimized Pricing Strategies",
    "Real-Time Updates and Synchronization",
    "Improved Customer Experience",
    "Streamlined Operations",
    "Global Customer Access",
    "Data-Driven Decision Making",
    "Enhanced Customer Service",
    "Secure and Hassle-Free Payments"
    ];
    return (
        <div className=" bg-white">
            <h1 className='text-center text-4xl font-extrabold mb-3'>OTA Management</h1>
            <hr className="border-t-2 border-blue-500 w-100 max-w-xs mx-auto my-4" />
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <FeaturesBlock image="/images/product/google-my-business.png"
                 features={features} title=" Key Features of OTA Management"/>
               <BenefitsBlock image="/images/product/google-my-business.png" 
               benefits={benefits} title="Benefits of OTA Management "/>
            </div>
            <ServiceModal cat="OTA Management"/>
        </div>
    );
}
