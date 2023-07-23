"use client"
import ServiceModal from '@/components/ServiceModal';
import BenefitsBlock from '@/components/service/BenefitsBlock';
import FeaturesBlock from '@/components/service/FeaturesBlock';
import useWOW from '../../../components/useWOW';
export default function Page() {
    useWOW();
    const features = ["Business Profile Creation",
    "Map Listing",
    "Customer Reviews and Ratings",
    "Contact Information",
    "Website Link",
    "Photos and Videos Showcase",
    "Google Posts",
    "Messaging",
    "Q&A Section",
    "Insights and Analytics",
    "Google My Business App"
    ];
    const benefits = [
        "Enhanced Online Visibility",
        "Local SEO Boost",
        "Increased Website Traffic",
        "Improved Customer Engagement",
        "Customer Trust and Credibility",
        "Promotion of Products and Services",
        "Direct Customer Interaction",
        "Real-Time Updates",
        "Positive Online Reputation",
        "Data-Driven Decision Making",
        "Mobile Management and Convenience"
    ];
    return (
        <div className=" bg-white">
            <h1 className='text-center text-4xl font-extrabold mb-3'>Google My Business</h1>
            <hr className="border-t-2 border-blue-500 w-100 max-w-xs mx-auto my-4" />
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <FeaturesBlock image="/images/product/google-my-business.png"
                 features={features} title=" Key Features of Google My Business"/>
               <BenefitsBlock image="/images/product/google-my-business.png" 
               benefits={benefits} title="Benefits of Google My Business "/>
            </div>
            <ServiceModal cat="Google My Business"/>
        </div>
    );
}
