import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessage, selectedConversation } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/message/${selectedConversation._id}`,
                    {
                        method: "GET",
                        headers: {
                            // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				setMessage(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessage]);

	return { messages, loading };
};
export default useGetMessages;