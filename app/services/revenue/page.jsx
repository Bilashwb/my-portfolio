"use client"
import ServiceModal from '@/components/ServiceModal';
import BenefitsBlock from '@/components/service/BenefitsBlock';
import FeaturesBlock from '@/components/service/FeaturesBlock';
import useWOW from '../../../components/useWOW';
export default function Page() {
    useWOW();
    const features = ["Demand Forecasting",
    "Dynamic Pricing",
    "Competitor Analysis",
    "Inventory Management",
    "Optimized Distribution Channels",
    "Rate Parity Monitoring",
    "Seasonal Pricing Strategies",
    "Yield Management",
    "Real-Time Analytics",
    "Integration with Booking Platforms",
    "Data Integration and Centralization",
    "Customizable Reporting"
    ];
    const benefits = [
        "Maximized Revenue and Profits",
        "Optimized Room Rates",
        "Improved Demand Prediction",
        "Real-Time Market Adaptation",
        "Better Inventory Utilization",
        "Competitive Pricing Strategies",
        "Increased Occupancy Rates",
        "Enhanced Customer Segmentation",
        "Effective Marketing Strategies",
        "Reduced Manual Workload",
        "Data-Driven Decision Making",
        "Improved Overall Financial Performance"
    ];
    return (
        <div className=" bg-white">
            <h1 className='text-center text-4xl font-extrabold mb-3'>Revenue Management</h1>
            <hr className="border-t-2 border-blue-500 w-100 max-w-xs mx-auto my-4" />
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <FeaturesBlock image="/images/product/Revenue Management.png"
                 features={features} title=" Key Features of Revenue Management"/>
               <BenefitsBlock image="/images/product/Revenue Management.png" 
               benefits={benefits} title="Benefits of Revenue Management "/>
            </div>
            <ServiceModal cat="Revenue Management"/>
        </div>
    );
}
