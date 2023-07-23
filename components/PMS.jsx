import React from 'react'

const data=[{
  title:'POS',
  image:''
},
{
  title:'Materials Management',
  image:''
},
{
  title:'Front Office',
  image:''
},
{
  title:'Food & Beverage Costing',
  image:''
},
{
  title:'House Keeping',
  image:''
},
{
  title:'HR & Payroll',
  image:''
},
{
  title:'Accounts Receivable',
  image:''
},
{
  title:'Banquets Management',
  image:''
},
];
export default function PMS() {
  return (
    <div>
        <section class="bg-white dark:bg-gray-900 pb-12">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-2 wow bounceInUp"   data-wow-duration="2s" data-wow-delay="1s" >
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
             Our PMS
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="07690130-d013-42bc-83f4-90de7ac68f76"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{' '}
            Property Management System 
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          EasyGoRooms offers a Property Management System (PMS) to ensure seamless and efficient management of properties for our clients.
          </p>
        </div>
        <div class="gap-16 mt-6 px-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  p-0">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white"><span className='text-blue-800'>Key Feature's of PMS</span></h2>
                
                <div className="grid grid-cols-2 gap-4 pt-6">


        {
          data.map((item)=>{
            return ( <div className="p-4 rounded-md shadow-md flex items-center">
            <img className="w-8 h-8 mr-2" src="/list.png" alt="Feature 4 Icon" />
            <h3 className="text-base font-black">{item.title}</h3>
          </div>);
          })
        }


</div>
<div class="flex justify-end space-x-4 mt-8 ">
<button  data-hs-overlay="#hs-slide-up-animation-modal" type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
  Get Demo
</button>
<a type="button" class="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500">
  Know More
</a>
</div>

            </div>
            <div class="grid grid-cols-1 mt-6">
                <img class="w-4/5 rounded-lg" src="/images/pms.jpeg" alt="office content 1"/>
                
            </div>
        </div>
    </section>
    </div>
  )
}
