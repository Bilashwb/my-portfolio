import React from 'react'
const features=[
  {
    title: "Centralized Reservation Management",
    description: "Efficiently manage all reservations in one centralized system, reducing manual workload and ensuring accuracy."
  },
  {
    title: "Real-Time Room Availability Updates",
    description: "Get instant updates on room availability and rates, allowing dynamic pricing and maximizing revenue."
  },
  {
    title: "Guest Profile and History Tracking",
    description: "Maintain detailed guest profiles and histories for personalized services and improved guest satisfaction."
  },
  {
    title: "Automated Check-In and Check-Out",
    description: "Automate the check-in and check-out process to reduce wait times and enhance guest convenience."
  },
  {
    title: "Room and Rate Management",
    description: "Effortlessly manage room types, rates, and availability for optimal room utilization and revenue generation."
  },
  {
    title: "Housekeeping and Maintenance Scheduling",
    description: "Schedule and track housekeeping and maintenance tasks efficiently, ensuring rooms are well-maintained for guests."
  },
  {
    title: "Online Booking and Channel Integration",
    description: "Integrate with online booking platforms and channels for seamless bookings and increased online visibility."
  },
  {
    title: "Payment Processing and Invoicing",
    description: "Facilitate secure payment processing and automated invoicing for smooth financial transactions."
  },
  {
    title: "Reporting and Analytics",
    description: "Access comprehensive reports and analytics for data-driven insights to make informed business decisions."
  },
  {
    title: "Mobile Accessibility",
    description: "Enjoy the flexibility of managing operations and guest interactions on-the-go with mobile accessibility."
  },
  {
    title: "Guest Communication and Messaging",
    description: "Effectively communicate with guests through messaging features for personalized services and assistance."
  },
  {
    title: "Integration with POS Systems",
    description: "Seamlessly integrate with Point of Sale (POS) systems for streamlined billing and revenue tracking."
  },
  {
    title: "Inventory Management",
    description: "Efficiently manage and track inventory for consumables, amenities, and supplies."
  },
  {
    title: "Multi-Language Support",
    description: "Provide support for multiple languages to cater to international guests and improve communication."
  },
  {
    title: "Rate Parity and Yield Management",
    description: "Maintain rate parity across all distribution channels and optimize pricing for maximum revenue generation."
  },
  {
    title: "Guest Loyalty Programs",
    description: "Implement guest loyalty programs to reward loyal customers and encourage repeat bookings."
  }
];
export default function page() {
  return (
    <>

      <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
      <h1
          class="text-center bg-gradient-to-r pb-4 from-green-300 via-blue-500 to-purple-600 bg-clip-text  font-extrabold text-transparent sm:text-3xl"
        >
          Property Management Systems
        </h1>
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png" alt="" className="h-80 dark:bg-gray-500" />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
             
              <h3 className="text-xl font-bold">Property Management Systems (PMS) - Streamline Your Property Operations</h3>
              <p className="my-6 dark:text-gray-400">Discover the power of Property Management Systems (PMS) to streamline and automate your property operations. Our PMS solutions offer centralized management, real-time updates, and efficient guest handling, empowering you to optimize resources, enhance guest experiences, and boost revenue. Explore our comprehensive PMS features, including reservation management, room allocation, reporting, and more. Stay ahead in the competitive hospitality industry with our customizable and user-friendly PMS solutions.</p>
              <button type="button" class="py-2 px-4 self-start rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500">
                Get Demo
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
              <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
              <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
              <button type="button" className="self-start">Action</button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
              <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
              <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
              <button type="button" className="self-start">Action</button>
            </div>
          </div>
        </div>
      </section>
      <div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div className="max-w-3xl mx-auto text-center">
			<h2 className="text-3xl font-extrabold sm:text-4xl">All the features of PMS</h2>
		
		</div>
		<dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
		
    
    	{
        features.map((item)=>{
          return <>
          <div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-md text-blue-600 font-semibold">{item.title}</dt>
					<dd className="mt-2 text-sm dark:text-gray-400">{item.description}</dd>
				</div>
			</div>
          </>
        })
      }
	


		</dl>
	</div>
</div>

    </>
  )
}
