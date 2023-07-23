"use client"
import ServiceModal from '@/components/ServiceModal';
import BenefitsBlock from '@/components/service/BenefitsBlock';
import FeaturesBlock from '@/components/service/FeaturesBlock';
import useWOW from '../../../components/useWOW';
export default function Page() {
    useWOW();
    const features = [ "Online Review Monitoring",
    "Review Generation",
    "Review Response and Engagement",
    "Social Media Monitoring",
    "Sentiment Analysis",
    "Brand Mentions Tracking",
    "Crisis Management",
    "Review Aggregation",
    "Competitor Analysis",
    "Local Business Listing Management",
    "Customer Feedback Management",
    "Reputation Repair Strategies"
    ];
    const benefits = [
        "Enhanced Online Reputation",
        "Increased Trust and Credibility",
        "Positive Brand Perception",
        "Improved Customer Relations",
        "Higher Customer Retention",
        "Boosted Local SEO Ranking",
        "Better Decision Making",
        "Proactive Issue Resolution",
        "Protection from Negative PR",
        "Competitive Advantage",
        "Consistent Brand Messaging",
        "Reputation Crisis Prevention"
    ];
    return (
        <div className=" bg-white">
            <h1 className='text-center text-4xl font-extrabold mb-3'>Reputation Management</h1>
            <hr className="border-t-2 border-blue-500 w-100 max-w-xs mx-auto my-4" />
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <FeaturesBlock image="/images/product/Reputation Management.png"
                 features={features} title=" Key Features of Reputation Management"/>
               <BenefitsBlock image="/images/product/Reputation Management.png" 
               benefits={benefits} title="Benefits of Reputation Management "/>
            </div>
            <ServiceModal cat="Reputation Management"/>
        </div>
    );
}
