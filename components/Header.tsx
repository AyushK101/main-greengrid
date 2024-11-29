import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import HeaderDropdown from './Header-dropdown'
import MobileDropdown from './Mobile-Dropdown'

const Header = async () => {
  const session = await auth()
  // console.log(session)
  return (
    <>
    {/* <motion.div animate={{
    transition: {duration: 2  }
    }}> */}
      <header className="flex gap-x-4 justify-evenly px-10 md:px-20 py-5 min-w-full ">
        <div className='absolute left-4 hidden sm:inline-block'>
        <Link href={`https://www.kiet.edu/`}>
          <Image src={'/kiet.png'} height={100} width={100} alt='kiet-logo' />
        </Link>
        </div>
          <Link href={'/'}>
            <Image src={'/logo_black.png'} alt='logo' width={250} height={150} className="rounded-md w-auto h-auto"/>
          </Link>
        <nav className='lg:flex justify-evenly items-center gap-x-5 md:grid md:grid-cols-2 text-center hidden'>
          <HeaderDropdown />
          {/* <Link href={'/energy'}>
            <button type='submit' className='button-util'>ENERGY ANALYTICS</button>
          </Link> */}
          {/* <Link href={'/contact'}>
            <button type='submit' className='button-util '>DONATE</button>
          </Link> */}
          {
            session && session?.user ?  (
              <form action={async ()=>{
                "use server"
                await signOut()
              }}>
                <button type='submit' className='button-util'>LOGOUT</button>
              </form>
            ) : (
              <form action={async ()=>{
                "use server"
                await signIn('github');
              }
              }>
                <button type='submit' className='button-util'>LOGIN</button>
              </form>
            ) 
          }
        {/* <ModeToggle /> */}
        </nav>
        <div className='md:hidden flex items-center'>
            <MobileDropdown/>
          </div>

      </header>
            {/* </motion.div> */}
      <div className=" text-white flex flex-col justify-center items-center gap-3 px-4 py-2 my-3 mx-1">
        <h1 className='text-4xl text-earthlyBrown mb-5 font-subTitle text-center'>&quot;Making Energy Management Smarter Than Ever&quot;</h1>
        <h2 className='max-w-xl text-2xl font-mono font-bold   text-center text-wrap text-black z-20'>&quot;Predict energy needs, plan solar solutions, and save smarter with Photon AI. Your all-in-one platform for efficient, sustainable energy choices.&quot;</h2>
        <Button className='bg-blue-500 hover:bg-blue-600 z-20' >
          <Link href={`https://www.myscheme.gov.in/schemes/pmsgmb`} >View More</Link>
        </Button>
      </div>
    </>
  )
}

export default Header