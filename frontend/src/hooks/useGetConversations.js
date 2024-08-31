import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);
	console.log(conversations);
	
	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
          
			try {
				const res = await fetch('/api/users',{
					method: 'GET',
                    headers: {
                        // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                    },
				});
				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				console.log("data",data);
				
				setConversations(data);
				
                 
                
			} catch (error) {
				console.log(error);
				
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getConversations();
	}, []);

	return { loading, conversations };
};
export default useGetConversations;