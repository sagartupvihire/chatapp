import {create} from 'zustand'

const useConversation = create((set) => ({
        selectedConversation : null,
        selectConversation : (selectedConversation) => set({selectedConversation}),
        messages : [],
        setMessage : (messages) => set({messages}),
}))

export default useConversation;