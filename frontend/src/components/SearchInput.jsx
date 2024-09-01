import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../zustand/useConversation'
import usegetConversation from "../hooks/useGetConversations"
import toast from 'react-hot-toast';
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setselectedConversation} = useConversation();
  const {conversations} = usegetConversation();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle search logic here
    if(!search) return;
    if(search.length < 3) {
      toast.error('Search must be at least 3 characters long');
      return;
    }

    const filteredConversations = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));
    if(filteredConversations){
      setselectedConversation(filteredConversations);
      toast.success('Conversation found and selected');
      setSearch("");
      return;
    }else{
      toast.error('No conversation found with that name');
      setSearch("");
      return;
    }
    console.log("Searching for: ", search);
  }
  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full'
        value={search} onChange={ (e) => setSearch(e.target.value)}
         />
      <button className='btn btn-circle bg-sky-500 text-white' type='submit'>
      <IoSearchSharp className='w-6 h-6 outline-none' />
      </button>

    </form>
  )
}

export default SearchInput