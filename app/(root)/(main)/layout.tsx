import LogoHome from '@/components/LogoHome'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      {<LogoHome/>}
      {children}

    </div>
  )
}

export default layout