import { SolarResType } from '@/types/solarType'
import React from 'react'

const SolarPredictResponse = ({res, setShowCard}: {res: SolarResType, setShowCard: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
       <div>
      <div className="absolute top-0 left-0 w-full h-full  z-10 bg-transparent flex items-center justify-center">
        <div className="bg-slate-200 p-6 rounded-lg shadow-lg max-w-sm w-full backdrop-blur-sm flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4">Solar Requirement</h2>
          <p>Estimated Solar Requirement for {res.city} {res.solar_requirement}Kw</p>
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

export default SolarPredictResponse