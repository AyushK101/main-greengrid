"use client"

import React, { useState } from 'react'
import AddedAppliance from './AddedAppliance'
import { ApplianceListType, SolarResType } from '@/types/solarType'
import {v4 as uuid4v} from 'uuid'
import axios from 'axios'
import SolarPredictResponse from './SolarPredictResponse'
import LogoHome from '@/components/LogoHome'



const SolarBill = () => {
   const clx = "bg-solar min-h-screen min-w-screen bg-cover bg-no-repeat  "
   const [city,setCity] = useState("");
   const [applianceList, setApplianceList] = useState<ApplianceListType[]>([]);
   const [appliance, setAppliance] = useState("");
   const [quantity, setQuantity] = useState(1);
   const [usageHours, setUsageHours] = useState(0);
   const [showCard,setShowCard] = useState(false);
   const [res,setRes] = useState<SolarResType>({"city": "Mumbai", "solar_requirement": 0.44});
   const [loading, setLoading] = useState(false);
 
   const handleAddAppliance = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
     // Validate inputs
    e.preventDefault();
     if (!appliance || quantity <= 0 || usageHours <= 0 ) {
       alert("Please fill all fields with valid values.");
     } else if (city == "") {
      alert("please enter city");
     } else if (usageHours > 24) {
      alert("usage hours can't be more than 24");
     } else {
      const id = String(uuid4v());
      setApplianceList([
        ...applianceList,
        { id, appliance, quantity, usageHours },
      ]);
     }
   };
 
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     if(applianceList.length < 1) {
      alert("at least one data is required");
     } else {
      setLoading(true);
      const response = await axios.post("http://localhost:9000/calculate-solar/",{applianceList,city})
      setLoading(false  )
      setRes(response.data)
      setShowCard(true)
     }

     // Perform further actions, like sending data to a backend
   };
 
   return (
    <>
    { showCard && applianceList.length > 0 && <SolarPredictResponse res={res} setShowCard={setShowCard}/>}
     <div className={`${clx} grid grid-cols-1  md:grid-cols-2 gap-2 overflow-x-hidden `}>
      <div className=" logohide:hidden">
        <LogoHome/>
        </div>

      <div className="relative left-2 justify-self-end top-16 p-3  min-w-full backdrop-blur-lg h-fit rounded-lg border-2 ">
       <h1 className="text-2xl font-bold text-center min-w-full">Solar Panel Calculator</h1>
       <form
         id="solarCalculatorForm"
         method="post"
         className="space-x-2 space-y-2 flex flex-col min-w-full"
         onSubmit={handleSubmit}
       >
         {/* City Dropdown */}
         <label className="block">
           <span className="text-gray-700">City</span>
           <select
             id="city"
             name="city"
             className="mt-1 block w-full  rounded-md p-2 bg-transparent border-2"
             required
             
             onChange={(e)=> setCity(e.target.value)}
           >
             <option value="">select city</option>
             <option value="Mumbai" >Mumbai</option>
             <option value="Delhi">Delhi</option>
             <option value="Chennai">Chennai</option>
             <option value="Bangalore">Bangalore</option>
             <option value="Kolkata">Kolkata</option>
             <option value="Pune">Pune</option>
             <option value="Bhopal">Bhopal</option>
             <option value="Indore">Indore</option>
           </select>
         </label>
 
         {/* Appliance Dropdown */}
         <label className="block">
           <span className="text-gray-700">Appliance</span>
           <select
             id="appliance"
             name="appliance"
             value={appliance}
             onChange={(e) => setAppliance(e.target.value)}
             className="mt-1 block w-full  rounded-md p-2 bg-transparent border-2"
             required
           >
             <option value="">Select Appliance</option>
             <option value="Refrigerator">Refrigerator</option>
             <option value="Air Conditioner">Air Conditioner</option>
             <option value="Washing Machine">Washing Machine</option>
             <option value="Lighting">Lighting</option>
             <option value="TV">TV</option>
             <option value="Microwave">Microwave</option>
             <option value="Fan">Fan</option>
             <option value="Computer">Computer</option>
           </select>
         </label>
 
         <label className="block">
           <span className="text-gray-700">Quantity</span>
           <input
             type="number"
             id="quantity"
             value={quantity}
             onChange={(e) => { 
              const value = parseInt(e.target.value, 10)
              setQuantity(Number.isNaN(value) ? 0 : value)}}
             placeholder="Number of appliances"
             min="1"
             className="mt-1 block w-full  rounded-md p-2 bg-transparent border-2"
           />
         </label>
 
         {/* Daily Consumption Input */}
         <label className="block">
           <span className="text-gray-700">Daily Consumption (Hours/Day)</span>
           <input
             type="number"
             id="usage_hours"
             value={usageHours}
             onChange={(e) => { 
              const value = parseInt(e.target.value, 10)
              setUsageHours(Number.isNaN(value) ? 0 : value)}}
             placeholder="Hours per day"
             min="0"
             max="24"
             step="0.5"
             className="mt-1 block w-full  rounded-md p-2 bg-transparent border-2"
           />
         </label>
 
         <button
           type="button"
           disabled={loading}
           onClick={(e) => handleAddAppliance(e)}
           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
         >
           Add Appliance
         </button>
 
        
         {/* Submit Button */}
         <button
           type="submit"
           disabled={loading}
           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
         >
           
           {loading ? "Calcuating ........." : "Calculate Solar Requirement"} 
         </button>
       </form>
     </div>
     <br className='md:hidden'/>
     <div className='relative md:top-24 justify-items-start flex flex-col items-center   p-3   md:min-w-min  backdrop-blur-lg  rounded-lg border-r-2 border-2  my-5 min-h-96 max-h-96 overflow-scroll  mx-3'>
     <AddedAppliance applianceList={applianceList} setApplianceList={setApplianceList}/>
     </div>
     </div>
     </>
   );
}

export default SolarBill
// relative md:top-24 justify-items-start flex flex-col items-center   p-3   md:max-w-md backdrop-blur-lg h-fit rounded-lg border-r-2 border-t-2 border-b-2 border-l-2 md:border-l-0  my-5 min-h-96 max-h-96 overflow-scroll min-w-full mx-3