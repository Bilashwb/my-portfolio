import React from 'react'

export default function 
(props) {
    const {image,title,subtitle,url}=props;
  return (
   <>
   <div >
    <div className="relative mb-12">
                <div className="overflow-hidden rounded-lg shadow-2xl border-cyan-800">
                  <img
                    src={image}
                    alt="portfolio"
                    className="w-full "
                  />
                </div>
                <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-9 px-3 text-center shadow-lg">
                 
                  <h3 className="mb-4 text-lg font-semibold text-dark">
                    {title}
                  </h3>
                  <span className="mb-2 block text-sm text-primary">
                    {subtitle}
                  </span>
                  <a
                    href={url}
                    className="inline-block rounded-md border py-3 px-7 text-sm font-semibold text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
                  >
                    View Details
                  </a>
                </div>
              </div>
              </div>
   </>
  )
}
