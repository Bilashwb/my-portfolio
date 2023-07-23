import React from 'react'

export default function BenefitsBlock(props) {
    const {image,benefits,title}=props;
  return (
    <>
     <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 mb-4">
                    <div className="md:7/12 lg:w-6/12  wow slideInLeft" data-wow-duration="3s">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-2xl pb-3">
                            {title}</h2>
                        <br />
                        <ul className=" text-sm grid grid-cols-2 ">
                            {
                                benefits.map((item) => {
                                    return <>
                                        <li className="flex space-x-3 mb-3">
                                            <svg className="flex-shrink-0 h-6 w-6 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
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
                    <div className="md:5/12 lg:w-5/12 wow slideInLeft"  data-wow-duration="3s">
                        <img src={image} alt="image" loading="lazy" width="" height="" />

                        <div className="text-center mb-5">
                            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-modal-signup">
                                Get Service
                            </button>
                        </div>
                    </div>
                </div>
    </>
  )
}
