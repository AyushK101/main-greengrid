import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'


const HeaderDropdown = () => {
  return (
    <div className="button-util bg-red-50">
      <div>
        <DropdownMenu >
          <DropdownMenuTrigger className='flex'>
            <ChevronDown/> DASHBOARD
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Services</DropdownMenuLabel>
            <DropdownMenuSeparator />
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
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default HeaderDropdown