"use client"
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const LogoHome = () => {
  const path = usePathname()
  console.log(path)
  let clx = "my-1 mx-2  absolute "
  if(path == '/solar'){
    clx = cn(clx,' md:inline-block',"flex justify-center")
  }
  return (
    <div className={`${clx} z-10`}>
      <Link href={'/'}>
            <Image src={'/logo_black.png'} alt='logo' width={250} height={150} className="rounded-md w-auto h-auto"/>
          </Link>
    </div>
  )
}

export default LogoHome