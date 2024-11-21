import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github';

// export const { auth, handlers,signIn,signOut,unstable_update} = NextAuth(async (req)=>{
//   console.log("req in NextAuth: ",req);
//   return {
//     providers: [GitHub]
//   }
// })

export const { auth, handlers,signIn,signOut,unstable_update} = NextAuth({
    providers: [GitHub]
})