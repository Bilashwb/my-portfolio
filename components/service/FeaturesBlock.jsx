import React from 'react'

export default function FeaturesBlock(props) {
    const {image,features,title}=props;
  return (
   <>
   <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12  mb-6" >
                    <div className="md:5/12 lg:w-5/12 wow bounceInUp" data-wow-duration="3s">
                        <img src={image} alt="image" loading="lazy" width="" height="" />
                        <div className="text-center mb-1">
                            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-modal-signup">
                                Get Service
                            </button>
                        </div>
                    </div>
                    <div className="md:7/12 lg:w-6/12 wow slideInRight" data-wow-duration="3s">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-2xl pb-3">{title}</h2>
                        <br />
                        <ul className=" text-sm grid grid-cols-2 ">
                            {
                                features.map((item) => {
                                    return <>
                                        <li className="flex space-x-3 mb-3">
                                            <svg className="flex-shrink-0 h-6 w-6" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" className="fill-blue-500" />
                                                <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" className="fill-white" />
                                            </svg>
                                            <span className="text-gray-800 dark:text-gray-400">
                                                {item}
                                            </span>
                                        </li>
                                    </>
                                })
                            }
                        </ul>
                    </div>
                </div>
   </>
  )
}
