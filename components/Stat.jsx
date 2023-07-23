"use client"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


export default function Stat() {
  return (
    <div className="App">
      <div className="content" />
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
      <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="text-center">
          <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto wow bounceInUp"  data-wow-duration="1s">
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
             Overview Our Company
          </h2>
          </div>
  
          <div class="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
              <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                  <div class="px-4 py-6">
                      <div class="flex items-start">
                          <svg class="flex-shrink-0 w-12 h-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <circle cx="10" cy="6" r="4" stroke="#0000FF" stroke-width="1.5"/>
<path d="M18.0429 12.3656L18.4865 11.7609L18.4865 11.7609L18.0429 12.3656ZM19 8.69135L18.4813 9.23307C18.7713 9.51077 19.2287 9.51077 19.5187 9.23307L19 8.69135ZM19.9571 12.3656L19.5135 11.7609L19.5135 11.7609L19.9571 12.3656ZM19 12.8276L19 13.5776H19L19 12.8276ZM18.4865 11.7609C18.0686 11.4542 17.6081 11.0712 17.2595 10.6681C16.8912 10.2423 16.75 9.91131 16.75 9.69673H15.25C15.25 10.4666 15.6912 11.1479 16.1249 11.6493C16.5782 12.1735 17.1391 12.6327 17.5992 12.9703L18.4865 11.7609ZM16.75 9.69673C16.75 9.12068 17.0126 8.87002 17.2419 8.78964C17.4922 8.70189 17.9558 8.72986 18.4813 9.23307L19.5187 8.14963C18.6943 7.36028 17.6579 7.05432 16.7457 7.3741C15.8125 7.70123 15.25 8.59955 15.25 9.69673H16.75ZM20.4008 12.9703C20.8609 12.6327 21.4218 12.1735 21.8751 11.6493C22.3088 11.1479 22.75 10.4666 22.75 9.69672H21.25C21.25 9.91132 21.1088 10.2424 20.7405 10.6681C20.3919 11.0713 19.9314 11.4542 19.5135 11.7609L20.4008 12.9703ZM22.75 9.69672C22.75 8.59954 22.1875 7.70123 21.2543 7.37409C20.3421 7.05432 19.3057 7.36028 18.4813 8.14963L19.5187 9.23307C20.0442 8.72986 20.5078 8.70189 20.7581 8.78964C20.9874 8.87002 21.25 9.12068 21.25 9.69672H22.75ZM17.5992 12.9703C17.9678 13.2407 18.3816 13.5776 19 13.5776L19 12.0776C18.9756 12.0776 18.9605 12.0775 18.9061 12.0488C18.8202 12.0034 18.7128 11.9269 18.4865 11.7609L17.5992 12.9703ZM19.5135 11.7609C19.2872 11.9269 19.1798 12.0034 19.0939 12.0488C19.0395 12.0775 19.0244 12.0776 19 12.0776L19 13.5776C19.6184 13.5776 20.0322 13.2407 20.4008 12.9703L19.5135 11.7609Z" fill="#1C274C"/>
<path d="M17.9975 18C18 17.8358 18 17.669 18 17.5C18 15.0147 14.4183 13 10 13C5.58172 13 2 15.0147 2 17.5C2 19.9853 2 22 10 22C12.231 22 13.8398 21.8433 15 21.5634" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                          </svg>
                          <div class="ml-4">
                              <h4 class="text-4xl font-bold text-gray-900">{isVisible ? <CountUp end={98} /> : null} %</h4>
                              <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Client Retention</p>
                          </div>
                      </div>
                  </div>
              </div>
  
              <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                  <div class="px-4 py-6">
                      <div class="flex items-start">
                          <svg class="flex-shrink-0 w-12 h-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          
                          <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1"
                                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                              />
                         </svg>
                          <div class="ml-4">
                              <h4 class="text-4xl font-bold text-gray-900">{isVisible ? <CountUp end={150} /> : null}+</h4>
                              <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Cumilitive</p>
                          </div>
                      </div>
                  </div>
              </div>
  
              <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                  <div class="px-4 py-6">
                      <div class="flex items-start">
                          <svg class="flex-shrink-0 w-12 h-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <div class="ml-4">
                              <h4 class="text-4xl font-bold text-gray-900">{isVisible ? <CountUp end={30} /> : null}+</h4>
                              <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Professional Team Member</p>
                          </div>
                      </div>
                  </div>
              </div>
  
              <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                  <div class="px-4 py-6">
                      <div class="flex items-start">
                          <svg class="flex-shrink-0 w-12 h-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <div class="ml-4">
                              <h4 class="text-4xl font-bold text-gray-900">{isVisible ? <CountUp end={200} /> : null}+</h4>
                              <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Hotel</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  
        )}
      </VisibilitySensor>
    </div>
  );
}