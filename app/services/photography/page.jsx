"use client"
import ServiceModal from '@/components/ServiceModal';
import BenefitsBlock from '@/components/service/BenefitsBlock';
import FeaturesBlock from '@/components/service/FeaturesBlock';
import useWOW from '../../../components/useWOW';
export default function Page() {
    useWOW();
    const features = [     
    "Professional Photography Services",
    "High-Quality Image Capture",
    "Photo Editing and Retouching",
    "Stunning Visual Content Creation",
    "Product Photography",
    "Portrait Photography",
    "Event Photography",
    "Real Estate Photography",
    "Landscape Photography",
    "Aerial Photography",
    "360-Degree Photography",
    "Photo Licensing and Copyright",
    "Social Media Marketing",
    "Digital Advertising",
    "Content Marketing",
    "Influencer Marketing",
    "Email Marketing Campaigns",
    "Search Engine Optimization (SEO)",
    "Online PR and Reputation Management",
    "Video Marketing",
    "Social Media Influencer Partnerships",
    "Affiliate Marketing",
    "Branding and Identity",
    "Website Development and Optimization"
    ];
    const benefits = [
        "Professional Image Representation",
        "Enhanced Visual Appeal",
        "Increased Engagement and Interest",
        "Improved Brand Perception",
        "Higher Sales and Conversions",
        "Effective Product Presentations",
        "Memorable Event Documentation",
        "Showcasing Real Estate Properties",
        "Capturing Beautiful Sceneries",
        "Unique and Creative Perspectives",
        "Interactive and Immersive Content",
        "Legal Protection and Usage Rights",
        "Wider Audience Reach",
    "Improved Brand Awareness",
    "Increased Website Traffic",
    "Boosted Online Presence",
    "Influential Audience Exposure",
    "Effective Customer Engagement",
    "Higher Lead Generation",
    "Positive Online Reputation",
    "Improved Search Engine Ranking",
    "Collaborative Marketing Impact",
    "Consistent Brand Messaging",
    "Optimized User Experience"
    ];
    return (
        <div className=" bg-white">
            <h1 className='text-center text-4xl font-extrabold mb-3'>Photography & Promotion</h1>
            <hr className="border-t-2 border-blue-500 w-100 max-w-xs mx-auto my-4" />
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <FeaturesBlock image="/images/product/photography.png"
                 features={features} title=" Key Features of Photography & Promotion"/>
               <BenefitsBlock image="/images/product/photography.png" 
               benefits={benefits} title="Benefits of Photography & Promotion "/>
            </div>
            <ServiceModal cat="Photography & Promotion"/>
        </div>
    );
}
