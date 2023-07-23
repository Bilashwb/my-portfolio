import Brands from "@/components/Brands";
import ChoseUs from "@/components/ChoseUs";
import { Feature } from "@/components/Feature";
import Hero from "@/components/Hero";
import Stat from "@/components/Stat";

import Product from "@/components/product/Product";
import Team from "@/components/team/Team";
import PMS from "@/components/PMS";
import Map from "@/components/Map";

export default function Home() {
  return (
    <>
  <div className="ontainer mx-auto px-4">
  <div className="px-4">
   
    <Hero/>
    <Feature/>
    <Product/>
    <ChoseUs/>
  
   <PMS/>
    <Brands/>
   <Map/>
 <Stat/>
  {/* <ReviewCard/> */}
  
  {/* <Team/> */}
  </div>

  </div>
    </>
  )
}
