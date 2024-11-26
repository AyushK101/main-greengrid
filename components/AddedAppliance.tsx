import React from 'react'

import { AddedApplianceType } from '@/types/solarType'
import { Button } from './ui/button'

const AddedAppliance = ({applianceList, setApplianceList}: AddedApplianceType) => {
  
  function removeBtn(key: string ) {
    setApplianceList( prev => {
      return prev.filter( appliance => appliance.id != key )
    })
  }
  return (
    <div className=''>
      {/* Display Added Appliances */}
      <div id="applianceList" className="mt-4">
           <h2 className="text-xl font-semibold mb-2">Added Appliances:</h2>
           {applianceList.length > 0 ? (
             applianceList.map((item) => (
               <div
                 key={item.id}
                 className="flex items-center justify-between border-b py-2"
               >
                 <span className='mr-2'>
                   {item.appliance} - Quantity: {item.quantity}, Hours:{" "}
                   {item.usageHours}
                 </span>
                 <Button variant={'destructive'} onClick={()=> removeBtn(item.id)}>remove</Button>
               </div>
             ))
           ) : (
             <p className="text-gray-500">No appliances added yet.</p>
           )}
         </div>
 
    </div>
  )
}

export default AddedAppliance