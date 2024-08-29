import User from "../model/user.model.js";
import brcypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generatoken.js";
export const signup = async (req, res) => {
    try {
       
        
        const { fullname, username, password, comfirmPassword, gender } = req.body;
        console.log(fullname, username, password, comfirmPassword, gender);
        
        if (!fullname ||!username ||!password ||!comfirmPassword ||!gender) {
            return res.status(400).json({ error: "Please fill all fields" });
        }
        if (password !== comfirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

        const user = await User.findOne({ username });

        if (user) {
            return res.status(403).json({ error: "username already exists" });
        }

        const salt = await brcypt.genSalt(10);
        const hashedpassword = await brcypt.hash(password, salt);
        // avatar-placeholder.iran.liare.run
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const boyProfileGirl = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const newUser = new User({
            fullname,
            username, password:hashedpassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : boyProfileGirl
        });

       
        if (newUser) {
			// Generate JWT token here
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullname,
				username: newUser.username,
				profilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}

    } catch (error) {
        console.log("Error in signup controller" + error);
        res.status(500).json({ error: "Server Error" });

    }
}
export const login = async (req, res) => {
    try{
        // Extract username and password from request body
        const { username, password } = req.body;
        const user = await User.findOne({ username});
        const isPasswordCorrect = await brcypt.compare(password, user?.password || " ");
        if (!user || !isPasswordCorrect) {
            return res.status(401).json({ error: "Invalid username or password" });
        }
        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullname,
            username: user.username,
            profilePic: user.profilePic,
         });
    }catch (error) {
        console.log("Error in login controller" + error);
        res.status(500).json({ error: "Server Error" });
    }
 }
export const logout = (req, res) => {
    try{
        res.cookie("token", "", {maxage: 0});
        res.json({ message: "Logged out successfully" });
    }catch(e){
        console.log("Error in logout controller" + e);
        res.status(500).json({ error: "Server Error" });
    }
 }