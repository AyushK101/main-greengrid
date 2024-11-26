import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=' min-h-32 max-h-20 bg-slate-400 border-t-2 shadow-stone-900 shadow text-center grid grid-cols-2 px-10 py-4 place-items-center'>
      <Link href={'/'}>
            <Image src={'/logo_black.png'} alt='logo' width={250} height={150} className="rounded-md w-auto h-auto"/>
          </Link>
      <h1 className='text-pretty text-xl font-bold'>
        -GreenGrid
        <h1 className=''> @Innotech_2k24</h1>  
      </h1>
      
    </div>
  )
}

export default Footer