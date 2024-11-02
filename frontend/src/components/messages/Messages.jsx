import React, { useEffect, useRef } from 'react'
import Message from './message.jsx'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessagesSkeletons'
const Messages = () => {
  const { messages, loading } = useGetMessages();
  
  const lastMessageRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });

    }, 1000);
  }, [messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
          <Message message={message} />
        </div>
      ))}
      {loading &&
        [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && <div className='text-center'>Send a message to start conversation</div>}
    </div>
  )
}

export default Messages