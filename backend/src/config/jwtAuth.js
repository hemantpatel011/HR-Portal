import jwt from "jsonwebtoken"

export const genAuthToken = (userId,res) => {
 const token = jwt.sign({id:userId}, process.env.JWT_SECRET, {
    expiresIn: "24h",
 });

 res.cokie("token",token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 24*60*60*1000,
 });
}
