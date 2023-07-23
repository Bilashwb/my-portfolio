import React from 'react'

export default function Clients() {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-8 mx-auto">
<h1 className='text-center text-4xl text-blue-700 font-extrabold pb-4'>Our Happy Clients</h1>
      <div class="my-8 md:my-16 grid grid-cols-3 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
   
    
        <p class="flex-shrink-0 transition hover:-translate-y-1" >
         <img src="/images/hotels/1.jpg"  alt="" width={100} />
        </p>
    
        <p class="flex-shrink-0 transition hover:-translate-y-1" >
        <img src="/images/hotels/2.png"  alt=""  width={100} />
        </p>
    
        <p class="flex-shrink-0 transition hover:-translate-y-1">
        <img src="/images/hotels/3.png"  alt=""  width={100} />
        </p>
    
        <p class="flex-shrink-0 transition hover:-translate-y-1">
        <img src="/images/hotels/4.png"  alt=""  width={100} />
        </p>

      </div>

      <div class="grid grid-cols-12 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
        <div class="col-span-6 text-center">
          <h4 class="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
          30+
          </h4>
          <h4 class="text-sm text-gray-600 dark:text-gray-400">
          Professional Team Member
          </h4>
        </div>
    
        <div class="col-span-6 text-center">
          <h4 class="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
          150+
          </h4>
          <h4 class="text-sm text-gray-600 dark:text-gray-400">
          Cumilitive
          </h4>
        </div>
    
        <div class="col-start-4 col-span-6 text-center">
          <h4 class="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
          200+
          </h4>
          <h4 class="text-sm text-gray-600 dark:text-gray-400">
          Hotel
          </h4>
        </div>
      </div>
    </div>
  )
}
