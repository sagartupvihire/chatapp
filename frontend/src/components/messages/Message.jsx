import React, { Profiler } from 'react'
import useConversation from '../../zustand/useConversation';
import {useAuthContext} from '../../context/AuthContext'
import { extractTime } from '../../utils/extratime';
import { useListenMessages } from '../../hooks/useListenMessages';
const Message = ({message}) => {
  const {authUser} = useAuthContext();
  useListenMessages()
  const {selectedConversation} = useConversation();
  const formMe = message.senderId === authUser._id;
  const chatClassName = formMe ? 'chat-end' : 'chat-start';
  const profilePic = formMe ? authUser.profilePic :selectedConversation?.profilePic;
  const formatedTime = extractTime(message.createdAt)
  const bubbleBgColor = formMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";
console.log("covernser",selectedConversation);
console.log("ssss",message);

  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
            <img src={
                profilePic
            }/>

            </div>
        </div>
        <div className={`chat-bubble text-white ${shakeClass} ${bubbleBgColor} `}>
              {message.message}
    </div>
    <div className='chat-footer opacity-50 text-xs gap-1 items-center flex'>{
      formatedTime
    }</div>
    </div>
  )
}

export default Message;