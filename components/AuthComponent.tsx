import React from 'react'
import { auth, } from '@/auth'
import { Button } from './ui/button';
import { signIn,signOut } from '@/auth';


const AuthComponent = async () => {
  const session = await auth();
  return (
    <div>
      {
            session && session?.user ?  (
              <form className='min-w-full' action={ async ()=>{
                "use server"
                await signOut({redirectTo: "/"})
              }}>
                <Button type='submit'    className='min-w-full dropdown-button !bg-green-500'><pre></pre>LOGOUT<pre></pre></Button>
              </form>
            ) : (
              <form action={async () => {
                "use server"
                await signIn("github")
              }}>
                <Button type='submit'   className='min-w-full dropdown-button !bg-green-500'><pre> </pre>LOGIN<pre></pre></Button>
              </form>
            ) 
          }
    </div>
  )
}

export default AuthComponent