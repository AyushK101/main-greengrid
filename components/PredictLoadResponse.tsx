import React from 'react'
import { resType } from '@/types/predictType'


interface PredictLoadResponseProps {
  responseData: resType; // Adjust this type to match your data structure
  setShowCard: React.Dispatch<React.SetStateAction<boolean>>; // Function to close the card
}
const PredictLoadResponse: React.FC<PredictLoadResponseProps> = ({responseData,setShowCard}) => {
 
// debugger
  // console.log(responseData.cooling_load)
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full  z-10 bg-transparent flex items-center justify-center">
        <div className="bg-slate-200 p-6 rounded-lg shadow-lg max-w-sm w-full backdrop-blur-sm flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4">Results</h2>
          <p>Heating Load: {responseData.heating_load}</p>
          <p >Cooling Load: {responseData.cooling_load}</p>
          <p>Fan Hours: {responseData.fan_hours}</p>
          <p>AC Hours: {responseData.ac_hours}</p>
          <button
            onClick={() => setShowCard(false)}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default PredictLoadResponse