import React, { useEffect } from 'react'
import { useSocketContext}  from '../context/SocketContext'
import useConversation from '../zustand/useConversation';
export const useListenMessages = () => {
  const {socket} =useSocketContext();
  const {messages , setMessage} = useConversation();

  useEffect( () =>{
    socket?.on('newMessage', (newMessage) => {
      newMessage.shouldShake = true;
      setMessage([...messages, newMessage]);
      
    });
    return () => socket?.off('newMessage');
  },[socket,setMessage, messages])
}
