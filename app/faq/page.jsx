import React from 'react'
import FAQ from './FAQ';
export default function page() {
    const FAQs = [
        {
          question: "What is hospitality?",
          answer: "Hospitality refers to the friendly and generous reception and entertainment of guests, visitors, or strangers. In the context of the hospitality industry, it involves providing services, accommodations, and experiences to guests, ensuring their comfort and satisfaction."
        },
        {
          question: "What types of establishments fall under the hospitality industry?",
          answer: "The hospitality industry includes a wide range of establishments, such as hotels, resorts, motels, bed and breakfasts, hostels, restaurants, bars, cafes, event venues, cruise lines, and various other businesses that offer services to travelers and guests."
        },
        {
          question: "How important is customer service in the hospitality industry?",
          answer: "Customer service is of paramount importance in the hospitality industry. It directly impacts guest satisfaction and loyalty. Providing exceptional customer service creates positive experiences, encourages repeat business, and generates positive word-of-mouth referrals."
        },
        {
          question: "What is revenue management in hospitality?",
          answer: "Revenue management in hospitality involves strategies and techniques to optimize pricing and inventory availability to maximize revenue and profitability. It aims to balance supply and demand, considering factors such as seasonality, market trends, and guest behavior."
        },
        {
          question: "How does sustainability play a role in the hospitality industry?",
          answer: "Sustainability is increasingly crucial in the hospitality industry to minimize the environmental and social impact of operations. Many establishments adopt eco-friendly practices, promote energy efficiency, reduce waste, and support local communities to contribute positively to the environment and society."
        },
        {
          question: "What are the typical amenities offered in hotels?",
          answer: "Amenities in hotels vary depending on their star rating and target market. Common amenities include Wi-Fi access, room service, fitness centers, swimming pools, business centers, restaurants, concierge services, and complimentary toiletries."
        },
        {
          question: "How can hotels improve online visibility and attract more guests?",
          answer: "Hotels can improve online visibility by maintaining a user-friendly website, optimizing for search engines (SEO), engaging in social media marketing, leveraging online travel agencies (OTAs), and encouraging positive guest reviews on platforms like TripAdvisor and Google."
        },
        {
          question: "What is the significance of guest reviews and feedback in the hospitality industry?",
          answer: "Guest reviews and feedback are essential in the hospitality industry as they provide valuable insights into the guest experience. Positive reviews can attract more guests, while constructive feedback helps hotels identify areas for improvement to enhance guest satisfaction."
        },
        {
          question: "How can the hospitality industry adapt to changing traveler preferences and trends?",
          answer: "The hospitality industry can adapt by staying updated on current traveler preferences, embracing technology for contactless services, offering personalized experiences, and incorporating sustainable practices to meet the evolving needs of modern travelers."
        },
        {
          question: "What does it take to succeed in the hospitality industry?",
          answer: "Success in the hospitality industry requires a strong focus on guest satisfaction, excellent customer service, attention to detail, constant innovation, adaptability, a skilled and motivated workforce, and a commitment to continuous improvement."
        }
      ];
            
  return (
  <>

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Your questions, answered</h2>
    <p class="mt-1 text-gray-600 dark:text-gray-400">Answers to the most frequently asked questions.</p>
  </div>
 

  <div class="max-w-2xl mx-auto">
  
    <div class="hs-accordion-group">


    {
    FAQs.map((item)=>{
        return <FAQ question={item.question} answer={item.answer} key={Math.random()}/>
    })
}


    </div>
  </div>
</div>
  </>

  )
}
