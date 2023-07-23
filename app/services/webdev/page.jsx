"use client"
import ServiceModal from '@/components/ServiceModal';
import BenefitsBlock from '@/components/service/BenefitsBlock';
import FeaturesBlock from '@/components/service/FeaturesBlock';
import useWOW from '../../../components/useWOW';
export default function Page() {
    useWOW();
    const features = [ "Responsive Design",
    "User-Friendly Interface",
    "Visual Appeal",
    "Content Management System (CMS)",
    "Search Engine Optimization (SEO)",
    "Integration of Social Media",
    "Contact Forms and Calls to Action",
    "Security Features",
    "Fast Loading Speed",
    "Cross-Browser Compatibility",
    "Integration of Analytics"
    ];
    const benefits = [
        "Global Reach",
        "24/7 Availability",
        "Credibility and Brand Image",
        "Increased Sales and Leads",
        "Cost-Effectiveness",
        "Data Collection and Analysis",
        "Competitive Advantage",
        "Improved Customer Support",
        "Long-Term Investment",
        "Adaptability and Scalability",
        "Showcase Portfolio and Testimonials"
    ];
    return (
        <div className=" bg-white">
            <h1 className='text-center text-4xl font-extrabold mb-3'>Website Design & Development</h1>
            <hr className="border-t-2 border-blue-500 w-100 max-w-xs mx-auto my-4" />
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <FeaturesBlock image="/images/product/website-design-development.png"
                 features={features} title=" Key Features of Website Design & Development"/>
               <BenefitsBlock image="/images/product/website-design-development.png" 
               benefits={benefits} title="Benefits of Website Design & Development "/>
            </div>
            <ServiceModal cat="Website Design & Development"/>
        </div>
    );
}
