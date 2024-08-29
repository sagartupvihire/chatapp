import User from "../model/user.model.js";

export const getUserForsidebar = async (req,res) => {
    try {
        const logedInUserId = req.user._id;
        const filteredUser = await User.find({_id:{$ne:logedInUserId}}).select("-password")
        res.json(filteredUser);
    } catch (error) {
        console.error("Error in getUserForsidebar");
        res.status(404).json({error: error.message});
    }
};