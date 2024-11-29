import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Menu } from 'lucide-react'
import AuthComponent from './AuthComponent'

const MobileDropdown = async () => {
  return (
    <div>
      <nav className='lg:flex flex-col justify-evenly items-center gap-x-4 md:grid md:grid-cols-2 text-center '>
          <DropdownMenu >
            <DropdownMenuTrigger><Menu className="text-white" size={55} /></DropdownMenuTrigger>
            <DropdownMenuContent>
            {/* <DropdownMenuItem className='min-w-full'>
                <Link href={'chat'}>
                <Button type='submit' size={'dropdown'} >Energy Analytics</Button>
              </Link>
            </DropdownMenuItem> */}
            
            <DropdownMenuItem >
                <Link href={'/predict'}>
                <Button type='submit'   className=' dropdown-button !bg-green-500 mx-auto '><pre> </pre>predict<pre></pre></Button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem >
                <Link href={'/solar'}>
                <Button type='submit'   className=' dropdown-button !bg-green-500 mx-auto '>Solar Calc</Button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem >
                <Link href={'/chat'}>
                <Button type='submit'   className=' dropdown-button !bg-green-500 mx-auto '><pre></pre>Chatbot<pre></pre></Button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem >
                <Link href={'/visual'}>
                <Button type='submit'   className='min-w-full dropdown-button !bg-green-500'><pre></pre>visulalize<pre></pre></Button>
              </Link>
            </DropdownMenuItem>


           
            <DropdownMenuItem>
              <AuthComponent />
            </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
         
          
        {/* <ModeToggle /> */}
        </nav>
    </div>
  )
}

export default MobileDropdown