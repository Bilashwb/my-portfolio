"use client"
import ServiceModal from '@/components/ServiceModal';
import BenefitsBlock from '@/components/service/BenefitsBlock';
import FeaturesBlock from '@/components/service/FeaturesBlock';
import useWOW from '../../../components/useWOW';
export default function Page() {
    useWOW();
    const features = [
    "Real-Time Booking and Availability Updates",
    "Centralized Reservation System",
    "Online Booking Engine Integration",
    "Automated Confirmation and Reminders",
    "Reservation Calendar and Scheduling",
    "Guest Profile Management",
    "Multiple Payment Options",
    "Room and Resource Allocation",
    "Customizable Booking Rules",
    "Reporting and Analytics",
    "Mobile-Friendly Interface",
    "Integration with Property Management Systems (PMS)"
    ];
    const benefits = [
        "Streamlined Reservation Process",
        "Improved Booking Efficiency",
        "Increased Revenue and Occupancy",
        "Enhanced Guest Experience",
        "Reduced Manual Workload",
        "Minimized Overbooking and Double Bookings",
        "Real-Time Availability Management",
        "Seamless Online Booking Experience",
        "Better Resource Allocation",
        "Data-Driven Decision Making",
        "Access to Booking Insights and Trends",
        "Efficient Management on the Go"
    ];
    return (
        <div className=" bg-white">
            <h1 className='text-center text-4xl font-extrabold mb-3'>Reservation Management</h1>
            <hr className="border-t-2 border-blue-500 w-100 max-w-xs mx-auto my-4" />
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <FeaturesBlock image="/images/product/Reservation-Management.png"
                 features={features} title=" Key Features of Reservation Management"/>
               <BenefitsBlock image="/images/product/Reservation-Management.png" 
               benefits={benefits} title="Benefits of Reservation Management "/>
            </div>
            <ServiceModal cat="Reservation Management"/>
        </div>
    );
}
