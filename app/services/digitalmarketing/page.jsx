"use client"
import ServiceModal from '@/components/ServiceModal';
import BenefitsBlock from '@/components/service/BenefitsBlock';
import FeaturesBlock from '@/components/service/FeaturesBlock';
import useWOW from '../../../components/useWOW';
export default function Page() {
    useWOW();
    const features = ["Website Development and Optimization", 
    "Search Engine Optimization (SEO)", "Pay-Per-Click Advertising (PPC)",
        "Social Media Marketing (SMM)", "Content Marketing", "Email Marketing",
        "Influencer Marketing", "Affiliate Marketing", "Online PR and Reputation Management",
        "Video Marketing", "Mobile Marketing","Data Analytics and Reporting","Marketing Automation",
        "Chatbots and AI","Web Analytics"
    ];
    const benefits = [
        "Global Reach", "Cost Effective", "Targeted Audience",
        "Measurable Results", "Personalization","24/7 Availability",
        "Interactivity and Engagement","Real-Time Communication",
        "Brand Awareness","Flexibility and Adaptability","Competitive Advantage",
        "Integration with Traditional Marketing"
    ];
    return (
        <div className=" bg-white">
            <h1 className='text-center text-4xl font-extrabold mb-3'>Digital Marketing</h1>
            <hr className="border-t-2 border-blue-500 w-100 max-w-xs mx-auto my-4" />
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <FeaturesBlock image="/images/product/digital-marketing.png"
                 features={features} title=" Key Features of Digital Marketing"/>
               <BenefitsBlock image="/images/product/digital-marketing.png" 
               benefits={benefits} title="Benefits of Digital Marketing "/>
            </div>
            <ServiceModal cat="Digital Marketing"/>
        </div>
    );
}
