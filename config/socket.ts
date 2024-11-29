'use client'
import io, {Socket} from 'socket.io-client'


const URL = process.env.NODE_ENV === 'production' ? 'http://localhost:5000' : 'http://localhost:5000';

console.log(process.env.NODE_ENV)
console.log(process.env.TZ);

console.log("URL: ",URL)
let socket:Socket;
console.log(URL)
export default function getSocket() {
  if(socket) return socket;

  socket =  io(URL,{
    autoConnect: false
  })
  return socket
}
