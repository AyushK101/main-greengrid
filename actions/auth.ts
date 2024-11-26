"use server"

import { signIn, signOut } from "@/auth";

  



export const signinAction =  async ()=>{
  const response  = await signIn('github');
}

export const signoutAction = async ()=> {
  const response = await signOut({redirectTo: "/"})
}

