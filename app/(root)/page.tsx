import Header from "@/components/Header"
import GenericSection from "@/components/GenericSection";
import { genericType } from "@/types/genericSectionType";
// import Footer from "@/components/Footer";  
import { Suspense } from "react";
import Loader from "@/components/Loadder";

const config: genericType[] = [
  {
    t1: "Predict Building Energy Loads",
    t2: "Calculate Heating & Cooling Loads",
    desc: "Enter your building's physical features—like size, insulation type, and window area—to predict the energy needed for heating and cooling. This feature provides a tailored estimate, helping you understand energy demands, pinpoint areas for potential savings, and optimize consumption for a more efficient, sustainable space.",
    urlImg: "/s1.webp",
    urlPage: "/predict",
    o1: "order-last",
    o2: "order-first",
  },
  {
    t1: "Solar Panel Calculator",
    t2: "Maximize Your Renewable Energy",
    desc: "Use our Solar Panel Calculator to find the optimal number of solar panels for your space, based on factors like roof size, sunlight exposure, and energy needs. Maximize solar power, lower your energy bills, and reduce dependence on the grid for a more sustainable future.",
    urlImg: "/s2.webp",
    urlPage: "/solar",
    o2: "order-last",
    o1: "order-first",
  },
  {
    t1: "Chat with GreenGrid AI",
    t2: "Your Energy Assistant",
    desc: "Got questions or need assistance? Chat with Photon AI, our smart chatbot built to tackle all your energy-related inquiries. Whether you’re looking for tips on energy efficiency, troubleshooting advice, or guidance on optimizing energy use, Photon AI provides real-time solutions to help you make informed decisions effortlessly.",
    urlImg: "/s3.webp",
    urlPage: "/chat",
    o2: "order-first",
    o1: "order-last",
  }
]

export default function Home() {
  return (
    <>
    <Suspense fallback={<Loader/>}>
      <section className="bg-section-2 bg-no-repeat bg-center bg-cover min-h-screen">
        <Header />
      </section>
      <section className="flex justify-center ">
        <section className="relative  bottom-36 bg-no-repeat  bg-mid min-h-80 min-w-80 "></section>
      </section>
      <section className=" mx-auto max-w-3xl">
        {config.map(s => {
          return <GenericSection key={s.t1} {...s} />
        })}
      </section>
     
      </Suspense>
    </>

  );
}
