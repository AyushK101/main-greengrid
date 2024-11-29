'use client'


export type dataType = {
  power: number,
  current: number,
}

import { useEffect, useMemo, useState } from "react"
import GraphLive from "@/components/GraphLive";
import getSocket from "@/config/socket";
import LogoHome from "@/components/LogoHome";

export default function App() {
  const socket = useMemo( ()=>{
    return getSocket().connect()
  },[]);
  const [isConnected,setIsConnected] = useState(socket.connected);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [transport, setTransport] = useState<string>();
  const [data,setData] = useState<dataType>({current: 1, power: 42}) 

  useEffect( ()=> {

    function onConnect() {
      setIsConnected(true)
      setTransport(socket.io.engine.transport.name)
    }

    function onDisconnect() {
      setIsConnected(false)

    }

    function onData(data: string){
      //@ts-expect-error as json string can't be typed
      if(data.message) {
      //@ts-expect-error as json string can't be typed
        const temp: dataType  = JSON.parse(data.message);
        setData(temp);
      }
   
    }
    // added event listeners : references are stored in memory so clean up 
    socket.on('connect',onConnect)
    socket.on('disconnect',onDisconnect)
    socket.on('data',onData)


    return () => {
      socket.off('connect',onConnect)
      socket.off('disconnect',onDisconnect)
      socket.off('data',onData)
    }
  },[socket])
  
  console.log(isConnected)
  return (
    <div className="">
      <div className=" logohide:hidden">
        <LogoHome/>
        </div>
      { <GraphLive data={data}/>}
         
    </div>
  )
}