import LogoHome from '@/components/LogoHome'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="hidden logohide:inline-block">
        <LogoHome/>
        </div>
      </div>
      {children}

    </div>
  )
}

export default layout