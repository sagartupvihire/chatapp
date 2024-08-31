import { useState } from "react";
import {toast} from 'react-hot-toast'
import {useAuthContext} from "../context/AuthContext";
const useLogout =() => {
    const [loading , setLoading] = useState(false);
   const {setAuthUser} =useAuthContext()
    const login =  async (username , password) => {

        const success = handleInputErrors({username, password});
		if (!success) return;
        try {
            const res = await fetch("api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, password}),
            })

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            setAuthUser(data)

            localStorage.setItem("chat-user", JSON.stringify(data));
        } catch (error) {
            toast.error(error.message)
            
        }finally {
            setLoading(false);
        }
    }
        
    return {loading, login};
    
};

export default useLogout;

function handleInputErrors({ username, password }) {
	if ( !username || !password) {
    console.log(username, password); // for debugging purposes only
		toast.error("Please fill in all fields");
		return false;
	}


	

	return true;
}