
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { genericType } from '@/types/genericSectionType'

const GenericSection = ({t1,t2,desc,urlImg,urlPage, o1, o2}: genericType) => {
  return (
    <div>
      <div className='flex flex-col md:flex-row font-serif px-3 py-2 mx-3 my-2 gap-2'> 
        <div className={`md:${o2} flex flex-col items-center  max-w-lg px-3 gap-2 place-items-center`}>
          <h1 className='text-3xl font-bold text-blue-600'>{t1}</h1>
          <h3 className='text-lg font-semibold'>{t2}</h3>
          <p>{desc}</p>
          <Button  className='bg-blue-500 hover:bg-blue-600 font-extrabold' type='button'><Link href={`${urlPage}`}>VISIT</Link></Button>
        </div>
        <div className={`${o1} place-items-center`}>
          <Image src={`${urlImg}`} alt={`section-${t1}}`} width={300} height={300}  unoptimized/>
        </div>
      </div>
    </div>
  )
}

export default GenericSection