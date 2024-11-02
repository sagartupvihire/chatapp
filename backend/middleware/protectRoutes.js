import jwt  from'jsonwebtoken'
import User from '../model/user.model.js';
import chalk from 'chalk';

const protectRoutes =async (req, res,next) => {
        try {
            const token = req.cookies.token
            if(!token) {
                return res.status(401).json({error : 'Invalid token'})
            } 
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
           
            if(!decoded) {
                return res.status(401).json({error : 'Invalid'});
            }
            const user  = await User.findById(decoded.userId).select("-password");
            if(!user) {
                return res.status(404).json({error : 'User not found'});
            }
            console.log(chalk.blue("logged in as " + user.username +"💫"));
            
            req.user = user;
            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({ error: 'Not authorized, token is required' });
        }
}

export default protectRoutes;