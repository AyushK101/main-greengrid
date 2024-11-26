import React from 'react'
import { auth, } from '@/auth'
import { Button } from './ui/button';
import { signinAction, signoutAction } from '@/actions/auth';


const AuthComponent = async () => {
  const session = await auth();
  return (
    <div>
      {
            session && session?.user ?  (
              <form className='min-w-full' action={signoutAction}>
                <Button type='submit' size={'lg'}   className='!bg-green-400'>LOGOUT</Button>
              </form>
            ) : (
              <form action={signinAction}>
                <Button type='submit' size={'lg'}  className='!bg-green-400'>LOGIN</Button>
              </form>
            ) 
          }
    </div>
  )
}

export default AuthComponent