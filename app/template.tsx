import Transition from '@/components/Transition'
import React from 'react'

const Template = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Transition>
        {children}
      </Transition>
    </div>
  )
}

export default Template