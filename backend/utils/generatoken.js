import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
const token = jwt.sign({userId}, process.env.JWT_SECRET,{
    expiresIn: '1d',
});
res.cookie("token",token,{
    expires: new Date(Date.now() + 86400000),
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: 'strict',
 
});

};

export default  generateTokenAndSetCookie;