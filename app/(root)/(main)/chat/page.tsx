import ChatGen from "@/components/ChatGen";
import LogoHome from "@/components/LogoHome";


export default function page() {
  return (
    <>
      <div className="min-h-screen min-w-screen flex justify-center items-center bg-chat bg-cover bg-no-repeat ">
      <div className=" logohide:hidden">
        <LogoHome/>
        </div>
            <ChatGen/>
      </div>
    </>
  )
}